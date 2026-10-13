import React, { useEffect, useRef } from 'react';
import { PAPER_SHADOWS } from '../../paperkit/shadow';

export interface OverlayProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  triggerElement?: HTMLElement | null; // Elemen pemicu untuk kembalikan fokus
  children: React.ReactNode;
  className?: string;
}

/**
 * Overlay — Dialog modal layar penuh Paper Cut-Out (DF 9.4 & Aturan 9)
 * - role="dialog", aria-modal="true"
 * - Focus trap & Esc untuk menutup
 * - Mengunci scroll body saat terbuka
 * - Mengembalikan fokus ke elemen pemicu saat ditutup
 */
export const Overlay: React.FC<OverlayProps> = ({
  isOpen,
  onClose,
  title,
  triggerElement,
  children,
  className = '',
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Focus trap & Esc listener
  useEffect(() => {
    if (!isOpen) return;

    // Simpan elemen aktif sebelum overlay dibuka jika belum diberikan
    const previousActive = triggerElement || (document.activeElement as HTMLElement);

    // Kunci scroll halaman
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Fokus ke tombol tutup
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab' && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      previousActive?.focus?.();
    };
  }, [isOpen, onClose, triggerElement]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      data-lenis-prevent="true"
    >
      {/* Backdrop semi-transparan dengan blur kertas halus */}
      <div
        className="fixed inset-0 bg-[#1B1017]/55 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Konten modal dialog (Sticker pop masuk) */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={`relative z-10 max-h-[90svh] w-full max-w-2xl overflow-y-auto rounded-lg bg-[#FFFDF9] p-6 text-[#1B1017] shadow-2xl border-2 border-stone-300 animate-in fade-in zoom-in-95 duration-200 ${className}`}
        style={{
          filter: PAPER_SHADOWS.front,
        }}
      >
        {/* Header dialog */}
        <div className="flex items-center justify-between border-b border-stone-200 pb-3 mb-4">
          <h2
            className="text-xl font-bold tracking-tight"
            style={{ fontFamily: 'var(--font-gloock)' }}
          >
            {title}
          </h2>

          {/* Tombol Tutup (X) yang jelas dan ramah aksesibilitas */}
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-100 text-stone-700 hover:bg-stone-200 focus-visible:outline-3 focus-visible:outline-pink-500 cursor-pointer text-sm font-bold"
            aria-label="Close dialog"
          >
            ✕
          </button>
        </div>

        {/* Isi konten dialog */}
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
};
