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

function HeroSlide({ src, index }: { src: string; index: number }) {
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
        priority={index === 0}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
}

export default function HeroSlider() {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
      speed={1000}
      className="h-full w-full"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <HeroSlide src={src} index={index} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
