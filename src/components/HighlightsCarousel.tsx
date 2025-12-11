'use client';

import { useState } from 'react';
import Image from 'next/image';

const images = [
  {
    src: '/gallery/449532733_788644236714097_475633129053053685_n.jpg',
    alt: 'Color work in the salon',
  },
  {
    src: '/gallery/518797080_18523723021062559_5146039805755827029_n.jpg',
    alt: 'Styling detail in the salon',
  },
  {
    src: '/gallery/530908293_18529022932062559_3750644558349443916_n.jpg',
    alt: 'Finished look at Etrit Hair',
  },
];

export default function HighlightsCarousel() {
  const [current, setCurrent] = useState(1);

  const total = images.length;

  const prev = () => {
    setCurrent((prevIndex) => (prevIndex - 1 + total) % total);
  };

  const next = () => {
    setCurrent((prevIndex) => (prevIndex + 1) % total);
  };

  return (
    <div className="relative mx-auto my-16 max-w-5xl">
      <div className="flex items-center justify-center gap-4 md:gap-8">
        {[
          (current - 1 + total) % total, // left
          current, // center
          (current + 1) % total, // right
        ].map((index, arrayPosition) => {
          const image = images[index];
          const isCenter = arrayPosition === 1;

          return (
            <div
              key={image.src}
              className={[
                'relative overflow-hidden rounded-2xl bg-zinc-900 transition-all duration-700 ease-in-out',
                'aspect-[4/5]',
                isCenter
                  ? 'z-20 w-[34%] scale-[1.0] shadow-2xl shadow-black/60 sm:w-[40%] sm:scale-[1.0]'
                  : 'z-10 w-[26%] scale-[0.96] shadow-lg shadow-black/50 sm:w-[24%] sm:scale-[0.97]',
                !isCenter && 'translate-y-3 opacity-50 blur-[1px]',
              ]
                .filter(Boolean)
                .join(' ')}
              onClick={() => {
                if (!isCenter) {
                  setCurrent(index);
                }
              }}
              role="button"
              aria-label={image.alt}
            >
              <Image src={image.src} alt={image.alt} fill className="object-cover" />

              {!isCenter && (
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
              )}
            </div>
          );
        })}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-zinc-950 via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-zinc-950 via-transparent to-transparent" />

      <div className="mt-6 flex items-center justify-center gap-4 text-xs text-zinc-400">
        <button
          type="button"
          onClick={prev}
          className="cursor-pointer rounded-full border border-zinc-700/70 bg-zinc-900/70 px-3 py-1.5 text-[10px] font-medium tracking-[0.25em] text-zinc-200 uppercase transition hover:border-emerald-400/70 hover:text-white"
        >
          Prev
        </button>
        <div className="flex items-center gap-1.5">
          {images.map((_, index) => (
            <span
              key={index}
              className={[
                'h-1 w-5 rounded-full bg-zinc-700 transition-all',
                index === current && 'w-7 bg-emerald-400',
              ]
                .filter(Boolean)
                .join(' ')}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          className="cursor-pointer rounded-full border border-zinc-700/70 bg-zinc-900/70 px-3 py-1.5 text-[10px] font-medium tracking-[0.25em] text-zinc-200 uppercase transition hover:border-emerald-400/70 hover:text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
}
