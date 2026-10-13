/**
 * journey.ts — benda penghubung antar-chapter dan tujuh walk strip
 * Sumber: PB 5.3 (benda penghubung), DV 9.2 (walk strip)
 */

export interface ChapterTransition {
  from: string; // id chapter asal
  to: string; // id chapter tujuan
  item: string; // nama benda penghubung
  itemDescription: string; // deskripsi lengkap dari bible
  tornEdgeSeed?: 101 | 202 | 303 | 404 | 505 | 606;
  mechanic: string; // animasi / mekanik transisi
  bibleLine: string;
}

export const CHAPTER_TRANSITIONS: ChapterTransition[] = [
  {
    from: 'ch0',
    to: 'ch1',
    item: 'Kalung ID (lanyard)',
    itemDescription: 'Kalung ID yang dipakai doll berpindah bersama doll ke Chapter 1',
    tornEdgeSeed: 101,
    mechanic:
      'Doll menarik kertas sobek 101, melangkah, jejak sepatu hitam distempel tiap 400 ms jarak 90 px',
    bibleLine: '591',
  },
  {
    from: 'ch1',
    to: 'ch2',
    item: 'Lembar dokumen Independen Media',
    itemDescription: 'Lembar dokumen Independen Media membesar menjadi halaman koran (newsprint)',
    mechanic: 'Lembar membesar menjadi halaman koran (newsprint)',
    bibleLine: '592',
  },
  {
    from: 'ch2',
    to: 'ch3.0',
    item: 'Disc terakhir memantulkan pertanyaan',
    itemDescription:
      'Disc ke-11 memantulkan pertanyaan "Why does one post go viral while another fades?"',
    tornEdgeSeed: 202,
    mechanic: 'Robekan 202, lalu walk strip dengan kios mini',
    bibleLine: '593',
  },
  {
    from: 'ch3a',
    to: 'ch3b',
    item: 'Cangkir take-away pink berubah jadi botol serum',
    itemDescription:
      'Cangkir take-away pink, selongsong berubah menjadi botol serum klinik kecantikan',
    mechanic: 'Wipe tirai ke kanan',
    bibleLine: '594',
  },
  {
    from: 'ch3b',
    to: 'ch3c',
    item: 'Stempel IMPORTANT menjadi cap paspor',
    itemDescription:
      'Stempel IMPORTANT dari resep klinik berubah menjadi cap paspor perjalanan umroh',
    mechanic: 'Wipe tirai ke kanan',
    bibleLine: '595',
  },
  {
    from: 'ch3c',
    to: 'ch4',
    item: 'Koper berisi hanger kosong',
    itemDescription:
      'Koper doll terbuka di depan butik, isinya hanger kosong — menyambut ke Chapter Fashion',
    tornEdgeSeed: 303,
    mechanic: 'Robekan 303, doll menarik koper menyusuri jalan',
    bibleLine: '596',
  },
  {
    from: 'ch4',
    to: 'ch5',
    item: 'Label harga butik di kantong jaket kampus',
    itemDescription:
      'Label harga butik terselip di kantong jaket kampus, doll menoleh ke belakang',
    tornEdgeSeed: 404,
    mechanic: 'Robekan 404 + rewind visual singkat',
    bibleLine: '597',
  },
  {
    from: 'ch5',
    to: 'ch6',
    item: 'Headphone dari ujung rak',
    itemDescription: 'Headphone diambil dari ujung rak perpustakaan kampus',
    tornEdgeSeed: 505,
    mechanic: 'Robekan 505, doll memasang headphone sambil berjalan',
    bibleLine: '598',
  },
  {
    from: 'ch6',
    to: 'ch7',
    item: 'Kotak arsip',
    itemDescription: 'Kotak arsip berisi rekaman, naskah, dan karya dibawa ke vault',
    mechanic: 'Tirai menutup ke tengah',
    bibleLine: '599',
  },
  {
    from: 'ch7',
    to: 'ch8',
    item: 'Kartu arsip kosong',
    itemDescription: 'Kartu arsip kosong bertuliskan "Your project goes here."',
    tornEdgeSeed: 606,
    mechanic: 'Robekan 606, jalan melengkung pulang ke loker awal',
    bibleLine: '600',
  },
];

// ──────────────────────────────────────────────
// WALK STRIPS (DV 9.2) — Tujuh strip transisi
// ──────────────────────────────────────────────

export interface WalkStrip {
  id: string;
  fromChapter: string;
  toChapter: string;
  farLayer: string; // Elemen latar jauh (Zona T5)
  pathLayer: string; // Elemen jalur (Zona T3)
  floorColor: string;
  wallColor: string;
  stitchAngle: number; // derajat, selalu ada garis jahitan 0-45°
  ambientItems: string[];
  description: string;
  bibleLine: string;
}

export const WALK_STRIPS: WalkStrip[] = [
  {
    id: 'strip-0-1',
    fromChapter: 'ch0',
    toChapter: 'ch1',
    farLayer: 'Koridor sekolah dengan lampu strip neon kertas, loker memudar',
    pathLayer: 'Ubin putih dengan garis semen tipis, garis jahitan 0-45',
    floorColor: '#FFFDF9',
    wallColor: '#FFFFFF',
    stitchAngle: 45,
    ambientItems: ['Debu kertas melayang', 'Jejak sepatu hitam 90px jarak'],
    description: 'Doll melangkah dari koridor loker menuju meja editor putih bersih Ch1',
    bibleLine: '4156',
  },
  {
    id: 'strip-1-2',
    fromChapter: 'ch1',
    toChapter: 'ch2',
    farLayer: 'Gedung redaksi bata merah jauh, pohon kaki paper, langit kertas abu',
    pathLayer: 'Trotoar newsprint dengan heading koran terpotong, garis jahitan',
    floorColor: '#F5F5F0',
    wallColor: '#C43A3A',
    stitchAngle: 0,
    ambientItems: ['Potongan koran melayang', 'Kertas berita terbang pelan'],
    description: 'Doll berjalan dari meja editor putih menuju ruang redaksi berita Ch2',
    bibleLine: '4156',
  },
  {
    id: 'strip-2-3',
    fromChapter: 'ch2',
    toChapter: 'ch3.0',
    farLayer: 'Kios mini kertas, papan nama café & klinik samar, lentera jalanan',
    pathLayer: 'Jalur kertas lilac dengan strip coklat lama, garis jahitan 45',
    floorColor: '#D4C1F5',
    wallColor: '#D4C1F5',
    stitchAngle: 45,
    ambientItems: ['Disc vinyl menggelinding', 'Pertanyaan "Why?" mengambang di udara'],
    description: 'Doll berjalan dari newsroom menuju lobi tiga pintu dunia Creator Trilogy Ch3.0',
    bibleLine: '4156',
  },
  {
    id: 'strip-3c-4',
    fromChapter: 'ch3c',
    toChapter: 'ch4',
    farLayer: 'Gerbang butik dari jauh, papan marquee Lassiewear berkilau, pohon sakura jauh',
    pathLayer: 'Jalur bata rose wine, batu kali kertas, garis jahitan diagonal',
    floorColor: '#FFD6E8',
    wallColor: '#881838',
    stitchAngle: 30,
    ambientItems: ['Koper beroda bergulir', 'Hanger kosong melayang'],
    description: 'Doll menarik koper dari terminal menuju butik fashion Lassiewear Ch4',
    bibleLine: '4156',
  },
  {
    id: 'strip-4-5',
    fromChapter: 'ch4',
    toChapter: 'ch5',
    farLayer: 'Kampus PNJ dari jauh, menara jam kertas, pohon rindang sepia',
    pathLayer: 'Jalan bata sepia dengan leaf texture, garis jahitan lurus',
    floorColor: '#F3E3B8',
    wallColor: '#3F6E8D',
    stitchAngle: 0,
    ambientItems: ['Label harga melayang dari kantong', 'Daun berguguran sepia'],
    description: 'Doll berjalan dari butik menuju perpustakaan kampus Ch5 dengan filter sepia',
    bibleLine: '4156',
  },
  {
    id: 'strip-5-6',
    fromChapter: 'ch5',
    toChapter: 'ch6',
    farLayer: 'Studio siaran jauh dengan kaca ON AIR, antena menara kertas',
    pathLayer: 'Koridor linoleum kertas gelap, garis lampu neon, garis jahitan',
    floorColor: '#2B2B3A',
    wallColor: '#6B4C9A',
    stitchAngle: 45,
    ambientItems: ['Gelombang audio melingkar', 'Headphone terpasang ke doll'],
    description: 'Doll memakai headphone berjalan dari kampus menuju studio Ch6',
    bibleLine: '4156',
  },
  {
    id: 'strip-7-8',
    fromChapter: 'ch7',
    toChapter: 'ch8',
    farLayer: 'Koridor sekolah awal dengan loker masa lalu, biru remang',
    pathLayer: 'Jalan melengkung pulang, bata blush #FFD6E8, garis jahitan 0-45',
    floorColor: '#FFD6E8',
    wallColor: '#2B2B2B',
    stitchAngle: 45,
    ambientItems: ['Jejak sepatu lama dari Chapter 0 masih terlihat', 'Kartu arsip kosong melayang'],
    description: 'Jalan melengkung pulang: doll kembali ke loker yang sama dari Chapter 0',
    bibleLine: '4156',
  },
];
