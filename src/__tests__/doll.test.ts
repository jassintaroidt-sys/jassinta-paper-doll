import { describe, it, expect } from 'vitest';
import { DOLL_HEIGHT, DOLL_JOINTS, DOLL_WIDTHS } from '../assets-def/doll/proportions';
import { DOLL_COLORS } from '../assets-def/doll/colors';
import { COSTUMES } from '../assets-def/doll/costumes';
import { POSES, DOLL_MATRIX, WALK_CYCLE_FRAMES } from '../assets-def/doll/poses';
import { FACE_EXPRESSIONS } from '../assets-def/doll/faces';
import { BRADS } from '../assets-def/doll/brads';
import { SPEECH_BUBBLES } from '../assets-def/doll/bubbles';

describe('Doll Rig Definitions (P03)', () => {
  describe('Proporsi dan Sendi (DV 4.1 & PB 5.10)', () => {
    it('memiliki tinggi total H = 560 px', () => {
      expect(DOLL_HEIGHT).toBe(560);
      expect(DOLL_JOINTS.sole.px).toBe(560);
      expect(DOLL_JOINTS.sole.percentH).toBe(1.0);
    });

    it('memiliki letak sendi sesuai persentase bible', () => {
      expect(DOLL_JOINTS.chin.percentH).toBe(0.18);
      expect(DOLL_JOINTS.shoulder.percentH).toBe(0.24);
      expect(DOLL_JOINTS.elbow.percentH).toBe(0.39);
      expect(DOLL_JOINTS.hand.percentH).toBe(0.52);
      expect(DOLL_JOINTS.hip.percentH).toBe(0.54);
      expect(DOLL_JOINTS.knee.percentH).toBe(0.73);
      expect(DOLL_JOINTS.ankle.percentH).toBe(0.92);
    });

    it('memiliki dimensi lebar proporsional', () => {
      expect(DOLL_WIDTHS.headWithHijab.percentH).toBe(0.18);
      expect(DOLL_WIDTHS.bodyWithArms.percentH).toBe(0.35);
      expect(DOLL_WIDTHS.hipStraightPants.percentH).toBe(0.2);
    });
  });

  describe('Warna Tubuh dan Aturan Kunci (DV 4.2 & PB 5.10)', () => {
    it('memiliki warna sepatu yang SELALU hitam #2E2E2E di semua varian', () => {
      expect(DOLL_COLORS.shoes).toBe('#2E2E2E');
    });

    it('memiliki warna kulit dan blush hasil ukur referensi nyata', () => {
      expect(DOLL_COLORS.skin).toBe('#FCCFB2');
      expect(DOLL_COLORS.blush).toBe('#F6B79D');
      expect(DOLL_COLORS.eyebrow).toBe('#3A2A24');
      expect(DOLL_COLORS.mouth).toBe('#B5645F');
    });

    it('memiliki token brad fill #BDBDBD dan ring #8A8A8A', () => {
      expect(DOLL_COLORS.bradFill).toBe('#BDBDBD');
      expect(DOLL_COLORS.bradRing).toBe('#8A8A8A');
    });
  });

  describe('Katalog Kostum K1 – K17 (DV 7 & PB 5.10)', () => {
    it('memiliki tepat 17 definisi kostum', () => {
      expect(COSTUMES).toHaveLength(17);
    });

    it('memastikan semua kostum SELALU berhijab', () => {
      COSTUMES.forEach((c) => {
        expect(c.hijabColor).toBeTruthy();
        expect(c.hijabStyle).toBeTruthy();
      });
    });

    it('memastikan hijab lobi wisteria #A98BDA (kontras terhadap dinding lilac)', () => {
      const lobi = COSTUMES.find((c) => c.id === 'K4');
      expect(lobi).toBeDefined();
      expect(lobi?.hijabColor).toBe('#A98BDA');
    });

    it('memastikan kardigan arsip mustard #D9A441 (kontras terhadap lantai honey)', () => {
      const arsip = COSTUMES.find((c) => c.id === 'K15');
      expect(arsip).toBeDefined();
      expect(arsip?.colors.cardigan).toBe('#D9A441');
    });

    it('memastikan K16 adalah varian sepia dan K17 adalah ikon kepala', () => {
      const k16 = COSTUMES.find((c) => c.id === 'K16');
      expect(k16?.specialEffect).toContain('sepia(0.9)');

      const k17 = COSTUMES.find((c) => c.id === 'K17');
      expect(k17?.id).toBe('K17');
      expect(k17?.name).toBe('Ikon kepala');
    });
  });

  describe('Matriks 31 Kombinasi + 3 Tampak Belakang (DV 6.4)', () => {
    it('memiliki total 34 kombinasi (31 utama + 3 tampak belakang)', () => {
      expect(DOLL_MATRIX).toHaveLength(34);
    });

    it('memiliki 3 tampak belakang (B)', () => {
      const backs = DOLL_MATRIX.filter((m) => m.view === 'B');
      expect(backs).toHaveLength(3);
    });

    it('memiliki 6-frame walk cycle pada 8 fps', () => {
      expect(WALK_CYCLE_FRAMES).toHaveLength(6);
      expect(WALK_CYCLE_FRAMES[0].phase).toBe('Kontak A');
      expect(WALK_CYCLE_FRAMES[3].phase).toBe('Kontak B');
    });

    it('memiliki pose-pose hero utama', () => {
      expect(POSES.idle).toBeDefined();
      expect(POSES.point).toBeDefined();
      expect(POSES.hold).toBeDefined();
      expect(POSES.reach).toBeDefined();
      expect(POSES.jump).toBeDefined();
      expect(POSES.wave).toBeDefined();
      expect(POSES.peek).toBeDefined();
      expect(POSES.lift).toBeDefined();
      expect(POSES.nod).toBeDefined();
    });
  });

  describe('Wajah dan Ekspresi (DV 5)', () => {
    it('memiliki 6 ekspresi wajah', () => {
      expect(Object.keys(FACE_EXPRESSIONS)).toHaveLength(6);
      expect(FACE_EXPRESSIONS.smile).toBeDefined();
      expect(FACE_EXPRESSIONS.neutral).toBeDefined();
      expect(FACE_EXPRESSIONS.curious).toBeDefined();
      expect(FACE_EXPRESSIONS.surprised).toBeDefined();
      expect(FACE_EXPRESSIONS.proud).toBeDefined();
      expect(FACE_EXPRESSIONS.focused).toBeDefined();
    });
  });

  describe('Brad (DV 4.7)', () => {
    it('memiliki 5 jenis brad SVG', () => {
      expect(Object.keys(BRADS)).toHaveLength(5);
      expect(BRADS.shoulder).toBeDefined();
      expect(BRADS.elbow).toBeDefined();
      expect(BRADS.hand).toBeDefined();
      expect(BRADS.knee).toBeDefined();
      expect(BRADS.ankle).toBeDefined();
    });

    it('siku dan lutut memiliki cincin lebih besar (dimple)', () => {
      expect(BRADS.elbow.dimpleRingPercentH).toBe(0.045);
      expect(BRADS.knee.dimpleRingPercentH).toBe(0.045);
    });
  });

  describe('Gelembung Ucapan (DF 7.5 & 7.4)', () => {
    it('memiliki 18 gelembung narasi chapter utama', () => {
      const narasi = Object.values(SPEECH_BUBBLES).filter((b) => b.source === 'narration');
      expect(narasi).toHaveLength(18);
    });

    it('memiliki gelembung reaksi spontan dan Easter Egg', () => {
      expect(SPEECH_BUBBLES.dizzy.text).toBe('Dizzy!');
      expect(SPEECH_BUBBLES.tap_1.text).toBe('Hi!');
      expect(SPEECH_BUBBLES.egg_e4.text).toBe('1 like. Still counts.');
    });
  });
});
