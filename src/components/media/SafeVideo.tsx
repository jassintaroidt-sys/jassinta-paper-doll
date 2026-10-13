import React, { useState, useRef, useEffect } from 'react';
import { mediaUrl } from '../../lib/media';

export interface SafeVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
  width?: number;
  height?: number;
  className?: string;
  platformUrl?: string;
  platformName?: 'Instagram' | 'TikTok';
  autoPlayWhenVisible?: boolean;
}

export const SafeVideo: React.FC<SafeVideoProps> = ({
  src,
  poster,
  width,
  height,
  className = '',
  platformUrl,
  platformName = 'Instagram',
  autoPlayWhenVisible = true,
  muted = true,
  loop = true,
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const fullSrc = src.startsWith('http://') || src.startsWith('https://')
    ? src
    : mediaUrl(src);

  const fullPoster = poster
    ? (poster.startsWith('http://') || poster.startsWith('https://') ? poster : mediaUrl(poster))
    : undefined;

  useEffect(() => {
    if (!autoPlayWhenVisible || !videoRef.current) return;
    const el = videoRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {
            // Autoplay prevention catch
          });
        } else {
          el.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [autoPlayWhenVisible]);

  const aspectRatioStyle = width && height ? { aspectRatio: `${width} / ${height}` } : undefined;

  if (hasError) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center p-4 bg-vanilla text-ink border border-warm-grey rounded-sm text-center font-poppins shadow-sm overflow-hidden ${className}`}
        style={aspectRatioStyle}
        role="alert"
      >
        {fullPoster && (
          <img
            src={fullPoster}
            alt="Video poster"
            className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
          />
        )}
        <div className="relative z-10">
          <p className="text-sm font-medium mb-2">Video unavailable here.</p>
          {platformUrl && (
            <a
              href={platformUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-3 py-1.5 text-xs font-semibold rounded bg-hot-pink text-pure-white hover:bg-barbie-pink transition-colors focus-visible:outline-hot-pink"
            >
              Watch on {platformName} ↗
            </a>
          )}
        </div>
      </div>
    );
  }

  return (
    <video
      ref={videoRef}
      src={fullSrc}
      poster={fullPoster}
      width={width}
      height={height}
      muted={muted}
      loop={loop}
      playsInline
      crossOrigin="anonymous"
      onError={() => setHasError(true)}
      className={`max-w-full h-auto object-cover ${className}`}
      style={aspectRatioStyle}
      {...rest}
    />
  );
};
