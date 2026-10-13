/**
 * src/components/hud/GlobalFooter.tsx
 * Footer layar penuh tinggi 20 px (DF 10.6)
 * DM Mono uppercase: 2026 (kiri), Jassinta Roid Triniti (tengah), Creative Portfolio (kanan)
 */

export function GlobalFooter() {
  return (
    <footer
      className="fixed bottom-0 inset-x-0 h-[20px] z-30 bg-[#FFFDF9]/90 backdrop-blur-sm border-t border-[#1B1017]/10 px-4 flex items-center justify-between text-[10px] font-mono text-[#1B1017]/60 pointer-events-none select-none"
      role="contentinfo"
    >
      <span>2026</span>
      <span className="font-semibold text-[#1B1017]/80">Jassinta Roid Triniti</span>
      <span className="hidden sm:inline">Creative Portfolio</span>
    </footer>
  );
}
