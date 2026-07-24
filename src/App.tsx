import { useState, useEffect } from 'react';
import { I18nProvider } from './i18n/I18nContext';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LegalPage from './components/LegalPage';

type LegalKey = 'privacy' | 'terms' | 'disclaimer';

function AppContent() {
  const [legalPage, setLegalPage] = useState<LegalKey | null>(null);
  const scrollTo = useSmoothScroll();

  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      if (hash === '#/privacy') setLegalPage('privacy');
      else if (hash === '#/terms') setLegalPage('terms');
      else if (hash === '#/disclaimer') setLegalPage('disclaimer');
      else setLegalPage(null);
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  // Scroll to top whenever a legal page opens
  useEffect(() => {
    if (legalPage) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [legalPage]);

  const goHome = (target?: string) => {
    window.location.hash = '';
    setLegalPage(null);
    if (target) {
      // Wait for the main page to render before scrolling
      setTimeout(() => scrollTo(target), 50);
    }
  };

  if (legalPage) {
    return (
      <div className="relative min-h-screen bg-ink-950">
        <Header onNavHome={(target) => goHome(target)} />
        <LegalPage page={legalPage} onBack={() => goHome()} />
        <Footer onLegalNav={(page) => {
          const hash = page === 'privacy' ? '#/privacy' : page === 'terms' ? '#/terms' : '#/disclaimer';
          window.location.hash = hash;
        }} />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-ink-950">
      <Header onNavHome={(target) => goHome(target)} />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer onLegalNav={(page) => {
        const hash = page === 'privacy' ? '#/privacy' : page === 'terms' ? '#/terms' : '#/disclaimer';
        window.location.hash = hash;
      }} />
    </div>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <AppContent />
    </I18nProvider>
  );
}
