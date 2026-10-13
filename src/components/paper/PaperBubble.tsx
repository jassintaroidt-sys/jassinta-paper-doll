import React from 'react';
import { PAPER_SHADOWS } from '../../paperkit/shadow';

export interface PaperBubbleProps {
  text: string;
  speaker?: string; // default "Jassinta"
  color?: string; // default pure-white atau milk-white
  tailPosition?: 'bottom-left' | 'bottom-right' | 'top-left';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * PaperBubble — Gelembung Kertas Gunting Ucapan Doll (REV F & DF 7.5)
 * Memiliki ekor kecil segitiga kertas dan bayangan kontak halus.
 * Font: Shantell Sans.
 */
export const PaperBubble: React.FC<PaperBubbleProps> = ({
  text,
  speaker,
  color = 'var(--milk-white)',
  tailPosition = 'bottom-left',
  className = '',
  style = {},
}) => {
  return (
    <div
      className={`relative inline-block max-w-xs select-none ${className}`}
      style={{
        filter: PAPER_SHADOWS.front,
        ...style,
      }}
    >
      {/* Lembar bayangan bawah (bergeser 2px) */}
      <div
        className="absolute inset-0 rounded-lg"
        style={{
          transform: 'translate(2px, 2px)',
          backgroundColor: '#1B1017',
          opacity: 0.12,
        }}
        aria-hidden="true"
      />

      {/* Badan gelembung utama */}
      <div
        className="relative z-10 rounded-lg px-4 py-3"
        style={{
          backgroundColor: color,
          border: '1.5px solid rgba(27,16,23,0.2)',
        }}
      >
        {speaker && (
          <div
            className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-pink-700"
            style={{ fontFamily: 'var(--font-dm-mono)' }}
          >
            {speaker}
          </div>
        )}
        <div
          className="text-sm leading-relaxed"
          style={{
            fontFamily: 'var(--font-shantell)',
            color: 'var(--ink)',
          }}
        >
          {text}
        </div>

        {/* Ekor gelembung segitiga potongan kertas */}
        <div
          className={`absolute h-3 w-3 rotate-45 border-b-[1.5px] border-r-[1.5px] ${
            tailPosition === 'bottom-left'
              ? '-bottom-1.5 left-4'
              : tailPosition === 'bottom-right'
                ? '-bottom-1.5 right-4'
                : '-top-1.5 left-4'
          }`}
          style={{
            backgroundColor: color,
            borderColor: 'rgba(27,16,23,0.2)',
          }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
};
