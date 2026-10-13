/**
 * src/chapters/CreatorTrilogyDevPage.tsx
 * Halaman pratinjau dev khusus P09: Lobi 3.0 dan Café 3A
 * Rute: #/dev/trilogy
 */

import React, { useState } from 'react';
import { CreatorTrilogyLobby } from './CreatorTrilogy/Lobby';
import { CafeChapter } from './CreatorTrilogy/Cafe';
import { WorldProvider } from '../components/world/WorldContext';
import { useCalmMode } from '../hooks/useCalmMode';

export const CreatorTrilogyDevPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'both' | 'lobby' | 'cafe'>('both');
  const { isCalm, toggleCalm } = useCalmMode();

  return (
    <WorldProvider>
      <div className="min-h-screen bg-[#FFFDF9] text-[#1B1017]">
        {/* Floating Top Control Panel */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#1B1017]/15 py-3 px-6 shadow-sm flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-[#FF2E93] text-white">
              DEV · P09
            </span>
            <h1 className="font-fraunces text-base md:text-lg font-bold">
              Creator Trilogy Preview (Lobi 3.0 &amp; Café 3A)
            </h1>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs">
            <button
              onClick={() => setActiveTab('both')}
              className={`px-3 py-1.5 rounded-full border ${
                activeTab === 'both' ? 'bg-[#1B1017] text-white font-bold' : 'bg-white hover:bg-black/5'
              }`}
            >
              Semua (3.0 + 3A)
            </button>
            <button
              onClick={() => setActiveTab('lobby')}
              className={`px-3 py-1.5 rounded-full border ${
                activeTab === 'lobby' ? 'bg-[#066838] text-white font-bold' : 'bg-white hover:bg-black/5'
              }`}
            >
              3.0 Lobi
            </button>
            <button
              onClick={() => setActiveTab('cafe')}
              className={`px-3 py-1.5 rounded-full border ${
                activeTab === 'cafe' ? 'bg-[#066838] text-white font-bold' : 'bg-white hover:bg-black/5'
              }`}
            >
              3A Café
            </button>

            <button
              onClick={toggleCalm}
              className={`ml-2 px-3 py-1.5 rounded-full border font-bold ${
                isCalm ? 'bg-[#FF8DC7] text-[#1B1017]' : 'bg-white hover:bg-black/5'
              }`}
            >
              Mode Calm: {isCalm ? 'ON' : 'OFF'}
            </button>

            <a
              href="#/"
              className="ml-2 px-3 py-1.5 rounded-full bg-black/5 hover:bg-black/10 border border-black/10 text-[#1B1017]"
            >
              ← Kembali
            </a>
          </div>
        </header>

        {/* Content sections */}
        <main className="w-full">
          {(activeTab === 'both' || activeTab === 'lobby') && (
            <div className="border-b-4 border-dashed border-[#1B1017]/20">
              <CreatorTrilogyLobby onSelectDoor={(d) => console.log('Selected door:', d)} />
            </div>
          )}

          {(activeTab === 'both' || activeTab === 'cafe') && (
            <div>
              <CafeChapter onTransitionNext={() => console.log('Transition next')} />
            </div>
          )}
        </main>
      </div>
    </WorldProvider>
  );
};
