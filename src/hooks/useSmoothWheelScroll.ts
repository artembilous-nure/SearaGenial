import { useEffect } from 'react';
import { scrollTarget } from './scrollState';

/**
 * Smooth wheel scroll — intercepts wheel events and animates
 * the scroll position with a lerp for an inertia-like feel.
 * Respects reduced-motion and touch devices.
 */
export function useSmoothWheelScroll() {
  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || reducedMotion) return;

    scrollTarget.current = window.scrollY;
    let current = window.scrollY;
    let rafId = 0;
    let isAnimating = false;

    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const animate = () => {
      current = lerp(current, scrollTarget.current, 0.09);

      if (Math.abs(scrollTarget.current - current) < 0.5) {
        current = scrollTarget.current;
        window.scrollTo(0, current);
        isAnimating = false;
        scrollTarget.animated = false;
        return;
      }

      window.scrollTo(0, current);
      rafId = requestAnimationFrame(animate);
    };

    const startAnim = () => {
      if (!isAnimating) {
        isAnimating = true;
        scrollTarget.animated = true;
        current = window.scrollY;
        rafId = requestAnimationFrame(animate);
      }
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      scrollTarget.current = Math.max(
        0,
        Math.min(scrollTarget.current + e.deltaY, maxScroll),
      );
      startAnim();
    };

    const onScroll = () => {
      if (!isAnimating) {
        scrollTarget.current = window.scrollY;
        current = window.scrollY;
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);
}
