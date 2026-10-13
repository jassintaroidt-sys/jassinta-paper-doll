/**
 * src/components/world/WorldContext.tsx
 * Pengelola status global dunia, scene aktif, babak, kedalaman, dan variabel CSS tema.
 *
 * Sesuai aturan:
 * - DF 6.7: Tiga babak (ACT I · FELT, ACT II · SHARED, ACT III · REMEMBERED)
 * - DF 6.1: Tiga tingkat kedalaman (Full, Lite/Ringan, Calm)
 * - DF 10.3: Scroll-lock di Opening sampai OPEN
 * - Wipe antardunia 700 ms mengganti variabel --brand-*
 */

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import type { SceneConfig, DepthLevel, ActNumber } from './worldTypes';
import { SCENES } from './worldData';

interface WorldContextValue {
  activeScene: SceneConfig;
  activeAct: ActNumber;
  scrollProgress: number; // 0..1
  visitedScenes: Set<string>;
  depthLevel: DepthLevel;
  isOpeningUnlocked: boolean;
  unlockOpening: () => void;
  setActiveSceneById: (id: string) => void;
  setDepthLevel: (depth: DepthLevel) => void;
  markSceneVisited: (chapterNum: string) => void;
}

const WorldContext = createContext<WorldContextValue | null>(null);

export function WorldProvider({ children }: { children: ReactNode }) {
  const [activeScene, setActiveScene] = useState<SceneConfig>(SCENES[0]);
  const [activeAct, setActiveAct] = useState<ActNumber>(1);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [visitedScenes, setVisitedScenes] = useState<Set<string>>(new Set(['0']));
  const [depthLevel, setDepthLevel] = useState<DepthLevel>('full');
  const [isOpeningUnlocked, setIsOpeningUnlocked] = useState<boolean>(() => {
    // Ingat status OPEN selama sesi
    try {
      return sessionStorage.getItem('jassinta_opening_unlocked') === 'true';
    } catch {
      return false;
    }
  });

  const unlockOpening = useCallback(() => {
    setIsOpeningUnlocked(true);
    try {
      sessionStorage.setItem('jassinta_opening_unlocked', 'true');
    } catch {
      // ignore
    }
  }, []);

  const markSceneVisited = useCallback((chapterNum: string) => {
    setVisitedScenes((prev) => {
      if (prev.has(chapterNum)) return prev;
      const next = new Set(prev);
      next.add(chapterNum);
      return next;
    });
  }, []);

  const setActiveSceneById = useCallback(
    (id: string) => {
      const found = SCENES.find((s) => s.id === id || s.chapterNum === id);
      if (found) {
        setActiveScene(found);
        setActiveAct(found.act);
        markSceneVisited(found.chapterNum);
      }
    },
    [markSceneVisited]
  );

  // Pasang CSS variabel tema di elemen dokumen root
  useEffect(() => {
    const rootEl = document.documentElement;
    rootEl.style.setProperty('--wall-tint', activeScene.wallTint);
    rootEl.style.setProperty('--fiber-tint', activeScene.fiberTint);
    rootEl.style.setProperty('--brand-color', activeScene.brandColor);
    rootEl.style.setProperty('--brand-secondary', activeScene.brandSecondary || activeScene.brandColor);
    rootEl.style.setProperty('--floor-tint', activeScene.floorTint);
  }, [activeScene]);

  // Listener scroll ringan untuk estimasi progress
  useEffect(() => {
    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        setScrollProgress(window.scrollY / maxScroll);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <WorldContext.Provider
      value={{
        activeScene,
        activeAct,
        scrollProgress,
        visitedScenes,
        depthLevel,
        isOpeningUnlocked,
        unlockOpening,
        setActiveSceneById,
        setDepthLevel,
        markSceneVisited,
      }}
    >
      {children}
    </WorldContext.Provider>
  );
}

export function useWorld() {
  const ctx = useContext(WorldContext);
  if (!ctx) {
    throw new Error('useWorld must be used within a WorldProvider');
  }
  return ctx;
}
