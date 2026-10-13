/**
 * src/chapters/CreatorTrilogy/Cafe.tsx
 * Chapter 3A: The Café (Elspresso) (DF 16.3, DV 8.5)
 *
 * Mode P, 220 svh
 * - Dinding hijau #066838, serat #0A4F2C, pita tepi #F8F8C8 55%
 * - Wainscot subway krem #F8F8C8 sepertiga dinding & chair rail krem #F8F8C8
 * - Lantai kayu cocoa #5A3A2E + runner ubin #C8DACA
 * - Konter walnut #7A4A32 dengan panel inset & top krem #F8F8C8
 * - Mesin espresso chrome #C9CCD5 dengan uap
 * - Runway tiga cangkir (800 ms cubic-bezier(0.18, 0.9, 0.28, 1), 3 cangkir Elspresso):
 *     1. Elspresso Kini Hadir di Go-Food (kuliner_1.mp4, 24 views, 1 like)
 *     2. Mood Menu (kuliner_2.mp4, 38 views, 0 like)
 *     3. Meeting Package FullDay (kuliner_3.mp4, 43 views, 0 like)
 * - Struk kasir & stempel "Day-one numbers"
 * - Label hasil: "Numbers as of [bulan peluncuran]"
 * - Doll K5 (Barista) dengan pose curious saat angka kecil
 * - Jendela & sepeda Go-Food melintas tiap 20 dtk
 * - Easter egg E4: klik tas Go-Food berayun -> bubble "1 like. Still counts."
 * - Tombol INFO (4 blok) & CREDIT
 * - Transisi jembatan cangkir pink -> botol serum (wipe tirai 700 ms)
 */

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Doll } from '../../components/Doll';
import { SafeVideo } from '../../components/media/SafeVideo';
import { WORKS, type Work } from '../../data/works';
import { STRINGS } from '../../data/strings';
import { useCalmMode } from '../../hooks/useCalmMode';

interface CafeProps {
  onTransitionNext?: () => void;
}

export const CafeChapter: React.FC<CafeProps> = ({ onTransitionNext }) => {
  const { isCalm } = useCalmMode();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isReceiptOut, setIsReceiptOut] = useState(false);
  const [isBagSwinging, setIsBagSwinging] = useState(false);
  const [dollSpeech, setDollSpeech] = useState<string>(STRINGS.dollBubbles.f3A_1);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showCreditModal, setShowCreditModal] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Ambil 3 karya Elspresso dari data resmi (Works ID 24, 25, 26)
  const elspressoWorks: Work[] = useMemo(() => {
    return WORKS.filter((w) => w.company.toLowerCase().includes('elspresso'));
  }, []);

  const currentWork = elspressoWorks[activeIndex] || elspressoWorks[0];
  const launchMonth = import.meta.env.VITE_LAUNCH_MONTH || 'October 2026';

  // Struk keluar setiap kali kartu aktif berganti
  useEffect(() => {
    setIsReceiptOut(false);
    const timer = setTimeout(() => {
      setIsReceiptOut(true);
    }, 250);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  // Keyboard navigation ArrowLeft & ArrowRight
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : elspressoWorks.length - 1));
      } else if (e.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev < elspressoWorks.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'Escape') {
        setShowInfoModal(false);
        setShowCreditModal(false);
      }
    },
    [elspressoWorks.length]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Easter Egg E4: Klik tas Go-Food
  const handleBagClick = () => {
    setIsBagSwinging(true);
    setDollSpeech('1 like. Still counts.');
    setTimeout(() => {
      setIsBagSwinging(false);
    }, 1200);
  };

  // Transisi Cangkir Pink Take-away -> Botol Serum (3A -> 3B)
  const handleTransitionBridge = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsTransitioning(false);
      if (onTransitionNext) {
        onTransitionNext();
      } else {
        const el = document.getElementById('scene-ch3B');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 700);
  };

  return (
    <section
      id="scene-ch3A"
      data-chapter="3A"
      className="relative w-full min-h-[220svh] overflow-hidden bg-[#066838] text-[#FFFDF9] flex flex-col justify-between py-12 px-4 md:px-8 select-none"
      style={{
        backgroundImage: 'url(/assets/world/3A_A-01_dinding_V0.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* 1. HEADER & PAPAN NAMA 3A (APRICOT) */}
      <div className="relative z-20 max-w-5xl mx-auto pt-6 text-center">
        {/* Papan nama label kertas apricot */}
        <div className="inline-block transform rotate-1 mb-2">
          <img
            src="/assets/world/S_label-3A-1_cafe_full_800.webp"
            alt="3A · The Café (Elspresso)"
            className="h-16 md:h-20 object-contain drop-shadow-md mx-auto"
          />
        </div>

        <h2 className="text-2xl md:text-4xl font-bold font-fraunces italic text-[#F8F8C8]">
          Welcome to the café.
        </h2>
        <p className="text-xs md:text-sm font-mono text-[#F8F8C8]/80 mt-1">
          Beat: First time managing a café’s social media · Small numbers, big lessons.
        </p>
      </div>

      {/* 2. AMBIENT JENDELA DENGAN SEPEDA GO-FOOD & TAS GO-FOOD (E4) */}
      <div className="relative z-20 max-w-6xl mx-auto w-full my-6 flex items-center justify-between px-4">
        {/* Jendela dengan sepeda melintas tiap 20s */}
        <div className="relative w-48 md:w-72 h-28 md:h-40 rounded-xl overflow-hidden border-2 border-[#7A4A32] shadow-md bg-[#BFE3F5]/30">
          <img
            src="/assets/world/3A_A-12_jendela-sepeda_VS.webp"
            alt="Café Window with Delivery Bike"
            className={`w-full h-full object-contain ${
              isCalm ? '' : 'animate-pulse'
            }`}
          />
        </div>

        {/* Mesin Kopi Chrome dengan Uap */}
        <div className="relative hidden md:block w-36 h-40">
          <img
            src="/assets/world/3A_A-06_mesin-kopi_V3.webp"
            alt="Espresso Machine"
            className="w-full h-full object-contain drop-shadow-md"
          />
        </div>

        {/* Tas Pengantar Go-Food di dinding (Easter Egg E4) */}
        <div
          onClick={handleBagClick}
          className={`relative cursor-pointer group transform transition-transform ${
            isBagSwinging ? 'animate-bounce rotate-6' : 'hover:scale-105'
          }`}
          title="Click the delivery bag!"
        >
          <img
            src="/assets/world/3A_A-09_tas-pengantar_VH.webp"
            alt="Delivery Bag (Click for Easter Egg)"
            className="h-28 md:h-36 object-contain drop-shadow-lg"
          />
          <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] font-mono bg-white text-[#1B1017] px-2 py-0.5 rounded-full shadow border border-black/15 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Tap bag ↗
          </span>
        </div>
      </div>

      {/* 3. RUNWAY TIGA CANGKIR (800 ms cubic-bezier, translateZ, Glow Pulse) */}
      <div className="relative z-30 max-w-5xl mx-auto w-full my-4">
        <div className="flex items-center justify-center gap-4 md:gap-8 perspective-[1200px] min-h-[520px]">
          {elspressoWorks.map((work, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={work.id}
                onClick={() => setActiveIndex(idx)}
                className={`relative transition-all duration-800 cursor-pointer ${
                  isActive
                    ? 'z-30 scale-100 opacity-100'
                    : 'z-10 scale-75 opacity-75 blur-[1.5px] hover:opacity-90'
                }`}
                style={{
                  transform: isActive
                    ? 'translateZ(40px)'
                    : `translateZ(-240px) translateX(${(idx - activeIndex) * 40}px)`,
                  transitionTimingFunction: 'cubic-bezier(0.18, 0.9, 0.28, 1)',
                }}
              >
                {/* Luminous Glow Border saat aktif */}
                <div
                  className={`relative rounded-2xl overflow-hidden p-2 transition-shadow duration-500 ${
                    isActive
                      ? 'shadow-[0_0_35px_rgba(255,46,147,0.7)] border-3 border-[#FF2E93]'
                      : 'border-2 border-white/40'
                  }`}
                  style={{
                    backgroundColor: isActive ? 'rgba(255,253,249,0.95)' : 'rgba(255,253,249,0.75)',
                  }}
                >
                  {/* Label Atas: Platform & Jenis Konten */}
                  <div className="flex items-center justify-between px-2 py-1 mb-1 border-b border-black/10 text-[#1B1017]">
                    <span className="text-[10px] font-mono font-bold uppercase text-[#066838]">
                      Instagram · {work.type}
                    </span>
                    <span className="text-[10px] font-mono text-[#1B1017]/60">
                      2025
                    </span>
                  </div>

                  {/* Layar Video Vertikal 9:16 (Max Height ~480px) */}
                  <div className="relative w-[220px] md:w-[260px] h-[390px] md:h-[460px] rounded-lg overflow-hidden bg-black shadow-inner">
                    <SafeVideo
                      src={`videos/${work.mediaFile}`}
                      className="w-full h-full object-cover"
                      autoPlayWhenVisible={true}
                      muted={true}
                      loop={true}
                      platformUrl="https://www.instagram.com/reel/DMUwp8qBd5J/"
                      platformName="Instagram"
                    />
                  </div>

                  {/* Label Bawah: Judul Konten & Metrik */}
                  <div className="mt-2 text-center text-[#1B1017]">
                    <h4 className="font-fraunces font-bold text-xs md:text-sm truncate max-w-[240px]">
                      {work.title}
                    </h4>
                    <div className="text-[11px] font-mono font-semibold text-[#FF2E93]">
                      {work.metrics}
                    </div>
                  </div>
                </div>

                {/* Tatakan Cangkir Kertas di bawah ponsel */}
                <div className="w-36 h-4 mx-auto mt-2 rounded-full bg-[#F8F8C8] shadow-sm border border-black/15" />
              </div>
            );
          })}
        </div>

        {/* KONTROL RUNWAY: Panah Stiker 44px & Titik 1/3 - 3/3 */}
        <div className="flex items-center justify-center gap-6 mt-6">
          <button
            onClick={() => setActiveIndex((prev) => (prev > 0 ? prev - 1 : elspressoWorks.length - 1))}
            className="w-11 h-11 rounded-full flex items-center justify-center bg-[#FF2E93] text-white font-bold text-lg shadow-lg border-2 border-white hover:scale-110 active:scale-95 transition-transform"
            aria-label="Previous cup"
          >
            ←
          </button>

          <div className="flex items-center gap-2">
            {elspressoWorks.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-3.5 h-3.5 rounded-full transition-all ${
                  i === activeIndex
                    ? 'w-8 bg-[#FF2E93] shadow-md'
                    : 'bg-white/60 hover:bg-white'
                }`}
                aria-label={`Go to item ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setActiveIndex((prev) => (prev < elspressoWorks.length - 1 ? prev + 1 : 0))}
            className="w-11 h-11 rounded-full flex items-center justify-center bg-[#FF2E93] text-white font-bold text-lg shadow-lg border-2 border-white hover:scale-110 active:scale-95 transition-transform"
            aria-label="Next cup"
          >
            →
          </button>
        </div>

        {/* TOMBOL INFO & CREDIT */}
        <div className="flex items-center justify-center gap-4 mt-4">
          <button
            onClick={() => setShowInfoModal(true)}
            className="px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-[#F8F8C8] text-[#1B1017] border border-black/15 shadow hover:bg-white transition-colors"
          >
            ℹ INFO (What I Did &amp; Learned)
          </button>
          <button
            onClick={() => setShowCreditModal(true)}
            className="px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-white/80 text-[#1B1017] border border-black/15 shadow hover:bg-white transition-colors"
          >
            CREDIT ↗
          </button>
        </div>
      </div>

      {/* 4. STRUK KASIR DAY-ONE NUMBERS (3A.3) & DOLL K5 BARISTA */}
      <div className="relative z-20 max-w-4xl mx-auto w-full my-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
        {/* Struk Kasir Bergerigi Bawah dengan Stempel Merah */}
        <div
          className={`relative p-6 rounded-lg bg-[#FFFDF9] text-[#1B1017] border-2 border-black/15 shadow-2xl transition-all duration-600 ${
            isReceiptOut ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 96%, 95% 100%, 90% 96%, 85% 100%, 80% 96%, 75% 100%, 70% 96%, 65% 100%, 60% 96%, 55% 100%, 50% 96%, 45% 100%, 40% 96%, 35% 100%, 30% 96%, 25% 100%, 20% 96%, 15% 100%, 10% 96%, 5% 100%, 0% 96%)',
          }}
        >
          <div className="border-b border-dashed border-black/20 pb-3 mb-3 text-center">
            <h5 className="font-mono font-bold text-sm tracking-wider uppercase">
              ELSPRESSO RECEIPT
            </h5>
            <div className="text-[10px] font-mono text-[#1B1017]/60">
              CRAFTED BY JASSINTA ROID TRINITI
            </div>
          </div>

          <div className="space-y-1.5 font-mono text-xs">
            <div className="flex justify-between">
              <span>WORK:</span>
              <span className="font-bold truncate max-w-[180px]">{currentWork.title}</span>
            </div>
            <div className="flex justify-between">
              <span>METRICS:</span>
              <span className="font-bold text-[#E5173F]">{currentWork.metrics}</span>
            </div>
            <div className="flex justify-between">
              <span>STATUS:</span>
              <span className="font-bold text-[#066838]">VERIFIED REAL</span>
            </div>
          </div>

          {/* Stempel Day-one numbers (A-15) */}
          <div className="mt-4 pt-3 border-t border-dashed border-black/20 flex items-center justify-between">
            <div className="inline-block border-2 border-[#E5173F] text-[#E5173F] font-mono font-bold text-[11px] px-2.5 py-1 rounded-sm transform -rotate-6">
              ★ DAY-ONE NUMBERS ★
            </div>
            <div className="text-[10px] font-mono text-[#1B1017]/60">
              Numbers as of {launchMonth}
            </div>
          </div>
        </div>

        {/* Doll K5 (Barista) & Speech Bubble */}
        <div className="flex flex-col items-center justify-center">
          <Doll
            costume="K5"
            pose="hold-1"
            view="F"
            expression="curious"
            scale={0.88}
            speechBubbleText={dollSpeech}
          />
        </div>
      </div>

      {/* 5. JEMBATAN TRANSISI: Cangkir Pink -> Botol Serum (3A.5) */}
      <div className="relative z-20 max-w-md mx-auto text-center my-6">
        <button
          onClick={handleTransitionBridge}
          disabled={isTransitioning}
          className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#FFD6E8] text-[#1B1017] border-2 border-white shadow-lg hover:bg-white hover:scale-105 active:scale-95 transition-all"
        >
          <img
            src="/assets/world/3A_A-20_cangkir-take-away_V0.webp"
            alt="Pink Take-away Cup"
            className="w-8 h-10 object-contain"
          />
          <div className="text-left font-mono">
            <div className="text-[10px] uppercase tracking-wider text-[#066838] font-bold">
              Next Destination →
            </div>
            <div className="text-xs font-bold font-fraunces">
              Take coffee to 3B The Glow Clinic
            </div>
          </div>
        </button>
      </div>

      {/* 6. WAINSCOT SUBWAY & LANTAI KAYU COCOA DI DASAR */}
      <div className="relative w-full border-t border-black/20 mt-auto">
        {/* Wainscot subway krem #F8F8C8 */}
        <div
          className="w-full h-16 border-b border-[#7A4A32]"
          style={{
            backgroundImage: 'url(/assets/world/3A_A-02_wainscot-subway_V0.webp)',
            backgroundRepeat: 'repeat-x',
          }}
          aria-hidden="true"
        />
        {/* Lantai kayu cocoa & ubin #C8DACA */}
        <div
          className="w-full h-24"
          style={{
            backgroundImage: 'url(/assets/world/3A_A-04_lantai_VT.webp)',
            backgroundRepeat: 'repeat-x',
          }}
          aria-hidden="true"
        />
      </div>

      {/* MODAL / DRAWER INFO (4 BLOK BERSUSUN) */}
      {showInfoModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setShowInfoModal(false)}
        >
          <div
            className="relative w-full max-w-xl p-6 rounded-2xl bg-[#FFF8EE] text-[#1B1017] border-4 border-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-black/10 pb-3 mb-4">
              <h3 className="font-fraunces text-xl font-bold">
                Work Information: {currentWork.title}
              </h3>
              <button
                onClick={() => setShowInfoModal(false)}
                className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center font-bold hover:bg-black/20"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 font-poppins text-xs md:text-sm">
              {/* Blok 1: What I did */}
              <div className="p-3 rounded-lg bg-white border border-black/10">
                <div className="font-mono font-bold text-[11px] text-[#066838] uppercase">
                  01 · What I did
                </div>
                <div className="mt-1 text-[#1B1017]/85">
                  During my time at ELS Corp, I created and managed culinary video content for Elspresso, our new subsidiary in F&amp;B sector.
                </div>
              </div>

              {/* Blok 2: Result */}
              <div className="p-3 rounded-lg bg-white border border-black/10">
                <div className="font-mono font-bold text-[11px] text-[#FF2E93] uppercase">
                  02 · Result
                </div>
                <div className="mt-1 text-[#1B1017]/85 font-semibold">
                  {currentWork.metrics} (Day-one numbers as of {launchMonth})
                </div>
              </div>

              {/* Blok 3: What I learned */}
              <div className="p-3 rounded-lg bg-white border border-black/10">
                <div className="font-mono font-bold text-[11px] text-[#B08418] uppercase">
                  03 · What I learned
                </div>
                <div className="mt-1 text-[#1B1017]/85 italic font-fraunces">
                  “{currentWork.whatILearned || 'A launch needs a reason to care, not just an announcement.'}”
                </div>
              </div>

              {/* Blok 4: Next time */}
              <div className="p-3 rounded-lg bg-white border border-black/10">
                <div className="font-mono font-bold text-[11px] text-[#1B1017] uppercase">
                  04 · Next time
                </div>
                <div className="mt-1 text-[#1B1017]/85">
                  Engage local coffee communities and offer tasting teasers 2 weeks before launching digital orders.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL CREDIT */}
      {showCreditModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setShowCreditModal(false)}
        >
          <div
            className="relative w-full max-w-md p-6 rounded-2xl bg-white text-[#1B1017] border-4 border-[#066838] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-black/10 pb-3 mb-4">
              <h3 className="font-fraunces text-xl font-bold">
                Project Credit
              </h3>
              <button
                onClick={() => setShowCreditModal(false)}
                className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center font-bold hover:bg-black/20"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="space-y-2 font-mono text-xs">
              <div>
                <span className="text-[#1B1017]/60">Company:</span>{' '}
                <span className="font-bold">Elspresso (ELS Corp)</span>
              </div>
              <div>
                <span className="text-[#1B1017]/60">Creator:</span>{' '}
                <span className="font-bold">Jassinta Roid Triniti</span>
              </div>
              <div>
                <span className="text-[#1B1017]/60">Instagram:</span>{' '}
                <a
                  href="https://www.instagram.com/reel/DMUwp8qBd5J/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#FF2E93] hover:underline"
                >
                  @elspresso_coffepastry ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
