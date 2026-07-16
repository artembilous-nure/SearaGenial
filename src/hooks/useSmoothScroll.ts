import { useCallback } from 'react';

/**
 * Smooth scroll to a section by selector or href.
 * Uses a custom requestAnimationFrame easing for consistent
 * smooth behavior across all browsers.
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

    // easeInOutCubic — premium feel: slow start, fast middle, gentle landing
    const ease = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (now: number) => {
      if (startTime === null) startTime = now;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = ease(progress);

      window.scrollTo(0, startTop + distance * eased);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, []);
}
