import { useState, useEffect } from 'react';
import { BREAKPOINTS, BreakpointKey } from '../tokens/breakpoints';

export interface BreakpointState {
  breakpoint: BreakpointKey;
  isMobile: boolean; // xs or sm (< 768px)
  isTablet: boolean; // md (768 - 1023px)
  isDesktop: boolean; // lg, xl, 2xl (>= 1024px)
  isHpLandscape: boolean;
  width: number;
  height: number;
}

function getBreakpoint(width: number): BreakpointKey {
  if (width >= BREAKPOINTS['2xl']) return '2xl';
  if (width >= BREAKPOINTS.xl) return 'xl';
  if (width >= BREAKPOINTS.lg) return 'lg';
  if (width >= BREAKPOINTS.md) return 'md';
  if (width >= BREAKPOINTS.sm) return 'sm';
  return 'xs';
}

export function useBreakpoint(): BreakpointState {
  const [state, setState] = useState<BreakpointState>(() => {
    if (typeof window === 'undefined') {
      return {
        breakpoint: 'xl',
        isMobile: false,
        isTablet: false,
        isDesktop: true,
        isHpLandscape: false,
        width: 1440,
        height: 900,
      };
    }
    const width = window.innerWidth;
    const height = window.innerHeight;
    const bp = getBreakpoint(width);
    const isHpLandscape = window.matchMedia('(orientation: landscape) and (max-height: 500px)').matches;

    return {
      breakpoint: bp,
      isMobile: width < BREAKPOINTS.md,
      isTablet: width >= BREAKPOINTS.md && width < BREAKPOINTS.lg,
      isDesktop: width >= BREAKPOINTS.lg,
      isHpLandscape,
      width,
      height,
    };
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const bp = getBreakpoint(width);
      const isHpLandscape = window.matchMedia('(orientation: landscape) and (max-height: 500px)').matches;

      setState({
        breakpoint: bp,
        isMobile: width < BREAKPOINTS.md,
        isTablet: width >= BREAKPOINTS.md && width < BREAKPOINTS.lg,
        isDesktop: width >= BREAKPOINTS.lg,
        isHpLandscape,
        width,
        height,
      });
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return state;
}
