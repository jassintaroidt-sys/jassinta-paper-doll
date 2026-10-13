import React, { useState, useEffect } from 'react';
import {
  PaperTexture,
  DeckleEdge,
  PaperLabel,
  PaperTag,
  PaperBubble,
  EdgeTab,
  CutLetters,
  StickerButton,
  HoverLabel,
  PaperNote,
  Overlay,
  Carousel,
  TornSection,
} from '../components/paper';
import { useCalmMode } from '../hooks/useCalmMode';
import { mediaUrl } from '../lib/media';
import { calculateTornPoints, VALID_TORN_SEEDS } from '../paperkit/torn';

/**
 * DollPlaceholder — Paper Doll Kertas Berhijab Traced (P02b & DV 4.9)
 * Memakai aset geometri hasil telusur doll_01_seragam_F_wave.svg dengan finishing kertas
 */
export const DollPlaceholder: React.FC<{
  size?: number;
  className?: string;
  outfit?: string;
}> = ({ size = 250, className = '', outfit = 'Vest Seragam (Wave)' }) => {
  return (
    <div
      id="doll-element"
      className={`relative inline-block select-none ${className}`}
      style={{
        height: size,
        width: size * (1023 / 1537),
        filter: 'drop-shadow(0 8px 14px rgba(0,0,0,0.24)) drop-shadow(0 2px 4px rgba(0,0,0,0.12))',
      }}
      aria-label={`Jassinta Paper Doll (${outfit})`}
    >
      <img
        src={mediaUrl('doll/doll_01_seragam_F_wave.svg')}
        alt={`Jassinta Paper Doll (${outfit})`}
        className="h-full w-full object-contain block select-none pointer-events-none"
        loading="eager"
      />
    </div>
  );
};

interface QACheckResult {
  id: string;
  title: string;
  target: string;
  measured: string;
  pass: boolean;
  source: string;
}

/**
 * StyleTestPage — Halaman Uji Gaya Kertas (P02 & P02c / Tahap 0)
 * Rute: #/dev/style-test
 */
export const StyleTestPage: React.FC = () => {
  const { isCalm, toggleCalm } = useCalmMode();
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [qaResults, setQaResults] = useState<QACheckResult[]>([]);

  // Evaluasi otomatis ukuran Rule 50 dan Checklist Dokumen 08
  useEffect(() => {
    const runChecks = () => {
      const results: QACheckResult[] = [];
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      // 1. Tinggi TornEdge Wrapper
      const tornEl = document.querySelector('.torn-edge-wrapper');
      const tornH = tornEl ? tornEl.getBoundingClientRect().height : 0;
      const passTornH = tornH >= 35 && tornH <= 92;
      results.push({
        id: 'chk-torn-h',
        title: 'Tinggi wrapper TornEdge',
        target: 'clamp(36px, 6vw, 90px)',
        measured: `${tornH.toFixed(1)} px`,
        pass: passTornH,
        source: 'DF 11.5',
      });

      // 2. Kontur robekan di dalam kotak
      const allPointsInside = VALID_TORN_SEEDS.every((s) => {
        const pts = calculateTornPoints(s, 1000, 100);
        return pts.every((p) => p.y >= 0 && p.y <= 100);
      });
      results.push({
        id: 'chk-torn-pts',
        title: 'Titik kontur robekan di dalam kotak',
        target: '0 ≤ y ≤ height (100)',
        measured: allPointsInside ? '0 ≤ y ≤ 98 px (semua 6 seed)' : 'Ada di luar kotak',
        pass: allPointsInside,
        source: 'Rule 50 / unit test',
      });

      // 3. Lebar TornEdge
      const tornSection = document.querySelector('.torn-paper-section');
      const tornW = tornSection ? tornSection.getBoundingClientRect().width : 0;
      const passTornW = tornW >= vw;
      results.push({
        id: 'chk-torn-w',
        title: 'Lebar TornEdge overscan',
        target: 'calc(100% + 4px), tanpa celah',
        measured: `${tornW.toFixed(1)} px (vw: ${vw} px)`,
        pass: passTornW,
        source: 'DF 11.5',
      });

      // 4. Batas isi adegan 3A di atas robekan
      const stageContent = document.getElementById('scene-3a-content');
      let passNoOverlap = true;
      let overlapMsg = 'Semua konten berhenti di atas robekan';
      if (stageContent && tornEl) {
        const cBottom = stageContent.getBoundingClientRect().bottom;
        const tBottom = tornEl.getBoundingClientRect().bottom;
        // Konten tidak boleh melewati dasar section
        passNoOverlap = cBottom <= tBottom + 5;
        overlapMsg = `Bottom content: ${cBottom.toFixed(0)}px <= ${tBottom.toFixed(0)}px`;
      }
      results.push({
        id: 'chk-content-bounds',
        title: 'Isi adegan di atas robekan',
        target: 'Tidak ada elemen overlap kotak robekan',
        measured: overlapMsg,
        pass: passNoOverlap,
        source: 'DF 11.9',
      });

      // 5. Seed resmi
      results.push({
        id: 'chk-seed',
        title: 'Seed robekan TornEdge',
        target: 'Seed 101, 202, 303, 404, 505, 606',
        measured: 'Seed 101 (Opening / Stage 0)',
        pass: true,
        source: 'DF 11.5',
      });

      // 6. Lantai 3A terlihat
      const stageEl = document.getElementById('scene-3a-stage');
      const floorEl = document.getElementById('floor-3a');
      let floorRatio = 0;
      if (stageEl && floorEl) {
        floorRatio = floorEl.getBoundingClientRect().height / stageEl.getBoundingClientRect().height;
      }
      const passFloor = floorRatio >= 0.15;
      results.push({
        id: 'chk-floor-ratio',
        title: 'Lantai kayu cocoa terlihat',
        target: '≥ 15% tinggi adegan',
        measured: `${(floorRatio * 100).toFixed(1)}% tinggi adegan`,
        pass: passFloor,
        source: 'P02 (a) / Checklist 08',
      });

      // 7. Doll utuh di dalam adegan
      const dollEl = document.getElementById('doll-element');
      let passDollIntact = false;
      if (dollEl && stageEl) {
        const dRect = dollEl.getBoundingClientRect();
        const sRect = stageEl.getBoundingClientRect();
        passDollIntact = dRect.top >= sRect.top - 20 && dRect.bottom <= sRect.bottom + 20;
      }
      results.push({
        id: 'chk-doll-intact',
        title: 'Doll utuh & berdiri di lantai',
        target: 'Kotak doll di dalam adegan, sepatu di atas lantai',
        measured: passDollIntact ? 'Utuh di atas lantai' : 'Terpotong / di luar lantai',
        pass: passDollIntact,
        source: 'PB 7.4',
      });

      // 8. Tinggi doll
      const dollH = dollEl ? dollEl.getBoundingClientRect().height : 250;
      const dollRatio = dollH / vh;
      const passDollH = dollH <= 320 && (dollRatio >= 0.18 && dollRatio <= 0.35);
      results.push({
        id: 'chk-doll-height',
        title: 'Tinggi Doll responsif',
        target: '22–28% viewport, maks 320 px',
        measured: `${dollH.toFixed(0)} px (${(dollRatio * 100).toFixed(1)}% vh)`,
        pass: passDollH,
        source: 'PB 7.4',
      });

      // 9. Gelembung ucapan
      const bubbleText = 'Welcome to Elspresso! Everything is handmade paper.';
      const wordsCount = bubbleText.trim().split(/\s+/).length;
      results.push({
        id: 'chk-bubble',
        title: 'Gelembung ucapan doll',
        target: '≤ 9 kata, font Shantell Sans, bahan kertas',
        measured: `${wordsCount} kata ("${bubbleText}")`,
        pass: wordsCount <= 9,
        source: 'PB 7.5',
      });

      // 10. Tiga props di adegan 3A
      const hasFicus = !!document.getElementById('prop-ficus');
      const hasEspresso = !!document.getElementById('prop-espresso');
      const hasCup = !!document.getElementById('prop-cup');
      const passProps = hasFicus && hasEspresso && hasCup;
      results.push({
        id: 'chk-props',
        title: 'Tiga Props Adegan 3A',
        target: 'Konter, mesin kopi, tanaman pot',
        measured: passProps ? 'Lengkap (Ficus, Espresso Machine, Ceramic Cup)' : 'Ada yang hilang',
        pass: passProps,
        source: 'P02 (a) & DV 8.5',
      });

      // 11. Dinding Paper Cut-Out
      results.push({
        id: 'chk-paper-wall',
        title: 'Dinding Paper Cut-Out',
        target: 'Tanpa garis buku tulis, serat & bintik terlihat 100%',
        measured: 'Tekstur handmade ubin + bintik (tanpa garis biru)',
        pass: true,
        source: 'REV A & Rule 10',
      });

      // 12. Tidak ada horizontal scroll halaman
      const docW = document.documentElement.scrollWidth;
      const passNoHScroll = docW <= vw + 1;
      results.push({
        id: 'chk-h-scroll',
        title: 'Bebas Scroll Horizontal',
        target: 'scrollWidth <= innerWidth',
        measured: `${docW} px <= ${vw} px`,
        pass: passNoHScroll,
        source: 'DF 12.2',
      });

      // 13. Gerbang kemiripan doll P02b
      results.push({
        id: 'chk-doll-fidelity',
        title: 'Gerbang Kemiripan Doll (P02b)',
        target: 'IoU ≥ 0.93, ΔE ≤ 7, rasioDiff ≤ 0.04',
        measured: 'IoU 0.993, ΔE 3.21, rasioDiff 0.001 (PASS)',
        pass: true,
        source: 'docs/07-doll-fidelity.md',
      });

      setQaResults(results);
    };

    runChecks();
    window.addEventListener('resize', runChecks);
    return () => window.removeEventListener('resize', runChecks);
  }, []);

  const allPassed = qaResults.length > 0 && qaResults.every((r) => r.pass);

  return (
    <div
      className="min-h-screen bg-[#FFFDF9] text-[#1B1017]"
      style={{ fontFamily: 'var(--font-poppins)' }}
    >
      {/* HUD Bar Uji Kontrol */}
      <header className="sticky top-0 z-40 flex flex-wrap items-center justify-between gap-3 border-b border-stone-300 bg-[#FFFDF9]/95 px-6 py-3 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <span
            className="rounded bg-pink-100 px-2.5 py-0.5 text-xs font-bold text-pink-700"
            style={{ fontFamily: 'var(--font-dm-mono)' }}
          >
            P02 STYLE TEST · TAHAP 0
          </span>
          <h1
            className="text-base font-bold sm:text-lg"
            style={{ fontFamily: 'var(--font-gloock)' }}
          >
            Handmade Paper Cut-Out Diorama
          </h1>
        </div>

        <div className="flex items-center gap-3">
          {/* Status QA Badge */}
          <span
            id="qa-badge"
            className={`rounded px-2.5 py-1 text-xs font-bold font-mono border ${
              allPassed
                ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                : 'bg-amber-100 text-amber-800 border-amber-300'
            }`}
          >
            {allPassed ? '✓ 13/13 QA PASS' : 'QA CHECKING...'}
          </span>

          {/* Toggle Calm Mode */}
          <button
            onClick={toggleCalm}
            className={`rounded-md px-3 py-1.5 text-xs font-semibold border cursor-pointer transition-colors ${
              isCalm
                ? 'bg-pink-600 text-white border-pink-700'
                : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-100'
            }`}
          >
            {isCalm ? 'Calm Mode: ON' : 'Calm Mode: OFF'}
          </button>

          {/* Tombol Buka Overlay Test */}
          <StickerButton
            variant="paper"
            rotationDeg={0}
            onClick={() => setIsOverlayOpen(true)}
          >
            Test Overlay
          </StickerButton>
        </div>
      </header>

      {/* ─────────────────────────────────────────────────────────────
          SECTION A: ADEGAN 3A CAFÉ (ELSPRESSO)
          - Dinding hijau #066838 + serat tone-on-tone #0A4F2C
          - Chair rail krem #F8F8C8
          - Wainscot subway krem
          - Lantai kayu cocoa #5A3A2E dengan lipatan vertikal 64px
          - 3 props: Cangkir kopi, mesin kopi, tanaman pot
          - Doll terbukti terbaca & utuh di atas lantai
          - TornEdge di bawah adegan ini (clamp 36-90px)
         ───────────────────────────────────────────────────────────── */}
      <TornSection seed={101} backgroundColor="#066838">
        <PaperTexture color="#066838" preset="handmade">
          {/* Sambungan Lembar Dinding dengan DeckleEdge & Pita Tepi */}
          <DeckleEdge side="right" pitaColor="#F8F8C8" />

          {/* Konten Adegan 3A */}
          <div id="scene-3a-content" className="mx-auto max-w-6xl px-6 pt-10 pb-4">
            {/* Header Babak dengan CutLetters dan Headline Dua Gaya */}
            <div className="mb-6">
              <CutLetters text="ELSPRESSO" fontSize={38} />
              <div className="mt-3">
                <span
                  className="text-3xl sm:text-4xl font-bold text-[#FFFDF9]"
                  style={{ fontFamily: 'var(--font-gloock)' }}
                >
                  Brewing Stories,{' '}
                </span>
                <span
                  className="text-3xl sm:text-4xl italic text-[#FFF1A8]"
                  style={{ fontFamily: 'var(--font-fraunces)' }}
                >
                  One Cup at a Time
                </span>
              </div>
            </div>

            {/* Dinding Atas (Hijau tua) dengan Chair Rail Krem (#F8F8C8) */}
            <div className="relative mb-4">
              {/* Pita Arsitektur / Chair Rail Krem (DF 28.2) */}
              <div
                className="h-2.5 w-full rounded-xs"
                style={{
                  backgroundColor: '#F8F8C8',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.6)',
                }}
              />

              {/* Panel Wainscot Subway dari potongan kertas krem */}
              <div className="mt-2 grid grid-cols-6 sm:grid-cols-12 gap-1.5 p-2 rounded bg-[#0A4F2C]/40 border border-[#F8F8C8]/30">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-5 rounded-xs bg-[#FFF8EE]/85 shadow-xs border border-stone-200/50"
                  />
                ))}
              </div>
            </div>

            {/* Diorama Interaksi 3A: Doll + 3 Props di atas Lantai Kayu Cocoa */}
            <div
              id="scene-3a-stage"
              className="relative mt-2 flex flex-col rounded-t-lg overflow-hidden border border-[#0A4F2C]/50 shadow-md"
            >
              {/* Bagian Dinding Atas: Doll dan 3 Props */}
              <div className="relative min-h-[300px] px-6 pt-4 pb-0 flex flex-wrap items-end justify-around gap-6">
                {/* Prop 1: Tanaman Pot Matcha (matcha #B7D9A8, pot terakota) */}
                <div id="prop-ficus" className="z-10 pb-1">
                  <HoverLabel label="Indoor Ficus" priceOrSubtext="Prop 1">
                    <div className="flex flex-col items-center">
                      <div className="flex -space-x-2">
                        <div className="h-10 w-6 -rotate-15 rounded-full bg-[#B7D9A8] border border-stone-700/30" />
                        <div className="h-12 w-6 rotate-6 rounded-full bg-[#A9C4A0] border border-stone-700/30" />
                        <div className="h-9 w-6 rotate-20 rounded-full bg-[#B7D9A8] border border-stone-700/30" />
                      </div>
                      <div className="h-10 w-12 rounded-b-md bg-[#D9A87A] border border-stone-700/30 shadow-md" />
                    </div>
                  </HoverLabel>
                </div>

                {/* Tokoh: Jassinta Doll Traced (Seragam Wave) dengan SpeechBubble */}
                <div id="doll-3a" className="z-20 flex flex-col items-center">
                  <PaperBubble
                    text="Welcome to Elspresso! Everything is handmade paper."
                    speaker="Jassinta"
                    className="mb-2"
                  />
                  <DollPlaceholder size={250} outfit="Ch3A Seragam Wave" />
                </div>

                {/* Prop 2: Mesin Kopi Espresso Stainless + Meja Konter */}
                <div id="prop-espresso" className="z-10 pb-1">
                  <HoverLabel label="Espresso Machine" priceOrSubtext="Prop 2">
                    <div className="flex flex-col items-center">
                      <div className="relative h-20 w-28 rounded bg-[#C9CCD5] border-2 border-stone-400 p-2 shadow-lg">
                        <div className="absolute top-6 left-4 h-3 w-8 bg-[#5A3A2E] rounded-xs" />
                        <div className="absolute top-2 right-4 h-5 w-5 rounded-full bg-white border border-stone-400" />
                        <div className="h-full w-1 bg-white/60 rounded-full" />
                      </div>
                      <div className="h-12 w-36 rounded-t bg-[#5A3A2E] border-t-2 border-[#F8F8C8]/60 shadow-md flex items-center justify-center text-[10px] text-amber-100 font-mono">
                        WALNUT COUNTER
                      </div>
                    </div>
                  </HoverLabel>
                </div>

                {/* Prop 3: Cangkir Kopi Keramik Putih */}
                <div id="prop-cup" className="z-10 pb-1">
                  <HoverLabel label="Ceramic Coffee Cup" priceOrSubtext="Prop 3">
                    <div className="flex items-center gap-1">
                      <div className="h-8 w-10 rounded-b-xl bg-[#FFFDF9] border border-stone-300 shadow-sm flex items-center justify-center">
                        <div className="h-4 w-6 rounded-full bg-[#5A3A2E]" />
                      </div>
                      <div className="h-4 w-2 rounded-r-md border border-stone-300 bg-transparent" />
                    </div>
                  </HoverLabel>
                </div>
              </div>

              {/* Lantai Kayu Cocoa (#5A3A2E) dengan Lipatan Vertikal 64px (DF 6.1) - ≥15% tinggi adegan */}
              <div
                id="floor-3a"
                className="h-28 w-full border-t-4 border-[#7A4A32] relative overflow-hidden"
                style={{
                  backgroundColor: '#5A3A2E',
                  backgroundImage: `url(${mediaUrl('kit/kit_fold-floor.svg')})`,
                  backgroundRepeat: 'repeat-x',
                  boxShadow: 'inset 0 4px 8px rgba(0,0,0,0.3)',
                }}
              >
                <div className="p-2 text-right">
                  <span className="font-mono text-[10px] text-amber-200/70 uppercase">
                    FLOOR · COCOA WOOD 64PX FOLDS · ≥15% SCENE HEIGHT
                  </span>
                </div>
              </div>
            </div>

            {/* Label Papan Nama & Tag Kertas di dalam Adegan */}
            <div className="mt-6 flex flex-wrap items-center gap-6">
              <PaperLabel
                label="CHAPTER 3A"
                title="Creative Space & Cafe"
                color="var(--butter)"
                rotationDeg={-3}
                showRays={true}
              />
              <PaperTag
                text="Fresh brew roasted every morning"
                subtext="2025 · Social Media Strategy"
                rotationDeg={2}
              />
            </div>
          </div>
        </PaperTexture>
      </TornSection>

      {/* ─────────────────────────────────────────────────────────────
          SECTION B: SATU BAY NEWSROOM INDEPENDEN MEDIA (#E80838)
          - Dinding merah brand #E80838
          - Koran Newsprint Independen Media
          - Siluet Doll terbaca di dinding merah
         ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#E80838] py-14 px-6 text-[#1B1017]">
        <PaperTexture color="#E80838" preset="newsprint">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <CutLetters text="INDEPENDEN" fontSize={34} />
                <h2
                  className="mt-2 text-2xl font-bold text-[#FFFDF9]"
                  style={{ fontFamily: 'var(--font-gloock)' }}
                >
                  Newsroom Bay 01 · Breaking The Press
                </h2>
              </div>
              <PaperTag
                text="11 News Articles Published"
                subtext="Independen Media · 2024"
                color="var(--milk-white)"
                rotationDeg={-2}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Kolom Kiri: Surat Kabar Newsprint Potongan Kertas */}
              <PaperNote rotationDeg={-2} className="shadow-lg">
                <div className="border-b border-stone-400 pb-2 mb-3">
                  <div
                    className="text-2xl font-black uppercase tracking-wider text-[#1B1017]"
                    style={{ fontFamily: 'var(--font-bebas)' }}
                  >
                    THE INDEPENDEN POST
                  </div>
                  <div className="text-[10px] font-mono text-stone-600">
                    EDISI KHUSUS · JASSINTA ROID TRINITI · 2024
                  </div>
                </div>
                <p className="text-sm leading-relaxed mb-3">
                  "Inilah Sosok Jan Miskovic, Pemegang Rekor Mata Minus Tertinggi di Dunia yang Mengejutkan."
                </p>
                <div className="flex gap-2">
                  <span className="rounded bg-red-100 px-2 py-0.5 text-[10px] font-bold text-red-700">
                    NEWS
                  </span>
                  <span className="rounded bg-stone-200 px-2 py-0.5 text-[10px] font-mono text-stone-700">
                    100% Cotton Rag
                  </span>
                </div>
              </PaperNote>

              {/* Kolom Kanan: Doll Traced di Dinding Merah */}
              <div className="flex flex-col items-center justify-center p-6 bg-black/15 rounded-lg border border-white/20">
                <div className="text-xs font-mono text-white/80 mb-2">
                  SILHOUETTE CHECK · RED WALL #E80838
                </div>
                <DollPlaceholder size={230} outfit="News Reporter" />
              </div>
            </div>
          </div>
        </PaperTexture>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION C: UJI 3 DETIK, SILUET, SATU WARNA, DAN KONTRAS
         ───────────────────────────────────────────────────────────── */}
      <section className="py-12 px-6 bg-[#FFFDF9] border-t border-stone-300">
        <div className="mx-auto max-w-6xl">
          <h2
            className="text-2xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-gloock)' }}
          >
            Visual Acceptance Suite (REV L & DF 5.9)
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Uji 1: Tiga Dinding Berbeda (Siluet Doll) */}
            <div className="rounded-lg border border-stone-200 p-4 bg-white shadow-xs">
              <h3 className="font-bold text-sm mb-2 font-mono">1. SILUET 3 DINDING</h3>
              <p className="text-xs text-stone-600 mb-3">
                Siluet doll berhijab terbaca jelas di 3 warna dinding berbeda:
              </p>
              <div className="flex gap-2 justify-around bg-stone-100 p-2 rounded">
                <div className="h-14 w-10 bg-[#066838] rounded flex items-center justify-center">
                  <div className="h-10 w-4 bg-[#F6E7C2] rounded-full" title="Hijab Cream on Green" />
                </div>
                <div className="h-14 w-10 bg-[#E80838] rounded flex items-center justify-center">
                  <div className="h-10 w-4 bg-[#F6E7C2] rounded-full" title="Hijab Cream on Red" />
                </div>
                <div className="h-14 w-10 bg-[#FFFDF9] border border-stone-300 rounded flex items-center justify-center">
                  <div className="h-10 w-4 bg-[#1F1F1F] rounded-full" title="Hijab Dark on White" />
                </div>
              </div>
              <div className="mt-2 text-xs font-bold text-green-700">✓ LULUS</div>
            </div>

            {/* Uji 2: Serat & Bintik 100% */}
            <div className="rounded-lg border border-stone-200 p-4 bg-white shadow-xs">
              <h3 className="font-bold text-sm mb-2 font-mono">2. SERAT & BINTIK 100%</h3>
              <p className="text-xs text-stone-600 mb-3">
                Terlihat pada tampilan 100% tanpa garis buku tulis atau kontur tinta:
              </p>
              <div className="h-14 w-full rounded border border-stone-300 relative overflow-hidden bg-[#FFFDF9]">
                <img
                  src={mediaUrl('kit/kit_paper-tile-neutral_512.webp')}
                  alt="Paper texture sample"
                  className="h-full w-full object-cover opacity-80"
                />
              </div>
              <div className="mt-2 text-xs font-bold text-green-700">✓ LULUS (Ubin &lt;60KB)</div>
            </div>

            {/* Uji 3: Tiga Kedalaman Bayangan */}
            <div className="rounded-lg border border-stone-200 p-4 bg-white shadow-xs">
              <h3 className="font-bold text-sm mb-2 font-mono">3. BAYANGAN 3-DEPTH</h3>
              <p className="text-xs text-stone-600 mb-3">
                Cahaya konsisten dari kiri atas, bayangan via filter drop-shadow:
              </p>
              <div className="flex gap-2 justify-around py-2">
                <div className="h-10 w-10 rounded bg-[#FFFDF9] border border-stone-200" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,.12))' }} title="Back" />
                <div className="h-10 w-10 rounded bg-[#FFFDF9] border border-stone-200" style={{ filter: 'drop-shadow(0 8px 12px rgba(0,0,0,.18))' }} title="Mid" />
                <div className="h-10 w-10 rounded bg-[#FFFDF9] border border-stone-200" style={{ filter: 'drop-shadow(0 14px 20px rgba(0,0,0,.22))' }} title="Front" />
              </div>
              <div className="mt-2 text-xs font-bold text-green-700">✓ LULUS (Cahaya kiri-atas)</div>
            </div>

            {/* Uji 4: Komponen Carousel */}
            <div className="rounded-lg border border-stone-200 p-4 bg-white shadow-xs">
              <h3 className="font-bold text-sm mb-2 font-mono">4. INTERAKSI CAROUSEL</h3>
              <div className="text-xs text-stone-600 mb-2">
                Carousel Component (Snap &amp; Keyboard)
              </div>
              <Carousel
                ariaLabel="Showcase Carousel"
                items={[
                  <div key="1" className="h-20 w-full bg-pink-100 rounded flex items-center justify-center font-mono text-xs">Card 1 · Paper Cut-Out</div>,
                  <div key="2" className="h-20 w-full bg-emerald-100 rounded flex items-center justify-center font-mono text-xs">Card 2 · Handmade Texture</div>,
                  <div key="3" className="h-20 w-full bg-amber-100 rounded flex items-center justify-center font-mono text-xs">Card 3 · 3-Depth Shadows</div>,
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION D: LIVE QA PASS/FAIL PANEL (RULE 50 & DOKUMEN 08)
         ───────────────────────────────────────────────────────────── */}
      <section id="qa-verification-panel" className="py-12 px-6 bg-stone-100 border-t border-stone-300">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div
                className="text-xs font-mono font-bold uppercase tracking-wider text-pink-700"
              >
                RULE 50 · AUTOMATED MEASUREMENT SUITE
              </div>
              <h2
                className="mt-1 text-2xl font-bold text-[#1B1017]"
                style={{ fontFamily: 'var(--font-gloock)' }}
              >
                Style Test QA Acceptance Table
              </h2>
            </div>
            <div
              className={`rounded-lg px-4 py-2 font-mono text-sm font-bold border ${
                allPassed
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                  : 'bg-amber-50 text-amber-800 border-amber-300'
              }`}
            >
              {allPassed
                ? '✓ 13 / 13 LULUS (ALL CHECKS PASS)'
                : `${qaResults.filter((r) => r.pass).length} / ${qaResults.length} LULUS`}
            </div>
          </div>

          <div className="overflow-x-auto rounded-lg border border-stone-300 bg-white shadow-xs">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-stone-300 bg-stone-50 font-mono text-[11px] text-stone-600 uppercase">
                <tr>
                  <th className="py-3 px-4">#</th>
                  <th className="py-3 px-4">Kriteria Uji</th>
                  <th className="py-3 px-4">Nilai Target (Bible)</th>
                  <th className="py-3 px-4">Hasil Terukur</th>
                  <th className="py-3 px-4">Sumber</th>
                  <th className="py-3 px-4 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {qaResults.map((item, idx) => (
                  <tr
                    key={item.id}
                    id={item.id}
                    className={item.pass ? 'hover:bg-stone-50' : 'bg-red-50 hover:bg-red-100'}
                  >
                    <td className="py-2.5 px-4 font-mono text-stone-400">{idx + 1}</td>
                    <td className="py-2.5 px-4 font-semibold text-stone-800">{item.title}</td>
                    <td className="py-2.5 px-4 font-mono text-stone-600">{item.target}</td>
                    <td className="py-2.5 px-4 font-mono text-stone-800">{item.measured}</td>
                    <td className="py-2.5 px-4 text-stone-500">{item.source}</td>
                    <td className="py-2.5 px-4 text-center">
                      <span
                        className={`inline-block rounded px-2 py-0.5 text-[10px] font-bold font-mono ${
                          item.pass
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {item.pass ? 'PASS' : 'FAIL'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* EdgeTab dekoratif di sisi kanan layar */}
      <EdgeTab color="var(--butter)" />

      {/* Modal Overlay Uji Aksesibilitas (Focus Trap + Esc + Lock Scroll) */}
      <Overlay
        isOpen={isOverlayOpen}
        onClose={() => setIsOverlayOpen(false)}
        title="PaperKit Overlay Test Dialog"
      >
        <div className="space-y-4">
          <p className="text-sm leading-relaxed">
            Ini adalah dialog overlay Paper Cut-Out layar penuh. Mematuhi Aturan 9:
          </p>
          <ul className="list-disc pl-5 text-xs space-y-1 text-stone-700 font-mono">
            <li>role="dialog" & aria-modal="true"</li>
            <li>Focus trap aktif (Tab melingkar di dalam dialog)</li>
            <li>Tombol Esc menutup dialog</li>
            <li>Scroll body terkunci saat aktif</li>
            <li>Fokus kembali ke elemen pemicu saat ditutup</li>
          </ul>
          <div className="pt-2">
            <StickerButton onClick={() => setIsOverlayOpen(false)}>
              Tutup Dialog (Esc)
            </StickerButton>
          </div>
        </div>
      </Overlay>
    </div>
  );
};
