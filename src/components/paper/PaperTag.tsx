import React from 'react';
import { PAPER_SHADOWS } from '../../paperkit/shadow';

export interface PaperTagProps {
  text: string;
  subtext?: string;
  color?: string; // default milk-white atau aged-paper
  rotationDeg?: number; // ±1 sampai 2 derajat
  className?: string;
  style?: React.CSSProperties;
}

/**
 * PaperTag — Tag Kertas Gunting dengan lubang dan benang jahit (REV F)
 * Pengganti Wall Notes / sticky note.
 * Isi: Shantell Sans (minimal 17px di desktop).
 */
export const PaperTag: React.FC<PaperTagProps> = ({
  text,
  subtext,
  color = 'var(--vanilla)',
  rotationDeg = 1.5,
  className = '',
  style = {},
}) => {
  return (
    <div
      className={`relative inline-flex flex-col items-center select-none ${className}`}
      style={{
        transform: `rotate(${rotationDeg}deg)`,
        filter: PAPER_SHADOWS.mid,
        ...style,
      }}
    >
      {/* Tali benang jahit 1.5px (bukan garis tinta) */}
      <div
        className="h-4 w-[1.5px]"
        style={{
          backgroundColor: '#5A3A2E',
          opacity: 0.7,
        }}
        aria-hidden="true"
      />

      {/* Badan Tag Kertas dengan lubang di atas */}
      <div
        className="relative rounded-sm px-3.5 py-2 text-center"
        style={{
          backgroundColor: color,
          border: '1px solid rgba(27,16,23,0.18)',
          boxShadow: '1px 2px 4px rgba(27,16,23,0.08)',
        }}
      >
        {/* Lubang tag kertas (eyelet 4px) */}
        <div
          className="mx-auto mb-1 h-2 w-2 rounded-full border border-stone-400 bg-white"
          style={{ opacity: 0.85 }}
          aria-hidden="true"
        />

        {/* Isi teks Shantell Sans (minimal 17px) */}
        <div
          className="text-[17px] leading-snug"
          style={{
            fontFamily: 'var(--font-shantell)',
            color: 'var(--ink)',
          }}
        >
          {text}
        </div>

        {subtext && (
          <div
            className="mt-0.5 text-[11px] font-mono opacity-60"
            style={{ fontFamily: 'var(--font-dm-mono)' }}
          >
            {subtext}
          </div>
        )}
      </div>
    </div>
  );
};
