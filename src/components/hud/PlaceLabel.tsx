/**
 * src/components/hud/PlaceLabel.tsx
 * Papan nama tempat (label kertas gunting) 12 adegan (DF 6.6)
 *
 * Menggunakan aset S_label-* atau inline render presisi:
 * - Dua baris: Baris 1 DM Mono, Baris 2 Shantell Sans 600
 * - Tepi gunting, sudut kanan bawah terangkat, 6-8 garis sinar di sekeliling
 * - Rotasi dekoratif tetap (DV 3.4)
 * - Muncul dengan sticker pop 320 ms
 */

interface PlaceLabelProps {
  labelId: string;
  className?: string;
}

export function PlaceLabel({ labelId, className = '' }: PlaceLabelProps) {
  return (
    <div
      className={`place-label inline-block select-none transform transition-transform duration-320 hover:scale-105 active:scale-95 ${className}`}
      role="heading"
      aria-level={2}
    >
      <img
        src={`/assets/ui/${labelId}_V0.webp`}
        alt=""
        className="w-48 sm:w-56 md:w-64 h-auto object-contain filter drop-shadow-md"
        loading="lazy"
        decoding="async"
        onError={(e) => {
          // Fallback ke SVG bila webp belum termuat
          e.currentTarget.src = `/assets/ui/${labelId}_V0.svg`;
        }}
      />
    </div>
  );
}
