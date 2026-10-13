/**
 * deckle.ts — Tepi deckle (deckle edge) pada lembar kertas handmade
 * Sesuai REV C: "Tepi deckle: amplitudo 4 sampai 9 px pada lembar besar,
 * 1 sampai 2 px pada benda kecil, dengan rumbai serat putih 1 sampai 2 px di tepi."
 */

import { generateSeededNoise } from './noise';

/**
 * Menghasilkan path garis tepi deckle satu sisi (misal sisi kanan lembar dinding atau bawah kertas)
 * @param length Panjang garis dalam px
 * @param seed Seed integer
 * @param amplitude Amplitudo penyimpangan deckle (4-9 px untuk lembar besar, 1-2 px untuk benda kecil)
 * @param step Jarak antar sampel (default 4 px)
 */
export function generateDeckleEdgePoints(
  length: number,
  seed: number,
  amplitude: number = 6.0,
  step: number = 4
): Array<{ along: number; offset: number }> {
  const count = Math.ceil(length / step);
  const points: Array<{ along: number; offset: number }> = [];

  for (let i = 0; i <= count; i++) {
    const along = Math.min(length, i * step);
    const normalized = along / length;

    // Noise multi-frekuensi untuk deformasi tak beraturan
    const n = generateSeededNoise(seed, normalized * 8, {
      octaves: 3,
      persistence: 0.55,
      frequency: 1.0,
    });

    const offset = Number((n * amplitude).toFixed(2));
    points.push({ along, offset });
  }

  return points;
}

/**
 * Menghasilkan SVG mask path untuk lembar dinding dengan deckle edge di sisi kanan atau bawah.
 */
export function generateDeckleSheetSvg(
  width: number,
  height: number,
  seed: number,
  edge: 'right' | 'bottom' = 'right',
  amplitude: number = 6.0
): string {
  if (edge === 'right') {
    const deckle = generateDeckleEdgePoints(height, seed, amplitude, 5);
    let d = `M 0 0 L ${width} 0`;
    for (const pt of deckle) {
      d += ` L ${width + pt.offset} ${pt.along}`;
    }
    d += ` L 0 ${height} Z`;
    return d;
  } else {
    const deckle = generateDeckleEdgePoints(width, seed, amplitude, 5);
    let d = `M 0 0 L 0 ${height}`;
    for (const pt of deckle) {
      d += ` L ${pt.along} ${height + pt.offset}`;
    }
    d += ` L ${width} 0 Z`;
    return d;
  }
}
