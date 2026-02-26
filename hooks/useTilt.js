'use client';

import { useRef, useCallback, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

export function useTilt(maxTilt = 6) {
  const ref = useRef(null);
  const shouldReduce = useReducedMotion();
  const [style, setStyle] = useState({});

  const onMouseMove = useCallback((e) => {
    if (shouldReduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const tiltX = (y - 0.5) * maxTilt * -1;
    const tiltY = (x - 0.5) * maxTilt;
    setStyle({
      transform: `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`,
      transition: 'transform 0.05s linear',
      '--glare-x': `${x * 100}%`,
      '--glare-y': `${y * 100}%`,
    });
  }, [shouldReduce, maxTilt]);

  const onMouseLeave = useCallback(() => {
    setStyle({
      transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)',
      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
    });
  }, []);

  if (shouldReduce) return { ref, style: {}, onMouseMove: () => {}, onMouseLeave: () => {} };
  return { ref, style, onMouseMove, onMouseLeave };
}
