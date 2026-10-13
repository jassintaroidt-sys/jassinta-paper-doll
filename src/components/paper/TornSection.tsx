import React, { useMemo } from 'react';
import {
  type ValidTornSeed,
  createTornEdgeStyle,
  generateTornFiberAndHighlight,
} from '../../paperkit/torn';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { useCalmMode } from '../../hooks/useCalmMode';

export interface TornSectionProps {
  seed: ValidTornSeed;
  id?: string;
  backgroundColor?: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * TornSection — Komponen Section dengan Tepi Robek Kertas Handmade TornEdge (DF 11)
 *
 * Aturan Mutlak:
 * - Seed hanya 101, 202, 303, 404, 505, 606 (DF 11.5)
 * - Tiga lapis noise seeded: deformasi besar + robekan sedang + serat halus (DF 11.4)
 * - Mask SVG programatik, bukan clip-path atau zig-zag (DF 11.3)
 * - Drop-shadow di wrapper luar (DF 11.7)
 * - Tinggi: clamp(36px, 6vw, 90px), overscan calc(100% + 4px) (DF 11.5)
 * - Serat sisa & highlight tidak kontinu (DF 11.6)
 * - Pointer-events: none, tanpa animasi kontur (DF 11.9)
 */
export const TornSection: React.FC<TornSectionProps> = ({
  seed,
  id,
  backgroundColor = 'var(--paper-base)',
  className = '',
  children,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const { isCalm } = useCalmMode();
  const isReduced = prefersReducedMotion || isCalm;

  // Mask style memoized dari seed deterministik
  const maskStyle = useMemo(() => {
    return createTornEdgeStyle(seed);
  }, [seed]);

  // Serat sisa dan highlight curl memoized
  const { fiberSegments, highlightSegments } = useMemo(() => {
    return generateTornFiberAndHighlight(seed, 1000, 100);
  }, [seed]);

  return (
    // Lapisan 1: Pembungkus luar dengan drop-shadow (DF 11.2 & 11.7)
    <div
      id={id}
      className="torn-section-shadow-wrapper relative w-full"
      style={{
        filter: 'drop-shadow(0 6px 8px rgba(0, 0, 0, 0.18))',
        transition: isReduced ? 'opacity 250ms ease' : undefined,
      }}
      data-torn-seed={seed}
    >
      {/* Lapisan 2: Section kertas konten ber-mask (DF 11.2) */}
      <section
        className={`torn-paper-section relative w-[calc(100%+4px)] -ml-[2px] overflow-hidden ${className}`}
        style={{
          backgroundColor,
          paddingBottom: 'clamp(36px, 6vw, 90px)',
          ...maskStyle,
        }}
      >
        {children}
      </section>

      {/* Lapisan 3: Sisa Serat Halus & Highlight Robekan (DF 11.2 & 11.6) */}
      <div
        className="torn-edge-wrapper pointer-events-none absolute bottom-0 left-0 w-[calc(100%+4px)] -ml-[2px] z-20"
        style={{
          height: 'clamp(36px, 6vw, 90px)',
        }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="h-full w-full block overflow-visible"
        >
          {/* Serat sisa kedua: offset 3-8px warna milk-white (DF 11.6) */}
          {fiberSegments.map((d, idx) => (
            <path
              key={`fiber-${idx}`}
              d={d}
              stroke="var(--milk-white)"
              strokeWidth="1.2"
              strokeOpacity="0.85"
              fill="none"
              strokeLinecap="round"
            />
          ))}

          {/* Highlight curl 1px halus tidak kontinu (DF 11.6) */}
          {highlightSegments.map((d, idx) => (
            <path
              key={`hl-${idx}`}
              d={d}
              stroke="#FFFFFF"
              strokeWidth="0.9"
              strokeOpacity="0.6"
              fill="none"
              strokeLinecap="round"
            />
          ))}
        </svg>
      </div>
    </div>
  );
};
