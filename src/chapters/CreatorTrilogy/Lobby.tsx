/**
 * src/chapters/CreatorTrilogy/Lobby.tsx
 * Chapter 3.0: The Creator Lobby (DF 16.2, DV 8.4)
 *
 * Mode D, 250 svh
 * - Dinding handmade lilac #D4C1F5, serat #BBA7E6, pita tepi #E5173F 55%
 * - Lantai belah ketupat mint #D4F2E4 & lilac #D4C1F5
 * - Tiga pintu dengan panel brand penuh:
 *     1. Café (#066838)
 *     2. Klinik (#B08418)
 *     3. Terminal (#066838 + trim emas)
 * - 6 video reveal diperkecil (kuliner_1, 2, kecantikan_2, 3, travel_1, 2)
 * - Kartu babak 3.0.1 (ACT II · SHARED) & headline cerita
 * - Narasi 3.0.2 & kejujuran angka kecil (DF 4.3 Honest Portfolio)
 * - Gelembung notifikasi melayang termasuk 1 ♥
 * - Titik progres A, B, C
 * - Doll K4 (Kardigan pastel, hijab wisteria #A98BDA, ponsel casing pink)
 */

import React, { useState, useEffect } from 'react';
import { Doll } from '../../components/Doll';
import { SafeVideo } from '../../components/media/SafeVideo';
import { STRINGS } from '../../data/strings';
import { useCalmMode } from '../../hooks/useCalmMode';

interface LobbyProps {
  onSelectDoor?: (door: '3A' | '3B' | '3C') => void;
}

export const CreatorTrilogyLobby: React.FC<LobbyProps> = ({ onSelectDoor }) => {
  const { isCalm } = useCalmMode();
  const [showActCard, setShowActCard] = useState(true);
  const [hoveredDoor, setHoveredDoor] = useState<string | null>(null);
  const [slidingDoor, setSlidingDoor] = useState<'3A' | '3B' | '3C' | null>(null);

  // Kartu Babak 3.0.1 fade 400ms, tampil 1.5 dtk lalu menghilang perlahan
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowActCard(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  const handleDoorClick = (target: '3A' | '3B' | '3C') => {
    setSlidingDoor(target);
    setTimeout(() => {
      if (onSelectDoor) {
        onSelectDoor(target);
      } else {
        const el = document.getElementById(target === '3A' ? 'scene-ch3A' : target === '3B' ? 'scene-ch3B' : 'scene-ch3C');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 700);
  };

  // Enam video reveal ringkas (3.0.3)
  const revealVideos = [
    { src: 'videos/kuliner_1.mp4', label: 'Elspresso 01' },
    { src: 'videos/kuliner_2.mp4', label: 'Elspresso 02' },
    { src: 'videos/kecantikan_2.mp4', label: 'Elsthetic 02' },
    { src: 'videos/kecantikan_3.mp4', label: 'Elsthetic 03' },
    { src: 'videos/travel_1.mp4', label: 'Karamina 01' },
    { src: 'videos/travel_2.mp4', label: 'Karamina 02' },
  ];

  return (
    <section
      id="creator-lobby"
      data-chapter="3.0"
      className="relative w-full min-h-[250svh] overflow-hidden bg-[#D4C1F5] text-[#1B1017] flex flex-col justify-between py-12 px-4 md:px-8 select-none"
      style={{
        backgroundImage: 'url(/assets/world/3-0_L-01_dinding-lobi_V0.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* 1. KARTU BABAK II · SHARED (3.0.1) */}
      {showActCard && (
        <div
          className={`fixed top-24 left-1/2 -translate-x-1/2 z-50 transition-opacity duration-500 pointer-events-none ${
            showActCard ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          aria-live="polite"
        >
          <div className="relative w-[340px] md:w-[460px] p-6 rounded-2xl bg-[#BFE3F5] border-4 border-white shadow-2xl text-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-white text-[#FF2E93] shadow-sm mb-3">
              ACT II · SHARED
            </span>
            <h3 className="font-fraunces text-xl md:text-2xl font-bold italic text-[#1B1017]">
              What I made, and what actually happened.
            </h3>
            <p className="mt-2 text-xs font-mono text-[#1B1017]/70">
              Three companies · Three worlds · Real metrics
            </p>
          </div>
        </div>
      )}

      {/* 2. TITIK PROGRES A, B, C (L-09) & EDGE TAB 3A */}
      <div className="absolute top-6 left-6 z-30 flex items-center gap-2 bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#1B1017]/15 shadow-sm">
        <span className="text-[11px] font-mono font-bold text-[#1B1017]/60 mr-1">TRILOGY:</span>
        <button
          onClick={() => handleDoorClick('3A')}
          className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold bg-[#FF2E93] text-white shadow"
          title="3A: The Café"
        >
          A
        </button>
        <button
          onClick={() => handleDoorClick('3B')}
          className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold bg-white text-[#1B1017] border border-[#1B1017]/20 hover:bg-[#FFD6E8]"
          title="3B: The Glow Clinic"
        >
          B
        </button>
        <button
          onClick={() => handleDoorClick('3C')}
          className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold bg-white text-[#1B1017] border border-[#1B1017]/20 hover:bg-[#A7D8F5]"
          title="3C: The Terminal"
        >
          C
        </button>
      </div>

      {/* 3. HEADLINE & PAPAN NAMA (3.0.1 & 3.0.2) */}
      <div className="relative z-20 max-w-4xl mx-auto pt-16 text-center">
        {/* Papan nama label kertas 3.0 */}
        <div className="inline-block mb-4 transform -rotate-1">
          <img
            src="/assets/world/S_label-3-0_chapter03_full_800.webp"
            alt="Chapter 03 · The Creator Trilogy"
            className="h-16 md:h-20 object-contain drop-shadow-md mx-auto"
          />
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1B1017] leading-tight">
          <span className="font-fraunces italic font-normal block md:inline">From Ordinary Content to </span>
          <span className="font-gloock text-[#066838]">Memorable Stories</span>
        </h1>

        {/* Narasi 3.0.2 */}
        <p className="mt-6 text-sm md:text-lg font-fraunces italic text-[#1B1017]/85 max-w-2xl mx-auto leading-relaxed bg-white/40 p-4 rounded-xl backdrop-blur-sm border border-white/60 shadow-sm">
          {STRINGS.ch3.trilogyQuote}
        </p>

        {/* Gelembung notifikasi melayang (L-07) */}
        {!isCalm && (
          <div className="relative h-20 my-4 pointer-events-none overflow-hidden">
            <img
              src="/assets/world/3-0_L-07_gelembung-notifikasi_V0.webp"
              alt="Floating notifications with 1 heart"
              className="max-h-20 object-contain mx-auto animate-float"
            />
          </div>
        )}
      </div>

      {/* 4. REVEAL 6 VIDEO LOBI DIPERKECIL (3.0.3) */}
      <div className="relative z-20 max-w-5xl mx-auto my-8 w-full">
        <div className="text-center mb-3">
          <span className="text-[11px] font-mono tracking-wider uppercase text-[#1B1017]/60 bg-white/60 px-3 py-1 rounded-full border border-black/10">
            Selected Campaign Previews (Muted Autoplay)
          </span>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 px-4">
          {revealVideos.map((vid, idx) => (
            <div
              key={idx}
              className="relative aspect-[9/16] rounded-xl overflow-hidden border-2 border-white shadow-md transform hover:scale-105 transition-transform bg-[#F8F8EE]"
              style={{
                transform: `rotate(${(idx % 2 === 0 ? 1 : -1) * (idx * 0.8)}deg)`,
              }}
            >
              <SafeVideo
                src={vid.src}
                className="w-full h-full object-cover"
                autoPlayWhenVisible={true}
                muted={true}
                loop={true}
              />
              <div className="absolute bottom-1 inset-x-1 bg-black/60 backdrop-blur-xs text-white text-[9px] font-mono py-0.5 text-center rounded">
                {vid.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. TIGA PINTU & PERNYATAAN KEJUJURAN (3.0.4) */}
      <div className="relative z-20 max-w-5xl mx-auto w-full my-12">
        {/* Gelembung Doll 3.0.4 */}
        <div className="text-center mb-6">
          <span className="inline-block px-4 py-2 rounded-2xl bg-white border-2 border-[#1B1017] shadow-md font-shantell text-sm md:text-base font-bold text-[#1B1017]">
            {STRINGS.dollBubbles.f3_0_4}
          </span>
        </div>

        {/* Tiga Pintu Brand Penuh */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-end">
          {/* Pintu 1: Café (Elspresso) */}
          <div
            className={`relative group cursor-pointer transition-transform duration-300 ${
              slidingDoor === '3A' ? 'scale-95 opacity-50' : 'hover:-translate-y-2'
            }`}
            onClick={() => handleDoorClick('3A')}
            onMouseEnter={() => setHoveredDoor('3A')}
            onMouseLeave={() => setHoveredDoor(null)}
          >
            <div className="relative rounded-2xl overflow-hidden border-4 border-[#066838] shadow-xl bg-[#5A3A2E]">
              <img
                src="/assets/world/3-0_L-04_pintu-cafe_V0.webp"
                alt="Elspresso Café Door"
                className="w-full h-[360px] md:h-[420px] object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-[#066838] text-white p-3 text-center border-t border-white/20">
                <div className="text-xs font-mono font-bold tracking-widest text-[#F8F8C8]">01 · THE CAFÉ</div>
                <div className="font-fraunces font-bold text-base">Elspresso</div>
                <div className="text-[10px] text-white/80 font-mono">Video Content Creator</div>
              </div>
            </div>
            {hoveredDoor === '3A' && (
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#FFF8EE] text-[#1B1017] text-xs font-mono px-3 py-1 rounded-full border border-black/20 shadow-md animate-bounce">
                Real numbers. Yes, even the small ones. ↗
              </div>
            )}
          </div>

          {/* Pintu 2: Klinik (Elsthetic) */}
          <div
            className={`relative group cursor-pointer transition-transform duration-300 ${
              slidingDoor === '3B' ? 'scale-95 opacity-50' : 'hover:-translate-y-2'
            }`}
            onClick={() => handleDoorClick('3B')}
            onMouseEnter={() => setHoveredDoor('3B')}
            onMouseLeave={() => setHoveredDoor(null)}
          >
            <div className="relative rounded-2xl overflow-hidden border-4 border-[#B08418] shadow-xl bg-[#FFFDF9]">
              <img
                src="/assets/world/3-0_L-05_pintu-klinik_V0.webp"
                alt="Elsthetic Clinic Door"
                className="w-full h-[360px] md:h-[420px] object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-[#B08418] text-white p-3 text-center border-t border-white/20">
                <div className="text-xs font-mono font-bold tracking-widest text-[#F0A810]">02 · THE CLINIC</div>
                <div className="font-fraunces font-bold text-base">Elsthetic &amp; Aishi Beauty</div>
                <div className="text-[10px] text-white/80 font-mono">Digital Marketing &amp; Videos</div>
              </div>
            </div>
            {hoveredDoor === '3B' && (
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#FFF8EE] text-[#1B1017] text-xs font-mono px-3 py-1 rounded-full border border-black/20 shadow-md animate-bounce">
                Real numbers. Yes, even the small ones. ↗
              </div>
            )}
          </div>

          {/* Pintu 3: Terminal (Karamina Tour) */}
          <div
            className={`relative group cursor-pointer transition-transform duration-300 ${
              slidingDoor === '3C' ? 'scale-95 opacity-50' : 'hover:-translate-y-2'
            }`}
            onClick={() => handleDoorClick('3C')}
            onMouseEnter={() => setHoveredDoor('3C')}
            onMouseLeave={() => setHoveredDoor(null)}
          >
            <div className="relative rounded-2xl overflow-hidden border-4 border-[#066838] shadow-xl bg-[#F8F8C8]">
              <img
                src="/assets/world/3-0_L-06_gerbang-keberangkatan_V0.webp"
                alt="Karamina Tour Departure Gate"
                className="w-full h-[360px] md:h-[420px] object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-[#066838] text-white p-3 text-center border-t border-white/20">
                <div className="text-xs font-mono font-bold tracking-widest text-[#D4A64A]">03 · THE TERMINAL</div>
                <div className="font-fraunces font-bold text-base">Karamina Tour</div>
                <div className="text-[10px] text-white/80 font-mono">Haji &amp; Umroh Storytelling</div>
              </div>
            </div>
            {hoveredDoor === '3C' && (
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#FFF8EE] text-[#1B1017] text-xs font-mono px-3 py-1 rounded-full border border-black/20 shadow-md animate-bounce">
                Real numbers. Yes, even the small ones. ↗
              </div>
            )}
          </div>
        </div>

        {/* Pernyataan Kejujuran di Bawah Pintu (DF 4.3 & 16.2) */}
        <div className="mt-8 text-center">
          <div className="inline-block p-4 rounded-xl bg-[#FFF8EE] border-2 border-[#1B1017]/20 shadow-sm max-w-xl">
            <p className="font-fraunces italic font-semibold text-sm md:text-base text-[#1B1017]">
              “{STRINGS.ch3.honestyTag}”
            </p>
          </div>
        </div>
      </div>

      {/* 6. DOLL & LANTAI BELAH KETUPAT */}
      <div className="relative z-30 flex items-center justify-center my-8">
        <Doll
          costume="K4"
          pose="point"
          view="F"
          expression="smile"
          scale={0.85}
          speechBubbleText={STRINGS.dollBubbles.f3_0_4}
        />
      </div>

      {/* Visual Lantai Belah Ketupat Mint & Lilac (L-02) */}
      <div
        className="relative w-full h-32 border-t border-black/10 mt-auto"
        style={{
          backgroundImage: 'url(/assets/world/3-0_L-02_lantai-lobi_VT.webp)',
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'bottom center',
        }}
        aria-hidden="true"
      />
    </section>
  );
};
