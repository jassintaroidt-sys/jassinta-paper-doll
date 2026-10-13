#!/usr/bin/env node
// Audit cakupan: membandingkan asset-manifest.csv dan docs/03-coverage-matrix.csv dengan isi repo.
//   node scripts/check-coverage.mjs                 ringkasan semua
//   node scripts/check-coverage.mjs --owner P06     hanya satu prompt
//   node scripts/check-coverage.mjs --strict        exit 1 bila ada aset hilang/placeholder atau bagian matriks 'todo'
//   node scripts/check-coverage.mjs --write         tulis status ke asset-manifest.csv
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readCsv, writeCsv } from './csv.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const owner = args.includes('--owner') ? args[args.indexOf('--owner') + 1] : null;
const strict = args.includes('--strict'); const write = args.includes('--write');

const mpath = join(root, 'asset-manifest.csv');
const manifest = readCsv(mpath);
const cols = Object.keys(manifest[0]);
const state = (r) => {
  const base = r.file.replace(/\.(webp|svg|png)$/i, '');
  const dir = join(root, 'public', 'assets', r.folder);
  const target = r.reuse_of ? r.reuse_of.replace(/\.(webp|svg|png)$/i, '') : base;
  const tdir = r.reuse_of ? join(root, 'public', 'assets', 'world') : dir;
  const cands = [join(dir, r.file), join(tdir, `${target}.webp`), join(tdir, `${target}.svg`), join(root, 'public', r.file)];
  const hit = cands.find((p) => existsSync(p));
  if (!hit) return 'missing';
  if (hit.endsWith('.svg') && readFileSync(hit, 'utf8').includes('data-placeholder="true"')) return 'placeholder';
  return 'done';
};
const by = {}; let bad = 0;
for (const r of manifest) {
  const s = state(r); if (write) r.status = s;
  if (owner && r.owner_prompt !== owner) continue;
  const k = r.owner_prompt || '-'; by[k] ??= { done: 0, placeholder: 0, missing: 0 }; by[k][s]++;
  if (s !== 'done') bad++;
}
console.log('ASET (asset-manifest.csv)'); console.table(by);
if (write) { writeCsv(mpath, manifest, cols); console.log('status ditulis ke asset-manifest.csv'); }

const mx = readCsv(join(root, 'docs', '03-coverage-matrix.csv'));
const mby = {}; let open = 0;
for (const r of mx) {
  const ps = r.prompt.split(',');
  if (owner && !ps.some((p) => p === owner || (p.includes('-') && owner >= p.split('-')[0] && owner <= p.split('-')[1]))) continue;
  mby[r.prompt] ??= { selesai: 0, todo: 0 };
  if (r.status === 'done') mby[r.prompt].selesai++; else { mby[r.prompt].todo++; open++; }
}
console.log('\nMATRIKS BAGIAN BIBLE (docs/03-coverage-matrix.csv)'); console.table(mby);
console.log(`aset belum final: ${bad} | bagian bible belum ditandai done: ${open}`);
if (strict && (bad || open)) process.exit(1);
