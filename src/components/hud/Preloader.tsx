/**
 * src/components/hud/Preloader.tsx
 * Preloader bertema kertas dan stiker (DF 10.5)
 *
 * Durasi normal: ≤ 2 detik
 * Jika > 4 detik: teks tambahan "Taking longer than usual..." dan tombol "Skip to the quick look".
 */

import { useState, useEffect } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [isSlow, setIsSlow] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulasi loading aset kritis maksimum 2 detik
    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, Math.floor((elapsed / 1600) * 100));
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(onComplete, 200);
      }
    }, 50);

    // Deteksi jika lebih dari 4 detik
    const slowTimer = setTimeout(() => {
      setIsSlow(true);
    }, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(slowTimer);
    };
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-50 bg-[#FFFDF9] flex flex-col items-center justify-center p-6 select-none"
      role="status"
      aria-label="Loading Jassinta's Paper Doll Journey"
    >
      <div className="max-w-sm w-full text-center">
        {/* Ikon Doll & Zipper */}
        <div className="w-20 h-20 mx-auto mb-4 relative flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-[#FFD6E8] border border-[#1B1017]/15 flex items-center justify-center shadow-md animate-pulse">
            <span className="font-serif italic font-bold text-2xl text-[#1B1017]">J</span>
          </div>
        </div>

        <h1 className="font-serif italic text-2xl font-bold text-[#1B1017] mb-1">
          Jassinta's Paper Doll Journey
        </h1>
        <p className="font-mono text-xs text-[#1B1017]/60 mb-6 uppercase tracking-wider">
          Folding the Paper Town · 2026
        </p>

        {/* Progress Bar Kertas */}
        <div className="w-full h-2.5 bg-[#E8DACC] rounded-full overflow-hidden border border-[#1B1017]/10 p-0.5 mb-3">
          <div
            className="h-full bg-[#E5173F] rounded-full transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Jika loading lambat > 4 detik */}
        {isSlow && (
          <div className="mt-4 pt-4 border-t border-[#1B1017]/10 animate-fade-in">
            <p className="text-xs text-[#1B1017]/70 mb-2">Taking longer than usual...</p>
            <a
              href="#/quick-look"
              className="inline-block text-xs font-semibold px-4 py-1.5 rounded-full bg-[#FFF1A8] border border-[#1B1017]/20 text-[#1B1017] hover:bg-[#FFE885] transition"
            >
              Skip to the quick look →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
