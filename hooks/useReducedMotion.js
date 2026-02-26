'use client';

import { useReducedMotion as useFramerRM } from 'framer-motion';

export function useReducedMotion() {
  return useFramerRM() ?? false;
}
