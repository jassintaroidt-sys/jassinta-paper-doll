/**
 * src/components/world/WorldLayer.tsx
 * Lapisan paralaks multi-lapis (DF 6.2)
 *
 * Kecepatan relatif terhadap scroll:
 * - 0.2x: Langit dan skyline jauh (awan, pesawat kecil, landmark siluet)
 * - 0.5x: Latar tengah (dinding, bangunan, rak)
 * - 1.0x: Jalur dan doll (tetap 35% dari kiri di desktop)
 * - 1.0x: Props tengah (meja, konter, mesin)
 * - 1.3x: Props depan (hanger, tanaman, pinggir kertas)
 * - 0.9x: Teks (headline dan narasi; Chapter 1 paling lambat)
 *
 * Di layar sentuh, reduced motion, dan Calm mode: paralaks mati (transform dinolkan).
 */

import { type ReactNode, useEffect, useState, useRef } from 'react';
import { useWorld } from './WorldContext';
import { useCalmMode } from '../../hooks/useCalmMode';

interface WorldLayerProps {
  /** Kecepatan relatif: 0.2 | 0.5 | 0.9 | 1.0 | 1.3 */
  speed?: 0.2 | 0.5 | 0.9 | 1.0 | 1.3 | number;
  /** translateZ dalam px (CSS 3D depth) */
  depthZ?: number;
  /** Kelas CSS tambahan */
  className?: string;
  children: ReactNode;
  /** Mode billboard datar (menghadap kamera) */
  billboard?: boolean;
}

export function WorldLayer({
  speed = 1.0,
  depthZ = 0,
  className = '',
  children,
  billboard = true,
}: WorldLayerProps) {
  const { depthLevel } = useWorld();
  const { isCalm } = useCalmMode();
  const layerRef = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState<number>(0);

  const isMotionDisabled =
    isCalm ||
    depthLevel === 'calm' ||
    (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  useEffect(() => {
    if (isMotionDisabled || speed === 1.0) {
      setOffsetY(0);
      return;
    }

    let rafId: number;
    const handleScroll = () => {
      if (!layerRef.current) return;
      const rect = layerRef.current.parentElement?.getBoundingClientRect();
      if (!rect) return;

      // Hitung posisi relatif viewport
      const scrollDist = -rect.top;
      // Perbedaan offset dari kecepatan standar 1.0x
      const delta = scrollDist * (1.0 - speed);
      setOffsetY(delta);
    };

    const onScrollRaf = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScrollRaf, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScrollRaf);
      cancelAnimationFrame(rafId);
    };
  }, [speed, isMotionDisabled]);

  const transformStyle: React.CSSProperties = {
    transform: isMotionDisabled
      ? undefined
      : `translate3d(0, ${offsetY.toFixed(1)}px, ${depthZ}px)`,
    transformStyle: billboard ? 'preserve-3d' : undefined,
    transition: isMotionDisabled ? 'none' : 'transform 75ms linear',
  };

  return (
    <div
      ref={layerRef}
      className={`world-layer pointer-events-none ${className}`}
      style={transformStyle}
    >
      <div className="pointer-events-auto">{children}</div>
    </div>
  );
}
