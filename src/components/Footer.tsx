import { useI18n } from '../i18n/I18nContext';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

type LegalKey = 'privacy' | 'terms' | 'disclaimer';

interface FooterProps {
  onLegalNav?: (page: LegalKey) => void;
}

export default function Footer({ onLegalNav }: FooterProps) {
  const { t } = useI18n();
  const scrollTo = useSmoothScroll();

  const handleLegalClick = (key: string, e: React.MouseEvent) => {
    e.preventDefault();
    const hash = `#/${key}`;
    window.location.hash = hash;
    if (onLegalNav) onLegalNav(key as LegalKey);
  };

  return (
    <footer className="relative border-t border-white/5 bg-ink-950">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-gold-500/40 bg-gold-500/10">
                <span className="font-display text-xl font-semibold text-gradient-gold">SG</span>
              </span>
              <span className="font-display text-xl font-semibold tracking-wide text-stone-100">
                {t.company.name}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone-500">
              {t.company.tagline}. {t.footer.tagline}
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-400">
              {t.footer.navTitle}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {t.nav.map((link) => (
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
          </div>

          {/* Contact + socials */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-400">
              {t.footer.contactTitle}
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li className="text-sm text-stone-500">{t.company.email}</li>
              <li className="text-sm text-stone-500">{t.company.phone}</li>
              <li className="text-sm text-stone-500">{t.company.address}</li>
            </ul>
            <div className="mt-5 flex gap-3">
              {t.contact.socials.map((social) => {
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
          </div>
        </div>

        {/* Divider */}
        <div className="gold-divider my-10 h-px w-full" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-stone-600">{t.footer.copyright}</p>
          <div className="flex gap-6">
            {t.footer.legal.map((item) => (
              <a
                key={item.key}
                href={`#/${item.key}`}
                onClick={(e) => handleLegalClick(item.key, e)}
                className="text-xs text-stone-600 transition-colors hover:text-gold-200"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
