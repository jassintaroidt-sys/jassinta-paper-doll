import React from 'react';
import { PAPER_PRESETS, type PaperPreset } from '../../paperkit/texture';
import { mediaUrl } from '../../lib/media';

export interface PaperTextureProps {
  preset?: PaperPreset;
  color?: string; // background color dasar override
  grain?: boolean; // apakah menyertakan grain overlay
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

/**
 * PaperTexture — Komponen tekstur kertas handmade (REV C & Part 6)
 * Menerapkan:
 * - Warna dasar dari token (CSS var)
 * - Ubin serat dan bintik (kit_paper-tile-neutral_512.webp atau dark) dengan mix-blend-mode: multiply/screen
 * - Grain overlay per-section (bukan global)
 */
export const PaperTexture: React.FC<PaperTextureProps> = ({
  preset = 'handmade',
  color,
  grain = true,
  className = '',
  style = {},
  children,
}) => {
  const spec = PAPER_PRESETS[preset];
  const isDark = spec.tileType === 'dark';
  const tileUrl = mediaUrl(
    isDark ? 'kit/kit_paper-tile-dark_512.webp' : 'kit/kit_paper-tile-neutral_512.webp'
  );
  const grainUrl = mediaUrl(
    isDark ? 'kit/kit_grain-dark_220.webp' : 'kit/kit_grain-light_220.webp'
  );

  const baseColor = color ?? spec.defaultBaseColor;

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundColor: baseColor,
        ...style,
      }}
      data-paper-preset={preset}
    >
      {/* Lapisan 1: Ubin Serat dan Bintik Kertas Handmade */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${tileUrl})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '512px 512px',
          mixBlendMode: isDark ? 'screen' : 'multiply',
          opacity: isDark ? 0.8 : 0.75,
        }}
        aria-hidden="true"
      />

      {/* Lapisan 2: Grain halus per-section (DF 9.3) */}
      {grain && (
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${grainUrl})`,
            backgroundRepeat: 'repeat',
            backgroundSize: '220px 220px',
            mixBlendMode: isDark ? 'screen' : 'multiply',
            opacity: isDark ? 0.05 : 0.08,
          }}
          aria-hidden="true"
        />
      )}

      {/* Konten di atas tekstur */}
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
};
