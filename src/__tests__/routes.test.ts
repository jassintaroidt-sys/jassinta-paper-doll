/**
 * Tes unit: useHashRoute dan semua rute DF 10.2
 */
import { describe, it, expect } from 'vitest';
import {
  parseHash,
  VALID_OVERLAYS,
  VALID_CHAPTERS,
} from '../hooks/useHashRoute';

describe('parseHash — rute home', () => {
  it('string kosong = home', () => {
    const r = parseHash('');
    expect(r.isHome).toBe(true);
    expect(r.isOverlay).toBe(false);
    expect(r.isChapter).toBe(false);
    expect(r.isPlain).toBe(false);
  });

  it('hanya # = home', () => {
    const r = parseHash('#');
    expect(r.isHome).toBe(true);
  });

  it('#/ = home', () => {
    const r = parseHash('#/');
    expect(r.isHome).toBe(true);
  });
});

describe('parseHash — plain', () => {
  it('#/plain = isPlain', () => {
    const r = parseHash('#/plain');
    expect(r.isPlain).toBe(true);
    expect(r.route).toBe('plain');
  });

  it('plain (tanpa hash, dari pathname) = isPlain', () => {
    const r = parseHash('plain');
    expect(r.isPlain).toBe(true);
  });
});

describe('parseHash — overlay routes (DF 10.2)', () => {
  const overlays = [
    '#/participation',
    '#/achievement',
    '#/my-message',
    '#/magazine-art',
    '#/photography',
    '#/my-strategy',
    '#/notes',
    '#/strategy/hard-selling',
    '#/strategy/entertainment',
    '#/strategy/education',
    '#/strategy/fun',
  ];

  overlays.forEach((hash) => {
    it(`${hash} harus isOverlay = true`, () => {
      const r = parseHash(hash);
      expect(r.isOverlay).toBe(true);
      expect(r.isChapter).toBe(false);
      expect(r.isHome).toBe(false);
    });
  });

  it('jumlah overlay resmi harus 11', () => {
    expect(VALID_OVERLAYS).toHaveLength(11);
  });
});

describe('parseHash — chapter deep links (DF 10.2)', () => {
  const chapters = [
    '#/personal-brand',
    '#/writing-portfolio',
    '#/content-marketing',
    '#/content-marketing/cafe',
    '#/content-marketing/clinic',
    '#/content-marketing/terminal',
    '#/example-strategy',
    '#/project-campus',
    '#/podcast',
    '#/archive',
    '#/contact',
  ];

  chapters.forEach((hash) => {
    it(`${hash} harus isChapter = true`, () => {
      const r = parseHash(hash);
      expect(r.isChapter).toBe(true);
      expect(r.isOverlay).toBe(false);
      expect(r.isHome).toBe(false);
    });
  });

  it('jumlah chapter resmi harus 11', () => {
    expect(VALID_CHAPTERS).toHaveLength(11);
  });
});

describe('parseHash — rute tidak dikenal', () => {
  it('rute tidak dikenal fallback ke home', () => {
    const r = parseHash('#/unknown-route-xyz');
    expect(r.isHome).toBe(true);
  });
});
