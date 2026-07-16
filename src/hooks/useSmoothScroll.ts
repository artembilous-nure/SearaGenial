import { useCallback } from 'react';
import { scrollTarget } from './scrollState';

/**
 * Smooth scroll to a section by selector or href.
 * Uses a custom requestAnimationFrame easing for consistent
 * smooth behavior across all browsers. Syncs with the wheel
 * scroll hook via the shared scrollTarget.
 */
export function useSmoothScroll() {
  return useCallback((href: string) => {
    const id = href.startsWith('#') ? href.slice(1) : href;
    const el = document.getElementById(id);
    if (!el) return;

    const headerHeight = 96;
    const targetTop = el.getBoundingClientRect().top + window.scrollY - headerHeight;
    const startTop = window.scrollY;
    const distance = targetTop - startTop;
    const duration = 900;

    let startTime: number | null = null;

    const ease = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (now: number) => {
      if (startTime === null) startTime = now;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = ease(progress);

      const pos = startTop + distance * eased;
      scrollTarget.current = pos;
      window.scrollTo(0, pos);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        scrollTarget.animated = false;
      }
    };

    scrollTarget.animated = true;
    requestAnimationFrame(step);
  }, []);
}
