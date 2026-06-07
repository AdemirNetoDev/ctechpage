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
    title: 'Posts para o Feed',
    subtitle: 'Conteúdo que para o scroll',
    description:
      'Criamos posts visuais e estratégicos que representam sua marca com profissionalismo. Nada de template genérico — cada post é pensado para o seu negócio e para o seu público.',
    items: [
      'Design exclusivo por negócio',
      'Legendas com copywriting',
      'Calendário editorial mensal',
      'Aprovação antes de publicar',
    ],
  },
  {
    id: 2,
    icon: 'smartphone',
    title: 'Stories Diários',
    subtitle: 'Presença que gera conexão',
    description:
      'Stories bem feitos aproximam sua empresa do cliente. Mantemos sua marca ativa todos os dias, gerando engajamento real e lembrança de marca constante.',
    items: [
      'Stories interativos e criativos',
      'Enquetes, contagens e CTAs',
      'Frequência consistente',
      'Identidade visual preservada',
    ],
  },
  {
    id: 3,
    icon: 'trending-up',
    title: 'Estratégia e Relatórios',
    subtitle: 'Mais do que postar — crescer',
    description:
      'Não somos só criadores de conteúdo. Planejamos, analisamos e ajustamos a estratégia para que cada publicação trabalhe a favor dos seus resultados.',
    items: [
      'Planejamento mensal de conteúdo',
      'Relatório de desempenho',
      'Ajustes constantes de estratégia',
      'Consultoria direta via WhatsApp',
    ],
  },
]

export const BENEFITS = [
  {
    id: 1,
    number: '01',
    title: 'Você recupera seu tempo',
    description:
      'Chega de passar horas tentando criar post, pensar em legenda e lembrar de publicar. A Condé Tech assume essa responsabilidade inteira. Você foca no que realmente importa: atender bem e vender mais.',
  },
  {
    id: 2,
    number: '02',
    title: 'Conteúdo profissional sem custo de agência grande',
    description:
      'Sua empresa terá o mesmo nível de presença digital de grandes marcas — com um plano acessível, feito para a realidade do empresário local. Visual bonito, texto certo, na hora certa.',
  },
  {
    id: 3,
    number: '03',
    title: 'Presença constante sem depender de você',
    description:
      'Redes sociais exigem consistência. Uma semana sem postar afasta o algoritmo e o cliente. Com a Condé Tech, sua empresa aparece todos os dias — mesmo nos seus dias mais corridos.',
  },
  {
    id: 4,
    number: '04',
    title: 'Atendimento próximo de quem conhece a região',
    description:
      'Não somos uma agência de São Paulo que nunca pisou na sua cidade. Somos daqui. Conhecemos o mercado local, as datas regionais, o perfil do seu cliente. Isso faz toda a diferença.',
  },
]

export const STATS = [
  { value: 50, suffix: '+', label: 'Empresas atendidas' },
  { value: 2000, suffix: '+', label: 'Posts e stories criados' },
  { value: 98, suffix: '%', label: 'Taxa de satisfação' },
  { value: 2, suffix: ' anos', label: 'de experiência' },
]

export const TESTIMONIALS = [
  {
    id: 1,
    text: 'Antes eu ficava semanas sem postar nada porque não tinha tempo. Desde que contratei a Condé Tech, minha loja tem presença todo dia e já sinto a diferença no movimento. Vale muito o investimento.',
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
  {
    id: 3,
    text: 'O atendimento é muito próximo, parece que é uma pessoa da minha equipe cuidando das redes. Eles entendem meu negócio, tiram dúvidas rápido e entregam sempre no prazo. Estou muito satisfeita.',
    name: 'Patrícia M.',
    role: 'Clínica de estética',
    city: 'Bom Jesus do Itabapoana/RJ',
    initial: 'P',
  },
]

export const FAQS = [
  {
    id: 1,
    question: 'Quanto custa o serviço?',
    answer:
      'Os planos são personalizados de acordo com o tamanho do seu negócio, a quantidade de posts e as redes sociais que você quer trabalhar. Por isso não temos um preço fixo na tabela — queremos entender sua necessidade antes de apresentar uma proposta. Entre em contato pelo WhatsApp e te enviamos um orçamento sem compromisso.',
  },
  {
    id: 2,
    question: 'Funciona para o meu tipo de negócio?',
    answer:
      'Sim. Atendemos empresas dos mais variados segmentos: salões de beleza, academias, clínicas, lojas, restaurantes, escritórios, prestadores de serviço e muito mais. Se você tem um negócio e quer crescer nas redes, a Condé Tech tem uma solução para você.',
  },
  {
    id: 3,
    question: 'Preciso aparecer nas fotos e vídeos?',
    answer:
      'Não necessariamente. Trabalhamos com design, artes gráficas, banco de imagens e conteúdo estratégico que não depende de você aparecer toda hora. Mas se quiser aparecer, melhor ainda — conteúdo humanizado tende a gerar muito mais engajamento.',
  },
  {
    id: 4,
    question: 'Quanto tempo leva para ver resultados?',
    answer:
      'As redes sociais exigem consistência, e resultados sólidos geralmente aparecem a partir do segundo ou terceiro mês de trabalho contínuo. Mas desde o primeiro mês você já sentirá a diferença na organização, na frequência de publicações e na qualidade visual da sua marca.',
  },
  {
    id: 5,
    question: 'Posso cancelar quando quiser?',
    answer:
      'Sim. Não prendemos ninguém. Trabalhamos com contratos mensais justamente para que você tenha liberdade. Nossa aposta é no resultado — se estiver gerando valor, você vai querer continuar.',
  },
  {
    id: 6,
    question: 'Vocês atendem fora de Bom Jesus do Itabapoana?',
    answer:
      'Sim! Atendemos toda a região do Noroeste Fluminense e também empresas de outras cidades de forma 100% remota. O trabalho é digital — podemos atender você onde quer que esteja.',
  },
]
