// Trilha da Academia — ordena os cursos e grupos do mais introdutório ao mais
// aprofundado, para quem chega sem saber por onde começar.
// Os cursos são referenciados por id a partir de courses.js, então imagem,
// link e descrição vêm sempre de uma única fonte.
import { courses } from "./courses.js";

const byId = Object.fromEntries(courses.map((c) => [c.id, c]));

// Resolve ids em objetos de curso, descartando silenciosamente os que ainda
// não existem no catálogo (sem imagem/link).
const resolve = (ids) => ids.map((id) => byId[id]).filter(Boolean);

export const trilhaIntro =
  "Muita gente chega à Psicologia Analítica sem saber por onde começar. Esta é a trilha da Academia: um caminho do introdutório ao mais profundo, para você estudar com chão firme e avançar no seu ritmo. Tudo abaixo está incluso na assinatura — ou disponível para compra avulsa.";

export const trilhaStages = [
  {
    id: "comece-por-aqui",
    step: "01",
    level: "Introdutório",
    title: "Comece por aqui",
    description:
      "Os primeiros passos na Psicologia Analítica: material introdutório, didático e acessível. Ideal para quem está chegando agora e quer entender os fundamentos antes de avançar.",
    courses: resolve([
      "fundamentos-psicologia-complexa",
      "homem-e-seus-simbolos",
      "experiencia-junguiana",
      "como-entender-sonhos",
      "tipos-psicologicos",
    ]),
  },
  {
    id: "aprofundando",
    step: "02",
    level: "Intermediário",
    title: "Aprofundando conhecimentos…",
    description:
      "Você já domina os fundamentos e quer ir além. Estudos temáticos que cruzam Jung com religião, literatura e a clínica dos sonhos.",
    courses: resolve([
      "numinoso-e-religiao",
      "jung-literatura",
      "psicologia-analitica-sonhos-2023",
    ]),
  },
  {
    id: "desafio",
    step: "03",
    level: "Avançado",
    title: "Encarando um desafio",
    description:
      "Para quem já tem repertório e quer encarar os textos mais densos e complexos da obra junguiana. Estudo exigente, simbólico e profundo.",
    courses: resolve(["biblia-e-psique", "presente-futuro", "animus-anima"]),
  },
];

// Cursos e grupos que não seguem uma ordem fixa dentro da trilha — escolha
// conforme o interesse e o momento.
export const trilhaAdicionais = resolve([
  "voz-e-tempo",
  "nise-machado",
  "harry-potter",
]);
