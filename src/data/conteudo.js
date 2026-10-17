const pessoal = {
  nome: 'Gabriel Pedrosa',
  email: 'gabrielpedrosa346@gmail.com',
  github: 'https://github.com/GabrielPedrosa0',
  linkedin: 'https://www.linkedin.com/in/gabriel-pedrosa-6618a6343/',
  whatsapp: '',
  curriculo: 'curriculo.pdf',
  foto: 'img/foto.jpg',
}

const projetosBase = {
  sigch: {
    id: 'sigch',
    nome: 'SIGCH',
    imagem: 'projetos/sigch.png',
    stack: ['React 19', 'Vite', 'Supabase', 'PostgreSQL', 'Realtime', 'Tailwind CSS 4'],
    links: { demo: 'https://sigch-apresentacao.vercel.app', codigo: '' },
  },
  logis: {
    id: 'logis-atlas',
    nome: 'Logis Atlas',
    imagem: 'projetos/logis-atlas.png',
    stack: ['React 19', 'Vite', 'Supabase', 'Edge Functions', 'Tailwind CSS 4', 'Vercel'],
    links: { demo: '', codigo: '' },
  },
}

const pt = {
  meta: {
    titulo: 'Gabriel Pedrosa | Desenvolvedor full stack júnior',
  },
  nav: {
    inicio: 'Início',
    sobre: 'Sobre',
    servicos: 'O que faço',
    projetos: 'Projetos',
    contato: 'Contato',
    trocarIdioma: 'Mudar o site para inglês',
    abrirMenu: 'Abrir menu',
    fecharMenu: 'Fechar menu',
  },
  hero: {
    saudacao: 'Olá, eu sou',
    funcoes: ['desenvolvedor full stack'],
    texto:
      'Criei dois sistemas que estão em produção no Hospital Municipal Raimundo Célio Rodrigues, em Pacatuba (CE). Um recebe os chamados de manutenção e suporte. O outro controla o estoque do almoxarifado.',
    botaoProjetos: 'Ver projetos',
    botaoContato: 'Entrar em contato',
  },
  sobre: {
    titulo: 'Sobre mim',
    subtitulo: 'Desenvolvedor full stack júnior em Fortaleza, Ceará, e estudante de Análise e Desenvolvimento de Sistemas na Unifor',
    paragrafos: [
      'Sou auxiliar administrativo no Hospital Municipal Raimundo Célio Rodrigues, em Pacatuba (CE), desde julho de 2026. Entrei no hospital em fevereiro de 2025 como auxiliar de almoxarifado. Antes, fui estagiário administrativo na MS Serviços.',
      'Foi no almoxarifado que vi onde o processo travava, e escrevi o software para resolver. O SIGCH organiza os chamados de manutenção e suporte do hospital. O Logis Atlas controla o estoque do almoxarifado por unidade e por setor. Os dois usam React, Supabase e Tailwind CSS, com deploy na Vercel. Cuido do ciclo inteiro sozinho: levantamento de requisitos com quem vai usar, modelagem do banco, interface, deploy e suporte.',
      'Nos dois projetos eu também cuido do banco de dados e das permissões. Escrevo as políticas de RLS no Supabase, separo os dados de cada cliente e fiz uma revisão de segurança completa do SIGCH com base no OWASP. Termino a graduação na Unifor em 2028 e procuro uma vaga de desenvolvedor júnior.',
    ],
    botaoCurriculo: 'Baixar currículo',
    botaoContato: 'Fale comigo',
    altFoto: 'Foto de Gabriel',
    altArte: 'Ilustração em pixel art de um monitor e de uma caixa de almoxarifado',
  },
  tecnologias: {
    titulo: 'Tecnologias',
    grupos: [
      { nome: 'Frontend', itens: ['React 19', 'Vite', 'Tailwind CSS 4', 'JavaScript', 'HTML', 'CSS'] },
      {
        nome: 'Backend e banco de dados',
        itens: ['Supabase', 'PostgreSQL', 'SQL', 'APIs REST', 'Row Level Security', 'Supabase Auth', 'Edge Functions', 'Realtime'],
      },
      { nome: 'Ferramentas e estudo', itens: ['Git', 'GitHub', 'Vercel', 'Linux', 'Python', 'Java', 'Spring Boot', 'POO e SOLID', 'Padrões GoF', 'Testes unitários'] },
    ],
  },
  trajetoria: {
    titulo: 'Trajetória',
    itens: [
      {
        icone: 'codigo',
        periodo: 'Desde julho de 2026',
        cargo: 'Desenvolvedor full stack',
        local: 'Projetos próprios em produção no Hospital Municipal Raimundo Célio Rodrigues',
        texto: 'Desenvolvo e mantenho o SIGCH e o Logis Atlas. O SIGCH está em uso no hospital desde julho de 2026.',
      },
      {
        icone: 'maleta',
        periodo: 'Desde julho de 2026',
        cargo: 'Auxiliar administrativo',
        local: 'Hospital Municipal Raimundo Célio Rodrigues',
        texto: 'Rotinas administrativas e comunicação entre os setores assistenciais e administrativos.',
      },
      {
        icone: 'formacao',
        periodo: 'Conclusão prevista em 2028',
        cargo: 'Análise e Desenvolvimento de Sistemas',
        local: 'Unifor (Universidade de Fortaleza)',
        texto: 'Projetos acadêmicos: testes unitários caixa-branca em Java com meta de 80% de cobertura, árvore AVL com hash SHA-1 e análise do dataset Olist em Python, com previsão por Holt-Winters.',
      },
      {
        icone: 'formacao',
        periodo: 'Agosto de 2026 a junho de 2027',
        cargo: 'Curso de inglês',
        local: 'Wizard by Pearson',
        texto: '',
      },
      {
        icone: 'caixa',
        periodo: 'Fevereiro de 2025 a junho de 2026',
        cargo: 'Auxiliar de almoxarifado',
        local: 'Hospital Municipal Raimundo Célio Rodrigues',
        texto: 'Recebimento, conferência e saída de materiais para os setores do hospital. Foi aqui que levantei os gargalos que deram origem ao SIGCH e ao Logis Atlas.',
      },
      {
        icone: 'maleta',
        periodo: 'Agosto a dezembro de 2024',
        cargo: 'Auxiliar administrativo e de almoxarifado (estágio)',
        local: 'MS Serviços',
        texto: 'Rotinas administrativas e controle de estoque.',
      },
    ],
  },
  servicos: {
    titulo: 'O que eu faço',
    subtitulo: 'Trabalhos que já fiz nos meus dois sistemas e que posso repetir em outros projetos.',
    itens: [
      {
        icone: 'app',
        titulo: 'Sistemas web internos',
        texto: 'Aplicações em React para rotinas de equipe, como abertura de chamados e controle de estoque.',
      },
      {
        icone: 'banco',
        titulo: 'Banco de dados e permissões',
        texto: 'Tabelas em PostgreSQL no Supabase, com políticas de RLS que definem o que cada usuário pode ler e alterar.',
      },
      {
        icone: 'tv',
        titulo: 'Painéis de acompanhamento',
        texto: 'Telas que se atualizam sozinhas, como o painel público de TV do SIGCH.',
      },
      {
        icone: 'escudo',
        titulo: 'Revisão de segurança',
        texto: 'Auditoria com base no OWASP. No SIGCH, a revisão corrigiu falhas de controle de acesso e saiu na versão 1.2.0.',
      },
      {
        icone: 'cadeado',
        titulo: 'Adequação à LGPD',
        texto: 'Levantamento dos dados pessoais que o sistema guarda e de quem pode acessá-los, com documentação para a gestão.',
      },
      {
        icone: 'responsivo',
        titulo: 'Telas responsivas',
        texto: 'Interfaces em Tailwind CSS que funcionam no computador do setor e no celular.',
      },
    ],
  },
  projetos: {
    titulo: 'Projetos',
    subtitulo: 'Dois sistemas em produção no Hospital Municipal Raimundo Célio Rodrigues, em Pacatuba (CE).',
    emProducao: 'Em produção',
    verDetalhes: 'Ver detalhes',
    codigo: 'Ver código no GitHub',
    demo: 'Ver apresentação',
    fechar: 'Fechar',
    tituloFatos: 'O que o sistema faz hoje',
    tituloStack: 'Stack',
    altImagem: 'Tela do',
    itens: [
      {
        ...projetosBase.sigch,
        titulo: 'Chamados de manutenção e suporte para hospital',
        resumo:
          'Os setores abrem chamados pelo sistema e cada técnico recebe apenas os da sua categoria de problema. Em uso no hospital desde julho de 2026.',
        fatos: [
          '74 chamados registrados, 91% concluídos, com tempo médio de resolução de 8h11min.',
          'Painel de TV nos corredores, atualizado a cada 15 segundos, sem expor dados pessoais.',
          'Quatro perfis de acesso (solicitante, técnico, administrador e desenvolvedor) aplicados por Row Level Security no PostgreSQL.',
          'Tempo de resolução calculado por trigger no banco quando o chamado é concluído.',
          'Cada técnico vê apenas os chamados da sua categoria de problema.',
          'Campo para registrar dependência de terceiros, com histórico de alterações.',
          'Página de atualizações do sistema, com registro de quem já leu cada novidade.',
          'Revisão de segurança com base no OWASP, entregue na versão 1.2.0. Ela corrigiu falhas de controle de acesso nas políticas de RLS e no cadastro entre clientes.',
          'Levantamento de conformidade com a LGPD, com documentação para a gestão do hospital.',
          'Inscrito no Prêmio de Inovação ISV 2026, do Instituto São Vicente, no eixo Eficiência Operacional e Processos.',
        ],
      },
      {
        ...projetosBase.logis,
        titulo: 'Controle de estoque para almoxarifado hospitalar',
        resumo:
          'Registra o saldo de cada material por unidade e por setor, com histórico de entradas e saídas. Está em produção no mesmo hospital.',
        fatos: [
          '5.035 entradas e 2.340 saídas registradas em agosto de 2026.',
          'Multi-tenant: estoque separado por unidade e por setor, com isolamento por RLS.',
          'Inventário rotativo com relatório de divergência item a item.',
          'Lote e validade com FEFO, para o primeiro a vencer ser o primeiro a sair.',
          'Login, arquivos e funções de servidor pelo Supabase (Auth, Storage e Edge Functions).',
          'Tabelas, colunas, funções e componentes com nomes em português.',
          'A reformulação em andamento inclui nova identidade visual, telas redesenhadas e revisão de segurança.',
          'O sistema já gera etiquetas de prateleira com QR code. A migração dos códigos internos e a troca das etiquetas no almoxarifado estão em andamento.',
        ],
      },
    ],
  },
  contato: {
    titulo: 'Fale comigo',
    tituloForm: 'Envie uma mensagem',
    nome: 'Nome',
    email: 'E-mail',
    mensagem: 'Mensagem',
    enviar: 'Enviar mensagem',
    aviso: 'O botão abre o seu programa de e-mail com a mensagem pronta.',
    erro: 'Preencha nome, e-mail e mensagem para enviar.',
    assunto: 'Contato pelo portfólio',
    texto:
      'Estou procurando uma vaga de desenvolvedor júnior. Também respondo mensagens sobre sistemas para hospitais e clínicas.',
    topicos: [
      'Vagas de desenvolvimento júnior',
      'Sistemas web sob medida',
      'Revisão de permissões no Supabase',
      'Adequação de sistemas à LGPD',
    ],
    tituloRedes: 'Onde me encontrar',
  },
  rodape: {
    texto: 'Feito com React e Twind.',
    topo: 'Voltar ao topo',
  },
}

const en = {
  meta: {
    titulo: 'Gabriel Pedrosa | Junior full-stack developer',
  },
  nav: {
    inicio: 'Home',
    sobre: 'About',
    servicos: 'What I do',
    projetos: 'Projects',
    contato: 'Contact',
    trocarIdioma: 'Switch the site to Portuguese',
    abrirMenu: 'Open menu',
    fecharMenu: 'Close menu',
  },
  hero: {
    saudacao: "Hi, I'm",
    funcoes: ['full-stack developer'],
    texto:
      'I built two systems that run in production at Raimundo Célio Rodrigues Municipal Hospital, a public hospital in Pacatuba, Ceará, Brazil. One handles maintenance and support tickets. The other tracks storeroom inventory.',
    botaoProjetos: 'See projects',
    botaoContato: 'Get in touch',
  },
  sobre: {
    titulo: 'About me',
    subtitulo: 'Junior full-stack developer in Fortaleza, Brazil, and Systems Analysis and Development student at Unifor',
    paragrafos: [
      'I have been an administrative assistant at Raimundo Célio Rodrigues Municipal Hospital, in Pacatuba, Brazil, since July 2026. I joined the hospital in February 2025 as a storeroom assistant. Before that, I was an administrative intern at MS Serviços.',
      "Working in the storeroom showed me where the process got stuck, so I wrote the software to fix it. SIGCH organizes the hospital's maintenance and support tickets. Logis Atlas tracks storeroom stock by unit and by department. Both run on React, Supabase and Tailwind CSS, deployed on Vercel. I handle the whole cycle on my own: gathering requirements with the people who use them, database modeling, interface, deployment and support.",
      "I also handle the database and permissions on both projects. I write the RLS policies in Supabase, keep each client's data separate, and ran a full OWASP-based security review of SIGCH. I finish my degree at Unifor in 2028 and I'm looking for a junior developer role.",
    ],
    botaoCurriculo: 'Download CV',
    arquivoCurriculo: 'curriculo-en.pdf',
    botaoContato: 'Contact me',
    altFoto: 'Photo of Gabriel',
    altArte: 'Pixel art of a computer monitor and a storeroom box',
  },
  tecnologias: {
    titulo: 'Tech stack',
    grupos: [
      { nome: 'Frontend', itens: ['React 19', 'Vite', 'Tailwind CSS 4', 'JavaScript', 'HTML', 'CSS'] },
      {
        nome: 'Backend and database',
        itens: ['Supabase', 'PostgreSQL', 'SQL', 'REST APIs', 'Row Level Security', 'Supabase Auth', 'Edge Functions', 'Realtime'],
      },
      { nome: 'Tools and study', itens: ['Git', 'GitHub', 'Vercel', 'Linux', 'Python', 'Java', 'Spring Boot', 'OOP and SOLID', 'GoF patterns', 'Unit testing'] },
    ],
  },
  trajetoria: {
    titulo: 'Background',
    itens: [
      {
        icone: 'codigo',
        periodo: 'Since July 2026',
        cargo: 'Full-stack developer',
        local: 'Personal projects in production at Raimundo Célio Rodrigues Municipal Hospital',
        texto: 'I build and maintain SIGCH and Logis Atlas. SIGCH has been in use at the hospital since July 2026.',
      },
      {
        icone: 'maleta',
        periodo: 'Since July 2026',
        cargo: 'Administrative assistant',
        local: 'Raimundo Célio Rodrigues Municipal Hospital',
        texto: 'Administrative routines and communication between clinical and administrative departments.',
      },
      {
        icone: 'formacao',
        periodo: 'Expected to finish in 2028',
        cargo: 'Systems Analysis and Development',
        local: 'Unifor (University of Fortaleza)',
        texto: 'Academic projects: white-box unit tests in Java targeting 80% coverage, an AVL tree with SHA-1 hashing, and an analysis of the Olist dataset in Python with Holt-Winters forecasting.',
      },
      {
        icone: 'formacao',
        periodo: 'August 2026 to June 2027',
        cargo: 'English course',
        local: 'Wizard by Pearson',
        texto: '',
      },
      {
        icone: 'caixa',
        periodo: 'February 2025 to June 2026',
        cargo: 'Storeroom assistant',
        local: 'Raimundo Célio Rodrigues Municipal Hospital',
        texto: 'Received, checked and issued supplies to hospital departments. This is where I mapped the bottlenecks that led to SIGCH and Logis Atlas.',
      },
      {
        icone: 'maleta',
        periodo: 'August to December 2024',
        cargo: 'Administrative and storeroom assistant (internship)',
        local: 'MS Serviços',
        texto: 'Administrative routines and stock control.',
      },
    ],
  },
  servicos: {
    titulo: 'What I do',
    subtitulo: 'Work I have already done on my two systems and can do again on other projects.',
    itens: [
      {
        icone: 'app',
        titulo: 'Internal web apps',
        texto: 'React apps for team routines, such as opening tickets and tracking stock.',
      },
      {
        icone: 'banco',
        titulo: 'Database and permissions',
        texto: 'PostgreSQL tables on Supabase, with RLS policies that define what each user can read and change.',
      },
      {
        icone: 'tv',
        titulo: 'Status dashboards',
        texto: 'Screens that refresh on their own, like the SIGCH public TV panel.',
      },
      {
        icone: 'escudo',
        titulo: 'Security review',
        texto: 'OWASP-based audit. On SIGCH, the review fixed access control flaws and shipped as version 1.2.0.',
      },
      {
        icone: 'cadeado',
        titulo: 'LGPD compliance',
        texto: "A survey of the personal data the system stores and who can access it, with documentation for management. LGPD is Brazil's data protection law.",
      },
      {
        icone: 'responsivo',
        titulo: 'Responsive screens',
        texto: 'Tailwind CSS interfaces that work on department desktops and on phones.',
      },
    ],
  },
  projetos: {
    titulo: 'Projects',
    subtitulo: 'Two systems in production at Raimundo Célio Rodrigues Municipal Hospital, in Pacatuba, Brazil.',
    emProducao: 'In production',
    verDetalhes: 'View details',
    codigo: 'View code on GitHub',
    demo: 'See overview (in Portuguese)',
    fechar: 'Close',
    tituloFatos: 'What the system does today',
    tituloStack: 'Stack',
    altImagem: 'Screenshot of',
    itens: [
      {
        ...projetosBase.sigch,
        titulo: 'Maintenance and support tickets for a hospital',
        resumo:
          'Departments open tickets in the system and each technician only receives tickets in their problem category. In use at the hospital since July 2026.',
        fatos: [
          '74 tickets logged, 91% resolved, with an average resolution time of 8h11min.',
          'TV panel in the hallways that refreshes every 15 seconds without exposing personal data.',
          'Four access roles (requester, technician, admin and developer) enforced by Row Level Security in PostgreSQL.',
          'Resolution time calculated by a database trigger when the ticket is closed.',
          'Each technician only sees tickets in their problem category.',
          'Field to track third-party dependencies, with a change history.',
          'In-app updates page that records who has read each change.',
          'OWASP-based security review, shipped in version 1.2.0. It fixed access control flaws in the RLS policies and in cross-client sign-up.',
          'LGPD compliance review, with documentation for hospital management.',
          'Entered in the 2026 ISV Innovation Award by Instituto São Vicente, in the Operational Efficiency and Processes category.',
        ],
      },
      {
        ...projetosBase.logis,
        titulo: 'Inventory control for hospital storerooms',
        resumo:
          'Records the balance of each item by unit and by department, with a history of entries and exits. In production at the same hospital.',
        fatos: [
          '5,035 entries and 2,340 exits recorded in August 2026.',
          'Multi-tenant: stock kept separate by unit and by department, isolated by RLS.',
          'Cycle counting with an item-by-item discrepancy report.',
          'Batch and expiry tracking with FEFO, so the first item to expire is the first to go out.',
          'Login, files and server functions through Supabase (Auth, Storage and Edge Functions).',
          'Tables, columns, functions and components named in Portuguese.',
          'The redesign in progress includes a new visual identity, rebuilt screens and a security review.',
          'The system already generates shelf labels with QR codes. Migrating the internal product codes and replacing the storeroom labels is in progress.',
        ],
      },
    ],
  },
  contato: {
    titulo: 'Get in touch',
    tituloForm: 'Send a message',
    nome: 'Name',
    email: 'Email',
    mensagem: 'Message',
    enviar: 'Send message',
    aviso: 'The button opens your email app with the message ready to send.',
    erro: 'Fill in name, email and message to send.',
    assunto: 'Message from your portfolio',
    texto: "I'm looking for a junior developer role. I also answer messages about systems for hospitals and clinics.",
    topicos: [
      'Junior development roles',
      'Custom web systems',
      'Supabase permission reviews',
      'LGPD compliance for existing systems',
    ],
    tituloRedes: 'Find me online',
  },
  rodape: {
    texto: 'Built with React and Twind.',
    topo: 'Back to top',
  },
}

export default { pessoal, pt, en }
