import React, { useState, useRef, useEffect } from 'react';
import { PAPER_SHADOWS } from '../../paperkit/shadow';

export interface HoverLabelProps {
  label: string; // Teks price-tag (misal "Espresso Cup · 2025")
  priceOrSubtext?: string;
  children: React.ReactElement;
  className?: string;
}

/**
 * HoverLabel — Label price-tag kertas interaktif (DF 9.4)
 * Muncul saat hover DAN saat fokus keyboard (focus-visible).
 * Dilengkapi collision detection agar tidak terpotong keluar viewport.
 */
export const HoverLabel: React.FC<HoverLabelProps> = ({
  label,
  priceOrSubtext,
  children,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);

  const updatePosition = () => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();

    // Default: di atas tengah objek
    let top = rect.top - 46;
    let left = rect.left + rect.width / 2;

    // Collision detection ke tepi layar
    if (top < 10) {
      top = rect.bottom + 10; // jika mentok atas, pindah ke bawah
    }
    if (left < 80) {
      left = 80; // mentok kiri
    } else if (left > window.innerWidth - 80) {
      left = window.innerWidth - 80; // mentok kanan
    }

    setPosition({ top, left });
  };

  const handleShow = () => {
    updatePosition();
    setIsVisible(true);
  };

  const handleHide = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    if (isVisible) {
      window.addEventListener('scroll', updatePosition, { passive: true });
      window.addEventListener('resize', updatePosition);
      return () => {
        window.removeEventListener('scroll', updatePosition);
        window.removeEventListener('resize', updatePosition);
      };
    }
  }, [isVisible]);

  return (
    <div
      ref={triggerRef}
      className={`relative inline-block ${className}`}
      onMouseEnter={handleShow}
      onMouseLeave={handleHide}
      onFocus={handleShow}
      onBlur={handleHide}
    >
      {children}

      {/* Tag kertas melayang di portal / fixed overlay jika aktif */}
      {isVisible && (
        <div
          ref={tagRef}
          className="pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-full transition-opacity duration-150"
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
            filter: PAPER_SHADOWS.mid,
          }}
          role="tooltip"
        >
          {/* Tali price-tag kecil */}
          <div className="mx-auto h-2 w-[1.5px] bg-[#7A4A32] opacity-70" aria-hidden="true" />

          {/* Badan label price-tag */}
          <div
            className="flex items-center gap-2 rounded border border-dashed border-stone-400 bg-[#FFFDF9] px-2.5 py-1 text-xs shadow-sm"
            style={{
              transform: 'rotate(-2deg)',
              color: 'var(--ink)',
              fontFamily: 'var(--font-poppins)',
            }}
          >
            <span className="font-medium">{label}</span>
            {priceOrSubtext && (
              <span className="font-mono text-[10px] text-pink-700 opacity-90">
                {priceOrSubtext}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
