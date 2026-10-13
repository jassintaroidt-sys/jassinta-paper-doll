/**
 * Token Warna Tubuh Doll — Jassinta (DV 4.2 & PB 5.10)
 * Ditambah hasil ukur terukur dari reference/doll-55/ sesuai Rule 40 & docs/07-doll-fidelity.md.
 */

export const DOLL_COLORS = {
  // Warna acuan Design Bible (DV 4.2)
  skinDV: '#E8B795',
  blushDV: '#E9A39B',
  
  // Warna hasil ukur referensi nyata (docs/07-doll-fidelity.md §14 & §17 — referensi menang)
  skin: '#FCCFB2',
  blush: '#F6B79D', // bulat, opasitas 60%
  
  outline: '#1B1017', // garis luar tipis (T1)
  eyebrow: '#3A2A24', // alis tipis 1 px
  nose: '#D49A7B', // titik hidung
  mouth: '#B5645F', // mulut sabit tipis
  
  // Sepatu SELALU hitam di semua kostum
  shoes: '#2E2E2E',
  shoesInner: '#E8B795',
  
  // Brad logam paku lipat
  bradFill: '#BDBDBD',
  bradRing: '#8A8A8A',
  bradHighlight: '#FFFFFF',
  
  // Die-cut border stiker putih
  stickerBorder: '#FFFFFF',
  stickerShadow: '#E6E6E6',
  
  // Hijab master
  masterHijab: '#1F1F1F',
} as const;
