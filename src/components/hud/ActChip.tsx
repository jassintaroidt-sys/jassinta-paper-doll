/**
 * src/components/hud/ActChip.tsx
 * Chip babak permanen di kiri atas dengan animasi flip 300 ms (DF 6.7)
 * Disembunyikan di Opening (Chapter 0) dan Contact (Chapter 8).
 */

import { useEffect, useState } from 'react';
import { useWorld } from '../world/WorldContext';

const ACT_TITLES = {
  1: 'ACT I · FELT',
  2: 'ACT II · SHARED',
  3: 'ACT III · REMEMBERED',
};

const ACT_COLORS = {
  1: 'bg-[#A8E6CF] text-[#1B1017] border-[#8DCFB8]',
  2: 'bg-[#BFE3F5] text-[#1B1017] border-[#A4D0E6]',
  3: 'bg-[#FFB38A] text-[#1B1017] border-[#FFA072]',
};

export function ActChip() {
  const { activeAct, activeScene } = useWorld();
  const [isFlipping, setIsFlipping] = useState(false);
  const [displayAct, setDisplayAct] = useState(activeAct);

  // Sembunyikan di Opening (0) dan Chapter 8
  const isHidden = activeScene.chapterNum === '0' || activeScene.chapterNum === '8';

  useEffect(() => {
    if (activeAct !== displayAct) {
      setIsFlipping(true);
      const timer = setTimeout(() => {
        setDisplayAct(activeAct);
        setIsFlipping(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [activeAct, displayAct]);

  if (isHidden) return null;

  return (
    <div
      className="fixed top-4 left-4 z-40 select-none pointer-events-auto"
      aria-label={`Babak aktif: ${ACT_TITLES[displayAct]}`}
    >
      <div
        className={`px-3 py-1.5 rounded-full border text-[11px] font-mono font-bold uppercase shadow-sm transition-transform duration-300 ${
          ACT_COLORS[displayAct]
        } ${isFlipping ? 'rotate-x-90 opacity-40 scale-95' : 'rotate-x-0 opacity-100 scale-100'}`}
        style={{
          boxShadow: '1px 2px 4px rgba(27,16,23,0.12)',
        }}
      >
        <span>{ACT_TITLES[displayAct]}</span>
      </div>
    </div>
  );
}
