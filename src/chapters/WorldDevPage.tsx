/**
 * src/chapters/WorldDevPage.tsx
 * Halaman dev pratinjau mesin dunia P05 (#/dev/world)
 *
 * Fitur:
 * - Pratinjau tiap chapter (semua 12 adegan World Set)
 * - Pratinjau 7 Walk Strip
 * - Uji mode D / P / S
 * - Toggle kedalaman Full / Lite / Calm
 * - Tampilan kartu CSS var brand per scene
 */

import { useState } from 'react';
import { SCENES, WALK_STRIPS } from '../components/world/worldData';
import { WorldProvider, useWorld } from '../components/world/WorldContext';
import { WalkStrip } from '../components/world/WalkStrip';
import type { SceneMode, DepthLevel } from '../components/world/worldTypes';

// ------------------------------------------------------------------
// Sub-komponen Kartu Scene Pratinjau
// ------------------------------------------------------------------
function SceneCard({
  scene,
  activeMode,
}: {
  scene: (typeof SCENES)[0];
  activeMode: SceneMode;
}) {
  const isCh1 = scene.chapterNum === '1';

  return (
    <div
      className="rounded-xl border-2 overflow-hidden shadow-md"
      style={{
        borderColor: scene.brandColor,
        background: isCh1 ? '#FFFFFF' : scene.wallTint,
      }}
    >
      {/* Header kartu */}
      <div
        className="px-4 py-2.5 flex items-center justify-between border-b"
        style={{ borderColor: scene.brandColor + '33', background: scene.brandColor + '22' }}
      >
        <span className="font-mono text-[11px] font-bold" style={{ color: scene.brandColor }}>
          CH {scene.chapterNum}
        </span>
        <span
          className="px-2 py-0.5 rounded text-[10px] font-mono border"
          style={{ color: scene.brandColor, borderColor: scene.brandColor + '66' }}
        >
          MODE {activeMode}
        </span>
        <span className="font-mono text-[10px] opacity-60">ACT {scene.act}</span>
      </div>

      {/* Body */}
      <div className="p-4 space-y-2">
        <div className="font-serif text-base font-bold leading-tight" style={{ color: '#1B1017' }}>
          {scene.name}
        </div>
        <div className="text-[11px] font-mono opacity-70" style={{ color: '#1B1017' }}>
          {scene.actTitle} · {scene.placeName}
        </div>

        {/* Swatches CSS var */}
        <div className="flex gap-1.5 mt-2 flex-wrap">
          {[
            { label: 'wall', color: scene.wallTint },
            { label: 'fiber', color: scene.fiberTint },
            { label: 'floor', color: scene.floorTint },
            { label: 'brand', color: scene.brandColor },
          ].map(({ label, color }) => (
            <div key={label} className="flex flex-col items-center gap-0.5">
              <div
                className="w-6 h-6 rounded border border-black/10 shadow-inner"
                style={{ background: color }}
                title={`--${label}-tint: ${color}`}
              />
              <span className="text-[9px] font-mono opacity-60" style={{ color: '#1B1017' }}>
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Flags */}
        <div className="flex gap-1 flex-wrap mt-1">
          {scene.hasFloor && (
            <span className="px-1.5 py-0.5 bg-emerald-100 text-emerald-800 text-[9px] rounded font-mono">
              FLOOR
            </span>
          )}
          {scene.hasEdgeTape && (
            <span className="px-1.5 py-0.5 bg-red-100 text-red-800 text-[9px] rounded font-mono">
              EDGE TAPE
            </span>
          )}
          {scene.hasSkyline && (
            <span className="px-1.5 py-0.5 bg-blue-100 text-blue-800 text-[9px] rounded font-mono">
              SKYLINE
            </span>
          )}
          {scene.seedTornEdge && (
            <span className="px-1.5 py-0.5 bg-purple-100 text-purple-800 text-[9px] rounded font-mono">
              TORN {scene.seedTornEdge}
            </span>
          )}
        </div>

        {/* Benda penghubung */}
        {scene.connectedObject && (
          <div className="text-[10px] font-mono mt-1 opacity-70" style={{ color: '#1B1017' }}>
            ↪ {scene.connectedObject}
          </div>
        )}

        {/* Aset label */}
        <div className="mt-2">
          <img
            src={`/assets/ui/${scene.labelId}_V0.webp`}
            alt={scene.placeName}
            className="h-12 object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      </div>
    </div>
  );
}

// ------------------------------------------------------------------
// Sub-komponen Kartu Walk Strip
// ------------------------------------------------------------------
function WalkStripCard({ strip }: { strip: (typeof WALK_STRIPS)[0] }) {
  return (
    <div className="border-2 border-[#1B1017]/20 rounded-xl overflow-hidden shadow">
      <div className="px-4 py-2 bg-[#FFF1A8] border-b border-[#1B1017]/10 flex items-center justify-between">
        <span className="font-mono text-[11px] font-bold">STRIP {strip.fromChapter} → {strip.toChapter}</span>
        {strip.reverseDirection && (
          <span className="px-1.5 py-0.5 bg-amber-200 text-amber-900 text-[9px] rounded font-mono">REWIND</span>
        )}
        {strip.hasFootsteps && (
          <span className="px-1.5 py-0.5 bg-slate-200 text-slate-800 text-[9px] rounded font-mono">FOOTSTEPS</span>
        )}
      </div>
      <div className="p-3 bg-[#F8F5EE]">
        <WalkStrip config={strip} />
      </div>
    </div>
  );
}

// ------------------------------------------------------------------
// Konten utama dengan akses WorldContext
// ------------------------------------------------------------------
function WorldDevContent() {
  const { setDepthLevel, depthLevel, isOpeningUnlocked, unlockOpening } = useWorld();
  const [activeMode, setActiveMode] = useState<SceneMode>('D');
  const [showStrips, setShowStrips] = useState(false);

  const modeLabels: Record<SceneMode, string> = {
    D: 'D · Datar (2D Billboard)',
    P: 'P · Panggung (2.5D CSS 3D)',
    S: 'S · Story (Baca Mendalam)',
  };

  return (
    <div
      className="min-h-screen bg-[#FFFDF9] font-sans text-[#1B1017]"
      style={{ fontFamily: 'var(--font-poppins, sans-serif)' }}
    >
      {/* ---- Sticky Toolbar ---- */}
      <div className="sticky top-0 z-50 bg-[#FFFDF9]/95 backdrop-blur-sm border-b-2 border-[#1B1017]/10 px-4 py-2.5 flex items-center flex-wrap gap-3 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#E5173F]" />
          <span className="font-mono font-bold text-sm">DEV · P05 · World Machine</span>
        </div>

        {/* Link kembali */}
        <a
          href="#/"
          className="ml-auto text-[11px] font-mono px-3 py-1 rounded border border-[#1B1017]/20 hover:bg-[#FFF1A8] transition"
        >
          ← Home
        </a>
        <a
          href="#/dev/assets"
          className="text-[11px] font-mono px-3 py-1 rounded border border-[#1B1017]/20 hover:bg-[#FFF1A8] transition"
        >
          Dev Assets
        </a>

        {/* Mode toggle D/P/S */}
        <div className="flex items-center gap-1 bg-white rounded-full border border-[#1B1017]/15 px-1.5 py-0.5">
          {(['D', 'P', 'S'] as SceneMode[]).map((m) => (
            <button
              key={m}
              onClick={() => setActiveMode(m)}
              className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold transition ${
                activeMode === m ? 'bg-[#E5173F] text-white shadow-sm' : 'hover:bg-black/5 text-[#1B1017]/70'
              }`}
              title={modeLabels[m]}
            >
              {m}
            </button>
          ))}
        </div>

        {/* Depth toggle */}
        <div className="flex items-center gap-1 bg-white rounded-full border border-[#1B1017]/15 px-1.5 py-0.5">
          {(['full', 'lite', 'calm'] as DepthLevel[]).map((d) => (
            <button
              key={d}
              onClick={() => setDepthLevel(d)}
              className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold transition ${
                depthLevel === d ? 'bg-[#FF8DC7] text-[#1B1017] shadow-sm' : 'hover:bg-black/5 text-[#1B1017]/70'
              }`}
            >
              {d.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Tab toggle: Scenes / Strips */}
        <div className="flex items-center gap-1 bg-white rounded-full border border-[#1B1017]/15 px-1.5 py-0.5">
          <button
            onClick={() => setShowStrips(false)}
            className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold transition ${
              !showStrips ? 'bg-[#FFF1A8] text-[#1B1017] shadow-sm' : 'hover:bg-black/5 text-[#1B1017]/70'
            }`}
          >
            12 SCENES
          </button>
          <button
            onClick={() => setShowStrips(true)}
            className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold transition ${
              showStrips ? 'bg-[#FFF1A8] text-[#1B1017] shadow-sm' : 'hover:bg-black/5 text-[#1B1017]/70'
            }`}
          >
            7 STRIPS
          </button>
        </div>
      </div>

      {/* ---- Hero ---- */}
      <div className="px-6 py-8 border-b border-[#1B1017]/10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-serif font-bold mb-1">P05 · Mesin Dunia</h1>
          <p className="text-sm font-mono text-[#1B1017]/60 mb-4">
            Pratinjau 12 World Set · 7 Walk Strip · Mode D/P/S · HUD
          </p>

          {/* Status bar */}
          <div className="flex gap-3 flex-wrap text-[11px] font-mono">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>12 Scenes configured</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>7 Walk Strips configured</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>50 P05 assets generated</span>
            </div>
            <div
              className={`flex items-center gap-1.5 px-3 py-1.5 border rounded-full ${
                isOpeningUnlocked
                  ? 'bg-emerald-50 border-emerald-200'
                  : 'bg-amber-50 border-amber-200'
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${isOpeningUnlocked ? 'bg-emerald-500' : 'bg-amber-500'}`}
              />
              <span>Opening {isOpeningUnlocked ? 'Unlocked' : 'Locked'}</span>
              {!isOpeningUnlocked && (
                <button
                  onClick={unlockOpening}
                  className="ml-1 underline text-amber-800 hover:text-amber-900"
                >
                  (force unlock)
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ---- Konten Utama ---- */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {!showStrips ? (
          <>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-bold font-serif">
                12 World Set Scenes
                <span className="ml-2 text-sm font-mono font-normal opacity-60">Mode: {activeMode}</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {SCENES.map((scene) => (
                <SceneCard key={scene.id} scene={scene} activeMode={activeMode} />
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-bold font-serif">7 Walk Strips</h2>
            </div>
            <div className="space-y-6">
              {WALK_STRIPS.map((strip) => (
                <WalkStripCard key={strip.id} strip={strip} />
              ))}
            </div>
          </>
        )}
      </div>

      {/* ---- Moda HUD Live ---- */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <h2 className="text-lg font-bold font-serif mb-4">HUD Token Table</h2>
        <div className="overflow-x-auto rounded-xl border border-[#1B1017]/15 shadow-sm">
          <table className="w-full text-[11px] font-mono border-collapse">
            <thead>
              <tr className="bg-[#FFF1A8] text-[#1B1017]">
                <th className="text-left px-3 py-2 border-b border-[#1B1017]/10">Chapter</th>
                <th className="text-left px-3 py-2 border-b border-[#1B1017]/10">wall-tint</th>
                <th className="text-left px-3 py-2 border-b border-[#1B1017]/10">brand-color</th>
                <th className="text-left px-3 py-2 border-b border-[#1B1017]/10">Act</th>
                <th className="text-left px-3 py-2 border-b border-[#1B1017]/10">Mode</th>
                <th className="text-left px-3 py-2 border-b border-[#1B1017]/10">Label ID</th>
              </tr>
            </thead>
            <tbody>
              {SCENES.map((scene, i) => (
                <tr
                  key={scene.id}
                  className={i % 2 === 0 ? 'bg-white' : 'bg-[#FFFDF9]'}
                >
                  <td className="px-3 py-1.5 border-b border-[#1B1017]/5">
                    <span className="flex items-center gap-1.5">
                      <span
                        className="w-2 h-2 rounded-full inline-block"
                        style={{ background: scene.brandColor }}
                      />
                      CH {scene.chapterNum}
                    </span>
                  </td>
                  <td className="px-3 py-1.5 border-b border-[#1B1017]/5">
                    <span className="flex items-center gap-1.5">
                      <span
                        className="w-3 h-3 rounded border border-black/10 inline-block"
                        style={{ background: scene.wallTint }}
                      />
                      {scene.wallTint}
                    </span>
                  </td>
                  <td className="px-3 py-1.5 border-b border-[#1B1017]/5">
                    <span className="flex items-center gap-1.5">
                      <span
                        className="w-3 h-3 rounded border border-black/10 inline-block"
                        style={{ background: scene.brandColor }}
                      />
                      {scene.brandColor}
                    </span>
                  </td>
                  <td className="px-3 py-1.5 border-b border-[#1B1017]/5">{scene.act}</td>
                  <td className="px-3 py-1.5 border-b border-[#1B1017]/5">{scene.mode}</td>
                  <td className="px-3 py-1.5 border-b border-[#1B1017]/5 opacity-70">{scene.labelId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <div className="h-[20px]" />
    </div>
  );
}

// ------------------------------------------------------------------
// Export utama WorldDevPage — dibungkus WorldProvider agar punya konteks
// ------------------------------------------------------------------
export function WorldDevPage() {
  return (
    <WorldProvider>
      <WorldDevContent />
    </WorldProvider>
  );
}
