#!/usr/bin/env node
/**
 * generate-assets.mjs — Pabrik Aset Jassinta Paper Doll Journey (P04)
 *
 * Membaca asset-manifest.csv, merender SVG per definisi deklaratif, lalu
 * mengonversinya ke WebP (1× dan 2×) via sharp.
 *
 * Pemakaian:
 *   npm run assets                         semua aset
 *   npm run assets -- --owner P02          hanya aset milik prompt P02 (12 kit)
 *   npm run assets -- --owner P03          hanya aset milik prompt P03 (56 doll)
 *   npm run assets -- --id <id>            hanya satu ID
 *   npm run assets -- --folder <folder>    hanya satu folder
 *   npm run assets -- --only-missing       hanya yang belum ada
 *
 * Aturan (Rule 30):
 * - Nama file persis asset-manifest.csv
 * - Baris reuse_of -> tolak/lewati, jangan buat file baru
 * - Baris kind=css-only -> tolak/lewati, komponen runtime
 * - Tidak ada Math.random() — seed dari hash(ID)
 * - Tulis log ke docs/evidence/assets-log.json
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { readCsv } from './csv.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const opt = (n) => { const i = args.indexOf(`--${n}`); return i >= 0 ? args[i + 1] : null; };
const ownerFilter = opt('owner');
const idFilter = opt('id');
const folderFilter = opt('folder');
const onlyMissing = args.includes('--only-missing');

// ─────────────────────────────────────────────────────────────
// PRNG deterministik: mulberry32 seeded dari hash(ID)
// ─────────────────────────────────────────────────────────────
function hashId(id) {
  const h = createHash('sha256').update(id).digest('hex');
  return parseInt(h.substring(0, 8), 16);
}

function createPRNG(seed) {
  let s = Math.floor(seed) >>> 0;
  return function () {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ─────────────────────────────────────────────────────────────
// Generator Kit P02 (Persis DF 9.3 & REV C)
// ─────────────────────────────────────────────────────────────

function generatePaperTileSvg(isDark = false) {
  const prng = createPRNG(isDark ? 9999 : 4242);
  const size = 512;
  const fibers = [];
  const specks = [];
  const fiberCount = 650;
  const fiberColor = isDark ? 'rgba(255,255,255,0.40)' : 'rgba(27,16,23,0.12)';
  const speckColor = isDark ? 'rgba(255,255,255,0.25)' : 'rgba(138,106,79,0.24)';

  for (let i = 0; i < fiberCount; i++) {
    const x = prng() * size;
    const y = prng() * size;
    const len = 4 + prng() * 8;
    const angle = prng() * Math.PI * 2;
    const curve = (prng() - 0.5) * 4;
    const x2 = x + Math.cos(angle) * len;
    const y2 = y + Math.sin(angle) * len;
    const cx = (x + x2) / 2 + Math.cos(angle + Math.PI / 2) * curve;
    const cy = (y + y2) / 2 + Math.sin(angle + Math.PI / 2) * curve;
    fibers.push(
      `<path d="M ${x.toFixed(1)} ${y.toFixed(1)} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}" stroke="${fiberColor}" stroke-width="0.7" fill="none" stroke-linecap="round"/>`
    );
  }

  const speckCount = 290;
  for (let i = 0; i < speckCount; i++) {
    const x = prng() * size;
    const y = prng() * size;
    const r = (0.4 + prng() * 0.7).toFixed(1);
    specks.push(`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}" fill="${speckColor}"/>`);
    if (prng() < 0.15) {
      const clusterSize = 2 + Math.floor(prng() * 3);
      for (let c = 0; c < clusterSize; c++) {
        const cx = x + (prng() - 0.5) * 6;
        const cy = y + (prng() - 0.5) * 6;
        const cr = (0.3 + prng() * 0.5).toFixed(1);
        specks.push(`<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${cr}" fill="${speckColor}"/>`);
      }
    }
  }

  const bg = isDark ? '#2A0F2E' : '#FFFDF9';
  return `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>
    <filter id="mottling" x="0%" y="0%" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="3" result="noise" seed="${isDark ? 888 : 777}"/>
      <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.05 0"/>
    </filter>
  </defs>
  <rect width="${size}" height="${size}" fill="${bg}"/>
  <rect width="${size}" height="${size}" fill="${isDark ? '#FFFFFF' : '#000000'}" filter="url(#mottling)"/>
  <g>${fibers.join('\n')}</g>
  <g>${specks.join('\n')}</g>
</svg>`.trim();
}

function generateGrainSvg(isDark = false) {
  const size = 220;
  const alpha = isDark ? '0.05' : '0.08';
  return `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <filter id="grain">
    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" result="noise" seed="${isDark ? 123 : 321}"/>
    <feColorMatrix type="matrix" values="0 0 0 0 ${isDark ? 1 : 0}  0 0 0 0 ${isDark ? 1 : 0}  0 0 0 0 ${isDark ? 1 : 0}  0 0 0 ${alpha} 0"/>
  </filter>
  <rect width="${size}" height="${size}" fill="none"/>
  <rect width="${size}" height="${size}" filter="url(#grain)"/>
</svg>`.trim();
}

function generateDeckleWallMaskSvg() {
  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" preserveAspectRatio="none">
  <defs>
    <filter id="deckleDisplace">
      <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="3" result="turb"/>
      <feDisplacementMap in="SourceGraphic" in2="turb" scale="8" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
  </defs>
  <rect x="0" y="0" width="980" height="1000" fill="#FFFFFF" filter="url(#deckleDisplace)"/>
</svg>`.trim();
}

function generatePitaTepiSvg() {
  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 1000" preserveAspectRatio="none">
  <rect x="1" y="0" width="8" height="1000" fill="#E5173F" fill-opacity="0.55"/>
  <line x1="1" y1="0" x2="1" y2="1000" stroke="#FFFFFF" stroke-opacity="0.3" stroke-width="0.8"/>
  <line x1="9" y1="0" x2="9" y2="1000" stroke="#1B1017" stroke-opacity="0.15" stroke-width="0.8"/>
</svg>`.trim();
}

function generateWashiPatternsSvg() {
  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 120">
  <defs>
    <pattern id="washiDot" width="16" height="16" patternUnits="userSpaceOnUse">
      <circle cx="8" cy="8" r="3" fill="#FF8DC7" fill-opacity="0.4"/>
    </pattern>
    <pattern id="washiStripe" width="16" height="16" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="0" y2="16" stroke="#BFA8E5" stroke-width="4" stroke-opacity="0.45"/>
    </pattern>
    <pattern id="washiGrid" width="12" height="12" patternUnits="userSpaceOnUse">
      <rect width="12" height="12" fill="none" stroke="#A8E6CF" stroke-width="1" stroke-opacity="0.5"/>
    </pattern>
  </defs>
  <g transform="translate(10, 10) rotate(-3)">
    <rect width="110" height="28" fill="#FFFDF9" fill-opacity="0.85" rx="1"/>
    <rect width="110" height="28" fill="url(#washiDot)" rx="1"/>
    <path d="M 0 0 L 3 7 L 0 14 L 3 21 L 0 28" fill="none" stroke="#FF8DC7" stroke-width="1.2"/>
    <path d="M 110 0 L 107 7 L 110 14 L 107 21 L 110 28" fill="none" stroke="#FF8DC7" stroke-width="1.2"/>
  </g>
  <g transform="translate(140, 15) rotate(4)">
    <rect width="110" height="28" fill="#FFFDF9" fill-opacity="0.85" rx="1"/>
    <rect width="110" height="28" fill="url(#washiStripe)" rx="1"/>
    <path d="M 0 0 L 3 7 L 0 14 L 3 21 L 0 28" fill="none" stroke="#BFA8E5" stroke-width="1.2"/>
    <path d="M 110 0 L 107 7 L 110 14 L 107 21 L 110 28" fill="none" stroke="#BFA8E5" stroke-width="1.2"/>
  </g>
  <g transform="translate(270, 10) rotate(-2)">
    <rect width="110" height="28" fill="#FFFDF9" fill-opacity="0.85" rx="1"/>
    <rect width="110" height="28" fill="url(#washiGrid)" rx="1"/>
    <path d="M 0 0 L 3 7 L 0 14 L 3 21 L 0 28" fill="none" stroke="#A8E6CF" stroke-width="1.2"/>
    <path d="M 110 0 L 107 7 L 110 14 L 107 21 L 110 28" fill="none" stroke="#A8E6CF" stroke-width="1.2"/>
  </g>
</svg>`.trim();
}

function generateFoldFloorSvg() {
  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 100" preserveAspectRatio="none">
  <defs>
    <pattern id="floorFold" width="64" height="100" patternUnits="userSpaceOnUse">
      <rect width="64" height="100" fill="transparent"/>
      <line x1="62" y1="0" x2="62" y2="100" stroke="#1B1017" stroke-opacity="0.08" stroke-width="2"/>
      <line x1="64" y1="0" x2="64" y2="100" stroke="#FFFFFF" stroke-opacity="0.14" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="640" height="100" fill="url(#floorFold)"/>
</svg>`.trim();
}

function generateCutLettersDemoSvg() {
  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 120">
  <defs>
    <filter id="letterShadow" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="2" stdDeviation="1.5" flood-color="#1B1017" flood-opacity="0.22"/>
    </filter>
  </defs>
  <g filter="url(#letterShadow)">
    <g transform="translate(20, 20) rotate(-2)">
      <rect width="45" height="60" rx="3" fill="#FFD6E8"/>
      <text x="22" y="44" font-family="'Anton', sans-serif" font-size="36" fill="#1B1017" text-anchor="middle">J</text>
    </g>
    <g transform="translate(75, 20) rotate(3)">
      <rect width="45" height="60" rx="3" fill="#D4F2E4"/>
      <text x="22" y="44" font-family="'Anton', sans-serif" font-size="36" fill="#1B1017" text-anchor="middle">A</text>
    </g>
    <g transform="translate(130, 20) rotate(-1)">
      <rect width="45" height="60" rx="3" fill="#BFE3F5"/>
      <text x="22" y="44" font-family="'Anton', sans-serif" font-size="36" fill="#1B1017" text-anchor="middle">S</text>
    </g>
    <g transform="translate(185, 20) rotate(2)">
      <rect width="45" height="60" rx="3" fill="#FFF1A8"/>
      <text x="22" y="44" font-family="'Anton', sans-serif" font-size="36" fill="#1B1017" text-anchor="middle">S</text>
    </g>
    <g transform="translate(240, 20) rotate(-3)">
      <rect width="45" height="60" rx="3" fill="#D4C1F5"/>
      <text x="22" y="44" font-family="'Anton', sans-serif" font-size="36" fill="#1B1017" text-anchor="middle">I</text>
    </g>
    <g transform="translate(295, 20) rotate(1)">
      <rect width="45" height="60" rx="3" fill="#FFB3D9"/>
      <text x="22" y="44" font-family="'Anton', sans-serif" font-size="36" fill="#1B1017" text-anchor="middle">N</text>
    </g>
    <g transform="translate(350, 20) rotate(-2)">
      <rect width="45" height="60" rx="3" fill="#A8E6CF"/>
      <text x="22" y="44" font-family="'Anton', sans-serif" font-size="36" fill="#1B1017" text-anchor="middle">T</text>
    </g>
    <g transform="translate(405, 20) rotate(2)">
      <rect width="45" height="60" rx="3" fill="#FFFDF9"/>
      <text x="22" y="44" font-family="'Anton', sans-serif" font-size="36" fill="#1B1017" text-anchor="middle">A</text>
    </g>
  </g>
</svg>`.trim();
}

function generateFaviconSvg(size = 512) {
  return `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 512 512">
  <defs>
    <filter id="favShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#1B1017" flood-opacity="0.18"/>
    </filter>
  </defs>
  <circle cx="256" cy="256" r="236" fill="#FFD6E8"/>
  <circle cx="256" cy="256" r="236" fill="none" stroke="#FFFFFF" stroke-width="8"/>
  <g filter="url(#favShadow)">
    <path d="M 120 220 C 120 120, 392 120, 392 220 C 392 340, 360 410, 256 410 C 152 410, 120 340, 120 220 Z" fill="#1F1F1F"/>
    <ellipse cx="256" cy="245" rx="75" ry="92" fill="#E8B795"/>
    <circle cx="228" cy="240" r="7.5" fill="#1B1017"/>
    <circle cx="284" cy="240" r="7.5" fill="#1B1017"/>
    <circle cx="212" cy="265" r="14" fill="#FF8DC7" fill-opacity="0.55"/>
    <circle cx="300" cy="265" r="14" fill="#FF8DC7" fill-opacity="0.55"/>
    <path d="M 238 278 Q 256 295 274 278" fill="none" stroke="#B5645F" stroke-width="4" stroke-linecap="round"/>
  </g>
</svg>`.trim();
}

// ─────────────────────────────────────────────────────────────
// Render Asset Function
// ─────────────────────────────────────────────────────────────
async function renderAssetRow(row) {
  const base = row.file.replace(/\.(webp|svg|png)$/i, '');
  const outDir = join(root, 'public', 'assets', row.folder);
  mkdirSync(outDir, { recursive: true });

  const svgPath = join(outDir, `${base}.svg`);
  const webpPath = join(outDir, `${base}.webp`);
  const webp2xPath = join(outDir, `${base}@2x.webp`);

  let svgContent = '';

  // 1. P02 Paper Kit Generator
  if (row.owner_prompt === 'P02') {
    if (row.file.includes('kit_paper-tile-neutral')) {
      svgContent = generatePaperTileSvg(false);
      writeFileSync(svgPath, svgContent);
      await sharp(Buffer.from(svgContent)).webp({ quality: 85, lossless: false }).toFile(webpPath);
      await sharp(Buffer.from(svgContent)).webp({ quality: 85, lossless: false }).toFile(webp2xPath);
      return { webpPath, webp2xPath };
    }
    if (row.file.includes('kit_paper-tile-dark')) {
      svgContent = generatePaperTileSvg(true);
      writeFileSync(svgPath, svgContent);
      await sharp(Buffer.from(svgContent)).webp({ quality: 85, lossless: false }).toFile(webpPath);
      await sharp(Buffer.from(svgContent)).webp({ quality: 85, lossless: false }).toFile(webp2xPath);
      return { webpPath, webp2xPath };
    }
    if (row.file.includes('kit_grain-light')) {
      svgContent = generateGrainSvg(false);
      writeFileSync(svgPath, svgContent);
      await sharp(Buffer.from(svgContent)).webp({ quality: 85, lossless: false }).toFile(webpPath);
      await sharp(Buffer.from(svgContent)).webp({ quality: 85, lossless: false }).toFile(webp2xPath);
      return { webpPath, webp2xPath };
    }
    if (row.file.includes('kit_grain-dark')) {
      svgContent = generateGrainSvg(true);
      writeFileSync(svgPath, svgContent);
      await sharp(Buffer.from(svgContent)).webp({ quality: 85, lossless: false }).toFile(webpPath);
      await sharp(Buffer.from(svgContent)).webp({ quality: 85, lossless: false }).toFile(webp2xPath);
      return { webpPath, webp2xPath };
    }
    if (row.file.includes('kit_deckle-wall-mask')) {
      svgContent = generateDeckleWallMaskSvg();
      writeFileSync(svgPath, svgContent);
      return { svgPath };
    }
    if (row.file.includes('kit_pita-tepi')) {
      svgContent = generatePitaTepiSvg();
      writeFileSync(svgPath, svgContent);
      return { svgPath };
    }
    if (row.file.includes('kit_washi-patterns')) {
      svgContent = generateWashiPatternsSvg();
      writeFileSync(svgPath, svgContent);
      return { svgPath };
    }
    if (row.file.includes('kit_fold-floor')) {
      svgContent = generateFoldFloorSvg();
      writeFileSync(svgPath, svgContent);
      return { svgPath };
    }
    if (row.file.includes('kit_cut-letters-demo')) {
      svgContent = generateCutLettersDemoSvg();
      writeFileSync(svgPath, svgContent);
      return { svgPath };
    }
    if (row.file.includes('favicon-32')) {
      const favSvg = generateFaviconSvg(32);
      await sharp(Buffer.from(favSvg)).png().toFile(join(outDir, 'favicon-32.png'));
      await sharp(Buffer.from(favSvg)).png().toFile(join(root, 'public', 'favicon-32.png'));
      return { file: 'favicon-32.png' };
    }
    if (row.file.includes('favicon-180')) {
      const favSvg = generateFaviconSvg(180);
      await sharp(Buffer.from(favSvg)).png().toFile(join(outDir, 'favicon-180.png'));
      await sharp(Buffer.from(favSvg)).png().toFile(join(root, 'public', 'favicon-180.png'));
      return { file: 'favicon-180.png' };
    }
    if (row.file.includes('favicon-512')) {
      const favSvg = generateFaviconSvg(512);
      await sharp(Buffer.from(favSvg)).png().toFile(join(outDir, 'favicon-512.png'));
      await sharp(Buffer.from(favSvg)).png().toFile(join(root, 'public', 'favicon-512.png'));
      writeFileSync(join(root, 'public', 'favicon.svg'), favSvg);
      return { file: 'favicon-512.png' };
    }
  }

  // 2. P03 Doll Rig Assets
  if (row.owner_prompt === 'P03') {
    // Cari apakah SVG sudah ada di public/assets/doll/ atau di src/assets-def/doll/traced/
    const tracedPath = join(root, 'src', 'assets-def', 'doll', 'traced', `${base}.svg`);
    const existingSvg = join(outDir, `${base}.svg`);
    let sourceSvgPath = existsSync(existingSvg) ? existingSvg : (existsSync(tracedPath) ? tracedPath : null);

    if (sourceSvgPath) {
      svgContent = readFileSync(sourceSvgPath, 'utf8');
      if (sourceSvgPath !== svgPath) {
        writeFileSync(svgPath, svgContent);
      }
      const buf = Buffer.from(svgContent);
      // Buat WebP 1× dan 2×
      await sharp(buf)
        .resize(280, null, { fit: 'inside', withoutEnlargement: false })
        .webp({ quality: 85, lossless: false })
        .toFile(webpPath);

      await sharp(buf)
        .resize(560, null, { fit: 'inside', withoutEnlargement: false })
        .webp({ quality: 85, lossless: false })
        .toFile(webp2xPath);

      return { svgPath, webpPath, webp2xPath };
    }
  }

  // 3. P05 World & HUD Assets (50 files)
  if (row.owner_prompt === 'P05') {
    const { generateLabelSvg, generateStripSvg, generateMapSvg, generateHudSvg } = await import('./generate-p05-assets.mjs');
    if (row.file.startsWith('S_label-')) {
      const labelId = row.id;
      svgContent = generateLabelSvg(labelId);
    } else if (row.file.startsWith('W_strip-')) {
      svgContent = generateStripSvg(row.id);
    } else if (row.file.startsWith('M_')) {
      svgContent = generateMapSvg(row.id);
    } else if (row.file.startsWith('H_')) {
      svgContent = generateHudSvg(row.id);
    } else {
      svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#FFFDF9"/></svg>`;
    }

    writeFileSync(svgPath, svgContent, 'utf8');
    const buf = Buffer.from(svgContent);
    await sharp(buf).webp({ quality: 85, lossless: false }).toFile(webpPath);
    await sharp(buf).webp({ quality: 85, lossless: false }).toFile(webp2xPath);
    return { svgPath, webpPath, webp2xPath };
  }

  // 3. Fallback / Generic Paper Shape untuk ID lainnya
  const prng = createPRNG(hashId(row.id));
  const W = 400;
  const H = 300;
  const colorMatch = (row.spec_color_material || row.prompt_ref || '').match(/#[0-9A-Fa-f]{6}/);
  const fill = colorMatch ? colorMatch[0] : '#FFFDF9';

  svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
  <rect x="4" y="4" width="${W - 8}" height="${H - 8}" rx="4" fill="${fill}"/>
  <text x="${W / 2}" y="${H / 2}" font-family="monospace" font-size="14" fill="#1B1017" text-anchor="middle">${row.id}</text>
</svg>`;

  writeFileSync(svgPath, svgContent);
  const buf = Buffer.from(svgContent);
  await sharp(buf).webp({ quality: 85 }).toFile(webpPath);
  await sharp(buf).webp({ quality: 85 }).toFile(webp2xPath);

  return { svgPath, webpPath, webp2xPath };
}

// ─────────────────────────────────────────────────────────────
// Main Execution
// ─────────────────────────────────────────────────────────────
async function main() {
  const rows = readCsv(join(root, 'asset-manifest.csv'));
  const log = {
    timestamp: new Date().toISOString(),
    ownerFilter: ownerFilter || 'ALL',
    generated: [],
    skipped: [],
    errors: [],
  };

  let countGenerated = 0;
  let countSkipped = 0;
  let countErrors = 0;

  console.log(`[generate-assets] Memproses aset (owner: ${ownerFilter || 'semua'}, id: ${idFilter || 'semua'})...`);

  for (const row of rows) {
    if (ownerFilter && row.owner_prompt !== ownerFilter) continue;
    if (idFilter && row.id !== idFilter) continue;
    if (folderFilter && row.folder !== folderFilter) continue;

    // Tolak baris reuse_of
    if (row.reuse_of) {
      log.skipped.push({ id: row.id, file: row.file, reason: `reuse_of (${row.reuse_of})` });
      countSkipped++;
      continue;
    }

    // Tolak baris kind=css-only
    if (row.kind === 'css-only') {
      log.skipped.push({ id: row.id, file: row.file, reason: 'css-only' });
      countSkipped++;
      continue;
    }

    const base = row.file.replace(/\.(webp|svg|png)$/i, '');
    const outDir = join(root, 'public', 'assets', row.folder);
    const webpPath = join(outDir, `${base}.webp`);
    const svgPath = join(outDir, `${base}.svg`);

    // Jika --only-missing dan sudah ada
    if (onlyMissing && existsSync(webpPath)) {
      log.skipped.push({ id: row.id, file: row.file, reason: 'already exists' });
      countSkipped++;
      continue;
    }

    // Gerbang P04: sisa aset tetap placeholder sampai prompt pemiliknya
    if (!ownerFilter && row.owner_prompt !== 'P02' && row.owner_prompt !== 'P03') {
      if (existsSync(svgPath) && readFileSync(svgPath, 'utf8').includes('data-placeholder="true"')) {
        log.skipped.push({ id: row.id, file: row.file, reason: `kept placeholder until owner prompt ${row.owner_prompt}` });
        countSkipped++;
        continue;
      }
    }

    try {
      const res = await renderAssetRow(row);
      log.generated.push({ id: row.id, file: row.file, owner: row.owner_prompt, ...res });
      countGenerated++;
      if (countGenerated % 10 === 0) {
        process.stdout.write(`\r  ✓ ${countGenerated} aset diproses...`);
      }
    } catch (err) {
      log.errors.push({ id: row.id, file: row.file, error: String(err) });
      countErrors++;
      console.error(`\n  ✗ Error pada ${row.id} (${row.file}):`, err.message);
    }
  }

  console.log(`\n\nHasil Produksi Aset:`);
  console.log(`  ✓ Dihasilkan / Diperbarui : ${countGenerated}`);
  console.log(`  ↷ Dilewati (reuse/css/place): ${countSkipped}`);
  console.log(`  ✗ Error                    : ${countErrors}`);

  const logDir = join(root, 'docs', 'evidence');
  mkdirSync(logDir, { recursive: true });
  writeFileSync(join(logDir, 'assets-log.json'), JSON.stringify(log, null, 2), 'utf8');
  console.log(`  📋 Log tersimpan di docs/evidence/assets-log.json\n`);
}

main().catch((err) => {
  console.error('[generate-assets] Fatal error:', err);
  process.exit(1);
});
