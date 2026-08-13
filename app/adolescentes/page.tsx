import type { Metadata } from "next";
import Link from "next/link";
import { AnchorNav } from "../components/AnchorNav";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = { title: "Psicoterapia para adolescentes", description: "Informações sobre psicoterapia online para adolescentes e seus responsáveis." };

export default function Page() {
  return <main>
    <PageHero eyebrow="Adolescentes" title="Informação clara para quem faz terapia e para quem acompanha." intro="O atendimento considera a experiência do adolescente, a participação dos responsáveis e os limites de sigilo explicados desde o começo." />
    <AnchorNav items={[
      { href: "#para-adolescentes", label: "Para adolescentes" },
      { href: "#para-responsaveis", label: "Para responsáveis" },
      { href: "#como-comeca", label: "Como começa" },
    ]} />
    <section className="content shell audience-paths">
      <article id="para-adolescentes" className="audience-card teen anchor-target"><p className="eyebrow">Se você é adolescente</p><h2>Este é o seu espaço.</h2><p>Você não precisa chegar sabendo explicar tudo. Podemos começar por situações recentes, pensamentos que se repetem ou coisas que estão atrapalhando sua rotina.</p><h3>Podemos conversar sobre</h3><ul><li>ansiedade, estresse e medo de errar;</li><li>escola, provas, escolhas e pressão;</li><li>amizades, família e relacionamentos;</li><li>autoestima, identidade e imagem corporal;</li><li>dificuldade para entender ou regular emoções.</li></ul><p>Na primeira conversa, explico como as sessões funcionam, o que fica em sigilo e em quais situações um adulto precisa ser envolvido.</p></article>
      <article id="para-responsaveis" className="audience-card guardian anchor-target"><p className="eyebrow">Se você é responsável</p><h2>Participar não significa acompanhar cada conversa.</h2><p>Responsáveis ajudam com informações iniciais, rotina, autorização e condições para o atendimento. Ao mesmo tempo, o adolescente precisa de privacidade para construir confiança no processo.</p><h3>O que esperar</h3><ul><li>uma conversa inicial para entender o contexto;</li><li>combinados sobre comunicação e participação;</li><li>orientações quando forem úteis ao acompanhamento;</li><li>contato em situações que envolvam risco ou proteção.</li></ul><p>O conteúdo detalhado das sessões não é repassado. Os limites do sigilo são apresentados de forma clara e compatível com a idade e com os deveres éticos.</p></article>
    </section>
    <section id="como-comeca" className="content narrow shell prose anchor-target"><h2>Como o atendimento começa</h2><p>Depois do contato administrativo, combinamos a conversa inicial e avaliamos as necessidades do adolescente e da família. O plano de acompanhamento é individual: não há roteiro único nem promessa de resultado.</p><div className="notice">Em situações de risco, responsáveis e rede de cuidado podem ser acionados conforme os deveres éticos e a legislação aplicável.</div><p><Link className="button" href="/contato">Tirar uma dúvida inicial</Link></p></section>
  </main>;
}
