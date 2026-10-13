/**
 * Katalog Kostum Doll (K1 sampai K17) — Jassinta (PB 5.10, DV 7)
 * Memuat metadata bentuk, proporsi hem, volume, hijab, hex warna busana, dan aksesori.
 */

import type { CostumeVolume } from './proportions';

export interface CostumeDef {
  id: string; // K1, K2, ... K17
  index: number;
  name: string;
  frame: string;
  chapter: string;
  shape: string;
  hemPercent: number; // % H
  volume: CostumeVolume;
  colors: {
    top?: string;
    bottom?: string;
    outer?: string;
    inner?: string;
    vest?: string;
    trousers?: string;
    skirt?: string;
    apron?: string;
    coat?: string;
    dress?: string;
    tunic?: string;
    jacket?: string;
    blouse?: string;
    [key: string]: string | undefined;
  };
  hijabStyle: 'pashmina-roll' | 'neat-triangle' | 'pashmina-scarf' | 'hijab-accessory';
  hijabColor: string;
  accessories: string;
  specialEffect?: string;
  assetPrefix: string;
}

export const COSTUMES: CostumeDef[] = [
  {
    id: 'K1',
    index: 1,
    name: 'Seragam santai',
    frame: 'Ch.0 dan Ch.8',
    chapter: '0, 8',
    shape: 'Kemeja lengan panjang, rompi rajut hem 56%, rok plisket A-line hem 80%',
    hemPercent: 80,
    volume: 'lebar',
    colors: {
      inner: '#FFFDF9',
      vest: '#A8E6CF',
      skirt: '#BFE3F5',
    },
    hijabStyle: 'pashmina-roll',
    hijabColor: '#F3E3B8',
    accessories: 'Kalung ID dengan tali #FF8DC7',
    assetPrefix: 'doll_01_seragam',
  },
  {
    id: 'K2',
    index: 2,
    name: 'Blazer pink',
    frame: 'Ch.1',
    chapter: '1',
    shape: 'Blazer satu kancing hem 51%, celana lurus hem 92%',
    hemPercent: 92,
    volume: 'ramping',
    colors: {
      outer: '#F7CAD0',
      inner: '#FFFFFF',
      trousers: '#F8F0DC',
      button: '#D4A64A',
    },
    hijabStyle: 'pashmina-roll',
    hijabColor: '#F8F0DC',
    accessories: 'Kalung ID dengan kartu putih',
    assetPrefix: 'doll_02_blazer',
  },
  {
    id: 'K3',
    index: 3,
    name: 'Rompi reporter',
    frame: 'Ch.2',
    chapter: '2',
    shape: 'Rompi reporter hem 56% dengan dua saku, kemeja lengan panjang, celana lurus hem 92%',
    hemPercent: 92,
    volume: 'ramping',
    colors: {
      vest: '#F3E3B8',
      inner: '#FFFDF9',
      trousers: '#A57C5B',
      button: '#7A4A32',
    },
    hijabStyle: 'pashmina-roll',
    hijabColor: '#BFE3F5',
    accessories: 'Notes kecil #FFF1A8 di saku, pena hitam',
    assetPrefix: 'doll_03_reporter',
  },
  {
    id: 'K4',
    index: 4,
    name: 'Kardigan lobi',
    frame: 'Lobi 3.0',
    chapter: '3.0',
    shape: 'Kardigan panjang hem 62%, kaus dalam, celana wide-leg hem 92%',
    hemPercent: 92,
    volume: 'regular',
    colors: {
      outer: '#FFD6E8',
      inner: '#FFFDF9',
      trousers: '#FFF8EE',
    },
    hijabStyle: 'pashmina-roll',
    hijabColor: '#A98BDA', // Wisteria #A98BDA agar kontras terhadap dinding lilac
    accessories: 'Ponsel casing pink #FF8DC7 dengan layar putih dan hati #FF2E93',
    assetPrefix: 'doll_04_lobi',
  },
  {
    id: 'K5',
    index: 5,
    name: 'Barista',
    frame: '3A Café',
    chapter: '3A',
    shape: 'Apron bib hem 70% di atas kardigan hem 58%, celana lurus hem 92%',
    hemPercent: 92,
    volume: 'regular',
    colors: {
      apron: '#F8F8C8',
      trim: '#066838',
      outer: '#FFF8EE',
      trousers: '#5A3A2E',
    },
    hijabStyle: 'pashmina-roll',
    hijabColor: '#F3E3B8',
    accessories: 'Notes pesanan #FFF1A8 di saku apron, lencana cangkir kopi, cangkir keramik',
    assetPrefix: 'doll_05_cafe',
  },
  {
    id: 'K6',
    index: 6,
    name: 'Jas klinik',
    frame: '3B Clinic',
    chapter: '3B',
    shape: 'Jas klinik panjang hem 70%, kerah lebar, celana lurus hem 92%',
    hemPercent: 92,
    volume: 'regular',
    colors: {
      coat: '#FFB3D9',
      collar: '#FFFFFF',
      inner: '#FFFFFF',
      trousers: '#FFFDF9',
    },
    hijabStyle: 'neat-triangle',
    hijabColor: '#FFD6E8',
    accessories: 'Name tag #FFFFFF tepi #D4A64A, pita kecil #FF8DC7, botol serum putih dropper emas',
    assetPrefix: 'doll_06_klinik',
  },
  {
    id: 'K7',
    index: 7,
    name: 'Traveling',
    frame: '3C Terminal',
    chapter: '3C',
    shape: 'Outer panjang hem 80% berlapis, celana wide-leg hem 92%',
    hemPercent: 92,
    volume: 'lebar',
    colors: {
      outer: '#F8F0DC',
      inner: '#FFFDF9',
      trousers: '#D9D3D6',
      scarf: '#B8C4F2',
    },
    hijabStyle: 'pashmina-scarf',
    hijabColor: '#A7D8F5',
    accessories: 'Paspor hijau tua #04502A dengan emblem emas #D4A64A',
    assetPrefix: 'doll_07_traveling',
  },
  {
    id: 'K8',
    index: 8,
    name: 'Butik dasar',
    frame: '4 dasar',
    chapter: '4',
    shape: 'Blouse longgar hem 54%, rok panjang A-line hem 88%',
    hemPercent: 88,
    volume: 'lebar',
    colors: {
      blouse: '#FFF8EE',
      skirt: '#EBD08C',
    },
    hijabStyle: 'pashmina-roll',
    hijabColor: '#E8A5B8',
    accessories: 'Koper gading #F8F0DC trim champagne #EBD08C',
    assetPrefix: 'doll_08_butik',
  },
  {
    id: 'K9',
    index: 9,
    name: 'Hard Selling',
    frame: '4.7 Hard Selling',
    chapter: '4.7',
    shape: 'Gaun vintage lengan panjang, pinggang 48%, rok melebar hem 85%',
    hemPercent: 85,
    volume: 'lebar',
    colors: {
      dress: '#E8A5B8',
      collar: '#FFF8EE',
      belt: '#EBD08C',
    },
    hijabStyle: 'hijab-accessory',
    hijabColor: '#EBD08C',
    accessories: 'Topi pillbox #FFF8EE pita #881838, tas kotak emas #D4A64A',
    assetPrefix: 'doll_09_hardselling',
  },
  {
    id: 'K10',
    index: 10,
    name: 'Entertainment',
    frame: '4.7 Entertainment',
    chapter: '4.7',
    shape: 'Dibelah vertikal: kiri blazer kantor hem 51%, kanan jaket kampus hem 52%, celana cokelat hem 92%',
    hemPercent: 92,
    volume: 'ramping',
    colors: {
      blazerLeft: '#B9B8CC',
      jacketRight: '#FFB38A',
      stripeRight: '#FFFFFF',
      trousers: '#5A3A2E',
      stitch: '#FFFFFF',
    },
    hijabStyle: 'pashmina-roll',
    hijabColor: '#F4EFF1',
    accessories: 'Jahitan zigzag kontras di tengah',
    assetPrefix: 'doll_10_entertainment',
  },
  {
    id: 'K11',
    index: 11,
    name: 'Education',
    frame: '4.7 Education',
    chapter: '4.7',
    shape: 'Blouse sederhana hem 54%, rok A-line hem 82%',
    hemPercent: 82,
    volume: 'regular',
    colors: {
      blouse: '#FFFDF9',
      skirt: '#8FB8E8',
    },
    hijabStyle: 'pashmina-roll',
    hijabColor: '#F4EFF1',
    accessories: 'Ponsel pink #FF8DC7 dengan gelembung DM',
    assetPrefix: 'doll_11_education',
  },
  {
    id: 'K12',
    index: 12,
    name: 'Fun',
    frame: '4.7 Fun',
    chapter: '4.7',
    shape: 'Tunik hem 58%, celana lurus lebar hem 92%',
    hemPercent: 92,
    volume: 'regular',
    colors: {
      tunic: '#FF8DC7',
      trousers: '#A8E6CF',
      stars: '#FFF1A8',
    },
    hijabStyle: 'hijab-accessory',
    hijabColor: '#FFF1A8',
    accessories: 'Kacamata hitam #1B1017 lensa pink #FF2E93, sneakers sol putih',
    assetPrefix: 'doll_12_fun',
  },
  {
    id: 'K13',
    index: 13,
    name: 'Jaket kampus',
    frame: 'Ch.5',
    chapter: '5',
    shape: 'Jaket kampus bomber hem 52%, kemeja, jeans lurus hem 90%',
    hemPercent: 90,
    volume: 'ramping',
    colors: {
      jacket: '#B9B8CC',
      inner: '#FFFDF9',
      jeans: '#8FB8E8',
      patch: '#FFB38A',
    },
    hijabStyle: 'pashmina-roll',
    hijabColor: '#D9D3D6',
    accessories: 'Ransel peach #FFB38A selebar 22% H dengan tali cokelat #5A3A2E, sneakers sol putih',
    assetPrefix: 'doll_13_kampus',
  },
  {
    id: 'K14',
    index: 14,
    name: 'Siaran',
    frame: 'Ch.6',
    chapter: '6',
    shape: 'Blouse satin longgar hem 56%, celana wide-leg hem 92%',
    hemPercent: 92,
    volume: 'regular',
    colors: {
      blouse: '#DA9AF2',
      highlight: '#F4DDFB',
      trousers: '#F3E3B8',
    },
    hijabStyle: 'hijab-accessory',
    hijabColor: '#C58AC9',
    accessories: 'Headphone hitam #1B1017 bantalan pink #FF2E93 di atas hijab',
    assetPrefix: 'doll_14_siaran',
  },
  {
    id: 'K15',
    index: 15,
    name: 'Arsip',
    frame: 'Ch.7',
    chapter: '7',
    shape: 'Kardigan panjang hem 64%, celana lurus hem 92%',
    hemPercent: 92,
    volume: 'ramping',
    colors: {
      cardigan: '#D9A441', // Mustard #D9A441 agar tidak sewarna lantai honey Ch.7
      inner: '#FFFDF9',
      trousers: '#5A3A2E',
    },
    hijabStyle: 'pashmina-roll',
    hijabColor: '#F3E3B8',
    accessories: 'Kotak arsip abu-abu #D9D3D6 dengan label kuning #FFF1A8',
    assetPrefix: 'doll_15_arsip',
  },
  {
    id: 'K16',
    index: 16,
    name: 'Kampus Sepia',
    frame: 'Strip 4 ke 5',
    chapter: '5 kilas balik',
    shape: 'Varian utilitas dari K13 berjalan ke kiri (W flip horizontal)',
    hemPercent: 90,
    volume: 'ramping',
    colors: {
      filter: 'sepia(0.9) saturate(0.7) brightness(0.97) contrast(0.95)',
    },
    hijabStyle: 'pashmina-roll',
    hijabColor: '#D9D3D6',
    accessories: 'Ransel peach #FFB38A dengan filter sepia',
    specialEffect: 'sepia(0.9) saturate(0.7) brightness(0.97) contrast(0.95)',
    assetPrefix: 'doll_16_kampus-sepia',
  },
  {
    id: 'K17',
    index: 17,
    name: 'Ikon kepala',
    frame: 'Favicon, OG, peta',
    chapter: 'global',
    shape: 'Kepala dan hijab saja, bentuk bulat sederhana, die-cut 1 px',
    hemPercent: 18,
    volume: 'ramping',
    colors: {
      hijab: '#1F1F1F',
      skin: '#FCCFB2',
      blush: '#F6B79D',
    },
    hijabStyle: 'pashmina-roll',
    hijabColor: '#1F1F1F',
    accessories: 'Ikon dalam 3 ukuran: 32 px, 180 px, 512 px',
    assetPrefix: 'doll_17_ikon-kepala',
  },
];
