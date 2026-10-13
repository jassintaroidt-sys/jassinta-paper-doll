/**
 * Tes unit: data companies.ts dan works.ts
 * Memverifikasi jumlah dan properti wajib sesuai bible
 */
import { describe, it, expect } from 'vitest';
import { COMPANIES } from '../data/companies';
import { WORKS } from '../data/works';

describe('companies.ts', () => {
  it('harus memiliki tepat 10 perusahaan', () => {
    expect(COMPANIES).toHaveLength(10);
  });

  it('setiap perusahaan harus memiliki properti wajib', () => {
    COMPANIES.forEach((c) => {
      expect(c.id).toBeTypeOf('number');
      expect(c.name).toBeTruthy();
      expect(c.logoFile).toMatch(/\.png$/);
      expect(c.brandColorInk).toMatch(/^#[0-9A-Fa-f]{6}$/);
      expect(c.role).toBeTruthy();
      expect(c.period).toBeTruthy();
    });
  });

  it('id perusahaan harus unik dan berurutan 1-10', () => {
    const ids = COMPANIES.map((c) => c.id).sort((a, b) => a - b);
    expect(ids).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('tidak ada needsReview: true yang belum diselesaikan', () => {
    const pending = COMPANIES.filter((c) => c.needsReview === true);
    expect(pending).toHaveLength(0);
  });
});

describe('works.ts', () => {
  it('harus memiliki tepat 34 karya', () => {
    expect(WORKS).toHaveLength(34);
  });

  it('setiap karya harus memiliki properti wajib', () => {
    WORKS.forEach((w) => {
      expect(w.id).toBeTypeOf('number');
      expect(w.title).toBeTruthy();
      expect(w.company).toBeTruthy();
      expect(['Writing', 'Video', 'Feed']).toContain(w.format);
      expect(w.mediaFile).toBeTruthy();
      expect(w.aspectRatio).toBeTruthy();
    });
  });

  it('id karya harus unik dan berurutan 1-34', () => {
    const ids = WORKS.map((w) => w.id).sort((a, b) => a - b);
    const expected = Array.from({ length: 34 }, (_, i) => i + 1);
    expect(ids).toEqual(expected);
  });

  it('9 video Ch3 dan 4 karya Ch4 harus memiliki whatILearned dari DF 16.7', () => {
    const targetWorks = WORKS.filter(
      (w) =>
        (w.format === 'Video' &&
          w.contextChapter &&
          ['Chapter 3A', 'Chapter 3B', 'Chapter 3C'].includes(w.contextChapter)) ||
        w.contextChapter === 'Chapter 4'
    );
    expect(targetWorks).toHaveLength(13);
    targetWorks.forEach((w) => {
      expect(w.whatILearned).toBeTruthy();
    });
  });

  it('tepat 13 karya harus memiliki whatILearned (DF 16.7)', () => {
    const withLearned = WORKS.filter((w) => w.whatILearned);
    expect(withLearned).toHaveLength(13);
  });

  it('tidak ada needsReview: true yang belum diselesaikan', () => {
    const pending = WORKS.filter((w) => w.needsReview === true);
    expect(pending).toHaveLength(0);
  });

  it('bumper Elsthetic menggunakan ELSTHETIC_BUMPER.mp4 (keputusan pemilik)', () => {
    const bumper = WORKS.find((w) => w.id === 33);
    expect(bumper?.mediaFile).toBe('ELSTHETIC_BUMPER.mp4');
  });

  it('karya format Video harus 13', () => {
    const videos = WORKS.filter((w) => w.format === 'Video');
    expect(videos).toHaveLength(13);
  });

  it('karya format Writing harus 11', () => {
    const writings = WORKS.filter((w) => w.format === 'Writing');
    expect(writings).toHaveLength(11);
  });

  it('karya format Feed harus 10', () => {
    const feeds = WORKS.filter((w) => w.format === 'Feed');
    expect(feeds).toHaveLength(10);
  });
});
