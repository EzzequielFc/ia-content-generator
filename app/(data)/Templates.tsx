export default [
  {
    name: "Título do Blog",
    desc: "Uma ferramenta de IA que gera títulos de blogs com base nas informações do seu blog",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/9521/9521706.png",
    aiPrompt:
      "Dê-me 5 ideias de tópicos para blog em forma de lista com marcadores, com base no nicho fornecido, e apresente o resultado em formato de Editor de Texto Rico",
    slug: "gerar-titulo-de-blog",
    form: [
      {
        label: "Digite o nicho do seu blog",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Digite o esboço do blog",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Descrição do Produto",
    desc: "Uma ferramenta de IA que gera descrições de produtos para o seu site de e-commerce",
    category: "E-commerce",
    icon: "https://cdn-icons-png.flaticon.com/128/9079/9079748.png",
    aiPrompt:
      "Gere uma descrição de produto atraente com base nos detalhes e características fornecidos",
    slug: "gerar-descricao-de-produto",
    form: [
      {
        label: "Digite o nome do produto",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "Digite as características do produto",
        field: "textarea",
        name: "features",
      },
    ],
  },
  {
    name: "Postagem em Mídia Social",
    desc: "Uma ferramenta de IA que cria postagens envolventes para mídias sociais",
    category: "Mídia Social",
    icon: "https://cdn-icons-png.flaticon.com/128/124/124010.png",
    aiPrompt:
      "Crie uma postagem envolvente e atraente para mídias sociais com base no tópico e no público-alvo fornecidos",
    slug: "gerar-postagem-em-midia-social",
    form: [
      {
        label: "Digite o tópico",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Digite o público-alvo",
        field: "textarea",
        name: "audience",
      },
    ],
  },
  {
    name: "Meta Descrição de SEO",
    desc: "Uma ferramenta de IA que gera meta descrições otimizadas para SEO para suas páginas da web",
    category: "SEO",
    icon: "https://cdn-icons-png.flaticon.com/128/3523/3523063.png",
    aiPrompt:
      "Gere uma meta descrição otimizada para SEO com base no conteúdo da página fornecido",
    slug: "gerar-meta-descricao-seo",
    form: [
      {
        label: "Digite o resumo do conteúdo da página",
        field: "textarea",
        name: "contentSummary",
        required: true,
      },
    ],
  },
  {
    name: "Linha de Assunto do Email",
    desc: "Uma ferramenta de IA que gera linhas de assunto atraentes para emails",
    category: "Email Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/732/732200.png",
    aiPrompt:
      "Gere uma linha de assunto atraente e envolvente para email com base no conteúdo do email fornecido",
    slug: "gerar-linha-de-assunto-email",
    form: [
      {
        label: "Digite o conteúdo do email",
        field: "textarea",
        name: "emailContent",
        required: true,
      },
    ],
  },
  {
    name: "Texto do Anúncio",
    desc: "Uma ferramenta de IA que cria textos de anúncio atraentes para suas campanhas de marketing",
    category: "Publicidade",
    icon: "https://cdn-icons-png.flaticon.com/128/2983/2983788.png",
    aiPrompt:
      "Gere um texto de anúncio atraente com base nos detalhes do produto ou serviço fornecidos",
    slug: "gerar-texto-de-anuncio",
    form: [
      {
        label: "Digite os detalhes do produto/serviço",
        field: "textarea",
        name: "details",
        required: true,
      },
    ],
  },
  {
    name: "Título da Página de Destino",
    desc: "Uma ferramenta de IA que gera títulos chamativos para suas páginas de destino",
    category: "Desenvolvimento Web",
    icon: "https://cdn-icons-png.flaticon.com/128/3059/3059940.png",
    aiPrompt:
      "Gere um título chamativo para uma página de destino com base no conteúdo da página e no público-alvo fornecidos",
    slug: "gerar-titulo-pagina-de-destino",
    form: [
      {
        label: "Digite o resumo do conteúdo da página",
        field: "textarea",
        name: "pageContent",
        required: true,
      },
      {
        label: "Digite o público-alvo",
        field: "textarea",
        name: "audience",
      },
    ],
  },
  {
    name: "Título de Vídeo do YouTube",
    desc: "Uma ferramenta de IA que gera títulos atraentes para seus vídeos do YouTube",
    category: "Conteúdo em Vídeo",
    icon: "https://cdn-icons-png.flaticon.com/128/1384/1384060.png",
    aiPrompt:
      "Gere um título atraente e otimizado para SEO para um vídeo do YouTube com base na descrição do vídeo fornecida",
    slug: "gerar-titulo-de-video-youtube",
    form: [
      {
        label: "Digite a descrição do conteúdo do vídeo",
        field: "textarea",
        name: "videoDescription",
        required: true,
      },
    ],
  },
];
