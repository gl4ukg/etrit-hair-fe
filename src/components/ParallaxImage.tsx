'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

type ParallaxImageProps = {
  src: string;
  alt: string;
  speed?: number;
};

export function ParallaxImage({ src, alt, speed = 0.25 }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [`${-speed * 200}%`, `${speed * 200}%`]);

  const scale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);

  return (
    <section ref={ref} className="relative h-[80vh] overflow-hidden">
      <motion.div
        style={{ y, scale }}
        className="pointer-events-none absolute inset-0 will-change-transform"
      >
        <Image src={src} alt={alt} fill priority className="object-cover" />
      </motion.div>
    </section>
  );
}
