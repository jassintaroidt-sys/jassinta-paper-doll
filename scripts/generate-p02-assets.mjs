/**
 * generate-p02-assets.mjs
 * Skrip build untuk menghasilkan 12 berkas aset PaperKit P02 sesuai asset-manifest.csv
 * Menggunakan Sharp dan SVG programmatic rendering.
 */

import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const kitDir = join(root, 'public', 'assets', 'kit');
const publicDir = join(root, 'public');

if (!existsSync(kitDir)) {
  mkdirSync(kitDir, { recursive: true });
}

// ─────────────────────────────────────────────────────────────
// 1. kit_paper-tile-neutral_512.webp & kit_paper-tile-dark_512.webp
// Serat pendek 4-12px melengkung + bintik 0.8-2.2px + mottling
// ─────────────────────────────────────────────────────────────

function createPRNG(seed) {
  let s = Math.floor(seed) >>> 0;
  return function () {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function generatePaperTileSvg(isDark = false) {
  const prng = createPRNG(isDark ? 9999 : 4242);
  const size = 512;
  const fibers = [];
  const specks = [];

  // Serat: kepadatan sekitar 1 serat per 400 px^2 => ~650 serat di kanvas 512x512
  const fiberCount = 650;
  const fiberColor = isDark ? 'rgba(255,255,255,0.40)' : 'rgba(27,16,23,0.12)';
  const speckColor = isDark ? 'rgba(255,255,255,0.25)' : 'rgba(138,106,79,0.24)';

  for (let i = 0; i < fiberCount; i++) {
    const x = prng() * size;
    const y = prng() * size;
    const len = 4 + prng() * 8; // 4 - 12 px
    const angle = prng() * Math.PI * 2;
    const curve = (prng() - 0.5) * 4; // sedikit melengkung

    const x2 = x + Math.cos(angle) * len;
    const y2 = y + Math.sin(angle) * len;
    const cx = (x + x2) / 2 + Math.cos(angle + Math.PI / 2) * curve;
    const cy = (y + y2) / 2 + Math.sin(angle + Math.PI / 2) * curve;

    fibers.push(
      `<path d="M ${x.toFixed(1)} ${y.toFixed(1)} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}" stroke="${fiberColor}" stroke-width="0.7" fill="none" stroke-linecap="round"/>`
    );
  }

  // Bintik: sekitar 1 per 900 px^2 => ~290 bintik di kanvas 512x512
  const speckCount = 290;
  for (let i = 0; i < speckCount; i++) {
    const x = prng() * size;
    const y = prng() * size;
    const r = (0.4 + prng() * 0.7).toFixed(1); // radius 0.4 - 1.1 px (diameter 0.8 - 2.2 px)
    specks.push(`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}" fill="${speckColor}"/>`);

    // 15% bintik berkelompok 3-5 (REV C)
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
</svg>
`.trim();
}

// ─────────────────────────────────────────────────────────────
// 2. Grain Light & Dark 220×220
// Sesuai DF 9.3: SVG feTurbulence fractalNoise baseFrequency 0.9, numOctaves 2, ubin 220×220
// Light: noise hitam multiply opacity 0.08
// Dark: noise putih screen opacity 0.05
// ─────────────────────────────────────────────────────────────

function generateGrainSvg(isDark = false) {
  const size = 220;
  const color = isDark ? '#FFFFFF' : '#000000';
  const alpha = isDark ? '0.05' : '0.08';
  return `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <filter id="grain">
    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" result="noise" seed="${isDark ? 123 : 321}"/>
    <feColorMatrix type="matrix" values="0 0 0 0 ${isDark ? 1 : 0}  0 0 0 0 ${isDark ? 1 : 0}  0 0 0 0 ${isDark ? 1 : 0}  0 0 0 ${alpha} 0"/>
  </filter>
  <rect width="${size}" height="${size}" fill="none"/>
  <rect width="${size}" height="${size}" filter="url(#grain)"/>
</svg>
`.trim();
}

// ─────────────────────────────────────────────────────────────
// 3. SVG Assets: Deckle, Pita Tepi, Washi, Floor Fold, Cut Letters
// ─────────────────────────────────────────────────────────────

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
</svg>
`.trim();
}

function generatePitaTepiSvg() {
  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 1000" preserveAspectRatio="none">
  <!-- Pita Tepi vertikal 8px pengganti garis margin (REV E, opasitas 55% cherry-red) -->
  <rect x="1" y="0" width="8" height="1000" fill="#E5173F" fill-opacity="0.55"/>
  <!-- Highlight kiri 1px -->
  <line x1="1" y1="0" x2="1" y2="1000" stroke="#FFFFFF" stroke-opacity="0.3" stroke-width="0.8"/>
  <!-- Bayangan kontak kanan 1px -->
  <line x1="9" y1="0" x2="9" y2="1000" stroke="#1B1017" stroke-opacity="0.15" stroke-width="0.8"/>
</svg>
`.trim();
}

function generateWashiPatternsSvg() {
  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 120">
  <defs>
    <!-- Pattern strip 1: Polkadot pastel -->
    <pattern id="washiDot" width="16" height="16" patternUnits="userSpaceOnUse">
      <circle cx="8" cy="8" r="3" fill="#FF8DC7" fill-opacity="0.4"/>
    </pattern>
    <!-- Pattern strip 2: Garis diagonal pastel -->
    <pattern id="washiStripe" width="16" height="16" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="0" y2="16" stroke="#BFA8E5" stroke-width="4" stroke-opacity="0.45"/>
    </pattern>
    <!-- Pattern strip 3: Grid kotak pastel -->
    <pattern id="washiGrid" width="12" height="12" patternUnits="userSpaceOnUse">
      <rect width="12" height="12" fill="none" stroke="#A8E6CF" stroke-width="1" stroke-opacity="0.5"/>
    </pattern>
  </defs>

  <!-- Washi Tape 1 -->
  <g transform="translate(10, 10) rotate(-3)">
    <rect width="110" height="28" fill="#FFFDF9" fill-opacity="0.85" rx="1"/>
    <rect width="110" height="28" fill="url(#washiDot)" rx="1"/>
    <!-- Ujung bergerigi guntingan washi -->
    <path d="M 0 0 L 3 7 L 0 14 L 3 21 L 0 28" fill="none" stroke="#FF8DC7" stroke-width="1.2"/>
    <path d="M 110 0 L 107 7 L 110 14 L 107 21 L 110 28" fill="none" stroke="#FF8DC7" stroke-width="1.2"/>
  </g>

  <!-- Washi Tape 2 -->
  <g transform="translate(140, 15) rotate(4)">
    <rect width="110" height="28" fill="#FFFDF9" fill-opacity="0.85" rx="1"/>
    <rect width="110" height="28" fill="url(#washiStripe)" rx="1"/>
    <path d="M 0 0 L 3 7 L 0 14 L 3 21 L 0 28" fill="none" stroke="#BFA8E5" stroke-width="1.2"/>
    <path d="M 110 0 L 107 7 L 110 14 L 107 21 L 110 28" fill="none" stroke="#BFA8E5" stroke-width="1.2"/>
  </g>

  <!-- Washi Tape 3 -->
  <g transform="translate(270, 10) rotate(-2)">
    <rect width="110" height="28" fill="#FFFDF9" fill-opacity="0.85" rx="1"/>
    <rect width="110" height="28" fill="url(#washiGrid)" rx="1"/>
    <path d="M 0 0 L 3 7 L 0 14 L 3 21 L 0 28" fill="none" stroke="#A8E6CF" stroke-width="1.2"/>
    <path d="M 110 0 L 107 7 L 110 14 L 107 21 L 110 28" fill="none" stroke="#A8E6CF" stroke-width="1.2"/>
  </g>
</svg>
`.trim();
}

function generateFoldFloorSvg() {
  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 100" preserveAspectRatio="none">
  <defs>
    <!-- Lipatan vertikal berulang tiap 64 px (8% lebih gelap per DV 2.3 & REV C) -->
    <pattern id="floorFold" width="64" height="100" patternUnits="userSpaceOnUse">
      <rect width="64" height="100" fill="transparent"/>
      <!-- Sisi bayangan lipatan 2px -->
      <line x1="62" y1="0" x2="62" y2="100" stroke="#1B1017" stroke-opacity="0.08" stroke-width="2"/>
      <!-- Sisi highlight puncak lipatan 1px -->
      <line x1="64" y1="0" x2="64" y2="100" stroke="#FFFFFF" stroke-opacity="0.14" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="640" height="100" fill="url(#floorFold)"/>
</svg>
`.trim();
}

function generateCutLettersDemoSvg() {
  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 120">
  <defs>
    <filter id="letterShadow" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="2" stdDeviation="1.5" flood-color="#1B1017" flood-opacity="0.22"/>
    </filter>
  </defs>
  <!-- DEMO: J A S S I N T A huruf potongan kertas berotasi +-3 derajat (REV H) -->
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
    <g transform="translate(405, 20) rotate(3)">
      <rect width="45" height="60" rx="3" fill="#FDE4EC"/>
      <text x="22" y="44" font-family="'Anton', sans-serif" font-size="36" fill="#1B1017" text-anchor="middle">A</text>
    </g>
  </g>
</svg>
`.trim();
}

// ─────────────────────────────────────────────────────────────
// 4. K17 Favicon Doll Head Icon (32, 180, 512 px)
// Sesuai spec K17: lingkaran wajah, pashmina hijab cream/pink,
// blush semi-transparan, tanpa alis/hidung (minimalis ramah favicon)
// ─────────────────────────────────────────────────────────────

function generateFaviconSvg(size) {
  const r = size / 2;
  const scale = size / 100;
  return `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 100 100">
  <defs>
    <filter id="dollShadow" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#1B1017" flood-opacity="0.18"/>
    </filter>
  </defs>
  <!-- Lingkaran dasar / background lingkaran blush -->
  <circle cx="50" cy="50" r="48" fill="#FFD6E8"/>
  
  <g filter="url(#dollShadow)">
    <!-- Hijab pashmina belakang -->
    <path d="M 50 14 C 28 14 20 32 20 54 C 20 74 34 88 50 88 C 66 88 80 74 80 54 C 80 32 72 14 50 14 Z" fill="#F3E3B8"/>
    <!-- Wajah doll (kulit #E8B795) -->
    <ellipse cx="50" cy="50" rx="20" ry="24" fill="#E8B795"/>
    <!-- Hijab pashmina draped neck roll -->
    <path d="M 30 52 C 30 70 42 78 50 78 C 58 78 70 70 70 52 C 70 42 62 36 50 36 C 38 36 30 42 30 52 Z" fill="#FFFDF9" fill-opacity="0.3"/>
    <path d="M 32 68 C 40 76 60 76 68 68 C 66 80 56 86 50 86 C 44 86 34 80 32 68 Z" fill="#F3E3B8"/>
    <!-- Mata dua titik hitam -->
    <circle cx="43" cy="48" r="2.8" fill="#1B1017"/>
    <circle cx="57" cy="48" r="2.8" fill="#1B1017"/>
    <!-- Blush dua lingkaran pink #E9A39B opasitas 60% -->
    <circle cx="38" cy="54" r="4.5" fill="#E9A39B" fill-opacity="0.6"/>
    <circle cx="62" cy="54" r="4.5" fill="#E9A39B" fill-opacity="0.6"/>
    <!-- Senyum tipis ramah -->
    <path d="M 46 56 Q 50 60 54 56" stroke="#B5645F" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  </g>
</svg>
`.trim();
}

// ─────────────────────────────────────────────────────────────
// PROSES PEMBUATAN DAN PENYIMPANAN
// ─────────────────────────────────────────────────────────────

async function main() {
  console.log('Generating P02 PaperKit assets...');

  // 1. kit_paper-tile-neutral_512.webp (<60KB)
  const neutralSvg = generatePaperTileSvg(false);
  const neutralBuf = await sharp(Buffer.from(neutralSvg))
    .webp({ quality: 80, effort: 6 })
    .toBuffer();
  writeFileSync(join(kitDir, 'kit_paper-tile-neutral_512.webp'), neutralBuf);
  console.log(`✓ kit_paper-tile-neutral_512.webp (${neutralBuf.length} bytes, <60KB)`);

  // 2. kit_paper-tile-dark_512.webp (<60KB)
  const darkSvg = generatePaperTileSvg(true);
  const darkBuf = await sharp(Buffer.from(darkSvg))
    .webp({ quality: 80, effort: 6 })
    .toBuffer();
  writeFileSync(join(kitDir, 'kit_paper-tile-dark_512.webp'), darkBuf);
  console.log(`✓ kit_paper-tile-dark_512.webp (${darkBuf.length} bytes, <60KB)`);

  // 3. kit_grain-light_220.webp
  const grainLightSvg = generateGrainSvg(false);
  const grainLightBuf = await sharp(Buffer.from(grainLightSvg))
    .webp({ quality: 75 })
    .toBuffer();
  writeFileSync(join(kitDir, 'kit_grain-light_220.webp'), grainLightBuf);
  console.log(`✓ kit_grain-light_220.webp (${grainLightBuf.length} bytes)`);

  // 4. kit_grain-dark_220.webp
  const grainDarkSvg = generateGrainSvg(true);
  const grainDarkBuf = await sharp(Buffer.from(grainDarkSvg))
    .webp({ quality: 75 })
    .toBuffer();
  writeFileSync(join(kitDir, 'kit_grain-dark_220.webp'), grainDarkBuf);
  console.log(`✓ kit_grain-dark_220.webp (${grainDarkBuf.length} bytes)`);

  // 5. kit_deckle-wall-mask.svg
  writeFileSync(join(kitDir, 'kit_deckle-wall-mask.svg'), generateDeckleWallMaskSvg());
  console.log('✓ kit_deckle-wall-mask.svg');

  // 6. kit_pita-tepi.svg
  writeFileSync(join(kitDir, 'kit_pita-tepi.svg'), generatePitaTepiSvg());
  console.log('✓ kit_pita-tepi.svg');

  // 7. kit_washi-patterns.svg
  writeFileSync(join(kitDir, 'kit_washi-patterns.svg'), generateWashiPatternsSvg());
  console.log('✓ kit_washi-patterns.svg');

  // 8. kit_fold-floor.svg
  writeFileSync(join(kitDir, 'kit_fold-floor.svg'), generateFoldFloorSvg());
  console.log('✓ kit_fold-floor.svg');

  // 9. kit_cut-letters-demo.svg
  writeFileSync(join(kitDir, 'kit_cut-letters-demo.svg'), generateCutLettersDemoSvg());
  console.log('✓ kit_cut-letters-demo.svg');

  // 10. Favicons (32, 180, 512 png)
  // Simpan di public/assets/kit/ (untuk manifest) DAN di public/ (untuk web browser favicon)
  const sizes = [32, 180, 512];
  for (const s of sizes) {
    const favSvg = generateFaviconSvg(s);
    const pngBuf = await sharp(Buffer.from(favSvg)).png().toBuffer();
    writeFileSync(join(kitDir, `favicon-${s}.png`), pngBuf);
    writeFileSync(join(publicDir, `favicon-${s}.png`), pngBuf);
    console.log(`✓ favicon-${s}.png (${pngBuf.length} bytes)`);
  }

  // Juga simpan favicon.svg di public/
  writeFileSync(join(publicDir, 'favicon.svg'), generateFaviconSvg(128));
  console.log('✓ public/favicon.svg updated');

  console.log('Semua 12 aset PaperKit P02 berhasil dibuat!');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
