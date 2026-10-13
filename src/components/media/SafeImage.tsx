import React, { useState } from 'react';
import { mediaUrl } from '../../lib/media';

export interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);
  const [retryKey, setRetryKey] = useState(0);

  const fullSrc = src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')
    ? src
    : mediaUrl(src);

  const handleRetry = () => {
    setHasError(false);
    setRetryKey((prev) => prev + 1);
  };

  const aspectRatioStyle = width && height ? { aspectRatio: `${width} / ${height}` } : undefined;

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center p-4 bg-vanilla text-ink border border-warm-grey rounded-sm text-center font-poppins shadow-sm ${className}`}
        style={aspectRatioStyle}
        role="alert"
      >
        <p className="text-sm font-medium mb-2">Image didn't load.</p>
        <button
          type="button"
          onClick={handleRetry}
          className="px-3 py-1 text-xs font-semibold rounded bg-hot-pink text-pure-white hover:bg-barbie-pink transition-colors focus-visible:outline-hot-pink"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <img
      key={retryKey}
      src={fullSrc}
      alt={alt}
      width={width}
      height={height}
      crossOrigin="anonymous"
      loading="lazy"
      onError={() => setHasError(true)}
      className={`max-w-full h-auto object-cover ${className}`}
      style={aspectRatioStyle}
      {...rest}
    />
  );
};
