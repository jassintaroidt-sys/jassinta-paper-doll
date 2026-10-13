import React, { useState } from 'react';
import { Doll } from '../components/Doll';
import { COSTUMES } from '../assets-def/doll/costumes';
import { POSES, DOLL_MATRIX, type PoseType, type ViewAngle, type JointAngles } from '../assets-def/doll/poses';
import { FACE_EXPRESSIONS, type ExpressionType } from '../assets-def/doll/faces';
import { BRADS } from '../assets-def/doll/brads';
import { mediaUrl } from '../lib/media';

// Backdrop chapter untuk uji kontras DV 7.1
const WORLD_CONTRAST_TESTS = [
  { chapter: 'Ch.0 & Ch.8', world: 'School / Mailbox', wallColor: '#DCE8F5', costume: 'K1', desc: 'Biru kertas vs K1 rok biru plisket (tepi putih die-cut 2% H)' },
  { chapter: 'Ch.2 Bay 1', world: 'Newsroom Independen', wallColor: '#E80838', costume: 'K3', desc: 'Merah logo vs K3 rompi reporter' },
  { chapter: 'Ch.2 Bay 2', world: 'Newsroom inNalar', wallColor: '#0898F8', costume: 'K3', desc: 'Aqua-biru vs K3 hijab #BFE3F5' },
  { chapter: 'Ch.3.0', world: 'Lobi Kreator', wallColor: '#D4C1F5', costume: 'K4', desc: 'Lilac vs K4 hijab wisteria #A98BDA (kontras aman)' },
  { chapter: 'Ch.3A', world: 'The Café (Elspresso)', wallColor: '#066838', costume: 'K5', desc: 'Hijau tua vs K5 apron krem list hijau' },
  { chapter: 'Ch.3B', world: 'The Glow Clinic', wallColor: '#FFFDF9', costume: 'K6', desc: 'Marmer putih vs K6 jas klinik pink' },
  { chapter: 'Ch.3C', world: 'The Terminal (Karamina)', wallColor: '#066838', costume: 'K7', desc: 'Hijau tua vs K7 busana gading & selendang lavender' },
  { chapter: 'Ch.4', world: 'The Boutique (Lassiewear)', wallColor: '#881838', costume: 'K8', desc: 'Burgundy vs K8 rok champagne' },
  { chapter: 'Ch.6', world: 'The Radio Booth', wallColor: '#2A0F2E', costume: 'K14', desc: 'Plum-night vs K14 blouse orchid #DA9AF2' },
  { chapter: 'Ch.7', world: 'The Archive Room', wallColor: '#E6E4E2', costume: 'K15', desc: 'Warm-grey vs K15 kardigan mustard #D9A441 (kontras aman)' },
];

export const DollDevPage: React.FC = () => {
  // State interaktif
  const [selectedCostume, setSelectedCostume] = useState<string>('K1');
  const [selectedPose, setSelectedPose] = useState<PoseType | 'walk'>('idle');
  const [selectedView, setSelectedView] = useState<ViewAngle>('F');
  const [selectedExpression, setSelectedExpression] = useState<ExpressionType>('smile');
  const [calmMode, setCalmMode] = useState<boolean>(false);
  const [dollScale, setDollScale] = useState<number>(0.85);

  // Joint angle sliders
  const [jointAngles, setJointAngles] = useState<JointAngles>({
    torsoTilt: 0,
    headTilt: 0,
    shoulderRight: 4,
    elbowRight: 4,
  });

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#1B1017] p-4 md:p-8 font-sans">
      {/* Header */}
      <header className="mb-8 border-b-2 border-[#1B1017]/10 pb-4 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-[#FF2E93] text-white text-xs font-bold px-2 py-0.5 rounded-full">DEV RIG</span>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Jassinta's Paper Doll Rig (P03)
            </h1>
          </div>
          <p className="text-sm text-[#1B1017]/70 mt-1">
            Matriks 31+3 kombinasi, 17 katalog kostum, 10 pose sendi, 6 ekspresi wajah kertas, dan uji kontras dunia (DV 7.1).
          </p>
        </div>

        {/* Global Toggles */}
        <div className="flex items-center gap-3 bg-white p-2.5 rounded-xl shadow-xs border border-black/5">
          <label className="flex items-center gap-2 text-xs font-semibold cursor-pointer">
            <input
              type="checkbox"
              checked={calmMode}
              onChange={(e) => setCalmMode(e.target.checked)}
              className="accent-[#FF2E93] w-4 h-4 rounded"
            />
            <span>Calm Mode (Tanpa Animasi Gerak)</span>
          </label>
          <a
            href="#/"
            className="text-xs bg-[#1B1017] text-white px-3 py-1.5 rounded-lg hover:bg-[#FF2E93] transition-colors"
          >
            ← Kembali ke Beranda
          </a>
        </div>
      </header>

      {/* Main Interactive Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        {/* Left: Doll Preview Stage */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center bg-white rounded-3xl p-8 border-2 border-[#1B1017]/10 shadow-[0_8px_30px_rgba(0,0,0,0.06)] min-h-[580px] relative overflow-hidden">
          {/* Subtle paper grid backdrop */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#1B1017 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />

          {/* Badge Status */}
          <div className="absolute top-4 left-4 flex flex-col gap-1 z-10 text-xs">
            <span className="bg-[#EBD08C] text-[#5A3A2E] px-2 py-0.5 rounded font-mono font-medium">
              H = 560 px (Proporsi PB 5.10)
            </span>
            <span className="bg-[#ACE1CF] text-[#066838] px-2 py-0.5 rounded font-mono font-medium">
              Sepatu Hitam #2E2E2E: Selalu Ada ✓
            </span>
            <span className="bg-[#B9E1F6] text-[#1B4B66] px-2 py-0.5 rounded font-mono font-medium">
              Hijab & Brad: Selalu Terlihat ✓
            </span>
          </div>

          {/* Interactive Doll Component */}
          <div className="my-auto py-8">
            <Doll
              costume={selectedCostume}
              pose={selectedPose}
              view={selectedView}
              expression={selectedExpression}
              calmMode={calmMode}
              scale={dollScale}
              jointAngles={jointAngles}
              interactive={true}
            />
          </div>

          {/* Quick Click Hint */}
          <p className="text-xs text-[#1B1017]/50 mt-4 text-center">
            💡 Klik / tap doll untuk melompat 320 ms & melihat speech bubble acak. Klik 5 kali untuk Easter Egg Dizzy!
          </p>
        </div>

        {/* Right: Rig Controls & Joint Sliders */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          {/* Controls Box */}
          <div className="bg-white rounded-2xl p-6 border border-black/10 shadow-xs">
            <h2 className="text-base font-bold mb-4 flex items-center justify-between">
              <span>Kontrol Karakter & Pose</span>
              <span className="text-xs text-[#FF2E93] font-mono">240ms paper-turn · 450ms tab</span>
            </h2>

            {/* Costume Picker */}
            <div className="mb-4">
              <label className="block text-xs font-bold text-[#1B1017]/70 mb-1.5 uppercase">
                Pilih Kostum (K1 – K17)
              </label>
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 max-h-32 overflow-y-auto p-1 border rounded-lg">
                {COSTUMES.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCostume(c.id)}
                    className={`px-2 py-1.5 text-xs rounded font-medium text-center transition-all ${
                      selectedCostume === c.id
                        ? 'bg-[#FF2E93] text-white shadow-xs'
                        : 'bg-[#F7F5F0] hover:bg-black/5 text-[#1B1017]'
                    }`}
                  >
                    {c.id}
                  </button>
                ))}
              </div>
              <div className="mt-2 text-xs text-[#1B1017]/80 bg-[#F7F5F0] p-2 rounded">
                <strong>{selectedCostume}:</strong>{' '}
                {COSTUMES.find((c) => c.id === selectedCostume)?.name} —{' '}
                {COSTUMES.find((c) => c.id === selectedCostume)?.shape}
              </div>
            </div>

            {/* View & Expression */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-bold text-[#1B1017]/70 mb-1.5 uppercase">
                  Tampak Kamera
                </label>
                <div className="flex gap-2">
                  {(['F', 'W', 'B'] as ViewAngle[]).map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedView(v)}
                      className={`flex-1 py-1.5 text-xs font-bold rounded ${
                        selectedView === v
                          ? 'bg-[#1B1017] text-white'
                          : 'bg-[#F7F5F0] text-[#1B1017] hover:bg-black/5'
                      }`}
                    >
                      {v === 'F' ? 'Depan (F)' : v === 'W' ? 'Samping (W)' : 'Belakang (B)'}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1B1017]/70 mb-1.5 uppercase">
                  Ekspresi Wajah (DV 5)
                </label>
                <select
                  value={selectedExpression}
                  onChange={(e) => setSelectedExpression(e.target.value as ExpressionType)}
                  className="w-full text-xs font-medium bg-[#F7F5F0] border border-black/10 rounded p-2"
                >
                  {Object.keys(FACE_EXPRESSIONS).map((exp) => (
                    <option key={exp} value={exp}>
                      {exp.charAt(0).toUpperCase() + exp.slice(1)} (
                      {FACE_EXPRESSIONS[exp as ExpressionType].description})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Pose Selection */}
            <div className="mb-4">
              <label className="block text-xs font-bold text-[#1B1017]/70 mb-1.5 uppercase">
                Pilih Pose Hero (DV 6.2)
              </label>
              <div className="flex flex-wrap gap-1.5">
                {([...(Object.keys(POSES) as PoseType[]), 'walk'] as (PoseType | 'walk')[]).map((p) => (
                  <button
                    key={p}
                    onClick={() => setSelectedPose(p)}
                    className={`px-2.5 py-1 text-xs rounded-full font-medium transition-all ${
                      selectedPose === p
                        ? 'bg-[#1B1017] text-white'
                        : 'bg-[#F7F5F0] hover:bg-black/10 text-[#1B1017]'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Joint Sliders */}
            <div className="border-t border-black/10 pt-4 mt-4">
              <h3 className="text-xs font-bold text-[#1B1017]/70 mb-2 uppercase">
                Slider Sudut Sendi (DV 6.1)
              </h3>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Kemiringan Torso:</span>
                    <span className="font-mono">{jointAngles.torsoTilt}°</span>
                  </div>
                  <input
                    type="range"
                    min="-15"
                    max="15"
                    value={jointAngles.torsoTilt || 0}
                    onChange={(e) =>
                      setJointAngles({ ...jointAngles, torsoTilt: Number(e.target.value) })
                    }
                    className="w-full accent-[#FF2E93]"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Skala Doll:</span>
                    <span className="font-mono">{dollScale.toFixed(2)}x</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="1.2"
                    step="0.05"
                    value={dollScale}
                    onChange={(e) => setDollScale(Number(e.target.value))}
                    className="w-full accent-[#FF2E93]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Brad Fasteners Showcase */}
          <div className="bg-white rounded-2xl p-6 border border-black/10 shadow-xs">
            <h3 className="text-sm font-bold mb-3 flex items-center justify-between">
              <span>5 Jenis Brad SVG (DV 4.7)</span>
              <span className="text-xs text-[#8A8A8A]">Bebas zona 16 px</span>
            </h3>
            <div className="grid grid-cols-5 gap-3 text-center text-xs">
              {Object.values(BRADS).map((b) => (
                <div key={b.id} className="p-2 bg-[#F7F5F0] rounded-xl flex flex-col items-center">
                  <img
                    src={mediaUrl(`/assets/doll/${b.assetFile}`)}
                    alt={b.name}
                    className="w-10 h-10 object-contain mb-1"
                  />
                  <span className="font-bold text-[10px]">{b.name}</span>
                  <span className="text-[9px] text-black/50">{b.count} sendi</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Uji Kontras Kostum vs Dunia (DV 7.1) */}
      <section className="mb-12 bg-white rounded-3xl p-6 md:p-8 border border-black/10 shadow-xs">
        <h2 className="text-lg font-bold mb-2">Uji Kontras Kostum vs Dunia (DV 7.1)</h2>
        <p className="text-xs text-[#1B1017]/70 mb-6">
          Memastikan tidak ada warna pakaian/hijab yang menyatu dengan dinding chapter di mana doll berada.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {WORLD_CONTRAST_TESTS.map((t, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-4 border border-black/10 flex flex-col items-center justify-between shadow-xs transition-transform hover:-translate-y-1"
              style={{ backgroundColor: t.wallColor }}
            >
              <div className="text-center mb-3">
                <span className="text-[10px] font-bold bg-white/80 px-2 py-0.5 rounded-full shadow-xs">
                  {t.chapter}
                </span>
                <p className="text-xs font-extrabold mt-1 text-black drop-shadow-xs">{t.world}</p>
              </div>

              {/* Mini Doll Preview on this backdrop */}
              <div className="py-2">
                <Doll costume={t.costume} pose="idle" view="F" scale={0.45} interactive={false} />
              </div>

              <div className="mt-3 text-[10px] text-center bg-white/90 p-2 rounded-lg text-[#1B1017]">
                <strong>{t.costume}:</strong> {t.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Matriks 31 Kombinasi + 3 Tampak Belakang (DV 6.4) */}
      <section className="bg-white rounded-3xl p-6 md:p-8 border border-black/10 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-lg font-bold">Matriks 31 Kombinasi + 3 Tampak Belakang (DV 6.4)</h2>
            <p className="text-xs text-[#1B1017]/70">
              Seluruh 34 kombinasi aset doll dalam perjalanan Paper Town tanpa celah.
            </p>
          </div>
          <span className="bg-[#1B1017] text-white text-xs font-mono font-bold px-3 py-1 rounded-full">
            Total: {DOLL_MATRIX.length} Kombinasi
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {DOLL_MATRIX.map((item, i) => (
            <div
              key={i}
              onClick={() => {
                setSelectedCostume(item.costumeId);
                setSelectedPose(item.pose as PoseType);
                setSelectedView(item.view);
              }}
              className={`cursor-pointer rounded-2xl p-3 border text-center transition-all flex flex-col items-center justify-between ${
                selectedCostume === item.costumeId &&
                selectedView === item.view &&
                selectedPose === item.pose
                  ? 'border-[#FF2E93] ring-2 ring-[#FF2E93] bg-[#FFD6E8]/30'
                  : 'border-black/10 bg-[#F7F5F0] hover:bg-black/5'
              }`}
            >
              <span className="text-[10px] font-bold text-black/60 mb-2">
                #{i + 1} {item.costumeId} · {item.view}
              </span>
              <img
                src={mediaUrl(`/assets/doll/${item.assetFile}`)}
                alt={item.label}
                className="max-h-36 object-contain my-2 drop-shadow-xs"
              />
              <span className="text-[10px] font-medium text-[#1B1017] leading-tight mt-1 line-clamp-2">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
