/**
 * texture.ts — Definisi preset bahan kertas Paper Cut-Out
 * Sesuai REV C & Part 6:
 * Sembilan preset bahan: handmade, cotton-white, newsprint, aged, dark, tissue, marbled, flocked, kraft
 */

export type PaperPreset =
  | 'handmade'
  | 'cotton-white'
  | 'newsprint'
  | 'aged'
  | 'dark'
  | 'tissue'
  | 'marbled'
  | 'flocked'
  | 'kraft';

export interface PaperMaterialSpec {
  preset: PaperPreset;
  description: string;
  fiberCharacter: string;
  speckDensity: 'none' | 'sparse' | 'medium' | 'dense';
  edgeType: 'deckle-mid' | 'clean-cut' | 'deckle-worn' | 'deckle-light';
  tileType: 'neutral' | 'dark' | 'none';
  defaultBaseColor: string;
  fiberColor?: string;
  speckColor?: string;
}

export const PAPER_PRESETS: Record<PaperPreset, PaperMaterialSpec> = {
  handmade: {
    preset: 'handmade',
    description: 'Dinding dan benda umum, serat sedang tone-on-tone',
    fiberCharacter: 'Sedang, tone-on-tone (8-14% lebih gelap)',
    speckDensity: 'sparse',
    edgeType: 'deckle-mid',
    tileType: 'neutral',
    defaultBaseColor: 'var(--milk-white)',
    speckColor: 'var(--paper-speck)',
  },
  'cotton-white': {
    preset: 'cotton-white',
    description: 'Lembar dokumen Chapter 1, kertas katun putih bersih',
    fiberCharacter: 'Halus, jarang',
    speckDensity: 'sparse',
    edgeType: 'clean-cut',
    tileType: 'neutral',
    defaultBaseColor: 'var(--pure-white)',
  },
  newsprint: {
    preset: 'newsprint',
    description: 'Koran dan ruang redaksi Chapter 2',
    fiberCharacter: 'Halus, kecokelatan',
    speckDensity: 'medium',
    edgeType: 'clean-cut',
    tileType: 'neutral',
    defaultBaseColor: 'var(--aged-paper)',
  },
  aged: {
    preset: 'aged',
    description: 'Chapter 5 perpustakaan dan Chapter 7 arsip',
    fiberCharacter: 'Sedang, sepia vintage',
    speckDensity: 'dense',
    edgeType: 'deckle-worn',
    tileType: 'neutral',
    defaultBaseColor: 'var(--aged-paper)',
    speckColor: 'var(--paper-speck)',
  },
  dark: {
    preset: 'dark',
    description: 'Chapter 6 radio booth plum-night gelap',
    fiberCharacter: 'Putih 40% opacity',
    speckDensity: 'medium',
    edgeType: 'deckle-mid',
    tileType: 'dark',
    defaultBaseColor: 'var(--plum-night)',
    fiberColor: 'rgba(255, 255, 255, 0.4)',
    speckColor: 'rgba(255, 255, 255, 0.25)',
  },
  tissue: {
    preset: 'tissue',
    description: 'Chapter 8 mailbox, awan, lembar tipis semi-transparan',
    fiberCharacter: 'Sangat halus, nyaris transparan',
    speckDensity: 'none',
    edgeType: 'deckle-light',
    tileType: 'neutral',
    defaultBaseColor: 'var(--blush)',
  },
  marbled: {
    preset: 'marbled',
    description: 'Chapter 3B klinik kecantikan, urat abu dan emas',
    fiberCharacter: 'Urat marmer abu #E5E0E3 dan emas samar',
    speckDensity: 'none',
    edgeType: 'clean-cut',
    tileType: 'neutral',
    defaultBaseColor: 'var(--milk-white)',
  },
  flocked: {
    preset: 'flocked',
    description: 'Chapter 4 butik, karpet blush beludru',
    fiberCharacter: 'Pendek rapat, permukaan velvety lembut',
    speckDensity: 'none',
    edgeType: 'clean-cut',
    tileType: 'neutral',
    defaultBaseColor: '#E5C8CA',
  },
  kraft: {
    preset: 'kraft',
    description: 'Kardus, piramida, kotak arsip, paket kirim',
    fiberCharacter: 'Panjang, searah, alur kardus 1 px',
    speckDensity: 'medium',
    edgeType: 'clean-cut',
    tileType: 'neutral',
    defaultBaseColor: 'var(--paper-kraft)',
  },
};
