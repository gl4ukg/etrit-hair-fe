'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';

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
          <div className="relative h-full w-full">
            <Image
              src={src}
              alt={`Hair Dresser Portrait ${index + 1}`}
              fill
              //   className="object-cover object-center grayscale"
              className="object-cover object-center"
              priority={index === 0}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
