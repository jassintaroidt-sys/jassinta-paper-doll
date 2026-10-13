/**
 * Definisi Brad (Paku Lipat Logam) — Jassinta (DV 4.7 & PB 5.10)
 * Sepuluh brad selalu terlihat di semua kostum, digambar di atas kain:
 * - Bahu (kiri & kanan): diameter kecil 2.4% H (13 px)
 * - Siku (kiri & kanan): diameter 2.4% H dengan cincin gelap lebih besar 4.5% H (lekukan kain)
 * - Tangan (kiri & kanan): diameter kecil di punggung tangan, 25% dari pergelangan
 * - Lutut (kiri & kanan): diameter 2.4% H dengan cincin oval gelap lebih besar 4.5% H
 * - Pergelangan kaki (kiri & kanan): diameter kecil di atas kaus kaki/celana
 *
 * Warna: fill #BDBDBD, ring #8A8A8A, highlight dot 1 px #FFFFFF.
 * Aturan bebas zona: pola, saku, kancing dilarang menimpa 16 px di sekitar brad.
 */

export interface BradDef {
  id: 'shoulder' | 'elbow' | 'hand' | 'knee' | 'ankle';
  name: string;
  count: number;
  diameterPercentH: number; // 2.4% H
  dimpleRingPercentH?: number; // 4.5% H untuk siku dan lutut
  fill: string;
  ring: string;
  highlightDot: string;
  assetFile: string;
  description: string;
}

export const BRADS: Record<string, BradDef> = {
  shoulder: {
    id: 'shoulder',
    name: 'Brad Bahu',
    count: 2,
    diameterPercentH: 0.024,
    fill: '#BDBDBD',
    ring: '#8A8A8A',
    highlightDot: '#FFFFFF',
    assetFile: 'brad_shoulder.svg',
    description: 'Paku lipat tunggal di sendi bahu kiri dan kanan',
  },
  elbow: {
    id: 'elbow',
    name: 'Brad Siku',
    count: 2,
    diameterPercentH: 0.024,
    dimpleRingPercentH: 0.045,
    fill: '#BDBDBD',
    ring: '#8A8A8A',
    highlightDot: '#FFFFFF',
    assetFile: 'brad_elbow.svg',
    description: 'Paku lipat dengan cincin gelap lebih besar (dimple lekukan kain lengan)',
  },
  hand: {
    id: 'hand',
    name: 'Brad Tangan',
    count: 2,
    diameterPercentH: 0.024,
    fill: '#BDBDBD',
    ring: '#8A8A8A',
    highlightDot: '#FFFFFF',
    assetFile: 'brad_hand.svg',
    description: 'Paku lipat di punggung tangan, 25% dari pergelangan tangan',
  },
  knee: {
    id: 'knee',
    name: 'Brad Lutut',
    count: 2,
    diameterPercentH: 0.024,
    dimpleRingPercentH: 0.045,
    fill: '#BDBDBD',
    ring: '#8A8A8A',
    highlightDot: '#FFFFFF',
    assetFile: 'brad_knee.svg',
    description: 'Paku lipat dengan cincin oval gelap lebih besar (dimple lipatan kain lutut/rok)',
  },
  ankle: {
    id: 'ankle',
    name: 'Brad Pergelangan Kaki',
    count: 2,
    diameterPercentH: 0.024,
    fill: '#BDBDBD',
    ring: '#8A8A8A',
    highlightDot: '#FFFFFF',
    assetFile: 'brad_ankle.svg',
    description: 'Paku lipat di sendi pergelangan kaki tepat di atas sepatu',
  },
};
