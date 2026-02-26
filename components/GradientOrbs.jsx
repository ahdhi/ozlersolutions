'use client';

import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const ORB_PRESETS = {
  hero: [
    { style: { width: '50%', height: '60%', top: '-10%', right: '-10%' }, gradient: 'bg-gradient-to-bl from-oz-blue/10 via-oz-accent/10 to-transparent', duration: 18, delay: 0 },
    { style: { width: '50%', height: '60%', bottom: '-10%', left: '-10%' }, gradient: 'bg-gradient-to-tr from-oz-teal/10 via-oz-blue/10 to-transparent', duration: 22, delay: 3 },
  ],
  section: [
    { style: { width: '400px', height: '400px', top: '0', right: '0' }, gradient: 'bg-gradient-to-bl from-oz-blue/8 to-transparent', duration: 20, delay: 0 },
    { style: { width: '400px', height: '400px', bottom: '0', left: '0' }, gradient: 'bg-gradient-to-tr from-oz-teal/8 to-transparent', duration: 25, delay: 4 },
  ],
  cta: [
    { style: { width: '40%', height: '140%', top: '-20%', right: '-10%' }, gradient: 'bg-white/5', duration: 16, delay: 0 },
    { style: { width: '40%', height: '140%', bottom: '-20%', left: '-10%' }, gradient: 'bg-white/5', duration: 20, delay: 3 },
  ],
};

export default function GradientOrbs({ preset = 'section' }) {
  const shouldReduce = useReducedMotion();
  const orbs = ORB_PRESETS[preset] || ORB_PRESETS.section;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {orbs.map((orb, i) => {
        if (shouldReduce) {
          return (
            <div
              key={i}
              className={`absolute rounded-full ${orb.gradient} blur-3xl`}
              style={orb.style}
            />
          );
        }
        return (
          <motion.div
            key={i}
            className={`absolute rounded-full ${orb.gradient} blur-3xl`}
            style={orb.style}
            animate={{
              scale: [1, 1.08, 0.96, 1.04, 1],
              x: [0, 20, -14, 10, 0],
              y: [0, -14, 20, -8, 0],
            }}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: orb.delay,
            }}
          />
        );
      })}
    </div>
  );
}
