/**
 * src/components/hud/ActCard.tsx
 * Kartu babak transisi di frame 3.0.1 dan 5.1 (DF 6.7)
 * Tampil 1,5 detik, fade in 400 ms, otomatis hilang saat scroll.
 */

import { useState, useEffect } from 'react';
import { useWorld } from '../world/WorldContext';

export function ActCard() {
  const { activeScene } = useWorld();
  const [visibleCard, setVisibleCard] = useState<{ act: number; title: string; subtitle: string } | null>(null);

  useEffect(() => {
    // Babak II dimulai di 3.0
    if (activeScene.chapterNum === '3.0') {
      setVisibleCard({
        act: 2,
        title: 'ACT II · SHARED',
        subtitle: 'Three companies, three worlds, one question: What do people actually care about?',
      });
      const t = setTimeout(() => setVisibleCard(null), 1500);
      return () => clearTimeout(t);
    }

    // Babak III dimulai di Chapter 5
    if (activeScene.chapterNum === '5') {
      setVisibleCard({
        act: 3,
        title: 'ACT III · REMEMBERED',
        subtitle: 'Rewind to where it began: Listening, archiving, and leaving something behind.',
      });
      const t = setTimeout(() => setVisibleCard(null), 1500);
      return () => clearTimeout(t);
    }

    setVisibleCard(null);
  }, [activeScene.chapterNum]);

  // Listener scroll: langsung hilangkan kartu jika user scroll
  useEffect(() => {
    const onScroll = () => setVisibleCard(null);
    window.addEventListener('scroll', onScroll, { passive: true, once: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [visibleCard]);

  if (!visibleCard) return null;

  return (
    <div
      className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center p-6 bg-black/10 backdrop-blur-[2px] transition-opacity duration-400 animate-fade-in"
      aria-live="polite"
    >
      <div className="bg-[#FFFDF9] border border-[#1B1017]/15 rounded-2xl p-8 max-w-md w-full shadow-2xl text-center transform scale-100 transition-transform">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#FFD6E8] text-[#1B1017] mb-3">
          {visibleCard.title}
        </span>
        <h2 className="text-xl font-bold font-serif text-[#1B1017] mb-2">
          {visibleCard.act === 2 ? 'The Creator Trilogy' : 'The Memory Hall & Radio Booth'}
        </h2>
        <p className="text-xs text-[#1B1017]/75 leading-relaxed font-sans">
          {visibleCard.subtitle}
        </p>
      </div>
    </div>
  );
}
