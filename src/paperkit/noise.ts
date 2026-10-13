/**
 * noise.ts — 1D Multi-octave Value Noise deterministik berbasis seed
 * Digunakan untuk:
 * 1. TornEdge contour: Deformasi skala besar + robekan sedang + serat halus (DF 11.4)
 * 2. Jitter path pada potongan kertas handmade (DV 2.5)
 * 3. Deckle edge contour (REV C)
 */

import { createPRNG, type PRNG } from './prng';

/**
 * Interpolasi hermite smoothstep (3x^2 - 2x^3) untuk transisi halus
 */
function smoothstep(t: number): number {
  return t * t * (3 - 2 * t);
}

/**
 * Pembangkit 1D lattice noise sederhana dari seed dan koordinat x.
 */
class SeededLatticeNoise {
  private prng: PRNG;
  private table: Float32Array;
  private readonly size: number = 256;
  private readonly mask: number = 255;

  constructor(seed: number) {
    this.prng = createPRNG(seed);
    this.table = new Float32Array(this.size);
    for (let i = 0; i < this.size; i++) {
      // Nilai acak antara -1 dan 1
      this.table[i] = this.prng() * 2 - 1;
    }
  }

  public get(x: number): number {
    const xi = Math.floor(x);
    const xf = x - xi;
    const s = smoothstep(xf);

    const i0 = xi & this.mask;
    const i1 = (xi + 1) & this.mask;

    const v0 = this.table[i0];
    const v1 = this.table[i1];

    return v0 + (v1 - v0) * s;
  }
}

// Cache lattice noise per seed untuk efisiensi
const latticeCache = new Map<number, SeededLatticeNoise>();

function getLattice(seed: number): SeededLatticeNoise {
  let l = latticeCache.get(seed);
  if (!l) {
    l = new SeededLatticeNoise(seed);
    latticeCache.set(seed, l);
  }
  return l;
}

export interface NoiseOptions {
  octaves?: number;
  persistence?: number;
  lacunarity?: number;
  frequency?: number;
}

/**
 * generateSeededNoise — Menghasilkan nilai noise multi-oktaf di titik x dalam rentang [-1, 1].
 * Deterministik penuh berdasarkan seed.
 */
export function generateSeededNoise(
  seed: number,
  x: number,
  options: NoiseOptions = {}
): number {
  const octaves = options.octaves ?? 3;
  const persistence = options.persistence ?? 0.5;
  const lacunarity = options.lacunarity ?? 2.0;
  let freq = options.frequency ?? 1.0;

  let total = 0;
  let maxAmp = 0;
  let amp = 1.0;

  for (let o = 0; o < octaves; o++) {
    // Tiap oktaf menggunakan seed offset turunan agar independen
    const octaveSeed = (seed + o * 1337) | 0;
    const lattice = getLattice(octaveSeed);
    total += lattice.get(x * freq) * amp;
    maxAmp += amp;
    amp *= persistence;
    freq *= lacunarity;
  }

  return maxAmp > 0 ? total / maxAmp : 0;
}
