import { CONTACT, COMPANY } from '../content';
import Reveal from './Reveal';

export default function Contact() {
  const { Mail, Phone, MapPin } = CONTACT.contactIcons;

  const contactItems = [
    { icon: Mail, label: 'Email', value: COMPANY.email, href: `mailto:${COMPANY.email}` },
    { icon: Phone, label: 'Telefone', value: COMPANY.phone, href: `tel:${COMPANY.phone.replace(/\s/g, '')}` },
    { icon: MapPin, label: 'Endereço', value: COMPANY.address, href: '#' },
  ];

  return (
    <section id="contacto" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/5 blur-[140px]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-10">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/5 px-4 py-1.5 text-xs font-medium tracking-wide text-gold-200">
            {CONTACT.badge}
          </div>
          <h2 className="mt-6 font-display text-3xl font-semibold text-stone-50 sm:text-4xl md:text-5xl">
            {CONTACT.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-stone-400 sm:text-lg">
            {CONTACT.subtitle}
          </p>
        </Reveal>

        {/* Contact cards */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {contactItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.label} delay={i * 120}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-white/5 bg-ink-800/40 p-8 transition-all duration-500 hover:border-gold-500/30 hover:bg-ink-700/40"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold-500/20 bg-gold-500/5 transition-all group-hover:border-gold-500/40 group-hover:bg-gold-500/10">
                  <Icon size={22} strokeWidth={1.5} className="text-gold-300" />
                </div>
                <div className="text-xs font-medium uppercase tracking-wider text-stone-500">
                  {item.label}
                </div>
                <div className="text-sm text-stone-300 transition-colors group-hover:text-gold-100">
                  {item.value}
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* CTA button */}
        <Reveal delay={360}>
          <a
            href={`mailto:${COMPANY.email}`}
            className="group mt-12 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 px-8 py-4 text-sm font-semibold text-ink-950 transition-all hover:shadow-lg hover:shadow-gold-500/30"
          >
            Iniciar Conversa
          </a>
        </Reveal>
      </div>
    </section>
  );
}
