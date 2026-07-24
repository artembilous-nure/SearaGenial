import { useCallback } from 'react';

export function useSmoothScroll() {
  return useCallback((href: string) => {
    const id = href.startsWith('#') ? href.slice(1) : href;
    const el = document.getElementById(id);
    if (!el) return;
    const headerHeight = 96;
    const top = el.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  }, []);
}
