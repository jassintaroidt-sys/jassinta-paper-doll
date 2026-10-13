/**
 * src/components/world/WalkStrip.tsx
 * Komponen Walk Strip (DF 6.5 & DV 9.2)
 *
 * Zona scroll mode D (~50 vh) tempat doll melangkah di garis jahitan
 * melewati skyline jauh dan membawa benda penghubung antar-chapter.
 *
 * Fitur:
 * - Garis jahitan putus-putus (*dashed stitch line*)
 * - Jejak sepatu hitam (*footsteps*) dari 0.7 dan bertahan sampai Ch 8
 * - Benda penghubung yang dibawa doll (tabel 10 transisi PB)
 * - Walk strip 4->5 jalan terbalik (mundur/sepia)
 */

import { type ReactNode } from 'react';
import type { WalkStripConfig } from './worldTypes';

interface WalkStripProps {
  config: WalkStripConfig;
  children?: ReactNode;
}

export function WalkStrip({ config, children }: WalkStripProps) {
  return (
    <div
      id={`walk-${config.id}`}
      data-walk-strip={config.id}
      className={`w-full relative overflow-hidden bg-[#F8F5EE] border-y border-[#1B1017]/10 flex flex-col justify-between ${
        config.reverseDirection ? 'filter sepia-[0.4]' : ''
      }`}
      style={{
        minHeight: `${config.heightVh}svh`,
      }}
    >
      {/* 1. SKYLINE JAUH (Lapisan 0.2x) */}
      <div className="absolute inset-x-0 top-0 h-40 pointer-events-none opacity-80 flex items-center justify-around px-12">
        {config.skylineAssets.map((asset) => (
          <img
            key={asset}
            src={`/assets/strips/${asset}`}
            alt=""
            className="max-h-32 object-contain"
            style={{ transform: config.reverseDirection ? 'scaleX(-1)' : undefined }}
            loading="lazy"
          />
        ))}
      </div>

      {/* Konten / Keterangan Walk Strip */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-6 text-center">
        <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-white/80 border border-[#1B1017]/15 text-[#1B1017]/80 shadow-sm mb-2">
          WALK STRIP · {config.title}
        </span>
        <div className="text-xs text-[#1B1017]/60">
          Membawa:{' '}
          <span className="font-semibold text-[#E5173F] bg-white px-2 py-0.5 rounded border border-[#E5173F]/20">
            {config.connectedItem}
          </span>
        </div>
        {children}
      </div>

      {/* 2. JALUR JALAN BERJAHITAN & JEJAK SEPATU HITAM */}
      <div className="relative w-full h-24 mt-auto flex flex-col justify-end">
        {/* Jejak Sepatu Hitam (Frame 0.7 dan strip 7->8, jarak 90 px, berpasangan kiri-kanan) */}
        {config.hasFootsteps && (
          <div className="absolute inset-x-0 bottom-6 h-6 flex items-center justify-around pointer-events-none px-8 opacity-75">
            {[...Array(8)].map((_, idx) => (
              <div
                key={`foot-${idx}`}
                className="flex flex-col gap-1 items-center"
                style={{ transform: `translateX(${idx % 2 === 0 ? '-4px' : '4px'})` }}
              >
                {/* Jejak sol sepatu hitam kecil 12x5 px */}
                <span className="w-3 h-1.5 rounded-full bg-[#1F1F1F] inline-block shadow-sm" />
              </div>
            ))}
          </div>
        )}

        {/* Garis Jahitan Putus-Putus Utama (Dashed stitch line) */}
        <div className="w-full border-b-2 border-dashed border-[#FF8DC7] opacity-80 mb-4" />

        {/* Tepi lantai kertas bawah */}
        <div className="w-full h-3 bg-[#E8DACC] border-t border-[#1B1017]/10" />
      </div>
    </div>
  );
}
