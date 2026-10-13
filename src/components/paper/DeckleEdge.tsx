import React from 'react';
import { generateDeckleSheetSvg } from '../../paperkit/deckle';

export interface DeckleEdgeProps {
  side?: 'right' | 'bottom';
  seed?: number;
  pitaTepi?: boolean; // apakah menyertakan Pita Tepi merah muda (REV E)
  pitaColor?: string; // default cherry-red #E5173F opasitas 55%
  className?: string;
  style?: React.CSSProperties;
}

/**
 * DeckleEdge — Tepi deckle pada lembar besar dinding / kertas handmade (REV C & REV E)
 * Memperlihatkan tepi potongan serat alami dan Pita Tepi di sambungan lembar.
 */
export const DeckleEdge: React.FC<DeckleEdgeProps> = ({
  side = 'right',
  seed = 404,
  pitaTepi = true,
  pitaColor = '#E5173F',
  className = '',
  style = {},
}) => {
  const maskPath = React.useMemo(() => {
    return generateDeckleSheetSvg(100, 1000, seed, side, 6);
  }, [seed, side]);

  return (
    <div
      className={`pointer-events-none absolute z-20 ${
        side === 'right' ? 'top-0 right-0 h-full w-4' : 'bottom-0 left-0 w-full h-4'
      } ${className}`}
      style={style}
      aria-hidden="true"
    >
      {/* Garis serat rumbai deckle edge */}
      <svg
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full opacity-40"
      >
        <path d={maskPath} fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
      </svg>

      {/* Pita Tepi vertikal 6-10px di sambungan lembar (REV E & manifest) */}
      {pitaTepi && side === 'right' && (
        <div
          className="absolute top-0 right-1 h-full w-[8px]"
          style={{
            backgroundColor: pitaColor,
            opacity: 0.55,
            boxShadow: 'inset 1px 0 0 rgba(255,255,255,0.4), 1px 0 2px rgba(27,16,23,0.15)',
          }}
        />
      )}
    </div>
  );
};
