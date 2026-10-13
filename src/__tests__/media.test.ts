/**
 * Tes unit: mediaUrl helper dari src/lib/media.ts
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

// Mock import.meta.env sebelum import modul
const originalEnv = { ...import.meta.env };

describe('mediaUrl', () => {
  beforeEach(() => {
    vi.resetModules();
  });

  afterEach(() => {
    Object.assign(import.meta.env, originalEnv);
  });

  it('tanpa VITE_MEDIA_BASE_URL, menghasilkan path relatif /assets/', async () => {
    (import.meta.env as Record<string, string>).VITE_MEDIA_BASE_URL = '';
    const { mediaUrl } = await import('../lib/media');
    expect(mediaUrl('doll/jassinta_walk.webp')).toBe('/assets/doll/jassinta_walk.webp');
  });

  it('dengan base URL, menghasilkan URL lengkap', async () => {
    (import.meta.env as Record<string, string>).VITE_MEDIA_BASE_URL =
      'https://cdn.example.com/';
    const { mediaUrl } = await import('../lib/media');
    expect(mediaUrl('doll/jassinta_walk.webp')).toBe(
      'https://cdn.example.com/assets/doll/jassinta_walk.webp'
    );
  });

  it('trailing slash pada base dihapus (tidak dobel slash)', async () => {
    (import.meta.env as Record<string, string>).VITE_MEDIA_BASE_URL =
      'https://cdn.example.com/';
    const { mediaUrl } = await import('../lib/media');
    const url = mediaUrl('/world/bg_loker.webp');
    expect(url).not.toContain('//assets');
    expect(url).toBe('https://cdn.example.com/assets/world/bg_loker.webp');
  });
});
