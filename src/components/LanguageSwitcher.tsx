import { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';
import { LANGUAGES } from '../i18n/translations';

export default function LanguageSwitcher() {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const current = LANGUAGES.find((l) => l.code === lang)!;

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-2 text-xs font-medium text-stone-300 transition-all hover:border-gold-500/40 hover:text-gold-200"
        aria-label="Switch language"
      >
        <Globe size={14} />
        <span className="uppercase">{current.flag}</span>
        <ChevronDown
          size={12}
          className={`transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-40 overflow-hidden rounded-xl border border-white/10 bg-ink-900/95 backdrop-blur-xl shadow-2xl shadow-black/50">
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLang(l.code);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors ${
                l.code === lang
                  ? 'text-gold-200 bg-gold-500/5'
                  : 'text-stone-400 hover:text-gold-200 hover:bg-white/5'
              }`}
            >
              <span className="text-xs font-semibold uppercase opacity-60">
                {l.flag}
              </span>
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
