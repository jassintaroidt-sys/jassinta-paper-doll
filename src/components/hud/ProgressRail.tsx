/**
 * src/components/hud/ProgressRail.tsx
 * Rel progres vertikal di tepi kiri desktop (DF 6.8)
 * Garis jahitan vertikal tipis dengan ikon kepala doll kecil.
 * Disembunyikan di Opening (Chapter 0) dan Contact (Chapter 8) serta mobile.
 */

import { useWorld } from '../world/WorldContext';

export function ProgressRail() {
  const { scrollProgress, activeScene } = useWorld();
  const isHidden = activeScene.chapterNum === '0' || activeScene.chapterNum === '8';

  if (isHidden) return null;

  const topPercent = Math.min(Math.max(scrollProgress * 100, 4), 94);

  return (
    <div
      className="hidden md:flex fixed top-24 bottom-24 left-3 z-30 flex-col items-center pointer-events-none select-none"
      aria-hidden="true"
    >
      {/* Garis jahitan vertikal putus-putus */}
      <div className="w-0.5 h-full border-l-2 border-dashed border-[#FF8DC7] opacity-60" />

      {/* Kepala doll penanda progres */}
      <div
        className="absolute w-5 h-5 rounded-full bg-[#1F1F1F] shadow border border-white flex items-center justify-center transition-all duration-150"
        style={{ top: `${topPercent}%` }}
      >
        <span className="w-2.5 h-3 rounded-full bg-[#E8B795]" />
      </div>
    </div>
  );
}
