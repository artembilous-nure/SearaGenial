import { useI18n } from '../i18n/I18nContext';
import Reveal from './Reveal';

export default function About() {
  const { t } = useI18n();

  return (
    <section id="sobre" className="relative overflow-hidden py-24 md:py-32">
      {/* Background accent */}
      <div className="pointer-events-none absolute left-0 top-1/2 h-[500px] w-[400px] -translate-y-1/2 rounded-full bg-gold-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: text */}
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/5 px-4 py-1.5 text-xs font-medium tracking-wide text-gold-200">
              {t.about.badge}
            </div>
            <h2 className="mt-6 font-display text-3xl font-semibold text-stone-50 sm:text-4xl md:text-5xl">
              {t.about.title}
            </h2>
            <div className="mt-6 space-y-4">
              {t.about.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-base leading-relaxed text-stone-400 sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          {/* Right: values */}
          <div className="flex flex-col gap-4">
            {t.about.values.map((value, i) => (
              <Reveal
                key={value.title}
                delay={i * 120}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-ink-800/40 p-7 transition-all duration-500 hover:border-gold-500/30"
              >
                <div className="flex items-start gap-5">
                  <span className="font-display text-3xl font-semibold text-gradient-gold">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-stone-100">
                      {value.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-stone-400">
                      {value.description}
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-gold-400 to-transparent transition-all duration-500 group-hover:w-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
