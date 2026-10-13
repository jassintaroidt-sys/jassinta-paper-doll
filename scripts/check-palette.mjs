#!/usr/bin/env node
/**
 * check-palette.mjs — Audit Palet Warna & Uji Siluet (P04)
 *
 * Memeriksa kesesuaian aset terhadap Design Bible Visual:
 * 1. Membandingkan warna tiap aset terhadap tabel token hex DV (toleransi ΔE ≤ 8).
 * 2. Memeriksa aturan maksimal 3 nada per benda (DV 2.2).
 * 3. Memeriksa keterbacaan uji siluet (DV 2.5: siluet kontras & terbaca).
 *
 * Pemakaian:
 *   node scripts/check-palette.mjs
 *   node scripts/check-palette.mjs --strict
 *   node scripts/check-palette.mjs --owner P02
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readCsv } from './csv.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const strict = args.includes('--strict');
const ownerFilter = (() => { const i = args.indexOf('--owner'); return i >= 0 ? args[i + 1] : null; })();

// ─────────────────────────────────────────────────────────────
// Tabel Token Hex Resmi Design Bible Visual (DV 2.2, 5.2, 9.1)
// ─────────────────────────────────────────────────────────────
const DV_HEX_TABLE = [
  // Kertas & Dasar
  '#FFFDF9', '#FFFFFF', '#F0E8D8', '#2A1F2A', '#1B1017', '#2A0F2E', '#4B1D4F',
  // Doll
  '#E8B795', '#1F1F1F', '#2E2E2E', '#BDBDBD', '#8A8A8A', '#E9A39B', '#B5645F', '#3A2A24', '#D49A7B',
  // Warna Babak / Chapter
  '#A8E6CF', '#FFF1A8', '#BFE3F5', '#FFD3B0', '#FFD6E8', '#E8A5B8', '#F3E3B8',
  '#DA9AF2', '#F6D76B', '#A9C4A0', '#D9D3D6', '#C8B4F0', '#FFB38A', '#A7D8F5',
  // Aksen & Brand
  '#E5173F', '#FF2E93', '#7A2E5C', '#066838', '#D4A64A', '#C9CCD5', '#5A3A2E',
  '#7A4A32', '#B9B8CC', '#BFA8E5', '#D4C1F5', '#8FB8E8', '#FF8DC7', '#F7CAD0',
  '#F8F0DC', '#8A6A4F', '#A98BDA', '#E5C8CA', '#D9A87A', '#3A6B52', '#7A7A7A',
];

// ─────────────────────────────────────────────────────────────
// Color Science: sRGB -> CIE Lab & Delta E
// ─────────────────────────────────────────────────────────────
function hexToRgb(hex) {
  const clean = hex.replace('#', '');
  const num = parseInt(clean, 16);
  if (clean.length === 6) {
    return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
  }
  return [255, 253, 249];
}

function rgbToLab(r, g, b) {
  let [R, G, B] = [r / 255, g / 255, b / 255].map((v) =>
    v > 0.04045 ? Math.pow((v + 0.055) / 1.055, 2.4) : v / 12.92
  );
  // Observer 2°, Illuminant D65
  const X = (R * 0.4124 + G * 0.3576 + B * 0.1805) / 0.95047;
  const Y = (R * 0.2126 + G * 0.7152 + B * 0.0722) / 1.00000;
  const Z = (R * 0.0193 + G * 0.1192 + B * 0.9505) / 1.08883;

  const f = (t) => (t > 0.008856 ? Math.cbrt(t) : 7.787 * t + 16 / 116);
  const fx = f(X), fy = f(Y), fz = f(Z);

  return [116 * fy - 16, 500 * (fx - fy), 200 * (fy - fz)];
}

function deltaE(lab1, lab2) {
  return Math.sqrt(
    Math.pow(lab1[0] - lab2[0], 2) +
    Math.pow(lab1[1] - lab2[1], 2) +
    Math.pow(lab1[2] - lab2[2], 2)
  );
}

function findClosestDvColor(hex) {
  const [r, g, b] = hexToRgb(hex);
  const targetLab = rgbToLab(r, g, b);

  let minDe = Infinity;
  let closestHex = DV_HEX_TABLE[0];

  for (const dvHex of DV_HEX_TABLE) {
    const [dr, dg, db] = hexToRgb(dvHex);
    const dvLab = rgbToLab(dr, dg, db);
    const dE = deltaE(targetLab, dvLab);
    if (dE < minDe) {
      minDe = dE;
      closestHex = dvHex;
    }
  }

  return { closestHex, deltaE: minDe };
}

// ─────────────────────────────────────────────────────────────
// Ekstraksi Warna dari Definisi / SVG
// ─────────────────────────────────────────────────────────────
function extractColorsFromRow(row, svgContent = '') {
  const found = new Set();
  const text = `${row.spec_color_material || ''} ${row.prompt_ref || ''} ${svgContent}`;
  const matches = text.match(/#[0-9A-Fa-f]{6}/g) || [];
  for (const m of matches) {
    found.add(m.toUpperCase());
  }
  return Array.from(found);
}

// ─────────────────────────────────────────────────────────────
// Uji Siluet (Kontras Siluet)
// ─────────────────────────────────────────────────────────────
function calculateLuminance(r, g, b) {
  const [R, G, B] = [r, g, b].map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}

function testSilhouetteContrast(hex, bgHex = '#FFFDF9') {
  const [r1, g1, b1] = hexToRgb(hex);
  const [r2, g2, b2] = hexToRgb(bgHex);
  const l1 = calculateLuminance(r1, g1, b1);
  const l2 = calculateLuminance(r2, g2, b2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  const ratio = (lighter + 0.05) / (darker + 0.05);
  // Siluet lolos jika kontras cukup untuk dikenali bentuknya
  return { ratio, pass: ratio >= 1.5 };
}

// ─────────────────────────────────────────────────────────────
// Main Execution
// ─────────────────────────────────────────────────────────────
const rows = readCsv(join(root, 'asset-manifest.csv'));

const results = [];
let passCount = 0;
let warnCount = 0;
let failCount = 0;

console.log('[check-palette] Memeriksa palet warna & uji siluet seluruh aset...');

for (const row of rows) {
  if (ownerFilter && row.owner_prompt !== ownerFilter) continue;
  if (row.reuse_of || row.kind === 'css-only') continue;

  const base = row.file.replace(/\.(webp|svg|png)$/i, '');
  const svgPath = join(root, 'public', 'assets', row.folder, `${base}.svg`);
  const svgContent = existsSync(svgPath) ? readFileSync(svgPath, 'utf8') : '';

  const colors = extractColorsFromRow(row, svgContent);
  const primaryColor = colors[0] || '#FFFDF9';

  // 1. Cek Delta E terhadap tabel DV (toleransi <= 8)
  const match = findClosestDvColor(primaryColor);
  const deltaEPass = match.deltaE <= 8.0;

  // 2. Cek Maksimal Tiga Nada (DV 2.2)
  // Menghitung nada warna esensial (abaikan putih netral dan hitam bayangan)
  const nonNeutralColors = colors.filter((c) => c !== '#FFFFFF' && c !== '#FFFDF9' && c !== '#000000');
  const toneCount = nonNeutralColors.length || 1;
  const tonePass = toneCount <= 3;

  // 3. Uji Siluet
  const sil = testSilhouetteContrast(primaryColor, '#FFFDF9');

  const overallPass = deltaEPass && tonePass && sil.pass;
  if (overallPass) {
    passCount++;
  } else if (!deltaEPass) {
    failCount++;
  } else {
    warnCount++;
  }

  results.push({
    id: row.id,
    file: row.file,
    owner: row.owner_prompt,
    primaryColor,
    closestDvColor: match.closestHex,
    deltaE: parseFloat(match.deltaE.toFixed(2)),
    deltaEPass,
    toneCount,
    tonePass,
    contrastRatio: parseFloat(sil.ratio.toFixed(2)),
    silhouettePass: sil.pass,
    status: overallPass ? 'PASS' : (deltaEPass ? 'WARN' : 'FAIL'),
  });
}

console.log(`\nHasil Pemeriksaan Palet & Siluet:`);
console.log(`  ✓ PASS (ΔE ≤ 8, ≤3 nada, siluet kontras) : ${passCount}`);
console.log(`  ⚠ WARN (ada deviasi nada/kontras minor)   : ${warnCount}`);
console.log(`  ✗ FAIL (warna keluar dari tabel DV > 8)   : ${failCount}`);

const reportDir = join(root, 'docs', 'evidence');
mkdirSync(reportDir, { recursive: true });
writeFileSync(
  join(reportDir, 'palette-check-report.json'),
  JSON.stringify(
    {
      timestamp: new Date().toISOString(),
      summary: { total: results.length, pass: passCount, warn: warnCount, fail: failCount },
      results: results.slice(0, 100), // ringkasan sample 100 baris
    },
    null,
    2
  ),
  'utf8'
);
console.log(`  📋 Laporan tersimpan di docs/evidence/palette-check-report.json\n`);

if (strict && failCount > 0) {
  process.exit(1);
}
