/**
 * shadow.ts — Tiga tingkat kedalaman bayangan drop-shadow Paper Cut-Out
 * Sesuai REV C & DV 2.3:
 * "Tiga kedalaman:
 *  - Belakang: 0 4px 6px rgba(0,0,0,.12)
 *  - Tengah: 0 8px 12px rgba(0,0,0,.18)
 *  - Depan: 0 14px 20px rgba(0,0,0,.22)
 *  - Kontak: 2 sampai 3 px satu nada
 *  Menggunakan filter: drop-shadow agar mengikuti kontur potongan kertas."
 */

export type PaperDepth = 'back' | 'mid' | 'front' | 'contact' | 'none';

export const PAPER_SHADOWS = {
  back: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.12))',
  mid: 'drop-shadow(0 8px 12px rgba(0, 0, 0, 0.18))',
  front: 'drop-shadow(0 14px 20px rgba(0, 0, 0, 0.22))',
  contact: 'drop-shadow(0 2px 3px rgba(0, 0, 0, 0.25))',
  none: 'none',
} as const;

/**
 * Menghasilkan filter CSS string untuk kedalaman tertentu
 */
export function getPaperShadow(depth: PaperDepth): string {
  return PAPER_SHADOWS[depth];
}
