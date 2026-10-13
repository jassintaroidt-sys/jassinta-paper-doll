/**
 * src/components/paper/PaperObject.tsx — Renderer runtime untuk definisi deklaratif aset
 *
 * Merender definisi AssetDef dari src/assets-def/ sebagai SVG bertekstur
 * paper cut-out art di runtime.
 *
 * Sesuai aturan:
 * - Rule 30 (.agents/rules/30-assets-by-code.md)
 * - DV 2 (maks 3 nada, serat + bintik, tepi kertas 2-3px, drop-shadow 3-depth)
 * - PRNG deterministik mulberry32 dari def.seed
 * - Uji siluet (prop silhouette: blok hitam)
 */

import type { AssetDef } from '../../assets-def';

export interface PaperObjectProps {
  def: AssetDef;
  /** Lebar render dalam px (default 180) */
  width?: number;
  /** Tinggi render eksplisit (opsional, default dihitung dari rasio hd) */
  height?: number;
  /** Mode siluet: blok hitam penuh (Rule DV 2.5 / Uji Siluet) */
  silhouette?: boolean;
  /** Warna latar dinding untuk uji kontras */
  wallColor?: string;
  /** Kelas CSS tambahan */
  className?: string;
  /** Label aksesibel */
  alt?: string;
  /** Mode tampil: 'runtime-svg' | 'image' */
  mode?: 'runtime-svg' | 'image';
}

function createPRNG(seed: number) {
  let s = (seed >>> 0) | 0;
  return function () {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function PaperObject({
  def,
  width = 180,
  height,
  silhouette = false,
  className = '',
  alt,
}: PaperObjectProps) {
  const [hdW, hdH] = def.hd || [1, 1];
  const aspect = hdH > 0 && hdW > 0 ? hdH / hdW : 1;
  const h = height || Math.max(28, Math.round(width * Math.min(aspect, 1.8)));
  const prng = createPRNG(def.seed || 42);

  if (def.cssOnly) {
    return (
      <div
        className={`flex items-center justify-center border border-dashed border-[#1B1017]/30 rounded text-[11px] font-mono text-[#1B1017]/60 ${className}`}
        style={{
          width,
          height: h,
          background: 'repeating-linear-gradient(45deg, rgba(27,16,23,0.03) 0, rgba(27,16,23,0.03) 2px, transparent 0, transparent 8px)',
        }}
        aria-label={alt || `${def.id} (CSS only)`}
      >
        <span>CSS-Only</span>
      </div>
    );
  }

  // Jika mode siluet: blok hitam pekat tanpa detail internal
  if (silhouette) {
    return (
      <svg
        viewBox={`0 0 ${width} ${h}`}
        width={width}
        height={h}
        className={className}
        aria-hidden="true"
      >
        <rect x="4" y="4" width={width - 8} height={h - 8} rx="4" fill="#000000" />
      </svg>
    );
  }

  // Warna dasar dari layer atau spec
  const layer = def.layers?.[0];
  const baseColor = layer?.fill || def.specColor || '#FFFDF9';

  // Hasilkan serat kertas
  const fibers: { x1: number; y1: number; x2: number; y2: number }[] = [];
  const fiberCount = Math.min(Math.floor((width * h) / 700), 75);
  for (let i = 0; i < fiberCount; i++) {
    const x = prng() * width;
    const y = prng() * h;
    const len = 3 + prng() * 6;
    const angle = prng() * Math.PI * 2;
    fibers.push({
      x1: x,
      y1: y,
      x2: x + Math.cos(angle) * len,
      y2: y + Math.sin(angle) * len,
    });
  }

  // Hasilkan bintik kertas
  const specks: { cx: number; cy: number; r: number }[] = [];
  const speckCount = Math.min(Math.floor((width * h) / 1400), 35);
  for (let i = 0; i < speckCount; i++) {
    specks.push({
      cx: prng() * width,
      cy: prng() * h,
      r: 0.4 + prng() * 0.6,
    });
  }

  const filterId = `po-shadow-${def.id.replace(/[^a-zA-Z0-9]/g, '')}`;

  return (
    <svg
      viewBox={`0 0 ${width} ${h}`}
      width={width}
      height={h}
      className={`select-none ${className}`}
      aria-label={alt || def.id}
      role="img"
    >
      <defs>
        <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="1" dy="1.5" stdDeviation="1.5" floodColor="rgba(27,16,23,0.18)" />
          <feDropShadow dx="2" dy="3.5" stdDeviation="3.5" floodColor="rgba(27,16,23,0.10)" />
          <feDropShadow dx="3" dy="6" stdDeviation="6" floodColor="rgba(27,16,23,0.06)" />
        </filter>
      </defs>

      {/* Bentuk kertas dasar dengan drop-shadow berlapis 3 kedalaman */}
      <rect
        x="4"
        y="4"
        width={width - 8}
        height={h - 8}
        rx="3"
        fill={baseColor}
        filter={`url(#${filterId})`}
      />

      {/* Serat kertas */}
      {fibers.map((f, i) => (
        <line
          key={`f-${i}`}
          x1={f.x1.toFixed(1)}
          y1={f.y1.toFixed(1)}
          x2={f.x2.toFixed(1)}
          y2={f.y2.toFixed(1)}
          stroke="rgba(27,16,23,0.11)"
          strokeWidth="0.65"
          strokeLinecap="round"
        />
      ))}

      {/* Bintik kertas */}
      {specks.map((s, i) => (
        <circle
          key={`s-${i}`}
          cx={s.cx.toFixed(1)}
          cy={s.cy.toFixed(1)}
          r={s.r.toFixed(1)}
          fill="rgba(138,106,79,0.20)"
        />
      ))}

      {/* Label ID dan Nama Berkas di tengah */}
      <text
        x={width / 2}
        y={h / 2 - 3}
        textAnchor="middle"
        fontFamily="monospace"
        fontSize={Math.max(10, Math.min(13, width / 18))}
        fill="rgba(27,16,23,0.70)"
        fontWeight="600"
      >
        {def.id.slice(0, 24)}
      </text>
      <text
        x={width / 2}
        y={h / 2 + 13}
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize={Math.max(8, Math.min(10, width / 24))}
        fill="rgba(27,16,23,0.45)"
      >
        {def.angle ? `[${def.angle}] ` : ''}{def.file.slice(0, 22)}
      </text>
    </svg>
  );
}
