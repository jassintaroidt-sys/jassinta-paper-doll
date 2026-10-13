/**
 * Definisi Proporsi Doll — Jassinta (DV 4.1 & PB 5.10)
 * Tinggi total H = 560 px (ekspor 2×), 0% di puncak hijab.
 */

export interface DollJoint {
  name: string;
  percentH: number;
  px: number;
}

export const DOLL_HEIGHT = 560; // H dalam piksel (2x basis)

export const DOLL_JOINTS: Record<string, DollJoint> = {
  chin: { name: 'Dagu', percentH: 0.18, px: 101 },
  hijabDrape: { name: 'Ujung drape hijab di leher', percentH: 0.25, px: 140 },
  shoulder: { name: 'Bahu (brad)', percentH: 0.24, px: 134 },
  elbow: { name: 'Siku (brad)', percentH: 0.39, px: 218 },
  hand: { name: 'Ujung tangan (brad)', percentH: 0.52, px: 291 },
  hip: { name: 'Pinggul (pivot tersembunyi)', percentH: 0.54, px: 302 },
  knee: { name: 'Lutut (brad)', percentH: 0.73, px: 409 },
  ankle: { name: 'Pergelangan kaki (brad)', percentH: 0.92, px: 515 },
  sole: { name: 'Telapak sepatu', percentH: 1.0, px: 560 },
};

export const DOLL_WIDTHS = {
  headWithHijab: { percentH: 0.18, px: 101 },
  bodyWithArms: { percentH: 0.35, px: 196 },
  hipStraightPants: { percentH: 0.2, px: 112 },
  shoulderBradSpan: { percentH: 0.16, px: 90 },
  elbowBradSpan: { percentH: 0.24, px: 134 },
  handBradSpan: { percentH: 0.33, px: 185 },
  kneeAnkleBradSpan: { percentH: 0.11, px: 62 },
};

export type CostumeVolume = 'ramping' | 'regular' | 'lebar';

export const VOLUME_BOUNDS: Record<CostumeVolume, { minPercent: number; maxPercent: number; desc: string }> = {
  ramping: { minPercent: 0, maxPercent: 0.22, desc: 'Lebar pinggul sampai 22% H' },
  regular: { minPercent: 0.23, maxPercent: 0.27, desc: 'Lebar pinggul 23% sampai 27% H' },
  lebar: { minPercent: 0.28, maxPercent: 0.34, desc: 'Lebar pinggul 28% sampai 34% H (rok & outer)' },
};
