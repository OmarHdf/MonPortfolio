'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
}: OptimizedImageProps) {
  const [loading, setLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't render the component during SSR to avoid hydration mismatches
  if (!isMounted) {
    return (
      <div
        className={cn('bg-muted animate-pulse rounded-md', className)}
        style={{ width, height }}
      />
    );
  }

  return (
    <div className='relative overflow-hidden' style={{ width, height }}>
      {loading && (
        <div className='absolute inset-0 bg-muted animate-pulse rounded-md' />
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={80}
        className={cn(
          'transition-opacity duration-300',
          loading ? 'opacity-0' : 'opacity-100',
          className
        )}
        sizes={sizes}
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => setLoading(false)}
        placeholder='blur'
        blurDataURL={`data:image/svg+xml;base64,${Buffer.from(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"><rect width="100%" height="100%" fill="#374151"/></svg>`
        ).toString('base64')}`}
      />
    </div>
  );
}
