/**
 * src/assets-def/samples.ts
 * Tiga properti contoh per chapter (Hero V3, Datar V0, Gantung VH)
 * untuk Gerbang Gaya Properti (P04).
 *
 * Sesuai aturan:
 * - DV 2 (Hukum Gaya Gambar): tanpa outline tinta, maks 3 nada, tepi kertas 2-3px,
 *   serat + bintik kertas handmade, drop-shadow 3 kedalaman
 * - DV 3 (Sistem Sudut Gambar): V3 tiga perempat, V0 tampak depan datar, VH gantung
 * - DV 10 & Token DV: warna persis token hex bible per chapter
 */

export interface ChapterSampleProperty {
  chapter: string;
  chapterTitle: string;
  heroV3: {
    name: string;
    description: string;
    angle: 'V3';
    colors: string[];
    svg: string;
  };
  flatV0: {
    name: string;
    description: string;
    angle: 'V0';
    colors: string[];
    svg: string;
  };
  hangingVH: {
    name: string;
    description: string;
    angle: 'VH';
    colors: string[];
    svg: string;
  };
}

export const CHAPTER_SAMPLES: ChapterSampleProperty[] = [
  {
    chapter: '0',
    chapterTitle: 'Chapter 0 · The Locker (Paper School)',
    heroV3: {
      name: 'Badan Loker Sekolah (V3)',
      description: 'Loker sekolah baja-lilac tiga perempat, pintu tebal bersudut skew, kisi ventilasi dan gembok paku lipat.',
      angle: 'V3',
      colors: ['#B9B8CC', '#BFA8E5', '#C9CCD5'],
      svg: `<svg viewBox="0 0 160 220" width="160" height="220" xmlns="http://www.w3.org/2000/svg">
        <filter id="ch0-shadow"><feDropShadow dx="2" dy="4" stdDeviation="3" flood-color="rgba(27,16,23,0.18)"/></filter>
        <!-- Sisi samping V3 (perspektif miring) -->
        <polygon points="110,25 145,15 145,185 110,205" fill="#A5A3BD" filter="url(#ch0-shadow)"/>
        <!-- Muka depan V3 -->
        <polygon points="25,35 110,25 110,205 25,215" fill="#B9B8CC" filter="url(#ch0-shadow)"/>
        <!-- Pintu berlapis lilak -->
        <polygon points="32,42 103,33 103,198 32,207" fill="#BFA8E5"/>
        <!-- Kisi ventilasi -->
        <line x1="50" y1="58" x2="85" y2="54" stroke="#9E88CA" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="50" y1="66" x2="85" y2="62" stroke="#9E88CA" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="50" y1="74" x2="85" y2="70" stroke="#9E88CA" stroke-width="2.5" stroke-linecap="round"/>
        <!-- Handle & gembok chrome -->
        <circle cx="92" cy="120" r="4.5" fill="#C9CCD5"/>
        <circle cx="92" cy="120" r="2" fill="#8A8A8A"/>
      </svg>`,
    },
    flatV0: {
      name: 'Plat Nomor Loker (V0)',
      description: 'Plat nomor loker kertas potong datar, nomor 07 stempel timbul, paku brad di kedua sisi.',
      angle: 'V0',
      colors: ['#FFFDF9', '#C9CCD5', '#1B1017'],
      svg: `<svg viewBox="0 0 140 80" width="140" height="80" xmlns="http://www.w3.org/2000/svg">
        <filter id="ch0-f-shadow"><feDropShadow dx="1.5" dy="3" stdDeviation="2" flood-color="rgba(27,16,23,0.15)"/></filter>
        <rect x="15" y="15" width="110" height="50" rx="4" fill="#FFFDF9" filter="url(#ch0-f-shadow)"/>
        <rect x="18" y="18" width="104" height="44" rx="2" fill="#F4EFE6" stroke="#D8D0C5" stroke-width="1"/>
        <circle cx="28" cy="40" r="3.5" fill="#C9CCD5"/>
        <circle cx="112" cy="40" r="3.5" fill="#C9CCD5"/>
        <text x="70" y="47" font-family="'Fraunces', serif" font-weight="bold" font-size="22" fill="#1B1017" text-anchor="middle">No. 07</text>
      </svg>`,
    },
    hangingVH: {
      name: 'Lampu Koridor Gantung (VH)',
      description: 'Kap lampu kerucut gantung dengan benang jahit kertas pilin, pivot di ujung atas.',
      angle: 'VH',
      colors: ['#D9B98C', '#FFF1A8', '#E5D6A7'],
      svg: `<svg viewBox="0 0 100 160" width="100" height="160" xmlns="http://www.w3.org/2000/svg">
        <filter id="ch0-h-shadow"><feDropShadow dx="2" dy="4" stdDeviation="3" flood-color="rgba(27,16,23,0.15)"/></filter>
        <!-- Tali kertas pilin -->
        <line x1="50" y1="0" x2="50" y2="70" stroke="#D9B98C" stroke-width="1.8" stroke-dasharray="3 2"/>
        <!-- Pivot brad -->
        <circle cx="50" cy="70" r="3.5" fill="#C9CCD5"/>
        <!-- Kap lampu segitiga membulat -->
        <polygon points="50,72 85,120 15,120" fill="#FFF1A8" filter="url(#ch0-h-shadow)"/>
        <polygon points="50,72 85,120 50,120" fill="#EBD88A"/>
        <ellipse cx="50" cy="120" rx="35" ry="8" fill="#FFFDF9"/>
      </svg>`,
    },
  },
  {
    chapter: '1',
    chapterTitle: "Chapter 1 · The Editor's Desk",
    heroV3: {
      name: 'Meja Editor Kayu Kertas (V3)',
      description: 'Meja kerja kayu kertas cocoa dengan kaki tebal bertingkat dan sorot atas kiri.',
      angle: 'V3',
      colors: ['#5A3A2E', '#7A4A32', '#FFFDF9'],
      svg: `<svg viewBox="0 0 180 140" width="180" height="140" xmlns="http://www.w3.org/2000/svg">
        <filter id="ch1-shadow"><feDropShadow dx="2" dy="4" stdDeviation="3" flood-color="rgba(27,16,23,0.18)"/></filter>
        <!-- Permukaan meja V3 miring -->
        <polygon points="20,40 140,25 170,45 50,60" fill="#7A4A32" filter="url(#ch1-shadow)"/>
        <polygon points="20,40 50,60 50,72 20,52" fill="#5A3A2E"/>
        <polygon points="50,60 170,45 170,57 50,72" fill="#4A2F25"/>
        <!-- Kaki meja depan -->
        <rect x="25" y="52" width="10" height="70" fill="#5A3A2E"/>
        <rect x="155" y="47" width="10" height="70" fill="#4A2F25"/>
      </svg>`,
    },
    flatV0: {
      name: 'Lembar Dokumen Putih Murni (V0)',
      description: 'Lembar teks kanvas putih murni #FFFFFF bertepi deckle halus, serat biru lembut tanpa kontur tinta.',
      angle: 'V0',
      colors: ['#FFFFFF', '#8FB8E8', '#1B1017'],
      svg: `<svg viewBox="0 0 130 160" width="130" height="160" xmlns="http://www.w3.org/2000/svg">
        <filter id="ch1-f-shadow"><feDropShadow dx="2" dy="3" stdDeviation="2.5" flood-color="rgba(27,16,23,0.12)"/></filter>
        <rect x="15" y="15" width="100" height="130" rx="3" fill="#FFFFFF" filter="url(#ch1-f-shadow)"/>
        <!-- Serat biru halus -->
        <line x1="25" y1="35" x2="70" y2="35" stroke="#8FB8E8" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="25" y1="48" x2="105" y2="48" stroke="#E0E6ED" stroke-width="2" stroke-linecap="round"/>
        <line x1="25" y1="58" x2="100" y2="58" stroke="#E0E6ED" stroke-width="2" stroke-linecap="round"/>
        <line x1="25" y1="68" x2="95" y2="68" stroke="#E0E6ED" stroke-width="2" stroke-linecap="round"/>
        <line x1="25" y1="78" x2="105" y2="78" stroke="#E0E6ED" stroke-width="2" stroke-linecap="round"/>
      </svg>`,
    },
    hangingVH: {
      name: 'Klip Kertas Gantung (VH)',
      description: 'Klip logam chrome menggantung memo catatan editorial.',
      angle: 'VH',
      colors: ['#C9CCD5', '#FFF1A8', '#D9B98C'],
      svg: `<svg viewBox="0 0 90 150" width="90" height="150" xmlns="http://www.w3.org/2000/svg">
        <filter id="ch1-h-shadow"><feDropShadow dx="2" dy="3" stdDeviation="2" flood-color="rgba(27,16,23,0.14)"/></filter>
        <line x1="45" y1="0" x2="45" y2="50" stroke="#D9B98C" stroke-width="1.5" stroke-dasharray="3 2"/>
        <!-- Klip perak -->
        <path d="M 40,40 C 40,32 50,32 50,40 L 50,65 C 50,75 35,75 35,65 L 35,45" fill="none" stroke="#C9CCD5" stroke-width="3" stroke-linecap="round"/>
        <!-- Memo gantung -->
        <rect x="20" y="60" width="55" height="70" rx="2" fill="#FFF1A8" filter="url(#ch1-h-shadow)"/>
        <line x1="28" y1="75" x2="65" y2="75" stroke="#E8D278" stroke-width="2" stroke-linecap="round"/>
        <line x1="28" y1="85" x2="58" y2="85" stroke="#E8D278" stroke-width="2" stroke-linecap="round"/>
      </svg>`,
    },
  },
  {
    chapter: '2',
    chapterTitle: 'Chapter 2 · The Newsroom',
    heroV3: {
      name: 'Roller Mesin Cetak (V3)',
      description: 'Silinder mesin cetak berita tiga perempat dengan roda gerigi dan kertas koran melilit.',
      angle: 'V3',
      colors: ['#7A7A7A', '#F3E3B8', '#1B1017'],
      svg: `<svg viewBox="0 0 170 140" width="170" height="140" xmlns="http://www.w3.org/2000/svg">
        <filter id="ch2-shadow"><feDropShadow dx="3" dy="4" stdDeviation="3" flood-color="rgba(27,16,23,0.20)"/></filter>
        <!-- Rangka samping V3 -->
        <polygon points="115,20 150,35 150,115 115,100" fill="#5E5E5E" filter="url(#ch2-shadow)"/>
        <!-- Muka roller -->
        <polygon points="25,30 115,20 115,100 25,110" fill="#7A7A7A" filter="url(#ch2-shadow)"/>
        <!-- Kertas koran bergulir -->
        <polygon points="35,45 105,37 105,85 35,93" fill="#F3E3B8"/>
        <line x1="45" y1="55" x2="95" y2="50" stroke="#3A2A24" stroke-width="2"/>
        <line x1="45" y1="65" x2="85" y2="61" stroke="#8A7A74" stroke-width="1.5"/>
      </svg>`,
    },
    flatV0: {
      name: 'Koran Lipat Berita (V0)',
      description: 'Koran newsprint #F3E3B8 terbitan pagi dengan tajuk utama tebal dan kolom artikel.',
      angle: 'V0',
      colors: ['#F3E3B8', '#1B1017', '#C8B490'],
      svg: `<svg viewBox="0 0 140 120" width="140" height="120" xmlns="http://www.w3.org/2000/svg">
        <filter id="ch2-f-shadow"><feDropShadow dx="2" dy="3" stdDeviation="2" flood-color="rgba(27,16,23,0.15)"/></filter>
        <rect x="15" y="15" width="110" height="90" rx="3" fill="#F3E3B8" filter="url(#ch2-f-shadow)"/>
        <line x1="25" y1="32" x2="115" y2="32" stroke="#1B1017" stroke-width="4" stroke-linecap="round"/>
        <rect x="25" y="42" width="40" height="35" rx="1" fill="#DDD0B0"/>
        <line x1="72" y1="46" x2="115" y2="46" stroke="#5A4A3E" stroke-width="2"/>
        <line x1="72" y1="54" x2="115" y2="54" stroke="#5A4A3E" stroke-width="2"/>
        <line x1="72" y1="62" x2="105" y2="62" stroke="#5A4A3E" stroke-width="2"/>
        <line x1="25" y1="88" x2="115" y2="88" stroke="#8A7A6E" stroke-width="1.5"/>
      </svg>`,
    },
    hangingVH: {
      name: 'Bendera Brand Berita (VH)',
      description: 'Bendera segitiga gantung cherry-red #E5173F pada tali benang koridor pers.',
      angle: 'VH',
      colors: ['#E5173F', '#D9B98C', '#FFFDF9'],
      svg: `<svg viewBox="0 0 100 150" width="100" height="150" xmlns="http://www.w3.org/2000/svg">
        <filter id="ch2-h-shadow"><feDropShadow dx="2" dy="4" stdDeviation="2.5" flood-color="rgba(27,16,23,0.18)"/></filter>
        <line x1="10" y1="20" x2="90" y2="20" stroke="#D9B98C" stroke-width="2"/>
        <polygon points="20,20 80,20 50,110" fill="#E5173F" filter="url(#ch2-h-shadow)"/>
        <polygon points="50,20 80,20 50,110" fill="#C91235"/>
        <circle cx="50" cy="50" r="10" fill="#FFFDF9"/>
      </svg>`,
    },
  },
  {
    chapter: '3-0',
    chapterTitle: 'Chapter 3.0 · Creator Lobby',
    heroV3: {
      name: 'Meja Resepsionis Lobi (V3)',
      description: 'Konter depan lobi bertekstur kayu dengan panel aksen mint dan celah bayangan bawah.',
      angle: 'V3',
      colors: ['#FFFDF9', '#A8E6CF', '#5A3A2E'],
      svg: `<svg viewBox="0 0 170 130" width="170" height="130" xmlns="http://www.w3.org/2000/svg">
        <filter id="ch30-shadow"><feDropShadow dx="2" dy="4" stdDeviation="3" flood-color="rgba(27,16,23,0.16)"/></filter>
        <polygon points="20,40 120,30 155,45 55,55" fill="#FFFDF9" filter="url(#ch30-shadow)"/>
        <polygon points="20,40 55,55 55,105 20,90" fill="#A8E6CF"/>
        <polygon points="55,55 155,45 155,95 55,105" fill="#90D4BC"/>
        <rect x="75" y="65" width="60" height="25" rx="2" fill="#FFFDF9" opacity="0.9"/>
      </svg>`,
    },
    flatV0: {
      name: 'Standing Banner Lobi (V0)',
      description: 'Standing banner sambutan kreator dengan kaki penyangga kertas ganda.',
      angle: 'V0',
      colors: ['#A8E6CF', '#FFFDF9', '#1B1017'],
      svg: `<svg viewBox="0 0 120 160" width="120" height="160" xmlns="http://www.w3.org/2000/svg">
        <filter id="ch30-f-shadow"><feDropShadow dx="2" dy="3" stdDeviation="2.5" flood-color="rgba(27,16,23,0.15)"/></filter>
        <rect x="25" y="15" width="70" height="110" rx="3" fill="#A8E6CF" filter="url(#ch30-f-shadow)"/>
        <rect x="30" y="20" width="60" height="100" rx="2" fill="#FFFDF9"/>
        <circle cx="60" cy="45" r="14" fill="#FFB3D9"/>
        <line x1="38" y1="75" x2="82" y2="75" stroke="#1B1017" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="42" y1="88" x2="78" y2="88" stroke="#7A7A7A" stroke-width="1.8"/>
        <!-- Kaki tripod -->
        <line x1="60" y1="125" x2="40" y2="150" stroke="#7A7A7A" stroke-width="2.5"/>
        <line x1="60" y1="125" x2="80" y2="150" stroke="#7A7A7A" stroke-width="2.5"/>
      </svg>`,
    },
    hangingVH: {
      name: 'Lampu Gantung Lobi (VH)',
      description: 'Lampu kap modern lobi dengan aksen cincin kuningan.',
      angle: 'VH',
      colors: ['#D4A64A', '#FFFDF9', '#C9CCD5'],
      svg: `<svg viewBox="0 0 100 150" width="100" height="150" xmlns="http://www.w3.org/2000/svg">
        <filter id="ch30-h-shadow"><feDropShadow dx="2" dy="3" stdDeviation="2" flood-color="rgba(27,16,23,0.15)"/></filter>
        <line x1="50" y1="0" x2="50" y2="60" stroke="#C9CCD5" stroke-width="2"/>
        <ellipse cx="50" cy="65" rx="35" ry="12" fill="#D4A64A" filter="url(#ch30-h-shadow)"/>
        <path d="M 15,65 Q 50,25 85,65 Z" fill="#FFFDF9" filter="url(#ch30-h-shadow)"/>
      </svg>`,
    },
  },
  {
    chapter: '3A',
    chapterTitle: 'Chapter 3A · The Cafe (Elspresso)',
    heroV3: {
      name: 'Mesin Kopi Espresso (V3)',
      description: 'Mesin espresso warna sage #A9C4A0 tiga perempat, tuas uap chrome, dan portafilter ganda.',
      angle: 'V3',
      colors: ['#A9C4A0', '#C9CCD5', '#5A3A2E'],
      svg: `<svg viewBox="0 0 160 150" width="160" height="150" xmlns="http://www.w3.org/2000/svg">
        <filter id="ch3a-shadow"><feDropShadow dx="2.5" dy="4" stdDeviation="3" flood-color="rgba(27,16,23,0.18)"/></filter>
        <!-- Samping V3 -->
        <polygon points="105,25 140,40 140,120 105,105" fill="#8FA886" filter="url(#ch3a-shadow)"/>
        <!-- Muka mesin -->
        <polygon points="25,35 105,25 105,105 25,115" fill="#A9C4A0" filter="url(#ch3a-shadow)"/>
        <!-- Panel manometer chrome -->
        <polygon points="35,45 95,38 95,70 35,77" fill="#C9CCD5"/>
        <circle cx="50" cy="58" r="6" fill="#FFFDF9"/>
        <circle cx="80" cy="54" r="6" fill="#FFFDF9"/>
        <!-- Baki tetes & portafilter -->
        <rect x="35" y="90" width="60" height="15" rx="2" fill="#5E5E5E"/>
      </svg>`,
    },
    flatV0: {
      name: 'Cangkir Kopi Keramik Kertas (V0)',
      description: 'Cangkir kopi keramik putih bertepi tebal dengan latte art busa lembut.',
      angle: 'V0',
      colors: ['#FFFDF9', '#5A3A2E', '#D9A87A'],
      svg: `<svg viewBox="0 0 120 100" width="120" height="100" xmlns="http://www.w3.org/2000/svg">
        <filter id="ch3a-f-shadow"><feDropShadow dx="1.5" dy="3" stdDeviation="2" flood-color="rgba(27,16,23,0.15)"/></filter>
        <!-- Piring cangkir -->
        <ellipse cx="60" cy="78" rx="45" ry="10" fill="#E8E2D8" filter="url(#ch3a-f-shadow)"/>
        <!-- Cangkir -->
        <path d="M 30,35 L 35,68 Q 60,78 85,68 L 90,35 Z" fill="#FFFDF9" filter="url(#ch3a-f-shadow)"/>
        <!-- Gagang -->
        <path d="M 88,40 C 105,40 105,62 85,62" fill="none" stroke="#FFFDF9" stroke-width="4.5"/>
        <!-- Kopi & latte art -->
        <ellipse cx="60" cy="38" rx="26" ry="7" fill="#5A3A2E"/>
        <path d="M 52,38 Q 60,32 68,38 Q 60,42 52,38 Z" fill="#FFFDF9"/>
      </svg>`,
    },
    hangingVH: {
      name: 'Tas Pengantar Go-Food Gantung (VH)',
      description: 'Tas kanvas hijau-tua pengantar kopi menggantung di kaitan dinding.',
      angle: 'VH',
      colors: ['#066838', '#D9B98C', '#FFFDF9'],
      svg: `<svg viewBox="0 0 110 160" width="110" height="160" xmlns="http://www.w3.org/2000/svg">
        <filter id="ch3a-h-shadow"><feDropShadow dx="2" dy="4" stdDeviation="2.5" flood-color="rgba(27,16,23,0.18)"/></filter>
        <!-- Paku gantung -->
        <circle cx="55" cy="20" r="4" fill="#C9CCD5"/>
        <!-- Tali tas melengkung -->
        <path d="M 35,65 Q 55,20 75,65" fill="none" stroke="#D9B98C" stroke-width="3"/>
        <!-- Badan tas -->
        <rect x="25" y="65" width="60" height="70" rx="4" fill="#066838" filter="url(#ch3a-h-shadow)"/>
        <rect x="35" y="85" width="40" height="25" rx="2" fill="#FFFDF9"/>
        <circle cx="55" cy="97" r="6" fill="#E5173F"/>
      </svg>`,
    },
  },
  {
    chapter: '3B',
    chapterTitle: 'Chapter 3B · The Glow Clinic (Elsthetic)',
    heroV3: {
      name: 'Kursi Treatment Klinik (V3)',
      description: 'Kursi reclining klinik aesthetic warna blush #FFD6E8 dengan sandaran kepala empuk.',
      angle: 'V3',
      colors: ['#FFD6E8', '#C9CCD5', '#FFFDF9'],
      svg: `<svg viewBox="0 0 170 140" width="170" height="140" xmlns="http://www.w3.org/2000/svg">
        <filter id="ch3b-shadow"><feDropShadow dx="2.5" dy="4" stdDeviation="3" flood-color="rgba(27,16,23,0.16)"/></filter>
        <!-- Sisi V3 -->
        <polygon points="110,35 145,50 145,115 110,100" fill="#E5BCCF" filter="url(#ch3b-shadow)"/>
        <!-- Muka dudukan -->
        <polygon points="25,45 110,35 110,100 25,110" fill="#FFD6E8" filter="url(#ch3b-shadow)"/>
        <!-- Sandaran kepala -->
        <rect x="35" y="25" width="60" height="20" rx="6" fill="#FFFDF9"/>
        <!-- Tiang hidrolik chrome -->
        <rect x="65" y="105" width="15" height="25" fill="#C9CCD5"/>
        <ellipse cx="72" cy="130" rx="35" ry="6" fill="#A8ABB5"/>
      </svg>`,
    },
    flatV0: {
      name: 'Botol Serum Skincare (V0)',
      description: 'Botol serum kaca buram pastel dengan pipet tetes putih keramik.',
      angle: 'V0',
      colors: ['#FFD6E8', '#FFFDF9', '#D4A64A'],
      svg: `<svg viewBox="0 0 80 130" width="80" height="130" xmlns="http://www.w3.org/2000/svg">
        <filter id="ch3b-f-shadow"><feDropShadow dx="1.5" dy="3" stdDeviation="2" flood-color="rgba(27,16,23,0.14)"/></filter>
        <!-- Pipet -->
        <rect x="35" y="10" width="10" height="18" rx="4" fill="#FFFDF9"/>
        <rect x="32" y="28" width="16" height="8" rx="1" fill="#D4A64A"/>
        <!-- Badan botol -->
        <rect x="20" y="36" width="40" height="75" rx="5" fill="#FFD6E8" filter="url(#ch3b-f-shadow)"/>
        <rect x="25" y="55" width="30" height="35" rx="1" fill="#FFFDF9"/>
        <line x1="30" y1="65" x2="50" y2="65" stroke="#E5BCCF" stroke-width="2"/>
        <line x1="30" y1="73" x2="45" y2="73" stroke="#E5BCCF" stroke-width="1.5"/>
      </svg>`,
    },
    hangingVH: {
      name: 'Tanda Salib Klinik Gantung (VH)',
      description: 'Papan salib klinik merah muda dan putih (tidak pernah merah) tergantung rantai.',
      angle: 'VH',
      colors: ['#FFB3D9', '#FFFDF9', '#C9CCD5'],
      svg: `<svg viewBox="0 0 100 150" width="100" height="150" xmlns="http://www.w3.org/2000/svg">
        <filter id="ch3b-h-shadow"><feDropShadow dx="2" dy="3" stdDeviation="2" flood-color="rgba(27,16,23,0.15)"/></filter>
        <line x1="30" y1="0" x2="30" y2="45" stroke="#C9CCD5" stroke-width="1.8"/>
        <line x1="70" y1="0" x2="70" y2="45" stroke="#C9CCD5" stroke-width="1.8"/>
        <rect x="15" y="45" width="70" height="70" rx="8" fill="#FFFDF9" filter="url(#ch3b-h-shadow)"/>
        <!-- Salib pink pastel (bukan merah) -->
        <rect x="42" y="55" width="16" height="50" rx="2" fill="#FFB3D9"/>
        <rect x="25" y="72" width="50" height="16" rx="2" fill="#FFB3D9"/>
      </svg>`,
    },
  },
  {
    chapter: '3C',
    chapterTitle: 'Chapter 3C · The Terminal (Karamina Tour)',
    heroV3: {
      name: 'Koper Traveling Pastel (V3)',
      description: 'Koper traveling roda empat sky-pastel #A7D8F5 dengan stiker paspor dan pegangan tarik.',
      angle: 'V3',
      colors: ['#A7D8F5', '#8EC2DF', '#FFFDF9'],
      svg: `<svg viewBox="0 0 150 160" width="150" height="160" xmlns="http://www.w3.org/2000/svg">
        <filter id="ch3c-shadow"><feDropShadow dx="2.5" dy="4" stdDeviation="3" flood-color="rgba(27,16,23,0.18)"/></filter>
        <!-- Tarikan trolley -->
        <rect x="55" y="15" width="40" height="25" rx="3" fill="none" stroke="#7A7A7A" stroke-width="3"/>
        <!-- Samping V3 -->
        <polygon points="95,40 125,50 125,130 95,120" fill="#8EC2DF" filter="url(#ch3c-shadow)"/>
        <!-- Muka koper -->
        <polygon points="25,50 95,40 95,120 25,130" fill="#A7D8F5" filter="url(#ch3c-shadow)"/>
        <!-- Alur koper garis -->
        <line x1="40" y1="65" x2="80" y2="60" stroke="#7BAFC9" stroke-width="2"/>
        <line x1="40" y1="85" x2="80" y2="80" stroke="#7BAFC9" stroke-width="2"/>
        <line x1="40" y1="105" x2="80" y2="100" stroke="#7BAFC9" stroke-width="2"/>
        <!-- Stiker bundar hati -->
        <circle cx="50" cy="85" r="9" fill="#FF2E93"/>
        <!-- Roda -->
        <circle cx="40" cy="135" r="4.5" fill="#3A3A3A"/>
        <circle cx="85" cy="128" r="4.5" fill="#3A3A3A"/>
      </svg>`,
    },
    flatV0: {
      name: 'Boarding Pass Karamina (V0)',
      description: 'Boarding pass penerbangan karamina berporforasi sobek dengan kode barcode.',
      angle: 'V0',
      colors: ['#FFFDF9', '#A7D8F5', '#1B1017'],
      svg: `<svg viewBox="0 0 150 80" width="150" height="80" xmlns="http://www.w3.org/2000/svg">
        <filter id="ch3c-f-shadow"><feDropShadow dx="1.5" dy="3" stdDeviation="2" flood-color="rgba(27,16,23,0.14)"/></filter>
        <rect x="10" y="12" width="130" height="56" rx="3" fill="#FFFDF9" filter="url(#ch3c-f-shadow)"/>
        <rect x="10" y="12" width="30" height="56" rx="3" fill="#A7D8F5"/>
        <line x1="105" y1="12" x2="105" y2="68" stroke="#D9D9D9" stroke-width="1.5" stroke-dasharray="3 3"/>
        <text x="25" y="44" font-family="sans-serif" font-weight="bold" font-size="9" fill="#FFFDF9">FLIGHT</text>
        <line x1="48" y1="30" x2="95" y2="30" stroke="#1B1017" stroke-width="2.5"/>
        <line x1="48" y1="42" x2="85" y2="42" stroke="#7A7A7A" stroke-width="1.5"/>
        <!-- Barcode -->
        <rect x="112" y="24" width="2" height="30" fill="#1B1017"/>
        <rect x="116" y="24" width="4" height="30" fill="#1B1017"/>
        <rect x="122" y="24" width="2" height="30" fill="#1B1017"/>
        <rect x="126" y="24" width="3" height="30" fill="#1B1017"/>
      </svg>`,
    },
    hangingVH: {
      name: 'Pesawat Kertas Gantung (VH)',
      description: 'Pesawat kertas origami berlipat tergantung tali benang melayang pelan.',
      angle: 'VH',
      colors: ['#FFFDF9', '#E0E6ED', '#D9B98C'],
      svg: `<svg viewBox="0 0 120 140" width="120" height="140" xmlns="http://www.w3.org/2000/svg">
        <filter id="ch3c-h-shadow"><feDropShadow dx="2" dy="4" stdDeviation="2.5" flood-color="rgba(27,16,23,0.16)"/></filter>
        <line x1="60" y1="0" x2="60" y2="50" stroke="#D9B98C" stroke-width="1.5" stroke-dasharray="3 2"/>
        <!-- Sayap kiri -->
        <polygon points="60,50 15,100 60,90" fill="#FFFDF9" filter="url(#ch3c-h-shadow)"/>
        <!-- Sayap kanan (bayangan lipatan) -->
        <polygon points="60,50 105,100 60,90" fill="#E8EEF5" filter="url(#ch3c-h-shadow)"/>
        <!-- Badan tengah lipatan -->
        <polygon points="60,50 60,110 52,95" fill="#D3DEEB"/>
      </svg>`,
    },
  },
  {
    chapter: '4',
    chapterTitle: 'Chapter 4 · The Boutique (Lassiewear)',
    heroV3: {
      name: 'Koper Butik Terbuka (V3)',
      description: 'Koper display pakaian butik terbuka tiga perempat dengan lipatan kain dusty-rose #E8A5B8.',
      angle: 'V3',
      colors: ['#E8A5B8', '#D492A5', '#FFFDF9'],
      svg: `<svg viewBox="0 0 160 140" width="160" height="140" xmlns="http://www.w3.org/2000/svg">
        <filter id="ch4-shadow"><feDropShadow dx="2.5" dy="4" stdDeviation="3" flood-color="rgba(27,16,23,0.18)"/></filter>
        <!-- Tutup koper terbuka bersudut V3 -->
        <polygon points="20,15 90,10 90,65 20,75" fill="#D492A5" filter="url(#ch4-shadow)"/>
        <!-- Badan koper bawah -->
        <polygon points="20,65 105,55 145,75 55,85" fill="#FFFDF9"/>
        <polygon points="20,65 55,85 55,125 20,105" fill="#E8A5B8" filter="url(#ch4-shadow)"/>
        <polygon points="55,85 145,75 145,115 55,125" fill="#C97F94"/>
      </svg>`,
    },
    flatV0: {
      name: 'Tumpukan Baju Lipat (V0)',
      description: 'Tiga lapis pakaian rajut terlipat rapi dengan jahitan tepi putus-putus.',
      angle: 'V0',
      colors: ['#E8A5B8', '#BFE3F5', '#A8E6CF'],
      svg: `<svg viewBox="0 0 130 110" width="130" height="110" xmlns="http://www.w3.org/2000/svg">
        <filter id="ch4-f-shadow"><feDropShadow dx="2" dy="3" stdDeviation="2" flood-color="rgba(27,16,23,0.15)"/></filter>
        <!-- Lapisan bawah (mint) -->
        <rect x="20" y="65" width="90" height="24" rx="4" fill="#A8E6CF" filter="url(#ch4-f-shadow)"/>
        <!-- Lapisan tengah (baby-blue) -->
        <rect x="25" y="45" width="80" height="24" rx="4" fill="#BFE3F5" filter="url(#ch4-f-shadow)"/>
        <!-- Lapisan atas (dusty-rose) -->
        <rect x="30" y="25" width="70" height="24" rx="4" fill="#E8A5B8" filter="url(#ch4-f-shadow)"/>
      </svg>`,
    },
    hangingVH: {
      name: 'Label Harga Price-tag (VH)',
      description: 'Tag harga kertas dengan sudut terpotong dan tali tan #D9B98C.',
      angle: 'VH',
      colors: ['#FFFDF9', '#D9B98C', '#E8A5B8'],
      svg: `<svg viewBox="0 0 90 150" width="90" height="150" xmlns="http://www.w3.org/2000/svg">
        <filter id="ch4-h-shadow"><feDropShadow dx="2" dy="3" stdDeviation="2.5" flood-color="rgba(27,16,23,0.16)"/></filter>
        <line x1="45" y1="0" x2="45" y2="45" stroke="#D9B98C" stroke-width="2"/>
        <!-- Badan tag sudut terpotong -->
        <polygon points="45,45 68,60 68,125 22,125 22,60" fill="#FFFDF9" filter="url(#ch4-h-shadow)"/>
        <circle cx="45" cy="62" r="3.5" fill="#D9B98C"/>
        <!-- Cap diskon pink -->
        <circle cx="45" cy="95" r="14" fill="#E8A5B8"/>
        <text x="45" y="99" font-family="sans-serif" font-weight="bold" font-size="10" fill="#FFFDF9" text-anchor="middle">NEW</text>
      </svg>`,
    },
  },
  {
    chapter: '5',
    chapterTitle: 'Chapter 5 · The Campus Library',
    heroV3: {
      name: 'Flipbook Portofolio (V3)',
      description: 'Buku flipbook tebal bersudut tiga perempat dengan halaman berlapis tebal.',
      angle: 'V3',
      colors: ['#F3E3B8', '#5A3A2E', '#FFFDF9'],
      svg: `<svg viewBox="0 0 160 140" width="160" height="140" xmlns="http://www.w3.org/2000/svg">
        <filter id="ch5-shadow"><feDropShadow dx="2.5" dy="4" stdDeviation="3" flood-color="rgba(27,16,23,0.18)"/></filter>
        <!-- Halaman tebal V3 -->
        <polygon points="110,25 145,40 145,115 110,100" fill="#E8D5A0" filter="url(#ch5-shadow)"/>
        <!-- Sampul depan -->
        <polygon points="25,35 110,25 110,100 25,110" fill="#5A3A2E" filter="url(#ch5-shadow)"/>
        <!-- Label emas sampul -->
        <polygon points="40,50 95,43 95,80 40,87" fill="#F3E3B8"/>
        <line x1="48" y1="62" x2="87" y2="57" stroke="#5A3A2E" stroke-width="2.5"/>
      </svg>`,
    },
    flatV0: {
      name: 'Buku Ensiklopedia Terbuka (V0)',
      description: 'Buku tebal terbuka dengan pembatas pita merah dan lekukan punggung kertas.',
      angle: 'V0',
      colors: ['#F3E3B8', '#E5173F', '#5A3A2E'],
      svg: `<svg viewBox="0 0 150 100" width="150" height="100" xmlns="http://www.w3.org/2000/svg">
        <filter id="ch5-f-shadow"><feDropShadow dx="2" dy="3" stdDeviation="2" flood-color="rgba(27,16,23,0.15)"/></filter>
        <!-- Sayap buku kiri & kanan -->
        <path d="M 75,30 Q 40,22 15,28 L 15,82 Q 40,76 75,84 Z" fill="#F3E3B8" filter="url(#ch5-f-shadow)"/>
        <path d="M 75,30 Q 110,22 135,28 L 135,82 Q 110,76 75,84 Z" fill="#F9ECD0" filter="url(#ch5-f-shadow)"/>
        <!-- Pita pembatas buku -->
        <path d="M 75,30 Q 72,60 85,95" fill="none" stroke="#E5173F" stroke-width="3"/>
      </svg>`,
    },
    hangingVH: {
      name: 'Headphone Studio Gantung (VH)',
      description: 'Headphone monitor kampus tergantung di kait rak buku.',
      angle: 'VH',
      colors: ['#1F1F1F', '#BDBDBD', '#7A2E5C'],
      svg: `<svg viewBox="0 0 100 150" width="100" height="150" xmlns="http://www.w3.org/2000/svg">
        <filter id="ch5-h-shadow"><feDropShadow dx="2" dy="3" stdDeviation="2.5" flood-color="rgba(27,16,23,0.18)"/></filter>
        <circle cx="50" cy="15" r="4" fill="#BDBDBD"/>
        <line x1="50" y1="15" x2="50" y2="45" stroke="#7A7A7A" stroke-width="2"/>
        <!-- Bando headphone -->
        <path d="M 25,75 C 25,40 75,40 75,75" fill="none" stroke="#1F1F1F" stroke-width="5" filter="url(#ch5-h-shadow)"/>
        <!-- Ear-cup kiri dan kanan -->
        <rect x="18" y="70" width="14" height="26" rx="6" fill="#7A2E5C" filter="url(#ch5-h-shadow)"/>
        <rect x="68" y="70" width="14" height="26" rx="6" fill="#7A2E5C" filter="url(#ch5-h-shadow)"/>
      </svg>`,
    },
  },
  {
    chapter: '6',
    chapterTitle: 'Chapter 6 · The Radio Booth',
    heroV3: {
      name: 'Mikrofon Studio Vintage (V3)',
      description: 'Mikrofon siaran kapsul perak dengan shockmount melingkar dan tiang lengan ayun.',
      angle: 'V3',
      colors: ['#C9CCD5', '#7A2E5C', '#1F1F1F'],
      svg: `<svg viewBox="0 0 150 160" width="150" height="160" xmlns="http://www.w3.org/2000/svg">
        <filter id="ch6-shadow"><feDropShadow dx="2.5" dy="4" stdDeviation="3" flood-color="rgba(27,16,23,0.20)"/></filter>
        <!-- Lengan ayun -->
        <line x1="20" y1="140" x2="75" y2="80" stroke="#1F1F1F" stroke-width="4"/>
        <!-- Shockmount ring -->
        <ellipse cx="75" cy="75" rx="35" ry="25" fill="none" stroke="#C9CCD5" stroke-width="3.5" filter="url(#ch6-shadow)"/>
        <!-- Kapsul mikrofon V3 -->
        <rect x="62" y="50" width="26" height="50" rx="10" fill="#E0E2EC" filter="url(#ch6-shadow)"/>
        <line x1="62" y1="72" x2="88" y2="72" stroke="#7A2E5C" stroke-width="3"/>
        <line x1="62" y1="62" x2="88" y2="62" stroke="#8A8A8A" stroke-width="1.5"/>
        <line x1="62" y1="82" x2="88" y2="82" stroke="#8A8A8A" stroke-width="1.5"/>
      </svg>`,
    },
    flatV0: {
      name: 'Konsol Mixer Siaran (V0)',
      description: 'Permukaan meja kontrol siaran dengan slider fader dan knob volume warna-warni.',
      angle: 'V0',
      colors: ['#2A0F2E', '#C9CCD5', '#E5173F'],
      svg: `<svg viewBox="0 0 150 90" width="150" height="90" xmlns="http://www.w3.org/2000/svg">
        <filter id="ch6-f-shadow"><feDropShadow dx="2" dy="3" stdDeviation="2" flood-color="rgba(27,16,23,0.18)"/></filter>
        <rect x="15" y="10" width="120" height="70" rx="4" fill="#2A0F2E" filter="url(#ch6-f-shadow)"/>
        <!-- Jalur slider -->
        <line x1="35" y1="25" x2="35" y2="65" stroke="#4B1D4F" stroke-width="3"/>
        <rect x="30" y="40" width="10" height="6" rx="1" fill="#C9CCD5"/>
        <line x1="60" y1="25" x2="60" y2="65" stroke="#4B1D4F" stroke-width="3"/>
        <rect x="55" y="30" width="10" height="6" rx="1" fill="#E5173F"/>
        <line x1="85" y1="25" x2="85" y2="65" stroke="#4B1D4F" stroke-width="3"/>
        <rect x="80" y="50" width="10" height="6" rx="1" fill="#C9CCD5"/>
        <circle cx="115" cy="45" r="8" fill="#DA9AF2"/>
      </svg>`,
    },
    hangingVH: {
      name: 'Tanda ON AIR Gantung (VH)',
      description: 'Kotak lampu studio ON AIR dengan pendar merah menyala tergantung rantai.',
      angle: 'VH',
      colors: ['#E5173F', '#FFFDF9', '#1F1F1F'],
      svg: `<svg viewBox="0 0 120 130" width="120" height="130" xmlns="http://www.w3.org/2000/svg">
        <filter id="ch6-h-shadow"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="rgba(229,23,63,0.35)"/></filter>
        <line x1="30" y1="0" x2="30" y2="40" stroke="#7A7A7A" stroke-width="1.8"/>
        <line x1="90" y1="0" x2="90" y2="40" stroke="#7A7A7A" stroke-width="1.8"/>
        <rect x="15" y="40" width="90" height="45" rx="3" fill="#1F1F1F"/>
        <rect x="20" y="45" width="80" height="35" rx="2" fill="#E5173F" filter="url(#ch6-h-shadow)"/>
        <text x="60" y="68" font-family="'Fraunces', serif" font-weight="bold" font-size="14" fill="#FFFDF9" text-anchor="middle">ON AIR</text>
      </svg>`,
    },
  },
  {
    chapter: '7',
    chapterTitle: 'Chapter 7 · The Archive Room',
    heroV3: {
      name: 'Kotak Arsip Kardus (V3)',
      description: 'Kotak berkas arsip kardus warm-grey dengan lubang pegangan dan label honey #F6D76B.',
      angle: 'V3',
      colors: ['#D9D3D6', '#C7BFC3', '#F6D76B'],
      svg: `<svg viewBox="0 0 160 140" width="160" height="140" xmlns="http://www.w3.org/2000/svg">
        <filter id="ch7-shadow"><feDropShadow dx="2.5" dy="4" stdDeviation="3" flood-color="rgba(27,16,23,0.18)"/></filter>
        <!-- Samping V3 -->
        <polygon points="105,25 140,40 140,115 105,100" fill="#BDB5B9" filter="url(#ch7-shadow)"/>
        <!-- Muka depan V3 -->
        <polygon points="25,35 105,25 105,100 25,110" fill="#D9D3D6" filter="url(#ch7-shadow)"/>
        <!-- Lubang pegangan oval -->
        <ellipse cx="65" cy="55" rx="12" ry="5" fill="#5A5255"/>
        <!-- Label honey -->
        <polygon points="40,75 90,70 90,95 40,100" fill="#F6D76B"/>
        <line x1="48" y1="85" x2="82" y2="82" stroke="#5A4A20" stroke-width="2"/>
      </svg>`,
    },
    flatV0: {
      name: 'Map Berkas Tab Indeks (V0)',
      description: 'Folder arsip manila dengan tonjolan tab samping bertanda warna brand.',
      angle: 'V0',
      colors: ['#F3E3B8', '#F6D76B', '#5A3A2E'],
      svg: `<svg viewBox="0 0 140 100" width="140" height="100" xmlns="http://www.w3.org/2000/svg">
        <filter id="ch7-f-shadow"><feDropShadow dx="2" dy="3" stdDeviation="2" flood-color="rgba(27,16,23,0.14)"/></filter>
        <!-- Tab atas -->
        <path d="M 20,25 L 55,25 L 62,35 L 20,35 Z" fill="#F6D76B"/>
        <!-- Badan map -->
        <rect x="20" y="32" width="100" height="55" rx="3" fill="#F3E3B8" filter="url(#ch7-f-shadow)"/>
        <line x1="32" y1="48" x2="85" y2="48" stroke="#5A3A2E" stroke-width="2.5"/>
        <line x1="32" y1="58" x2="105" y2="58" stroke="#A89A80" stroke-width="1.8"/>
      </svg>`,
    },
    hangingVH: {
      name: 'Lampu Kap Arsip Gantung (VH)',
      description: 'Lampu gantung kap hijau arsip perpustakaan menggantung di lorong berkas.',
      angle: 'VH',
      colors: ['#3A6B52', '#FFFDF9', '#D9B98C'],
      svg: `<svg viewBox="0 0 110 150" width="110" height="150" xmlns="http://www.w3.org/2000/svg">
        <filter id="ch7-h-shadow"><feDropShadow dx="2" dy="4" stdDeviation="2.5" flood-color="rgba(27,16,23,0.16)"/></filter>
        <line x1="55" y1="0" x2="55" y2="60" stroke="#D9B98C" stroke-width="2"/>
        <path d="M 15,100 L 35,60 L 75,60 L 95,100 Z" fill="#3A6B52" filter="url(#ch7-h-shadow)"/>
        <path d="M 55,60 L 75,60 L 95,100 L 55,100 Z" fill="#29503D"/>
        <ellipse cx="55" cy="100" rx="40" ry="8" fill="#FFFDF9"/>
      </svg>`,
    },
  },
  {
    chapter: '8',
    chapterTitle: 'Chapter 8 · The Mailbox',
    heroV3: {
      name: 'Loker Kotak Surat Kembali (V3)',
      description: 'Loker sekolah penutup perjalanan bersudut tiga perempat, celah surat terbuka dengan amplop mengintip.',
      angle: 'V3',
      colors: ['#FFD6E8', '#E5BCCF', '#FFFDF9'],
      svg: `<svg viewBox="0 0 160 210" width="160" height="210" xmlns="http://www.w3.org/2000/svg">
        <filter id="ch8-shadow"><feDropShadow dx="2" dy="4" stdDeviation="3" flood-color="rgba(27,16,23,0.18)"/></filter>
        <polygon points="110,25 145,15 145,185 110,205" fill="#E5BCCF" filter="url(#ch8-shadow)"/>
        <polygon points="25,35 110,25 110,205 25,215" fill="#FFD6E8" filter="url(#ch8-shadow)"/>
        <!-- Pintu berlapis cotton candy -->
        <polygon points="32,42 103,33 103,198 32,207" fill="#FFFDF9"/>
        <!-- Celah surat -->
        <polygon points="45,75 90,70 90,82 45,87" fill="#2A1F2A"/>
        <!-- Amplop surat mengintip -->
        <polygon points="50,65 85,60 85,76 50,81" fill="#FFB3D9"/>
      </svg>`,
    },
    flatV0: {
      name: 'Amplop Surat Segel Hati (V0)',
      description: 'Amplop surat handmade bertepi deckle dengan segel stempel hati merah.',
      angle: 'V0',
      colors: ['#FFFDF9', '#E5173F', '#FFD6E8'],
      svg: `<svg viewBox="0 0 140 100" width="140" height="100" xmlns="http://www.w3.org/2000/svg">
        <filter id="ch8-f-shadow"><feDropShadow dx="2" dy="3" stdDeviation="2" flood-color="rgba(27,16,23,0.15)"/></filter>
        <rect x="15" y="15" width="110" height="70" rx="3" fill="#FFFDF9" filter="url(#ch8-f-shadow)"/>
        <!-- Lipatan amplop segitiga -->
        <polygon points="15,15 70,55 125,15" fill="#F4EFE6"/>
        <circle cx="70" cy="55" r="9" fill="#E5173F"/>
        <!-- Ikon hati putih kecil -->
        <path d="M 70,53 C 68,50 64,50 64,53 C 64,56 70,60 70,60 C 70,60 76,56 76,53 C 76,50 72,50 70,53 Z" fill="#FFFDF9"/>
      </svg>`,
    },
    hangingVH: {
      name: 'Pita Kenangan Gantung (VH)',
      description: 'Pita kertas bergelombang pink pastel tergantung sebagai penutup cerita manis.',
      angle: 'VH',
      colors: ['#FF8DC7', '#FFFDF9', '#D9B98C'],
      svg: `<svg viewBox="0 0 90 150" width="90" height="150" xmlns="http://www.w3.org/2000/svg">
        <filter id="ch8-h-shadow"><feDropShadow dx="2" dy="4" stdDeviation="2" flood-color="rgba(27,16,23,0.16)"/></filter>
        <circle cx="45" cy="20" r="4" fill="#C9CCD5"/>
        <path d="M 45,20 Q 30,50 60,80 Q 30,110 50,140" fill="none" stroke="#FF8DC7" stroke-width="8" stroke-linecap="round" filter="url(#ch8-h-shadow)"/>
        <path d="M 45,20 Q 30,50 60,80 Q 30,110 50,140" fill="none" stroke="#FFFDF9" stroke-width="2" stroke-linecap="round" stroke-dasharray="4 3"/>
      </svg>`,
    },
  },
];
