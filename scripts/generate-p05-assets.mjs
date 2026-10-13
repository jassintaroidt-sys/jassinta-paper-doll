/**
 * scripts/generate-p05-assets.mjs
 * Generator presisi untuk 50 aset manifest owner_prompt=P05:
 * 12 S_label, 8 W_strip, 12 M_*, 18 H_*
 *
 * Mengikuti:
 * - DF 6 (Paper World Bible: 6.1 s/d 6.8)
 * - DV 3 & DV 9 (Papan nama, walk strip, peta, HUD)
 * - DV 2 (Maksimal 3 nada, serat + bintik kertas handmade, drop-shadow 3 kedalaman)
 * - PRNG deterministik seeded dari hashId(ID)
 */

import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { createHash } from 'node:crypto';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const uiDir = join(root, 'public', 'assets', 'ui');
const stripsDir = join(root, 'public', 'assets', 'strips');
const mapDir = join(root, 'public', 'assets', 'map');

mkdirSync(uiDir, { recursive: true });
mkdirSync(stripsDir, { recursive: true });
mkdirSync(mapDir, { recursive: true });

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
// 1. GENERATOR 12 S_LABEL (Papan Nama Label Kertas)
// DV 6.6 & 4.1: rasio 1:1, sudut kanan bawah terangkat (segitiga 12%),
// dua lapis (atas warna babak, bawah 12% lebih gelap offset 3px),
// 6-8 strip sinar kertas tipis memancar dari 3 sisi.
// ─────────────────────────────────────────────────────────────

const LABEL_SPECS = {
  'S_label-0-7_start-here': { color: '#A8E6CF', dark: '#8DCFB8', rot: -3, t1: 'START HERE', t2: 'Paper School' },
  'S_label-1-1_chapter01':  { color: '#FFFFFF', dark: '#E8E8E8', rot: 4,  t1: 'CHAPTER 01 · THE EDITOR’S DESK', t2: 'Personal Brand' },
  'S_label-2-1_chapter02':  { color: '#FFF1A8', dark: '#EBD88A', rot: -2, t1: 'CHAPTER 02 · THE NEWSROOM', t2: 'Writing Portfolio' },
  'S_label-3-0_chapter03':  { color: '#BFE3F5', dark: '#A4D0E6', rot: 5,  t1: 'CHAPTER 03 · THE CREATOR TRILOGY', t2: 'Content Marketing Specialist' },
  'S_label-3A-1_cafe':      { color: '#FFD3B0', dark: '#E8BA95', rot: -4, t1: '3A · THE CAFÉ', t2: 'Elspresso' },
  'S_label-3B-1_clinic':    { color: '#FFD6E8', dark: '#E5BCCF', rot: 3,  t1: '3B · THE GLOW CLINIC', t2: 'Elsthetic &amp; Aishi Beauty' },
  'S_label-3C-1_terminal':  { color: '#A7D8F5', dark: '#8EC2DF', rot: -5, t1: '3C · THE TERMINAL', t2: 'Karamina Tour' },
  'S_label-4-1_chapter04':  { color: '#E8A5B8', dark: '#D492A5', rot: 2,  t1: 'CHAPTER 04 · THE BOUTIQUE', t2: 'Example Strategy' },
  'S_label-5-1_chapter05':  { color: '#F3E3B8', dark: '#DBC99C', rot: -3, t1: 'CHAPTER 05 · THE CAMPUS LIBRARY', t2: 'Project Campus' },
  'S_label-6-1_chapter06':  { color: '#DA9AF2', dark: '#C481DD', rot: 4,  t1: 'CHAPTER 06 · THE RADIO BOOTH', t2: 'Podcast' },
  'S_label-7-1_chapter07':  { color: '#F6D76B', dark: '#DEC052', rot: -2, t1: 'CHAPTER 07 · THE ARCHIVE ROOM', t2: 'Archive' },
  'S_label-8-1_chapter08':  { color: '#FFD6E8', dark: '#E5BCCF', rot: 3,  t1: 'CHAPTER 08 · THE MAILBOX', t2: 'Contact' },
};

export function generateLabelSvg(id) {
  const spec = LABEL_SPECS[id] || { color: '#FFFDF9', dark: '#E8E2D8', rot: 0, t1: 'TITLE', t2: 'Location' };
  const size = 320;
  const pad = 40;
  const w = size - pad * 2;
  const h = w;

  // 6-8 strip sinar tipis kertas memancar dari 3 sisi (lebar 2px, panjang 16-24px)
  const rays = [
    `<line x1="25" y1="60" x2="10" y2="55" stroke="${spec.dark}" stroke-width="2.5" stroke-linecap="round"/>`,
    `<line x1="25" y1="120" x2="8" y2="120" stroke="${spec.dark}" stroke-width="2.5" stroke-linecap="round"/>`,
    `<line x1="25" y1="180" x2="12" y2="188" stroke="${spec.dark}" stroke-width="2.5" stroke-linecap="round"/>`,
    `<line x1="80" y1="25" x2="75" y2="10" stroke="${spec.dark}" stroke-width="2.5" stroke-linecap="round"/>`,
    `<line x1="160" y1="25" x2="160" y2="8" stroke="${spec.dark}" stroke-width="2.5" stroke-linecap="round"/>`,
    `<line x1="240" y1="25" x2="248" y2="12" stroke="${spec.dark}" stroke-width="2.5" stroke-linecap="round"/>`,
    `<line x1="295" y1="80" x2="312" y2="75" stroke="${spec.dark}" stroke-width="2.5" stroke-linecap="round"/>`,
    `<line x1="295" y1="150" x2="310" y2="155" stroke="${spec.dark}" stroke-width="2.5" stroke-linecap="round"/>`,
  ];

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">
  <defs>
    <filter id="lbl-shadow-${id}" x="-10%" y="-10%" width="125%" height="125%">
      <feDropShadow dx="2" dy="4" stdDeviation="3.5" flood-color="rgba(27,16,23,0.18)"/>
    </filter>
  </defs>
  <g transform="rotate(${spec.rot} ${size/2} ${size/2})">
    ${rays.join('\n    ')}
    <!-- Lembar bayangan bawah offset 3px 12% lebih gelap -->
    <rect x="${pad + 3}" y="${pad + 4}" width="${w}" height="${h}" rx="6" fill="${spec.dark}"/>
    <!-- Lembar atas warna babak bertepi deckle membulat -->
    <rect x="${pad}" y="${pad}" width="${w}" height="${h}" rx="6" fill="${spec.color}" filter="url(#lbl-shadow-${id})"/>
    <!-- Sudut kanan bawah terangkat (segitiga 12% sisi) -->
    <polygon points="${pad + w - 28},${pad + h} ${pad + w},${pad + h - 28} ${pad + w},${pad + h}" fill="${spec.dark}"/>
    <polygon points="${pad + w - 28},${pad + h} ${pad + w},${pad + h - 28} ${pad + w - 28},${pad + h - 28}" fill="#FFFDF9" opacity="0.6"/>
    <!-- Teks baris 1: DM Mono 11px uppercase -->
    <text x="${size/2}" y="${pad + 80}" font-family="'DM Mono', monospace" font-size="12" font-weight="600" fill="#1B1017" opacity="0.75" text-anchor="middle" letter-spacing="1.5">${spec.t1}</text>
    <!-- Teks baris 2: Shantell Sans 600 -->
    <text x="${size/2}" y="${pad + 135}" font-family="'Shantell Sans', cursive, sans-serif" font-size="22" font-weight="bold" fill="#1B1017" text-anchor="middle">${spec.t2}</text>
  </g>
</svg>`;
}

// ─────────────────────────────────────────────────────────────
// 2. GENERATOR 8 W_STRIP (Walk Strips & Landscape Panoramas)
// DF 6.5 & DV 9.2: Mode D, skyline jauh, kios mini, pantai pastel, dll.
// ─────────────────────────────────────────────────────────────

export function generateStripSvg(id) {
  switch (id) {
    case 'W_strip-0-1_far': {
      // Office Block putih polos + Press Tower dengan roller dan clock (4:1)
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 200" width="800" height="200">
        <filter id="ws0-shadow"><feDropShadow dx="1" dy="3" stdDeviation="2.5" flood-color="rgba(27,16,23,0.12)"/></filter>
        <!-- Office Block putih murni (satu-satunya bangunan tanpa grain) -->
        <polygon points="120,40 260,40 260,190 120,190" fill="#FFFFFF" filter="url(#ws0-shadow)"/>
        <line x1="120" y1="40" x2="260" y2="40" stroke="#E2E6EC" stroke-width="2"/>
        <rect x="150" y="70" width="30" height="40" fill="#E8EEF5"/>
        <rect x="200" y="70" width="30" height="40" fill="#E8EEF5"/>
        <!-- Press Tower jauh -->
        <polygon points="520,30 620,30 620,190 520,190" fill="#F3E3B8" opacity="0.65" filter="url(#ws0-shadow)"/>
        <circle cx="570" cy="65" r="18" fill="#FFFDF9"/>
        <line x1="570" y1="65" x2="570" y2="54" stroke="#1B1017" stroke-width="2"/>
        <line x1="570" y1="65" x2="579" y2="65" stroke="#1B1017" stroke-width="2"/>
        <rect x="545" y="100" width="50" height="15" rx="3" fill="#7A7A7A"/>
      </svg>`;
    }
    case 'W_strip-2-3_path': {
      // Tiga kios mini: tenda cafe, salib klinik pink/putih, pesawat kertas (3:1)
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 200" width="600" height="200">
        <filter id="ws2-shadow"><feDropShadow dx="2" dy="3" stdDeviation="2.5" flood-color="rgba(27,16,23,0.15)"/></filter>
        <!-- Kios 1: Tenda Cafe belang krem & hijau -->
        <g transform="translate(60, 50)" filter="url(#ws2-shadow)">
          <path d="M 0,40 Q 50,15 100,40 L 90,80 L 10,80 Z" fill="#F8F8C8"/>
          <path d="M 20,30 Q 35,22 50,30 L 45,80 L 25,80 Z" fill="#066838"/>
          <path d="M 70,30 Q 85,22 100,40 L 90,80 L 75,80 Z" fill="#066838"/>
          <rect x="15" y="80" width="70" height="60" fill="#5A3A2E"/>
        </g>
        <!-- Kios 2: Klinik dengan salib pink & putih (never red) -->
        <g transform="translate(240, 40)" filter="url(#ws2-shadow)">
          <rect x="10" y="30" width="90" height="100" rx="4" fill="#FFD6E8"/>
          <rect x="45" y="55" width="20" height="50" rx="2" fill="#FFFFFF"/>
          <rect x="30" y="70" width="50" height="20" rx="2" fill="#FFFFFF"/>
          <rect x="49" y="59" width="12" height="42" rx="1" fill="#FF8DC7"/>
          <rect x="34" y="74" width="42" height="12" rx="1" fill="#FF8DC7"/>
        </g>
        <!-- Kios 3: Gerbang keberangkatan dengan pesawat kertas kecil bertali -->
        <g transform="translate(420, 30)" filter="url(#ws2-shadow)">
          <rect x="20" y="40" width="80" height="90" rx="3" fill="#A7D8F5"/>
          <path d="M 30,50 L 90,50 L 60,10 Z" fill="#8EC2DF"/>
          <!-- Pesawat kertas kecil bertali -->
          <line x1="60" y1="10" x2="60" y2="-15" stroke="#D9B98C" stroke-width="1.5" stroke-dasharray="3 2"/>
          <polygon points="60,-15 45,-30 75,-30" fill="#FFFDF9"/>
        </g>
      </svg>`;
    }
    case 'W_strip-3C-4_far': {
      // Butik kanopi dusty-rose #E8A5B8 & menara radio #7A2E5C lampu merah #E5173F (4:1)
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 200" width="800" height="200">
        <filter id="ws3-shadow"><feDropShadow dx="2" dy="3" stdDeviation="2.5" flood-color="rgba(27,16,23,0.15)"/></filter>
        <!-- Kanopi butik dusty rose -->
        <g transform="translate(150, 60)" filter="url(#ws3-shadow)">
          <polygon points="20,40 160,20 180,60 0,80" fill="#E8A5B8"/>
          <rect x="20" y="80" width="140" height="80" fill="#FFFDF9"/>
          <circle cx="90" cy="115" r="16" fill="#FFB3D9"/>
        </g>
        <!-- Menara radio tinggi dengan lampu merah kelap-kelip -->
        <g transform="translate(560, 20)" filter="url(#ws3-shadow)">
          <line x1="40" y1="20" x2="20" y2="180" stroke="#7A2E5C" stroke-width="3.5"/>
          <line x1="40" y1="20" x2="60" y2="180" stroke="#7A2E5C" stroke-width="3.5"/>
          <line x1="26" y1="70" x2="54" y2="70" stroke="#7A2E5C" stroke-width="2"/>
          <line x1="23" y1="120" x2="57" y2="120" stroke="#7A2E5C" stroke-width="2"/>
          <!-- Lampu merah -->
          <circle cx="40" cy="18" r="6" fill="#E5173F"/>
          <circle cx="40" cy="18" r="10" fill="#E5173F" opacity="0.35"/>
        </g>
      </svg>`;
    }
    case 'W_strip-3C-4_path': {
      // Pantai pastel: pasir #F3E3B8 bertemu laut #A7D8F5 dengan ombak deckle (4:1, top-down)
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 200" width="800" height="200">
        <!-- Laut pastel -->
        <rect width="800" height="110" fill="#A7D8F5"/>
        <!-- Puncak ombak potongan kertas deckle -->
        <path d="M 0,110 Q 50,95 100,110 T 200,110 T 300,110 T 400,110 T 500,110 T 600,110 T 700,110 T 800,110 L 800,120 L 0,120 Z" fill="#FFFDF9" opacity="0.85"/>
        <!-- Pasir pantai -->
        <rect y="115" width="800" height="85" fill="#F3E3B8"/>
        <!-- Kapal layar kertas kecil melintas di laut -->
        <polygon points="400,45 425,75 375,75" fill="#FFFDF9"/>
        <polygon points="360,75 440,75 425,90 375,90" fill="#5A3A2E"/>
      </svg>`;
    }
    case 'W_strip-4-5_far': {
      // Memory Hill (bukit hijau + perpustakaan di puncak) & fasad Archive Hall (4:1)
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 200" width="800" height="200">
        <filter id="ws4-shadow"><feDropShadow dx="2" dy="3" stdDeviation="2.5" flood-color="rgba(27,16,23,0.14)"/></filter>
        <!-- Bukit hijau Memory Hill -->
        <path d="M 80,200 Q 250,50 420,200 Z" fill="#A8E6CF" opacity="0.8" filter="url(#ws4-shadow)"/>
        <!-- Gedung perpustakaan di atas bukit -->
        <g transform="translate(200, 75)" filter="url(#ws4-shadow)">
          <polygon points="10,40 50,15 90,40" fill="#5A3A2E"/>
          <rect x="15" y="40" width="70" height="50" fill="#F3E3B8"/>
          <line x1="30" y1="50" x2="30" y2="80" stroke="#7A4A32" stroke-width="2"/>
          <line x1="50" y1="50" x2="50" y2="80" stroke="#7A4A32" stroke-width="2"/>
          <line x1="70" y1="50" x2="70" y2="80" stroke="#7A4A32" stroke-width="2"/>
        </g>
        <!-- Fasad laci Archive Hall -->
        <g transform="translate(540, 60)" filter="url(#ws4-shadow)">
          <rect width="160" height="120" rx="3" fill="#D9D3D6"/>
          <rect x="15" y="15" width="35" height="25" rx="1" fill="#FFFDF9"/>
          <rect x="60" y="15" width="35" height="25" rx="1" fill="#FFFDF9"/>
          <rect x="105" y="15" width="35" height="25" rx="1" fill="#FFFDF9"/>
          <rect x="15" y="50" width="35" height="25" rx="1" fill="#FFFDF9"/>
          <rect x="60" y="50" width="35" height="25" rx="1" fill="#FFFDF9"/>
          <rect x="105" y="50" width="35" height="25" rx="1" fill="#FFFDF9"/>
        </g>
      </svg>`;
    }
    case 'W_strip-4-5_path': {
      // Pita kaset mengambang melingkar cokelat #5A3A2E (5:1)
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 150" width="750" height="150">
        <filter id="ws4p-shadow"><feDropShadow dx="2" dy="3" stdDeviation="2" flood-color="rgba(27,16,23,0.18)"/></filter>
        <path d="M 40,80 Q 150,20 260,80 T 480,80 T 700,80" fill="none" stroke="#5A3A2E" stroke-width="8" stroke-linecap="round" filter="url(#ws4p-shadow)"/>
        <path d="M 120,60 C 150,110 210,110 240,60 C 270,10 330,10 360,60" fill="none" stroke="#7A4A32" stroke-width="4" stroke-dasharray="8 4"/>
      </svg>`;
    }
    case 'W_strip-5-6_far': {
      // Menara radio 2.2 Hd plum #7A2E5C lampu merah #E5173F (1:3 vertikal)
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 450" width="150" height="450">
        <filter id="ws5-shadow"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="rgba(27,16,23,0.20)"/></filter>
        <g filter="url(#ws5-shadow)">
          <line x1="75" y1="40" x2="30" y2="420" stroke="#7A2E5C" stroke-width="4.5"/>
          <line x1="75" y1="40" x2="120" y2="420" stroke="#7A2E5C" stroke-width="4.5"/>
          <line x1="45" y1="140" x2="105" y2="140" stroke="#7A2E5C" stroke-width="3"/>
          <line x1="38" y1="240" x2="112" y2="240" stroke="#7A2E5C" stroke-width="3"/>
          <line x1="32" y1="340" x2="118" y2="340" stroke="#7A2E5C" stroke-width="3"/>
          <circle cx="75" cy="35" r="10" fill="#E5173F"/>
          <circle cx="75" cy="35" r="18" fill="#E5173F" opacity="0.35"/>
        </g>
      </svg>`;
    }
    case 'W_strip-7-8_far': {
      // Gedung sekolah dengan jam Paper School (ulang dari 0-51)
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
        <filter id="ws7-shadow"><feDropShadow dx="2" dy="4" stdDeviation="3" flood-color="rgba(27,16,23,0.15)"/></filter>
        <polygon points="60,110 200,40 340,110" fill="#C97F94" filter="url(#ws7-shadow)"/>
        <rect x="80" y="110" width="240" height="160" rx="3" fill="#FFFDF9" filter="url(#ws7-shadow)"/>
        <circle cx="200" cy="90" r="22" fill="#FFFDF9" stroke="#C97F94" stroke-width="2"/>
        <line x1="200" y1="90" x2="200" y2="76" stroke="#1B1017" stroke-width="2.5"/>
        <line x1="200" y1="90" x2="212" y2="90" stroke="#1B1017" stroke-width="2"/>
      </svg>`;
    }
    default:
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 150" width="400" height="150"><rect width="400" height="150" fill="#F0E8D8"/></svg>`;
  }
}

// ─────────────────────────────────────────────────────────────
// 3. GENERATOR 12 M_* (Peta Paper Town & 9 Landmark)
// ─────────────────────────────────────────────────────────────

export function generateMapSvg(id) {
  switch (id) {
    case 'M_map_paper-town': {
      // Peta Paper Town: 9 landmark siluet dihubungkan 1 rute jahitan melingkar (3:2)
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="600" height="400">
        <filter id="map-shadow"><feDropShadow dx="2" dy="4" stdDeviation="3.5" flood-color="rgba(27,16,23,0.15)"/></filter>
        <!-- Halaman kertas peta bertepi deckle -->
        <rect x="20" y="20" width="560" height="360" rx="8" fill="#FFFDF9" filter="url(#map-shadow)"/>
        <!-- Rute jahitan melingkar menghubungkan 9 lokasi -->
        <path d="M 90,300 C 50,150 180,60 300,70 C 440,80 520,180 480,290 C 440,360 200,360 90,300 Z" fill="none" stroke="#FF8DC7" stroke-width="3" stroke-dasharray="7 5"/>
        <!-- 9 Titik Landmark -->
        <circle cx="90" cy="300" r="14" fill="#B7D9A8"/>
        <text x="90" y="304" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1B1017" text-anchor="middle">0</text>
        <circle cx="160" cy="130" r="14" fill="#FFFFFF" stroke="#D0D6DE" stroke-width="1.5"/>
        <text x="160" y="134" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1B1017" text-anchor="middle">1</text>
        <circle cx="280" cy="70" r="14" fill="#F3E3B8"/>
        <text x="280" y="74" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1B1017" text-anchor="middle">2</text>
        <circle cx="410" cy="100" r="14" fill="#D4C1F5"/>
        <text x="410" y="104" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1B1017" text-anchor="middle">3</text>
        <circle cx="500" cy="180" r="14" fill="#E8A5B8"/>
        <text x="500" y="184" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1B1017" text-anchor="middle">4</text>
        <circle cx="470" cy="270" r="14" fill="#F3E3B8"/>
        <text x="470" y="274" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1B1017" text-anchor="middle">5</text>
        <circle cx="370" cy="330" r="14" fill="#DA9AF2"/>
        <text x="370" y="334" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1B1017" text-anchor="middle">6</text>
        <circle cx="250" cy="340" r="14" fill="#D9D3D6"/>
        <text x="250" y="344" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1B1017" text-anchor="middle">7</text>
        <circle cx="130" cy="330" r="14" fill="#FFD6E8"/>
        <text x="130" y="334" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1B1017" text-anchor="middle">8</text>
        <!-- Judul Peta -->
        <text x="300" y="200" font-family="'Fraunces', serif" font-size="28" font-style="italic" fill="#1B1017" text-anchor="middle">Paper Town</text>
        <text x="300" y="222" font-family="'DM Mono', monospace" font-size="11" fill="#1B1017" opacity="0.6" text-anchor="middle">A Loop Journey Through 9 Worlds</text>
      </svg>`;
    }
    case 'M_cap-kunjungan': {
      // Cap stempel merah bundar dengan centang
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
        <circle cx="50" cy="50" r="42" fill="none" stroke="#E5173F" stroke-width="4.5" stroke-dasharray="6 3" opacity="0.75"/>
        <circle cx="50" cy="50" r="35" fill="#E5173F" opacity="0.12"/>
        <path d="M 32,50 L 45,64 L 68,36" fill="none" stroke="#E5173F" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/>
      </svg>`;
    }
    case 'M_og-image': {
      // 1200x630 share image
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
        <rect width="1200" height="630" fill="#FFFDF9"/>
        <rect x="40" y="40" width="1120" height="550" rx="12" fill="#F8F0DC" opacity="0.6"/>
        <text x="600" y="280" font-family="'Fraunces', serif" font-size="64" font-style="italic" fill="#1B1017" text-anchor="middle">Jassinta's Paper Doll Journey</text>
        <text x="600" y="340" font-family="'DM Mono', monospace" font-size="22" fill="#1B1017" opacity="0.75" text-anchor="middle" letter-spacing="3">DIGITAL CONTENT EXECUTIVE · CREATIVE PORTFOLIO</text>
        <circle cx="600" cy="450" r="60" fill="#FFD6E8"/>
        <text x="600" y="460" font-family="'Shantell Sans', cursive" font-size="26" font-weight="bold" fill="#1B1017" text-anchor="middle">START</text>
      </svg>`;
    }
    default: {
      // Landmark individu M_lm-0 sampai M_lm-8
      const colors = {
        'M_lm-0_paper-school': '#B7D9A8',
        'M_lm-1_office-block': '#FFFFFF',
        'M_lm-2_press-tower':  '#F3E3B8',
        'M_lm-3_creator-plaza':'#D4C1F5',
        'M_lm-4_fashion-row':  '#E8A5B8',
        'M_lm-5_memory-hill':  '#F3E3B8',
        'M_lm-6_radio-tower':  '#DA9AF2',
        'M_lm-7_archive-hall': '#D9D3D6',
        'M_lm-8_mailbox':      '#FFD6E8',
      };
      const tint = colors[id] || '#FFFDF9';
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" width="160" height="160">
        <filter id="lm-sh-${id}"><feDropShadow dx="1.5" dy="3" stdDeviation="2" flood-color="rgba(27,16,23,0.15)"/></filter>
        <rect x="15" y="15" width="130" height="130" rx="10" fill="${tint}" filter="url(#lm-sh-${id})"/>
        <rect x="25" y="25" width="110" height="110" rx="6" fill="#FFFDF9" opacity="0.6"/>
        <circle cx="80" cy="80" r="28" fill="${tint}"/>
        <text x="80" y="86" font-family="monospace" font-size="14" font-weight="bold" fill="#1B1017" text-anchor="middle">${id.replace('M_lm-', '')}</text>
      </svg>`;
    }
  }
}

// ─────────────────────────────────────────────────────────────
// 4. GENERATOR 18 H_* (HUD, Stiker, Tombol, Komponen UI)
// ─────────────────────────────────────────────────────────────

export function generateHudSvg(id) {
  switch (id) {
    case 'H_chip-babak-1': {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 40" width="160" height="40">
        <rect x="4" y="4" width="152" height="32" rx="16" fill="#A8E6CF" filter="drop-shadow(1px 2px 2px rgba(27,16,23,0.12))"/>
        <text x="80" y="24" font-family="'DM Mono', monospace" font-size="11" font-weight="bold" fill="#1B1017" text-anchor="middle" letter-spacing="1">ACT I · FELT</text>
      </svg>`;
    }
    case 'H_chip-babak-2': {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 40" width="160" height="40">
        <rect x="4" y="4" width="152" height="32" rx="16" fill="#BFE3F5" filter="drop-shadow(1px 2px 2px rgba(27,16,23,0.12))"/>
        <text x="80" y="24" font-family="'DM Mono', monospace" font-size="11" font-weight="bold" fill="#1B1017" text-anchor="middle" letter-spacing="1">ACT II · SHARED</text>
      </svg>`;
    }
    case 'H_chip-babak-3': {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 40" width="180" height="40">
        <rect x="4" y="4" width="172" height="32" rx="16" fill="#FFB38A" filter="drop-shadow(1px 2px 2px rgba(27,16,23,0.12))"/>
        <text x="90" y="24" font-family="'DM Mono', monospace" font-size="11" font-weight="bold" fill="#1B1017" text-anchor="middle" letter-spacing="1">ACT III · REMEMBERED</text>
      </svg>`;
    }
    case 'H_rel-progres': {
      // Rel jahitan vertikal tipis (1:20) dengan kepala doll
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 480" width="24" height="480">
        <line x1="12" y1="0" x2="12" y2="480" stroke="#FF8DC7" stroke-width="2.5" stroke-dasharray="6 4"/>
        <!-- Kepala doll penanda -->
        <circle cx="12" cy="180" r="10" fill="#1F1F1F"/>
        <ellipse cx="12" cy="180" rx="7" ry="8" fill="#E8B795"/>
      </svg>`;
    }
    case 'H_tombol-index': {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40" width="120" height="40">
        <rect x="3" y="3" width="114" height="34" rx="17" fill="#FFFFFF" stroke="#1B1017" stroke-width="1.8" filter="drop-shadow(1px 2px 3px rgba(27,16,23,0.15))"/>
        <text x="60" y="25" font-family="'DM Mono', monospace" font-size="12" font-weight="bold" fill="#1B1017" text-anchor="middle" letter-spacing="1.5">INDEX</text>
      </svg>`;
    }
    case 'H_stiker-quick-look': {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 40" width="240" height="40">
        <g transform="rotate(-3 120 20)">
          <rect x="4" y="4" width="232" height="32" rx="16" fill="#FFF1A8" filter="drop-shadow(1px 2px 3px rgba(27,16,23,0.18))"/>
          <text x="120" y="24" font-family="'Shantell Sans', cursive" font-size="11" font-weight="600" fill="#1B1017" text-anchor="middle">In a hurry? Take the shortcut →</text>
        </g>
      </svg>`;
    }
    case 'H_tombol-info': {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 32" width="90" height="32">
        <rect x="3" y="3" width="84" height="26" rx="13" fill="#FFF1A8" filter="drop-shadow(1px 2px 2px rgba(27,16,23,0.15))"/>
        <text x="45" y="20" font-family="'DM Mono', monospace" font-size="11" font-weight="bold" fill="#1B1017" text-anchor="middle">INFO</text>
      </svg>`;
    }
    case 'H_tombol-credit': {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 32" width="90" height="32">
        <rect x="3" y="3" width="84" height="26" rx="13" fill="#FFFDF9" filter="drop-shadow(1px 2px 2px rgba(27,16,23,0.15))"/>
        <text x="45" y="20" font-family="'DM Mono', monospace" font-size="11" font-weight="bold" fill="#1B1017" text-anchor="middle">CREDIT</text>
      </svg>`;
    }
    case 'H_hover-label-price-tag': {
      // Paper price tag dengan cut corner, tali tan #D9B98C dan jahitan (5:2)
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80" width="200" height="80">
        <g transform="rotate(3 100 40)">
          <line x1="20" y1="40" x2="0" y2="35" stroke="#D9B98C" stroke-width="2.5"/>
          <polygon points="30,40 45,15 185,15 185,65 45,65" fill="#FFFDF9" filter="drop-shadow(2px 3px 3px rgba(27,16,23,0.16))"/>
          <circle cx="36" cy="40" r="3.5" fill="#D9B98C"/>
          <line x1="55" y1="20" x2="175" y2="20" stroke="#E5173F" stroke-width="1" stroke-dasharray="4 3"/>
          <line x1="55" y1="60" x2="175" y2="60" stroke="#E5173F" stroke-width="1" stroke-dasharray="4 3"/>
        </g>
      </svg>`;
    }
    case 'H_sticker-button': {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40" width="120" height="40">
        <rect x="3" y="3" width="114" height="34" rx="17" fill="#FF2E93" filter="drop-shadow(2px 3px 4px rgba(255,46,147,0.35))"/>
        <rect x="6" y="6" width="108" height="28" rx="14" fill="#FF4DA4"/>
      </svg>`;
    }
    case 'H_pushpin-red': {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="60" height="60">
        <line x1="30" y1="30" x2="48" y2="48" stroke="#C9CCD5" stroke-width="3" stroke-linecap="round"/>
        <circle cx="26" cy="26" r="14" fill="#E5173F" filter="drop-shadow(2px 3px 3px rgba(27,16,23,0.25))"/>
        <circle cx="23" cy="23" r="5" fill="#FFA3B3" opacity="0.6"/>
      </svg>`;
    }
    case 'H_pushpin-pink': {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="60" height="60">
        <line x1="30" y1="30" x2="48" y2="48" stroke="#C9CCD5" stroke-width="3" stroke-linecap="round"/>
        <circle cx="26" cy="26" r="14" fill="#FF2E93" filter="drop-shadow(2px 3px 3px rgba(27,16,23,0.25))"/>
        <circle cx="23" cy="23" r="5" fill="#FF8DC7" opacity="0.6"/>
      </svg>`;
    }
    case 'H_pushpin-wisteria': {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="60" height="60">
        <line x1="30" y1="30" x2="48" y2="48" stroke="#C9CCD5" stroke-width="3" stroke-linecap="round"/>
        <circle cx="26" cy="26" r="14" fill="#A98BDA" filter="drop-shadow(2px 3px 3px rgba(27,16,23,0.25))"/>
        <circle cx="23" cy="23" r="5" fill="#D4C1F5" opacity="0.6"/>
      </svg>`;
    }
    case 'H_papernote': {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
        <rect x="8" y="8" width="84" height="84" rx="4" fill="#F3E3B8" filter="drop-shadow(2px 3px 4px rgba(27,16,23,0.18))"/>
        <polygon points="72,92 92,72 92,92" fill="#DBC99C"/>
        <line x1="20" y1="28" x2="70" y2="28" stroke="#1B1017" stroke-width="2" stroke-linecap="round" opacity="0.4"/>
        <line x1="20" y1="42" x2="80" y2="42" stroke="#1B1017" stroke-width="1.8" stroke-linecap="round" opacity="0.3"/>
        <line x1="20" y1="56" x2="65" y2="56" stroke="#1B1017" stroke-width="1.8" stroke-linecap="round" opacity="0.3"/>
      </svg>`;
    }
    case 'H_photoframe': {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 200" width="150" height="200">
        <rect x="10" y="10" width="130" height="180" rx="3" fill="#FFFDF9" filter="drop-shadow(2px 4px 5px rgba(27,16,23,0.16))"/>
        <rect x="22" y="22" width="106" height="135" fill="#F0E8D8"/>
      </svg>`;
    }
    case 'H_speech-bubble': {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120" width="200" height="120">
        <!-- Washi tape tab pink di pojok kiri atas -->
        <rect x="15" y="6" width="35" height="14" rx="1" fill="#FFB3D9" opacity="0.85"/>
        <!-- Badan bubble + ekor -->
        <path d="M 20,20 L 180,20 Q 190,20 190,30 L 190,90 Q 190,100 180,100 L 60,100 L 40,118 L 45,100 L 20,100 Q 10,100 10,90 L 10,30 Q 10,20 20,20 Z" fill="#FFFDF9" filter="drop-shadow(2px 3px 4px rgba(27,16,23,0.15))"/>
      </svg>`;
    }
    case 'H_wall-note': {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 80" width="160" height="80">
        <rect x="6" y="6" width="148" height="68" rx="8" fill="#FFF8EE" opacity="0.7" stroke="#1B1017" stroke-width="1.5" stroke-dasharray="6 4"/>
      </svg>`;
    }
    case 'H_doll-404-peta': {
      // Seragam doll membawa peta dengan tanda tanya di atas hijab
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 280" width="200" height="280">
        <filter id="d404-sh"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="rgba(27,16,23,0.18)"/></filter>
        <g filter="url(#d404-sh)">
          <!-- Hijab & Tubuh Doll -->
          <circle cx="100" cy="80" r="38" fill="#1F1F1F"/>
          <ellipse cx="100" cy="85" rx="22" ry="26" fill="#E8B795"/>
          <circle cx="92" cy="82" r="2.5" fill="#1B1017"/>
          <circle cx="108" cy="82" r="2.5" fill="#1B1017"/>
          <circle cx="86" cy="90" r="4.5" fill="#E9A39B" opacity="0.6"/>
          <circle cx="114" cy="90" r="4.5" fill="#E9A39B" opacity="0.6"/>
          <!-- Badan seragam -->
          <rect x="80" y="120" width="40" height="50" rx="3" fill="#A8E6CF"/>
          <polygon points="70,170 130,170 140,230 60,230" fill="#BFE3F5"/>
          <!-- Peta terlipat di tangan -->
          <polygon points="75,130 125,125 130,165 70,170" fill="#FFFDF9" stroke="#E5173F" stroke-width="1"/>
          <!-- Dua tanda tanya di atas hijab -->
          <text x="80" y="35" font-family="'Fraunces', serif" font-size="24" font-weight="bold" fill="#E5173F">?</text>
          <text x="115" y="30" font-family="'Fraunces', serif" font-size="20" font-weight="bold" fill="#E5173F">?</text>
        </g>
      </svg>`;
    }
    default:
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><circle cx="50" cy="50" r="40" fill="#FFF1A8"/></svg>`;
  }
}

// ─────────────────────────────────────────────────────────────
// PROSES RENDER KE SVG DAN WEBP
// ─────────────────────────────────────────────────────────────

async function processAsset(id, file, folder, generatorFn) {
  const base = file.replace(/\.(webp|svg|png)$/i, '');
  const outDir = join(root, 'public', 'assets', folder);
  const svgPath = join(outDir, `${base}.svg`);
  const webpPath = join(outDir, `${base}.webp`);
  const webp2xPath = join(outDir, `${base}@2x.webp`);

  const svgContent = generatorFn(id);
  writeFileSync(svgPath, svgContent, 'utf8');

  const buf = Buffer.from(svgContent);
  // WebP 1x
  await sharp(buf)
    .webp({ quality: 85, lossless: false })
    .toFile(webpPath);

  // WebP 2x
  await sharp(buf)
    .webp({ quality: 85, lossless: false })
    .toFile(webp2xPath);

  return { file, svgPath, webpPath };
}

export async function generateP05Assets() {
  console.log('[generate-p05] Memulai pembuatan 50 aset P05...');
  let count = 0;

  // 1. S_label (12 file)
  for (const id of Object.keys(LABEL_SPECS)) {
    const file = `${id}_V0.webp`;
    await processAsset(id, file, 'ui', generateLabelSvg);
    count++;
  }

  // 2. W_strip (8 file)
  const stripIds = [
    'W_strip-0-1_far', 'W_strip-2-3_path', 'W_strip-3C-4_far',
    'W_strip-3C-4_path', 'W_strip-4-5_far', 'W_strip-4-5_path',
    'W_strip-5-6_far', 'W_strip-7-8_far',
  ];
  for (const id of stripIds) {
    const angle = id.includes('_path') && id.includes('3C') ? 'VT' : 'V0';
    const file = `${id}_${angle}.webp`;
    // W_strip-7-8_far adalah reuse_of
    if (id === 'W_strip-7-8_far') {
      // Simpan SVG untuk kelengkapan
      const svgPath = join(stripsDir, `${id}_V0.svg`);
      writeFileSync(svgPath, generateStripSvg(id), 'utf8');
      continue;
    }
    await processAsset(id, file, 'strips', generateStripSvg);
    count++;
  }

  // 3. M_* (12 file)
  const mapIds = [
    { id: 'M_map_paper-town', file: 'M_map_paper-town_VT.webp', folder: 'map' },
    { id: 'M_cap-kunjungan',  file: 'M_cap-kunjungan_V0.webp',  folder: 'map' },
    { id: 'M_og-image',       file: 'M_og-image_V0.webp',       folder: 'map' },
    { id: 'M_lm-0_paper-school', file: 'M_lm-0_paper-school_V0.webp', folder: 'map' },
    { id: 'M_lm-1_office-block', file: 'M_lm-1_office-block_V0.webp', folder: 'map' },
    { id: 'M_lm-2_press-tower',  file: 'M_lm-2_press-tower_V0.webp',  folder: 'map' },
    { id: 'M_lm-3_creator-plaza',file: 'M_lm-3_creator-plaza_V0.webp',folder: 'map' },
    { id: 'M_lm-4_fashion-row',  file: 'M_lm-4_fashion-row_V0.webp',  folder: 'map' },
    { id: 'M_lm-5_memory-hill',  file: 'M_lm-5_memory-hill_V0.webp',  folder: 'map' },
    { id: 'M_lm-6_radio-tower',  file: 'M_lm-6_radio-tower_V0.webp',  folder: 'map' },
    { id: 'M_lm-7_archive-hall', file: 'M_lm-7_archive-hall_V0.webp', folder: 'map' },
    { id: 'M_lm-8_mailbox',      file: 'M_lm-8_mailbox_V0.webp',      folder: 'map' },
  ];
  for (const m of mapIds) {
    await processAsset(m.id, m.file, m.folder, generateMapSvg);
    count++;
  }

  // 4. H_* (18 file)
  const hudIds = [
    'H_chip-babak-1', 'H_chip-babak-2', 'H_chip-babak-3', 'H_rel-progres',
    'H_tombol-index', 'H_stiker-quick-look', 'H_tombol-info', 'H_tombol-credit',
    'H_hover-label-price-tag', 'H_sticker-button', 'H_pushpin-red', 'H_pushpin-pink',
    'H_pushpin-wisteria', 'H_papernote', 'H_photoframe', 'H_speech-bubble',
    'H_wall-note', 'H_doll-404-peta',
  ];
  for (const id of hudIds) {
    const file = `${id}_V0.webp`;
    await processAsset(id, file, 'ui', generateHudSvg);
    count++;
  }

  console.log(`[generate-p05] Selesai! ${count} aset P05 dihasilkan.`);
}

// Jalankan bila dieksekusi langsung
if (process.argv[1] && process.argv[1].endsWith('generate-p05-assets.mjs')) {
  generateP05Assets().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
