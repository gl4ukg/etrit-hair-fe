'use client';

import Image from 'next/image';
import { useState } from 'react';
import ImageSkeleton from './ImageSkeleton';

interface GalleryImageProps {
  src: string;
  alt: string;
  onClick: () => void;
  className?: string;
}

export default function GalleryImage({ src, alt, onClick, className }: GalleryImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={className}>
      {isLoading && (
        <div className="absolute inset-0">
          <ImageSkeleton />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        fill
        loading="lazy"
        className={`object-cover cursor-pointer transition-all duration-300 hover:scale-105 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        onLoad={() => setIsLoading(false)}
        onClick={onClick}
      />
    </div>
  );
}
