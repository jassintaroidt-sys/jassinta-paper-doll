#!/usr/bin/env node
// Membuat placeholder SVG untuk setiap baris di asset-manifest.csv agar build tidak pernah patah
// dan kemajuan produksi bisa dilacak. Placeholder BUKAN aset akhir: aset akhir dibuat dengan kode
// (scripts/generate-assets.mjs + src/components/paper). Placeholder tidak pernah menimpa aset asli.
//
// Pemakaian:
//   node scripts/make-placeholders.mjs                 semua baris
//   node scripts/make-placeholders.mjs --owner P06     hanya aset milik prompt P06
//   node scripts/make-placeholders.mjs --folder doll   hanya satu folder
//   node scripts/make-placeholders.mjs --force         timpa placeholder lama (aset asli tetap aman)
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readCsv } from './csv.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const opt = (n) => { const i = args.indexOf(`--${n}`); return i >= 0 ? args[i + 1] : null; };
const force = args.includes('--force');
const owner = opt('owner'); const only = opt('folder');

const hex = (s) => (s?.match(/#[0-9A-Fa-f]{6}/) ?? ['#FFFDF9'])[0];
const ratio = (p) => { const m = p?.match(/(\d+(?:\.\d+)?):(\d+(?:\.\d+)?)\s*$/) ?? p?.match(/,\s*(\d+(?:\.\d+)?):(\d+(?:\.\d+)?)/); return m ? [Number(m[1]), Number(m[2])] : [1, 1]; };
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');

const rows = readCsv(join(root, 'asset-manifest.csv'));
let made = 0, kept = 0, skipped = 0;
for (const r of rows) {
  if (owner && r.owner_prompt !== owner) continue;
  if (only && r.folder !== only) continue;
  const base = r.file.replace(/\.(webp|svg|png)$/i, '');
  const dir = join(root, 'public', 'assets', r.folder);
  const out = join(dir, `${base}.svg`);
  if (r.reuse_of) { skipped++; continue; }               // dipakai ulang dari berkas lain
  if (existsSync(join(dir, `${base}.webp`))) { kept++; continue; }
  if (existsSync(out) && !readFileSync(out, 'utf8').includes('data-placeholder="true"')) { kept++; continue; }
  if (existsSync(out) && !force) { kept++; continue; }
  const [rw, rh] = ratio(r.prompt_ref);
  const W = 400, H = Math.max(40, Math.round((W * rh) / rw));
  const fill = hex(`${r.spec_color_material} ${r.prompt_ref}`);
  mkdirSync(dir, { recursive: true });
  writeFileSync(out, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" data-placeholder="true" data-asset-id="${esc(r.id)}">
  <rect x="6" y="6" width="${W - 12}" height="${H - 12}" rx="14" fill="${fill}" stroke="#1B1017" stroke-opacity=".35" stroke-dasharray="8 6"/>
  <text x="${W / 2}" y="${H / 2}" text-anchor="middle" font-family="monospace" font-size="14" fill="#1B1017">${esc(r.id)}</text>
  <text x="${W / 2}" y="${H / 2 + 18}" text-anchor="middle" font-family="monospace" font-size="10" fill="#1B1017" opacity=".6">${esc(base.slice(0, 44))}</text>
</svg>\n`);
  made++;
}
console.log(`placeholder dibuat: ${made} | dilewati karena sudah asli/ada: ${kept} | dipakai-ulang: ${skipped}`);
