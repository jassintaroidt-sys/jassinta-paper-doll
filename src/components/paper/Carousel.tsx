import React, { useRef, useState } from 'react';
import { PAPER_SHADOWS } from '../../paperkit/shadow';

export interface CarouselProps {
  items: React.ReactNode[];
  ariaLabel?: string;
  className?: string;
}

/**
 * Carousel — Kontainer geser kartu Paper Cut-Out (DF 9.4)
 * - Tombol panah prev/next
 * - Navigasi keyboard ArrowLeft / ArrowRight
 * - Pointer events / smooth snap
 * - Tidak pernah memotong media
 */
export const Carousel: React.FC<CarouselProps> = ({
  items,
  ariaLabel = 'Carousel',
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (!containerRef.current) return;
    const clamped = Math.max(0, Math.min(items.length - 1, index));
    const width = containerRef.current.clientWidth;
    containerRef.current.scrollTo({
      left: clamped * width,
      behavior: 'smooth',
    });
    setCurrentIndex(clamped);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      scrollToIndex(currentIndex - 1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      scrollToIndex(currentIndex + 1);
    }
  };

  // Sync index saat user scroll manual
  const handleScroll = () => {
    if (!containerRef.current) return;
    const width = containerRef.current.clientWidth;
    const scrollLeft = containerRef.current.scrollLeft;
    const newIndex = Math.round(scrollLeft / width);
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div
      className={`relative w-full ${className}`}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label={ariaLabel}
      style={{ outline: 'none' }}
    >
      {/* Kontainer scroll bersarang dengan data-lenis-prevent */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        data-lenis-prevent="true"
        className="flex w-full overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="w-full shrink-0 snap-center flex items-center justify-center p-2"
          >
            {item}
          </div>
        ))}
      </div>

      {/* Navigasi panah kiri/kanan */}
      <div className="mt-3 flex items-center justify-between px-2">
        <button
          onClick={() => scrollToIndex(currentIndex - 1)}
          disabled={currentIndex === 0}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-stone-800 border border-stone-300 shadow-sm disabled:opacity-30 disabled:cursor-not-allowed hover:bg-stone-50 cursor-pointer focus-visible:outline-2 focus-visible:outline-pink-500"
          style={{ filter: PAPER_SHADOWS.contact }}
          aria-label="Previous slide"
        >
          ‹
        </button>

        {/* Indikator titik */}
        <div className="flex gap-1.5" aria-hidden="true">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                i === currentIndex ? 'w-5 bg-pink-500' : 'w-2 bg-stone-300'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => scrollToIndex(currentIndex + 1)}
          disabled={currentIndex === items.length - 1}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-stone-800 border border-stone-300 shadow-sm disabled:opacity-30 disabled:cursor-not-allowed hover:bg-stone-50 cursor-pointer focus-visible:outline-2 focus-visible:outline-pink-500"
          style={{ filter: PAPER_SHADOWS.contact }}
          aria-label="Next slide"
        >
          ›
        </button>
      </div>
    </div>
  );
};
