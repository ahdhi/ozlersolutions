'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';
import MagneticButton from '@/components/MagneticButton';
import { useReducedMotion } from '@/hooks/useReducedMotion';

// Split headline into word groups to preserve styling
const HEADLINE_SEGMENTS = [
  { text: 'Compliance', gradient: false },
  { text: 'Infrastructure', gradient: false },
  { text: 'for', gradient: false },
  { text: 'Aged Care', gradient: true },
  { text: '&', gradient: false },
  { text: 'NDIS', gradient: true },
  { text: 'Providers', gradient: false },
];

const wordContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

const wordVariant = {
  hidden: { opacity: 0, y: 28, rotateX: 25 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: 'spring', stiffness: 80, damping: 16 },
  },
};

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 70, damping: 18, delay },
  },
});

export default function HeroContent() {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return (
      <div className="max-w-2xl">
        <span className="label block mb-4">Technology for Australian Care</span>
        <h1 className="text-oz-navy">
          Compliance Infrastructure for <span className="text-gradient">Aged Care</span> &{' '}
          <span className="text-gradient">NDIS</span> providers
        </h1>
        <p className="text-lg text-slate-600 mt-6 mb-8 leading-relaxed">
          Our education platform is your compliance foundation. Train your workforce, then expand with our connected suite of tools—automated compliance, incident management, and audit readiness—all purpose-built for Australia's regulatory landscape.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Link href="/contact#demo" className="btn btn-primary btn-lg">Book a Demo</Link>
          <Link href="/solutions" className="btn btn-secondary btn-lg">Explore Solutions →</Link>
        </div>
        <div className="mt-10 flex gap-8 text-sm text-slate-500">
          <span className="flex items-center gap-1.5"><CheckIcon className="w-4 h-4 text-oz-teal" /> Built for Australian regulation</span>
          <span className="flex items-center gap-1.5"><CheckIcon className="w-4 h-4 text-oz-teal" /> NDIS & Aged Care ready</span>
          <span className="hidden md:flex items-center gap-1.5"><CheckIcon className="w-4 h-4 text-oz-teal" /> SOC 2 pathway</span>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl">
      {/* Label */}
      <motion.span
        className="label block mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 80, damping: 16, delay: 0 }}
      >
        Technology for Australian Care
      </motion.span>

      {/* Animated headline — word by word */}
      <motion.h1
        className="text-oz-navy"
        style={{ perspective: '1000px' }}
        variants={wordContainer}
        initial="hidden"
        animate="visible"
      >
        {HEADLINE_SEGMENTS.map((seg, i) => (
          <motion.span
            key={i}
            variants={wordVariant}
            className="inline-block mr-[0.3em] last:mr-0"
          >
            {seg.gradient ? (
              <span className="text-gradient">{seg.text}</span>
            ) : (
              seg.text
            )}
          </motion.span>
        ))}
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="text-lg text-slate-600 mt-6 mb-8 leading-relaxed"
        variants={fadeUp(0.55)}
        initial="hidden"
        animate="visible"
      >
The training platform that becomes your compliance engine. Start with workforce education. Grow into automated credential tracking, 24-hour incident reporting, audit readiness, and living policy management — all interconnected, all purpose-built for Australia's regulatory landscape.      </motion.p>

      {/* CTA buttons */}
      <motion.div
        className="flex gap-4 flex-wrap"
        variants={fadeUp(0.7)}
        initial="hidden"
        animate="visible"
      >
        <MagneticButton>
          <Link href="/contact#demo" className="btn btn-primary btn-lg">Book a Demo</Link>
        </MagneticButton>
        <MagneticButton>
          <Link href="/solutions" className="btn btn-secondary btn-lg">Explore Solutions →</Link>
        </MagneticButton>
      </motion.div>

      {/* Trust badges */}
      <motion.div
        className="mt-10 flex gap-8 text-sm text-slate-500"
        variants={fadeUp(0.85)}
        initial="hidden"
        animate="visible"
      >
        <span className="flex items-center gap-1.5">
          <CheckIcon className="w-4 h-4 text-oz-teal" /> Built for Australian regulation
        </span>
        <span className="flex items-center gap-1.5">
          <CheckIcon className="w-4 h-4 text-oz-teal" /> NDIS & Aged Care ready
        </span>
        <span className="hidden md:flex items-center gap-1.5">
          <CheckIcon className="w-4 h-4 text-oz-teal" /> SOC 2 pathway
        </span>
      </motion.div>
    </div>
  );
}
