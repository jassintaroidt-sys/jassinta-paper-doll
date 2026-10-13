/**
 * src/components/world/WorldJourney.tsx
 * Orkestrator satu halaman utama Paper Doll Journey (DF 6, DF 8, PB 6 & 7)
 *
 * Menyusun 12 adegan (World Set) dan 7 walk strip secara berurutan,
 * mengelola deep-link rute hash, status Opening scroll-lock, HUD, dan Preloader.
 */

import { useEffect, useState, useMemo } from 'react';
import { SCENES, WALK_STRIPS } from './worldData';
import { Scene } from './Scene';
import { WalkStrip } from './WalkStrip';
import { HUD } from '../hud/HUD';
import { Preloader } from '../hud/Preloader';
import { GlobalFooter } from '../hud/GlobalFooter';
import { PlaceLabel } from '../hud/PlaceLabel';
import { WorldProvider, useWorld } from './WorldContext';
import { LenisProvider, useLenis } from './LenisProvider';
import { useHashRoute, type ChapterRoute } from '../../hooks/useHashRoute';
import { CreatorTrilogyLobby, CafeChapter } from '../../chapters/CreatorTrilogy';

// Pemetaan ChapterRoute hash ke id elemen HTML Scene
const ROUTE_TO_ELEMENT_ID: Record<ChapterRoute, string> = {
  'personal-brand': 'ch-1',
  'writing-portfolio': 'ch-2',
  'content-marketing': 'ch-3-0',
  'content-marketing/cafe': 'ch-3A',
  'content-marketing/clinic': 'ch-3B',
  'content-marketing/terminal': 'ch-3C',
  'example-strategy': 'ch-4',
  'project-campus': 'ch-5',
  'podcast': 'ch-6',
  'archive': 'ch-7',
  'contact': 'ch-8',
};

function JourneyContent() {
  const { current } = useHashRoute();
  const { scrollTo } = useLenis();
  const { isOpeningUnlocked, unlockOpening, depthLevel, setDepthLevel } = useWorld();
  const [preloaderDone, setPreloaderDone] = useState(false);

  // Deep linking scroll saat rute hash berubah ke suatu chapter
  useEffect(() => {
    if (current.isChapter && current.chapterTarget) {
      const targetId = ROUTE_TO_ELEMENT_ID[current.chapterTarget];
      if (targetId) {
        // Jika belum dibuka dan user langsung ke chapter tertentu, buka lock
        if (!isOpeningUnlocked) {
          unlockOpening();
        }
        setTimeout(() => {
          scrollTo(`#${targetId}`, { offset: -20 });
        }, 150);
      }
    }
  }, [current.isChapter, current.chapterTarget, isOpeningUnlocked, unlockOpening, scrollTo]);

  // Peta WalkStrip per chapter asal
  const walkStripsByFrom = useMemo(() => {
    const map = new Map<string, typeof WALK_STRIPS[0]>();
    WALK_STRIPS.forEach((ws) => {
      map.set(ws.fromChapter, ws);
    });
    return map;
  }, []);

  return (
    <div className="world-journey-container relative w-full bg-[#FFFDF9] min-h-screen text-[#1B1017]">
      {/* 1. Preloader (≤ 2 dtk / > 4 dtk fallback) */}
      {!preloaderDone && <Preloader onComplete={() => setPreloaderDone(true)} />}

      {/* 2. HUD Global */}
      <HUD
        onOpenIndex={() => {
          // Buka index peta bila ada dialog / overlay
          const ch0El = document.getElementById('ch-0');
          if (ch0El) scrollTo('#ch-0');
        }}
        onOpenQuickLook={() => {
          window.location.hash = '#/plain';
        }}
        onOpenInfo={() => {
          // Lompat ke scene 3.0
          scrollTo('#ch-3-0');
        }}
        onOpenCredit={() => {
          scrollTo('#ch-8');
        }}
      />

      {/* 3. Baris Pengontrol Mode Cepat di Header (Dev & A11y Friendly) */}
      <div className="fixed top-4 left-44 z-40 hidden md:flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full border border-[#1B1017]/15 shadow-sm text-[10px] font-mono">
        <span className="text-[#1B1017]/60">DEPTH:</span>
        <button
          onClick={() => setDepthLevel('full')}
          className={`px-2 py-0.5 rounded ${depthLevel === 'full' ? 'bg-[#FF8DC7] font-bold text-[#1B1017]' : 'hover:bg-black/5'}`}
        >
          FULL
        </button>
        <button
          onClick={() => setDepthLevel('lite')}
          className={`px-2 py-0.5 rounded ${depthLevel === 'lite' ? 'bg-[#FF8DC7] font-bold text-[#1B1017]' : 'hover:bg-black/5'}`}
        >
          LITE
        </button>
        <button
          onClick={() => setDepthLevel('calm')}
          className={`px-2 py-0.5 rounded ${depthLevel === 'calm' ? 'bg-[#FF8DC7] font-bold text-[#1B1017]' : 'hover:bg-black/5'}`}
        >
          CALM
        </button>
      </div>

      {/* 4. Susunan 12 Scene & 7 Walk Strip */}
      <main id="main-content" role="main" className="relative w-full">
        {SCENES.map((scene) => {
          const walkStrip = walkStripsByFrom.get(scene.chapterNum);

          return (
            <div key={scene.id} className="scene-block relative">
              <Scene config={scene}>
                {/* Header Scene dengan Papan Nama */}
                <div className="flex flex-col items-start gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-white/80 border border-[#1B1017]/20 shadow-sm">
                      CHAPTER {scene.chapterNum}
                    </span>
                    <span className="text-xs font-mono text-[#1B1017]/70">
                      {scene.actTitle} · {scene.region}
                    </span>
                  </div>

                  {/* Papan nama tempat (PlaceLabel) */}
                  <PlaceLabel labelId={scene.labelId} />

                  <h2 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-[#1B1017]">
                    {scene.name}
                  </h2>
                </div>

                {/* Konten Khas Per Scene */}
                <div className="py-2 min-h-[30vh] flex flex-col justify-center">
                  {scene.chapterNum === '0' && (
                    <div className="max-w-xl bg-white/90 p-6 rounded-lg border-2 border-[#1B1017] shadow-[4px_4px_0px_#1B1017]">
                      <p className="font-serif text-base mb-4 text-[#1B1017]/80">
                        Loker sekolah nomor 26. Di dalamnya tersimpan seragam santai dan catatan perjalanan Jassinta.
                      </p>
                      {!isOpeningUnlocked ? (
                        <button
                          onClick={unlockOpening}
                          className="px-6 py-2.5 rounded-full bg-[#E5173F] text-white font-mono font-bold text-sm tracking-wider hover:bg-[#c91234] transition shadow-md active:scale-95"
                        >
                          BUKA LOKER (OPEN) →
                        </button>
                      ) : (
                        <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded border border-emerald-200">
                          <span>✓ Loker Terbuka · Scroll ke bawah untuk melangkah keluar</span>
                        </div>
                      )}
                    </div>
                  )}

                  {scene.chapterNum === '3.0' && <CreatorTrilogyLobby />}

                  {scene.chapterNum === '3A' && <CafeChapter />}

                  {scene.chapterNum !== '0' && scene.chapterNum !== '3.0' && scene.chapterNum !== '3A' && (
                    <div className="max-w-2xl bg-white/70 backdrop-blur-sm p-6 rounded-lg border border-[#1B1017]/15">
                      <div className="text-xs font-mono text-[#1B1017]/60 mb-2">
                        MODE: {scene.mode} · KOSTUM: {scene.outfit}
                      </div>
                      <p className="text-sm text-[#1B1017]/80 leading-relaxed font-sans">
                        Tempat karya dan arsip di {scene.placeName}. Benda penghubung:{' '}
                        <span className="font-semibold text-[#E5173F]">{scene.connectedObject}</span>.
                      </p>
                    </div>
                  )}
                </div>
              </Scene>

              {/* Walk Strip penghubung bila ada setelah scene ini */}
              {walkStrip && <WalkStrip config={walkStrip} />}
            </div>
          );
        })}
      </main>

      {/* 5. Footer Layar Penuh 20 px */}
      <GlobalFooter />
    </div>
  );
}

export function WorldJourney() {
  return (
    <WorldProvider>
      <LenisProvider>
        <JourneyContent />
      </LenisProvider>
    </WorldProvider>
  );
}
export default WorldJourney;
