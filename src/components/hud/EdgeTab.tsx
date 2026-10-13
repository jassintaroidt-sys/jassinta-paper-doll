/**
 * src/components/hud/EdgeTab.tsx
 * Label kertas kecil (0.3 Hd) tanpa teks yang mengintip dari tepi kanan layar
 * pada 20% terakhir tiap chapter, kecuali Chapter 8 (DF 6.6 & 6.3).
 *
 * Dekoratif (aria-hidden), tidak bisa diklik, hilang di Calm mode.
 */

import { useWorld } from '../world/WorldContext';
import { useCalmMode } from '../../hooks/useCalmMode';

const NEXT_CHAPTER_COLORS: Record<string, string> = {
  '0': '#FFFFFF', // Chapter 1 (putih)
  '1': '#FFF1A8', // Chapter 2 (butter)
  '2': '#BFE3F5', // Chapter 3 (baby-blue)
  '3.0': '#A9C4A0', // 3A (sage)
  '3A': '#FFD6E8', // 3B (blush)
  '3B': '#A7D8F5', // 3C (sky-pastel)
  '3C': '#E8A5B8', // Chapter 4 (dusty-rose)
  '4': '#F3E3B8', // Chapter 5 (aged-paper)
  '5': '#2A0F2E', // Chapter 6 (plum)
  '6': '#D9D3D6', // Chapter 7 (warm-grey)
  '7': '#FFD6E8', // Chapter 8 (blush)
};

export function EdgeTab() {
  const { activeScene, depthLevel } = useWorld();
  const { isCalm } = useCalmMode();

  // Tidak muncul di Chapter 8 atau di Calm mode
  if (activeScene.chapterNum === '8' || isCalm || depthLevel === 'calm') {
    return null;
  }

  const nextColor = NEXT_CHAPTER_COLORS[activeScene.chapterNum] || '#FFD6E8';

  return (
    <div
      className="fixed right-0 top-1/2 -translate-y-1/2 z-30 pointer-events-none select-none transition-transform duration-500 transform translate-x-3 hover:translate-x-0"
      aria-hidden="true"
    >
      <div
        className="w-8 h-20 rounded-l-md border-l-2 border-y-2 border-white/60 shadow-lg"
        style={{
          backgroundColor: nextColor,
          filter: 'drop-shadow(-2px 3px 4px rgba(27,16,23,0.18))',
        }}
      >
        {/* Tepi lipatan kecil */}
        <div className="w-1.5 h-full bg-black/10 rounded-l" />
      </div>
    </div>
  );
}
