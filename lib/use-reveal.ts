'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

function applyStaggerParents() {
  document.querySelectorAll('[data-reveal-stagger]').forEach((container) => {
    Array.from(container.children).forEach((child) => {
      if (!child.hasAttribute('data-reveal')) {
        child.setAttribute('data-reveal', '');
      }
    });
  });
}

export function useReveal() {
  const pathname = usePathname();
  useEffect(() => {
    const timer = setTimeout(() => {
      applyStaggerParents();

      const els = document.querySelectorAll<Element>('[data-reveal]:not(.in)');
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('in');
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -4% 0px' }
      );
      els.forEach((el) => {
        const delay = el.getAttribute('data-reveal-delay');
        if (delay) {
          el.setAttribute('style', `transition-delay: ${delay}ms`);
        } else if (el.parentElement?.querySelectorAll(':scope > [data-reveal]').length) {
          const siblings = Array.from(
            el.parentElement.querySelectorAll(':scope > [data-reveal]')
          );
          const idx = siblings.indexOf(el);
          if (idx > 0) {
            el.setAttribute('style', `transition-delay: ${Math.min(idx * 70, 280)}ms`);
          }
        }
        io.observe(el);
      });
      return () => io.disconnect();
    }, 60);

    return () => clearTimeout(timer);
  }, [pathname]);
}
