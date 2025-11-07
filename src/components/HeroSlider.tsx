'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/effect-fade';

const images = [
  '/header/one.jpeg',
  '/header/two.jpeg',
  '/header/three.jpeg',
  '/header/four.jpeg',
  '/header/five.jpeg',
  '/header/six.jpeg',
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
