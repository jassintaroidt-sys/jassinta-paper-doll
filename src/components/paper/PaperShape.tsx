import React from 'react';
import { generateHandcutRectPath } from '../../paperkit/jitter';
import { PAPER_SHADOWS, type PaperDepth } from '../../paperkit/shadow';

export interface PaperShapeProps {
  width: number;
  height: number;
  seed: number;
  color?: string;
  depth?: PaperDepth;
  radius?: number;
  amplitude?: number;
  thickness?: boolean; // tebal kertas 3px (sisi bawah 12% lebih gelap, highlight 1px di atas)
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

/**
 * PaperShape — Potongan kertas dari path SVG gunting tangan (DV 2.5)
 * Memiliki 5 sampai 9 titik goyang kecil, ketebalan 3px, dan bayangan drop-shadow.
 */
export const PaperShape: React.FC<PaperShapeProps> = ({
  width,
  height,
  seed,
  color = 'var(--milk-white)',
  depth = 'mid',
  radius = 6,
  amplitude = 1.2,
  thickness = true,
  className = '',
  style = {},
  children,
}) => {
  const path = React.useMemo(() => {
    return generateHandcutRectPath(width, height, seed, radius, amplitude);
  }, [width, height, seed, radius, amplitude]);

  const shadow = PAPER_SHADOWS[depth];

  return (
    <div
      className={`relative inline-block ${className}`}
      style={{
        width,
        height,
        filter: shadow,
        ...style,
      }}
    >
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className="absolute inset-0 block overflow-visible"
        aria-hidden="true"
      >
        {/* Lapisan ketebalan 3px bawah/kanan (sisi gelap 12%) */}
        {thickness && (
          <path
            d={path}
            fill="#1B1017"
            fillOpacity="0.12"
            transform="translate(1.5, 2)"
          />
        )}

        {/* Lapisan badan kertas utama */}
        <path d={path} fill={color} />

        {/* Highlight 1px tepi atas kertas (DV 2.3) */}
        {thickness && (
          <path
            d={path}
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="1"
            strokeOpacity="0.4"
            transform="translate(0, -0.5)"
          />
        )}
      </svg>

      {/* Konten di dalam shape */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};
