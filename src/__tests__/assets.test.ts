import { describe, expect, it } from 'vitest';
import { ALL_ASSET_DEFS, ASSET_REGISTRY, getAssetDef, getAssetDefByRow, MANIFEST_ROWS } from '../assets-def';

describe('Asset Registry & Manifest Coverage (P04)', () => {
  it('harus memuat seluruh 355 baris manifest di MANIFEST_ROWS', () => {
    expect(MANIFEST_ROWS.length).toBe(355);
  });

  it('harus memiliki 355 entri terdaftar di ALL_ASSET_DEFS', () => {
    expect(ALL_ASSET_DEFS.length).toBe(355);
  });

  it('setiap baris manifest (kecuali reuse_of dan css-only) harus memiliki definisi valid', () => {
    let checkedCount = 0;
    for (const row of MANIFEST_ROWS) {
      if (row.reuse_of || row.kind === 'css-only') {
        continue;
      }

      checkedCount++;
      const def = getAssetDefByRow(row.id, row.file);
      expect(def, `Definisi untuk row ${row.id} (${row.file}) harus ada`).toBeDefined();
      expect(def?.id).toBe(row.id);
      expect(def?.file).toBe(row.file);
      expect(def?.folder).toBe(row.folder);
      expect(def?.seed).toBeTypeOf('number');
      expect(def?.seed).toBeGreaterThan(0);
      expect(def?.hd).toHaveLength(2);
      expect(def?.layers).toBeDefined();
    }

    // 355 total - 9 reuse_of - 6 css-only = 340 baris aset aktual
    expect(checkedCount).toBe(340);
  });

  it('baris reuse_of harus memiliki penanda reuseOf yang benar', () => {
    const reuseRows = MANIFEST_ROWS.filter((r) => r.reuse_of);
    expect(reuseRows.length).toBe(9);

    for (const row of reuseRows) {
      const def = getAssetDefByRow(row.id, row.file);
      expect(def).toBeDefined();
      expect(def?.reuseOf).toBe(row.reuse_of);
    }
  });

  it('baris kind=css-only harus memiliki penanda cssOnly=true', () => {
    const cssRows = MANIFEST_ROWS.filter((r) => r.kind === 'css-only');
    expect(cssRows.length).toBe(6);

    for (const row of cssRows) {
      const def = getAssetDefByRow(row.id, row.file);
      expect(def).toBeDefined();
      expect(def?.cssOnly).toBe(true);
    }
  });

  it('semua 12 aset P02 harus terdaftar dengan status done', () => {
    const p02Defs = ALL_ASSET_DEFS.filter((d) => d.ownerPrompt === 'P02');
    expect(p02Defs.length).toBe(12);
    for (const def of p02Defs) {
      expect(def.status).toBe('done');
    }
  });

  it('semua 56 aset P03 harus terdaftar dengan status done', () => {
    const p03Defs = ALL_ASSET_DEFS.filter((d) => d.ownerPrompt === 'P03');
    expect(p03Defs.length).toBe(56);
    for (const def of p03Defs) {
      expect(def.status).toBe('done');
    }
  });

  it('ASSET_REGISTRY dapat mengambil aset baik dengan ID maupun nama file', () => {
    expect(ASSET_REGISTRY.size).toBeGreaterThanOrEqual(355);

    const tileDef = getAssetDef('kit_paper-tile-neutral_512.webp');
    expect(tileDef).toBeDefined();
    expect(tileDef?.folder).toBe('kit');

    const dollDef = getAssetDef('doll_00_master_F_idle.webp');
    expect(dollDef).toBeDefined();
    expect(dollDef?.id).toBe('doll_00');
  });
});
