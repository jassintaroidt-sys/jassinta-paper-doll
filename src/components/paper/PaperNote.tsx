import React from 'react';
import { PAPER_SHADOWS } from '../../paperkit/shadow';

export interface PaperNoteProps {
  children: React.ReactNode;
  rotationDeg?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * PaperNote — Catatan memo kertas aged-paper dengan sudut terangkat (DF 9.4)
 */
export const PaperNote: React.FC<PaperNoteProps> = ({
  children,
  rotationDeg = -1.5,
  className = '',
  style = {},
}) => {
  return (
    <div
      className={`relative inline-block rounded-sm p-4 ${className}`}
      style={{
        backgroundColor: 'var(--aged-paper)',
        transform: `rotate(${rotationDeg}deg)`,
        filter: PAPER_SHADOWS.mid,
        color: 'var(--ink)',
        fontFamily: 'var(--font-shantell)',
        border: '1px solid rgba(27,16,23,0.14)',
        ...style,
      }}
    >
      {/* Sudut kanan bawah terangkat */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-4 w-4"
        style={{
          background: 'linear-gradient(135deg, transparent 50%, rgba(27,16,23,0.15) 50%)',
        }}
        aria-hidden="true"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
