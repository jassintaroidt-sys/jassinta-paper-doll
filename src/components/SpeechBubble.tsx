import React from 'react';

export interface SpeechBubbleProps {
  text: string;
  visible?: boolean;
  onDismiss?: () => void;
  className?: string;
  position?: 'top-right' | 'top-left' | 'top-center';
}

/**
 * SpeechBubble Component — Gelembung Ucapan Doll (PB 5.10 & DF 7.5)
 * - role="note"
 * - Shantell Sans (min 17 px)
 * - Gelembung kertas potong dengan washi tape pink (#FFB3D9 70%) di sudut kiri atas
 * - Ekor kertas mengarah ke mulut doll
 */
export const SpeechBubble: React.FC<SpeechBubbleProps> = ({
  text,
  visible = true,
  onDismiss,
  className = '',
  position = 'top-right',
}) => {
  if (!visible || !text) return null;

  const posClasses = {
    'top-right': 'bottom-full left-1/2 -translate-y-4 translate-x-2',
    'top-left': 'bottom-full right-1/2 -translate-y-4 -translate-x-2',
    'top-center': 'bottom-full left-1/2 -translate-y-4 -translate-x-1/2',
  }[position];

  return (
    <div
      role="note"
      aria-live="polite"
      onClick={onDismiss}
      className={`absolute ${posClasses} z-40 max-w-xs cursor-pointer select-none transition-all duration-300 animate-in fade-in zoom-in-95 ${className}`}
    >
      {/* Washi Tape Strip (#FFB3D9 70%) */}
      <div
        className="absolute -top-2 left-3 h-3 w-7 -rotate-6 rounded-xs shadow-xs"
        style={{
          backgroundColor: '#FFB3D9',
          opacity: 0.85,
          border: '0.5px solid rgba(0,0,0,0.06)',
        }}
      />

      {/* Bubble Container (Handmade cut-paper card) */}
      <div
        className="relative rounded-2xl bg-white px-4 py-2.5 text-[#1B1017] shadow-[0_4px_12px_rgba(0,0,0,0.12),0_1px_3px_rgba(0,0,0,0.08)]"
        style={{
          fontFamily: "'Shantell Sans', cursive, sans-serif",
          fontSize: '17px',
          lineHeight: '1.3',
          border: '1.5px solid #1B1017',
        }}
      >
        <span className="italic">{text}</span>

        {/* Paper Bubble Tail */}
        <div
          className="absolute -bottom-2 left-6 h-3 w-3 -rotate-45 bg-white shadow-[-1px_1px_2px_rgba(0,0,0,0.05)]"
          style={{
            borderLeft: '1.5px solid #1B1017',
            borderBottom: '1.5px solid #1B1017',
          }}
        />
      </div>
    </div>
  );
};
