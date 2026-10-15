import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "Conteúdos",
  description: "Conteúdos de Psicologia sobre ansiedade, adolescência, autoestima, relações e início da vida adulta, em linguagem acessível e responsável.",
  robots: { index: false, follow: false },
};

const posts = [
  {
    tag: "Adolescência",
    title: "Psicoterapia online para adolescentes: como funciona e qual o papel dos responsáveis?",
    description: "Um guia sobre início do acompanhamento, sigilo, participação da família e modalidade online.",
    href: "/conteudos/psicoterapia-online-para-adolescentes",
    status: "Em revisão profissional",
  },
  {
    tag: "Ansiedade",
    title: "Ansiedade ou preocupação: como perceber a diferença?",
    description: "Um guia inicial para observar sinais e entender quando buscar apoio.",
    status: "Em breve",
  },
  {
    tag: "Vida adulta",
    title: "A sensação de estar atrasado na vida",
    description: "Comparação, expectativas e a construção de um ritmo possível.",
    status: "Em breve",
  },
];

export default function Page() {
  return <main>
    <PageHero eyebrow="Conteúdos" title="Psicologia traduzida para a vida cotidiana." intro="Um espaço para reflexões cuidadosas, linguagem acessível e informação responsável — sem diagnósticos à distância." />
    <section className="content shell">
      <div className="posts">
        {posts.map((post) => post.href
          ? <a className="post" href={post.href} key={post.title}><span>{post.tag} · {post.status}</span><h2>{post.title}</h2><p>{post.description}</p></a>
          : <article className="post" key={post.title}><span>{post.tag} · {post.status}</span><h2>{post.title}</h2><p>{post.description}</p></article>
        )}
      </div>
      <p className="notice">A área de conteúdos continua fora do Google enquanto os textos passam por revisão profissional. O primeiro rascunho já pode ser aberto e revisado pela Ana.</p>
    </section>
  </main>;
}
