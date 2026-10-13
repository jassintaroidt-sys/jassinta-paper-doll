/**
 * src/components/world/worldTypes.ts
 * Tipe data arsitektur Paper World (DF 6, DV 3, PB 5)
 */

export type SceneMode = 'D' | 'P' | 'S'; // D: Datar (2D billboard), P: Panggung (2.5D CSS 3D), S: Story (Baca mendalam)
export type ActNumber = 1 | 2 | 3;
export type DepthLevel = 'full' | 'lite' | 'calm';

export interface SceneConfig {
  id: string; // 'ch0', 'ch1', 'ch2', 'ch3-0', 'ch3A', 'ch3B', 'ch3C', 'ch4', 'ch5', 'ch6', 'ch7', 'ch8'
  chapterNum: string; // '0', '1', '2', '3.0', '3A', '3B', '3C', '4', '5', '6', '7', '8'
  name: string;
  placeName: string;
  region: string;
  mode: SceneMode;
  act: ActNumber;
  actTitle: string; // 'ACT I · FELT' | 'ACT II · SHARED' | 'ACT III · REMEMBERED'
  heightVh: number; // Tinggi scroll dalam vh
  wallTint: string; // Warna dasar dinding
  fiberTint: string; // Warna serat dinding
  floorTint: string; // Warna lantai
  brandColor: string; // Warna aksen brand
  brandSecondary?: string;
  labelId: string; // S_label ID
  outfit: string; // K1 s/d K15
  hasEdgeTape: boolean; // false hanya pada Chapter 1
  hasFloor: boolean; // false pada Chapter 1
  hasSkyline: boolean; // false pada Chapter 1
  seedTornEdge?: number; // 101, 202, 303, 404, 505, 606
  walkStripBefore?: string; // ID strip yang mendahului
  connectedObject?: string; // Benda penghubung yang dibawa doll
}

export interface WalkStripConfig {
  id: string; // 'strip-0-1', 'strip-2-3', 'strip-3C-4', 'strip-4-5', 'strip-5-6', 'strip-6-7', 'strip-7-8'
  fromChapter: string;
  toChapter: string;
  title: string;
  heightVh: number; // Sekitar 50 vh
  reverseDirection?: boolean; // True pada strip 4->5 (rewind sepia ke kiri)
  connectedItem: string; // Benda yang dibawa
  hasFootsteps?: boolean; // True pada strip 0->1 dan 7->8
  skylineAssets: string[];
}
