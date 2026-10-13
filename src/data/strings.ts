/**
 * Seluruh teks resmi (English copy) dari Portfolio Bible.
 * Aturan bible: Tidak ada teks di dalam komponen UI, semua dari data terpusat.
 */

export const STRINGS = {
  // Global & Meta (PB 24.2)
  meta: {
    siteTitle: 'Jassinta Roid Triniti · Digital Content Executive · Creative Portfolio',
    siteDescription:
      'The journey of Jassinta Roid Triniti across Paper Town: a textured paper cut-out world featuring 10 companies, 34 works, writing portfolios, video campaigns, and creative strategy.',
    plainTitle: 'Jassinta Roid Triniti · Digital Content Executive (Plain Text Portfolio)',
    plainDescription:
      'Accessible, clean plain-text portfolio of Jassinta Roid Triniti: Digital Content Executive, SEO Content Writer, Video Creator, and Social Media Specialist.',
  },

  // Preloader & Loading (DF 10.5, 23.5)
  preloader: {
    loadingText: 'Unfolding Paper Town...',
    longLoadingText: 'Taking longer than usual...',
    skipButton: 'Skip to the quick look',
    openPrompt: 'PULL TO OPEN',
  },

  // Footer (DF 10.6)
  footer: {
    year: '2026',
    authorName: 'Jassinta Roid Triniti',
    title: 'Creative Portfolio',
    tableOfContents: 'Contents',
    allRightsReserved: 'Handcrafted in Paper Town with pure code.',
  },

  // Quick Look Card (PB 23.1)
  quickLook: {
    title: 'Jassinta Roid Triniti',
    role: 'Digital Content Executive: Social Media Specialist, Content Planner, Videographer, and Graphic Designer',
    highlights: [
      'Up to 7 news articles a day',
      '30K+ views on a single Lassiewear video',
      'Best Kartini Radio Producer, 2025',
    ],
    buttons: {
      email: 'Email',
      instagram: 'Instagram',
      whatsapp: 'WhatsApp',
      downloadCv: 'Download CV (PDF)',
      viewPlain: 'View as plain page',
    },
    quickLinksTitle: 'Chapters',
  },

  // Doll Speech Bubbles (DF 7.5 & 24.1)
  dollBubbles: {
    f0_7: 'Okay, here we go.',
    f1_1: 'That’s me. The non-paper version.',
    f1_2: 'Ten places. Hover to see my role.',
    f2_1: 'Headlines first. Stories second.',
    f2_5: 'Spin a disc. Read the story.',
    f3_0_4: 'Pick a door. Any door.',
    f3A_1: 'Day one. Small numbers, big lessons.',
    f3B_2: 'I tested a lot here. Not everything worked.',
    f3C_2: 'Same me. New lesson.',
    f4_1: 'Time to dress for the content.',
    f4_7_hardSelling: 'Hard sell, but make it vintage.',
    f4_7_entertainment: 'Office or campus? Both.',
    f4_7_education: 'Teaching, one DM at a time.',
    f4_7_fun: 'Okay, let’s have fun.',
    f5_1: 'Rewind. Where did it begin?',
    f6_1: 'Shh. We’re on air.',
    f7_1: 'Nothing hidden, remember?',
    f8_1: 'One more thing: your story goes here.',
    // Deep link bubble (PB 24.1)
    deepLinkSkipped: 'Skipped ahead for you. Scroll up to see the beginning.',
  },

  // Kondisi Gagal & Kosong (DF 23.5)
  errorStates: {
    imageFailed: {
      message: 'Image didn’t load.',
      buttonText: 'Try again',
    },
    videoFailed: {
      message: 'Video unavailable here.',
      watchInstagram: 'Watch on Instagram ↗',
      watchTiktok: 'Watch on TikTok ↗',
    },
    spotifyFailed: {
      buttonText: 'Open in Spotify',
    },
    noJs: {
      message: 'Turn on JavaScript for the full journey.',
    },
    offline: {
      toast: 'You seem to be offline.',
    },
    notFound404: {
      heading: 'This page wandered off.',
      backButton: 'Back to the journey',
    },
    copyFailed: {
      toast: 'Couldn’t copy. Select and copy manually.',
    },
    noCss3d: {
      banner: 'Showing the simple version.',
    },
  },

  // Chapter 0: Locker Room (PB ch0)
  ch0: {
    title: 'THE LOCKER ROOM',
    subtitle: 'High School Corridors · Where It All Began',
    lockerNumbers: ['01', '02', '03', '04', '05'],
    lockerTabs: {
      l1: 'BIO & FOUNDATION',
      l2: 'SOUVENIRS & TROPHIES',
      l3: 'INTRO VIDEO',
      l4: 'CAREER SUMMARY',
      l5: 'TECH STACK',
    },
  },

  // Chapter 1: The First Step (PB ch1)
  ch1: {
    headline: 'Jassinta Roid Triniti',
    roleTag: 'Digital Content Executive',
    numbersAsOf: 'Numbers as of October 2026.',
    bioParagraph:
      'A multidisciplinary content creator with an education in Publishing (Politeknik Negeri Jakarta, 2021–2024). Skilled in SEO writing, short-form video production, social media strategy, and graphic design across beauty, fashion, F&B, travel, and campus media.',
    education: {
      institution: 'Politeknik Negeri Jakarta (PNJ)',
      major: 'Publishing (Penerbitan)',
      period: '2021 – 2024',
    },
    skillsTitle: 'Core Capabilities',
    skills: [
      'Social Media Strategy & Planning',
      'Short-Form Video Production & Editing',
      'SEO Content Writing & Journalism',
      'Graphic Design & Creative Direction',
      'Community & Engagement Management',
    ],
  },

  // Chapter 2: The Newsroom (PB ch2)
  ch2: {
    headline: 'Headlines, Bylines, and Deadline Stories',
    subheadline: 'Writing for news portals, campus magazines, and SEO media hubs.',
    turntablePrompt: 'Select a record to load the headline',
    articlesReadPrompt: 'articles published across 3 editorial platforms',
  },

  // Chapter 3: The Creator Trilogy (PB ch3)
  ch3: {
    trilogyHeadline: 'From Ordinary Content to Memorable Stories',
    trilogyQuote:
      'I used to wonder: Why does one post go viral while another fades unnoticed? That curiosity led me deeper into understanding algorithms, content psychology, and audience behavior. It was there that I realized that creating content is not just about publishing it, it is about understanding people.',
    honestyTag: 'Every number here is real, including the small ones. The small ones taught me the most.',
    doors: {
      cafe: {
        label: 'Café',
        brand: 'Elspresso',
        role: 'Video Content Creator',
      },
      clinic: {
        label: 'Clinic',
        brand: 'Elsthetic & Aishi Beauty',
        role: 'Digital Marketing & Content Production',
      },
      terminal: {
        label: 'Terminal',
        brand: 'Karamina Tour',
        role: 'Video Storyteller & Umroh Campaign',
      },
    },
  },

  // Chapter 4: The Fashion Studio (PB ch4)
  ch4: {
    headline: 'Lassiewear Boutique',
    role: 'Social Media Specialist',
    pillarsTitle: 'The 4 Content Pillars',
    pillars: {
      hardSelling: 'Hard Selling',
      entertainment: 'Entertainment',
      education: 'Education',
      fun: 'Fun',
    },
  },

  // Chapter 5: The Campaign Table (PB ch5)
  ch5: {
    headline: 'Blueprint for Campus PR & Large Scale Campaigns',
    subheadline: 'Crafting strategy documents, editorial calendars, and community engagement.',
  },

  // Chapter 6: The Studio Stage (PB ch6)
  ch6: {
    headline: 'On the Air & In Print',
    subheadline: 'Radio host, podcast creator, and editor of Inspira+ Magazine.',
  },

  // Chapter 7: The Archive Vault (PB ch7)
  ch7: {
    headline: 'The Full Vault',
    subheadline: 'All 34 verified works across writing, video, and design.',
    filterAll: 'All Works (34)',
    filterWriting: 'Writing (11)',
    filterVideo: 'Video (13)',
    filterFeed: 'Feed & Design (10)',
    seeInContext: 'See it in context',
  },

  // Chapter 8: Back to the Locker (PB ch8)
  ch8: {
    headline: 'Full Circle',
    subheadline: 'Your story goes here next.',
    contactPrompt: 'Let’s create memorable stories together.',
    email: 'jassintaroidt@gmail.com',
    linkedin: 'linkedin.com/in/jassinta-roid-triniti',
    instagram: '@jassintaroidt',
    whatsapp: '+62 8xx-xxxx-xxxx',
  },
} as const;
