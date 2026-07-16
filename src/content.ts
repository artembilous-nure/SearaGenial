import {
  TrendingUp,
  Building2,
  Globe2,
  LineChart,
  ShieldCheck,
  PiggyBank,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  type LucideIcon,
} from 'lucide-react';

export const COMPANY = {
  name: 'Seara Genial',
  tagline: 'Investindo no futuro com confiança',
  email: 'contacto@searagenial.pt',
  phone: '+351 210 000 000',
  address: 'Avenida da Liberdade, 100 — 1250-145 Lisboa, Portugal',
};

export const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contacto', href: '#contacto' },
];

export const HERO = {
  badge: 'Seara Genial — Gestão de Investimentos',
  title: 'Investindo no futuro com Seara Genial',
  subtitle:
    'Estratégias de investimento personalizadas que preservam e multiplicam o seu património. Acreditamos num futuro construído com inteligência, rigor e visão.',
  ctaPrimary: 'Fale Connosco',
  ctaSecondary: 'Conhecer Serviços',
  stats: [
    { value: '+15 anos', label: 'Experiência no mercado' },
    { value: '+€500M', label: 'Ativos sob gestão' },
    { value: '+1.200', label: 'Clientes satisfeitos' },
  ],
};

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    icon: TrendingUp,
    title: 'Investimento em Bolsa',
    description:
      'Carteiras diversificadas de ações e obrigações, geridas ativamente para maximizar retornos ajustados ao risco.',
  },
  {
    icon: Building2,
    title: 'Investimento Imobiliário',
    description:
      'Acesso a oportunidades imobiliárias premium em mercados estratégicos, com análise rigorosa de valorização.',
  },
  {
    icon: Globe2,
    title: 'Mercados Internacionais',
    description:
      'Exposição a mercados globais emergentes e desenvolvidos, aproveitando tendências macroeconómicas.',
  },
  {
    icon: LineChart,
    title: 'Gestão de Património',
    description:
      'Planeamento financeiro integral, com acompanhamento contínuo e reajuste estratégico das suas posições.',
  },
  {
    icon: ShieldCheck,
    title: 'Proteção de Capital',
    description:
      'Estratégias defensivas e produtos de baixo risco para preservar o seu capital em qualquer cenário de mercado.',
  },
  {
    icon: PiggyBank,
    title: 'Poupança e Reforma',
    description:
      'Planos de poupança e preparação para a reforma, desenhados para garantir tranquilidade financeira a longo prazo.',
  },
];

export const ABOUT = {
  badge: 'Sobre Nós',
  title: 'A nossa missão',
  paragraphs: [
    'Há mais de 15 anos, a Seara Genial ajuda indivíduos, famílias e instituições a proteger e a fazer crescer o seu património. A nossa abordagem assenta numa premissa simples: decisões de investimento devem ser tomadas com dados, não com emoção. Por isso, cada recomendação que apresentamos resulta de análise quantitativa rigorosa, pesquisa independente e uma compreensão profunda do perfil de cada cliente.',
    'Não acreditamos em promessas de retorno garantido ou em modismos de mercado. Acreditamos em estratégias desenhadas para durar — que sobrevivem a ciclos económicos, resistem à volatilidade e se adaptam a um mundo em mudança constante. A transparência é o nosso padrão: o cliente sabe sempre onde está o seu capital, por que razão, e qual o plano para o futuro.',
    'Quando confia na Seara Genial, não entrega apenas o seu capital — estabelece uma parceria de longo prazo com uma equipa que mede o seu próprio sucesso pelo seu. Esse é o compromisso que nos define.',
  ],
  values: [
    {
      title: 'Confiança',
      description:
        'Comunicação transparente em todas as fases. O cliente sabe sempre o que fazemos e porquê.',
    },
    {
      title: 'Rigor Analítico',
      description:
        'Cada decisão é sustentada por dados, pesquisa própria e modelagem quantitativa — nunca por intuição.',
    },
    {
      title: 'Visão de Longo Prazo',
      description:
        'Pensamos em décadas, não em trimestres. As melhores decisões são as que resistem ao tempo.',
    },
  ],
};

export const CONTACT = {
  badge: 'Contacto',
  title: 'Vamos conversar',
  subtitle:
    'Estamos prontos para o acompanhar no próximo passo da sua jornada de investimento. Entre em contacto e descubra como podemos ajudar.',
  socials: [
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
  ],
  contactIcons: {
    Mail,
    Phone,
    MapPin,
  },
};

export const FOOTER = {
  copyright: `© ${new Date().getFullYear()} Seara Genial. Todos os direitos reservados.`,
  legal: [
    { label: 'Política de Privacidade', href: '#' },
    { label: 'Termos de Uso', href: '#' },
    { label: 'Aviso Legal', href: '#' },
  ],
};
