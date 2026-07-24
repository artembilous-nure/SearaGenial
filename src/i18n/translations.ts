import {
  TrendingUp,
  Building2,
  Linkedin,
  Twitter,
  Instagram,
  type LucideIcon,
} from 'lucide-react';

export type Lang = 'pt' | 'en' | 'es' | 'fr';

export const LANGUAGES: { code: Lang; label: string; flag: string }[] = [
  { code: 'pt', label: 'Português', flag: 'PT' },
  { code: 'en', label: 'English', flag: 'EN' },
  { code: 'es', label: 'Español', flag: 'ES' },
  { code: 'fr', label: 'Français', flag: 'FR' },
];

export interface ServiceData {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Translation {
  company: {
    name: string;
    tagline: string;
    email: string;
    phone: string;
    address: string;
  };
  nav: { label: string; href: string }[];
  hero: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { value: string; label: string }[];
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    items: ServiceData[];
  };
  about: {
    badge: string;
    title: string;
    paragraphs: string[];
    values: { title: string; description: string }[];
  };
  gallery: {
    badge: string;
    title: string;
    subtitle: string;
    prev: string;
    next: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
    labels: { email: string; phone: string; address: string };
    socials: { icon: LucideIcon; label: string; href: string }[];
  };
  footer: {
    tagline: string;
    navTitle: string;
    contactTitle: string;
    copyright: string;
    legal: { label: string; key: string }[];
  };
  legal: {
    privacy: { title: string; sections: { heading: string; body: string }[] };
    terms: { title: string; sections: { heading: string; body: string }[] };
    disclaimer: { title: string; sections: { heading: string; body: string }[] };
  };
}

const companyInfo = {
  name: 'Seara Genial',
  email: 'contacto@searagenial.pt',
  phone: '+351 210 000 000',
  address: 'Rua Sport Faro e Benfica, 5 — 8000-544 Faro, Portugal',
};

const socials = [
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
];

const PUBLIC_BASE = import.meta.env.BASE_URL;

export const GALLERY_IMAGES = [
  `${PUBLIC_BASE}images/gallery/p1.jpg`,
  `${PUBLIC_BASE}images/gallery/p2.jpg`,
  `${PUBLIC_BASE}images/gallery/p3.jpg`,
  `${PUBLIC_BASE}images/gallery/p4.jpg`,
  `${PUBLIC_BASE}images/gallery/p5.jpg`,
  `${PUBLIC_BASE}images/gallery/p6.jpg`,
];

export const TRANSLATIONS: Record<Lang, Translation> = {
  pt: {
    company: { ...companyInfo, tagline: 'Investindo no futuro com confiança' },
    nav: [
      { label: 'Início', href: '#inicio' },
      { label: 'Serviços', href: '#servicos' },
      { label: 'Galeria', href: '#galeria' },
      { label: 'Sobre', href: '#sobre' },
      { label: 'Contacto', href: '#contacto' },
    ],
    hero: {
      badge: 'Seara Genial — Gestão de Investimentos',
      title: 'Investindo no futuro com',
      titleAccent: 'Seara Genial',
      subtitle:
        'Estratégias de investimento personalizadas que preservam e multiplicam o seu património. Acreditamos num futuro construído com inteligência, rigor e visão.',
      ctaPrimary: 'Fale Connosco',
      ctaSecondary: 'Conhecer Serviços',
      stats: [
        { value: 'Visão Global', label: 'Análise Estratégica' },
        { value: 'Gestão Ativa', label: 'Otimização Constante' },
        { value: 'Foco no Cliente', label: 'Soluções Personalizadas' },
      ],
    },
    services: {
      badge: 'Serviços',
      title: 'Áreas de Investimento',
      subtitle:
        'Soluções diversificadas e personalizadas para cada perfil de investidor.',
      items: [
        {
          icon: TrendingUp,
          title: 'Participações Sociais',
          description:
            'Aquisição e gestão de participações em sociedades, com foco na valorização de longo prazo e diversificação setorial estratégica.',
        },
        {
          icon: Building2,
          title: 'Investimento Imobiliário',
          description:
            'Acesso a oportunidades imobiliárias premium em mercados estratégicos, com análise rigorosa de valorização.',
        },
      ],
    },
    about: {
      badge: 'Sobre Nós',
      title: 'A nossa missão',
      paragraphs: [
        'Seara Genial ajuda indivíduos, famílias e instituições a proteger e a fazer crescer o seu património. A nossa abordagem assenta numa premissa simples: decisões de investimento devem ser tomadas com dados, não com emoção. Por isso, cada recomendação que apresentamos resulta de análise quantitativa rigorosa, pesquisa independente e uma compreensão profunda do perfil de cada cliente.',
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
    },
    gallery: {
      badge: 'Galeria',
      title: 'A nossa jornada em imagens',
      subtitle:
        'Momentos que definem a Seara Genial — eventos, equipas e projetos que constroem o futuro.',
      prev: 'Anterior',
      next: 'Seguinte',
    },
    contact: {
      badge: 'Contacto',
      title: 'Vamos conversar',
      subtitle:
        'Estamos prontos para o acompanhar no próximo passo da sua jornada de investimento. Entre em contacto e descubra como podemos ajudar.',
      cta: 'Iniciar Conversa',
      labels: { email: 'Email', phone: 'Telefone', address: 'Endereço' },
      socials,
    },
    footer: {
      tagline:
        'Estratégias de investimento com inteligência, rigor e visão.',
      navTitle: 'Navegação',
      contactTitle: 'Contacto',
      copyright: `© ${new Date().getFullYear()} Seara Genial. Todos os direitos reservados.`,
      legal: [
        { label: 'Política de Privacidade', key: 'privacy' },
        { label: 'Termos de Uso', key: 'terms' },
        { label: 'Aviso Legal', key: 'disclaimer' },
      ],
    },
    legal: {
      privacy: {
        title: 'Política de Privacidade',
        sections: [
          {
            heading: '1. Introdução',
            body: 'A Seara Genial respeita a privacidade dos seus clientes e visitantes. Esta política descreve como recolhemos, utilizamos e protegemos os seus dados pessoais, em conformidade com o Regulamento Geral de Proteção de Dados (RGPD) da União Europeia.',
          },
          {
            heading: '2. Dados Recolhidos',
            body: 'Recolhemos informações que nos fornece diretamente, como nome, email, telefone e dados de contacto, bem como informações recolhidas automaticamente, como endereço IP e dados de navegação, através de cookies e tecnologias similares.',
          },
          {
            heading: '3. Utilização dos Dados',
            body: 'Os seus dados são utilizados para responder a contactos, fornecer serviços solicitados, enviar comunicações relevantes e cumprir obrigações legais. Não vendemos nem cedemos os seus dados a terceiros para fins comerciais.',
          },
          {
            heading: '4. Proteção de Dados',
            body: 'Implementamos medidas técnicas e organizativas adequadas para proteger os seus dados pessoais contra acesso não autorizado, perda ou destruição. O acesso aos dados é restrito a pessoal autorizado.',
          },
          {
            heading: '5. Os Seus Direitos',
            body: 'Tem o direito de aceder, retificar, apagar ou restringir o tratamento dos seus dados, bem como o direito à portabilidade e o direito de oposição. Para exercer estes direitos, contacte-nos através de contacto@searagenial.pt.',
          },
          {
            heading: '6. Cookies',
            body: 'O nosso site utiliza cookies para melhorar a experiência de navegação. Pode configurar o seu navegador para recusar cookies, embora algumas funcionalidades possam não funcionar corretamente.',
          },
        ],
      },
      terms: {
        title: 'Termos de Uso',
        sections: [
          {
            heading: '1. Aceitação dos Termos',
            body: 'Ao aceder e utilizar este site, aceita os presentes Termos de Uso na sua totalidade. Caso não concorde com qualquer parte destes termos, deve cessar a utilização do site.',
          },
          {
            heading: '2. Natureza do Conteúdo',
            body: 'O conteúdo deste site é meramente informativo e não constitui aconselhamento financeiro, fiscal ou de investimento personalizado. As decisões de investimento são da exclusiva responsabilidade do utilizador.',
          },
          {
            heading: '3. Limitação de Responsabilidade',
            body: 'A Seara Genial não se responsabiliza por perdas diretas ou indiretas resultantes da utilização das informações disponíveis no site. O desempenho passado não garante resultados futuros.',
          },
          {
            heading: '4. Propriedade Intelectual',
            body: 'Todos os conteúdos do site — textos, imagens, logótipos e design — são propriedade da Seara Genial e protegidos por direitos de autor. É proibida a reprodução sem autorização prévia.',
          },
          {
            heading: '5. Links Externos',
            body: 'O site pode conter links para sites de terceiros. A Seara Genial não controla nem se responsabiliza pelo conteúdo ou práticas de privacidade desses sites.',
          },
          {
            heading: '6. Alterações',
            body: 'A Seara Genial reserva-se o direito de modificar estes Termos de Uso a qualquer momento. As alterações entram em vigor imediatamente após a sua publicação no site.',
          },
        ],
      },
      disclaimer: {
        title: 'Aviso Legal',
        sections: [
          {
            heading: '1. Natureza da Informação',
            body: 'As informações apresentadas neste site têm caráter geral e informativo. Não constituem oferta, solicitação ou recomendação de investimento personalizada. Antes de tomar qualquer decisão, consulte um profissional qualificado.',
          },
          {
            heading: '2. Risco de Investimento',
            body: 'Todos os investimentos envolvem risco, incluindo a possível perda do capital investido. O valor dos investimentos pode subir ou descer e o desempenho passado não é indicador de resultados futuros.',
          },
          {
            heading: '3. Sem Garantia de Retornos',
            body: 'A Seara Genial não garante qualquer nível de retorno. Projeções e simulações apresentadas são meramente ilustrativas e baseadas em premissas que podem não se concretizar.',
          },
          {
            heading: '4. Regulação',
            body: 'A Seara Genial opera em conformidade com a legislação portuguesa e europeia aplicável à atividade de gestão de investimentos. A autorização de operação é emitida pelas autoridades competentes.',
          },
          {
            heading: '5. Jurisdição',
            body: 'O presente aviso legal rege-se pela legislação portuguesa. Qualquer litígio será dirimido nos tribunais competentes de Lisboa, Portugal.',
          },
        ],
      },
    },
  },

  en: {
    company: { ...companyInfo, tagline: 'Investing in the future with confidence' },
    nav: [
      { label: 'Home', href: '#inicio' },
      { label: 'Services', href: '#servicos' },
      { label: 'Gallery', href: '#galeria' },
      { label: 'About', href: '#sobre' },
      { label: 'Contact', href: '#contacto' },
    ],
    hero: {
      badge: 'Seara Genial — Investment Management',
      title: 'Investing in the future with',
      titleAccent: 'Seara Genial',
      subtitle:
        'Personalized investment strategies that preserve and grow your wealth. We believe in a future built with intelligence, rigor, and vision.',
      ctaPrimary: 'Talk to Us',
      ctaSecondary: 'Explore Services',
      stats: [
        { value: 'Global Vision', label: 'Strategic Analysis' },
        { value: 'Active Management', label: 'Continuous Optimization' },
        { value: 'Client Focus', label: 'Personalized Solutions' },
      ],
    },
    services: {
      badge: 'Services',
      title: 'Investment Areas',
      subtitle:
        'Diversified and personalized solutions for every investor profile.',
      items: [
        {
          icon: TrendingUp,
          title: 'Equity Participations',
          description:
            'Acquisition and management of equity participations in companies, focused on long-term value appreciation and strategic sector diversification.',
        },
        {
          icon: Building2,
          title: 'Real Estate Investment',
          description:
            'Access to premium real estate opportunities in strategic markets, with rigorous valuation analysis.',
        },
      ],
    },
    about: {
      badge: 'About Us',
      title: 'Our mission',
      paragraphs: [
        'Seara Genial helps individuals, families, and institutions protect and grow their wealth. Our approach rests on a simple premise: investment decisions should be made with data, not emotion. Every recommendation we present results from rigorous quantitative analysis, independent research, and a deep understanding of each client\'s profile.',
        'We do not believe in guaranteed return promises or market fads. We believe in strategies built to last — that survive economic cycles, withstand volatility, and adapt to a constantly changing world. Transparency is our standard: the client always knows where their capital is, why, and what the plan is for the future.',
        'When you trust Seara Genial, you are not just entrusting your capital — you are establishing a long-term partnership with a team that measures its own success by yours. That is the commitment that defines us.',
      ],
      values: [
        {
          title: 'Trust',
          description:
            'Transparent communication at every stage. The client always knows what we do and why.',
        },
        {
          title: 'Analytical Rigor',
          description:
            'Every decision is backed by data, proprietary research, and quantitative modeling — never by intuition.',
        },
        {
          title: 'Long-Term Vision',
          description:
            'We think in decades, not quarters. The best decisions are those that stand the test of time.',
        },
      ],
    },
    gallery: {
      badge: 'Gallery',
      title: 'Our journey in images',
      subtitle:
        'Moments that define Seara Genial — events, teams, and projects that build the future.',
      prev: 'Previous',
      next: 'Next',
    },
    contact: {
      badge: 'Contact',
      title: "Let's talk",
      subtitle:
        'We are ready to guide you through the next step of your investment journey. Get in touch and discover how we can help.',
      cta: 'Start a Conversation',
      labels: { email: 'Email', phone: 'Phone', address: 'Address' },
      socials,
    },
    footer: {
      tagline: 'Investment strategies with intelligence, rigor, and vision.',
      navTitle: 'Navigation',
      contactTitle: 'Contact',
      copyright: `© ${new Date().getFullYear()} Seara Genial. All rights reserved.`,
      legal: [
        { label: 'Privacy Policy', key: 'privacy' },
        { label: 'Terms of Use', key: 'terms' },
        { label: 'Legal Notice', key: 'disclaimer' },
      ],
    },
    legal: {
      privacy: {
        title: 'Privacy Policy',
        sections: [
          {
            heading: '1. Introduction',
            body: 'Seara Genial respects the privacy of its clients and visitors. This policy describes how we collect, use, and protect your personal data, in accordance with the General Data Protection Regulation (GDPR) of the European Union.',
          },
          {
            heading: '2. Data Collected',
            body: 'We collect information you provide directly, such as name, email, phone, and contact details, as well as information collected automatically, such as IP address and browsing data, through cookies and similar technologies.',
          },
          {
            heading: '3. Use of Data',
            body: 'Your data is used to respond to inquiries, provide requested services, send relevant communications, and comply with legal obligations. We do not sell or share your data with third parties for commercial purposes.',
          },
          {
            heading: '4. Data Protection',
            body: 'We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, or destruction. Access to data is restricted to authorized personnel only.',
          },
          {
            heading: '5. Your Rights',
            body: 'You have the right to access, rectify, erase, or restrict the processing of your data, as well as the right to data portability and the right to object. To exercise these rights, contact us at contacto@searagenial.pt.',
          },
          {
            heading: '6. Cookies',
            body: 'Our website uses cookies to enhance your browsing experience. You can configure your browser to refuse cookies, although some features may not function properly.',
          },
        ],
      },
      terms: {
        title: 'Terms of Use',
        sections: [
          {
            heading: '1. Acceptance of Terms',
            body: 'By accessing and using this website, you accept these Terms of Use in their entirety. If you do not agree with any part of these terms, you must cease using the site.',
          },
          {
            heading: '2. Nature of Content',
            body: 'The content of this website is purely informational and does not constitute personalized financial, tax, or investment advice. Investment decisions are the sole responsibility of the user.',
          },
          {
            heading: '3. Limitation of Liability',
            body: 'Seara Genial is not liable for direct or indirect losses resulting from the use of information available on the website. Past performance does not guarantee future results.',
          },
          {
            heading: '4. Intellectual Property',
            body: 'All content on this website — texts, images, logos, and design — is the property of Seara Genial and protected by copyright. Reproduction without prior authorization is prohibited.',
          },
          {
            heading: '5. External Links',
            body: 'The website may contain links to third-party websites. Seara Genial does not control or assume responsibility for the content or privacy practices of those sites.',
          },
          {
            heading: '6. Changes',
            body: 'Seara Genial reserves the right to modify these Terms of Use at any time. Changes take effect immediately upon publication on the website.',
          },
        ],
      },
      disclaimer: {
        title: 'Legal Notice',
        sections: [
          {
            heading: '1. Nature of Information',
            body: 'The information presented on this website is general and informational in nature. It does not constitute an offer, solicitation, or personalized investment recommendation. Before making any decision, consult a qualified professional.',
          },
          {
            heading: '2. Investment Risk',
            body: 'All investments involve risk, including the possible loss of invested capital. The value of investments may go up or down, and past performance is not indicative of future results.',
          },
          {
            heading: '3. No Guarantee of Returns',
            body: 'Seara Genial does not guarantee any level of return. Projections and simulations presented are purely illustrative and based on assumptions that may not materialize.',
          },
          {
            heading: '4. Regulation',
            body: 'Seara Genial operates in compliance with Portuguese and European legislation applicable to investment management activities. Operating authorization is issued by the competent authorities.',
          },
          {
            heading: '5. Jurisdiction',
            body: 'This legal notice is governed by Portuguese law. Any dispute shall be resolved in the competent courts of Lisbon, Portugal.',
          },
        ],
      },
    },
  },

  es: {
    company: { ...companyInfo, tagline: 'Invirtiendo en el futuro con confianza' },
    nav: [
      { label: 'Inicio', href: '#inicio' },
      { label: 'Servicios', href: '#servicos' },
      { label: 'Galería', href: '#galeria' },
      { label: 'Sobre', href: '#sobre' },
      { label: 'Contacto', href: '#contacto' },
    ],
    hero: {
      badge: 'Seara Genial — Gestión de Inversiones',
      title: 'Invirtiendo en el futuro con',
      titleAccent: 'Seara Genial',
      subtitle:
        'Estrategias de inversión personalizadas que preservan y multiplican su patrimonio. Creemos en un futuro construido con inteligencia, rigor y visión.',
      ctaPrimary: 'Hable con Nosotros',
      ctaSecondary: 'Conocer Servicios',
      stats: [
        { value: 'Visión Global', label: 'Análisis Estratégico' },
        { value: 'Gestión Activa', label: 'Optimización Constante' },
        { value: 'Foco en el Cliente', label: 'Soluciones Personalizadas' },
      ],
    },
    services: {
      badge: 'Servicios',
      title: 'Áreas de Inversión',
      subtitle:
        'Soluciones diversificadas y personalizadas para cada perfil de inversor.',
      items: [
        {
          icon: TrendingUp,
          title: 'Participaciones Sociales',
          description:
            'Adquisición y gestión de participaciones en empresas, con foco en la valorización a largo plazo y diversificación sectorial estratégica.',
        },
        {
          icon: Building2,
          title: 'Inversión Inmobiliaria',
          description:
            'Acceso a oportunidades inmobiliarias premium en mercados estratégicos, con análisis riguroso de valorización.',
        },
      ],
    },
    about: {
      badge: 'Sobre Nosotros',
      title: 'Nuestra misión',
      paragraphs: [
        'Seara Genial ayuda a individuos, familias e instituciones a proteger y hacer crecer su patrimonio. Nuestro enfoque se basa en una premisa simple: las decisiones de inversión deben tomarse con datos, no con emoción. Cada recomendación que presentamos resulta de un análisis cuantitativo riguroso, investigación independiente y una comprensión profunda del perfil de cada cliente.',
        'No creemos en promesas de retorno garantizado ni en modas del mercado. Creemos en estrategias diseñadas para perdurar — que sobreviven a ciclos económicos, resisten la volatilidad y se adaptan a un mundo en constante cambio. La transparencia es nuestro estándar: el cliente siempre sabe dónde está su capital, por qué razón, y cuál es el plan para el futuro.',
        'Cuando confía en Seara Genial, no solo entrega su capital — establece una asociación a largo plazo con un equipo que mide su propio éxito por el suyo. Ese es el compromiso que nos define.',
      ],
      values: [
        {
          title: 'Confianza',
          description:
            'Comunicación transparente en todas las etapas. El cliente siempre sabe lo que hacemos y por qué.',
        },
        {
          title: 'Rigor Analítico',
          description:
            'Cada decisión está respaldada por datos, investigación propia y modelado cuantitativo — nunca por intuición.',
        },
        {
          title: 'Visión a Largo Plazo',
          description:
            'Pensamos en décadas, no en trimestres. Las mejores decisiones son las que resisten el paso del tiempo.',
        },
      ],
    },
    gallery: {
      badge: 'Galería',
      title: 'Nuestra trayectoria en imágenes',
      subtitle:
        'Momentos que definen Seara Genial — eventos, equipos y proyectos que construyen el futuro.',
      prev: 'Anterior',
      next: 'Siguiente',
    },
    contact: {
      badge: 'Contacto',
      title: 'Hablemos',
      subtitle:
        'Estamos listos para acompañarle en el próximo paso de su viaje de inversión. Póngase en contacto y descubra cómo podemos ayudar.',
      cta: 'Iniciar Conversación',
      labels: { email: 'Email', phone: 'Teléfono', address: 'Dirección' },
      socials,
    },
    footer: {
      tagline: 'Estrategias de inversión con inteligencia, rigor y visión.',
      navTitle: 'Navegación',
      contactTitle: 'Contacto',
      copyright: `© ${new Date().getFullYear()} Seara Genial. Todos los derechos reservados.`,
      legal: [
        { label: 'Política de Privacidad', key: 'privacy' },
        { label: 'Términos de Uso', key: 'terms' },
        { label: 'Aviso Legal', key: 'disclaimer' },
      ],
    },
    legal: {
      privacy: {
        title: 'Política de Privacidad',
        sections: [
          {
            heading: '1. Introducción',
            body: 'Seara Genial respeta la privacidad de sus clientes y visitantes. Esta política describe cómo recopilamos, utilizamos y protegemos sus datos personales, de conformidad con el Reglamento General de Protección de Datos (RGPD) de la Unión Europea.',
          },
          {
            heading: '2. Datos Recopilados',
            body: 'Recopilamos información que nos proporciona directamente, como nombre, email, teléfono y datos de contacto, así como información recopilada automáticamente, como dirección IP y datos de navegación, a través de cookies y tecnologías similares.',
          },
          {
            heading: '3. Uso de los Datos',
            body: 'Sus datos se utilizan para responder a consultas, proporcionar servicios solicitados, enviar comunicaciones relevantes y cumplir con obligaciones legales. No vendemos ni cedemos sus datos a terceros con fines comerciales.',
          },
          {
            heading: '4. Protección de Datos',
            body: 'Implementamos medidas técnicas y organizativas adecuadas para proteger sus datos personales contra acceso no autorizado, pérdida o destrucción. El acceso a los datos está restringido al personal autorizado.',
          },
          {
            heading: '5. Sus Derechos',
            body: 'Tiene derecho a acceder, rectificar, suprimir o restringir el tratamiento de sus datos, así como el derecho a la portabilidad y el derecho de oposición. Para ejercer estos derechos, contáctenos en contacto@searagenial.pt.',
          },
          {
            heading: '6. Cookies',
            body: 'Nuestro sitio web utiliza cookies para mejorar su experiencia de navegación. Puede configurar su navegador para rechazar cookies, aunque algunas funciones pueden no funcionar correctamente.',
          },
        ],
      },
      terms: {
        title: 'Términos de Uso',
        sections: [
          {
            heading: '1. Aceptación de los Términos',
            body: 'Al acceder y utilizar este sitio web, acepta estos Términos de Uso en su totalidad. Si no está de acuerdo con alguna parte de estos términos, debe dejar de usar el sitio.',
          },
          {
            heading: '2. Naturaleza del Contenido',
            body: 'El contenido de este sitio web es puramente informativo y no constituye asesoramiento financiero, fiscal o de inversión personalizado. Las decisiones de inversión son responsabilidad exclusiva del usuario.',
          },
          {
            heading: '3. Limitación de Responsabilidad',
            body: 'Seara Genial no se hace responsable de pérdidas directas o indirectas resultantes del uso de la información disponible en el sitio web. El rendimiento pasado no garantiza resultados futuros.',
          },
          {
            heading: '4. Propiedad Intelectual',
            body: 'Todo el contenido del sitio web — textos, imágenes, logotipos y diseño — es propiedad de Seara Genial y está protegido por derechos de autor. Se prohíbe la reproducción sin autorización previa.',
          },
          {
            heading: '5. Enlaces Externos',
            body: 'El sitio web puede contener enlaces a sitios de terceros. Seara Genial no controla ni se hace responsable del contenido o las prácticas de privacidad de dichos sitios.',
          },
          {
            heading: '6. Cambios',
            body: 'Seara Genial se reserva el derecho de modificar estos Términos de Uso en cualquier momento. Los cambios entran en vigor inmediatamente después de su publicación en el sitio web.',
          },
        ],
      },
      disclaimer: {
        title: 'Aviso Legal',
        sections: [
          {
            heading: '1. Naturaleza de la Información',
            body: 'La información presentada en este sitio web tiene carácter general e informativo. No constituye una oferta, solicitud o recomendación de inversión personalizada. Antes de tomar cualquier decisión, consulte a un profesional cualificado.',
          },
          {
            heading: '2. Riesgo de Inversión',
            body: 'Todas las inversiones implican riesgo, incluida la posible pérdida del capital invertido. El valor de las inversiones puede subir o bajar, y el rendimiento pasado no es indicativo de resultados futuros.',
          },
          {
            heading: '3. Sin Garantía de Retornos',
            body: 'Seara Genial no garantiza ningún nivel de retorno. Las proyecciones y simulaciones presentadas son meramente ilustrativas y se basan en supuestos que pueden no materializarse.',
          },
          {
            heading: '4. Regulación',
            body: 'Seara Genial opera de conformidad con la legislación portuguesa y europea aplicable a la actividad de gestión de inversiones. La autorización de operación es emitida por las autoridades competentes.',
          },
          {
            heading: '5. Jurisdicción',
            body: 'Este aviso legal se rige por la legislación portuguesa. Cualquier disputa se resolverá en los tribunales competentes de Lisboa, Portugal.',
          },
        ],
      },
    },
  },

  fr: {
    company: { ...companyInfo, tagline: 'Investir dans l\'avenir avec confiance' },
    nav: [
      { label: 'Accueil', href: '#inicio' },
      { label: 'Services', href: '#servicos' },
      { label: 'Galerie', href: '#galeria' },
      { label: 'À propos', href: '#sobre' },
      { label: 'Contact', href: '#contacto' },
    ],
    hero: {
      badge: 'Seara Genial — Gestion d\'Investissements',
      title: 'Investir dans l\'avenir avec',
      titleAccent: 'Seara Genial',
      subtitle:
        'Des stratégies d\'investissement personnalisées qui préservent et font fructifier votre patrimoine. Nous croyons en un avenir bâti avec intelligence, rigueur et vision.',
      ctaPrimary: 'Parlez-nous',
      ctaSecondary: 'Découvrir les Services',
      stats: [
        { value: 'Vision Globale', label: 'Analyse Stratégique' },
        { value: 'Gestion Active', label: 'Optimisation Continue' },
        { value: 'Focus Client', label: 'Solutions Personnalisées' },
      ],
    },
    services: {
      badge: 'Services',
      title: 'Domaines d\'Investissement',
      subtitle:
        'Des solutions diversifiées et personnalisées pour chaque profil d\'investisseur.',
      items: [
        {
          icon: TrendingUp,
          title: 'Participations Sociales',
          description:
            'Acquisition et gestion de participations dans des sociétés, axées sur la valorisation à long terme et la diversification sectorielle stratégique.',
        },
        {
          icon: Building2,
          title: 'Investissement Immobilier',
          description:
            'Accès à des opportunités immobilières premium sur des marchés stratégiques, avec une analyse rigoureuse de la valorisation.',
        },
      ],
    },
    about: {
      badge: 'À propos',
      title: 'Notre mission',
      paragraphs: [
        'Seara Genial aide les particuliers, les familles et les institutions à protéger et à faire croître leur patrimoine. Notre approche repose sur une prémisse simple : les décisions d\'investissement doivent être prises avec des données, non avec des émotions. Chaque recommandation que nous présentons résulte d\'une analyse quantitative rigoureuse, d\'une recherche indépendante et d\'une compréhension approfondie du profil de chaque client.',
        'Nous ne croyons pas aux promesses de rendement garanti ni aux modes du marché. Nous croyons en des stratégies conçues pour durer — qui survivent aux cycles économiques, résistent à la volatilité et s\'adaptent à un monde en constante évolution. La transparence est notre standard : le client sait toujours où se trouve son capital, pourquoi, et quel est le plan pour l\'avenir.',
        'Lorsque vous confiez votre capital à Seara Genial, vous ne faites pas qu\'entrouvrir votre capital — vous établissez un partenariat à long terme avec une équipe qui mesure son propre succès par le vôtre. C\'est l\'engagement qui nous définit.',
      ],
      values: [
        {
          title: 'Confiance',
          description:
            'Communication transparente à chaque étape. Le client sait toujours ce que nous faisons et pourquoi.',
        },
        {
          title: 'Rigueur Analytique',
          description:
            'Chaque décision est étayée par des données, une recherche propriétaire et une modélisation quantitative — jamais par l\'intuition.',
        },
        {
          title: 'Vision à Long Terme',
          description:
            'Nous pensons en décennies, pas en trimestres. Les meilleures décisions sont celles qui résistent à l\'épreuve du temps.',
        },
      ],
    },
    gallery: {
      badge: 'Galerie',
      title: 'Notre parcours en images',
      subtitle:
        'Des moments qui définissent Seara Genial — événements, équipes et projets qui construisent l\'avenir.',
      prev: 'Précédent',
      next: 'Suivant',
    },
    contact: {
      badge: 'Contact',
      title: 'Discutons',
      subtitle:
        'Nous sommes prêts à vous accompagner dans la prochaine étape de votre parcours d\'investissement. Contactez-nous et découvrez comment nous pouvons vous aider.',
      cta: 'Lancer la Conversation',
      labels: { email: 'Email', phone: 'Téléphone', address: 'Adresse' },
      socials,
    },
    footer: {
      tagline: 'Des stratégies d\'investissement avec intelligence, rigueur et vision.',
      navTitle: 'Navigation',
      contactTitle: 'Contact',
      copyright: `© ${new Date().getFullYear()} Seara Genial. Tous droits réservés.`,
      legal: [
        { label: 'Politique de Confidentialité', key: 'privacy' },
        { label: "Conditions d'Utilisation", key: 'terms' },
        { label: 'Mentions Légales', key: 'disclaimer' },
      ],
    },
    legal: {
      privacy: {
        title: 'Politique de Confidentialité',
        sections: [
          {
            heading: '1. Introduction',
            body: 'Seara Genial respecte la vie privée de ses clients et visiteurs. Cette politique décrit comment nous collectons, utilisons et protégeons vos données personnelles, conformément au Règlement Général sur la Protection des Données (RGPD) de l\'Union européenne.',
          },
          {
            heading: '2. Données Collectées',
            body: 'Nous collectons les informations que vous nous fournissez directement, telles que nom, email, téléphone et coordonnées, ainsi que les informations collectées automatiquement, comme l\'adresse IP et les données de navigation, via des cookies et technologies similaires.',
          },
          {
            heading: '3. Utilisation des Données',
            body: 'Vos données sont utilisées pour répondre aux demandes, fournir les services sollicités, envoyer des communications pertinentes et respecter les obligations légales. Nous ne vendons ni ne partageons vos données avec des tiers à des fins commerciales.',
          },
          {
            heading: '4. Protection des Données',
            body: 'Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, perte ou destruction. L\'accès aux données est restreint au personnel autorisé.',
          },
          {
            heading: '5. Vos Droits',
            body: 'Vous avez le droit d\'accéder, de rectifier, d\'effacer ou de limiter le traitement de vos données, ainsi que le droit à la portabilité et le droit d\'opposition. Pour exercer ces droits, contactez-nous à contacto@searagenial.pt.',
          },
          {
            heading: '6. Cookies',
            body: 'Notre site web utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez configurer votre navigateur pour refuser les cookies, bien que certaines fonctionnalités puissent ne pas fonctionner correctement.',
          },
        ],
      },
      terms: {
        title: "Conditions d'Utilisation",
        sections: [
          {
            heading: '1. Acceptation des Conditions',
            body: 'En accédant et en utilisant ce site web, vous acceptez les présentes Conditions d\'Utilisation dans leur intégralité. Si vous n\'êtes pas d\'accord avec une partie de ces conditions, vous devez cesser d\'utiliser le site.',
          },
          {
            heading: '2. Nature du Contenu',
            body: 'Le contenu de ce site web est purement informatif et ne constitue pas un conseil financier, fiscal ou en investissement personnalisé. Les décisions d\'investissement relèvent de la seule responsabilité de l\'utilisateur.',
          },
          {
            heading: '3. Limitation de Responsabilité',
            body: 'Seara Genial n\'est pas responsable des pertes directes ou indirectes résultant de l\'utilisation des informations disponibles sur le site web. Les performances passées ne garantissent pas les résultats futurs.',
          },
          {
            heading: '4. Propriété Intellectuelle',
            body: 'Tout le contenu du site web — textes, images, logos et design — est la propriété de Seara Genial et protégé par le droit d\'auteur. La reproduction sans autorisation préalable est interdite.',
          },
          {
            heading: '5. Liens Externes',
            body: 'Le site web peut contenir des liens vers des sites tiers. Seara Genial ne contrôle ni n\'assume la responsabilité du contenu ou des pratiques de confidentialité de ces sites.',
          },
          {
            heading: '6. Modifications',
            body: 'Seara Genial se réserve le droit de modifier ces Conditions d\'Utilisation à tout moment. Les modifications entrent en vigueur immédiatement après leur publication sur le site web.',
          },
        ],
      },
      disclaimer: {
        title: 'Mentions Légales',
        sections: [
          {
            heading: '1. Nature des Informations',
            body: 'Les informations présentées sur ce site web sont de nature générale et informative. Elles ne constituent pas une offre, une sollicitation ou une recommandation d\'investissement personnalisée. Avant de prendre toute décision, consultez un professionnel qualifié.',
          },
          {
            heading: '2. Risque d\'Investissement',
            body: 'Tous les investissements comportent des risques, y compris la perte possible du capital investi. La valeur des investissements peut augmenter ou diminuer, et les performances passées ne sont pas indicatives des résultats futurs.',
          },
          {
            heading: '3. Aucune Garantie de Rendement',
            body: 'Seara Genial ne garantit aucun niveau de rendement. Les projections et simulations présentées sont purement illustratives et basées sur des hypothèses qui peuvent ne pas se matérialiser.',
          },
          {
            heading: '4. Réglementation',
            body: 'Seara Genial opère conformément à la législation portugaise et européenne applicable à l\'activité de gestion d\'investissements. L\'autorisation d\'exploitation est délivrée par les autorités compétentes.',
          },
          {
            heading: '5. Juridiction',
            body: 'Les présentes mentions légales sont régies par le droit portugais. Tout litige sera tranché par les tribunaux compétents de Lisbonne, Portugal.',
          },
        ],
      },
    },
  },
};
