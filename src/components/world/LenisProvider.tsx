/**
 * src/components/world/LenisProvider.tsx
 * Penyedia smooth-scrolling Lenis global (DF 10.3)
 *
 * Fitur:
 * - Inisialisasi Lenis dengan durasi 1.2s dan easing alami kertas
 * - Sinkronisasi loop RAF
 * - Penguncian scroll saat di Opening hingga pintu loker dibuka (OPEN)
 * - Dukungan data-lenis-prevent untuk area modal / dialog / kontainer scroll bersarang
 * - Matikan smoothing saat prefers-reduced-motion atau Calm mode
 */

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import Lenis from 'lenis';
import { useWorld } from './WorldContext';
import { useCalmMode } from '../../hooks/useCalmMode';

interface LenisContextValue {
  lenis: Lenis | null;
  scrollTo: (target: string | number | HTMLElement, options?: { offset?: number; immediate?: boolean; duration?: number }) => void;
}

const LenisContext = createContext<LenisContextValue>({
  lenis: null,
  scrollTo: () => {},
});

export function useLenis() {
  return useContext(LenisContext);
}

interface LenisProviderProps {
  children: ReactNode;
}

export function LenisProvider({ children }: LenisProviderProps) {
  const { isOpeningUnlocked, depthLevel } = useWorld();
  const { isCalm } = useCalmMode();
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  const isReducedMotion =
    isCalm ||
    depthLevel === 'calm' ||
    (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  useEffect(() => {
    // Inisialisasi Lenis instance
    const lenis = new Lenis({
      duration: isReducedMotion ? 0.01 : 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: !isReducedMotion,
      touchMultiplier: 1.5,
      autoRaf: false, // Kita kontrol RAF manual agar tertib
    });

    lenisRef.current = lenis;
    setLenisInstance(lenis);

    // Hubungkan loop RAF
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
      setLenisInstance(null);
    };
  }, [isReducedMotion]);

  // Kontrol penguncian scroll saat Opening terkunci
  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;

    if (!isOpeningUnlocked) {
      lenis.stop();
      // Cegah scrolling keyboard bawaan pada window
      document.body.style.overflow = 'hidden';
    } else {
      lenis.start();
      document.body.style.overflow = '';
    }
  }, [isOpeningUnlocked, lenisInstance]);

  const scrollTo = (
    target: string | number | HTMLElement,
    options?: { offset?: number; immediate?: boolean; duration?: number }
  ) => {
    if (!lenisRef.current) {
      // Fallback native jika lenis belum siap
      if (typeof target === 'string') {
        const el = document.querySelector(target);
        el?.scrollIntoView({ behavior: isReducedMotion ? 'auto' : 'smooth' });
      } else if (typeof target === 'number') {
        window.scrollTo({ top: target, behavior: isReducedMotion ? 'auto' : 'smooth' });
      } else if (target instanceof HTMLElement) {
        target.scrollIntoView({ behavior: isReducedMotion ? 'auto' : 'smooth' });
      }
      return;
    }

    lenisRef.current.scrollTo(target, {
      offset: options?.offset ?? 0,
      immediate: options?.immediate ?? isReducedMotion,
      duration: options?.duration,
    });
  };

  return (
    <LenisContext.Provider value={{ lenis: lenisInstance, scrollTo }}>
      {children}
    </LenisContext.Provider>
  );
}
