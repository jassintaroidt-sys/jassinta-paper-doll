import React from 'react';
import { PAPER_SHADOWS, type PaperDepth } from '../../paperkit/shadow';

export type LayerRole =
  | 'sky' // -240px
  | 'skyline' // -120px
  | 'wall' // -60px
  | 'mid' // 0px (doll, props meja)
  | 'terrace' // +24px
  | 'hero' // +40px
  | 'front'; // +80px

const LAYER_TRANSLATE_Z: Record<LayerRole, number> = {
  sky: -240,
  skyline: -120,
  wall: -60,
  mid: 0,
  terrace: 24,
  hero: 40,
  front: 80,
};

export interface PaperLayerProps {
  role?: LayerRole;
  depth?: PaperDepth;
  translateZ?: number; // custom translateZ jika tidak memakai role
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

/**
 * PaperLayer — Pengatur lapisan kedalaman 2.5D di DOM (DV 3.5 & REV D)
 * Menggunakan CSS 3D translateZ dan filter drop-shadow yang sesuai kedalamannya.
 */
export const PaperLayer: React.FC<PaperLayerProps> = ({
  role = 'mid',
  depth,
  translateZ,
  className = '',
  style = {},
  children,
}) => {
  const z = translateZ ?? LAYER_TRANSLATE_Z[role];

  // Kedalaman bayangan otomatis berdasarkan role jika tidak dispesifikasikan
  const actualDepth: PaperDepth =
    depth ??
    (role === 'sky' || role === 'skyline' || role === 'wall'
      ? 'back'
      : role === 'mid' || role === 'terrace'
        ? 'mid'
        : 'front');

  const shadow = PAPER_SHADOWS[actualDepth];

  return (
    <div
      className={`relative ${className}`}
      style={{
        transform: `translateZ(${z}px)`,
        transformStyle: 'preserve-3d',
        filter: shadow,
        ...style,
      }}
      data-paper-layer={role}
    >
      {children}
    </div>
  );
};
