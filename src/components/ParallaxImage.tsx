// components/ParallaxImage.tsx
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

type ParallaxImageProps = {
  src: string;
  alt: string;
  /**
   * How strong the parallax is. 0.1–0.3 feels close to projektline.
   */
  speed?: number;
};

export function ParallaxImage({ src, alt, speed = 0.25 }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  // progress of this section in the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'], // when it enters / leaves the viewport
  });

  // vertical movement (in percent, like the original site)
  const y = useTransform(scrollYProgress, [0, 1], [`${-speed * 100}%`, `${speed * 100}%`]);

  // small zoom-out while scrolling (Projektline vibe)
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
