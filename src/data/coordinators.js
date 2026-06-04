// Fonte única de verdade para os coordenadores da Academia.
// Usado na Home (seção da equipe), na página de cursos e nas páginas de venda
// de cada curso — para que foto, bio e links venham sempre do mesmo lugar.

export const coordinators = {
  arthur: {
    id: "arthur",
    name: "Arthur Bernardes",
    role: "Divulgador Científico e idealizador da Academia Junguiana",
    image: "/midias/coordenadores/arthur.jpg",
    bio: "Psicólogo Clínico e Supervisor graduado na PUC Minas. Co-fundador da Associação Allos e criador da Academia Junguiana. Coordenação de grupos de estudo, cursos, eventos e workshops online e presenciais em Psicologia Analítica há 5+ anos.",
    link: "https://arthurbernardespsi.com.br/",
  },
  joao: {
    id: "joao",
    name: "João de Bragança",
    role: "Psicólogo clínico e cofundador do projeto “Analítica Hoje”",
    image: "/midias/coordenadores/joao.png",
    bio: "Psicólogo graduado pela PUC Minas, mestrando em Psicologia pela UFJF, formado em Psicologia Analítica pelo Instituto Dédalus, cofundador do projeto Analítica Hoje, membro do Laboratório de Pesquisa Caminhos Junguianos, Secretário Geral na Associação Allos.",
    link: "https://www.instagram.com/joaodebraganca",
  },
  henrique: {
    id: "henrique",
    name: "Henrique Barçante",
    role: "Psicólogo junguiano e cofundador do projeto “Analítica Hoje”",
    image: "/midias/coordenadores/henrique.png",
    bio: "Psicólogo formado pela PUC-MG, supervisor clínico, pesquisador do Caminhos Junguianos: Laboratório de Pesquisa e Pós-Graduação em Psicologia Analítica, professor na Academia Junguiana, pós-graduando do curso Teoria e Prática terapêutica de Nise da Silveira.",
    link: "https://www.instagram.com/prosa_psiquica/",
  },
};

// Ordem padrão de exibição (usada na Home).
export const coordinatorList = [
  coordinators.arthur,
  coordinators.joao,
  coordinators.henrique,
];

// Resolve uma lista de ids (["arthur", "henrique"]) em objetos de coordenador,
// descartando ids inexistentes.
export const resolveCoordinators = (ids = []) =>
  ids.map((id) => coordinators[id]).filter(Boolean);
