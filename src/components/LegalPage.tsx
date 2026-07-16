import { ArrowLeft } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';
import type { Translation } from '../i18n/translations';

type LegalKey = 'privacy' | 'terms' | 'disclaimer';

interface LegalPageProps {
  page: LegalKey;
  onBack: () => void;
}

export default function LegalPage({ page, onBack }: LegalPageProps) {
  const { t } = useI18n() as { t: Translation };
  const content = t.legal[page];

  return (
    <div className="min-h-screen bg-ink-950 pt-28">
      <div className="mx-auto max-w-3xl px-6 py-12 lg:px-10">
        <button
          onClick={onBack}
          className="group mb-10 inline-flex items-center gap-2 text-sm text-stone-400 transition-colors hover:text-gold-200"
        >
          <ArrowLeft
            size={16}
            className="transition-transform group-hover:-translate-x-1"
          />
          {t.nav[0].label}
        </button>

        <div className="border-l border-gold-500/30 pl-6">
          <h1 className="font-display text-3xl font-semibold text-stone-50 sm:text-4xl">
            {content.title}
          </h1>
        </div>

        <div className="mt-10 space-y-8">
          {content.sections.map((section, i) => (
            <div key={i}>
              <h2 className="font-display text-lg font-semibold text-gold-200">
                {section.heading}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-stone-400 sm:text-base">
                {section.body}
              </p>
            </div>
          ))}
        </div>

        <div className="gold-divider mt-12 h-px w-full" />

        <p className="mt-6 text-xs text-stone-600">
          {t.company.name} — {t.company.address}
        </p>
      </div>
    </div>
  );
}
