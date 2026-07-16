import { SERVICES } from '../content';
import Reveal from './Reveal';

export default function Services() {
  return (
    <section id="servicos" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/5 px-4 py-1.5 text-xs font-medium tracking-wide text-gold-200">
            Serviços
          </div>
          <h2 className="mt-6 font-display text-3xl font-semibold text-stone-50 sm:text-4xl md:text-5xl">
            Áreas de Investimento
          </h2>
          <p className="mt-4 text-base text-stone-400 sm:text-lg">
            Soluções diversificadas e personalizadas para cada perfil de investidor.
          </p>
        </Reveal>

        {/* Cards grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal as="article" key={service.title} delay={i * 120}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-ink-800/40 p-8 transition-all duration-500 hover:border-gold-500/30 hover:bg-ink-700/40"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gold-500/0 blur-3xl transition-all duration-500 group-hover:bg-gold-500/10" />

                {/* Icon */}
                <div className="relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-gold-500/20 bg-gold-500/5 transition-all duration-500 group-hover:border-gold-500/40 group-hover:bg-gold-500/10">
                  <Icon
                    size={26}
                    strokeWidth={1.5}
                    className="text-gold-300 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <h3 className="relative font-display text-xl font-semibold text-stone-100 transition-colors group-hover:text-gold-100">
                  {service.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-stone-400">
                  {service.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-gold-400 to-transparent transition-all duration-500 group-hover:w-full" />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
