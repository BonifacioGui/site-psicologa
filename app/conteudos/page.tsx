import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "Conteúdos",
  description: "Conteúdos de Psicologia sobre ansiedade, adolescência, autoestima, relações e início da vida adulta, em linguagem acessível e responsável.",
  robots: { index: false, follow: false },
};

const posts = [
  ["Ansiedade", "Ansiedade ou preocupação: como perceber a diferença?", "Um guia inicial para observar sinais e entender quando buscar apoio."],
  ["Adolescência", "Como acolher um adolescente sem transformar conversa em interrogatório", "Presença, curiosidade e limites podem coexistir no diálogo."],
  ["Vida adulta", "A sensação de estar atrasado na vida", "Comparação, expectativas e a construção de um ritmo possível."],
];

export default function Page() {
  return <main><PageHero eyebrow="Conteúdos" title="Psicologia traduzida para a vida cotidiana." intro="Um espaço para reflexões cuidadosas, linguagem acessível e informação responsável — sem diagnósticos à distância." /><section className="content shell"><div className="posts">{posts.map(([tag, title, desc]) => <article className="post" key={title}><span>{tag} · Em breve</span><h2>{title}</h2><p>{desc}</p></article>)}</div><p className="notice">Estrutura editorial pronta. Os artigos devem ser revisados pela profissional antes de irem ao ar.</p></section></main>;
}
