import React from 'react';
import { createPRNG, randomFloat, hashStringToSeed } from '../../paperkit/prng';
import { PAPER_SHADOWS } from '../../paperkit/shadow';

export interface CutLettersProps {
  text: string;
  colors?: string[]; // array warna potongan huruf
  fontSize?: number; // default 32px
  className?: string;
  style?: React.CSSProperties;
}

const DEFAULT_CUT_COLORS = [
  'var(--warm-blush)',
  'var(--mint)',
  'var(--baby-blue)',
  'var(--butter)',
  'var(--lilac)',
  'var(--candy-pink)',
  'var(--pastel-mint)',
];

/**
 * CutLetters — Huruf Potongan Kertas (REV H & manifest)
 * Memecah teks menjadi potongan kertas huruf berotasi +-3 derajat.
 * Teks tetap terbaca bagi pembaca layar (sr-only di DOM).
 */
export const CutLetters: React.FC<CutLettersProps> = ({
  text,
  colors = DEFAULT_CUT_COLORS,
  fontSize = 32,
  className = '',
  style = {},
}) => {
  const seed = hashStringToSeed(text);
  const prng = React.useMemo(() => createPRNG(seed), [seed]);

  const characters = React.useMemo(() => {
    return text.split('').map((char, index) => {
      const rot = randomFloat(prng, -3, 3);
      const color = colors[index % colors.length];
      const isSpace = char === ' ';
      return { char, rot: Number(rot.toFixed(1)), color, isSpace };
    });
  }, [text, colors, prng]);

  return (
    <div
      className={`relative inline-flex flex-wrap items-center gap-1 select-none ${className}`}
      style={style}
    >
      {/* Teks tersembunyi visual untuk pembaca layar (Aksesibilitas REV H) */}
      <span className="sr-only">{text}</span>

      {/* Huruf potongan kertas visual (aria-hidden) */}
      <div className="flex flex-wrap items-center gap-1.5" aria-hidden="true">
        {characters.map((item, i) => {
          if (item.isSpace) {
            return <span key={i} className="inline-block w-3" />;
          }

          return (
            <div
              key={i}
              className="inline-flex items-center justify-center rounded-sm px-1.5 py-1 font-bold"
              style={{
                backgroundColor: item.color,
                color: 'var(--ink)',
                transform: `rotate(${item.rot}deg)`,
                filter: PAPER_SHADOWS.contact,
                border: '1px solid rgba(27,16,23,0.18)',
                minWidth: `${fontSize * 0.9}px`,
                height: `${fontSize * 1.3}px`,
                fontSize: `${fontSize}px`,
                fontFamily: 'var(--font-anton)',
                lineHeight: 1,
              }}
            >
              {item.char}
            </div>
          );
        })}
      </div>
    </div>
  );
};
