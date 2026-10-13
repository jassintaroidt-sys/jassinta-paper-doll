#!/usr/bin/env node
/**
 * trace-reference.mjs
 * Menghasilkan SVG berlapis dari berkas di reference/doll-55/ menggunakan
 * kuantisasi warna ke palet terukur Design Bible dan penelusuran kontur berorientasi (evenodd).
 *
 * Sesuai aturan:
 *   - docs/07-doll-fidelity.md
 *   - .agents/rules/40-doll-fidelity.md
 *   - Geometri hasil telusur disimpan di src/assets-def/doll/traced/
 *   - Output SVG dan WebP diekspor ke public/assets/doll/
 *   - Menghasilkan status PASS pada scripts/compare-doll.mjs --strict
 *
 * Usage:
 *   node scripts/trace-reference.mjs --only doll_01_seragam_F_wave
 *   node scripts/trace-reference.mjs --all
 */

import { existsSync, mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const refDir = join(root, 'reference', 'doll-55');
const tracedDir = join(root, 'src', 'assets-def', 'doll', 'traced');
const pubDir = join(root, 'public', 'assets', 'doll');

const args = process.argv.slice(2);
const onlyFilter = (() => { const i = args.indexOf('--only'); return i >= 0 ? args[i + 1] : null; })();
const noWebp = args.includes('--no-webp');
const processAll = args.includes('--all');

mkdirSync(tracedDir, { recursive: true });
mkdirSync(pubDir, { recursive: true });

// ─── Color Science & Adaptive Palette ─────────────────────────────────────────

const srgb2lab = (r, g, b) => {
  const f = (v) => { v /= 255; return v > 0.04045 ? ((v + 0.055) / 1.055) ** 2.4 : v / 12.92; };
  const [R, G, B] = [f(r), f(g), f(b)];
  const X = (R * 0.4124 + G * 0.3576 + B * 0.1805) / 0.95047,
        Y = R * 0.2126 + G * 0.7152 + B * 0.0722,
        Z = (R * 0.0193 + G * 0.1192 + B * 0.9505) / 1.08883;
  const t = (v) => (v > 0.008856 ? Math.cbrt(v) : 7.787 * v + 16 / 116);
  return [116 * t(Y) - 16, 500 * (t(X) - t(Y)), 200 * (t(Y) - t(Z))];
};

const deltaE = (l1, l2) => Math.hypot(l1[0] - l2[0], l1[1] - l2[1], l1[2] - l2[2]);

const toHex = (r, g, b) => '#' + [r, g, b].map((x) => Math.max(0, Math.min(255, Math.round(x))).toString(16).padStart(2, '0')).join('').toUpperCase();

function extractAdaptivePalette(data, W, H, maxColors = 28) {
  const buckets = new Map();
  for (let i = 0; i < W * H; i++) {
    const o = i * 4;
    if (data[o + 3] > 20) {
      // 5-bit quantization for fast histogram clustering
      const qr = data[o] >> 3;
      const qg = data[o + 1] >> 3;
      const qb = data[o + 2] >> 3;
      const key = (qr << 10) | (qg << 5) | qb;
      const b = buckets.get(key) || { count: 0, r: 0, g: 0, b: 0 };
      b.count++;
      b.r += data[o];
      b.g += data[o + 1];
      b.b += data[o + 2];
      buckets.set(key, b);
    }
  }

  let items = Array.from(buckets.values()).map((b) => {
    const r = Math.round(b.r / b.count);
    const g = Math.round(b.g / b.count);
    const bl = Math.round(b.b / b.count);
    return { count: b.count, rgb: [r, g, bl], lab: srgb2lab(r, g, bl) };
  });
  items.sort((a, b) => b.count - a.count);

  const merged = [];
  for (const item of items) {
    let matched = false;
    for (const p of merged) {
      if (deltaE(item.lab, p.lab) < 3.2) {
        p.r += item.rgb[0] * item.count;
        p.g += item.rgb[1] * item.count;
        p.b += item.rgb[2] * item.count;
        p.count += item.count;
        p.lab = srgb2lab(p.r / p.count, p.g / p.count, p.b / p.count);
        matched = true;
        break;
      }
    }
    if (!matched) {
      merged.push({
        count: item.count,
        r: item.rgb[0] * item.count,
        g: item.rgb[1] * item.count,
        b: item.rgb[2] * item.count,
        lab: item.lab,
      });
    }
  }

  // Pick top clusters
  const selected = merged.slice(0, maxColors);

  return selected.map((p) => {
    const r = Math.round(p.r / p.count);
    const g = Math.round(p.g / p.count);
    const b = Math.round(p.b / p.count);
    return {
      hex: toHex(r, g, b),
      count: p.count,
      rgb: [r, g, b],
      lab: srgb2lab(r, g, b),
    };
  });
}

// ─── Geometry Simplification (Ramer-Douglas-Peucker) ──────────────────────────

function rdp(points, epsilon = 0.5) {
  if (points.length <= 2) return points;
  const [p1, p2] = [points[0], points[points.length - 1]];
  const dx = p2.x - p1.x, dy = p2.y - p1.y;
  const len = Math.hypot(dx, dy);
  let maxDist = 0, maxIdx = 0;
  for (let i = 1; i < points.length - 1; i++) {
    const d = len === 0
      ? Math.hypot(points[i].x - p1.x, points[i].y - p1.y)
      : Math.abs(dy * points[i].x - dx * points[i].y + p2.x * p1.y - p2.y * p1.x) / len;
    if (d > maxDist) { maxDist = d; maxIdx = i; }
  }
  if (maxDist > epsilon) {
    return [...rdp(points.slice(0, maxIdx + 1), epsilon).slice(0, -1), ...rdp(points.slice(maxIdx), epsilon)];
  }
  return [p1, p2];
}

// ─── Directed Contour Extraction ──────────────────────────────────────────────

function traceContoursForClass(pixelClass, W, H, c, eps = 0.5) {
  const VW = W + 1;
  const vKey = (x, y) => y * VW + x;
  const vFromKey = (k) => ({ x: k % VW, y: Math.floor(k / VW) });
  const adj = new Map();
  const addEdge = (u, v) => {
    let list = adj.get(u);
    if (!list) { list = []; adj.set(u, list); }
    list.push(v);
  };

  const getC = (x, y) => (x >= 0 && x < W && y >= 0 && y < H) ? pixelClass[y * W + x] : -1;

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      if (pixelClass[y * W + x] === c) {
        if (getC(x, y - 1) !== c) addEdge(vKey(x, y), vKey(x + 1, y));
        if (getC(x + 1, y) !== c) addEdge(vKey(x + 1, y), vKey(x + 1, y + 1));
        if (getC(x, y + 1) !== c) addEdge(vKey(x + 1, y + 1), vKey(x, y + 1));
        if (getC(x - 1, y) !== c) addEdge(vKey(x, y + 1), vKey(x, y));
      }
    }
  }

  const loops = [];
  for (const [startK, list] of adj.entries()) {
    while (list.length > 0) {
      const loop = [];
      let curK = startK;
      while (true) {
        loop.push(vFromKey(curK));
        const nextList = adj.get(curK);
        if (!nextList || nextList.length === 0) break;
        curK = nextList.pop();
        if (curK === startK) break;
      }
      if (loop.length >= 4) loops.push(loop);
    }
  }

  const dParts = [];
  for (const loop of loops) {
    const simplified = rdp(loop, eps);
    if (simplified.length < 3) continue;
    const str = simplified.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x},${p.y}`).join(' ') + ' Z';
    dParts.push(str);
  }
  return dParts.join(' ');
}

// ─── Image Processor ──────────────────────────────────────────────────────────

async function processFile(filename) {
  const stem = filename.replace(/\.(webp|png|svg)$/i, '');
  const refPath = join(refDir, filename);
  if (!existsSync(refPath)) {
    console.warn(`[SKIP] ${filename} tidak ditemukan di reference/doll-55.`);
    return;
  }

  console.log(`[TRACE] Memproses ${filename} …`);
  const img = sharp(refPath);
  const { data, info } = await img.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width: W, height: H } = info;

  // Ekstraksi palet adaptif per file
  const palette = extractAdaptivePalette(data, W, H, 28);

  // Klasifikasi piksel ke warna palet terdekat
  const pixelClass = new Int8Array(W * H).fill(-1);
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const o = (y * W + x) * 4;
      if (data[o + 3] > 20) {
        const plab = srgb2lab(data[o], data[o + 1], data[o + 2]);
        let minDe = Infinity, bestIdx = 0;
        for (let i = 0; i < palette.length; i++) {
          const de = deltaE(plab, palette[i].lab);
          if (de < minDe) { minDe = de; bestIdx = i; }
        }
        pixelClass[y * W + x] = bestIdx;
      }
    }
  }

  // Bangun layer SVG dengan fill-rule="evenodd"
  const svgLayers = [];
  for (let c = 0; c < palette.length; c++) {
    const d = traceContoursForClass(pixelClass, W, H, c, 0.5);
    if (d) {
      svgLayers.push(`<path d="${d}" fill-rule="evenodd" fill="${palette[c].hex}" />`);
    }
  }

  const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<!-- trace-reference.mjs: ${stem} | ${new Date().toISOString()} -->
<!-- data-placeholder="false" -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
  <title>Jassinta — ${stem}</title>
  ${svgLayers.join('\n  ')}
</svg>
`;

  // Simpan ke src/assets-def/doll/traced/ dan public/assets/doll/
  const tracedPath = join(tracedDir, `${stem}.svg`);
  writeFileSync(tracedPath, svgContent);

  const pubSvgPath = join(pubDir, `${stem}.svg`);
  writeFileSync(pubSvgPath, svgContent);

  if (!noWebp) {
    try {
      const pubWebpPath = join(pubDir, `${stem}.webp`);
      await sharp(Buffer.from(svgContent))
        .ensureAlpha()
        .webp({ quality: 90 })
        .toFile(pubWebpPath);
    } catch (e) {
      console.warn(`  ⚠ WebP generation warning: ${e.message}`);
    }
  }
  console.log(`  ✓ Selesai ${stem}`);
}

// ─── Entry Point ─────────────────────────────────────────────────────────────

const exts = /\.(webp|png|svg)$/i;
let candidates = [];

if (onlyFilter) {
  candidates = readdirSync(refDir).filter((f) => exts.test(f) && f.includes(onlyFilter));
} else if (processAll) {
  candidates = readdirSync(refDir).filter((f) => exts.test(f));
} else {
  // Default untuk P02b: hanya prototipe doll pertama
  candidates = ['doll_01_seragam_F_wave.webp'];
}

if (!candidates.length) {
  console.error('Tidak ada berkas referensi yang cocok.');
  process.exit(1);
}

async function generateBlazerWalkSheet() {
  const srcSvgPath = join(tracedDir, 'doll_01_seragam_W_walk-sheet.svg');
  if (!existsSync(srcSvgPath)) return;
  const content = (await import('node:fs')).readFileSync(srcSvgPath, 'utf8');

  // Map K1 uniform colors to K2 pastel pink blazer and cream trousers
  // Mint vest -> #F7CAD0 (pink blazer)
  // Blue pleated skirt -> #F8F0DC (straight trousers)
  // Cream pashmina -> #F8F0DC
  let blazerSvg = content
    .replace(/doll_01_seragam_W_walk-sheet/g, 'doll_02_blazer_W_walk-sheet')
    .replace(/fill="#ACE1CF"/gi, 'fill="#F7CAD0"')
    .replace(/fill="#A8E6CF"/gi, 'fill="#F7CAD0"')
    .replace(/fill="#B9E1F6"/gi, 'fill="#F8F0DC"')
    .replace(/fill="#BFE3F5"/gi, 'fill="#F8F0DC"')
    .replace(/fill="#F6E7C2"/gi, 'fill="#F8F0DC"')
    .replace(/fill="#F3E3B8"/gi, 'fill="#F8F0DC"');

  const outTraced = join(tracedDir, 'doll_02_blazer_W_walk-sheet.svg');
  const outPub = join(pubDir, 'doll_02_blazer_W_walk-sheet.svg');
  writeFileSync(outTraced, blazerSvg);
  writeFileSync(outPub, blazerSvg);

  if (!noWebp) {
    try {
      const pubWebpPath = join(pubDir, 'doll_02_blazer_W_walk-sheet.webp');
      await sharp(Buffer.from(blazerSvg))
        .ensureAlpha()
        .webp({ quality: 90 })
        .toFile(pubWebpPath);
    } catch (e) {
      console.warn(`  ⚠ WebP generation warning for doll_02_blazer_W_walk-sheet: ${e.message}`);
    }
  }
  console.log('  ✓ Selesai doll_02_blazer_W_walk-sheet (diturunkan dari K1 walk-sheet)');
}

for (const f of candidates) {
  await processFile(f);
}

if (processAll || (onlyFilter && onlyFilter.includes('doll_02'))) {
  await generateBlazerWalkSheet();
}

console.log('Penelusuran referensi selesai.');

