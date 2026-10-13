#!/usr/bin/env node
// Gerbang kemiripan doll: membandingkan reference/doll-55/<file> dengan public/assets/doll/<file>.
// Mengukur (1) IoU siluet, (2) selisih warna rata-rata ΔE di area yang sama-sama terisi,
// (3) selisih proporsi (rasio lebar/tinggi) dan membuat contact sheet "referensi | hasil | selisih"
// supaya kamu cukup melihat beberapa gambar, bukan 55 berkas satu per satu.
//
//   node scripts/compare-doll.mjs --inventory          cocokkan nama berkas referensi vs manifest
//   node scripts/compare-doll.mjs                      bandingkan semua pasangan + buat sheet
//   node scripts/compare-doll.mjs --only doll_01       filter nama berkas
//   node scripts/compare-doll.mjs --strict             exit 1 bila ada yang gagal
//   opsi: --iou 0.93 --de 7 --ratio 0.04 --cell 200
import { existsSync, mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { readCsv } from './csv.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const opt = (n, d) => { const i = args.indexOf(`--${n}`); return i >= 0 ? args[i + 1] : d; };
const IOU_MIN = Number(opt('iou', 0.93)), DE_MAX = Number(opt('de', 7)), RATIO_MAX = Number(opt('ratio', 0.04));
const CELL_H = Number(opt('cell', 200)), CELL_W = Math.round((CELL_H * 2) / 3);
const only = opt('only', null);
const refDir = join(root, 'reference', 'doll-55'), genDir = join(root, 'public', 'assets', 'doll');
const outDir = join(root, 'docs', 'evidence', 'doll-compare');
const exts = /\.(webp|png|svg)$/i;
const stem = (f) => f.replace(exts, '');
const listDir = (d) => (existsSync(d) ? readdirSync(d).filter((f) => exts.test(f)) : []);

if (args.includes('--inventory')) {
  const manifest = readCsv(join(root, 'asset-manifest.csv')).filter((r) => r.folder === 'doll').map((r) => stem(r.file));
  const refs = listDir(refDir).map(stem);
  const miss = manifest.filter((m) => !refs.includes(m));
  const extra = refs.filter((r) => !manifest.includes(r));
  console.log(`manifest doll: ${manifest.length} | referensi di reference/doll-55: ${refs.length}`);
  console.log(`ada di manifest tapi tidak punya referensi (${miss.length}):`); miss.forEach((m) => console.log('  -', m));
  console.log(`referensi yang tidak ada di manifest (${extra.length}):`); extra.forEach((m) => console.log('  +', m));
  process.exit(0);
}

const W = 512, H = 768;
async function load(path) {
  const img = sharp(path).ensureAlpha();
  const trimmed = await img.trim({ background: { r: 0, g: 0, b: 0, alpha: 0 }, threshold: 10 }).toBuffer({ resolveWithObject: true });
  const raw = await sharp(trimmed.data).resize(W, H, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).ensureAlpha().raw().toBuffer();
  return { raw, ratio: trimmed.info.width / trimmed.info.height };
}
const srgb2lab = (r, g, b) => {
  const f = (v) => { v /= 255; return v > 0.04045 ? ((v + 0.055) / 1.055) ** 2.4 : v / 12.92; };
  const [R, G, B] = [f(r), f(g), f(b)];
  const X = (R * 0.4124 + G * 0.3576 + B * 0.1805) / 0.95047, Y = R * 0.2126 + G * 0.7152 + B * 0.0722, Z = (R * 0.0193 + G * 0.1192 + B * 0.9505) / 1.08883;
  const t = (v) => (v > 0.008856 ? Math.cbrt(v) : 7.787 * v + 16 / 116);
  return [116 * t(Y) - 16, 500 * (t(X) - t(Y)), 200 * (t(Y) - t(Z))];
};

const pairs = listDir(refDir).filter((f) => !only || f.includes(only));
if (!pairs.length) { console.error('Tidak ada referensi di reference/doll-55. Salin 55 aset doll ke sana.'); process.exit(2); }
mkdirSync(outDir, { recursive: true });
const results = [], cells = [];
for (const rf of pairs) {
  const name = stem(rf);
  const gf = listDir(genDir).find((g) => stem(g) === name && !g.endsWith('.svg')) ?? listDir(genDir).find((g) => stem(g) === name);
  if (!gf) { results.push({ name, status: 'MISSING' }); continue; }
  const gpath = join(genDir, gf);
  if (gf.endsWith('.svg') && (await import('node:fs')).readFileSync(gpath, 'utf8').includes('data-placeholder="true"')) { results.push({ name, status: 'PLACEHOLDER' }); continue; }
  const [a, b] = await Promise.all([load(join(refDir, rf)), load(gpath)]);
  let inter = 0, uni = 0, deSum = 0, deN = 0;
  const diff = Buffer.alloc(W * H * 4);
  for (let i = 0; i < W * H; i++) {
    const o = i * 4, ma = a.raw[o + 3] > 10, mb = b.raw[o + 3] > 10;
    if (ma && mb) { inter++; uni++;
      const la = srgb2lab(a.raw[o], a.raw[o + 1], a.raw[o + 2]), lb = srgb2lab(b.raw[o], b.raw[o + 1], b.raw[o + 2]);
      const de = Math.hypot(la[0] - lb[0], la[1] - lb[1], la[2] - lb[2]); deSum += de; deN++;
      const g = Math.min(255, 255 - de * 6); diff.set([g, g, g, 255], o);
    } else if (ma || mb) { uni++; diff.set(ma ? [230, 40, 40, 255] : [40, 90, 230, 255], o); }   // merah = hanya di referensi, biru = hanya di hasil
    else diff.set([255, 255, 255, 255], o);
  }
  const iou = uni ? inter / uni : 0, de = deN ? deSum / deN : 99, dRatio = Math.abs(a.ratio - b.ratio) / a.ratio;
  const pass = iou >= IOU_MIN && de <= DE_MAX && dRatio <= RATIO_MAX;
  results.push({ name, status: pass ? 'PASS' : 'FAIL', iou: +iou.toFixed(3), deltaE: +de.toFixed(2), ratioDiff: +dRatio.toFixed(3) });
  const flat = async (raw) => sharp(raw, { raw: { width: W, height: H, channels: 4 } }).flatten({ background: '#fff' }).resize(CELL_W, CELL_H).png().toBuffer();
  const dbuf = await sharp(diff, { raw: { width: W, height: H, channels: 4 } }).resize(CELL_W, CELL_H).png().toBuffer();
  cells.push({ name, pass, iou, de, imgs: [await flat(a.raw), await flat(b.raw), dbuf] });
}

// contact sheet: 4 pasangan per baris, 4 baris per lembar
const PER_ROW = 4, ROWS = 4, PAIR_W = CELL_W * 3 + 8, LABEL = 16;
for (let s = 0; s * PER_ROW * ROWS < cells.length; s++) {
  const chunk = cells.slice(s * PER_ROW * ROWS, (s + 1) * PER_ROW * ROWS);
  const rows = Math.ceil(chunk.length / PER_ROW);
  const comps = [];
  chunk.forEach((c, i) => {
    const x = (i % PER_ROW) * PAIR_W, y = Math.floor(i / PER_ROW) * (CELL_H + LABEL);
    c.imgs.forEach((buf, k) => comps.push({ input: buf, left: x + k * CELL_W, top: y + LABEL }));
    const label = `${c.pass ? 'OK' : 'GAGAL'} ${c.name.slice(0, 26)} iou ${c.iou.toFixed(2)} dE ${c.de.toFixed(1)}`.replace(/&/g, '&amp;');
    comps.push({ input: Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${PAIR_W}" height="${LABEL}"><rect width="100%" height="100%" fill="${c.pass ? '#d9f2e3' : '#f9d6d6'}"/><text x="3" y="12" font-family="monospace" font-size="10" fill="#111">${label}</text></svg>`), left: x, top: y });
  });
  await sharp({ create: { width: PAIR_W * PER_ROW, height: rows * (CELL_H + LABEL), channels: 3, background: '#ffffff' } }).composite(comps).png().toFile(join(outDir, `sheet-${String(s + 1).padStart(2, '0')}.png`));
}
writeFileSync(join(outDir, 'report.json'), JSON.stringify({ thresholds: { IOU_MIN, DE_MAX, RATIO_MAX }, results }, null, 2));
console.table(results);
const bad = results.filter((r) => r.status !== 'PASS');
console.log(`lulus ${results.length - bad.length}/${results.length}. Sheet: docs/evidence/doll-compare/sheet-*.png (kolom: referensi | hasil | selisih; merah = hanya di referensi, biru = hanya di hasil)`);
if (args.includes('--strict') && bad.length) process.exit(1);
