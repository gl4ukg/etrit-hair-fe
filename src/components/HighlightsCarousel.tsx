'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Slider, { Settings } from 'react-slick';

const images = [
  {
    src: 'https://157-230-117-143.sslip.io/media/etrit-hair/gallery/444481390_435890342638514_5123149415779823275_n.jpg',
    alt: 'Color work in the salon',
    className: 'object-cover',
  },
  {
    src: 'https://157-230-117-143.sslip.io/media/etrit-hair/gallery/518797080_18523723021062559_5146039805755827029_n.jpg',
    alt: 'Styling detail in the salon',
    className: 'object-cover',
  },
  {
    src: 'https://157-230-117-143.sslip.io/media/etrit-hair/gallery/530908293_18529022932062559_3750644558349443916_n.jpg',
    alt: 'Finished look at Etrit Hair',
    className: 'object-cover',
  },
  {
    src: 'https://157-230-117-143.sslip.io/media/etrit-hair/gallery/IMG_1235 (1).jpeg',
    alt: 'Finished look at Etrit Hair',
    className: 'object-cover',
  },
  {
    src: 'https://157-230-117-143.sslip.io/media/etrit-hair/gallery/343278753_1208569573130063_7615236875637932797_n.jpg',
    alt: 'Finished look at Etrit Hair',
    className: 'object-cover',
  },
];

export default function HighlightsCarousel() {
  const [current, setCurrent] = useState(1);

  const desktopSettings: Settings = {
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
  };

  const tabletScreenSettings: Settings = {
    className: 'simple',
    centerMode: false,
    infinite: true,
    centerPadding: '0px',
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
  };

  const phoneScreenSettings: Settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '46px',
    slidesToShow: 1,
    speed: 500,
    arrows: false,
    swipe: true,
    touchMove: true,
    draggable: true,
    swipeToSlide: true,
    touchThreshold: 8,
    initialSlide: 1,
    beforeChange: (_old, next) => setCurrent(next),
  };

  const [isDesktop, setIsDesktop] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const update = () => {
      if (typeof window !== 'undefined') {
        const width = window.innerWidth;
        setIsDesktop(width >= 1025);
        setIsTablet(width >= 768 && width < 1025);
      }
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <div className="relative mx-auto max-w-full overflow-visible lg:my-16">
      <Slider
        {...(isDesktop ? desktopSettings : isTablet ? tabletScreenSettings : phoneScreenSettings)}
        className="highlights-slider mt-8 md:mt-0"
      >
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
                className={image.className}
                priority={current === images.findIndex((i) => i.src === image.src)}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
            </div>
          </div>
        ))}
      </Slider>

      <style jsx global>{`
        .highlights-slider .slick-track {
          display: flex;
          align-items: stretch;
        }

        /* Desktop: center-mode visual effect */
        @media (min-width: 1025px) {
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
        }

        /* Phone: show left/right peeks so users know it can swipe */
        @media (max-width: 767px) {
          .highlights-slider .slick-list {
            overflow: visible;
          }

          .highlights-slider .slick-slide {
            opacity: 0.65;
            transform: scale(0.92);
            transition: all 0.6s ease-in-out;
          }

          .highlights-slider .slick-center {
            opacity: 1;
            transform: scale(1);
            z-index: 20;
          }
        }
      `}</style>
    </div>
  );
}
