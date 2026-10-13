/**
 * Media Helper - DF 12.6
 * Sentralisasi URL media, SafeImage, dan SafeVideo
 */

export function mediaUrl(path: string): string {
  const base = (import.meta.env.VITE_MEDIA_BASE_URL || '').replace(/\/+$/, '');
  const cleanPath = path.replace(/^\/+/, '');
  return `${base}/assets/${cleanPath}`;
}

export { SafeImage } from '../components/media/SafeImage';
export type { SafeImageProps } from '../components/media/SafeImage';
export { SafeVideo } from '../components/media/SafeVideo';
export type { SafeVideoProps } from '../components/media/SafeVideo';
