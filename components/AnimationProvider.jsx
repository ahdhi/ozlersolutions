'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import CursorTrail from '@/components/CursorTrail';

export default function AnimationProvider({ children }) {
  const shouldReduce = useReducedMotion();
  const pathname = usePathname();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (shouldReduce) return;
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? window.scrollY / total : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [shouldReduce]);

  return (
    <>
      {/* Cursor trail particles */}
      <CursorTrail />

      {/* Scroll progress bar — sits above fixed header (z-50) */}
      {!shouldReduce && (
        <div
          className="fixed top-0 left-0 right-0 h-[3px] z-[60] pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, #158A80 0%, #17B8A5 50%, #2CC9AD 100%)',
            transform: `scaleX(${scrollProgress})`,
            transformOrigin: 'left',
          }}
        />
      )}

      {/* Page transitions */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={shouldReduce ? {} : { opacity: 0, y: 10 }}
          animate={shouldReduce ? {} : { opacity: 1, y: 0 }}
          exit={shouldReduce ? {} : { opacity: 0, y: -10 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'contents' }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
