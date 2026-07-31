export const WHATSAPP_NUMBER = '5522999999999'
export const WHATSAPP_MESSAGE = encodeURIComponent(
  'Olá! Vi o site da Condé Tech e gostaria de saber mais sobre os planos de gestão de Social Media para a minha empresa.'
)
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

export const NAV_LINKS = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Resultados', href: '#metricas' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'FAQ', href: '#faq' },
]

export const SERVICES = [
  {
    id: 1,
    icon: 'image',
    title: 'Vídeos que prendem atenção e vendem',
    subtitle: 'Produção Audiovisual',
    description:
      'Da captação à edição, produzimos vídeos com cortes dinâmicos, ritmo envolvente e acabamento profissional. Cada entrega é pensada para o formato certo, na plataforma certa, com um único objetivo: gerar engajamento e conversão.',
    items: [
      'Reels e vídeos verticais',
      'Edição com cortes dinâmicos e trilha',
      'Roteiro e direção de cena',
      'Entrega otimizada por plataforma',
    ],
  },
  {
    id: 2,
    icon: 'smartphone',
    title: 'Presença que gera conexão',
    subtitle: 'Gestão de Redes Sociais',
    description:
      'Sua marca ativa e presente todos os dias, sem depender de "postar quando lembrar". Cuidamos do planejamento, produção e publicação do Instagram, sempre com aprovação prévia e identidade visual preservada.',
    items: [
      'Calendário editorial mensal',
      'Stories interativos e posts para o feed',
      'Legendas com copywriting',
      'Aprovação antes de publicar',
    ],
  },
  {
    id: 3,
    icon: 'trending-up',
    title: 'Conteúdos e criativos que prendem, engajam e convertem',
    subtitle: 'Criação de Conteúdo',
    description:
      'Roteiro, copy e estratégia por trás de cada peça. Entendemos o que faz sua audiência parar de rolar o feed, com roteiros e legendas alinhados ao momento do negócio, sempre com foco em conversão.',
    items: [
      'Roteiros para Reels e vídeos',
      'Copywriting estratégico',
      'Linha editorial alinhada à marca',
      'Adaptação por público e formato',
    ],
  },
  {
    id: 4,
    icon: 'image',
    title: 'Branding',
    subtitle: 'Identidade e posicionamento',
    description:
      'Construímos identidades memoráveis que traduzem seus valores e conectam com o público.',
    items: ['Naming', 'Identidade visual', 'Guia de aplicação', 'Posicionamento'],
  },
  {
    id: 5,
    icon: 'trending-up',
    title: 'Tráfego Pago',
    subtitle: 'Aquisição e performance',
    description:
      'Campanhas otimizadas para gerar leads e vendas com foco em ROI e escalabilidade.',
    items: ['Segmentação', 'Criativos para anúncios', 'Otimização contínua', 'Relatórios'],
  },
  {
    id: 6,
    icon: 'smartphone',
    title: 'Landing Pages e Sites',
    subtitle: 'Conversão e presença online',
    description:
      'Sites e landing pages otimizadas para conversão, velocidade e experiência do usuário.',
    items: ['Design responsivo', 'Otimização para conversão', 'Implementação rápida', 'SEO básico'],
  },
  {
    id: 7,
    icon: 'image',
    title: 'Consultoria Estratégica',
    subtitle: 'Planejamento para resultados',
    description:
      'Análises e recomendações práticas para alinhar ações digitais ao seu objetivo de negócio.',
    items: ['Auditoria de presença', 'Plano de ação', 'Mentoria mensal', 'KPI alinhados'],
  },
]

// Portfólio: antes/depois (placeholders). Substitua os caminhos das imagens quando tiver as originais.
export const PORTFOLIO_BEFORE_AFTER = [
  {
    id: 1,
    before: '/portfolio/before1.jpg',
    after: '/portfolio/after1.jpg',
    description: 'Caso 1 — aumento de engajamento e posicionamento visual',
  },
  {
    id: 2,
    before: '/portfolio/before2.jpg',
    after: '/portfolio/after2.jpg',
    description: 'Caso 2 — melhoria de conversão via criativos',
  },
]

// Galeria de criativos (placeholders)
export const PORTFOLIO_CREATIVES = [
  { id: 1, src: '/portfolio/creative1.jpg', alt: 'Criativo 1' },
  { id: 2, src: '/portfolio/creative2.jpg', alt: 'Criativo 2' },
  { id: 3, src: '/portfolio/creative3.jpg', alt: 'Criativo 3' },
]

// Logos dos clientes — coloque os arquivos em public/logos/
export const CLIENT_LOGOS = [
  { id: 1, src: '/logos/logo1.png', alt: 'Cliente 1' },
  { id: 2, src: '/logos/logo2.png', alt: 'Cliente 2' },
  { id: 3, src: '/logos/logo3.png', alt: 'Cliente 3' },
  { id: 4, src: '/logos/logo4.png', alt: 'Cliente 4' },
]

// --- Mantive suas outras constantes (STATS, TESTIMONIALS, FAQS) abaixo ---
export const STATS = [
  { value: 50, suffix: '+', label: 'Empresas atendidas' },
  { value: 2000, suffix: '+', label: 'Posts e stories criados' },
  { value: 98, suffix: '%', label: 'Taxa de satisfação' },
  { value: 2, suffix: ' anos', label: 'de experiência' },
]

export const TESTIMONIALS = [
  {
    id: 1,
    text: 'Antes eu ficava semanas sem postar nada porque não tinha tempo. Desde que contratei a Condé Tech, minha loja tem presença todo dia e já sinto a diferença no movimento. Vale muito a pena.',
    name: 'Fernanda R.',
    role: 'Proprietária de salão de beleza',
    city: 'Bom Jesus do Itabapoana/RJ',
    initial: 'F',
  },
  {
    id: 2,
    text: 'Eu achei que gestão de redes era coisa de empresa grande. A Condé Tech me mostrou que não — e o melhor: é tudo personalizado pro meu negócio, não é post genérico. Recomendo demais.',
    name: 'Marcos T.',
    role: 'Dono de academia',
    city: 'Região do Noroeste Fluminense',
    initial: 'M',
  },
]

export const FAQS = [
  {
    id: 1,
    question: 'Quanto custa o serviço?',
    answer:
      'Os planos são personalizados de acordo com o tamanho do seu negócio, a quantidade de posts e as redes sociais que você quer trabalhar. Por isso não temos um preço fixo na tabela — cada proposta é feita sob medida.',
  },
  {
    id: 2,
    question: 'Funciona para o meu tipo de negócio?',
    answer:
      'Sim. Atendemos empresas dos mais variados segmentos: salões de beleza, academias, clínicas, lojas, restaurantes, escritórios, prestadores de serviço e muito mais. Se você tem um negócio digital ou físico, podemos ajudar.',
  },
]
