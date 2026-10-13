/**
 * Definisi Pose dan Sudut Sendi Doll — Jassinta (DV 6 & PB 5.10)
 * Memuat tabel pose 6.2, siklus jalan 6.3, dan matriks 31+3 kombinasi 6.4.
 */

export interface JointAngles {
  shoulderLeft?: number;
  shoulderRight?: number;
  elbowLeft?: number;
  elbowRight?: number;
  hipLeft?: number;
  hipRight?: number;
  kneeLeft?: number;
  kneeRight?: number;
  ankleLeft?: number;
  ankleRight?: number;
  torsoTilt?: number;
  headTilt?: number;
}

export type ViewAngle = 'F' | 'W' | 'B'; // Front, Side Profile (Right), Back

export type PoseType =
  | 'idle'
  | 'point'
  | 'hold'
  | 'hold-1'
  | 'reach'
  | 'jump'
  | 'wave'
  | 'peek'
  | 'lift'
  | 'nod';

export interface PoseDef {
  id: PoseType;
  name: string;
  defaultView: ViewAngle;
  angles: JointAngles;
  handShape: 'terbuka' | 'menggenggam' | 'menunjuk' | 'menjangkau' | 'memegang-tepi';
  description: string;
}

export const POSES: Record<PoseType, PoseDef> = {
  idle: {
    id: 'idle',
    name: 'Berdiri Diam',
    defaultView: 'F',
    angles: {
      shoulderLeft: 4,
      shoulderRight: 4,
      elbowLeft: 4,
      elbowRight: 4,
      hipLeft: 0,
      hipRight: 0,
      kneeLeft: 0,
      kneeRight: 0,
      torsoTilt: 0,
      headTilt: 0,
    },
    handShape: 'terbuka',
    description: 'Tegak. Napas naik-turun 2 px, kedip tiap 4 detik.',
  },
  point: {
    id: 'point',
    name: 'Menunjuk',
    defaultView: 'F',
    angles: {
      shoulderLeft: 4,
      shoulderRight: 70,
      elbowLeft: 4,
      elbowRight: 10,
      hipLeft: 0,
      hipRight: 0,
      kneeLeft: 0,
      kneeRight: 0,
      torsoTilt: 3,
      headTilt: 4,
    },
    handShape: 'menunjuk',
    description: 'Torso 3° ke arah tunjuk, kepala menoleh 4°, satu jari telunjuk lurus.',
  },
  hold: {
    id: 'hold',
    name: 'Memegang Dua Tangan',
    defaultView: 'F',
    angles: {
      shoulderLeft: 10,
      shoulderRight: 10,
      elbowLeft: 75,
      elbowRight: 75,
      hipLeft: 0,
      hipRight: 0,
      kneeLeft: 0,
      kneeRight: 0,
      torsoTilt: 0,
      headTilt: 3,
    },
    handShape: 'menggenggam',
    description: 'Tegak, kepala menunduk 3°, kedua tangan bertemu di 44% H.',
  },
  'hold-1': {
    id: 'hold-1',
    name: 'Memegang Satu Tangan',
    defaultView: 'F',
    angles: {
      shoulderLeft: 4,
      shoulderRight: 25,
      elbowLeft: 4,
      elbowRight: 80,
      hipLeft: 0,
      hipRight: 0,
      kneeLeft: 0,
      kneeRight: 0,
      torsoTilt: 0,
      headTilt: 3,
    },
    handShape: 'menggenggam',
    description: 'Kepala miring 3° ke benda, tangan kanan memegang di slot tangan.',
  },
  reach: {
    id: 'reach',
    name: 'Menjangkau',
    defaultView: 'W',
    angles: {
      shoulderRight: 95, // Near arm
      shoulderLeft: -15, // Far arm
      elbowRight: 10,
      elbowLeft: 5,
      hipRight: 10,
      hipLeft: -10,
      kneeRight: 10,
      kneeLeft: 4,
      torsoTilt: 6,
      headTilt: 3,
    },
    handShape: 'menjangkau',
    description: 'Torso +6° ke depan, tangan dekat menjangkau +95° ke depan.',
  },
  jump: {
    id: 'jump',
    name: 'Melompat',
    defaultView: 'F',
    angles: {
      shoulderLeft: 35,
      shoulderRight: 35,
      elbowLeft: 15,
      elbowRight: 15,
      hipLeft: 0,
      hipRight: 0,
      kneeLeft: 12,
      kneeRight: 12,
      torsoTilt: 0,
      headTilt: 0,
    },
    handShape: 'terbuka',
    description: 'Naik 67 px (0.12 Hd), durasi 320 ms, bayangan elips mengecil ke 70%.',
  },
  wave: {
    id: 'wave',
    name: 'Melambai',
    defaultView: 'F',
    angles: {
      shoulderLeft: 4,
      shoulderRight: 150,
      elbowLeft: 4,
      elbowRight: 35,
      hipLeft: 0,
      hipRight: 0,
      kneeLeft: 0,
      kneeRight: 0,
      torsoTilt: 0,
      headTilt: 4,
    },
    handShape: 'terbuka',
    description: 'Tangan kanan terangkat 150°, siku berosilasi 20°–50° (periode 600 ms).',
  },
  peek: {
    id: 'peek',
    name: 'Mengintip',
    defaultView: 'F',
    angles: {
      shoulderLeft: 0,
      shoulderRight: 40,
      elbowLeft: 0,
      elbowRight: 35,
      torsoTilt: 0,
      headTilt: 6,
    },
    handShape: 'memegang-tepi',
    description: 'Potong 0–35% H, tangan memegang tepi kertas sobek, kepala miring 6°.',
  },
  lift: {
    id: 'lift',
    name: 'Mengangkat Kotak',
    defaultView: 'W',
    angles: {
      shoulderRight: 40,
      shoulderLeft: 40,
      elbowRight: 55,
      elbowLeft: 55,
      hipRight: 6,
      hipLeft: -6,
      kneeRight: 10,
      kneeLeft: 10,
      torsoTilt: -3,
      headTilt: 0,
    },
    handShape: 'menggenggam',
    description: 'Torso condong -3° menyeimbangkan beban, kotak arsip di 50% H.',
  },
  nod: {
    id: 'nod',
    name: 'Mengangguk',
    defaultView: 'F',
    angles: {
      shoulderLeft: 4,
      shoulderRight: 4,
      elbowLeft: 4,
      elbowRight: 4,
      torsoTilt: 0,
      headTilt: 6,
    },
    handShape: 'terbuka',
    description: 'Kepala translateY +2 px dan rotateX 6°, 300 ms turun, 300 ms kembali.',
  },
};

/**
 * 6-Frame Walk Cycle (DV 6.3) — 8 fps
 */
export interface WalkFrame {
  frame: number;
  phase: string;
  hipA: number;
  hipB: number;
  kneeA: number;
  kneeB: number;
  ankleA: number;
  ankleB: number;
  shoulderA: number;
  shoulderB: number;
  bobY: number; // piksel
}

export const WALK_CYCLE_FRAMES: WalkFrame[] = [
  { frame: 1, phase: 'Kontak A', hipA: 18, hipB: -18, kneeA: 0, kneeB: 6, ankleA: 8, ankleB: -8, shoulderA: -22, shoulderB: 22, bobY: 0 },
  { frame: 2, phase: 'Turun A', hipA: 10, hipB: -12, kneeA: 8, kneeB: 14, ankleA: 0, ankleB: -6, shoulderA: -12, shoulderB: 12, bobY: 2 },
  { frame: 3, phase: 'Lewat A', hipA: 0, hipB: 0, kneeA: 0, kneeB: 18, ankleA: 0, ankleB: -4, shoulderA: 0, shoulderB: 0, bobY: 1 },
  { frame: 4, phase: 'Kontak B', hipA: -18, hipB: 18, kneeA: 6, kneeB: 0, ankleA: -8, ankleB: 8, shoulderA: 22, shoulderB: -22, bobY: 0 },
  { frame: 5, phase: 'Turun B', hipA: -12, hipB: 10, kneeA: 14, kneeB: 8, ankleA: -6, ankleB: 0, shoulderA: 12, shoulderB: -12, bobY: 2 },
  { frame: 6, phase: 'Lewat B', hipA: 0, hipB: 0, kneeA: 18, kneeB: 0, ankleA: -4, ankleB: 0, shoulderA: 0, shoulderB: 0, bobY: 1 },
];

/**
 * Matriks 31 Kombinasi Utama + 3 Tampak Belakang (DV 6.4)
 */
export interface DollMatrixEntry {
  costumeId: string;
  costumeName: string;
  view: ViewAngle;
  pose: PoseType | 'walk';
  label: string;
  assetFile: string;
  isBackView?: boolean;
}

export const DOLL_MATRIX: DollMatrixEntry[] = [
  // 1 Seragam (4 + 1 B)
  { costumeId: 'K1', costumeName: 'Seragam', view: 'F', pose: 'peek', label: '1 Seragam peek F', assetFile: 'doll_01_seragam_F_peek.webp' },
  { costumeId: 'K1', costumeName: 'Seragam', view: 'W', pose: 'walk', label: '1 Seragam walk W (6-frame)', assetFile: 'doll_01_seragam_W_walk-sheet.webp' },
  { costumeId: 'K1', costumeName: 'Seragam', view: 'F', pose: 'wave', label: '1 Seragam wave F', assetFile: 'doll_01_seragam_F_wave.webp' },
  { costumeId: 'K1', costumeName: 'Seragam', view: 'W', pose: 'hold', label: '1 Seragam hold-surat W', assetFile: 'doll_01_seragam_W_hold-letter.webp' },
  { costumeId: 'K1', costumeName: 'Seragam', view: 'B', pose: 'idle', label: '1 Seragam idle B', assetFile: 'doll_01_seragam_B_idle.webp', isBackView: true },

  // 2 Blazer (3)
  { costumeId: 'K2', costumeName: 'Blazer', view: 'W', pose: 'walk', label: '2 Blazer walk W', assetFile: 'doll_02_blazer_W_walk-sheet.webp' },
  { costumeId: 'K2', costumeName: 'Blazer', view: 'F', pose: 'idle', label: '2 Blazer idle F', assetFile: 'doll_02_blazer_F_idle.webp' },
  { costumeId: 'K2', costumeName: 'Blazer', view: 'W', pose: 'reach', label: '2 Blazer reach W', assetFile: 'doll_02_blazer_W_reach.webp' },

  // 3 Reporter (2)
  { costumeId: 'K3', costumeName: 'Reporter', view: 'W', pose: 'walk', label: '3 Reporter walk W', assetFile: 'doll_03_reporter_W_walk-sheet.webp' },
  { costumeId: 'K3', costumeName: 'Reporter', view: 'F', pose: 'idle', label: '3 Reporter idle F', assetFile: 'doll_03_reporter_F_idle.webp' },

  // 4 Lobi (3)
  { costumeId: 'K4', costumeName: 'Lobi', view: 'W', pose: 'walk', label: '4 Lobi walk W', assetFile: 'doll_04_lobi_W_walk-sheet.webp' },
  { costumeId: 'K4', costumeName: 'Lobi', view: 'F', pose: 'hold-1', label: '4 Lobi hold-1 ponsel F', assetFile: 'doll_04_lobi_F_hold-phone.webp' },
  { costumeId: 'K4', costumeName: 'Lobi', view: 'F', pose: 'point', label: '4 Lobi point pintu F', assetFile: 'doll_04_lobi_F_point-door.webp' },

  // 5 Café (2 + 1 B)
  { costumeId: 'K5', costumeName: 'Café', view: 'F', pose: 'idle', label: '5 Café idle F', assetFile: 'doll_05_cafe_F_idle.webp' },
  { costumeId: 'K5', costumeName: 'Café', view: 'F', pose: 'hold-1', label: '5 Café hold-1 cangkir F', assetFile: 'doll_05_cafe_F_hold-cup.webp' },
  { costumeId: 'K5', costumeName: 'Café', view: 'B', pose: 'idle', label: '5 Café idle B (ikatan apron)', assetFile: 'doll_05_cafe_B_idle.webp', isBackView: true },

  // 6 Klinik (2)
  { costumeId: 'K6', costumeName: 'Klinik', view: 'F', pose: 'hold-1', label: '6 Klinik hold-1 botol F', assetFile: 'doll_06_klinik_F_hold-bottle.webp' },
  { costumeId: 'K6', costumeName: 'Klinik', view: 'F', pose: 'point', label: '6 Klinik point flyer F', assetFile: 'doll_06_klinik_F_point-flyer.webp' },

  // 7 Traveling (2)
  { costumeId: 'K7', costumeName: 'Traveling', view: 'W', pose: 'walk', label: '7 Traveling walk W', assetFile: 'doll_07_traveling_W_walk-sheet.webp' },
  { costumeId: 'K7', costumeName: 'Traveling', view: 'F', pose: 'hold-1', label: '7 Traveling hold-1 paspor F', assetFile: 'doll_07_traveling_F_hold-passport.webp' },

  // 8 Butik dasar (2)
  { costumeId: 'K8', costumeName: 'Butik', view: 'F', pose: 'hold-1', label: '8 Butik hold-1 koper F', assetFile: 'doll_08_butik_F_hold-suitcase.webp' },
  { costumeId: 'K8', costumeName: 'Butik', view: 'W', pose: 'reach', label: '8 Butik reach hanger W', assetFile: 'doll_08_butik_W_reach-hanger.webp' },

  // 9 Hard Selling (1)
  { costumeId: 'K9', costumeName: 'Hard Selling', view: 'F', pose: 'idle', label: '9 Hard Selling idle F', assetFile: 'doll_09_hardselling_F_idle.webp' },

  // 10 Entertainment (1)
  { costumeId: 'K10', costumeName: 'Entertainment', view: 'F', pose: 'idle', label: '10 Entertainment idle F', assetFile: 'doll_10_entertainment_F_idle.webp' },

  // 11 Education (1)
  { costumeId: 'K11', costumeName: 'Education', view: 'F', pose: 'idle', label: '11 Education idle F', assetFile: 'doll_11_education_F_idle.webp' },

  // 12 Fun (2)
  { costumeId: 'K12', costumeName: 'Fun', view: 'F', pose: 'idle', label: '12 Fun idle F', assetFile: 'doll_12_fun_F_idle.webp' },
  { costumeId: 'K12', costumeName: 'Fun', view: 'F', pose: 'jump', label: '12 Fun jump F', assetFile: 'doll_12_fun_F_jump.webp' },

  // 13 Kampus (2 + 1 B)
  { costumeId: 'K13', costumeName: 'Kampus', view: 'W', pose: 'walk', label: '13 Kampus walk W', assetFile: 'doll_13_kampus_W_walk-sheet.webp' },
  { costumeId: 'K13', costumeName: 'Kampus', view: 'W', pose: 'reach', label: '13 Kampus reach headphone W', assetFile: 'doll_13_kampus_W_reach-headphone.webp' },
  { costumeId: 'K13', costumeName: 'Kampus', view: 'B', pose: 'idle', label: '13 Kampus idle B (ransel)', assetFile: 'doll_13_kampus_B_idle.webp', isBackView: true },

  // 14 Siaran (2)
  { costumeId: 'K14', costumeName: 'Siaran', view: 'F', pose: 'nod', label: '14 Siaran nod F', assetFile: 'doll_14_siaran_F_nod.webp' },
  { costumeId: 'K14', costumeName: 'Siaran', view: 'W', pose: 'reach', label: '14 Siaran reach lepas headphone W', assetFile: 'doll_14_siaran_W_reach-headphones-off.webp' },

  // 15 Arsip (2)
  { costumeId: 'K15', costumeName: 'Arsip', view: 'W', pose: 'lift', label: '15 Arsip lift kotak W', assetFile: 'doll_15_arsip_W_lift-box.webp' },
  { costumeId: 'K15', costumeName: 'Arsip', view: 'F', pose: 'idle', label: '15 Arsip idle F', assetFile: 'doll_15_arsip_F_idle.webp' },
];
