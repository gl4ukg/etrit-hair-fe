'use client';

import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import GalleryImage from './GalleryImage';

interface GalleryGridProps {
  sources: string[];
}

export default function GalleryGrid({ sources }: GalleryGridProps) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = sources.map((src) => ({ src }));

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <>
      <div className="columns-1 gap-6 [column-fill:_balance] sm:columns-2 lg:columns-3">
        {sources.map((src, idx) => (
          <div
            key={idx}
            className="mb-6 break-inside-avoid overflow-hidden rounded-lg bg-black/20"
          >
            <div
              className={
                idx % 5 === 0
                  ? 'relative h-[520px]'
                  : idx % 5 === 1
                    ? 'relative h-[360px]'
                    : idx % 5 === 2
                      ? 'relative h-[280px]'
                      : idx % 5 === 3
                        ? 'relative h-[420px]'
                        : 'relative h-[320px]'
              }
            >
              <GalleryImage
                src={src}
                alt={`Gallery ${idx + 1}`}
                onClick={() => handleImageClick(idx)}
                className="relative h-full w-full"
              />
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={currentIndex}
        styles={{
          container: { backgroundColor: 'rgba(0, 0, 0, 0.95)' },
        }}
      />
    </>
  );
}
