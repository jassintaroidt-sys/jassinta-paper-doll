/**
 * jitter.ts — Path SVG jitter deterministik untuk Paper Cut-Out
 * Sesuai DV 2.5: "Tepi potongan memiliki 5 sampai 9 titik goyang kecil
 * (amplitudo 1 sampai 2 px) agar terlihat digunting tangan [KUNCI]"
 */

import { createPRNG, randomFloat } from './prng';

export interface Point {
  x: number;
  y: number;
}

/**
 * Menambahkan variasi jitter buatan tangan pada segmen garis lurus antar p1 dan p2.
 * @param p1 Titik awal
 * @param p2 Titik akhir
 * @param seed Seed integer unik
 * @param wobblePoints Jumlah titik goyang (default 5 - 9)
 * @param amplitude Besaran goyangan tegak lurus (default 1 - 2 px)
 */
export function jitterSegment(
  p1: Point,
  p2: Point,
  seed: number,
  wobblePoints: number = 7,
  amplitude: number = 1.5
): Point[] {
  const prng = createPRNG(seed);
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  const len = Math.hypot(dx, dy);

  if (len < 4) return [p1, p2];

  // Normal vektor tegak lurus garis
  const nx = -dy / len;
  const ny = dx / len;

  const points: Point[] = [p1];
  const count = Math.max(3, wobblePoints);

  for (let i = 1; i < count; i++) {
    const t = i / count;
    // Jitter sepanjang garis
    const basePx = p1.x + dx * t;
    const basePy = p1.y + dy * t;

    // Displacement tegak lurus
    const disp = randomFloat(prng, -amplitude, amplitude);
    points.push({
      x: Number((basePx + nx * disp).toFixed(2)),
      y: Number((basePy + ny * disp).toFixed(2)),
    });
  }

  points.push(p2);
  return points;
}

/**
 * Mengubah array point menjadi perintah SVG path (M x y L x y ... Z)
 */
export function pointsToSvgPath(points: Point[], close: boolean = true): string {
  if (points.length === 0) return '';
  const [first, ...rest] = points;
  let d = `M ${first.x} ${first.y}`;
  for (const pt of rest) {
    d += ` L ${pt.x} ${pt.y}`;
  }
  if (close) d += ' Z';
  return d;
}

/**
 * Menghasilkan persegi panjang kertas bergunting tangan dengan 4 sudut membulat dan sisi bergoyang.
 */
export function generateHandcutRectPath(
  width: number,
  height: number,
  seed: number,
  radius: number = 6,
  amplitude: number = 1.2
): string {
  // Empat sudut dasar
  const c1: Point = { x: radius, y: 0 };
  const c2: Point = { x: width - radius, y: 0 };
  const c3: Point = { x: width, y: radius };
  const c4: Point = { x: width, y: height - radius };
  const c5: Point = { x: width - radius, y: height };
  const c6: Point = { x: radius, y: height };
  const c7: Point = { x: 0, y: height - radius };
  const c8: Point = { x: 0, y: radius };

  const seg1 = jitterSegment(c1, c2, seed + 10, 6, amplitude);
  const seg2 = jitterSegment(c3, c4, seed + 20, 6, amplitude);
  const seg3 = jitterSegment(c5, c6, seed + 30, 6, amplitude);
  const seg4 = jitterSegment(c7, c8, seed + 40, 6, amplitude);

  // Gabungkan dengan kurva busur di sudut
  const pathParts: string[] = [];

  // Mulai di seg1
  pathParts.push(`M ${seg1[0].x} ${seg1[0].y}`);
  for (let i = 1; i < seg1.length; i++) pathParts.push(`L ${seg1[i].x} ${seg1[i].y}`);

  // Sudut kanan atas
  pathParts.push(`Q ${width} 0 ${c3.x} ${c3.y}`);

  // Sisi kanan
  for (let i = 1; i < seg2.length; i++) pathParts.push(`L ${seg2[i].x} ${seg2[i].y}`);

  // Sudut kanan bawah
  pathParts.push(`Q ${width} ${height} ${c5.x} ${c5.y}`);

  // Sisi bawah
  for (let i = 1; i < seg3.length; i++) pathParts.push(`L ${seg3[i].x} ${seg3[i].y}`);

  // Sudut kiri bawah
  pathParts.push(`Q 0 ${height} ${c7.x} ${c7.y}`);

  // Sisi kiri
  for (let i = 1; i < seg4.length; i++) pathParts.push(`L ${seg4[i].x} ${seg4[i].y}`);

  // Sudut kiri atas
  pathParts.push(`Q 0 0 ${c1.x} ${c1.y}`);
  pathParts.push('Z');

  return pathParts.join(' ');
}
