/**
 * paperkit.test.ts — Unit tests untuk PaperKit core dan TornEdge (DF 11)
 */
import { describe, it, expect } from 'vitest';
import {
  createPRNG,
  hashStringToSeed,
  generateSeededNoise,
  generateTornPath,
  generateTornMaskSvg,
  createTornEdgeStyle,
  VALID_TORN_SEEDS,
  isValidTornSeed,
  TORN_SEED_SECTION_MAP,
  generateTornFiberAndHighlight,
  calculateTornPoints,
  PAPER_PRESETS,
  PAPER_SHADOWS,
  jitterSegment,
  generateHandcutRectPath,
} from '../paperkit';

describe('PRNG & Hash deterministik', () => {
  it('seed yang sama selalu menghasilkan deret angka acak yang sama persis', () => {
    const prng1 = createPRNG(42);
    const prng2 = createPRNG(42);

    const seq1 = Array.from({ length: 10 }, () => prng1());
    const seq2 = Array.from({ length: 10 }, () => prng2());

    expect(seq1).toEqual(seq2);
  });

  it('seed yang berbeda menghasilkan deret berbeda', () => {
    const prng1 = createPRNG(101);
    const prng2 = createPRNG(202);

    expect(prng1()).not.toEqual(prng2());
  });

  it('hashStringToSeed menghasilkan integer 32-bit deterministik dari string', () => {
    const h1 = hashStringToSeed('3A_A-06_cangkir');
    const h2 = hashStringToSeed('3A_A-06_cangkir');
    expect(h1).toBe(h2);
    expect(h1).toBeTypeOf('number');
  });
});

describe('Seeded Noise deterministik', () => {
  it('generateSeededNoise deterministik di titik yang sama', () => {
    const v1 = generateSeededNoise(101, 0.5);
    const v2 = generateSeededNoise(101, 0.5);
    expect(v1).toBe(v2);
  });

  it('nilai noise berada dalam batas wajar [-1, 1]', () => {
    for (let x = 0; x <= 10; x += 0.5) {
      const val = generateSeededNoise(303, x);
      expect(val).toBeGreaterThanOrEqual(-1.1);
      expect(val).toBeLessThanOrEqual(1.1);
    }
  });
});

describe('TornEdge (DF 11.1 - 11.11)', () => {
  it('hanya ada tepat 6 seed resmi yang diizinkan (DF 11.5)', () => {
    expect(VALID_TORN_SEEDS).toEqual([101, 202, 303, 404, 505, 606]);
    expect(VALID_TORN_SEEDS).toHaveLength(6);
  });

  it('isValidTornSeed memvalidasi 6 seed dengan benar', () => {
    expect(isValidTornSeed(101)).toBe(true);
    expect(isValidTornSeed(202)).toBe(true);
    expect(isValidTornSeed(303)).toBe(true);
    expect(isValidTornSeed(404)).toBe(true);
    expect(isValidTornSeed(505)).toBe(true);
    expect(isValidTornSeed(606)).toBe(true);
    // Seed lain dilarang
    expect(isValidTornSeed(707)).toBe(false);
    expect(isValidTornSeed(999)).toBe(false);
  });

  it('TORN_SEED_SECTION_MAP mencakup 6 section resmi', () => {
    expect(TORN_SEED_SECTION_MAP.opening).toBe(101);
    expect(TORN_SEED_SECTION_MAP.writing).toBe(202);
    expect(TORN_SEED_SECTION_MAP.contentMarketing).toBe(303);
    expect(TORN_SEED_SECTION_MAP.exampleStrategy).toBe(404);
    expect(TORN_SEED_SECTION_MAP.projectCampus).toBe(505);
    expect(TORN_SEED_SECTION_MAP.archive).toBe(606);
  });

  it('generateTornPath: seed yang sama selalu menghasilkan path SVG yang identik (DF 11.5)', () => {
    const path1 = generateTornPath(101, 1000, 80);
    const path2 = generateTornPath(101, 1000, 80);
    expect(path1).toBe(path2);
    expect(path1.startsWith('M 0')).toBe(true);
  });

  it('seed berbeda menghasilkan kontur robekan yang berbeda', () => {
    const path101 = generateTornPath(101, 1000, 80);
    const path202 = generateTornPath(202, 1000, 80);
    expect(path101).not.toBe(path202);
  });

  it('generateTornMaskSvg menghasilkan data URI SVG valid dengan poligon mask', () => {
    const mask = generateTornMaskSvg(303);
    expect(mask.startsWith('url("data:image/svg+xml')).toBe(true);
    expect(mask).toContain('%3Csvg');
    expect(mask).toContain('%3Cpath');
  });

  it('createTornEdgeStyle menghasilkan properti mask CSS yang lengkap', () => {
    const style = createTornEdgeStyle(404);
    expect(style.maskImage).toBeTruthy();
    expect(style.WebkitMaskImage).toBeTruthy();
    expect(style.maskRepeat).toContain('no-repeat');
    expect(style.maskPosition).toContain('bottom left');
    expect(style.maskSize).toContain('clamp(36px, 6vw, 90px)');
  });

  it('semua titik kontur robekan berada di dalam kotak wrapper (0 <= y <= height)', () => {
    const H = 100;
    for (const seed of VALID_TORN_SEEDS) {
      const points = calculateTornPoints(seed, 1000, H);
      expect(points.length).toBeGreaterThan(0);
      for (const pt of points) {
        expect(pt.y).toBeGreaterThanOrEqual(0);
        expect(pt.y).toBeLessThanOrEqual(H);
      }
    }
  });

  it('generateTornFiberAndHighlight menghasilkan array segmen serat sisa dan highlight', () => {
    const result = generateTornFiberAndHighlight(505, 1000, 100);
    expect(result.fiberSegments).toBeInstanceOf(Array);
    expect(result.highlightSegments).toBeInstanceOf(Array);
    // Tidak boleh kosong, harus ada fragmen serat sisa
    expect(result.fiberSegments.length).toBeGreaterThan(0);
  });
});

describe('Preset Bahan Kertas (REV C & Part 6)', () => {
  it('memiliki tepat 9 preset bahan kertas', () => {
    const keys = Object.keys(PAPER_PRESETS);
    expect(keys).toHaveLength(9);
    expect(keys).toEqual([
      'handmade',
      'cotton-white',
      'newsprint',
      'aged',
      'dark',
      'tissue',
      'marbled',
      'flocked',
      'kraft',
    ]);
  });

  it('preset dark memiliki ubin dark dan serat putih 40%', () => {
    const dark = PAPER_PRESETS.dark;
    expect(dark.tileType).toBe('dark');
    expect(dark.fiberColor).toContain('255, 255, 255');
  });
});

describe('Kedalaman Bayangan Paper Cut-Out (DV 2.3)', () => {
  it('memiliki 3 kedalaman drop-shadow plus kontak', () => {
    expect(PAPER_SHADOWS.back).toContain('0 4px 6px');
    expect(PAPER_SHADOWS.mid).toContain('0 8px 12px');
    expect(PAPER_SHADOWS.front).toContain('0 14px 20px');
    expect(PAPER_SHADOWS.contact).toContain('0 2px 3px');
  });
});

describe('Jitter Handcut Path (DV 2.5)', () => {
  it('jitterSegment deterministik dan menghasilkan titik bergoyang', () => {
    const pts1 = jitterSegment({ x: 0, y: 0 }, { x: 100, y: 0 }, 777, 6, 1.5);
    const pts2 = jitterSegment({ x: 0, y: 0 }, { x: 100, y: 0 }, 777, 6, 1.5);
    expect(pts1).toEqual(pts2);
    expect(pts1.length).toBeGreaterThan(2);
  });

  it('generateHandcutRectPath menghasilkan SVG path tertutup', () => {
    const path = generateHandcutRectPath(200, 100, 888, 6, 1.2);
    expect(path.startsWith('M')).toBe(true);
    expect(path.endsWith('Z')).toBe(true);
  });
});
