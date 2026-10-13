import { useState, useMemo } from 'react';
import { ALL_ASSET_DEFS, type AssetDef } from '../assets-def';
import { CHAPTER_SAMPLES } from '../assets-def/samples';
import { PaperObject } from '../components/paper/PaperObject';

const WALL_COLORS = [
  { name: 'Putih Kanvas (Ch 1)', hex: '#FFFFFF', isDark: false },
  { name: 'Paper Neutral (Ch 0)', hex: '#FFFDF9', isDark: false },
  { name: 'Mint (Ch 0 / 3.0)', hex: '#A8E6CF', isDark: false },
  { name: 'Butter (Ch 2)', hex: '#FFF1A8', isDark: false },
  { name: 'Baby-Blue (Ch 3)', hex: '#BFE3F5', isDark: false },
  { name: 'Apricot (Ch 3A)', hex: '#FFD3B0', isDark: false },
  { name: 'Blush (Ch 3B / 8)', hex: '#FFD6E8', isDark: false },
  { name: 'Dusty-Rose (Ch 4)', hex: '#E8A5B8', isDark: false },
  { name: 'Aged-Paper (Ch 5)', hex: '#F3E3B8', isDark: false },
  { name: 'Sage (Ch 3A)', hex: '#A9C4A0', isDark: false },
  { name: 'Warm-Grey (Ch 7)', hex: '#D9D3D6', isDark: false },
  { name: 'Plum-Night (Ch 6)', hex: '#2A0F2E', isDark: true },
  { name: 'Dark Neutral', hex: '#1B1017', isDark: true },
];

export function AssetsDevPage() {
  const [selectedOwner, setSelectedOwner] = useState<string>('ALL');
  const [selectedFolder, setSelectedFolder] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [silhouetteMode, setSilhouetteMode] = useState<boolean>(false);
  const [wallColorIndex, setWallColorIndex] = useState<number>(1);
  const [showPropertyGate, setShowPropertyGate] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'contact-sheet' | 'property-gate'>('contact-sheet');

  const currentWall = WALL_COLORS[wallColorIndex] || WALL_COLORS[0];

  // Ekstrak daftar owner prompts unik
  const ownerPrompts = useMemo(() => {
    const set = new Set(ALL_ASSET_DEFS.map((d) => d.ownerPrompt).filter(Boolean));
    return ['ALL', ...Array.from(set).sort()];
  }, []);

  // Ekstrak daftar folder unik
  const folders = useMemo(() => {
    const set = new Set(ALL_ASSET_DEFS.map((d) => d.folder).filter(Boolean));
    return ['ALL', ...Array.from(set).sort()];
  }, []);

  // Filter aset
  const filteredAssets = useMemo(() => {
    return ALL_ASSET_DEFS.filter((def) => {
      if (selectedOwner !== 'ALL' && def.ownerPrompt !== selectedOwner) return false;
      if (selectedFolder !== 'ALL' && def.folder !== selectedFolder) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchId = def.id.toLowerCase().includes(q);
        const matchFile = def.file.toLowerCase().includes(q);
        const matchPrompt = (def.promptRef || '').toLowerCase().includes(q);
        if (!matchId && !matchFile && !matchPrompt) return false;
      }
      return true;
    });
  }, [selectedOwner, selectedFolder, searchQuery]);

  // Statistik status
  const stats = useMemo(() => {
    let done = 0;
    let placeholder = 0;
    let missing = 0;
    for (const d of ALL_ASSET_DEFS) {
      if (d.status === 'done') done++;
      else if (d.status === 'placeholder') placeholder++;
      else missing++;
    }
    return { done, placeholder, missing, total: ALL_ASSET_DEFS.length };
  }, []);

  return (
    <div
      className="min-h-screen text-[#1B1017] transition-colors duration-300 pb-24"
      style={{
        backgroundColor: currentWall.hex,
        color: currentWall.isDark ? '#FFFDF9' : '#1B1017',
      }}
    >
      {/* Header Dev Tools */}
      <header className="sticky top-0 z-30 border-b border-[#1B1017]/15 backdrop-blur-md bg-white/70 px-6 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest font-mono px-2 py-0.5 rounded bg-[#FFD6E8] text-[#1B1017] font-semibold">
                P04 · Dev Tool
              </span>
              <h1 className="text-xl font-bold font-serif">Asset Factory & Contact Sheet</h1>
            </div>
            <p className="text-xs text-[#1B1017]/70 mt-1">
              {stats.total} total aset manifest · {stats.done} done · {stats.placeholder} placeholder · {stats.missing} missing
            </p>
          </div>

          {/* Action & Toggle Controls */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Tab Navigasi */}
            <div className="flex bg-[#1B1017]/5 p-1 rounded-lg border border-[#1B1017]/10">
              <button
                onClick={() => setActiveTab('contact-sheet')}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition ${
                  activeTab === 'contact-sheet'
                    ? 'bg-white shadow text-[#1B1017]'
                    : 'text-[#1B1017]/70 hover:text-[#1B1017]'
                }`}
              >
                Contact Sheet ({filteredAssets.length})
              </button>
              <button
                onClick={() => setActiveTab('property-gate')}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition flex items-center gap-1.5 ${
                  activeTab === 'property-gate'
                    ? 'bg-white shadow text-[#1B1017]'
                    : 'text-[#1B1017]/70 hover:text-[#1B1017]'
                }`}
              >
                <span>Gerbang Gaya Properti</span>
                <span className="bg-[#E5173F] text-white text-[10px] px-1.5 py-0.2 rounded-full font-bold">
                  12 Ch
                </span>
              </button>
            </div>

            {/* Toggle Uji Siluet */}
            <button
              onClick={() => setSilhouetteMode(!silhouetteMode)}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 border transition ${
                silhouetteMode
                  ? 'bg-black text-white border-black shadow-md'
                  : 'bg-white/80 text-[#1B1017] border-[#1B1017]/20 hover:bg-white'
              }`}
              title="Menguji siluet blok hitam (DV 2.5: terbaca dalam 1 detik)"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-black border border-white"></span>
              <span>Uji Siluet: {silhouetteMode ? 'ON' : 'OFF'}</span>
            </button>

            {/* Selector Warna Dinding */}
            <div className="flex items-center gap-1.5 bg-white/80 border border-[#1B1017]/20 rounded-md px-2.5 py-1 text-xs">
              <span className="text-[#1B1017]/60 text-[11px]">Dinding:</span>
              <select
                value={wallColorIndex}
                onChange={(e) => setWallColorIndex(Number(e.target.value))}
                className="bg-transparent font-medium text-xs focus:outline-none cursor-pointer"
              >
                {WALL_COLORS.map((w, idx) => (
                  <option key={w.name} value={idx}>
                    {w.name} ({w.hex})
                  </option>
                ))}
              </select>
              <span
                className="w-3.5 h-3.5 rounded border border-[#1B1017]/30 inline-block"
                style={{ backgroundColor: currentWall.hex }}
              />
            </div>
          </div>
        </div>

        {/* Filter Bar (Hanya tampil di tab Contact Sheet) */}
        {activeTab === 'contact-sheet' && (
          <div className="max-w-7xl mx-auto mt-3 pt-3 border-t border-[#1B1017]/10 flex flex-wrap items-center gap-3">
            {/* Search */}
            <div className="flex-1 min-w-[200px]">
              <input
                type="text"
                placeholder="Cari ID, nama file, atau deskripsi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs px-3 py-1.5 rounded-md border border-[#1B1017]/20 bg-white/90 focus:outline-none focus:ring-1 focus:ring-[#E5173F]"
              />
            </div>

            {/* Owner Prompt filter */}
            <div className="flex items-center gap-1 text-xs">
              <span className="text-[#1B1017]/60">Owner:</span>
              <select
                value={selectedOwner}
                onChange={(e) => setSelectedOwner(e.target.value)}
                className="text-xs px-2 py-1 rounded border border-[#1B1017]/20 bg-white/90"
              >
                {ownerPrompts.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            {/* Folder filter */}
            <div className="flex items-center gap-1 text-xs">
              <span className="text-[#1B1017]/60">Folder:</span>
              <select
                value={selectedFolder}
                onChange={(e) => setSelectedFolder(e.target.value)}
                className="text-xs px-2 py-1 rounded border border-[#1B1017]/20 bg-white/90"
              >
                {folders.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
            </div>

            {/* Reset */}
            {(selectedOwner !== 'ALL' || selectedFolder !== 'ALL' || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedOwner('ALL');
                  setSelectedFolder('ALL');
                  setSearchQuery('');
                }}
                className="text-[11px] text-[#E5173F] underline"
              >
                Reset Filter
              </button>
            )}
          </div>
        )}
      </header>

      {/* Konten Utama */}
      <main className="max-w-7xl mx-auto px-6 pt-6">
        {/* TAB 1: GERBANG GAYA PROPERTI */}
        {activeTab === 'property-gate' && (
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-[#1B1017]/15 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-bold font-serif text-[#1B1017]">
                    Gerbang Gaya Properti (P04 Approval Gate)
                  </h2>
                  <p className="text-xs text-[#1B1017]/80 mt-1 max-w-3xl leading-relaxed">
                    Sesuai spesifikasi bible DV 2 dan DV 3, sebelum memproduksi massal ratusan aset world/interior,
                    tiga kategori properti contoh per chapter (Satu benda Hero V3 tiga perempat, Satu benda Datar V0 depan,
                    dan Satu benda Gantung VH) ditampilkan di sini untuk disetujui pemilik.
                    Setiap benda menerapkan 3 kedalaman bayangan, serat + bintik kertas handmade, dan tanpa kontur tinta hitam.
                  </p>
                </div>
                <button
                  onClick={() => setShowPropertyGate(!showPropertyGate)}
                  className="text-xs text-[#1B1017]/60 underline"
                >
                  {showPropertyGate ? 'Sembunyikan' : 'Tampilkan'}
                </button>
              </div>
            </div>

            {showPropertyGate && (
              <div className="space-y-6">
                {CHAPTER_SAMPLES.map((cs) => (
                  <div
                    key={cs.chapter}
                    className="bg-white/90 backdrop-blur rounded-xl p-5 border border-[#1B1017]/15 shadow-sm"
                  >
                    <div className="border-b border-[#1B1017]/10 pb-3 mb-4 flex items-center justify-between">
                      <h3 className="font-serif font-bold text-base text-[#1B1017]">
                        {cs.chapterTitle}
                      </h3>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#1B1017]/5 text-[#1B1017]/70">
                        Ch-{cs.chapter}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      {/* 1. Hero V3 */}
                      <div className="bg-[#FFFDF9] rounded-lg p-4 border border-[#1B1017]/10 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[#BFE3F5] text-[#1B1017]">
                              HERO V3 (Tiga Perempat)
                            </span>
                            <span className="text-[10px] font-mono text-[#1B1017]/60">Sudut V3</span>
                          </div>
                          <h4 className="font-semibold text-sm text-[#1B1017] mb-1">{cs.heroV3.name}</h4>
                          <p className="text-xs text-[#1B1017]/70 mb-3">{cs.heroV3.description}</p>
                        </div>
                        <div className="py-3 flex items-center justify-center bg-[#F9F6F0] rounded border border-dashed border-[#1B1017]/10 my-2">
                          <div
                            dangerouslySetInnerHTML={{ __html: cs.heroV3.svg }}
                            className={silhouetteMode ? 'brightness-0 contrast-200' : ''}
                          />
                        </div>
                        <div className="mt-2 pt-2 border-t border-[#1B1017]/10 flex items-center gap-1.5 flex-wrap">
                          <span className="text-[10px] text-[#1B1017]/50">Palet Hex:</span>
                          {cs.heroV3.colors.map((c) => (
                            <span
                              key={c}
                              className="inline-flex items-center gap-1 text-[10px] font-mono px-1.5 py-0.5 rounded bg-white border border-[#1B1017]/15"
                            >
                              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: c }} />
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* 2. Flat V0 */}
                      <div className="bg-[#FFFDF9] rounded-lg p-4 border border-[#1B1017]/10 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[#A8E6CF] text-[#1B1017]">
                              DATAR V0 (Depan)
                            </span>
                            <span className="text-[10px] font-mono text-[#1B1017]/60">Sudut V0</span>
                          </div>
                          <h4 className="font-semibold text-sm text-[#1B1017] mb-1">{cs.flatV0.name}</h4>
                          <p className="text-xs text-[#1B1017]/70 mb-3">{cs.flatV0.description}</p>
                        </div>
                        <div className="py-3 flex items-center justify-center bg-[#F9F6F0] rounded border border-dashed border-[#1B1017]/10 my-2">
                          <div
                            dangerouslySetInnerHTML={{ __html: cs.flatV0.svg }}
                            className={silhouetteMode ? 'brightness-0 contrast-200' : ''}
                          />
                        </div>
                        <div className="mt-2 pt-2 border-t border-[#1B1017]/10 flex items-center gap-1.5 flex-wrap">
                          <span className="text-[10px] text-[#1B1017]/50">Palet Hex:</span>
                          {cs.flatV0.colors.map((c) => (
                            <span
                              key={c}
                              className="inline-flex items-center gap-1 text-[10px] font-mono px-1.5 py-0.5 rounded bg-white border border-[#1B1017]/15"
                            >
                              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: c }} />
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* 3. Hanging VH */}
                      <div className="bg-[#FFFDF9] rounded-lg p-4 border border-[#1B1017]/10 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[#FFD6E8] text-[#1B1017]">
                              GANTUNG VH (Pivot & Tali)
                            </span>
                            <span className="text-[10px] font-mono text-[#1B1017]/60">Sudut VH</span>
                          </div>
                          <h4 className="font-semibold text-sm text-[#1B1017] mb-1">{cs.hangingVH.name}</h4>
                          <p className="text-xs text-[#1B1017]/70 mb-3">{cs.hangingVH.description}</p>
                        </div>
                        <div className="py-3 flex items-center justify-center bg-[#F9F6F0] rounded border border-dashed border-[#1B1017]/10 my-2">
                          <div
                            dangerouslySetInnerHTML={{ __html: cs.hangingVH.svg }}
                            className={silhouetteMode ? 'brightness-0 contrast-200' : ''}
                          />
                        </div>
                        <div className="mt-2 pt-2 border-t border-[#1B1017]/10 flex items-center gap-1.5 flex-wrap">
                          <span className="text-[10px] text-[#1B1017]/50">Palet Hex:</span>
                          {cs.hangingVH.colors.map((c) => (
                            <span
                              key={c}
                              className="inline-flex items-center gap-1 text-[10px] font-mono px-1.5 py-0.5 rounded bg-white border border-[#1B1017]/15"
                            >
                              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: c }} />
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: CONTACT SHEET SEMUA ASET */}
        {activeTab === 'contact-sheet' && (
          <div>
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs font-mono opacity-70">
                Menampilkan {filteredAssets.length} dari {stats.total} aset
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {filteredAssets.map((asset) => (
                <AssetCard
                  key={asset.file}
                  asset={asset}
                  silhouetteMode={silhouetteMode}
                />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

interface AssetCardProps {
  asset: AssetDef;
  silhouetteMode: boolean;
}

function AssetCard({ asset, silhouetteMode }: AssetCardProps) {
  const statusColor =
    asset.status === 'done'
      ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
      : asset.status === 'placeholder'
      ? 'bg-amber-50 text-amber-800 border-amber-300'
      : 'bg-rose-50 text-rose-800 border-rose-300';

  return (
    <div className="bg-white/90 backdrop-blur rounded-lg p-3 border border-[#1B1017]/15 shadow-sm hover:shadow-md transition flex flex-col justify-between">
      {/* Header Card */}
      <div>
        <div className="flex items-center justify-between gap-1 mb-1.5">
          <span className={`text-[9px] font-mono font-bold uppercase px-1.5 py-0.5 rounded border ${statusColor}`}>
            {asset.status}
          </span>
          <span className="text-[10px] font-mono text-[#1B1017]/60">
            {asset.ownerPrompt || '-'}
          </span>
        </div>

        <h3 className="text-xs font-bold font-mono text-[#1B1017] truncate" title={asset.id}>
          {asset.id}
        </h3>
        <p className="text-[10px] text-[#1B1017]/60 truncate mb-2" title={asset.file}>
          {asset.file}
        </p>
      </div>

      {/* Preview Render */}
      <div className="my-2 py-3 px-2 flex items-center justify-center bg-[#F9F6F0] rounded border border-dashed border-[#1B1017]/10 min-h-[110px]">
        {asset.status === 'done' && asset.folder === 'doll' ? (
          <img
            src={`/assets/doll/${asset.file.replace(/\.(webp|svg)$/, '')}.svg`}
            alt={asset.id}
            className={`max-h-[100px] object-contain transition ${silhouetteMode ? 'brightness-0 contrast-200' : ''}`}
            onError={(e) => {
              // fallback ke PaperObject
              (e.currentTarget as HTMLElement).style.display = 'none';
            }}
          />
        ) : (
          <PaperObject
            def={asset}
            width={120}
            silhouette={silhouetteMode}
            className="mx-auto"
          />
        )}
      </div>

      {/* Footer Info & Hex Overlay */}
      <div className="mt-2 pt-2 border-t border-[#1B1017]/10 flex flex-wrap items-center justify-between gap-1 text-[10px]">
        <div className="flex items-center gap-1">
          <span className="font-mono text-[#1B1017]/50">{asset.angle || 'V0'}</span>
          <span className="text-[#1B1017]/40">·</span>
          <span className="font-mono text-[#1B1017]/50">{asset.folder}</span>
        </div>

        {/* Chip Hex DV Overlay */}
        {asset.specColor && (
          <span className="inline-flex items-center gap-1 font-mono text-[9px] bg-white border border-[#1B1017]/15 px-1 py-0.5 rounded">
            <span
              className="w-2 h-2 rounded-full border border-black/10"
              style={{ backgroundColor: asset.specColor }}
            />
            {asset.specColor}
          </span>
        )}
      </div>
    </div>
  );
}
