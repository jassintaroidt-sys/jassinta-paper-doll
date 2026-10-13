import React from 'react';
import { PAPER_SHADOWS } from '../../paperkit/shadow';

export interface StickerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'glitter' | 'paper' | 'secondary';
  rotationDeg?: number;
  children: React.ReactNode;
}

/**
 * StickerButton — Tombol sticker die-cut pink glitter (DF 9.4)
 * Miring sedikit, bayangan bertingkat.
 * Hover / Focus: goyang halus + naik 2px.
 * Aksesibilitas: Target sentuh min 44x44 px, focus-visible hot-pink 3px.
 */
export const StickerButton: React.FC<StickerButtonProps> = ({
  variant = 'glitter',
  rotationDeg = -1.5,
  className = '',
  style = {},
  children,
  ...buttonProps
}) => {
  return (
    <button
      {...buttonProps}
      className={`group relative inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition-all duration-200 cursor-pointer active:translate-y-0.5 ${className}`}
      style={{
        transform: `rotate(${rotationDeg}deg)`,
        filter: PAPER_SHADOWS.mid,
        fontFamily: 'var(--font-poppins)',
        ...style,
      }}
    >
      {/* Tepi putih die-cut 3px (DV 2.3) */}
      <span
        className="pointer-events-none absolute inset-0 -m-1 rounded-lg border-2 border-white/90 bg-white/30 transition-transform group-hover:scale-105"
        aria-hidden="true"
      />

      {/* Latar badan tombol */}
      <span
        className={`relative z-10 flex items-center justify-center gap-2 rounded-md px-4 py-2 transition-transform group-hover:-translate-y-0.5 group-hover:rotate-1 ${
          variant === 'glitter'
            ? 'bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white shadow-md'
            : variant === 'paper'
              ? 'bg-[#FFFDF9] text-[#1B1017] border border-stone-300'
              : 'bg-[#D4C1F5] text-[#1B1017] border border-stone-400'
        }`}
      >
        {children}
      </span>
    </button>
  );
};
