import { useState, useEffect } from 'react';
import { useCalmMode } from './useCalmMode';
import { useBreakpoint } from './useBreakpoint';

interface ExtendedNavigator extends Navigator {
  deviceMemory?: number;
  connection?: {
    saveData?: boolean;
    effectiveType?: string;
  };
}

/**
 * useLiteMode - Aturan Lite otomatis sesuai DF 12.4:
 * Lite aktif jika salah satu kondisi terpenuhi:
 * 1. hardwareConcurrency <= 4
 * 2. deviceMemory <= 4 (GB)
 * 3. Mobile screen (< 768px)
 * 4. Save-Data header/connection diaktifkan pengguna
 * 5. Calm mode aktif
 */
export function useLiteMode(): boolean {
  const [isCalm] = useCalmMode();
  const { isMobile } = useBreakpoint();
  const [isHardwareLite, setIsHardwareLite] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const nav = navigator as ExtendedNavigator;
    const lowConcurrency = typeof nav.hardwareConcurrency === 'number' && nav.hardwareConcurrency <= 4;
    const lowMemory = typeof nav.deviceMemory === 'number' && nav.deviceMemory <= 4;
    const saveData = Boolean(nav.connection?.saveData);

    if (lowConcurrency || lowMemory || saveData) {
      setIsHardwareLite(true);
    }
  }, []);

  const isLite = isHardwareLite || isMobile || isCalm;

  useEffect(() => {
    if (isLite) {
      document.documentElement.setAttribute('data-lite-mode', 'true');
    } else {
      document.documentElement.removeAttribute('data-lite-mode');
    }
  }, [isLite]);

  return isLite;
}
