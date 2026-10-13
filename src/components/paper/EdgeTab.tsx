import React from 'react';
import { useCalmMode } from '../../hooks/useCalmMode';
import { PAPER_SHADOWS } from '../../paperkit/shadow';

export interface EdgeTabProps {
  color?: string; // warna babak chapter berikutnya
  chapterLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * EdgeTab — Penanda chapter berikutnya di tepi kanan layar (REV F & DF 10.2)
 * Ukuran kecil 0.3 Hd, mengintip dari tepi kanan.
 * Dekoratif (aria-hidden), tidak bisa diklik, hilang otomatis di Calm mode.
 */
export const EdgeTab: React.FC<EdgeTabProps> = ({
  color = 'var(--blush)',
  className = '',
  style = {},
}) => {
  const { isCalm } = useCalmMode();

  // Hilang di Calm mode per aturan bible REV F
  if (isCalm) return null;

  return (
    <div
      className={`pointer-events-none fixed right-0 top-1/2 z-30 -translate-y-1/2 select-none ${className}`}
      style={{
        filter: PAPER_SHADOWS.mid,
        ...style,
      }}
      aria-hidden="true"
    >
      {/* Tab kertas gunting mengintip setengah ke luar layar */}
      <div
        className="h-16 w-6 rounded-l-md border-y border-l border-stone-300"
        style={{
          backgroundColor: color,
          boxShadow: 'inset 1px 0 0 rgba(255,255,255,0.4)',
        }}
      >
        {/* Garis jahitan dekoratif di tepi tab */}
        <div className="my-auto h-12 w-1 border-r border-dashed border-stone-400 opacity-60" />
      </div>
    </div>
  );
};
