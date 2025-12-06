'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInLeftProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function FadeInLeft({ children, className = '', delay = 0 }: FadeInLeftProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
