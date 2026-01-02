'use client';

import { useState } from 'react';
import Image from 'next/image';
import Slider, { Settings } from 'react-slick';

const images = [
  {
    src: '/gallery/444481390_435890342638514_5123149415779823275_n.jpg',
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
  {
    src: '/gallery/IMG_1235 (1).jpeg',
    alt: 'Finished look at Etrit Hair',
  },
  {
    src: '/gallery/IMG_1237.jpeg',
    alt: 'Finished look at Etrit Hair',
  },

  {
    src: '/gallery/343278753_1208569573130063_7615236875637932797_n.jpg',
    alt: 'Finished look at Etrit Hair',
  },
];

export default function HighlightsCarousel() {
  const [current, setCurrent] = useState(1);

  const settings: Settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
    arrows: false,
    swipe: true,
    touchMove: true,
    draggable: true,
    swipeToSlide: true,
    touchThreshold: 8,

    initialSlide: 1,
    beforeChange: (_old, next) => setCurrent(next),

    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, centerPadding: '40px' } },
      { breakpoint: 768, settings: { slidesToShow: 1, centerPadding: '70px' } },
      { breakpoint: 480, settings: { slidesToShow: 1, centerPadding: '40px' } },
    ],
  };

  return (
    <div className="relative mx-auto my-16 max-w-full overflow-hidden">
      <Slider {...settings} className="highlights-slider">
        {images.map((image) => (
          <div key={image.src} className="px-2 md:px-3">
            <div
              className="highlight-card relative aspect-[5/6] overflow-hidden rounded-2xl bg-zinc-900 shadow-lg shadow-black/50 transition-all duration-700 ease-in-out"
              aria-label={image.alt}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 70vw, 33vw"
                className="object-cover"
                priority={current === images.findIndex((i) => i.src === image.src)}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
            </div>
          </div>
        ))}
      </Slider>

      <style jsx global>{`
        .highlights-slider .slick-slide {
          opacity: 0.6;
          filter: blur(1px);
          transform: translateY(0.75rem) scale(0.96);
          transition: all 0.7s ease-in-out;
        }

        .highlights-slider .slick-center {
          opacity: 1;
          filter: none;
          transform: translateY(0) scale(1);
          z-index: 20;
        }

        .highlights-slider .slick-list {
          overflow: visible;
        }

        .highlights-slider .slick-track {
          display: flex;
          align-items: stretch;
        }
      `}</style>
    </div>
  );
}
