export type ActId = 'act-1' | 'act-2' | 'act-3';

export interface Act {
  id: ActId;
  roman: string;
  name: string;
  subtitle: string;
  cardColor: string;
}

export const ACTS: Record<ActId, Act> = {
  'act-1': {
    id: 'act-1',
    roman: 'ACT I',
    name: 'FOUNDATION',
    subtitle: 'Where curiosity meets ink.',
    cardColor: '#FFD6E8',
  },
  'act-2': {
    id: 'act-2',
    roman: 'ACT II',
    name: 'SHARED',
    subtitle: 'What I made, and what actually happened.',
    cardColor: '#BFE3F5',
  },
  'act-3': {
    id: 'act-3',
    roman: 'ACT III',
    name: 'REFLECTION',
    subtitle: 'Full circle back to the first locker.',
    cardColor: '#D4C1F5',
  },
};

export interface ChapterDef {
  id: string; // 'ch0', 'ch1', 'ch2', 'ch3.0', 'ch3a', 'ch3b', 'ch3c', 'ch4', 'ch5', 'ch6', 'ch7', 'ch8'
  number: string; // '00', '01', '02', '03.0', '03A', etc.
  title: string;
  roleTag: string;
  signboardText: string;
  actId: ActId;
  wallColor: string;
  tornEdgeSeed?: 101 | 202 | 303 | 404 | 505 | 606;
  costumeId: string;
  costumeName: string;
  beats: string[];
}

export const CHAPTERS: ChapterDef[] = [
  {
    id: 'ch0',
    number: '00',
    title: 'The Locker Room',
    roleTag: 'Origin',
    signboardText: 'LOCKER ROOM · WHERE IT ALL BEGAN',
    actId: 'act-1',
    wallColor: '#2B2B2B',
    costumeId: 'K0',
    costumeName: 'Paper Doll Casual with Brad Joint',
    beats: ['0.1 Preloader', '0.2 Closed Lockers', '0.3 Open Lockers 1-5', '0.4 Souvenirs Reveal'],
  },
  {
    id: 'ch1',
    number: '01',
    title: 'The First Step',
    roleTag: 'Digital Content Executive',
    signboardText: 'CHAPTER 01 · THE FIRST STEP',
    actId: 'act-1',
    wallColor: '#FFFFFF', // Pure cleanroom white rule 3
    tornEdgeSeed: 101,
    costumeId: 'K1',
    costumeName: 'Monochrome Cleanroom Professional',
    beats: ['1.1 Clean White Canvas', '1.2 10 Company Logos', '1.3 Bio & Career Summary', '1.4 Skills & Education Sheet'],
  },
  {
    id: 'ch2',
    number: '02',
    title: 'The Newsroom',
    roleTag: 'SEO Content Writer & Journalist',
    signboardText: 'CHAPTER 02 · THE NEWSROOM',
    actId: 'act-1',
    wallColor: '#C43A3A',
    tornEdgeSeed: 202,
    costumeId: 'K2',
    costumeName: 'Newsboy Cap & Trench Paper Coat',
    beats: ['2.1 Vinyl Turntable Desk', '2.2 11 Disc Records', '2.3 Live Headline Article Preview', '2.4 Walk Transition'],
  },
  {
    id: 'ch3.0',
    number: '03.0',
    title: 'The Creator Lobby',
    roleTag: 'Content Marketing Specialist',
    signboardText: 'CHAPTER 03 · THE CREATOR TRILOGY',
    actId: 'act-2',
    wallColor: '#D4C1F5',
    costumeId: 'K4',
    costumeName: 'Lobby Cardigan with Phone Accessory',
    beats: ['3.0.1 Trilogy Headline', '3.0.2 Six Video Reveal', '3.0.3 Three Doors Selection'],
  },
  {
    id: 'ch3a',
    number: '03A',
    title: 'The Café',
    roleTag: 'Elspresso · Video Creator',
    signboardText: 'CHAPTER 03A · THE CAFÉ (ELSPRESSO)',
    actId: 'act-2',
    wallColor: '#066838',
    costumeId: 'K5',
    costumeName: 'Coffee Barista Apron',
    beats: ['3A.1 Coffee Menu Board', '3A.2 3 Reel Displays', '3A.3 Go-Food Launch Story'],
  },
  {
    id: 'ch3b',
    number: '03B',
    title: 'The Clinic',
    roleTag: 'Elsthetic & Aishi · Digital Marketing',
    signboardText: 'CHAPTER 03B · THE CLINIC (ELSTHETIC)',
    actId: 'act-2',
    wallColor: '#B08418',
    costumeId: 'K6',
    costumeName: 'Clinic Lab Coat & Golden Trim',
    beats: ['3B.1 Glass Reception Gate', '3B.2 Facial Transformation Reels', '3B.3 Promo Campaign Flyers'],
  },
  {
    id: 'ch3c',
    number: '03C',
    title: 'The Terminal',
    roleTag: 'Karamina Tour · Video Creator',
    signboardText: 'CHAPTER 03C · THE TERMINAL (KARAMINA TOUR)',
    actId: 'act-2',
    wallColor: '#066838',
    tornEdgeSeed: 303,
    costumeId: 'K7',
    costumeName: 'Traveler Scarf & Departure Badge',
    beats: ['3C.1 Departure Gate', '3C.2 Umroh Reels & Ka’bah Silhouette', '3C.3 Storytelling Growth Metric'],
  },
  {
    id: 'ch4',
    number: '04',
    title: 'The Fashion Studio',
    roleTag: 'Lassiewear · Social Media Specialist',
    signboardText: 'CHAPTER 04 · THE FASHION STUDIO',
    actId: 'act-2',
    wallColor: '#881838',
    tornEdgeSeed: 404,
    costumeId: 'K8',
    costumeName: 'Boutique Stylist Vintage Outfit',
    beats: ['4.1 Boutique Rack', '4.2 4 Strategy Pillars', '4.3 Special Occasion Flyers', '4.4 30K+ Relatable Views'],
  },
  {
    id: 'ch5',
    number: '05',
    title: 'The Campaign Table',
    roleTag: 'Campaign Strategist',
    signboardText: 'CHAPTER 05 · THE CAMPAIGN TABLE',
    actId: 'act-2',
    wallColor: '#3F6E8D',
    tornEdgeSeed: 505,
    costumeId: 'K9',
    costumeName: 'Strategist Navy Blazer & Planner Pad',
    beats: ['5.1 Table Top Workspace', '5.2 Campus PR Blueprint', '5.3 Execution Timeline Map'],
  },
  {
    id: 'ch6',
    number: '06',
    title: 'The Studio Stage',
    roleTag: 'Reporter & Podcast Host',
    signboardText: 'CHAPTER 06 · THE STUDIO STAGE',
    actId: 'act-2',
    wallColor: '#6B4C9A',
    tornEdgeSeed: 606,
    costumeId: 'K10',
    costumeName: 'Broadcaster Headset & Inspira+ Badge',
    beats: ['6.1 Broadcast Microphone', '6.2 Inspira+ Magazine Display', '6.3 Audio Waveform Visualizer'],
  },
  {
    id: 'ch7',
    number: '07',
    title: 'The Archive Vault',
    roleTag: 'Curator',
    signboardText: 'CHAPTER 07 · THE ARCHIVE VAULT',
    actId: 'act-3',
    wallColor: '#2B3A42',
    costumeId: 'K11',
    costumeName: 'Archivist Long Coat with Stamp Pocket',
    beats: ['7.1 Steel Drawer Vault', '7.2 34 Verified Works Engine', '7.3 Filter Pills & Aspect Ratio Grid'],
  },
  {
    id: 'ch8',
    number: '08',
    title: 'Back to the Locker',
    roleTag: 'Conclusion',
    signboardText: 'CHAPTER 08 · THE RETURN',
    actId: 'act-3',
    wallColor: '#2B2B2B',
    costumeId: 'K0',
    costumeName: 'Original Casual Paper Doll with Brad Pin',
    beats: ['8.1 Arrival Back at Locker 1-5', '8.2 Final Handwritten Note', '8.3 Contact & Social Channels'],
  },
];
