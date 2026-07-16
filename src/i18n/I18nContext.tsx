import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from 'react';
import { TRANSLATIONS, type Lang, type Translation } from './translations';

interface I18nContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translation;
}

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = 'searagenial-lang';

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'pt';

  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && ['pt', 'en', 'es', 'fr'].includes(stored)) {
    return stored as Lang;
  }

  const browser = navigator.language.slice(0, 2).toLowerCase();
  if (['pt', 'en', 'es', 'fr'].includes(browser)) {
    return browser as Lang;
  }

  return 'pt';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem(STORAGE_KEY, newLang);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <I18nContext.Provider value={{ lang, setLang, t: TRANSLATIONS[lang] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
