import React from 'react';

export interface PushpinProps {
  color?: 'cherry-red' | 'hot-pink' | 'wisteria';
  size?: number; // diameter kepala pin, default 14px
  className?: string;
  style?: React.CSSProperties;
}

const PIN_COLORS = {
  'cherry-red': '#E5173F',
  'hot-pink': '#FF2E93',
  wisteria: '#A98BDA',
};

/**
 * Pushpin — Paku payung 3D kecil untuk menempelkan kartu/foto (DF 9.4)
 * Menampilkan kepala kubah dengan sorot putih 1.5px dan bayangan kontak.
 */
export const Pushpin: React.FC<PushpinProps> = ({
  color = 'cherry-red',
  size = 14,
  className = '',
  style = {},
}) => {
  const pinHex = PIN_COLORS[color];

  return (
    <div
      className={`relative inline-block select-none pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        ...style,
      }}
      aria-hidden="true"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 20"
        className="block overflow-visible"
      >
        {/* Bayangan kontak pin ke kertas */}
        <ellipse cx="11" cy="12" rx="7" ry="5" fill="#1B1017" fillOpacity="0.25" />
        {/* Kepala paku kubah cembung */}
        <circle cx="10" cy="10" r="7" fill={pinHex} />
        {/* Cincin tengah kubah */}
        <circle cx="9" cy="9" r="4.5" fill={pinHex} filter="brightness(1.15)" />
        {/* Sorot putih cembung 2px (DV 2.2) */}
        <ellipse cx="8" cy="8" rx="2" ry="1.2" fill="#FFFFFF" fillOpacity="0.75" />
      </svg>
    </div>
  );
};
