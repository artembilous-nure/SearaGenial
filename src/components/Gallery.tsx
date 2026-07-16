import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';
import { GALLERY_IMAGES } from '../i18n/translations';
import Reveal from './Reveal';

export default function Gallery() {
  const { t } = useI18n();
  const [current, setCurrent] = useState(0);
  const count = GALLERY_IMAGES.length;

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % count),
    [count],
  );
  const prev = () => setCurrent((c) => (c - 1 + count) % count);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="galeria" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-gold-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/5 px-4 py-1.5 text-xs font-medium tracking-wide text-gold-200">
            {t.gallery.badge}
          </div>
          <h2 className="mt-6 font-display text-3xl font-semibold text-stone-50 sm:text-4xl md:text-5xl">
            {t.gallery.title}
          </h2>
          <p className="mt-4 text-base text-stone-400 sm:text-lg">
            {t.gallery.subtitle}
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative mx-auto mt-14 max-w-4xl overflow-hidden rounded-3xl border border-white/5">
            {/* Slides */}
            <div className="relative aspect-[16/9]">
              {GALLERY_IMAGES.map((src, i) => (
                <div
                  key={i}
                  className="absolute inset-0 transition-opacity duration-700"
                  style={{ opacity: i === current ? 1 : 0 }}
                >
                  <img
                    src={src}
                    alt=""
                    className="h-full w-full object-cover"
                    loading={i === 0 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
                </div>
              ))}
            </div>

            {/* Arrows */}
            <button
              onClick={prev}
              aria-label={t.gallery.prev}
              className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-ink-950/50 text-stone-300 backdrop-blur-md transition-all hover:border-gold-500/40 hover:text-gold-200"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              aria-label={t.gallery.next}
              className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-ink-950/50 text-stone-300 backdrop-blur-md transition-all hover:border-gold-500/40 hover:text-gold-200"
            >
              <ChevronRight size={20} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
              {GALLERY_IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === current
                      ? 'w-8 bg-gold-400'
                      : 'w-1.5 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
