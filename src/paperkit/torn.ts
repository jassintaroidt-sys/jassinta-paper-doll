/**
 * torn.ts — Utilitas dan Pembangkit Kontur Robekan Kertas TornEdge
 * Sumber kebenaran: DF 11.1 sampai 11.11
 *
 * Persyaratan Mutlak:
 * 1. Seed hanya 6: 101, 202, 303, 404, 505, 606 (DF 11.5).
 * 2. Deterministik murni: Seed sama = path sama, dilarang Math.random() (DF 11.5).
 * 3. Tiga lapis noise seeded: deformasi skala besar, robekan sedang, serat halus (DF 11.4).
 * 4. Mask SVG programatik, bukan clip-path atau zig-zag (DF 11.3).
 * 5. Tinggi: clamp(36px, 6vw, 90px) (DF 11.5).
 * 6. Lebar: calc(100% + 4px), margin-left: -2px (DF 11.5).
 * 7. Serat sisa (offset 3-8px, warna milk-white, tidak kontinu) (DF 11.6).
 * 8. Highlight curl 1px halus, tidak kontinu (DF 11.6).
 * 9. Bayangan di wrapper luar: filter: drop-shadow(0 6px 8px rgba(0,0,0,.18)) (DF 11.7).
 * 10. Pointer-events: none, tanpa animasi kontur (DF 11.9).
 */

import { generateSeededNoise } from './noise';

export type ValidTornSeed = 101 | 202 | 303 | 404 | 505 | 606;

export const VALID_TORN_SEEDS: readonly ValidTornSeed[] = [
  101, 202, 303, 404, 505, 606,
] as const;

export function isValidTornSeed(seed: number): seed is ValidTornSeed {
  return VALID_TORN_SEEDS.includes(seed as ValidTornSeed);
}

// Map nama section ke seed resmi DF 11.5
export const TORN_SEED_SECTION_MAP: Record<string, ValidTornSeed> = {
  opening: 101,
  writing: 202,
  contentMarketing: 303,
  exampleStrategy: 404,
  projectCampus: 505,
  archive: 606,
};

// Cache path SVG per seed agar memoized dan efisien (DF 11.9)
const tornPathCache = new Map<string, string>();
const tornMaskSvgCache = new Map<number, string>();

/**
 * Menghitung titik kontur robekan sepanjang garis horizontal [0, width]
 * Menggabungkan 3 lapis noise seeded per DF 11.4:
 * - Lapis 1: Deformasi skala besar (2-4 gelombang naik-turun besar)
 * - Lapis 2: Robekan skala sedang (bongkahan asimetris)
 * - Lapis 3: Serat skala halus (gerigi kecil serat kertas)
 */
export function calculateTornPoints(
  seed: number,
  width: number,
  height: number,
  step: number = 4
): Array<{ x: number; y: number }> {
  const count = Math.ceil(width / step);
  const points: Array<{ x: number; y: number }> = [];

  for (let i = 0; i <= count; i++) {
    const x = Math.min(width, i * step);
    const u = x / width; // Parameter normalisasi [0, 1]

    // Lapis 1: Deformasi skala besar (amplitudo 0.5 * height)
    const n1 = generateSeededNoise(seed, u * 3.5, {
      octaves: 1,
      frequency: 1.0,
    });

    // Lapis 2: Robekan skala sedang (amplitudo 0.3 * height)
    const n2 = generateSeededNoise(seed + 1000, u * 9.0, {
      octaves: 2,
      persistence: 0.5,
      frequency: 1.0,
    });

    // Lapis 3: Serat halus (amplitudo 0.15 * height)
    const n3 = generateSeededNoise(seed + 2000, u * 24.0, {
      octaves: 3,
      persistence: 0.6,
      frequency: 1.0,
    });

    // Baseline tengah di sekitar 50% height
    // Pergeseran y berkisar antara [0.15 * height, 0.85 * height]
    const displacement = n1 * 0.45 + n2 * 0.3 + n3 * 0.15;
    const y = Math.max(
      2,
      Math.min(height - 2, height * 0.5 + displacement * height * 0.4)
    );

    points.push({
      x: Number(x.toFixed(2)),
      y: Number(y.toFixed(2)),
    });
  }

  return points;
}

/**
 * generateTornPath(seed, width, height)
 * Menghasilkan string koordinat SVG path kontur robekan.
 * Deterministik dan dimemoize.
 */
export function generateTornPath(
  seed: number,
  width: number = 1000,
  height: number = 80
): string {
  const key = `${seed}_${width}_${height}`;
  const cached = tornPathCache.get(key);
  if (cached) return cached;

  const points = calculateTornPoints(seed, width, height, 4);
  if (points.length === 0) return '';

  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    d += ` L ${points[i].x} ${points[i].y}`;
  }

  tornPathCache.set(key, d);
  return d;
}

/**
 * generateTornMaskSvg(seed)
 * Menghasilkan data URI SVG mask-image programatik per DF 11.3:
 * Area atas adalah putih (opak / kelihatan), area bawah adalah transparan (robek lepas).
 * Standar viewBox 1000 x 100 untuk mask-size 100% 100%.
 */
export function generateTornMaskSvg(seed: number): string {
  const cached = tornMaskSvgCache.get(seed);
  if (cached) return cached;

  const width = 1000;
  const height = 100;
  const points = calculateTornPoints(seed, width, height, 4);

  // Bangun poligon mask: dari (0,0) -> (width, 0) -> turun ke (width, y_end) ->
  // ikuti kontur robekan mundur ke (0, y_start) -> tutup ke (0,0)
  let d = `M 0 0 L ${width} 0 L ${width} ${points[points.length - 1].y}`;
  for (let i = points.length - 2; i >= 0; i--) {
    d += ` L ${points[i].x} ${points[i].y}`;
  }
  d += ` L 0 0 Z`;

  // SVG mask dengan poligon putih opak di atas robekan
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none"><path d="${d}" fill="#FFFFFF"/></svg>`;

  // Encode ke data URI SVG
  const dataUri = `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}")`;
  tornMaskSvgCache.set(seed, dataUri);
  return dataUri;
}

/**
 * createTornEdgeStyle(seed)
 * Menghasilkan objek style CSS untuk menerapkan SVG mask pada section.
 */
export function createTornEdgeStyle(seed: number): React.CSSProperties {
  const maskUrl = generateTornMaskSvg(seed);
  const h = 'clamp(36px, 6vw, 90px)';
  return {
    WebkitMaskImage: `linear-gradient(#fff, #fff), ${maskUrl}`,
    maskImage: `linear-gradient(#fff, #fff), ${maskUrl}`,
    WebkitMaskRepeat: 'no-repeat, no-repeat',
    maskRepeat: 'no-repeat, no-repeat',
    WebkitMaskPosition: 'top left, bottom left',
    maskPosition: 'top left, bottom left',
    WebkitMaskSize: `100% calc(100% - ${h}), 100% ${h}`,
    maskSize: `100% calc(100% - ${h}), 100% ${h}`,
  };
}

/**
 * Menghasilkan path SVG untuk serat sisa (lapisan kedua offset 3-8 px, tidak kontinu)
 * dan highlight curl (1 px).
 */
export function generateTornFiberAndHighlight(
  seed: number,
  width: number = 1000,
  height: number = 100
): { fiberSegments: string[]; highlightSegments: string[] } {
  const points = calculateTornPoints(seed, width, height, 4);
  const fiberSegments: string[] = [];
  const highlightSegments: string[] = [];

  // Pembangkit serat dan highlight tidak beraturan / tidak kontinu (DF 11.6)
  let inFiber = false;
  let currentFiberPath = '';

  let inHighlight = false;
  let currentHighlightPath = '';

  for (let i = 0; i < points.length; i++) {
    const pt = points[i];
    const u = pt.x / width;

    // Noise penentu ada/tidaknya fragmen serat sisa (hanya di area tak beraturan)
    const fiberActiveNoise = generateSeededNoise(seed + 500, u * 12, {
      octaves: 1,
    });
    const shouldFiber = fiberActiveNoise > 0.25;

    // Serat offset 3 sampai 8 px ke bawah
    const fiberOffset = 3 + (fiberActiveNoise > 0 ? fiberActiveNoise * 5 : 3);

    if (shouldFiber) {
      const fy = Math.min(height - 1, pt.y + fiberOffset);
      if (!inFiber) {
        currentFiberPath = `M ${pt.x} ${fy}`;
        inFiber = true;
      } else {
        currentFiberPath += ` L ${pt.x} ${fy}`;
      }
    } else {
      if (inFiber && currentFiberPath) {
        fiberSegments.push(currentFiberPath);
        currentFiberPath = '';
      }
      inFiber = false;
    }

    // Noise penentu highlight 1px (tidak kontinu)
    const hlNoise = generateSeededNoise(seed + 800, u * 16, { octaves: 1 });
    const shouldHighlight = hlNoise > 0.45;

    if (shouldHighlight) {
      const hy = Math.max(1, pt.y - 1);
      if (!inHighlight) {
        currentHighlightPath = `M ${pt.x} ${hy}`;
        inHighlight = true;
      } else {
        currentHighlightPath += ` L ${pt.x} ${hy}`;
      }
    } else {
      if (inHighlight && currentHighlightPath) {
        highlightSegments.push(currentHighlightPath);
        currentHighlightPath = '';
      }
      inHighlight = false;
    }
  }

  if (currentFiberPath) fiberSegments.push(currentFiberPath);
  if (currentHighlightPath) highlightSegments.push(currentHighlightPath);

  return { fiberSegments, highlightSegments };
}
