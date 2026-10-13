/**
 * Breakpoints resmi - DF 12.1
 * XS: < 480 px (HP Portrait)
 * SM: 480 - 767 px
 * MD: 768 - 1023 px (Tablet)
 * LG: 1024 - 1439 px (Desktop)
 * XL: 1440 - 1919 px (Acuan 1920x1080, max konten 1440)
 * 2XL: >= 1920 px
 * HP Landscape: max-height 500 px
 */

export const BREAKPOINTS = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1440,
  '2xl': 1920,
} as const;

export type BreakpointKey = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export const MEDIA_QUERIES = {
  xs: '(max-width: 479px)',
  sm: '(min-width: 480px) and (max-width: 767px)',
  md: '(min-width: 768px) and (max-width: 1023px)',
  lg: '(min-width: 1024px) and (max-width: 1439px)',
  xl: '(min-width: 1440px) and (max-width: 1919px)',
  '2xl': '(min-width: 1920px)',
  hpLandscape: '(orientation: landscape) and (max-height: 500px)',
  hoverFine: '(hover: hover) and (pointer: fine)',
  reducedMotion: '(prefers-reduced-motion: reduce)',
} as const;
