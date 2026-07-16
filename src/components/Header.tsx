import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { COMPANY, NAV_LINKS } from '../content';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollTo = useSmoothScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    scrollTo(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass py-4 shadow-2xl shadow-black/40'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <button
          className="group flex items-center gap-2.5"
          onClick={() => handleNavClick('#inicio')}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-gold-500/40 bg-gold-500/10 transition-colors group-hover:bg-gold-500/20">
            <span className="font-display text-xl font-semibold text-gradient-gold">S</span>
          </span>
          <span className="font-display text-xl font-semibold tracking-wide text-stone-100">
            {COMPANY.name}
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="relative text-sm font-medium text-stone-300 transition-colors hover:text-gold-200 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#contacto')}
            className="rounded-full border border-gold-500/50 px-5 py-2 text-sm font-medium text-gold-200 transition-all hover:bg-gold-500 hover:text-ink-950"
          >
            Falar Connosco
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="text-stone-200 md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="glass mx-4 mt-3 flex flex-col gap-1 rounded-2xl p-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="rounded-lg px-4 py-3 text-left text-base font-medium text-stone-300 transition-colors hover:bg-white/5 hover:text-gold-200"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#contacto')}
            className="mt-2 rounded-lg bg-gold-500 px-4 py-3 text-center text-base font-semibold text-ink-950"
          >
            Falar Connosco
          </button>
        </nav>
      </div>
    </header>
  );
}
