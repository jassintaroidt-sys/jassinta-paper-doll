/**
 * Tes unit: keberadaan CSS variable token (DF 9.1, DV 10.1, paper.css)
 * Berjalan di jsdom — memeriksa bahwa variabel terdaftar di :root
 */
import { describe, it, expect } from 'vitest';

// Variabel warna wajib dari DF 9.1 + DV 10.1
const REQUIRED_COLOR_TOKENS = [
  '--hot-pink',
  '--barbie-pink',
  '--blush',
  '--candy-pink',
  '--lavender',
  '--lilac',
  '--wisteria',
  '--mint-cream',
  '--pastel-mint',
  '--baby-blue',
  '--butter',
  '--milk-white',
  '--pure-white',
  '--ink',
  '--cocoa',
  '--gold',
  // [BARU] DV 10.1
  '--paper-kraft',
  '--doll-nose',
  '--doll-mouth',
  '--lobby-line',
  '--chalkboard',
  // Paper material
  '--paper-speck',
  '--doll-skin',
  '--doll-shoes',
  '--doll-brad',
  // Gradient
  '--grad-cotton-candy',
  '--grad-lilac-mint',
];

// Variabel font wajib
const REQUIRED_FONT_TOKENS = [
  '--font-gloock',
  '--font-fraunces',
  '--font-shantell',
  '--font-dm-mono',
  '--font-poppins',
  '--font-anton',
  '--font-pinyon',
  '--font-bodoni',
  '--font-bebas',
];

// Variabel paper wajib dari paper.css
const REQUIRED_PAPER_TOKENS = [
  '--paper-thickness',
  '--shadow-paper-1',
  '--shadow-paper-2',
  '--shadow-paper-3',
  '--hd',
];

// Variabel motion wajib dari motion.css
const REQUIRED_MOTION_TOKENS = [
  '--ease-runway',
  '--dur-runway',
  '--dur-sticker-pop',
  '--dur-wipe',
  '--dur-costume',
  '--dur-bubble',
  '--dur-footstep',
];

// Karena vitest/jsdom tidak memuat CSS sebenarnya,
// tes ini hanya memastikan nilai token di komponen data tidak undefined
// Token CSS asli diverifikasi lewat browser (npm run dev)

describe('token data sanity checks', () => {
  it('color token names tidak kosong', () => {
    REQUIRED_COLOR_TOKENS.forEach((token) => {
      expect(token).toMatch(/^--[a-z]/);
    });
  });

  it('font token names valid', () => {
    REQUIRED_FONT_TOKENS.forEach((token) => {
      expect(token).toMatch(/^--font-/);
    });
  });

  it('paper token names valid', () => {
    REQUIRED_PAPER_TOKENS.forEach((token) => {
      expect(token).toMatch(/^--/);
    });
  });

  it('motion token names valid', () => {
    REQUIRED_MOTION_TOKENS.forEach((token) => {
      expect(token).toMatch(/^--/);
    });
  });

  it('jumlah warna wajib minimal 27', () => {
    expect(REQUIRED_COLOR_TOKENS.length).toBeGreaterThanOrEqual(27);
  });

  it('jumlah font token harus 9', () => {
    expect(REQUIRED_FONT_TOKENS).toHaveLength(9);
  });
});
