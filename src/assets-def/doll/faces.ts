/**
 * Definisi Wajah dan Enam Ekspresi Doll — Jassinta (DV 4.3 & DV 5)
 * Kisi penempatan 4.3 (0% = tepi atas bukaan hijab):
 * - Mata: 50% tinggi wajah, jarak antarmata 46% lebar wajah (titik diameter 11% lebar wajah, garis kelopak 14% di atas)
 * - Alis: 38% tinggi wajah, 16% lebar wajah, lengkung tipis (#3A2A24)
 * - Hidung: 62% tinggi wajah, titik kecil (#D49A7B)
 * - Blush: 68% tinggi wajah, di bawah luar mata, diameter 22% lebar wajah (#F6B79D 60%)
 * - Mulut: 84% tinggi wajah, lebar 18% lebar wajah, busur naik 2 px (#B5645F)
 *
 * Tanpa kontur tinta: dibuat dari potongan kertas kecil (titik mata, sabit kelopak, lingkaran blush, sabit senyum).
 */

export type ExpressionType =
  | 'neutral'
  | 'smile'
  | 'curious'
  | 'surprised'
  | 'proud'
  | 'focused';

export interface FaceFeatureDef {
  eye: string;
  eyebrow: string;
  mouth: string;
  blushOpacity: number;
  headTiltDeg: number;
  description: string;
  assetFileF: string;
  assetFileW: string;
}

export const FACE_EXPRESSIONS: Record<ExpressionType, FaceFeatureDef> = {
  neutral: {
    eye: 'Titik normal, garis kelopak tipis',
    eyebrow: 'Datar 0°',
    mouth: 'Garis lurus 12% lebar wajah, naik 1 px',
    blushOpacity: 0.6,
    headTiltDeg: 0,
    description: 'Idle, jalan normal',
    assetFileF: 'face_neutral_F.webp',
    assetFileW: 'face_neutral_W.webp',
  },
  smile: {
    eye: 'Titik normal',
    eyebrow: 'Lengkung natural',
    mouth: 'Busur 18% lebar, naik 2 px',
    blushOpacity: 0.6,
    headTiltDeg: 0,
    description: 'Master expression: default, wave, peek',
    assetFileF: 'face_smile_F.webp',
    assetFileW: 'face_smile_W.webp',
  },
  curious: {
    eye: 'Titik bergeser 1 px ke atas dan ke arah miring',
    eyebrow: 'Alis kiri naik 10°, kanan 0°',
    mouth: 'Busur kecil 10% lebar, miring 3°',
    blushOpacity: 0.6,
    headTiltDeg: 6,
    description: 'Angka kecil (0 like, 24 views), klik karya / belajar',
    assetFileF: 'face_curious_F.webp',
    assetFileW: 'face_curious_W.webp',
  },
  surprised: {
    eye: 'Titik +20% diameter dengan sorot putih 1 px',
    eyebrow: 'Naik 12°',
    mouth: 'Oval kecil, lebar 6%, tinggi 9% tinggi wajah',
    blushOpacity: 0.7,
    headTiltDeg: 0,
    description: 'Gelembung kejutan, deep link, easter egg',
    assetFileF: 'face_surprised_F.webp',
    assetFileW: 'face_surprised_W.webp',
  },
  proud: {
    eye: 'Busur tertutup (^ ^) lebar 14% wajah',
    eyebrow: 'Naik 4°',
    mouth: 'Senyum lebar terbuka bentuk D, lebar 22%, isi #B5645F 40%',
    blushOpacity: 0.9,
    headTiltDeg: 2,
    description: 'Hasil tinggi (914 views, 30K+ views), confetti kertas',
    assetFileF: 'face_proud_F.webp',
    assetFileW: 'face_proud_W.webp',
  },
  focused: {
    eye: 'Titik 10% lebih kecil',
    eyebrow: 'Turun ke dalam 6°',
    mouth: 'Garis lurus 10% lebar',
    blushOpacity: 0.5,
    headTiltDeg: 0,
    description: 'Menulis, memegang notes, Radio Booth, studio',
    assetFileF: 'face_focused_F.webp',
    assetFileW: 'face_focused_W.webp',
  },
};
