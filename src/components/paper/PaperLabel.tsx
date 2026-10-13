import React from 'react';
import { PAPER_SHADOWS } from '../../paperkit/shadow';

export interface PaperLabelProps {
  label: string; // Baris 1: DM Mono (misal "CHAPTER 3A")
  title: string; // Baris 2: Shantell Sans 600 (misal "Creative Space & Cafe")
  color?: string; // Warna dasar babak (default warm-blush atau mint)
  rotationDeg?: number; // Rotasi sesuai deret 3.4 (misal -3, 4, -2, 5)
  showRays?: boolean; // 6-8 strip kertas sinar memancar (REV F)
  className?: string;
  style?: React.CSSProperties;
}

/**
 * PaperLabel — Label Kertas Gunting Papan Nama (REV F & DV 3.4)
 * Dua lapis (atas + lembar bayangan 12% lebih gelap bergeser 3px).
 * Baris 1: DM Mono, Baris 2: Shantell Sans 600.
 */
export const PaperLabel: React.FC<PaperLabelProps> = ({
  label,
  title,
  color = 'var(--warm-blush)',
  rotationDeg = -3,
  showRays = false,
  className = '',
  style = {},
}) => {
  return (
    <div
      className={`relative inline-block select-none ${className}`}
      style={{
        transform: `rotate(${rotationDeg}deg)`,
        filter: PAPER_SHADOWS.front,
        ...style,
      }}
    >
      {/* Strip kertas sinar (REV F: 6-8 strip tipis memancar jika aktif) */}
      {showRays && (
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
          {[-45, -25, -10, 10, 25, 45].map((deg, i) => (
            <div
              key={i}
              className="absolute left-1/2 top-0 h-4 w-[2px] -translate-x-1/2 -translate-y-4"
              style={{
                backgroundColor: color,
                transform: `rotate(${deg}deg)`,
                opacity: 0.65,
              }}
            />
          ))}
        </div>
      )}

      {/* Lembar bayangan bawah (12% lebih gelap, bergeser 3px ke kanan-bawah) */}
      <div
        className="absolute inset-0 rounded-sm"
        style={{
          transform: 'translate(3px, 3px)',
          backgroundColor: '#1B1017',
          opacity: 0.16,
        }}
        aria-hidden="true"
      />

      {/* Sudut kanan bawah terangkat (segitiga efek kertas menekuk) */}
      <div
        className="absolute bottom-0 right-0 z-20 h-3 w-3"
        style={{
          background: 'linear-gradient(135deg, transparent 50%, rgba(27,16,23,0.18) 50%)',
        }}
        aria-hidden="true"
      />

      {/* Lembar utama atas (berwarna babak, border tipis, padding rapi) */}
      <div
        className="relative z-10 rounded-sm px-4 py-2 text-left"
        style={{
          backgroundColor: color,
          border: '1.5px solid rgba(27,16,23,0.25)',
        }}
      >
        {/* Baris 1: DM Mono */}
        <div
          className="text-[10px] font-medium tracking-wider uppercase opacity-75"
          style={{
            fontFamily: 'var(--font-dm-mono)',
            color: 'var(--ink)',
          }}
        >
          {label}
        </div>

        {/* Baris 2: Shantell Sans 600 */}
        <div
          className="text-base leading-tight"
          style={{
            fontFamily: 'var(--font-shantell)',
            fontWeight: 600,
            color: 'var(--ink)',
          }}
        >
          {title}
        </div>
      </div>
    </div>
  );
};
