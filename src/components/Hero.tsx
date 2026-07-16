import { ArrowRight, ChevronDown } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

export default function Hero() {
  const { t } = useI18n();
  const scrollTo = useSmoothScroll();

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gold-500/10 blur-[120px] animate-glow" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-blue-900/20 blur-[100px]" />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Badge */}
        <div className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/5 px-4 py-1.5 text-xs font-medium tracking-wide text-gold-200">
          <span className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-glow" />
          {t.hero.badge}
        </div>

        {/* Title */}
        <h1 className="animate-fade-up mt-8 font-display text-4xl font-semibold leading-[1.1] text-stone-50 sm:text-5xl md:text-6xl lg:text-7xl">
          {t.hero.title}{' '}
          <span className="text-gradient-gold">{t.hero.titleAccent}</span>
        </h1>

        {/* Subtitle */}
        <p
          className="animate-fade-up mx-auto mt-6 max-w-2xl text-base leading-relaxed text-stone-400 sm:text-lg md:text-xl"
          style={{ animationDelay: '0.15s', opacity: 0 }}
        >
          {t.hero.subtitle}
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animationDelay: '0.3s', opacity: 0 }}
        >
          <button
            onClick={() => scrollTo('#contacto')}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 px-7 py-3.5 text-sm font-semibold text-ink-950 transition-all hover:shadow-lg hover:shadow-gold-500/30"
          >
            {t.hero.ctaPrimary}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => scrollTo('#servicos')}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-stone-200 transition-all hover:border-gold-500/50 hover:text-gold-200"
          >
            {t.hero.ctaSecondary}
          </button>
        </div>

        {/* Stats */}
        <div
          className="animate-fade-up mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8"
          style={{ animationDelay: '0.45s', opacity: 0 }}
        >
          {t.hero.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl font-semibold text-gradient-gold sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-stone-500 sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('#servicos')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-stone-600 transition-colors hover:text-gold-300"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} className="animate-bounce" />
      </button>
    </section>
  );
}
