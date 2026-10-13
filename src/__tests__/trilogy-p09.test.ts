/**
 * src/__tests__/trilogy-p09.test.ts
 * Pengujian komprehensif P09: Lobi 3.0 dan Café 3A (DF 16, DV 8.4, DV 8.5)
 */

import { describe, it, expect } from 'vitest';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { SCENES } from '../components/world/worldData';
import { WORKS } from '../data/works';
import { STRINGS } from '../data/strings';
import { COSTUMES } from '../assets-def/doll/costumes';

describe('P09 · Lobi 3.0 dan Café 3A (Creator Trilogy Prototype)', () => {
  describe('1. Konfigurasi Lobi 3.0 (DF 16.2 & DV 8.4)', () => {
    const lobbyScene = SCENES.find((s) => s.chapterNum === '3.0');

    it('Scene 3.0 terdaftar dengan mode D dan tinggi 250 svh', () => {
      expect(lobbyScene).toBeDefined();
      expect(lobbyScene?.mode).toBe('D');
      expect(lobbyScene?.heightVh).toBe(250);
      expect(lobbyScene?.act).toBe(2);
      expect(lobbyScene?.actTitle).toBe('ACT II · SHARED');
    });

    it('Warna tema 3.0 sesuai DV 8.4: lilac #D4C1F5, serat #BBA7E6, lantai mint #D4F2E4', () => {
      expect(lobbyScene?.wallTint).toBe('#D4C1F5');
      expect(lobbyScene?.fiberTint).toBe('#BBA7E6');
      expect(lobbyScene?.floorTint).toBe('#D4F2E4');
    });

    it('Teks kejujuran dan speech bubble 3.0 terdefinisi persis bible', () => {
      expect(STRINGS.ch3.honestyTag).toBe(
        'Every number here is real, including the small ones. The small ones taught me the most.'
      );
      expect(STRINGS.dollBubbles.f3_0_4).toBe('Pick a door. Any door.');
      expect(STRINGS.ch3.trilogyHeadline).toBe('From Ordinary Content to Memorable Stories');
    });

    it('Kostum K4 (Kardigan lobi) memiliki hijab wisteria #A98BDA agar kontras terhadap dinding lilac', () => {
      const k4 = COSTUMES.find((c) => c.id === 'K4');
      expect(k4).toBeDefined();
      expect(k4?.hijabColor).toBe('#A98BDA');
      expect(k4?.colors.outer).toBe('#FFD6E8');
    });
  });

  describe('2. Konfigurasi 3A Café (DF 16.3 & DV 8.5)', () => {
    const cafeScene = SCENES.find((s) => s.chapterNum === '3A');

    it('Scene 3A terdaftar dengan mode P dan tinggi 220 svh', () => {
      expect(cafeScene).toBeDefined();
      expect(cafeScene?.mode).toBe('P');
      expect(cafeScene?.heightVh).toBe(220);
      expect(cafeScene?.act).toBe(2);
    });

    it('Warna tema 3A sesuai DV 8.5: hijau #066838, serat #0A4F2C, lantai cocoa #5A3A2E', () => {
      expect(cafeScene?.wallTint).toBe('#066838');
      expect(cafeScene?.fiberTint).toBe('#0A4F2C');
      expect(cafeScene?.floorTint).toBe('#5A3A2E');
      expect(cafeScene?.brandColor).toBe('#066838');
    });

    it('Memiliki 3 karya resmi Elspresso dengan metrik asli dan data INFO/CREDIT', () => {
      const elspressoWorks = WORKS.filter((w) => w.company.toLowerCase().includes('elspresso'));
      expect(elspressoWorks).toHaveLength(3);

      const goFood = elspressoWorks.find((w) => w.mediaFile === 'kuliner_1.mp4');
      expect(goFood).toBeDefined();
      expect(goFood?.title).toContain('Elspresso Kini Hadir di Go-Food');
      expect(goFood?.credit).toContain('Elspresso');

      const moodMenu = elspressoWorks.find((w) => w.mediaFile === 'kuliner_2.mp4');
      expect(moodMenu).toBeDefined();
      expect(moodMenu?.metrics).toBe('38 views, 0 like');

      const meetingPkg = elspressoWorks.find((w) => w.mediaFile === 'kuliner_3.mp4');
      expect(meetingPkg).toBeDefined();
      expect(meetingPkg?.metrics).toBe('43 views, 0 like');
    });

    it('Kostum K5 (Barista) memiliki apron bib krem #F8F8C8 dengan list hijau #066838', () => {
      const k5 = COSTUMES.find((c) => c.id === 'K5');
      expect(k5).toBeDefined();
      expect(k5?.colors.apron).toBe('#F8F8C8');
      expect(k5?.colors.trim).toBe('#066838');
      expect(k5?.colors.trousers).toBe('#5A3A2E');
    });

    it('Speech bubble 3A.1 terdefinisi sesuai bible', () => {
      expect(STRINGS.dollBubbles.f3A_1).toBe('Day one. Small numbers, big lessons.');
    });
  });

  describe('3. Verifikasi 31 Berkas Aset P09 di public/assets/world/', () => {
    const expectedAssets = [
      '3-0_L-01_dinding-lobi_V0.webp',
      '3-0_L-02_lantai-lobi_VT.webp',
      '3-0_L-03_panel-brand_V0.webp',
      '3-0_L-04_pintu-cafe_V0.webp',
      '3-0_L-05_pintu-klinik_V0.webp',
      '3-0_L-06_gerbang-keberangkatan_V0.webp',
      '3-0_L-07_gelembung-notifikasi_V0.webp',
      '3-0_L-08_video-reveal-bingkai_V0.webp',
      '3-0_L-09_titik-progres_V0.webp',
      '3-0_L-10_kartu-babak_V0.webp',
      '3-0_L-11_wall-note-kejujuran_V0.webp',
      '3A_A-01_dinding_V0.webp',
      '3A_A-02_wainscot-subway_V0.webp',
      '3A_A-03_rail-list-pilaster_V0.webp',
      '3A_A-04_lantai_VT.webp',
      '3A_A-05_konter_V0.webp',
      '3A_A-06_mesin-kopi_V3.webp',
      '3A_A-07_cangkir-runway_V0.webp',
      '3A_A-08_papan-menu-kapur_VL.webp',
      '3A_A-09_tas-pengantar_VH.webp',
      '3A_A-10_lonceng-pintu_VH.webp',
      '3A_A-11_lampu-gantung_VH.webp',
      '3A_A-12_jendela-sepeda_VS.webp',
      '3A_A-13_rak-cangkir_V0.webp',
      '3A_A-14_mesin-struk_V0.webp',
      '3A_A-15_stempel-day-one_V0.webp',
      '3A_A-16_lencana-dinding_V0.webp',
      '3A_A-17_uap_V0.webp',
      '3A_A-18_panah-stiker_V0.webp',
      '3A_A-19_kartu-info-credit_V0.webp',
      '3A_A-20_cangkir-take-away_V0.webp',
    ];

    it(`Seluruh ${expectedAssets.length} berkas WebP ada di direktori publik`, () => {
      const publicDir = join(process.cwd(), 'public', 'assets', 'world');
      for (const file of expectedAssets) {
        const fullPath = join(publicDir, file);
        expect(existsSync(fullPath)).toBe(true);
      }
    });
  });
});
