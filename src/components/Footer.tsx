import { FOOTER, COMPANY, NAV_LINKS, CONTACT } from '../content';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import Reveal from './Reveal';

export default function Footer() {
  const scrollTo = useSmoothScroll();

  return (
    <footer className="relative border-t border-white/5 bg-ink-950">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <Reveal>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-gold-500/40 bg-gold-500/10">
                <span className="font-display text-xl font-semibold text-gradient-gold">S</span>
              </span>
              <span className="font-display text-xl font-semibold tracking-wide text-stone-100">
                {COMPANY.name}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone-500">
              {COMPANY.tagline}. Estratégias de investimento com inteligência, rigor e visão.
            </p>
          </Reveal>

          {/* Nav links */}
          <Reveal delay={120}>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-400">
              Navegação
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-stone-500 transition-colors hover:text-gold-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Contact + socials */}
          <Reveal delay={240}>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-400">
              Contacto
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li className="text-sm text-stone-500">{COMPANY.email}</li>
              <li className="text-sm text-stone-500">{COMPANY.phone}</li>
              <li className="text-sm text-stone-500">{COMPANY.address}</li>
            </ul>
            <div className="mt-5 flex gap-3">
              {CONTACT.socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/5 bg-ink-800/40 text-stone-400 transition-all hover:border-gold-500/30 hover:text-gold-200"
                  >
                    <Icon size={18} strokeWidth={1.5} />
                  </a>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* Divider */}
        <div className="gold-divider my-10 h-px w-full" />

        {/* Bottom bar */}
        <Reveal delay={360}>
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-stone-600">{FOOTER.copyright}</p>
            <div className="flex gap-6">
              {FOOTER.legal.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-xs text-stone-600 transition-colors hover:text-gold-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
