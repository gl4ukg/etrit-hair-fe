'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import { useState } from 'react';
import ImageSkeleton from './ImageSkeleton';

import 'swiper/css';
import 'swiper/css/effect-fade';

const images = [
  'https://157-230-117-143.sslip.io/media/etrit-hair/header/one.webp',
  'https://157-230-117-143.sslip.io/media/etrit-hair/header/two.webp',
  'https://157-230-117-143.sslip.io/media/etrit-hair/header/three.webp',
  'https://157-230-117-143.sslip.io/media/etrit-hair/header/four.webp',
  'https://157-230-117-143.sslip.io/media/etrit-hair/header/five.webp',
  'https://157-230-117-143.sslip.io/media/etrit-hair/header/six.webp',
];

const blurDataURL =
  'data:image/svg+xml;base64,' +
  btoa(
    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><rect width="16" height="16" fill="#181818"/></svg>`,
  );

function HeroSlide({
  src,
  index,
  onFirstLoaded,
}: {
  src: string;
  index: number;
  onFirstLoaded: () => void;
}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative h-full w-full">
      {isLoading && (
        <div className="absolute inset-0">
          <ImageSkeleton />
        </div>
      )}
      <Image
        src={src}
        alt={`Hair Dresser Portrait ${index + 1}`}
        fill
        className={`object-cover object-center transition-opacity duration-500 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        sizes="(min-width: 1024px) 60vw, 100vw"
        priority={index === 0}
        fetchPriority={index === 0 ? 'high' : 'auto'}
        placeholder="blur"
        blurDataURL={blurDataURL}
        onLoadingComplete={() => {
          setIsLoading(false);
          if (index === 0) onFirstLoaded();
        }}
      />
    </div>
  );
}

export default function HeroSlider() {
  const [firstLoaded, setFirstLoaded] = useState(false);

  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      autoplay={
        firstLoaded
          ? {
              delay: 2000,
              disableOnInteraction: false,
            }
          : false
      }
      loop={true}
      speed={1000}
      className="h-full w-full"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <HeroSlide src={src} index={index} onFirstLoaded={() => setFirstLoaded(true)} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
