/**
 * src/components/hud/HUD.tsx
 * Lapisan HUD Global (DF 6.8 & PB 6)
 *
 * Zona layar:
 * - Kiri atas: Chip babak (ActChip)
 * - Tengah atas: Tombol INFO (Chapter 3), pin Awareness/Engagement/Conversion
 * - Kanan atas: INDEX (peta Paper Town)
 * - Kiri bawah: Stiker Quick Look (Take the shortcut)
 * - Kanan bawah: CREDIT, Cassette
 * - Tepi kiri: Rel Progres
 */

import { ActChip } from './ActChip';
import { ProgressRail } from './ProgressRail';
import { EdgeTab } from './EdgeTab';
import { ActCard } from './ActCard';
import { useWorld } from '../world/WorldContext';

interface HUDProps {
  onOpenIndex?: () => void;
  onOpenQuickLook?: () => void;
  onOpenInfo?: () => void;
  onOpenCredit?: () => void;
}

export function HUD({
  onOpenIndex,
  onOpenQuickLook,
  onOpenInfo,
  onOpenCredit,
}: HUDProps) {
  const { activeScene } = useWorld();
  const isCh0 = activeScene.chapterNum === '0';
  const isCh3 = activeScene.chapterNum.startsWith('3');

  return (
    <div className="hud-layer pointer-events-none select-none">
      {/* 1. Kiri Atas: Chip Babak */}
      <ActChip />

      {/* 2. Tengah Atas: Pin Beat & Tombol INFO (Chapter 3) */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 pointer-events-auto">
        {/* Pin Awareness (Ch 2), Engagement (Ch 3), Conversion (Ch 4) */}
        {activeScene.chapterNum === '2' && (
          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-[#E5173F] text-white shadow-sm animate-bounce">
            PIN 1: AWARENESS
          </span>
        )}
        {isCh3 && (
          <>
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-[#FF8DC7] text-[#1B1017] shadow-sm animate-bounce">
              PIN 2: ENGAGEMENT
            </span>
            <button
              onClick={onOpenInfo}
              className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#FFF1A8] text-[#1B1017] border border-[#1B1017]/15 shadow-sm hover:scale-105 transition"
            >
              INFO
            </button>
          </>
        )}
        {activeScene.chapterNum === '4' && (
          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-[#FF2E93] text-white shadow-sm animate-bounce">
            PIN 3: CONVERSION
          </span>
        )}
      </div>

      {/* 3. Kanan Atas: Tombol INDEX (peta Paper Town) */}
      {!isCh0 && (
        <div className="fixed top-4 right-4 z-40 pointer-events-auto">
          <button
            onClick={onOpenIndex}
            className="px-3.5 py-1.5 rounded-full bg-white border border-[#1B1017]/20 text-xs font-mono font-bold text-[#1B1017] shadow-md hover:bg-[#FFFDF9] hover:scale-105 active:scale-95 transition flex items-center gap-1.5"
            aria-label="Buka INDEX peta Paper Town"
          >
            <span className="w-2 h-2 rounded-full bg-[#E5173F]" />
            <span>INDEX</span>
          </button>
        </div>
      )}

      {/* 4. Kiri Bawah: Stiker Quick Look */}
      {!isCh0 && (
        <div className="fixed bottom-7 left-4 z-40 pointer-events-auto">
          <button
            onClick={onOpenQuickLook}
            className="px-3 py-1.5 rounded-full bg-[#FFF1A8] border border-[#1B1017]/20 text-[11px] font-semibold text-[#1B1017] shadow-md hover:scale-105 active:scale-95 transition transform -rotate-2"
            title="Take the shortcut"
          >
            In a hurry? Take the shortcut →
          </button>
        </div>
      )}

      {/* 5. Kanan Bawah: Tombol CREDIT */}
      {!isCh0 && (
        <div className="fixed bottom-7 right-4 z-40 pointer-events-auto">
          <button
            onClick={onOpenCredit}
            className="px-3 py-1.5 rounded-full bg-[#FFFDF9] border border-[#1B1017]/20 text-[11px] font-mono text-[#1B1017]/80 shadow hover:bg-white transition"
          >
            CREDIT
          </button>
        </div>
      )}

      {/* 6. Tepi Kiri: Rel Progres Desktop */}
      <ProgressRail />

      {/* 7. Tepi Kanan: Edge Tab */}
      <EdgeTab />

      {/* 8. Pop-up Kartu Babak (3.0.1 dan 5.1) */}
      <ActCard />
    </div>
  );
}
