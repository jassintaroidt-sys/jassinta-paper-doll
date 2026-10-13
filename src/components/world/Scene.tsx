/**
 * src/components/world/Scene.tsx
 * Komponen pembungkus scene/adegan Paper World 3D (DF 6.1 - 6.3)
 *
 * Fitur:
 * - Mode D (Datar 2D), Mode P (Panggung CSS 3D), Mode S (Story)
 * - Dinding kertas handmade berlapis dengan sambungan lembar + Pita Tepi 8px (kecuali Ch 1)
 * - Lantai CSS 3D rotateX(60deg) perspective(1200px) + teras 24px/tingkat
 * - Chapter 1: putih murni #FFFFFF tanpa lantai, tanpa skyline, tanpa pita tepi
 * - Transisi wipe antardunia 700ms
 * - Menggunakan TornSection (seed 101-606) untuk batas robekan
 */

import { type ReactNode, useEffect, useRef } from 'react';
import type { SceneConfig } from './worldTypes';
import { useWorld } from './WorldContext';
import { TornSection } from '../paper/TornSection';
import { DeckleEdge } from '../paper/DeckleEdge';

interface SceneProps {
  config: SceneConfig;
  children: ReactNode;
  /** Komponen walk strip sebelum scene ini (jika ada) */
  walkStripBefore?: ReactNode;
}

export function Scene({ config, children, walkStripBefore }: SceneProps) {
  const { setActiveSceneById, markSceneVisited, depthLevel } = useWorld();
  const sectionRef = useRef<HTMLDivElement>(null);

  // IntersectionObserver untuk chapter_reached
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
            setActiveSceneById(config.id);
            markSceneVisited(config.chapterNum);
          }
        });
      },
      { threshold: [0.25, 0.5] }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [config.id, config.chapterNum, setActiveSceneById, markSceneVisited]);

  const isCh1 = config.chapterNum === '1';
  const is3DStage = config.mode === 'P' && depthLevel !== 'calm';

  // Konten utama yang dibungkus dinding dan lantai
  const sceneContent = (
    <div
      ref={sectionRef}
      id={`ch-${config.chapterNum.replace('.', '-')}`}
      data-chapter={config.chapterNum}
      data-mode={config.mode}
      className={`relative w-full transition-colors duration-700 overflow-hidden ${
        isCh1 ? 'bg-white' : ''
      }`}
      style={{
        backgroundColor: isCh1 ? '#FFFFFF' : config.wallTint,
        minHeight: `${config.heightVh}svh`,
      }}
    >
      {/* 1. DINDING & SAMBUNGAN LEMBAR (Kecuali Ch 1) */}
      {!isCh1 && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          {/* Tekstur serat & bintik kertas handmade */}
          <div
            className="absolute inset-0 opacity-40 mix-blend-multiply"
            style={{
              backgroundImage: 'url(/assets/kit/kit_paper-tile-neutral_512.webp)',
              backgroundRepeat: 'repeat',
            }}
          />

          {/* Sambungan Lembar di kiri & kanan (tiap ±100vw) dengan tepi deckle */}
          <div className="absolute top-0 bottom-0 left-0 w-8 pointer-events-none">
            <DeckleEdge side="right" className="h-full opacity-60 scale-x-[-1]" />
          </div>
          <div className="absolute top-0 bottom-0 right-0 w-8 pointer-events-none">
            <DeckleEdge side="right" className="h-full opacity-60" />
          </div>

          {/* Pita Tepi vertikal 8px pengganti garis margin (merah cherry-red #E5173F 55%) */}
          {config.hasEdgeTape && (
            <>
              <div
                className="absolute top-0 bottom-0 left-6 w-[8px] z-10"
                style={{
                  backgroundColor: '#E5173F',
                  opacity: 0.55,
                  boxShadow: '1px 0 2px rgba(27,16,23,0.12)',
                }}
              />
              <div
                className="absolute top-0 bottom-0 right-6 w-[8px] z-10"
                style={{
                  backgroundColor: '#E5173F',
                  opacity: 0.55,
                  boxShadow: '-1px 0 2px rgba(27,16,23,0.12)',
                }}
              />
            </>
          )}
        </div>
      )}

      {/* 2. PANGGUNG 3D / STAGE PERSPECTIVE 1200PX (Mode P) */}
      <div
        className={`relative w-full h-full min-h-[inherit] flex flex-col justify-between ${
          is3DStage ? 'perspective-[1200px]' : ''
        }`}
      >
        {/* Area Konten Utama */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12 flex-1">
          {children}
        </div>

        {/* 3. LANTAI CSS 3D ROTATEX 58-64° & TERAS 24PX (Kecuali Ch 1) */}
        {config.hasFloor && !isCh1 && (
          <div
            className="relative w-full h-[140px] pointer-events-none mt-auto"
            style={{
              transform: is3DStage ? 'rotateX(60deg)' : undefined,
              transformOrigin: 'bottom center',
            }}
            aria-hidden="true"
          >
            {/* Permukaan lantai bertingkat */}
            <div
              className="absolute inset-x-0 bottom-0 h-full border-t border-[#1B1017]/10"
              style={{
                backgroundColor: config.floorTint,
                backgroundImage: 'url(/assets/kit/kit_floor-fold-warm_800.webp)',
                backgroundRepeat: 'repeat-x',
                backgroundPosition: 'bottom center',
              }}
            />
            {/* Teras depan bertingkat 24 px */}
            <div
              className="absolute inset-x-0 bottom-0 h-[24px] border-t border-white/20"
              style={{
                backgroundColor: 'rgba(27,16,23,0.08)',
                boxShadow: '0 -2px 4px rgba(27,16,23,0.10)',
              }}
            />
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="scene-wrapper w-full relative">
      {/* Walk Strip sebelum scene bila ada */}
      {walkStripBefore}

      {/* Scene dengan TornSection jika memiliki seed robekan */}
      {config.seedTornEdge ? (
        <TornSection
          seed={config.seedTornEdge as 101 | 202 | 303 | 404 | 505 | 606}
          id={`torn-${config.id}`}
        >
          {sceneContent}
        </TornSection>
      ) : (
        sceneContent
      )}
    </div>
  );
}
