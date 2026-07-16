import { useState, useEffect } from 'react';
import { I18nProvider } from './i18n/I18nContext';
import { useSmoothWheelScroll } from './hooks/useSmoothWheelScroll';
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
  useSmoothWheelScroll();
  const [legalPage, setLegalPage] = useState<LegalKey | null>(null);

  // Hash-based routing for legal pages: #/privacy, #/terms, #/disclaimer
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

  const goHome = () => {
    window.location.hash = '';
    setLegalPage(null);
  };

  if (legalPage) {
    return (
      <div className="relative min-h-screen bg-ink-950">
        <Header />
        <LegalPage page={legalPage} onBack={goHome} />
        <Footer onLegalNav={goHome} />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-ink-950">
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer onLegalNav={goHome} />
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
