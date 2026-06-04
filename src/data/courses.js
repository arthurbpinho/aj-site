// Catálogo de cursos e grupos da Academia Junguiana.
//
// Cada item reúne, numa fonte única:
//   - dados do card (title, subtitle, image, description, tag);
//   - o link Hotmart de compra avulsa (link);
//   - o conteúdo da página de venda individual em /cursos/<id>
//     (format, duration, ongoing, book, synopsis, author*, about, modules);
//   - os coordenadores responsáveis (ids resolvidos em ../data/coordinators).
//
// Observações de conteúdo:
//   - `tag` alimenta o filtro do catálogo: "Grupo" | "Curso" | "Minicurso".
//   - `format` é o rótulo por extenso exibido nas páginas.
//   - `ongoing: true` marca grupos ainda em andamento, com encontros síncronos
//     para assinantes (a compra avulsa dá acesso vitalício às gravações já
//     disponíveis).
//   - sinopses e biografias foram reescritas pela Academia a partir de
//     material de referência, em registro próprio.

export const courses = [
  {
    id: "fundamentos-psicologia-complexa",
    title: "Fundamentos da Psicologia Complexa",
    subtitle: "A obra fundadora de Toni Wolff",
    image: "/midias/gruposcursos/fundamentospsicomplexa.png",
    link: "https://pay.hotmart.com/R101374480Y",
    tag: "Grupo",
    format: "Grupo de Estudos",
    duration: "Mais de 50 horas",
    ongoing: true,
    coordinators: ["henrique", "joao"],
    description:
      "Grupo de estudos da obra em que Toni Wolff formula a noção de psicologia complexa, situando os complexos como forças que estruturam tanto a vida psíquica individual quanto a cultura.",
    book: {
      title: "Fundamentos da Psicologia Complexa",
      author: "Toni Wolff",
    },
    synopsis: [
      "Conhecida por muito tempo sobretudo como colaboradora de Carl Gustav Jung, Toni Wolff foi também uma pensadora autoral da psicologia analítica — dimensão que esta obra recoloca em primeiro plano. Publicada pela primeira vez em português, ela reúne o texto em que Wolff formula e desenvolve o conceito de psicologia complexa: uma ampliação da psicologia analítica que entende os complexos não apenas como núcleos da vida psíquica individual, mas como forças que organizam também a cultura.",
      "A autora examina de que modo os complexos participam da formação de valores, mitos e normas coletivas, articulando clínica e cultura, indivíduo e sociedade. Trata-se de uma leitura das dinâmicas psíquicas que atravessam o tempo histórico e o tecido simbólico das comunidades humanas.",
      "A edição em português foi traduzida diretamente do alemão por Pedro Perússolo e acompanhada de notas críticas de Armando de Oliveira e Silva, restituindo à psicologia complexa seu lugar de origem na história do pensamento analítico.",
    ],
    authorName: "Toni Wolff",
    authorDates: "1888–1953",
    authorBio: [
      "Toni Anna Wolff foi analista junguiana suíça e uma das interlocutoras mais próximas de Carl Jung. Embora tenha publicado pouco sob o próprio nome, participou da identificação e da definição de conceitos centrais da psicologia analítica — entre eles anima, animus e persona — e contribuiu para a teoria dos tipos psicológicos. Sua produção vem sendo progressivamente revalorizada como contribuição autoral, e não apenas como apoio ao trabalho de Jung.",
    ],
    about: [
      "Um grupo dedicado à leitura e à discussão de uma das obras fundadoras da psicologia junguiana, a partir de uma de suas protagonistas. Cada encontro combina leitura atenta do texto, contextualização histórica e debate entre a comunidade da Academia.",
      "A coordenação é de Henrique Barçante e João de Bragança.",
    ],
  },
  {
    id: "homem-e-seus-simbolos",
    title: "O Homem e Seus Símbolos",
    subtitle: "A última obra organizada por Jung",
    image: "/midias/gruposcursos/homemeseussimbolos.png",
    link: "https://pay.hotmart.com/B105114199I",
    tag: "Grupo",
    format: "Grupo de Estudos",
    duration: "Mais de 10 horas",
    ongoing: true,
    coordinators: ["arthur", "henrique"],
    description:
      "Estudo guiado do clássico de Jung e seus colaboradores, capítulo a capítulo, conectando teoria, símbolos e prática clínica.",
    book: {
      title: "O Homem e seus Símbolos",
      author: "C. G. Jung e colaboradores",
    },
    synopsis: [
      "Pensada por Jung como uma porta de entrada para o grande público, O Homem e seus Símbolos é a última obra que ele organizou, escrita junto a colaboradores próximos para apresentar, em linguagem acessível, o núcleo de sua psicologia.",
      "O livro parte de uma observação simples: aquilo que escapa à consciência não desaparece. Pensamentos, imagens e impressões que perdemos de vista seguem agindo em nós e constituem parte viva do inconsciente. A partir daí, Jung e seus colaboradores conduzem o leitor pelo universo dos símbolos, dos sonhos e dos arquétipos, mostrando como a psique se expressa por imagens.",
    ],
    authorName: "C. G. Jung",
    authorDates: "1875–1961",
    authorBio: [
      "Carl Gustav Jung foi psiquiatra e psicoterapeuta suíço, fundador da psicologia analítica. Entre suas contribuições mais conhecidas estão a distinção entre as atitudes introvertida e extrovertida, as noções de arquétipo e de inconsciente coletivo e a ideia de sincronicidade. Sua obra influenciou a psiquiatria, a psicologia, os estudos da religião e a literatura.",
    ],
    about: [
      "Um grupo de discussão sobre O Homem e seus Símbolos, conduzido por Arthur Bernardes e Henrique Barçante. Para muitos leitores, este livro é a primeira porta de entrada na Psicologia Analítica.",
      "Percorremos capítulos selecionados da obra para analisar, refletir e discutir seus pontos centrais — um espaço que acolhe tanto quem está começando quanto quem deseja se aprofundar pela via da discussão.",
    ],
  },
  {
    id: "experiencia-junguiana",
    title: "A Experiência Junguiana",
    subtitle: "Clínica e individuação em James A. Hall",
    image: "/midias/gruposcursos/experienciajunguiana.png",
    link: "https://pay.hotmart.com/X100137473B",
    tag: "Grupo",
    format: "Grupo de Estudos",
    duration: "13 horas",
    coordinators: ["henrique", "arthur"],
    description:
      "Um dos grupos de maior repercussão da Academia, centrado na clínica junguiana e na individuação: relação terapêutica, transferência, formação, sonhos e recursos clínicos.",
    book: {
      title: "A Experiência Junguiana",
      author: "James A. Hall",
    },
    synopsis: [
      "Último volume da coleção Biblioteca Cultrix de Psicologia Junguiana, A Experiência Junguiana parte de uma pergunta simples e ampla: o que leva alguém a procurar a análise? Para James A. Hall, a resposta envolve mais do que o alívio de sintomas — diz respeito ao desenvolvimento pessoal, à dimensão do sagrado e a questões relativas à natureza da mente, da matéria e da causalidade.",
      "A partir de relatos clínicos, o autor mostra como traduzir o modelo junguiano da psique em termos práticos, em uma obra dirigida a quem deseja compreender e aprofundar o estudo da análise junguiana.",
    ],
    authorName: "James A. Hall",
    authorDates: "m. 2013",
    authorBio: [
      "James A. Hall foi médico psiquiatra e analista formado pelo Instituto C. G. Jung de Zurique. Professor de psiquiatria na Universidade do Texas, em Dallas, foi membro fundador e ex-presidente da Sociedade Inter-Regional de Analistas Junguianos. Dedicou-se especialmente ao estudo clínico dos sonhos, tema de livros como Jungian Dream Interpretation. Após um acidente vascular cerebral em 1991, conviveu por mais de duas décadas com a síndrome do encarceramento, falecendo em Dallas em 2013.",
    ],
    about: [
      "Grupo de discussão centrado na clínica junguiana e na individuação. Entre os temas: relação terapêutica, transferência, formação do analista, sonhos, modalidades e recursos clínicos, diagnóstico e os dilemas de quem se forma nessa abordagem.",
      "Mais do que estudar conceitos, o grupo discute o que significa, na prática, ser um junguiano. A coordenação é de Henrique Barçante e Arthur Bernardes.",
    ],
  },
  {
    id: "como-entender-sonhos",
    title: "Como Entender os Sonhos",
    subtitle: "O método junguiano em Mary Ann Mattoon",
    image: "/midias/gruposcursos/comoentenderossonhos.png",
    link: "https://pay.hotmart.com/V95141695A",
    tag: "Grupo",
    format: "Grupo de Estudos",
    duration: "18 horas",
    coordinators: ["henrique", "arthur"],
    description:
      "Encontros de discussão sobre a abordagem junguiana dos sonhos: amplificação, contexto, séries oníricas e o uso clínico do material onírico.",
    book: {
      title: "Como Entender os Sonhos",
      author: "Mary Ann Mattoon",
    },
    synopsis: [
      "Uma apresentação clara e acessível do método junguiano de interpretação dos sonhos. Apoiada na própria prática clínica e na teoria da psicologia analítica, Mary Ann Mattoon discute a natureza dos sonhos e propõe um caminho para interpretá-los — e para verificar se uma interpretação se sustenta.",
      "O livro percorre a amplificação pessoal e arquetípica, o contexto de vida de quem sonha e os sonhos da infância, sem abrir mão de exemplos, e encerra com uma avaliação da contribuição de Jung a esse campo. Leitura de interesse tanto para clínicos quanto para leitores não especialistas.",
    ],
    authorName: "Mary Ann Mattoon",
    authorBio: [
      "Mary Ann Mattoon é doutora pela Universidade de Minnesota e analista diplomada pelo Instituto C. G. Jung de Zurique. Mantém consultório particular e atua no ensino em Minneapolis, com dedicação especial ao estudo dos sonhos na perspectiva junguiana.",
    ],
    about: [
      "Um grupo para quem tem interesse em compreender como a psicologia analítica enxerga os sonhos e qual é o método junguiano para interpretá-los.",
      "Foram onze encontros — todos gravados e com certificado — em que discutimos os capítulos de Como Entender os Sonhos e trouxemos interpretações e práticas próprias sobre o tema onírico. A coordenação é de Henrique Barçante e Arthur Bernardes.",
    ],
  },
  {
    id: "tipos-psicologicos",
    title: "Compreendendo os Tipos Psicológicos",
    subtitle: "Minicurso em quatro aulas",
    image: "/midias/gruposcursos/tipospsicologicos.png",
    link: "https://pay.hotmart.com/E97001018H",
    tag: "Minicurso",
    format: "Minicurso",
    duration: "5 horas",
    coordinators: ["joao"],
    description:
      "Introdução rigorosa à tipologia junguiana: funções racionais e irracionais, atitudes extrovertida e introvertida, e o papel das funções na orientação da consciência.",
    about: [
      "A teoria dos tipos psicológicos é uma das contribuições mais conhecidas de Jung — e também uma das mais distorcidas, à medida que se popularizou e se distanciou de suas origens.",
      "Este minicurso, conduzido por João de Bragança em quatro aulas, reconstrói a tipologia tal como Jung a formulou, discutindo suas implicações epistemológicas e suas consequências práticas. Um percurso conciso para compreender as funções e as atitudes sem reduzi-las a rótulos.",
    ],
    modules: [
      "A construção da tipologia em Jung",
      "Funções racionais e irracionais",
      "As atitudes: introversão e extroversão",
      "Implicações epistemológicas e práticas dos tipos",
    ],
  },
  {
    id: "voz-e-tempo",
    title: "A Voz e o Tempo",
    subtitle: "Reflexões para Jovens Terapeutas",
    image: "/midias/gruposcursos/vozeotempo.png",
    link: "https://pay.hotmart.com/W101374635P",
    tag: "Grupo",
    format: "Grupo de Estudos",
    duration: "36 horas",
    coordinators: ["arthur", "henrique"],
    description:
      "Leitura conjunta das reflexões de Roberto Gambini sobre a formação e o amadurecimento do terapeuta: ética, presença e escuta.",
    book: {
      title: "A Voz e o Tempo: Reflexões para Jovens Terapeutas",
      author: "Roberto Gambini",
    },
    synopsis: [
      "Ao longo de três décadas dedicadas à psicoterapia, Roberto Gambini foi reunindo camadas de observações, dúvidas, descobertas e tomadas de posição. A Voz e o Tempo é o livro em que essa matéria, trabalhada pelo tempo, se transforma em palavra dirigida a quem começa.",
      "Trata-se de uma série de reflexões endereçadas aos jovens terapeutas em busca de seus próprios caminhos e de suas próprias verdades — uma obra sobre o ofício de cuidar, sobre a maturação de uma voz clínica e sobre o que se aprende quando se escuta por muito tempo.",
    ],
    authorName: "Roberto Gambini",
    authorBio: [
      "Roberto Gambini é terapeuta junguiano, ensaísta e conferencista. Formou-se em Ciências Sociais pela USP, fez mestrado na Universidade de Chicago e lecionou Ciência Política na Unicamp antes de se formar em Psicologia Analítica no Instituto C. G. Jung de Zurique. Membro das sociedades suíça e internacional de psicologia analítica, dedica-se há décadas a aproximar a psicologia junguiana das ciências sociais e a pensar a alma brasileira, tema de livros como Espelho Índio e Outros 500.",
    ],
    about: [
      "Um grupo de leitura conjunta e discussão de A Voz e o Tempo, de Roberto Gambini, aberto a interessados em Jung, na obra de Gambini e na Psicologia Analítica.",
      "Coordenado por Arthur Bernardes e Henrique Barçante, o grupo se debruça sobre as reflexões do autor a respeito da formação e do amadurecimento do terapeuta — um convite à conversa sobre ética, presença e escuta.",
    ],
  },
  {
    id: "numinoso-e-religiao",
    title: "O Numinoso e a Religião",
    subtitle: "Na Psicologia Analítica",
    image: "/midias/gruposcursos/numinosoeareligiao.jpg",
    link: "https://pay.hotmart.com/J102659484M",
    tag: "Curso",
    format: "Curso",
    duration: "5 horas",
    coordinators: ["arthur"],
    description:
      "Cinco módulos atravessando do pensamento de Mircea Eliade à elaboração junguiana da experiência religiosa: o sagrado, a função transcendente e os símbolos coletivos.",
    about: [
      "Curso em gravações proposto por Arthur Bernardes, em diálogo com as obras de C. G. Jung e de Mircea Eliade.",
      "O percurso parte da distinção entre o sagrado e o profano e dos fundamentos do fenômeno religioso para chegar à elaboração junguiana da experiência do numinoso, dos arquétipos e da função transcendente.",
    ],
    modules: [
      "Módulo I — O sagrado e o profano e os fundamentos da religião",
      "Módulo II — A experiência religiosa",
      "Módulo III — O numinoso e os arquétipos",
      "Módulo IV — A religião e a confissão",
      "Módulo V — Os símbolos e a função transcendente",
    ],
  },
  {
    id: "jung-literatura",
    title: "Carl Jung e Literatura",
    subtitle: "Quando a psique encontra a arte",
    image: "/midias/gruposcursos/carljungliteratura.png",
    link: "https://pay.hotmart.com/P104351329I",
    tag: "Curso",
    format: "Curso",
    duration: "12 horas",
    coordinators: ["henrique"],
    description:
      "Curso dedicado aos principais textos da Psicologia Junguiana sobre o campo da literatura, propondo o diálogo entre a psicologia de Jung e a criação literária.",
    about: [
      "Curso proposto por Henrique Barçante, dedicado aos principais textos em que a Psicologia Junguiana se volta para o campo da literatura. A proposta é colocar a obra de C. G. Jung em diálogo com a criação literária — pensando o que a literatura revela sobre a psique e o que a psicologia analítica ilumina na experiência de ler e escrever.",
      "Ao longo do percurso, são percorridos também textos de Marie-Louise von Franz e de Sonu Shamdasani, atravessando obras literárias de referência.",
    ],
  },
  {
    id: "psicologia-analitica-sonhos-2023",
    title: "Psicologia Analítica e Sonhos",
    subtitle: "Gravações do grupo de 2023",
    image: "/midias/gruposcursos/psianaliticaesonhos2023.png",
    link: "https://pay.hotmart.com/H95173259Y",
    tag: "Grupo",
    format: "Grupo de Estudos",
    duration: "18 horas",
    coordinators: ["arthur", "henrique"],
    description:
      "Gravações do grupo de 2023 sobre o tratamento junguiano dos sonhos: visão geral do método e estudo das obras de Jung sobre o tema.",
    about: [
      "As gravações do grupo de 2023, coordenado por Arthur Bernardes e Henrique Barçante, dedicado à temática dos sonhos na Psicologia Analítica.",
      "O curso oferece uma visão geral do método junguiano de análise dos sonhos e um estudo das obras de Jung sobre o tema — um caminho para quem deseja se aprofundar na dimensão onírica da psique.",
    ],
  },
  {
    id: "biblia-e-psique",
    title: "A Bíblia e a Psique",
    subtitle: "Simbolismo da individuação no Antigo Testamento",
    image: "/midias/gruposcursos/bibliapsique.png",
    link: "https://pay.hotmart.com/Q100378659P",
    tag: "Grupo",
    format: "Grupo de Estudos",
    duration: "24 horas",
    coordinators: ["arthur", "henrique"],
    description:
      "Estudo das narrativas do Antigo Testamento à luz da Psicologia Analítica, percorrendo símbolos, arquétipos e o processo de individuação na obra de Edward F. Edinger.",
    book: {
      title: "A Bíblia e a Psique: Simbolismo da individuação no Antigo Testamento",
      author: "Edward F. Edinger",
    },
    synopsis: [
      "Edward Edinger aproxima um texto venerado por milhões — o Antigo Testamento — de um processo psicológico descrito apenas no século XX: a individuação. Lendo as Escrituras à luz da obra de Jung, o autor enxerga na história de Israel um diálogo contínuo entre o humano e o divino.",
      "A partir das conquistas da psicologia profunda, a sequência dos eventos bíblicos é lida como análoga ao movimento da psique em direção à totalidade. As narrativas ganham, assim, uma nova camada de sentido, em que símbolo e experiência interior se entrelaçam.",
    ],
    authorName: "Edward F. Edinger",
    authorDates: "1922–1998",
    authorBio: [
      "Edward F. Edinger foi médico psiquiatra, analista junguiano e escritor norte-americano, considerado um dos principais nomes da psicologia analítica depois de Jung. Iniciou sua análise com Esther Harding, foi membro fundador da C. G. Jung Foundation de Nova York e presidiu o instituto junguiano da cidade antes de transferir-se para Los Angeles, onde seguiu atuando como analista sênior. Sua obra é reconhecida por tornar acessíveis os grandes temas simbólicos da tradição junguiana.",
    ],
    about: [
      "Grupo de estudos baseado em A Bíblia e a Psique, de Edward F. Edinger. Lendo histórias bíblicas pela ótica da psicologia junguiana, propomos um percurso pelos símbolos e narrativas do Antigo Testamento como expressões do processo de individuação.",
      "Foram dezesseis encontros de uma hora e meia — vinte e quatro horas no total —, todos gravados e com certificado de participação para quem conclui o ciclo. A coordenação é de Arthur Bernardes e Henrique Barçante.",
    ],
  },
  {
    id: "presente-futuro",
    title: "Presente e Futuro",
    subtitle: "Obras Completas, volume 10/1",
    image: "/midias/gruposcursos/presentefuturo.png",
    link: "https://pay.hotmart.com/X105112647P",
    tag: "Grupo",
    format: "Grupo de Estudos",
    duration: "8 horas",
    coordinators: ["joao"],
    description:
      "Leitura compartilhada do volume 10/1 das Obras Completas, sobre massa, indivíduo e o destino simbólico do homem moderno.",
    book: {
      title: "Presente e Futuro",
      author: "C. G. Jung",
    },
    synopsis: [
      "Em Presente e Futuro, Jung volta-se para a ameaça que pesa sobre o indivíduo na sociedade de massas. Sua preocupação é com o homem moderno esmagado pelo Estado e pela coletividade — e com aquilo que pode lhe servir de contrapeso: o autoconhecimento, a personalidade e a atitude religiosa.",
      "O ensaio discute a massificação, a autocompreensão do indivíduo, a cosmovisão e o sentido do conhecer-se a si mesmo, abordando ainda o bem e o mal que podem recair sobre cada pessoa singular.",
    ],
    authorName: "C. G. Jung",
    authorDates: "1875–1961",
    authorBio: [
      "Carl Gustav Jung foi psiquiatra e psicoterapeuta suíço, fundador da psicologia analítica. Entre suas contribuições mais conhecidas estão a distinção entre as atitudes introvertida e extrovertida, as noções de arquétipo e de inconsciente coletivo e a ideia de sincronicidade. Sua obra influenciou a psiquiatria, a psicologia, os estudos da religião e a literatura.",
    ],
    about: [
      "Grupo de discussão sobre Presente e Futuro, volume 10/1 das Obras Completas de Jung.",
      "Conduzido por João de Bragança, o grupo percorre temas como religião, Estado e as consequências psicológicas da massificação do homem moderno.",
    ],
  },
  {
    id: "animus-anima",
    title: "Animus e Anima",
    subtitle: "Os dois ensaios de Emma Jung",
    image: "/midias/gruposcursos/animusanima.png",
    link: "https://pay.hotmart.com/F105940240R",
    tag: "Grupo",
    format: "Grupo de Estudos",
    duration: "Mais de 4 horas",
    ongoing: true,
    coordinators: ["joao"],
    description:
      "Grupo de estudos dedicado à leitura da obra de Emma Jung, examinando o animus e a anima enquanto conceitos da psicologia analítica e sua dinâmica no processo de individuação.",
    book: {
      title: "Animus e Anima",
      author: "Emma Jung",
    },
    synopsis: [
      "Vivemos um tempo de perguntas agudas sobre o que é ser homem e o que é ser mulher, sobre papéis e funções que se transformam depressa. É nesse contexto que os dois ensaios reunidos neste volume ganham relevo.",
      "Emma Jung — esposa e colaboradora de C. G. Jung — apresenta, em síntese, os complexos funcionais da psique a que a psicologia analítica chama anima e animus: suas formas de manifestação, seu modo de agir no inconsciente e a importância de torná-los conscientes ao longo do processo de individuação.",
    ],
    authorName: "Emma Jung",
    authorDates: "1882–1955",
    authorBio: [
      "Emma Jung, nascida Emma Rauschenbach, foi psicoterapeuta e autora suíça. Esposa de Carl Gustav Jung, com quem teve cinco filhos, foi sua parceira intelectual ao longo de toda a vida e contribuiu de forma direta para a consolidação da psicologia analítica. Dedicou-se especialmente ao estudo da anima e do animus, tema de seus ensaios mais conhecidos.",
    ],
    about: [
      "Grupo de estudos dedicado a Animus e Anima, de Emma Jung, sob a coordenação de João de Bragança.",
      "Ao longo de sete encontros, analisamos e discutimos a obra, examinando suas ideias e aplicações na Psicologia Analítica. A proposta é um estudo técnico, focado e rigoroso, com espaço para dúvidas e troca entre a comunidade ativa da Academia.",
    ],
  },
  {
    id: "nise-machado",
    title: "Nise, Machado de Assis e Psicologia",
    subtitle: "Cultura brasileira sob a lente junguiana",
    image: "/midias/gruposcursos/nisemachadodeassiseapsi.png",
    link: "https://pay.hotmart.com/L102922969Y",
    tag: "Curso",
    format: "Curso",
    duration: "8 horas",
    coordinators: ["henrique"],
    description:
      "Curso que aproxima as obras de Nise da Silveira e de Machado de Assis da Psicologia Analítica — uma leitura simbólica da cultura brasileira.",
    about: [
      "Curso da Academia, em gravações, proposto por Henrique Barçante em parceria com o Analítica Hoje.",
      "O percurso aproxima as obras de Nise da Silveira e de Machado de Assis da Psicologia Analítica, lendo a cultura brasileira e seus criadores por uma chave simbólica.",
    ],
  },
  {
    id: "harry-potter",
    title: "Harry Potter e Psicologia Analítica",
    subtitle: "Símbolos, sombra e individuação na saga",
    image: "/midias/gruposcursos/harrypotter.png",
    link: "https://pay.hotmart.com/L105112573R",
    tag: "Grupo",
    format: "Grupo de Estudos",
    duration: "12 horas",
    coordinators: ["arthur", "joao"],
    description:
      "Grupo de estudos que percorre a saga de Harry Potter pela ótica junguiana: arquétipos, sombra e processo de individuação, livro a livro.",
    about: [
      "Após o evento Psique em Narrativa, organizamos este grupo de estudos para examinar a saga de Harry Potter pela ótica junguiana.",
      "A proposta é discutir os simbolismos e as imagens arquetípicas presentes na história e mostrar como esses elementos podem servir, de modo didático, à compreensão de processos psíquicos fundamentais. São oito encontros, cada um dedicado a um livro/filme da série.",
    ],
  },
];

export const getCourseBySlug = (slug) => courses.find((c) => c.id === slug);
