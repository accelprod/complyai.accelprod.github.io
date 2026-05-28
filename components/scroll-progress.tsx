'use client';

import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

export function ScrollProgress() {
  const reduced = useReducedMotion();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? doc.scrollTop / max : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [reduced]);

  if (reduced) return null;

  return (
    <div
      className="scroll-progress"
      role="presentation"
      aria-hidden
      style={{ transform: `scaleX(${progress})` }}
    />
  );
}
