/**
 * Gelembung Ucapan Doll (SpeechBubble) — Jassinta (PB 5.10, DF 7.4 & DF 7.5)
 * Aturan gelembung ucapan (7.5):
 * - Maksimal 1 gelembung per frame dan 9 kata
 * - Huruf Shantell Sans, minimal 17 px di HP
 * - Di dalam gelembung kertas bertab dengan washi tape kecil (#FFB3D9 70%) di kiri atas
 * - Muncul sekali saat pertama tiba, hilang saat scroll atau tap, tidak mengulang
 * - role="note"
 */

export interface SpeechBubbleItem {
  frameId: string;
  trigger: string;
  text: string;
  source: 'narration' | 'reaction' | 'easter-egg';
}

export const SPEECH_BUBBLES: Record<string, SpeechBubbleItem> = {
  // 18 gelembung narasi frame utama (DF 7.5)
  '0.7': {
    frameId: '0.7',
    trigger: 'Tiba di pintu loker Paper School',
    text: 'Okay, here we go.',
    source: 'narration',
  },
  '1.1': {
    frameId: '1.1',
    trigger: 'Menunjuk foto profil non-paper',
    text: "That's me. The non-paper version.",
    source: 'narration',
  },
  '1.2': {
    frameId: '1.2',
    trigger: 'Tiba di grid sepuluh peran karya',
    text: 'Ten places. Hover to see my role.',
    source: 'narration',
  },
  '2.1': {
    frameId: '2.1',
    trigger: 'Tiba di Newsroom',
    text: 'Headlines first. Stories second.',
    source: 'narration',
  },
  '2.5': {
    frameId: '2.5',
    trigger: 'Tiba di rak vinyl disc',
    text: 'Spin a disc. Read the story.',
    source: 'narration',
  },
  '3.0.4': {
    frameId: '3.0.4',
    trigger: 'Tiba di Lobi Kreator',
    text: 'Pick a door. Any door.',
    source: 'narration',
  },
  '3A.1': {
    frameId: '3A.1',
    trigger: 'Tiba di Elspresso Café',
    text: 'Day one. Small numbers, big lessons.',
    source: 'narration',
  },
  '3B.2': {
    frameId: '3B.2',
    trigger: 'Tiba di The Glow Clinic',
    text: 'I tested a lot here. Not everything worked.',
    source: 'narration',
  },
  '3C.2': {
    frameId: '3C.2',
    trigger: 'Tiba di The Terminal',
    text: 'Same me. New lesson.',
    source: 'narration',
  },
  '4.1': {
    frameId: '4.1',
    trigger: 'Tiba di Lassiewear Boutique',
    text: 'Time to dress for the content.',
    source: 'narration',
  },
  '4.7_hardselling': {
    frameId: '4.7 Hard Selling',
    trigger: 'Tiba di outfit Vintage Dress',
    text: 'Hard sell, but make it vintage.',
    source: 'narration',
  },
  '4.7_entertainment': {
    frameId: '4.7 Entertainment',
    trigger: 'Tiba di outfit Split Half-Blazer',
    text: 'Office or campus? Both.',
    source: 'narration',
  },
  '4.7_education': {
    frameId: '4.7 Education',
    trigger: 'Tiba di outfit Peter Pan Blouse',
    text: 'Teaching, one DM at a time.',
    source: 'narration',
  },
  '4.7_fun': {
    frameId: '4.7 Fun',
    trigger: 'Tiba di outfit Pink Tunic',
    text: "Okay, let's have fun.",
    source: 'narration',
  },
  '5.1': {
    frameId: '5.1',
    trigger: 'Tiba di The Campus Library',
    text: 'Rewind. Where did it begin?',
    source: 'narration',
  },
  '6.1': {
    frameId: '6.1',
    trigger: 'Tiba di The Radio Booth',
    text: "Shh. We're on air.",
    source: 'narration',
  },
  '7.1': {
    frameId: '7.1',
    trigger: 'Tiba di The Archive Room',
    text: 'Nothing hidden, remember?',
    source: 'narration',
  },
  '8.1': {
    frameId: '8.1',
    trigger: 'Tiba di The Mailbox (Contact)',
    text: 'One more thing: your story goes here.',
    source: 'narration',
  },

  // Gelembung reaksi spontan & klik tap (DF 7.4)
  tap_1: {
    frameId: 'tap_1',
    trigger: 'Klik atau tap doll',
    text: 'Hi!',
    source: 'reaction',
  },
  tap_2: {
    frameId: 'tap_2',
    trigger: 'Klik atau tap doll',
    text: 'Still here.',
    source: 'reaction',
  },
  tap_3: {
    frameId: 'tap_3',
    trigger: 'Klik atau tap doll',
    text: 'Keep scrolling →',
    source: 'reaction',
  },
  dizzy: {
    frameId: 'dizzy',
    trigger: 'Klik doll 5 kali (Easter Egg E1)',
    text: 'Dizzy!',
    source: 'easter-egg',
  },

  // Easter egg lainnya (PB 8.2)
  egg_e4: {
    frameId: 'egg_e4',
    trigger: 'Klik tas Go-Food 3A',
    text: '1 like. Still counts.',
    source: 'easter-egg',
  },
  egg_e5: {
    frameId: 'egg_e5',
    trigger: 'Klik pesawat kertas 3C',
    text: 'Next stop: your campaign.',
    source: 'easter-egg',
  },
  egg_e6: {
    frameId: 'egg_e6',
    trigger: 'Klik kucing perpustakaan 5',
    text: 'Shh, library.',
    source: 'easter-egg',
  },
};
