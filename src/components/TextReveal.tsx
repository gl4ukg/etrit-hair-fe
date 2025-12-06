'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function TextReveal({ children, className = '', delay = 0 }: TextRevealProps) {
  const text = typeof children === 'string' ? children : '';
  const characters = text.split('');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  if (typeof children !== 'string') {
    return (
      <motion.div className={className} variants={container} initial="hidden" animate="visible">
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div className={className} variants={container} initial="hidden" animate="visible">
      {characters.map((char, index) => (
        <motion.span key={index} variants={child}>
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  );
}
