/**
 * src/__tests__/world.test.ts
 * Vitest: verifikasi konfigurasi World Set, Walk Strip, dan WorldContext (P05)
 *
 * Gerbang:
 * - 12 scene World Set tersusun benar (id, chapterNum, act, mode, warna, flag)
 * - 7 walk strip tersedia dengan urutan, dimensi, dan atribut tepat
 * - Flag khusus Chapter 1: putih murni, tanpa lantai, tanpa pita tepi
 * - Seed TornEdge hanya 6 nilai legal (101, 202, 303, 404, 505, 606)
 */

import { describe, it, expect } from 'vitest';
import { SCENES, WALK_STRIPS } from '../components/world/worldData';
import type { SceneMode } from '../components/world/worldTypes';

const VALID_TORN_SEEDS = [101, 202, 303, 404, 505, 606] as const;
const VALID_MODES: SceneMode[] = ['D', 'P', 'S'];

// ---------------------------------------------------------------------------
// SCENES
// ---------------------------------------------------------------------------
describe('World Set – 12 Scenes', () => {
  it('harus ada tepat 12 adegan', () => {
    expect(SCENES).toHaveLength(12);
  });

  it('id setiap scene harus unik', () => {
    const ids = SCENES.map((s) => s.id);
    const unique = new Set(ids);
    expect(unique.size).toBe(ids.length);
  });

  it('chapterNum harus mencakup 0, 1, 2, 3.0, 3A, 3B, 3C, 4, 5, 6, 7, 8', () => {
    const nums = SCENES.map((s) => s.chapterNum);
    const expected = ['0', '1', '2', '3.0', '3A', '3B', '3C', '4', '5', '6', '7', '8'];
    expect(nums).toEqual(expect.arrayContaining(expected));
  });

  it('semua babak act harus bernilai 1, 2, atau 3', () => {
    SCENES.forEach((scene) => {
      expect([1, 2, 3]).toContain(scene.act);
    });
  });

  it('semua mode harus D, P, atau S', () => {
    SCENES.forEach((scene) => {
      expect(VALID_MODES).toContain(scene.mode);
    });
  });

  it('Chapter 1 harus putih murni #FFFFFF tanpa lantai dan tanpa pita tepi', () => {
    const ch1 = SCENES.find((s) => s.chapterNum === '1');
    expect(ch1).toBeDefined();
    expect(ch1!.wallTint).toBe('#FFFFFF');
    expect(ch1!.hasFloor).toBe(false);
    expect(ch1!.hasEdgeTape).toBe(false);
  });

  it('setiap scene harus punya heightVh > 0', () => {
    SCENES.forEach((scene) => {
      expect(scene.heightVh).toBeGreaterThan(0);
    });
  });

  it('setiap scene harus punya labelId dimulai S_label', () => {
    SCENES.forEach((scene) => {
      expect(scene.labelId).toMatch(/^S_label/);
    });
  });

  it('seedTornEdge bila ada harus salah satu dari nilai deterministik legal', () => {
    SCENES.forEach((scene) => {
      if (scene.seedTornEdge !== undefined) {
        expect(VALID_TORN_SEEDS).toContain(scene.seedTornEdge as (typeof VALID_TORN_SEEDS)[number]);
      }
    });
  });

  it('warna wallTint harus string hex valid (# + 6 karakter)', () => {
    SCENES.forEach((scene) => {
      expect(scene.wallTint).toMatch(/^#[0-9A-Fa-f]{6}$/);
    });
  });

  it('warna brandColor harus string hex valid', () => {
    SCENES.forEach((scene) => {
      expect(scene.brandColor).toMatch(/^#[0-9A-Fa-f]{6}$/);
    });
  });
});

// ---------------------------------------------------------------------------
// ACT PROGRESSION
// ---------------------------------------------------------------------------
describe('Urutan babak ACT', () => {
  it('Chapter 0-2 harus ACT I (1)', () => {
    const actICh = ['0', '1', '2'];
    actICh.forEach((ch) => {
      const scene = SCENES.find((s) => s.chapterNum === ch);
      expect(scene?.act).toBe(1);
    });
  });

  it('Chapter 3.0–4 harus ACT II (2)', () => {
    const actIICh = ['3.0', '3A', '3B', '3C', '4'];
    actIICh.forEach((ch) => {
      const scene = SCENES.find((s) => s.chapterNum === ch);
      expect(scene?.act).toBe(2);
    });
  });

  it('Chapter 5-8 harus ACT III (3)', () => {
    const actIIICh = ['5', '6', '7', '8'];
    actIIICh.forEach((ch) => {
      const scene = SCENES.find((s) => s.chapterNum === ch);
      expect(scene?.act).toBe(3);
    });
  });
});

// ---------------------------------------------------------------------------
// WALK STRIPS
// ---------------------------------------------------------------------------
describe('Walk Strip – 7 Strip', () => {
  it('harus ada tepat 7 walk strip', () => {
    expect(WALK_STRIPS).toHaveLength(7);
  });

  it('id setiap strip harus unik', () => {
    const ids = WALK_STRIPS.map((w) => w.id);
    const unique = new Set(ids);
    expect(unique.size).toBe(ids.length);
  });

  it('setiap strip harus punya fromChapter dan toChapter berbeda', () => {
    WALK_STRIPS.forEach((strip) => {
      expect(strip.fromChapter).not.toBe(strip.toChapter);
    });
  });

  it('semua strip harus punya heightVh >= 40', () => {
    WALK_STRIPS.forEach((strip) => {
      expect(strip.heightVh).toBeGreaterThanOrEqual(40);
    });
  });

  it('hanya strip-0-1 dan strip-7-8 yang punya hasFootsteps: true', () => {
    const footprintStrips = WALK_STRIPS.filter((w) => w.hasFootsteps === true);
    expect(footprintStrips).toHaveLength(2);
    const ids = footprintStrips.map((w) => w.id);
    expect(ids).toContain('strip-0-1');
    expect(ids).toContain('strip-7-8');
  });

  it('hanya strip-4-5 yang punya reverseDirection: true', () => {
    const reverseStrips = WALK_STRIPS.filter((w) => w.reverseDirection === true);
    expect(reverseStrips).toHaveLength(1);
    expect(reverseStrips[0].id).toBe('strip-4-5');
  });

  it('connectedItem harus berupa string tidak kosong', () => {
    WALK_STRIPS.forEach((strip) => {
      expect(typeof strip.connectedItem).toBe('string');
      expect(strip.connectedItem.length).toBeGreaterThan(0);
    });
  });

  it('skylineAssets harus berupa array', () => {
    WALK_STRIPS.forEach((strip) => {
      expect(Array.isArray(strip.skylineAssets)).toBe(true);
    });
  });
});

// ---------------------------------------------------------------------------
// TABEL BENDA PENGHUBUNG (PB Tabel 10 Transisi)
// ---------------------------------------------------------------------------
describe('Benda penghubung (connected objects)', () => {
  it('Chapter 0 harus membawa Kalung ID', () => {
    const ch0 = SCENES.find((s) => s.chapterNum === '0');
    expect(ch0?.connectedObject).toContain('Kalung ID');
  });

  it('Strip 0→1 harus membawa Kalung ID', () => {
    const strip = WALK_STRIPS.find((w) => w.id === 'strip-0-1');
    expect(strip?.connectedItem).toContain('Kalung');
  });

  it('Strip 4→5 harus membawa label harga (rewind)', () => {
    const strip = WALK_STRIPS.find((w) => w.id === 'strip-4-5');
    expect(strip?.connectedItem).toMatch(/[Ll]abel/);
  });
});
