import { useState, useEffect, useCallback } from 'react';

export type OverlayRoute =
  | 'participation'
  | 'achievement'
  | 'my-message'
  | 'magazine-art'
  | 'photography'
  | 'my-strategy'
  | 'notes'
  | 'strategy/hard-selling'
  | 'strategy/entertainment'
  | 'strategy/education'
  | 'strategy/fun';

export type ChapterRoute =
  | 'personal-brand'
  | 'writing-portfolio'
  | 'content-marketing'
  | 'content-marketing/cafe'
  | 'content-marketing/clinic'
  | 'content-marketing/terminal'
  | 'example-strategy'
  | 'project-campus'
  | 'podcast'
  | 'archive'
  | 'contact';

export type AppRoute =
  | ''
  | 'plain'
  | 'dev/style-test'
  | 'dev/doll'
  | 'dev/assets'
  | 'dev/world'
  | 'dev/trilogy'
  | OverlayRoute
  | ChapterRoute;

export interface ParsedRoute {
  raw: string; // misal: "#/magazine-art"
  route: AppRoute;
  isOverlay: boolean;
  isChapter: boolean;
  isPlain: boolean;
  isHome: boolean;
  isDevStyleTest?: boolean;
  isDevDoll?: boolean;
  isDevAssets?: boolean;
  isDevWorld?: boolean;
  isDevTrilogy?: boolean;
  overlayType?: OverlayRoute;
  chapterTarget?: ChapterRoute;
}

export const VALID_OVERLAYS: OverlayRoute[] = [
  'participation',
  'achievement',
  'my-message',
  'magazine-art',
  'photography',
  'my-strategy',
  'notes',
  'strategy/hard-selling',
  'strategy/entertainment',
  'strategy/education',
  'strategy/fun',
];

export const VALID_CHAPTERS: ChapterRoute[] = [
  'personal-brand',
  'writing-portfolio',
  'content-marketing',
  'content-marketing/cafe',
  'content-marketing/clinic',
  'content-marketing/terminal',
  'example-strategy',
  'project-campus',
  'podcast',
  'archive',
  'contact',
];

export function parseHash(hashStr: string): ParsedRoute {
  // Hash format: "#/some-route" atau "/some-route" (untuk vercel rewrite /plain)
  let clean = hashStr.replace(/^#\/?/, '').replace(/^\//, '').trim();

  // Bersihkan query string bila ada
  const queryIndex = clean.indexOf('?');
  if (queryIndex !== -1) {
    clean = clean.substring(0, queryIndex);
  }

  // Bersihkan trailing slash
  clean = clean.replace(/\/$/, '');

  if (clean === '' || clean === '/') {
    return {
      raw: hashStr,
      route: '',
      isOverlay: false,
      isChapter: false,
      isPlain: false,
      isHome: true,
    };
  }

  if (clean === 'plain') {
    return {
      raw: hashStr,
      route: 'plain',
      isOverlay: false,
      isChapter: false,
      isPlain: true,
      isHome: false,
    };
  }

  if (clean === 'dev/style-test') {
    return {
      raw: hashStr,
      route: 'dev/style-test',
      isOverlay: false,
      isChapter: false,
      isPlain: false,
      isHome: false,
      isDevStyleTest: true,
    };
  }

  if (clean === 'dev/doll') {
    return {
      raw: hashStr,
      route: 'dev/doll' as AppRoute,
      isOverlay: false,
      isChapter: false,
      isPlain: false,
      isHome: false,
      isDevDoll: true,
    };
  }

  if (clean === 'dev/assets') {
    return {
      raw: hashStr,
      route: 'dev/assets' as AppRoute,
      isOverlay: false,
      isChapter: false,
      isPlain: false,
      isHome: false,
      isDevAssets: true,
    };
  }

  if (clean === 'dev/world') {
    return {
      raw: hashStr,
      route: 'dev/world' as AppRoute,
      isOverlay: false,
      isChapter: false,
      isPlain: false,
      isHome: false,
      isDevWorld: true,
    };
  }

  if (clean === 'dev/trilogy') {
    return {
      raw: hashStr,
      route: 'dev/trilogy' as AppRoute,
      isOverlay: false,
      isChapter: false,
      isPlain: false,
      isHome: false,
      isDevTrilogy: true,
    };
  }

  if (VALID_OVERLAYS.includes(clean as OverlayRoute)) {
    const overlayRoute = clean as OverlayRoute;
    return {
      raw: hashStr,
      route: overlayRoute,
      isOverlay: true,
      isChapter: false,
      isPlain: false,
      isHome: false,
      overlayType: overlayRoute,
    };
  }

  if (VALID_CHAPTERS.includes(clean as ChapterRoute)) {
    const chapterRoute = clean as ChapterRoute;
    return {
      raw: hashStr,
      route: chapterRoute,
      isOverlay: false,
      isChapter: true,
      isPlain: false,
      isHome: false,
      chapterTarget: chapterRoute,
    };
  }

  // Fallback bila rute tidak dikenal
  return {
    raw: hashStr,
    route: '',
    isOverlay: false,
    isChapter: false,
    isPlain: false,
    isHome: true,
  };
}

export function useHashRoute(): {
  current: ParsedRoute;
  navigate: (route: AppRoute) => void;
  closeOverlay: () => void;
} {
  const [current, setCurrent] = useState<ParsedRoute>(() => {
    if (typeof window === 'undefined') {
      return parseHash('');
    }
    // Periksa juga window.location.pathname bila /plain diakses langsung via Vercel rewrite
    if (window.location.pathname === '/plain') {
      return parseHash('plain');
    }
    return parseHash(window.location.hash);
  });

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.pathname === '/plain') {
        setCurrent(parseHash('plain'));
      } else {
        setCurrent(parseHash(window.location.hash));
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = useCallback((route: AppRoute) => {
    if (!route) {
      // Hapus hash tanpa trigger reload
      window.history.pushState(null, '', window.location.pathname + window.location.search);
      setCurrent(parseHash(''));
    } else {
      window.location.hash = `#/${route}`;
    }
  }, []);

  const closeOverlay = useCallback(() => {
    // Tombol close atau Back browser: kembali ke URL tanpa hash overlay
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.history.pushState(null, '', window.location.pathname + window.location.search);
      setCurrent(parseHash(''));
    }
  }, []);

  return {
    current,
    navigate,
    closeOverlay,
  };
}
