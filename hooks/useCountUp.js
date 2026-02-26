'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useReducedMotion } from './useReducedMotion';

export function useCountUp({ target, duration = 2000 }) {
  const shouldReduce = useReducedMotion();
  const [count, setCount] = useState(shouldReduce ? target : 0);
  const [hasStarted, setHasStarted] = useState(false);
  const rafRef = useRef(null);

  const start = useCallback(() => setHasStarted(true), []);

  useEffect(() => {
    if (shouldReduce) {
      setCount(target);
      return;
    }
    if (!hasStarted) return;

    const startTime = performance.now();
    const easeOutExpo = (t) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.round(target * easeOutExpo(progress)));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [hasStarted, target, duration, shouldReduce]);

  return { count, start };
}
