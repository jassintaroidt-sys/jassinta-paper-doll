import React from 'react';
import { Pushpin } from './Pushpin';

export interface PhotoFrameProps {
  src: string;
  alt: string;
  caption?: string;
  aspectRatio?: string; // misal "1:1", "4:5", "9:16"
  pin?: boolean;
  washiTape?: boolean;
  rotationDeg?: number; // ±2 sampai 4 derajat per DV 3.4
  className?: string;
  style?: React.CSSProperties;
}

/**
 * PhotoFrame — Bingkai foto polaroid kertas (DF 9.4)
 * Aturan Mutlak: Tidak pernah memotong foto (object-fit: contain).
 * Bingkai mengikuti rasio foto dan memiliki bayangan tebal.
 */
export const PhotoFrame: React.FC<PhotoFrameProps> = ({
  src,
  alt,
  caption,
  aspectRatio = '1:1',
  pin = false,
  washiTape = false,
  rotationDeg = 2,
  className = '',
  style = {},
}) => {
  return (
    <div
      className={`relative inline-block select-none ${className}`}
      style={{
        transform: `rotate(${rotationDeg}deg)`,
        boxShadow: '0 10px 25px rgba(0,0,0,0.22)',
        ...style,
      }}
    >
      {/* Paku payung di atas tengah jika aktif */}
      {pin && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
          <Pushpin color="cherry-red" size={16} />
        </div>
      )}

      {/* Washi tape di sudut atas jika aktif */}
      {washiTape && (
        <div
          className="absolute -top-2.5 -left-3 z-20 h-5 w-14 -rotate-12 bg-[#FFD6E8]/85 border-y border-pink-300/60 shadow-sm"
          style={{ clipPath: 'polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)' }}
          aria-hidden="true"
        />
      )}

      {/* Bingkai foto putih tebal */}
      <div
        className="rounded-sm bg-[#FFFDF9] p-3 pb-4 text-center border border-stone-200"
        style={{ color: 'var(--ink)' }}
      >
        {/* Gambar tidak pernah dipotong (object-fit: contain) */}
        <div
          className="relative overflow-hidden bg-stone-100 flex items-center justify-center"
          style={{ aspectRatio }}
        >
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-contain block"
            loading="lazy"
          />
        </div>

        {/* Keterangan foto bertulisan tangan Shantell Sans */}
        {caption && (
          <div
            className="mt-2 text-xs opacity-80"
            style={{ fontFamily: 'var(--font-shantell)' }}
          >
            {caption}
          </div>
        )}
      </div>
    </div>
  );
};
