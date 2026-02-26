'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const SPRING = { type: 'spring', stiffness: 60, damping: 20, mass: 0.8 };

const VARIANTS = {
  fadeUp: {
    hidden: { opacity: 0, y: 48 },
    visible: { opacity: 1, y: 0, transition: SPRING },
  },
  blur: {
    hidden: { opacity: 0, filter: 'blur(12px)', y: 16 },
    visible: { opacity: 1, filter: 'blur(0px)', y: 0, transition: SPRING },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1, transition: SPRING },
  },
  rotate: {
    hidden: { opacity: 0, rotate: 2, y: 24 },
    visible: { opacity: 1, rotate: 0, y: 0, transition: SPRING },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: SPRING },
  },
  slideRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: SPRING },
  },
  parallax: {
    hidden: { opacity: 0, y: 48 },
    visible: { opacity: 1, y: 0, transition: SPRING },
  },
};

const containerVariants = (staggerChildren = 0.1) => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren: 0 } },
});

export const CHILD_VARIANT = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 60, damping: 18 },
  },
};

export function MotionChild({ children, className = '' }) {
  const shouldReduce = useReducedMotion();
  if (shouldReduce) return <div className={className}>{children}</div>;
  return (
    <motion.div className={className} variants={CHILD_VARIANT}>
      {children}
    </motion.div>
  );
}

export default function ScrollSection({
  children,
  className = '',
  variant = 'fadeUp',
  stagger = false,
  delay = 0,
}) {
  const ref = useRef(null);
  const shouldReduce = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' });

  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  if (stagger) {
    return (
      <motion.div
        ref={ref}
        className={className}
        variants={containerVariants(0.1)}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {children}
      </motion.div>
    );
  }

  const chosen = VARIANTS[variant] || VARIANTS.fadeUp;
  const transitionWithDelay = delay
    ? { ...chosen.visible.transition, delay }
    : chosen.visible.transition;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: chosen.hidden,
        visible: { ...chosen.visible, transition: transitionWithDelay },
      }}
    >
      {children}
    </motion.div>
  );
}
