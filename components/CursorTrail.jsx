'use client';

import { useEffect, useRef } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

// Canvas-based cursor trail — no React state on mousemove, fully GPU composited
export default function CursorTrail() {
  const canvasRef = useRef(null);
  const shouldReduce = useReducedMotion();
  const particlesRef = useRef([]);
  const animRef = useRef(null);
  const lastAddRef = useRef(0);

  useEffect(() => {
    if (shouldReduce) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();
    window.addEventListener('resize', setSize, { passive: true });

    const onMouseMove = (e) => {
      const now = performance.now();
      // Throttle to one particle every ~20ms
      if (now - lastAddRef.current < 20) return;
      lastAddRef.current = now;

      const isTeal = Math.random() > 0.6;
      particlesRef.current.push({
        x: e.clientX,
        y: e.clientY,
        alpha: 0.55,
        radius: Math.random() * 2.5 + 2,
        color: isTeal ? '20,184,166' : '37,99,235',
      });

      // Cap at 18 particles — oldest drops off automatically via alpha fade
      if (particlesRef.current.length > 18) {
        particlesRef.current.shift();
      }
    };

    document.addEventListener('mousemove', onMouseMove, { passive: true });

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i];
        p.alpha -= 0.028;
        p.radius *= 0.96;

        if (p.alpha <= 0.01) {
          particlesRef.current.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', setSize);
      cancelAnimationFrame(animRef.current);
    };
  }, [shouldReduce]);

  if (shouldReduce) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      aria-hidden="true"
    />
  );
}
