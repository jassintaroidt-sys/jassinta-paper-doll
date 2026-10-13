import { useState, useEffect, useCallback } from 'react';
import { useReducedMotion } from './useReducedMotion';

const CALM_MODE_STORAGE_KEY = 'jassinta_calm_mode';

export type CalmModeReturn = [boolean, () => void] & {
  isCalm: boolean;
  toggleCalm: () => void;
};

export function useCalmMode(): CalmModeReturn {
  const prefersReduced = useReducedMotion();
  const [isCalm, setIsCalm] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const stored = localStorage.getItem(CALM_MODE_STORAGE_KEY);
    if (stored !== null) {
      return stored === 'true';
    }
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    // Sinkronkan ke DOM
    if (isCalm) {
      document.documentElement.setAttribute('data-calm-mode', 'true');
    } else {
      document.documentElement.removeAttribute('data-calm-mode');
    }
  }, [isCalm]);

  useEffect(() => {
    // Bila pengguna belum pernah menyimpan override eksplisit, ikuti prefers-reduced-motion
    const stored = localStorage.getItem(CALM_MODE_STORAGE_KEY);
    if (stored === null) {
      setIsCalm(prefersReduced);
    }
  }, [prefersReduced]);

  const toggleCalm = useCallback(() => {
    setIsCalm((prev) => {
      const next = !prev;
      localStorage.setItem(CALM_MODE_STORAGE_KEY, String(next));
      return next;
    });
  }, []);

  const result = [isCalm, toggleCalm] as [boolean, () => void] & {
    isCalm: boolean;
    toggleCalm: () => void;
  };
  result.isCalm = isCalm;
  result.toggleCalm = toggleCalm;
  return result;
}
