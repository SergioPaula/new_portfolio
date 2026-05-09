export type ImageAspect = "video" | "square" | "portrait" | "wide";

export interface ProjectImageData {
  src: string;
  alt: string;
  aspect?: ImageAspect;
}

export interface ProjectMeta {
  year: string;
  client: string;
  projectType: string;
  duration?: string;
}

export interface ProjectContextSection {
  label: string;
  paragraphs: string[];
  image?: ProjectImageData;
}

export interface ProjectDeliverablesSection {
  label: string;
  content: string;
  images: ProjectImageData[];
  layout: "grid" | "single";
}

export interface ProjectData {
  slug: string;
  kind: "presentation" | "brand-identity";
  category: string;
  title: string;
  description: string;
  cover: ProjectImageData;
  meta: ProjectMeta;
  context: ProjectContextSection;
  brandStrategy?: ProjectContextSection; // brand-identity only
  deliverables: ProjectDeliverablesSection;
  gallery: ProjectImageData[];
  accentColor?: string;
}

export const PROJECTS: ProjectData[] = [
  {
    slug: "devassa",
    kind: "presentation",
    category: "Apresentação Corporativa",
    title: "Convenção de Vendas Devassa",
    description: "Apresentação completa para a convenção de vendas nacional da marca Devassa.",
    cover: {
      src: "/images/projects/devassa/cover.jpg",
      alt: "Slide de abertura da convenção de vendas Devassa",
      aspect: "wide",
    },
    meta: {
      year: "2023",
      client: "Devassa / Brasil Kirin",
      projectType: "Convenção de Vendas",
    },
    context: {
      label: "Contexto",
      paragraphs: [
        "A Devassa, marca da Brasil Kirin, realiza anualmente sua convenção de vendas nacional — um evento de grande porte que reúne distribuidores, representantes e a equipe comercial da marca em todo o Brasil.",
        "A apresentação precisava carregar a identidade visual forte e irreverente da Devassa, traduzindo dados de desempenho e metas anuais em storytelling visual de alto impacto — capaz de engajar uma plateia exigente e manter a energia característica dos eventos da marca.",
        "Fui contratado para criar toda a arquitetura visual dos slides: desde as telas de abertura até os momentos de dados, transições e encerramento da convenção.",
      ],
      image: {
        src: "/images/projects/devassa/contexto.jpg",
        alt: "Visão geral da apresentação Devassa",
        aspect: "video",
      },
    },
    deliverables: {
      label: "Entrega",
      content:
        "Deck completo de apresentação em PowerPoint com layouts personalizados, visualização de dados customizada, animações de slide e identidade visual consistente com as diretrizes da marca Devassa — pronto para projeção em evento.",
      images: [
        { src: "/images/projects/devassa/slide-01.jpg", alt: "Slide de abertura", aspect: "video" },
        { src: "/images/projects/devassa/slide-02.jpg", alt: "Slide de performance e resultados", aspect: "video" },
        { src: "/images/projects/devassa/slide-03.jpg", alt: "Slide de metas e estratégia", aspect: "video" },
        { src: "/images/projects/devassa/slide-04.jpg", alt: "Slide de encerramento", aspect: "video" },
      ],
      layout: "grid",
    },
    gallery: [
      { src: "/images/projects/devassa/gallery-01.jpg", alt: "Detalhe de layout tipográfico", aspect: "video" },
      { src: "/images/projects/devassa/gallery-02.jpg", alt: "Slide de reconhecimento de equipe", aspect: "video" },
      { src: "/images/projects/devassa/gallery-03.jpg", alt: "Tela de transição do evento", aspect: "wide" },
    ],
    accentColor: "#f5a623",
  },
  {
    slug: "club-social",
    kind: "presentation",
    category: "Apresentação Corporativa",
    title: "Convenção Mondelez — Club Social",
    description: "Apresentação para a convenção de vendas da Mondelez com a marca Club Social.",
    cover: {
      src: "/images/projects/club-social/cover.jpg",
      alt: "Slide de abertura da convenção Club Social",
      aspect: "wide",
    },
    meta: {
      year: "2023",
      client: "Mondelez Brasil",
      projectType: "Convenção de Vendas",
    },
    context: {
      label: "Contexto",
      paragraphs: [
        "A Mondelez Brasil convocou sua equipe comercial para uma convenção dedicada à linha Club Social — uma das marcas de snacks mais reconhecidas do portfólio da empresa, com posicionamento leve e descontraído.",
        "O desafio criativo era equilibrar a personalidade irreverente da Club Social com os padrões de apresentação corporativa da Mondelez. O deck precisava ser ao mesmo tempo divertido, convincente e adequado ao ambiente de negócios.",
        "Cada layout foi pensado para manter a atenção da equipe ao longo do evento, alternando entre momentos de dados e momentos de engajamento visual.",
      ],
      image: {
        src: "/images/projects/club-social/contexto.jpg",
        alt: "Painel de referências visuais da convenção Club Social",
        aspect: "video",
      },
    },
    deliverables: {
      label: "Entrega",
      content:
        "Deck completo em PowerPoint com linguagem visual alinhada à identidade Club Social, layouts de dados customizados, slides de abertura e encerramento, e design preparado para projeção em eventos de grande porte.",
      images: [
        { src: "/images/projects/club-social/slide-01.jpg", alt: "Slide de abertura Club Social", aspect: "video" },
        { src: "/images/projects/club-social/slide-02.jpg", alt: "Slide de resultados comerciais", aspect: "video" },
        { src: "/images/projects/club-social/slide-03.jpg", alt: "Slide de portfólio de produtos", aspect: "video" },
        { src: "/images/projects/club-social/slide-04.jpg", alt: "Slide de estratégia de vendas", aspect: "video" },
      ],
      layout: "grid",
    },
    gallery: [
      { src: "/images/projects/club-social/gallery-01.jpg", alt: "Detalhe de composição visual", aspect: "video" },
      { src: "/images/projects/club-social/gallery-02.jpg", alt: "Slide de campanha e ativação", aspect: "video" },
    ],
    accentColor: "#00a8d9",
  },
  {
    slug: "divina-fatia",
    kind: "brand-identity",
    category: "Identidade de Marca",
    title: "Divina Fatia",
    description: "Criação completa da identidade visual e posicionamento de marca para confeitaria artesanal.",
    cover: {
      src: "/images/projects/divina-fatia/cover.jpg",
      alt: "Logotipo Divina Fatia sobre fundo escuro",
      aspect: "wide",
    },
    meta: {
      year: "2024",
      client: "Divina Fatia",
      projectType: "Brand Identity · Estratégia · Design",
    },
    context: {
      label: "Briefing",
      paragraphs: [
        "A Divina Fatia chegou ao projeto com um nome, uma paixão por confeitaria artesanal e uma pergunta fundamental: como traduzir isso em uma marca que as pessoas reconhecem, confiam e desejam?",
        "A identidade precisava funcionar em múltiplos canais — embalagens, etiquetas, mídias sociais e ponto de venda — e comunicar artesanalidade sem cair no lugar-comum do rústico genérico.",
        "O briefing era direto: premium, quente e com personalidade própria. Uma marca que parecesse feita por alguém que ama o que faz.",
      ],
      image: {
        src: "/images/projects/divina-fatia/briefing.jpg",
        alt: "Painel de referências e posicionamento de marca",
        aspect: "video",
      },
    },
    brandStrategy: {
      label: "Estratégia de Marca",
      paragraphs: [
        "O posicionamento foi construído em torno do conceito de ‘o prazer do detalhe’ — a ideia de que confeitaria de verdade é feita com atenção e tempo, não com pressa.",
        "Definimos um tom de voz íntimo e orgulhoso, que convida o cliente para dentro do processo criativo sem revelar todos os segredos. A marca fala como quem tem história para contar.",
        "Público primário: consumidores urbanos entre 25 e 45 anos, que valorizam qualidade sobre quantidade e buscam experiências gastronômicas diferenciadas — presentes com significado, não apenas com preço.",
      ],
      image: {
        src: "/images/projects/divina-fatia/estrategia.jpg",
        alt: "Slide de estratégia e posicionamento de marca",
        aspect: "video",
      },
    },
    deliverables: {
      label: "Sistema Visual",
      content:
        "Sistema de identidade visual completo: logotipo primário e variações monocromáticas, paleta de cores com especificações técnicas, par tipográfico de marca, padrão decorativo para embalagens e guia de aplicação para formatos digitais e físicos.",
      images: [
        { src: "/images/projects/divina-fatia/logo.jpg", alt: "Logotipo primário Divina Fatia", aspect: "square" },
        { src: "/images/projects/divina-fatia/cores.jpg", alt: "Paleta de cores com especificações", aspect: "video" },
        { src: "/images/projects/divina-fatia/tipografia.jpg", alt: "Tipografia de marca — specimen", aspect: "video" },
        { src: "/images/projects/divina-fatia/padrao.jpg", alt: "Padrão decorativo para embalagem", aspect: "square" },
      ],
      layout: "grid",
    },
    gallery: [
      { src: "/images/projects/divina-fatia/mockup-embalagem.jpg", alt: "Mockup de embalagem de produto", aspect: "square" },
      { src: "/images/projects/divina-fatia/mockup-etiqueta.jpg", alt: "Mockup de etiqueta adesiva", aspect: "portrait" },
      { src: "/images/projects/divina-fatia/mockup-caixa.jpg", alt: "Mockup de caixa de presente", aspect: "square" },
      { src: "/images/projects/divina-fatia/aplicacao-digital.jpg", alt: "Aplicação da marca em mídia digital", aspect: "video" },
    ],
    accentColor: "#9979da",
  },
  {
    slug: "vivo",
    kind: "presentation",
    category: "Apresentação Corporativa · Arte de Evento",
    title: "Vivo VP Engenharia 2025",
    description: "Apresentação de diretoria e criação de arte para o evento VP Engenharia da Vivo.",
    cover: {
      src: "/images/projects/vivo/cover.jpg",
      alt: "Arte principal do evento VP Engenharia Vivo 2025",
      aspect: "wide",
    },
    meta: {
      year: "2025",
      client: "Vivo (Telefônica Brasil)",
      projectType: "Apresentação de Diretoria · Evento Corporativo",
    },
    context: {
      label: "Contexto",
      paragraphs: [
        "O evento VP Engenharia da Vivo reúne anualmente os diretores e a liderança sênior da área de tecnologia para encerrar o ano com reconhecimento, dados e alinhamento estratégico para o ciclo seguinte.",
        "O projeto envolveu duas frentes simultâneas: a criação da apresentação institucional dos diretores — seguindo rigorosamente o brand book da Vivo — e o desenvolvimento dos ativos visuais do evento, incluindo arte para telas, design do troféu comemorativo e elementos de identidade da cerimônia.",
        "A execução precisava ser impecável para um público de liderança que conhece e cobra padrão de marca.",
      ],
      image: {
        src: "/images/projects/vivo/contexto.jpg",
        alt: "Foto do evento VP Engenharia Vivo 2025",
        aspect: "video",
      },
    },
    deliverables: {
      label: "Entrega",
      content:
        "Apresentação corporativa em PowerPoint seguindo o brand book da Vivo (cor primária #660099), design do troféu do evento (render para aprovação + arquivo final para produção), e artes visuais para projeção durante a cerimônia.",
      images: [
        { src: "/images/projects/vivo/slide-01.jpg", alt: "Slide de abertura do evento Vivo", aspect: "video" },
        { src: "/images/projects/vivo/slide-02.jpg", alt: "Slide de resultados de engenharia", aspect: "video" },
        { src: "/images/projects/vivo/trofeu.jpg", alt: "Design do troféu VP Engenharia", aspect: "square" },
        { src: "/images/projects/vivo/arte-evento.jpg", alt: "Arte para projeção na cerimônia", aspect: "video" },
      ],
      layout: "grid",
    },
    gallery: [
      { src: "/images/projects/vivo/gallery-01.jpg", alt: "Momento da cerimônia de premiação", aspect: "video" },
      { src: "/images/projects/vivo/gallery-02.jpg", alt: "Troféu produzido para o evento", aspect: "square" },
      { src: "/images/projects/vivo/gallery-03.jpg", alt: "Slide de encerramento", aspect: "video" },
    ],
    accentColor: "#660099",
  },
];
