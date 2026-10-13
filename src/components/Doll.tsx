import React, { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import { mediaUrl } from '../lib/media';
import { SpeechBubble } from './SpeechBubble';
import { COSTUMES, type CostumeDef } from '../assets-def/doll/costumes';
import { DOLL_MATRIX, type PoseType, type ViewAngle, type JointAngles } from '../assets-def/doll/poses';
import { FACE_EXPRESSIONS, type ExpressionType } from '../assets-def/doll/faces';

export interface DollProps {
  costume?: string; // 'K1'..'K17' atau prefix seperti 'doll_01_seragam'
  pose?: PoseType | 'walk';
  view?: ViewAngle;
  expression?: ExpressionType;
  calmMode?: boolean;
  reducedMotion?: boolean;
  scale?: number;
  interactive?: boolean;
  speechBubbleText?: string;
  onTap?: () => void;
  jointAngles?: JointAngles;
  className?: string;
  isOverlayOpen?: boolean;
  onBubbleDismiss?: () => void;
}

/**
 * Komponen Doll — Jassinta (PB 5.10, DV 4, 5, 6, 7 & DF 7.4)
 * Menampilkan karakter paper doll dengan:
 * - 17 variasi kostum K1..K17
 * - 10 pose sendi hero & walk cycle
 * - Turnaround 3 tampak (F, W, B) dengan paper-turn 240 ms
 * - Animasi tab bahu saat ganti kostum 450 ms
 * - Bayangan elips yang mengecil ke 70% saat melompat
 * - Reaksi klik interaktif (lompat 320 ms, reaksi bubble acak, putar 360° pada klik ke-5)
 * - Mode Calm / reduced motion yang menonaktifkan transisi gerak
 */
export const Doll: React.FC<DollProps> = ({
  costume = 'K1',
  pose = 'idle',
  view = 'F',
  expression = 'smile',
  calmMode = false,
  reducedMotion = false,
  scale = 1,
  interactive = true,
  speechBubbleText,
  onTap,
  jointAngles,
  className = '',
  isOverlayOpen = false,
  onBubbleDismiss,
}) => {
  // Normalize costume def
  const costumeDef: CostumeDef = useMemo(() => {
    const found = COSTUMES.find(
      (c) => c.id.toLowerCase() === costume.toLowerCase() || c.assetPrefix === costume
    );
    return found || COSTUMES[0];
  }, [costume]);

  // States untuk transisi & reaksi
  const [currentView, setCurrentView] = useState<ViewAngle>(view);
  const [isTurning, setIsTurning] = useState(false);
  const [isChangingCostume, setIsChangingCostume] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [isDizzy, setIsDizzy] = useState(false);
  const [tapCount, setTapCount] = useState(0);
  const [bubbleText, setBubbleText] = useState<string | null>(speechBubbleText || null);
  const [isBreathing, setIsBreathing] = useState(false);

  // Sync external speechBubbleText
  useEffect(() => {
    if (speechBubbleText !== undefined) {
      setBubbleText(speechBubbleText);
    }
  }, [speechBubbleText]);

  // Paper-turn 240 ms saat view berubah (scaleX 1 -> 0.05 -> 1)
  const prevViewRef = useRef(view);
  useEffect(() => {
    if (prevViewRef.current !== view) {
      prevViewRef.current = view;
      if (calmMode || reducedMotion) {
        setCurrentView(view);
      } else {
        setIsTurning(true);
        const timer1 = setTimeout(() => {
          setCurrentView(view);
          const timer2 = setTimeout(() => {
            setIsTurning(false);
          }, 120);
          return () => clearTimeout(timer2);
        }, 120);
        return () => clearTimeout(timer1);
      }
    }
  }, [view, calmMode, reducedMotion]);

  // Costume change 450 ms tab trigger
  const prevCostumeRef = useRef(costume);
  useEffect(() => {
    if (prevCostumeRef.current !== costume) {
      prevCostumeRef.current = costume;
      if (!calmMode && !reducedMotion) {
        setIsChangingCostume(true);
        const timer = setTimeout(() => setIsChangingCostume(false), 450);
        return () => clearTimeout(timer);
      }
    }
  }, [costume, calmMode, reducedMotion]);

  // Ambient breathing loop (idle > 8s)
  useEffect(() => {
    if (pose === 'idle' && !calmMode && !reducedMotion) {
      const interval = setInterval(() => {
        setIsBreathing((b) => !b);
      }, 4000);
      return () => clearInterval(interval);
    }
    setIsBreathing(false);
  }, [pose, calmMode, reducedMotion]);

  // Resolusi file aset terbaik untuk kombinasi kostum × tampak × pose
  const assetFile = useMemo(() => {
    // 1. Cari kecocokan di matriks 31+3
    const match = DOLL_MATRIX.find(
      (m) =>
        m.costumeId === costumeDef.id &&
        m.view === currentView &&
        (m.pose === pose || (pose === 'walk' && m.pose === 'walk'))
    );
    if (match) return match.assetFile;

    // 2. Fallback berdasarkan view & prefix
    if (currentView === 'B') {
      const bFile = `${costumeDef.assetPrefix}_B_idle.webp`;
      return bFile;
    }
    if (currentView === 'W') {
      return `${costumeDef.assetPrefix}_W_walk-sheet.webp`;
    }
    return `${costumeDef.assetPrefix}_F_idle.webp`;
  }, [costumeDef, currentView, pose]);

  // Resolusi overlay ekspresi wajah (bila bukan tampak B dan bukan pose peek)
  const faceOverlayFile = useMemo(() => {
    if (currentView === 'B' || pose === 'peek') return null;
    const exprDef = FACE_EXPRESSIONS[expression] || FACE_EXPRESSIONS.smile;
    return currentView === 'W' ? exprDef.assetFileW : exprDef.assetFileF;
  }, [currentView, pose, expression]);

  // Interaksi Tap / Klik pada Doll (DF 7.4)
  const handleDollClick = useCallback(() => {
    if (!interactive) return;

    onTap?.();
    const newCount = tapCount + 1;
    setTapCount(newCount);

    if (calmMode || reducedMotion) {
      if (newCount % 5 === 0) {
        setBubbleText('Dizzy!');
      } else {
        const msgs = ['Hi!', 'Still here.', 'Keep scrolling →'];
        setBubbleText(msgs[(newCount - 1) % msgs.length]);
      }
      return;
    }

    if (newCount % 5 === 0) {
      // Reaksi klik kelima: putar 360° + Dizzy! (E1)
      setIsDizzy(true);
      setBubbleText('Dizzy!');
      setTimeout(() => setIsDizzy(false), 600);
    } else {
      // Lompat kecil 320 ms
      setIsJumping(true);
      const msgs = ['Hi!', 'Still here.', 'Keep scrolling →'];
      setBubbleText(msgs[(newCount - 1) % msgs.length]);
      setTimeout(() => setIsJumping(false), 320);
    }
  }, [interactive, tapCount, onTap, calmMode, reducedMotion]);

  const handleDismissBubble = () => {
    setBubbleText(null);
    onBubbleDismiss?.();
  };

  // Kalkulasi gaya transformasi CSS
  const dollTransform = useMemo(() => {
    const parts: string[] = [];

    // Scale
    parts.push(`scale(${scale})`);

    // Paper-turn transition
    if (isTurning) {
      parts.push('scaleX(0.05)');
    } else {
      parts.push('scaleX(1)');
    }

    // Lompat 320 ms (naik 67 px)
    if (isJumping) {
      parts.push('translateY(-67px)');
    } else if (isBreathing) {
      parts.push('translateY(-2px)');
    }

    // Dizzy 360° rotation
    if (isDizzy) {
      parts.push('rotate(360deg)');
    }

    // Overlay buka: mundur 40 px & scale 90%
    if (isOverlayOpen) {
      parts.push('translateZ(-40px) scale(0.9)');
    }

    // Custom slider joint torso/head angle
    if (jointAngles?.torsoTilt) {
      parts.push(`rotate(${jointAngles.torsoTilt}deg)`);
    }

    return parts.join(' ');
  }, [scale, isTurning, isJumping, isBreathing, isDizzy, isOverlayOpen, jointAngles]);

  return (
    <div
      className={`relative inline-flex flex-col items-center select-none ${className}`}
      style={{ perspective: 1000 }}
    >
      {/* SpeechBubble (DF 7.5) */}
      {bubbleText && (
        <SpeechBubble
          text={bubbleText}
          visible={true}
          onDismiss={handleDismissBubble}
          position={currentView === 'W' ? 'top-left' : 'top-right'}
        />
      )}

      {/* Kontainer Doll dengan CSS 3D & Transform */}
      <div
        onClick={handleDollClick}
        role={interactive ? 'button' : undefined}
        tabIndex={interactive ? 0 : undefined}
        aria-label={`Jassinta Paper Doll — ${costumeDef.name}, Pose ${pose}`}
        onKeyDown={(e) => {
          if (interactive && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            handleDollClick();
          }
        }}
        className={`relative cursor-pointer transition-transform duration-200 outline-none focus-visible:ring-3 focus-visible:ring-[#FF2E93] rounded-2xl ${
          calmMode || reducedMotion ? '' : 'transition-all duration-240 ease-out'
        }`}
        style={{
          transform: dollTransform,
          filter: costumeDef.specialEffect ? costumeDef.specialEffect : undefined,
          transformOrigin: 'bottom center',
        }}
      >
        {/* Tab Lipat Bahu Saat Ganti Kostum (DV 4.8 — 450 ms) */}
        {isChangingCostume && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex justify-between w-28 z-30 pointer-events-none animate-in fade-in duration-200">
            <div
              className="w-3.5 h-3.5 rounded-xs shadow-xs"
              style={{
                backgroundColor: costumeDef.colors.outer || costumeDef.colors.top || '#EBD08C',
                filter: 'brightness(0.92)',
              }}
            />
            <div
              className="w-3.5 h-3.5 rounded-xs shadow-xs"
              style={{
                backgroundColor: costumeDef.colors.outer || costumeDef.colors.top || '#EBD08C',
                filter: 'brightness(0.92)',
              }}
            />
          </div>
        )}

        {/* Gambar Utama Doll Traced (WebP / SVG) */}
        <img
          src={mediaUrl(`/assets/doll/${assetFile}`)}
          alt={`Doll ${costumeDef.name} ${currentView} ${pose}`}
          className="max-h-[560px] w-auto object-contain pointer-events-none drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)]"
          draggable={false}
          onError={(e) => {
            // Fallback ke master F jika file belum termuat
            const target = e.currentTarget;
            if (!target.src.includes('doll_00_master_F_idle')) {
              target.src = mediaUrl('/assets/doll/doll_00_master_F_idle.webp');
            }
          }}
        />

        {/* Lapisan Tambahan Wajah bila Berbeda dari Default Smile */}
        {faceOverlayFile && expression !== 'smile' && (
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            {/* Wajah di-crop ke bukaan hijab */}
            <img
              src={mediaUrl(`/assets/doll/${faceOverlayFile}`)}
              alt={`Wajah ${expression}`}
              className="absolute top-[8%] left-[26%] w-[48%] object-contain opacity-95"
              draggable={false}
            />
          </div>
        )}
      </div>

      {/* Bayangan Elips di Lantai (DV 4.11) */}
      <div
        className="mt-1 transition-all duration-300 rounded-[50%]"
        style={{
          width: isJumping ? '48px' : '72px',
          height: isJumping ? '4px' : '6px',
          backgroundColor: '#1B1017',
          opacity: isJumping ? 0.08 : 0.18,
          filter: 'blur(1.5px)',
          transform: `scale(${scale})`,
        }}
      />
    </div>
  );
};
