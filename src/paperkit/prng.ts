/**
 * prng.ts — Pseudo-Random Number Generator deterministik
 * Berbasis Mulberry32 (32-bit state)
 * Memastikan seed yang sama selalu menghasilkan deret angka acak yang identik,
 * tanpa bergantung pada Math.random().
 */

export type PRNG = () => number;

/**
 * Membuat fungsi PRNG deterministik dari seed integer.
 * Menghasilkan bilangan float di interval [0, 1).
 */
export function createPRNG(seed: number): PRNG {
  let s = Math.floor(seed) >>> 0;
  return function mulberry32(): number {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Mengubah string arbitrary (misal id aset "3A_A-06") menjadi integer seed 32-bit deterministik.
 * Menggunakan algoritma hash FNV-1a.
 */
export function hashStringToSeed(str: string): number {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h;
}

/**
 * Mengambil angka acak integer dalam rentang [min, max] (inklusif) dengan PRNG tertentu.
 */
export function randomInt(prng: PRNG, min: number, max: number): number {
  const f = prng();
  return Math.floor(f * (max - min + 1)) + min;
}

/**
 * Mengambil angka acak float dalam rentang [min, max] dengan PRNG tertentu.
 */
export function randomFloat(prng: PRNG, min: number, max: number): number {
  return min + prng() * (max - min);
}
