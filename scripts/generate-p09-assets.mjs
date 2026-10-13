/**
 * scripts/generate-p09-assets.mjs
 * Generator presisi untuk 31 aset manifest owner_prompt=P09:
 * 11 aset 3.0 Lobby (L-01 s/d L-11)
 * 20 aset 3A Cafe (A-01 s/d A-20)
 *
 * Mengikuti:
 * - DF 16 (Chapter 3: The Creator Trilogy: 16.1, 16.2, 16.3)
 * - DV 8.4 (Chapter 3.0: The Creator Lobby)
 * - DV 8.5 (Chapter 3A: The Café Elspresso)
 * - DF 28.2 & 28.4 (Warna brand & penerapan per chapter)
 * - DV 2 (Maksimal 3 nada, serat + bintik kertas handmade, drop-shadow)
 * - PRNG deterministik seeded dari hashId(ID)
 */

import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { createHash } from 'node:crypto';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const worldDir = join(root, 'public', 'assets', 'world');
mkdirSync(worldDir, { recursive: true });

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

// Helper untuk menghasilkan bintik dan serat kertas handmade
function generatePaperTextureSvg(w, h, seed, fiberColor = '#BBA7E6', speckColor = '#1B1017') {
  const prng = createPRNG(seed);
  let elements = '';
  // Serat melengkung
  for (let i = 0; i < 24; i++) {
    const x1 = Math.floor(prng() * w);
    const y1 = Math.floor(prng() * h);
    const dx = Math.floor((prng() - 0.5) * 40);
    const dy = Math.floor((prng() - 0.5) * 40);
    const cx = x1 + dx / 2 + (prng() - 0.5) * 15;
    const cy = y1 + dy / 2 + (prng() - 0.5) * 15;
    elements += `<path d="M${x1},${y1} Q${cx},${cy} ${x1 + dx},${y1 + dy}" stroke="${fiberColor}" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.45"/>`;
  }
  // Bintik kecil alami
  for (let i = 0; i < 35; i++) {
    const x = Math.floor(prng() * w);
    const y = Math.floor(prng() * h);
    const r = (prng() * 1.2 + 0.6).toFixed(1);
    elements += `<circle cx="${x}" cy="${y}" r="${r}" fill="${speckColor}" opacity="0.18"/>`;
  }
  return elements;
}

// ─────────────────────────────────────────────────────────────
// 1. GENERATOR 11 ASET 3.0 LOBBY (L-01 .. L-11)
// ─────────────────────────────────────────────────────────────

function renderLobbyAssets() {
  const assets = [];

  // L-01: Dinding Lobi (Lilac #D4C1F5, serat #BBA7E6, pita tepi #E5173F 55%, 16:9)
  assets.push({
    file: '3-0_L-01_dinding-lobi_V0.webp',
    width: 1280,
    height: 720,
    render: (w, h, seed) => {
      const tex = generatePaperTextureSvg(w, h, seed, '#BBA7E6', '#2B1A24');
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
        <rect width="${w}" height="${h}" fill="#D4C1F5"/>
        ${tex}
        <!-- Pita Tepi 8px #E5173F 55% di tepi kiri dan kanan -->
        <rect x="24" y="0" width="8" height="${h}" fill="#E5173F" opacity="0.55"/>
        <rect x="${w - 32}" y="0" width="8" height="${h}" fill="#E5173F" opacity="0.55"/>
      </svg>`;
    },
  });

  // L-02: Lantai Lobi (Ubin belah ketupat mint #D4F2E4 & lilac #D4C1F5, lipatan 64px, 4:1)
  assets.push({
    file: '3-0_L-02_lantai-lobi_VT.webp',
    width: 1200,
    height: 300,
    render: (w, h, seed) => {
      const prng = createPRNG(seed);
      let tiles = '';
      const step = 64;
      for (let y = 0; y < h; y += step / 2) {
        for (let x = 0; x < w; x += step) {
          const shift = (Math.floor(y / (step / 2)) % 2) * (step / 2);
          const cx = x + shift;
          const cy = y;
          const isMint = ((Math.floor(x / step) + Math.floor(y / (step / 2))) % 2) === 0;
          const fill = isMint ? '#D4F2E4' : '#D4C1F5';
          tiles += `<polygon points="${cx},${cy - 20} ${cx + 32},${cy} ${cx},${cy + 20} ${cx - 32},${cy}" fill="${fill}" stroke="#1B1017" stroke-width="0.8" stroke-opacity="0.15"/>`;
        }
      }
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
        <rect width="${w}" height="${h}" fill="#D4C1F5"/>
        ${tiles}
        <line x1="0" y1="0" x2="${w}" y2="0" stroke="#1B1017" stroke-width="2" stroke-opacity="0.25"/>
      </svg>`;
    },
  });

  // L-03: Panel Brand Penuh (3 panel: Hijau #066838, emas #B08418, hijau #066838, 3:2)
  assets.push({
    file: '3-0_L-03_panel-brand_V0.webp',
    width: 900,
    height: 600,
    render: (w, h) => {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
        <!-- Panel 1: Cafe Elspresso (Hijau #066838 + trim krem #F8F8C8) -->
        <g transform="translate(30, 20)">
          <rect width="260" height="560" rx="8" fill="#066838" stroke="#1B1017" stroke-width="2" filter="drop-shadow(2px 3px 4px rgba(27,16,23,0.18))"/>
          <rect x="12" y="12" width="236" height="536" rx="4" fill="none" stroke="#F8F8C8" stroke-width="3" stroke-dasharray="8 4"/>
          <text x="130" y="280" font-family="'DM Mono', monospace" font-size="20" font-weight="bold" fill="#F8F8C8" text-anchor="middle">ELSPRESSO</text>
          <text x="130" y="310" font-family="'Fraunces', serif" font-size="14" font-style="italic" fill="#FFFDF9" text-anchor="middle">Café &amp; Pastry</text>
        </g>
        <!-- Panel 2: Klinik Elsthetic (Emas #B08418 + trim amber #F0A810) -->
        <g transform="translate(320, 20)">
          <rect width="260" height="560" rx="8" fill="#B08418" stroke="#1B1017" stroke-width="2" filter="drop-shadow(2px 3px 4px rgba(27,16,23,0.18))"/>
          <rect x="12" y="12" width="236" height="536" rx="4" fill="none" stroke="#F0A810" stroke-width="3"/>
          <circle cx="130" cy="220" r="28" fill="#FFFDF9" opacity="0.9"/>
          <path d="M124,220 H136 M130,214 V226" stroke="#FF8DC7" stroke-width="4" stroke-linecap="round"/>
          <text x="130" y="280" font-family="'DM Mono', monospace" font-size="20" font-weight="bold" fill="#FFFDF9" text-anchor="middle">ELSTHETIC</text>
          <text x="130" y="310" font-family="'Fraunces', serif" font-size="14" font-style="italic" fill="#F8F8C8" text-anchor="middle">Glow Clinic</text>
        </g>
        <!-- Panel 3: Terminal Karamina (Hijau #066838 + trim emas #D4A64A) -->
        <g transform="translate(610, 20)">
          <rect width="260" height="560" rx="8" fill="#066838" stroke="#1B1017" stroke-width="2" filter="drop-shadow(2px 3px 4px rgba(27,16,23,0.18))"/>
          <rect x="12" y="12" width="236" height="536" rx="4" fill="none" stroke="#D4A64A" stroke-width="3"/>
          <text x="130" y="280" font-family="'DM Mono', monospace" font-size="20" font-weight="bold" fill="#D4A64A" text-anchor="middle">KARAMINA</text>
          <text x="130" y="310" font-family="'Fraunces', serif" font-size="14" font-style="italic" fill="#FFFDF9" text-anchor="middle">Haji &amp; Umroh</text>
        </g>
      </svg>`;
    },
  });

  // L-04: Pintu Cafe (Kayu cocoa #5A3A2E, kanopi belang #F8F8C8 & #066838, papan sandwich kapur, 1:2)
  assets.push({
    file: '3-0_L-04_pintu-cafe_V0.webp',
    width: 500,
    height: 1000,
    render: (w, h) => {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
        <!-- Kanopi belang -->
        <g id="awning">
          <path d="M50,140 L450,140 L420,80 L80,80 Z" fill="#F8F8C8" stroke="#1B1017" stroke-width="2"/>
          <path d="M120,140 L170,140 L150,80 L110,80 Z" fill="#066838"/>
          <path d="M220,140 L270,140 L250,80 L210,80 Z" fill="#066838"/>
          <path d="M320,140 L370,140 L350,80 L310,80 Z" fill="#066838"/>
        </g>
        <!-- Kusen & Daun Pintu Kayu Cocoa #5A3A2E -->
        <rect x="70" y="140" width="360" height="780" rx="4" fill="#5A3A2E" stroke="#1B1017" stroke-width="2" filter="drop-shadow(3px 4px 6px rgba(27,16,23,0.22))"/>
        <!-- Panel inset pintu kayu -->
        <rect x="100" y="180" width="130" height="320" rx="4" fill="#472D24" stroke="#7A4A32" stroke-width="3"/>
        <rect x="270" y="180" width="130" height="320" rx="4" fill="#472D24" stroke="#7A4A32" stroke-width="3"/>
        <rect x="100" y="540" width="130" height="340" rx="4" fill="#472D24" stroke="#7A4A32" stroke-width="3"/>
        <rect x="270" y="540" width="130" height="340" rx="4" fill="#472D24" stroke="#7A4A32" stroke-width="3"/>
        <!-- Gagang pintu kuningan -->
        <rect x="375" y="490" width="16" height="60" rx="4" fill="#D4A64A" stroke="#1B1017" stroke-width="1.5"/>
        <!-- Papan menu sandwich kapur VL 4 deg -->
        <g transform="translate(20, 680) rotate(4)">
          <polygon points="10,240 70,30 130,240" fill="#7A4A32" stroke="#1B1017" stroke-width="2"/>
          <rect x="25" y="50" width="90" height="150" rx="3" fill="#3B3B3B" stroke="#1B1017" stroke-width="1.5"/>
          <text x="70" y="80" font-family="'Shantell Sans', cursive" font-size="12" fill="#FFFFFF" text-anchor="middle">Coffee</text>
          <path d="M55,95 C55,115 85,115 85,95 Z" fill="none" stroke="#FFFFFF" stroke-width="1.5"/>
          <line x1="60" y1="90" x2="60" y2="85" stroke="#FFFFFF" stroke-width="1"/>
          <line x1="70" y1="90" x2="70" y2="83" stroke="#FFFFFF" stroke-width="1"/>
          <line x1="80" y1="90" x2="80" y2="85" stroke="#FFFFFF" stroke-width="1"/>
        </g>
      </svg>`;
    },
  });

  // L-05: Pintu Klinik (Kaca #BFE3F5 tint 35%, bingkai emas #D4A64A, salib mini pink #FF8DC7 di atas putih, 1:2)
  assets.push({
    file: '3-0_L-05_pintu-klinik_V0.webp',
    width: 500,
    height: 1000,
    render: (w, h) => {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
        <!-- Bingkai Emas #D4A64A -->
        <rect x="60" y="100" width="380" height="840" rx="6" fill="#D4A64A" stroke="#1B1017" stroke-width="2" filter="drop-shadow(3px 4px 6px rgba(27,16,23,0.20))"/>
        <!-- Kaca Tint Biru 35% -->
        <rect x="80" y="120" width="340" height="800" rx="4" fill="#BFE3F5" fill-opacity="0.35" stroke="#FFFDF9" stroke-width="2"/>
        <!-- Goresan Sorot Kaca 45 derajat -->
        <line x1="120" y1="160" x2="380" y2="420" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" opacity="0.6"/>
        <line x1="150" y1="160" x2="250" y2="260" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.4"/>
        <!-- Gagang batang stainless/emas -->
        <rect x="360" y="440" width="18" height="140" rx="6" fill="#FFFDF9" stroke="#B08418" stroke-width="2"/>
        <!-- Salib mini merah muda #FF8DC7 di atas putih (BUKAN MERAH) -->
        <g transform="translate(250, 320)">
          <circle cx="0" cy="0" r="32" fill="#FFFFFF" stroke="#D4A64A" stroke-width="2" filter="drop-shadow(0 2px 3px rgba(0,0,0,0.15))"/>
          <path d="M-14,0 H14 M0,-14 V14" stroke="#FF8DC7" stroke-width="7" stroke-linecap="round"/>
        </g>
        <text x="250" y="380" font-family="'DM Mono', monospace" font-size="14" font-weight="bold" fill="#7A4A32" text-anchor="middle">ELSTHETIC</text>
      </svg>`;
    },
  });

  // L-06: Gerbang Keberangkatan (Lengkung krem #F8F8C8, dua pilar, papan Departures flip, trim emas #D4A64A, 3:5)
  assets.push({
    file: '3-0_L-06_gerbang-keberangkatan_V0.webp',
    width: 600,
    height: 1000,
    render: (w, h) => {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
        <!-- Pilar Kiri & Kanan Krem #F8F8C8 -->
        <rect x="50" y="240" width="90" height="720" rx="4" fill="#F8F8C8" stroke="#1B1017" stroke-width="2" filter="drop-shadow(2px 3px 4px rgba(27,16,23,0.18))"/>
        <rect x="460" y="240" width="90" height="720" rx="4" fill="#F8F8C8" stroke="#1B1017" stroke-width="2" filter="drop-shadow(2px 3px 4px rgba(27,16,23,0.18))"/>
        <!-- Trim Emas pada pilar -->
        <rect x="45" y="230" width="100" height="18" fill="#D4A64A" stroke="#1B1017" stroke-width="1.5"/>
        <rect x="455" y="230" width="100" height="18" fill="#D4A64A" stroke="#1B1017" stroke-width="1.5"/>
        <rect x="45" y="930" width="100" height="30" fill="#D4A64A" stroke="#1B1017" stroke-width="1.5"/>
        <rect x="455" y="930" width="100" height="30" fill="#D4A64A" stroke="#1B1017" stroke-width="1.5"/>
        <!-- Lengkung Gerbang Atas -->
        <path d="M50,240 C50,60 550,60 550,240 L460,240 C460,130 140,130 140,240 Z" fill="#F8F8C8" stroke="#1B1017" stroke-width="2"/>
        <path d="M70,230 C70,90 530,90 530,230" fill="none" stroke="#D4A64A" stroke-width="4"/>
        <!-- Papan Flip DEPARTURES Hijau Tua #04502A -->
        <g transform="translate(160, 160)">
          <rect width="280" height="64" rx="4" fill="#04502A" stroke="#D4A64A" stroke-width="2" filter="drop-shadow(0 3px 4px rgba(0,0,0,0.25))"/>
          <text x="140" y="40" font-family="'DM Mono', monospace" font-size="20" font-weight="bold" fill="#FFFDF9" text-anchor="middle" letter-spacing="4">DEPARTURES</text>
        </g>
      </svg>`;
    },
  });

  // L-07: Gelembung Notifikasi (5 gelembung melayang, #FFFFFF, #FFD6E8, #BFE3F5, satu berisi 1 ♥ (#FF2E93), 2:1)
  assets.push({
    file: '3-0_L-07_gelembung-notifikasi_V0.webp',
    width: 600,
    height: 300,
    render: (w, h) => {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
        <!-- Gelembung 1: Hot pink 1 ♥ -->
        <g transform="translate(40, 50)" filter="drop-shadow(2px 3px 4px rgba(27,16,23,0.18))">
          <rect width="110" height="54" rx="14" fill="#FFFFFF" stroke="#1B1017" stroke-width="1.5"/>
          <path d="M30,54 L20,68 L45,54 Z" fill="#FFFFFF" stroke="#1B1017" stroke-width="1.5"/>
          <text x="35" y="34" font-family="'DM Mono', monospace" font-size="18" font-weight="bold" fill="#1B1017">1</text>
          <path d="M70,30 C66,22 55,24 55,32 C55,42 70,48 70,48 C70,48 85,42 85,32 C85,24 74,22 70,30 Z" fill="#FF2E93"/>
        </g>
        <!-- Gelembung 2: Blush #FFD6E8 -->
        <g transform="translate(220, 30)" filter="drop-shadow(2px 3px 4px rgba(27,16,23,0.15))">
          <rect width="100" height="48" rx="12" fill="#FFD6E8" stroke="#1B1017" stroke-width="1.5"/>
          <path d="M70,48 L80,60 L55,48 Z" fill="#FFD6E8" stroke="#1B1017" stroke-width="1.5"/>
          <text x="50" y="30" font-family="'Shantell Sans', cursive" font-size="14" fill="#1B1017" text-anchor="middle">New Reel!</text>
        </g>
        <!-- Gelembung 3: Baby-blue #BFE3F5 -->
        <g transform="translate(400, 70)" filter="drop-shadow(2px 3px 4px rgba(27,16,23,0.15))">
          <rect width="120" height="50" rx="14" fill="#BFE3F5" stroke="#1B1017" stroke-width="1.5"/>
          <path d="M40,50 L30,64 L55,50 Z" fill="#BFE3F5" stroke="#1B1017" stroke-width="1.5"/>
          <text x="60" y="32" font-family="'DM Mono', monospace" font-size="13" font-weight="bold" fill="#04502A" text-anchor="middle">+38 Views</text>
        </g>
        <!-- Gelembung 4: White share -->
        <g transform="translate(120, 160)" filter="drop-shadow(2px 3px 4px rgba(27,16,23,0.15))">
          <rect width="90" height="46" rx="12" fill="#FFFFFF" stroke="#1B1017" stroke-width="1.5"/>
          <text x="45" y="28" font-family="'Shantell Sans', cursive" font-size="13" fill="#1B1017" text-anchor="middle">Shared</text>
        </g>
        <!-- Gelembung 5: Tiny blush -->
        <g transform="translate(350, 180)" filter="drop-shadow(2px 3px 4px rgba(27,16,23,0.15))">
          <rect width="110" height="46" rx="12" fill="#FFD6E8" stroke="#1B1017" stroke-width="1.5"/>
          <text x="55" y="28" font-family="'DM Mono', monospace" font-size="13" font-weight="bold" fill="#FF2E93" text-anchor="middle">24 Views</text>
        </g>
      </svg>`;
    },
  });

  // L-08: Bingkai Video Reveal (Bingkai 9:16 diperkecil putih bersih, 9:16)
  assets.push({
    file: '3-0_L-08_video-reveal-bingkai_V0.webp',
    width: 450,
    height: 800,
    render: (w, h) => {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
        <rect x="15" y="15" width="420" height="770" rx="12" fill="#FFFFFF" stroke="#1B1017" stroke-width="2" filter="drop-shadow(3px 4px 6px rgba(27,16,23,0.20))"/>
        <rect x="25" y="25" width="400" height="750" rx="8" fill="#F8F8EE" stroke="#E5E0D8" stroke-width="1.5"/>
        <!-- Ikon video reel kecil di tengah -->
        <circle cx="225" cy="400" r="36" fill="#BFE3F5" stroke="#1B1017" stroke-width="1.5"/>
        <polygon points="215,380 245,400 215,420" fill="#1B1017"/>
      </svg>`;
    },
  });

  // L-09: Titik Progres A B C (Bulat 12px dalam area 44px, #FFFDF9 tepi ink, aktif #FF2E93, 1:1)
  assets.push({
    file: '3-0_L-09_titik-progres_V0.webp',
    width: 300,
    height: 300,
    render: (w, h) => {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
        <!-- Dot A (Aktif Hot Pink) -->
        <g transform="translate(40, 120)">
          <circle cx="22" cy="22" r="22" fill="none"/>
          <circle cx="22" cy="22" r="14" fill="#FF2E93" stroke="#1B1017" stroke-width="2" filter="drop-shadow(0 2px 3px rgba(0,0,0,0.2))"/>
          <text x="22" y="27" font-family="'DM Mono', monospace" font-size="13" font-weight="bold" fill="#FFFFFF" text-anchor="middle">A</text>
        </g>
        <!-- Dot B -->
        <g transform="translate(125, 120)">
          <circle cx="22" cy="22" r="22" fill="none"/>
          <circle cx="22" cy="22" r="14" fill="#FFFDF9" stroke="#1B1017" stroke-width="1.8"/>
          <text x="22" y="27" font-family="'DM Mono', monospace" font-size="13" font-weight="bold" fill="#1B1017" text-anchor="middle">B</text>
        </g>
        <!-- Dot C -->
        <g transform="translate(210, 120)">
          <circle cx="22" cy="22" r="22" fill="none"/>
          <circle cx="22" cy="22" r="14" fill="#FFFDF9" stroke="#1B1017" stroke-width="1.8"/>
          <text x="22" y="27" font-family="'DM Mono', monospace" font-size="13" font-weight="bold" fill="#1B1017" text-anchor="middle">C</text>
        </g>
      </svg>`;
    },
  });

  // L-10: Kartu Babak (Kartu 0,9x0,45 Hd, Baby-blue #BFE3F5 tepi putih, ACT II · SHARED, 2:1)
  assets.push({
    file: '3-0_L-10_kartu-babak_V0.webp',
    width: 800,
    height: 400,
    render: (w, h) => {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
        <rect x="20" y="20" width="760" height="360" rx="16" fill="#BFE3F5" stroke="#FFFFFF" stroke-width="4" filter="drop-shadow(4px 6px 8px rgba(27,16,23,0.18))"/>
        <!-- Chip ACT II -->
        <g transform="translate(260, 80)">
          <rect width="280" height="44" rx="22" fill="#FFFFFF" stroke="#1B1017" stroke-width="1.5"/>
          <text x="140" y="28" font-family="'DM Mono', monospace" font-size="18" font-weight="bold" fill="#FF2E93" text-anchor="middle">ACT II · SHARED</text>
        </g>
        <text x="400" y="200" font-family="'Fraunces', serif" font-size="28" font-style="italic" fill="#1B1017" text-anchor="middle">What I made, and what actually happened.</text>
        <text x="400" y="260" font-family="'DM Mono', monospace" font-size="14" fill="#1B1017" opacity="0.75" text-anchor="middle">Three companies · Three worlds · Real metrics</text>
      </svg>`;
    },
  });

  // L-11: Wall Note Kejujuran (Gelembung kertas gunting #FFF8EE 70% isi ink, 4:1)
  assets.push({
    file: '3-0_L-11_wall-note-kejujuran_V0.webp',
    width: 800,
    height: 200,
    render: (w, h) => {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
        <rect x="15" y="15" width="770" height="170" rx="12" fill="#FFF8EE" fill-opacity="0.85" stroke="#1B1017" stroke-width="1.8" filter="drop-shadow(2px 3px 5px rgba(27,16,23,0.15))"/>
        <text x="400" y="85" font-family="'Fraunces', serif" font-size="20" font-style="italic" font-weight="600" fill="#1B1017" text-anchor="middle">“Every number here is real, including the small ones.</text>
        <text x="400" y="125" font-family="'Fraunces', serif" font-size="20" font-style="italic" font-weight="600" fill="#1B1017" text-anchor="middle">The small ones taught me the most.”</text>
      </svg>`;
    },
  });

  return assets;
}

// ─────────────────────────────────────────────────────────────
// 2. GENERATOR 20 ASET 3A CAFÉ (A-01 .. A-20)
// ─────────────────────────────────────────────────────────────

function renderCafeAssets() {
  const assets = [];

  // A-01: Dinding (#066838, serat #0A4F2C, pita tepi #F8F8C8 55%, 16:9)
  assets.push({
    file: '3A_A-01_dinding_V0.webp',
    width: 1280,
    height: 720,
    render: (w, h, seed) => {
      const tex = generatePaperTextureSvg(w, h, seed, '#0A4F2C', '#002B13');
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
        <rect width="${w}" height="${h}" fill="#066838"/>
        ${tex}
        <!-- Pita Tepi 8px Krem #F8F8C8 55% di tepi kiri dan kanan -->
        <rect x="24" y="0" width="8" height="${h}" fill="#F8F8C8" opacity="0.55"/>
        <rect x="${w - 32}" y="0" width="8" height="${h}" fill="#F8F8C8" opacity="0.55"/>
      </svg>`;
    },
  });

  // A-02: Wainscot Subway (Krem #F8F8C8, grout #C8DACA, garis ink 40%, sorot 1px)
  assets.push({
    file: '3A_A-02_wainscot-subway_V0.webp',
    width: 800,
    height: 400,
    render: (w, h) => {
      let tiles = '';
      const tw = 80;
      const th = 40;
      for (let y = 0; y < h; y += th) {
        const row = Math.floor(y / th);
        const offset = (row % 2) * (tw / 2);
        for (let x = -tw; x < w + tw; x += tw) {
          const tx = x + offset;
          tiles += `<rect x="${tx + 2}" y="${y + 2}" width="${tw - 4}" height="${th - 4}" rx="2" fill="#F8F8C8" stroke="#1B1017" stroke-width="0.8" stroke-opacity="0.3"/>
          <line x1="${tx + 4}" y1="${y + 4}" x2="${tx + tw - 6}" y2="${y + 4}" stroke="#FFFFFF" stroke-width="1.2" opacity="0.8"/>`;
        }
      }
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
        <rect width="${w}" height="${h}" fill="#C8DACA"/>
        ${tiles}
      </svg>`;
    },
  });

  // A-03: Rail List Pilaster (Chair rail krem #F8F8C8, pilaster putih #FFFDF9, 16:9)
  assets.push({
    file: '3A_A-03_rail-list-pilaster_V0.webp',
    width: 1280,
    height: 720,
    render: (w, h) => {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
        <!-- Chair rail melintang horizontal krem #F8F8C8 -->
        <rect x="0" y="460" width="${w}" height="28" fill="#F8F8C8" stroke="#1B1017" stroke-width="1.5" filter="drop-shadow(0 2px 3px rgba(0,0,0,0.15))"/>
        <rect x="0" y="464" width="${w}" height="4" fill="#FFFFFF" opacity="0.6"/>
        <!-- Pilaster kiri putih #FFFDF9 -->
        <rect x="80" y="0" width="48" height="${h}" fill="#FFFDF9" stroke="#1B1017" stroke-width="1.5" filter="drop-shadow(2px 0 3px rgba(0,0,0,0.12))"/>
        <rect x="92" y="0" width="24" height="${h}" fill="#F8F8C8" opacity="0.4"/>
        <!-- Pilaster kanan putih #FFFDF9 -->
        <rect x="${w - 128}" y="0" width="48" height="${h}" fill="#FFFDF9" stroke="#1B1017" stroke-width="1.5" filter="drop-shadow(-2px 0 3px rgba(0,0,0,0.12))"/>
        <rect x="${w - 116}" y="0" width="24" height="${h}" fill="#F8F8C8" opacity="0.4"/>
      </svg>`;
    },
  });

  // A-04: Lantai (Kayu cocoa #5A3A2E & runner ubin #C8DACA, 4:1)
  assets.push({
    file: '3A_A-04_lantai_VT.webp',
    width: 1200,
    height: 300,
    render: (w, h) => {
      let planks = '';
      for (let x = 0; x < w; x += 60) {
        planks += `<rect x="${x}" y="0" width="58" height="${h}" fill="#5A3A2E" stroke="#472D24" stroke-width="1.5"/>
        <line x1="${x + 6}" y1="0" x2="${x + 6}" y2="${h}" stroke="#7A4A32" stroke-width="1" opacity="0.4"/>`;
      }
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
        ${planks}
        <!-- Runner ubin hijau-mint #C8DACA di tengah -->
        <rect x="300" y="0" width="600" height="${h}" fill="#C8DACA" stroke="#1B1017" stroke-width="1.5" opacity="0.9"/>
        <rect x="310" y="0" width="580" height="${h}" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-dasharray="8 6"/>
      </svg>`;
    },
  });

  // A-05: Konter (Panel walnut #7A4A32, top krem #F8F8C8, kanopi mini, 6:1)
  assets.push({
    file: '3A_A-05_konter_V0.webp',
    width: 1200,
    height: 200,
    render: (w, h) => {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
        <!-- Top Counter Krem #F8F8C8 -->
        <rect x="10" y="20" width="1180" height="34" rx="4" fill="#F8F8C8" stroke="#1B1017" stroke-width="2" filter="drop-shadow(0 3px 4px rgba(0,0,0,0.2))"/>
        <!-- Badan Konter Walnut #7A4A32 -->
        <rect x="20" y="54" width="1160" height="140" fill="#7A4A32" stroke="#1B1017" stroke-width="2"/>
        <!-- 4 Panel Inset -->
        <rect x="40" y="70" width="260" height="110" rx="4" fill="#5A3A2E" stroke="#F8F8C8" stroke-width="2"/>
        <rect x="330" y="70" width="260" height="110" rx="4" fill="#5A3A2E" stroke="#F8F8C8" stroke-width="2"/>
        <rect x="620" y="70" width="260" height="110" rx="4" fill="#5A3A2E" stroke="#F8F8C8" stroke-width="2"/>
        <rect x="910" y="70" width="250" height="110" rx="4" fill="#5A3A2E" stroke="#F8F8C8" stroke-width="2"/>
      </svg>`;
    },
  });

  // A-06: Mesin Kopi (Chrome #C9CCD5, tombol karang #FF6F6F, 2 group head, uap, 21:25)
  assets.push({
    file: '3A_A-06_mesin-kopi_V3.webp',
    width: 420,
    height: 500,
    render: (w, h) => {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
        <!-- Badan Mesin Chrome #C9CCD5 -->
        <rect x="40" y="100" width="340" height="340" rx="8" fill="#C9CCD5" stroke="#1B1017" stroke-width="2.5" filter="drop-shadow(3px 5px 6px rgba(0,0,0,0.25))"/>
        <!-- Sorotan Tajam Putih -->
        <path d="M50,110 L120,110 L80,430 L50,430 Z" fill="#FFFFFF" opacity="0.45"/>
        <!-- Manometer bundar -->
        <circle cx="210" cy="180" r="26" fill="#FFFDF9" stroke="#1B1017" stroke-width="2"/>
        <line x1="210" y1="180" x2="224" y2="170" stroke="#E5173F" stroke-width="2"/>
        <!-- Tombol Karang #FF6F6F -->
        <circle cx="100" cy="180" r="12" fill="#FF6F6F" stroke="#1B1017" stroke-width="1.5"/>
        <circle cx="320" cy="180" r="12" fill="#FF6F6F" stroke="#1B1017" stroke-width="1.5"/>
        <!-- 2 Group Head -->
        <rect x="110" y="240" width="50" height="70" rx="4" fill="#3B3B3B" stroke="#1B1017" stroke-width="2"/>
        <rect x="260" y="240" width="50" height="70" rx="4" fill="#3B3B3B" stroke="#1B1017" stroke-width="2"/>
        <!-- Drip Tray Bawah -->
        <rect x="50" y="400" width="320" height="30" rx="3" fill="#3B3B3B" stroke="#1B1017" stroke-width="2"/>
        <!-- Uap Kertas Tiga Garis -->
        <path d="M125,80 Q135,50 120,30" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.75"/>
        <path d="M135,85 Q145,55 130,25" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.6"/>
        <path d="M275,80 Q285,50 270,30" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.75"/>
      </svg>`;
    },
  });

  // A-07: Cangkir Runway (Cangkir #FFFDF9 tatakan #F8F8C8 bersandar ponsel 9:16, 1:2)
  assets.push({
    file: '3A_A-07_cangkir-runway_V0.webp',
    width: 400,
    height: 800,
    render: (w, h) => {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
        <!-- Layar Ponsel 9:16 Bersandar -->
        <rect x="70" y="80" width="260" height="480" rx="16" fill="#1B1017" stroke="#1B1017" stroke-width="3" filter="drop-shadow(4px 6px 8px rgba(0,0,0,0.3))"/>
        <rect x="80" y="90" width="240" height="460" rx="10" fill="#066838"/>
        <!-- Cangkir Keramik Putih #FFFDF9 di Depan -->
        <g transform="translate(110, 480)" filter="drop-shadow(2px 4px 5px rgba(0,0,0,0.2))">
          <ellipse cx="90" cy="180" rx="80" ry="16" fill="#F8F8C8" stroke="#1B1017" stroke-width="2"/>
          <path d="M30,110 C30,170 150,170 150,110 Z" fill="#FFFDF9" stroke="#1B1017" stroke-width="2"/>
          <!-- Gagang cangkir -->
          <path d="M150,120 C175,120 175,155 150,155" fill="none" stroke="#1B1017" stroke-width="4"/>
          <!-- Kopi di dalam cangkir -->
          <ellipse cx="90" cy="110" rx="60" ry="12" fill="#5A3A2E"/>
        </g>
      </svg>`;
    },
  });

  // A-08: Papan Menu Kapur (Bingkai walnut #7A4A32, papan #3B3B3B kapur #FFFFFF, miring 4 deg, 4:3)
  assets.push({
    file: '3A_A-08_papan-menu-kapur_VL.webp',
    width: 800,
    height: 600,
    render: (w, h) => {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
        <g transform="translate(400, 300) rotate(4) translate(-360, -260)">
          <!-- Bingkai Walnut #7A4A32 -->
          <rect width="720" height="520" rx="8" fill="#7A4A32" stroke="#1B1017" stroke-width="3" filter="drop-shadow(4px 6px 8px rgba(0,0,0,0.25))"/>
          <!-- Papan Kapur Charcoal #3B3B3B -->
          <rect x="28" y="28" width="664" height="464" rx="4" fill="#3B3B3B"/>
          <text x="360" y="80" font-family="'Shantell Sans', cursive" font-size="32" font-weight="bold" fill="#FFFFFF" text-anchor="middle">Elspresso Daily Menu</text>
          <line x1="160" y1="95" x2="560" y2="95" stroke="#FFFFFF" stroke-width="1.5" stroke-dasharray="6 4"/>
          <!-- Doodle Cangkir & Croissant -->
          <text x="180" y="150" font-family="'Shantell Sans', cursive" font-size="22" fill="#FFFFFF">• Iced Salted Caramel</text>
          <text x="180" y="200" font-family="'Shantell Sans', cursive" font-size="22" fill="#FFFFFF">• Butter Croissant</text>
          <text x="180" y="250" font-family="'Shantell Sans', cursive" font-size="22" fill="#FFFFFF">• Meeting Package FullDay</text>
          <text x="180" y="300" font-family="'Shantell Sans', cursive" font-size="22" fill="#FFFFFF">• Go-Food Special Combo</text>
          <!-- Gambar Cangkir Kapur -->
          <path d="M500,320 C500,370 580,370 580,320 Z" fill="none" stroke="#FFFFFF" stroke-width="2.5"/>
          <ellipse cx="540" cy="320" rx="40" ry="10" fill="none" stroke="#FFFFFF" stroke-width="2"/>
        </g>
      </svg>`;
    },
  });

  // A-09: Tas Pengantar (Krem #F8F8C8 strip hijau #066838 tanpa logo merek nyata, ayun E4, 4:5)
  assets.push({
    file: '3A_A-09_tas-pengantar_VH.webp',
    width: 400,
    height: 500,
    render: (w, h) => {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
        <!-- Tali gantungan -->
        <path d="M140,160 C140,80 260,80 260,160" fill="none" stroke="#7A4A32" stroke-width="4" stroke-linecap="round"/>
        <!-- Badan Kantong Paper Bag Krem #F8F8C8 -->
        <polygon points="80,160 320,160 300,440 100,440" fill="#F8F8C8" stroke="#1B1017" stroke-width="2.5" filter="drop-shadow(3px 4px 6px rgba(0,0,0,0.2))"/>
        <!-- Strip Hijau #066838 -->
        <polygon points="85,270 315,270 310,330 90,330" fill="#066838"/>
        <text x="200" y="310" font-family="'DM Mono', monospace" font-size="16" font-weight="bold" fill="#F8F8C8" text-anchor="middle">DELIVERY</text>
      </svg>`;
    },
  });

  // A-10: Lonceng Pintu (Emas #D4A64A di braket, sorot putih, 1:1)
  assets.push({
    file: '3A_A-10_lonceng-pintu_VH.webp',
    width: 300,
    height: 300,
    render: (w, h) => {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
        <!-- Braket dinding -->
        <rect x="40" y="50" width="30" height="120" rx="4" fill="#7A4A32" stroke="#1B1017" stroke-width="2"/>
        <path d="M70,70 L150,70 L150,110" fill="none" stroke="#D4A64A" stroke-width="5"/>
        <!-- Lonceng Emas -->
        <path d="M110,210 C110,130 190,130 190,210 Z" fill="#D4A64A" stroke="#1B1017" stroke-width="2.5" filter="drop-shadow(2px 3px 4px rgba(0,0,0,0.2))"/>
        <ellipse cx="150" cy="210" rx="40" ry="10" fill="#B08418" stroke="#1B1017" stroke-width="2"/>
        <circle cx="150" cy="225" r="8" fill="#7A4A32"/>
        <!-- Sorotan putih -->
        <path d="M125,180 C125,150 145,145 145,145" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
      </svg>`;
    },
  });

  // A-11: Lampu Gantung (3 kap kerucut krem #F8F8C8, kabel ink, 1:1)
  assets.push({
    file: '3A_A-11_lampu-gantung_VH.webp',
    width: 350,
    height: 350,
    render: (w, h) => {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
        <!-- Kabel ink -->
        <line x1="175" y1="0" x2="175" y2="120" stroke="#1B1017" stroke-width="2.5"/>
        <!-- Kap Kerucut Krem #F8F8C8 -->
        <polygon points="100,240 250,240 195,120 155,120" fill="#F8F8C8" stroke="#1B1017" stroke-width="2" filter="drop-shadow(0 3px 5px rgba(0,0,0,0.18))"/>
        <!-- Sorotan cahaya di bawah kap -->
        <ellipse cx="175" cy="240" rx="75" ry="14" fill="#FFF1A8" opacity="0.6"/>
        <circle cx="175" cy="235" r="12" fill="#FFFDF9"/>
      </svg>`;
    },
  });

  // A-12: Jendela dan Sepeda (Jendela walnut kaca biru #BFE3F5, sepeda profil #F8F8C8 tas di belakang, 7:4)
  assets.push({
    file: '3A_A-12_jendela-sepeda_VS.webp',
    width: 700,
    height: 400,
    render: (w, h) => {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
        <!-- Bingkai Jendela Walnut -->
        <rect x="30" y="30" width="380" height="340" rx="6" fill="#7A4A32" stroke="#1B1017" stroke-width="2.5" filter="drop-shadow(3px 4px 6px rgba(0,0,0,0.18))"/>
        <rect x="50" y="50" width="340" height="300" rx="3" fill="#BFE3F5" opacity="0.4"/>
        <line x1="220" y1="50" x2="220" y2="350" stroke="#7A4A32" stroke-width="4"/>
        <line x1="50" y1="200" x2="390" y2="200" stroke="#7A4A32" stroke-width="4"/>
        <!-- Profil Sepeda Pengantar di kanan -->
        <g transform="translate(440, 160)" stroke="#1B1017" stroke-width="2">
          <!-- Dua roda sepeda -->
          <circle cx="50" cy="140" r="36" fill="none" stroke-width="3"/>
          <circle cx="170" cy="140" r="36" fill="none" stroke-width="3"/>
          <!-- Rangka sepeda -->
          <line x1="50" y1="140" x2="105" y2="140"/>
          <line x1="105" y1="140" x2="80" y2="85"/>
          <line x1="80" y1="85" x2="155" y2="85"/>
          <line x1="155" y1="85" x2="170" y2="140"/>
          <line x1="105" y1="140" x2="155" y2="85"/>
          <!-- Tas pengantar di boncengan -->
          <rect x="25" y="70" width="45" height="40" rx="3" fill="#066838"/>
        </g>
      </svg>`;
    },
  });

  // A-13: Rak Cangkir (Dua tingkat walnut #7A4A32, 6 cangkir putih #FFFDF9, 3:2)
  assets.push({
    file: '3A_A-13_rak-cangkir_V0.webp',
    width: 600,
    height: 400,
    render: (w, h) => {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
        <!-- Rak Tingkat 1 -->
        <rect x="40" y="160" width="520" height="20" rx="3" fill="#7A4A32" stroke="#1B1017" stroke-width="2" filter="drop-shadow(0 3px 4px rgba(0,0,0,0.2))"/>
        <!-- Rak Tingkat 2 -->
        <rect x="40" y="320" width="520" height="20" rx="3" fill="#7A4A32" stroke="#1B1017" stroke-width="2" filter="drop-shadow(0 3px 4px rgba(0,0,0,0.2))"/>
        <!-- 3 Cangkir di Tingkat 1 -->
        <g fill="#FFFDF9" stroke="#1B1017" stroke-width="1.8">
          <rect x="90" y="90" width="60" height="70" rx="6"/>
          <rect x="270" y="90" width="60" height="70" rx="6"/>
          <rect x="450" y="90" width="60" height="70" rx="6"/>
        </g>
        <!-- 3 Cangkir di Tingkat 2 -->
        <g fill="#FFFDF9" stroke="#1B1017" stroke-width="1.8">
          <rect x="90" y="250" width="60" height="70" rx="6"/>
          <rect x="270" y="250" width="60" height="70" rx="6"/>
          <rect x="450" y="250" width="60" height="70" rx="6"/>
        </g>
      </svg>`;
    },
  });

  // A-14: Mesin Struk & Struk (Printer #C9CCD5, struk putih bergerigi bawah, 1:2)
  assets.push({
    file: '3A_A-14_mesin-struk_V0.webp',
    width: 400,
    height: 800,
    render: (w, h) => {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
        <!-- Badan Printer POS #C9CCD5 -->
        <rect x="60" y="60" width="280" height="180" rx="10" fill="#C9CCD5" stroke="#1B1017" stroke-width="2.5" filter="drop-shadow(3px 4px 6px rgba(0,0,0,0.25))"/>
        <rect x="90" y="80" width="220" height="30" rx="4" fill="#3B3B3B"/>
        <circle cx="110" cy="180" r="10" fill="#066838"/>
        <circle cx="150" cy="180" r="10" fill="#E5173F"/>
        <!-- Kertas Struk Keluar Bergerigi Bawah -->
        <g transform="translate(90, 110)" filter="drop-shadow(2px 3px 5px rgba(0,0,0,0.18))">
          <path d="M0,0 L220,0 L220,540 L205,530 L190,540 L175,530 L160,540 L145,530 L130,540 L115,530 L100,540 L85,530 L70,540 L55,530 L40,540 L25,530 L10,540 L0,530 Z" fill="#FFFDF9" stroke="#1B1017" stroke-width="1.8"/>
          <text x="110" y="40" font-family="'DM Mono', monospace" font-size="14" font-weight="bold" fill="#1B1017" text-anchor="middle">ELSPRESSO RECEIPT</text>
          <line x1="20" y1="55" x2="200" y2="55" stroke="#1B1017" stroke-width="1" stroke-dasharray="4 2"/>
          <text x="30" y="90" font-family="'DM Mono', monospace" font-size="12" fill="#1B1017">DATE: 2025-07-20</text>
          <text x="30" y="120" font-family="'DM Mono', monospace" font-size="12" fill="#1B1017">REEL: GO-FOOD LAUNCH</text>
          <text x="30" y="150" font-family="'DM Mono', monospace" font-size="12" fill="#1B1017">VIEWS: 24</text>
          <text x="30" y="180" font-family="'DM Mono', monospace" font-size="12" fill="#1B1017">LIKES: 1</text>
          <text x="30" y="220" font-family="'DM Mono', monospace" font-size="11" fill="#7A4A32">STATUS: COMPLETED</text>
        </g>
      </svg>`;
    },
  });

  // A-15: Stempel Day-one numbers (Bundar ink merah #E5173F tepi ganda, miring -8 deg, 1:1)
  assets.push({
    file: '3A_A-15_stempel-day-one_V0.webp',
    width: 300,
    height: 300,
    render: (w, h) => {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
        <g transform="translate(150, 150) rotate(-8) translate(-150, -150)">
          <!-- Lingkaran Luar Ganda -->
          <circle cx="150" cy="150" r="120" fill="none" stroke="#E5173F" stroke-width="4"/>
          <circle cx="150" cy="150" r="108" fill="none" stroke="#E5173F" stroke-width="2" stroke-dasharray="8 4"/>
          <text x="150" y="125" font-family="'DM Mono', monospace" font-size="20" font-weight="bold" fill="#E5173F" text-anchor="middle" letter-spacing="2">DAY-ONE</text>
          <text x="150" y="165" font-family="'DM Mono', monospace" font-size="22" font-weight="bold" fill="#E5173F" text-anchor="middle" letter-spacing="3">NUMBERS</text>
          <text x="150" y="195" font-family="'DM Mono', monospace" font-size="11" fill="#E5173F" text-anchor="middle">★ REAL METRICS ★</text>
        </g>
      </svg>`;
    },
  });

  // A-16: Lencana Dinding (Bundar putih #FFFDF9 ikon matahari dan biji kopi, stiker edge, 1:1)
  assets.push({
    file: '3A_A-16_lencana-dinding_V0.webp',
    width: 250,
    height: 250,
    render: (w, h) => {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
        <circle cx="125" cy="125" r="105" fill="#FFFDF9" stroke="#1B1017" stroke-width="2" filter="drop-shadow(1px 2px 3px rgba(0,0,0,0.15))"/>
        <circle cx="125" cy="125" r="95" fill="none" stroke="#066838" stroke-width="2"/>
        <!-- Ikon Matahari & Biji Kopi -->
        <circle cx="125" cy="95" r="18" fill="#F0A810"/>
        <!-- Biji kopi cokelat -->
        <ellipse cx="125" cy="145" rx="22" ry="16" fill="#5A3A2E"/>
        <path d="M125,130 Q118,145 125,160" stroke="#FFFDF9" stroke-width="2" fill="none"/>
      </svg>`;
    },
  });

  // A-17: Uap (Tiga garis lengkung ink 60%, 1:2)
  assets.push({
    file: '3A_A-17_uap_V0.webp',
    width: 200,
    height: 400,
    render: (w, h) => {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
        <path d="M70,360 Q90,260 60,180 T70,40" stroke="#1B1017" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.6"/>
        <path d="M100,380 Q130,280 90,190 T100,60" stroke="#1B1017" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.6"/>
        <path d="M130,360 Q150,260 120,180 T130,40" stroke="#1B1017" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.5"/>
      </svg>`;
    },
  });

  // A-18: Panah Stiker (Bulat 44px pink #FF2E93 panah #FFFFFF, titik aktif #FF2E93, 1:1)
  assets.push({
    file: '3A_A-18_panah-stiker_V0.webp',
    width: 200,
    height: 200,
    render: (w, h) => {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
        <circle cx="100" cy="100" r="80" fill="#FF2E93" stroke="#FFFFFF" stroke-width="4" filter="drop-shadow(2px 3px 5px rgba(27,16,23,0.25))"/>
        <polygon points="75,100 115,70 115,90 135,90 135,110 115,110 115,130" fill="#FFFFFF"/>
      </svg>`;
    },
  });

  // A-19: Kartu Info Credit (Kartu 0,9x0,7 Hd, #FFF8EE tepi sobek kecil, 9:7)
  assets.push({
    file: '3A_A-19_kartu-info-credit_V0.webp',
    width: 900,
    height: 700,
    render: (w, h) => {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
        <rect x="25" y="25" width="850" height="650" rx="14" fill="#FFF8EE" stroke="#1B1017" stroke-width="2" filter="drop-shadow(4px 6px 10px rgba(27,16,23,0.20))"/>
        <!-- 4 Blok Bersusun -->
        <g transform="translate(60, 60)">
          <!-- Blok 1: What I did -->
          <rect width="780" height="120" rx="8" fill="#FFFFFF" stroke="#1B1017" stroke-width="1.2"/>
          <text x="24" y="36" font-family="'DM Mono', monospace" font-size="14" font-weight="bold" fill="#066838">01 · WHAT I DID</text>
          <text x="24" y="70" font-family="'Fraunces', serif" font-size="16" fill="#1B1017">Created and managed culinary video content for Elspresso launch.</text>

          <!-- Blok 2: Result -->
          <rect y="140" width="780" height="110" rx="8" fill="#FFFFFF" stroke="#1B1017" stroke-width="1.2"/>
          <text x="24" y="176" font-family="'DM Mono', monospace" font-size="14" font-weight="bold" fill="#FF2E93">02 · RESULT</text>
          <text x="24" y="210" font-family="'Fraunces', serif" font-size="16" fill="#1B1017">24 Views · 1 Like (Day-one numbers as of launch month)</text>

          <!-- Blok 3: What I learned -->
          <rect y="270" width="780" height="110" rx="8" fill="#FFFFFF" stroke="#1B1017" stroke-width="1.2"/>
          <text x="24" y="306" font-family="'DM Mono', monospace" font-size="14" font-weight="bold" fill="#B08418">03 · WHAT I LEARNED</text>
          <text x="24" y="340" font-family="'Fraunces', serif" font-size="16" fill="#1B1017">A launch needs a reason to care, not just an announcement.</text>

          <!-- Blok 4: Next time -->
          <rect y="400" width="780" height="110" rx="8" fill="#FFFFFF" stroke="#1B1017" stroke-width="1.2"/>
          <text x="24" y="436" font-family="'DM Mono', monospace" font-size="14" font-weight="bold" fill="#1B1017">04 · NEXT TIME</text>
          <text x="24" y="470" font-family="'Fraunces', serif" font-size="16" fill="#1B1017">Build audience anticipation 2 weeks before grand opening.</text>
        </g>
      </svg>`;
    },
  });

  // A-20: Cangkir Take-away Pink (0,22 Hd, pink #FFB3D9, tutup #FFFFFF, sleeve, 1:2)
  assets.push({
    file: '3A_A-20_cangkir-take-away_V0.webp',
    width: 300,
    height: 600,
    render: (w, h) => {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
        <!-- Tutup Cangkir Putih #FFFFFF -->
        <rect x="50" y="100" width="200" height="34" rx="8" fill="#FFFFFF" stroke="#1B1017" stroke-width="2" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.15))"/>
        <rect x="70" y="80" width="160" height="24" rx="4" fill="#FFFFFF" stroke="#1B1017" stroke-width="2"/>
        <!-- Badan Cangkir Pink #FFB3D9 -->
        <polygon points="60,134 240,134 210,520 90,520" fill="#FFB3D9" stroke="#1B1017" stroke-width="2.5" filter="drop-shadow(3px 5px 6px rgba(0,0,0,0.2))"/>
        <!-- Sleeve Kertas Karton Cokelat/Krem -->
        <polygon points="68,240 232,240 220,380 80,380" fill="#F3E3B8" stroke="#1B1017" stroke-width="2"/>
        <text x="150" y="320" font-family="'DM Mono', monospace" font-size="14" font-weight="bold" fill="#5A3A2E" text-anchor="middle">ELSPRESSO</text>
      </svg>`;
    },
  });

  return assets;
}

// ─────────────────────────────────────────────────────────────
// MAIN EXECUTION
// ─────────────────────────────────────────────────────────────
async function main() {
  console.log('[generate-p09-assets] Memulai produksi 31 aset P09 (Lobi 3.0 & Café 3A)...');
  const allAssets = [...renderLobbyAssets(), ...renderCafeAssets()];

  let count = 0;
  for (const item of allAssets) {
    const seed = hashId(item.file);
    const svgStr = item.render(item.width, item.height, seed);
    const baseName = item.file.replace(/\.(webp|png|svg)$/i, '');

    const svgPath = join(worldDir, `${baseName}.svg`);
    const webpPath = join(worldDir, `${baseName}.webp`);

    writeFileSync(svgPath, svgStr, 'utf8');
    const buf = Buffer.from(svgStr);
    await sharp(buf).webp({ quality: 90, lossless: false }).toFile(webpPath);

    count++;
    console.log(`  ✓ (${count}/${allAssets.length}) Dihasilkan: ${item.file}`);
  }

  console.log(`\nSukses menghasilkan seluruh 31 aset P09 ke public/assets/world/`);
}

main().catch((err) => {
  console.error('[generate-p09-assets] Fatal error:', err);
  process.exit(1);
});
