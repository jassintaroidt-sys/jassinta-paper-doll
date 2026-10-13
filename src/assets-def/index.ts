/**
 * src/assets-def/index.ts
 * Registri lengkap semua 355 aset manifest Jassinta Paper Doll Journey.
 *
 * Sesuai aturan:
 * - .agents/rules/30-assets-by-code.md
 * - DV 2, 3, 10
 * - Baris reuse_of -> referensi berkas asal
 * - Baris kind=css-only -> runtime component, bukan raster
 * - Setiap baris manifest memiliki definisi terdaftar
 */

import { MANIFEST_ROWS, type ManifestRow } from './manifest-rows';

// Re-ekspor definisi doll (P03)
export * from './doll/brads';
export * from './doll/bubbles';
export * from './doll/colors';
export * from './doll/costumes';
export * from './doll/faces';
export * from './doll/poses';
export * from './doll/proportions';
export { MANIFEST_ROWS, type ManifestRow };

// ─────────────────────────────────────────────────────────────
// Tipe definisi aset
// ─────────────────────────────────────────────────────────────
export interface AssetLayer {
  shape: 'rect' | 'ellipse' | 'path' | 'circle' | 'polygon' | 'line';
  fill: string;
  tone?: string;
  opacity?: number;
  strokeWidth?: number;
  detail?: string;
  points?: string;
  d?: string;
}

export interface AssetDef {
  id: string;          // ID manifest
  file: string;        // nama file persis manifest
  folder: string;      // subfolder di public/assets/
  chapter: string;     // chapter nomor/kode
  hd: [number, number]; // [width, height] dalam Hd (1 Hd = 1120px kerja)
  angle: string;        // 'F' | 'W' | 'B' | 'V0' | 'V3' | 'VT' | 'VH' | 'VS' | 'VX' | 'VL'
  kind: string;         // 'paper-kit' | 'doll-rig' | 'paper-shape' | 'css3d-object' | 'react-ui'
  seed: number;         // seed PRNG deterministik
  layers: AssetLayer[];
  reuseOf?: string;    // target reuse bila reuse_of
  cssOnly?: boolean;   // true bila kind === 'css-only'
  ownerPrompt: string; // P02, P03, P04, P05, ...
  status: 'done' | 'placeholder' | 'missing';
  specColor?: string;
  specDetail?: string;
  promptRef?: string;
}

// ─────────────────────────────────────────────────────────────
// Helper hash untuk seed deterministik
// ─────────────────────────────────────────────────────────────
export function hashId(id: string): number {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = (hash << 5) - hash + id.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash) || 42;
}

function parseHex(text: string): string {
  const match = text.match(/#[0-9A-Fa-f]{6}/);
  return match ? match[0] : '#FFFDF9';
}

function parseRatio(prompt: string): [number, number] {
  const m = prompt.match(/(\d+(?:\.\d+)?):(\d+(?:\.\d+)?)\s*$/) ?? prompt.match(/,\s*(\d+(?:\.\d+)?):(\d+(?:\.\d+)?)/);
  if (m) {
    const w = parseFloat(m[1]);
    const h = parseFloat(m[2]);
    if (w > 0 && h > 0) {
      return [w / (h || 1), 1];
    }
  }
  return [1, 1];
}

// ─────────────────────────────────────────────────────────────
// Pembuatan entri definisi dari Manifest Rows
// ─────────────────────────────────────────────────────────────
const assetList: AssetDef[] = [];
const registryMap: Map<string, AssetDef> = new Map();

for (const row of MANIFEST_ROWS) {
  const seed = hashId(row.id);
  const color = parseHex(`${row.spec_color_material} ${row.prompt_ref}`);
  const hd = parseRatio(row.prompt_ref);

  const isCssOnly = row.kind === 'css-only';
  const hasReuse = Boolean(row.reuse_of);

  // Status awal dari manifest atau status produksi
  let status: 'done' | 'placeholder' | 'missing' = 'missing';
  if (row.owner_prompt === 'P02' || row.owner_prompt === 'P03') {
    status = 'done';
  } else if (row.status === 'done') {
    status = 'done';
  } else {
    status = 'placeholder';
  }

  const layers: AssetLayer[] = [];
  if (!isCssOnly && !hasReuse) {
    layers.push({
      shape: 'rect',
      fill: color,
      tone: 'rgba(27,16,23,0.12)',
      detail: row.spec_detail || row.id,
    });
  }

  const def: AssetDef = {
    id: row.id,
    file: row.file,
    folder: row.folder,
    chapter: row.chapter,
    hd,
    angle: row.angle || 'V0',
    kind: row.kind,
    seed,
    layers,
    reuseOf: row.reuse_of || undefined,
    cssOnly: isCssOnly,
    ownerPrompt: row.owner_prompt,
    status,
    specColor: color,
    specDetail: row.spec_detail,
    promptRef: row.prompt_ref,
  };

  assetList.push(def);

  // Daftarkan di Map untuk lookup cepat:
  // 1. By exact filename (unik untuk semua 355 baris)
  registryMap.set(row.file, def);
  // 2. By ID (bila belum ada, agar ID unik langsung tertangkap)
  if (!registryMap.has(row.id)) {
    registryMap.set(row.id, def);
  }
  // 3. By compound id + '_' + file
  registryMap.set(`${row.id}_${row.file}`, def);
}

export const ALL_ASSET_DEFS: AssetDef[] = assetList;
export const ASSET_REGISTRY: Map<string, AssetDef> = registryMap;

/**
 * Mencari AssetDef berdasarkan file atau ID
 */
export function getAssetDef(key: string): AssetDef | undefined {
  return registryMap.get(key);
}

/**
 * Mencari AssetDef persis berdasarkan ID dan nama berkas
 */
export function getAssetDefByRow(id: string, file: string): AssetDef | undefined {
  return registryMap.get(file) || registryMap.get(`${id}_${file}`) || registryMap.get(id);
}
