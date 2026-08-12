import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = { title: "Sobre mim", description: "Conheça a trajetória, os interesses profissionais e a forma de trabalho da psicóloga." };

export default function Page() {
  return <main>
    <PageHero eyebrow="Sobre mim" title="Antes da abordagem, existe uma pessoa." intro="Conheça a trajetória que me trouxe à clínica e o que orienta meu trabalho com adolescentes e jovens adultos." />
    <section className="content shell about-grid">
      <div className="about-photo" aria-label="Espaço reservado para foto profissional"><span>NP</span><small>Adicionar fotografia profissional</small></div>
      <div className="prose about-story">
        <p className="eyebrow">Minha trajetória</p>
        <h2>Por que escolhi Psicologia</h2>
        <p>[Conte aqui, em primeira pessoa, o que despertou seu interesse pela Psicologia e quais experiências durante a graduação confirmaram essa escolha.]</p>
        <h2>Por que adolescentes e jovens adultos</h2>
        <p>Essa é uma fase em que identidade, autonomia, relações e escolhas importantes acontecem ao mesmo tempo. Meu interesse está em compreender como essas mudanças aparecem na vida concreta — na escola, na faculdade, no trabalho, na família e nos vínculos.</p>
        <h2>Como cheguei à TCC</h2>
        <p>Encontrei na Terapia Cognitivo-Comportamental uma abordagem colaborativa, clara e baseada em evidências. Ela permite investigar dificuldades atuais, formular objetivos compreensíveis e acompanhar o que está ou não funcionando ao longo do processo.</p>
      </div>
    </section>
    <section className="about-details"><div className="shell detail-grid">
      <div><p className="eyebrow pale">Interesses profissionais</p><h2>Temas que sigo estudando</h2></div>
      <ul><li>Ansiedade e regulação emocional</li><li>Autoestima, identidade e relações</li><li>Adolescência e transições para a vida adulta</li><li>Terapia Cognitivo-Comportamental</li><li>Prática clínica baseada em evidências</li></ul>
    </div></section>
    <section className="content shell personal-note"><p className="eyebrow">Fora do consultório</p><h2>Também sou feita das histórias que gosto de acompanhar.</h2><p>Entre estudos e trabalho, gosto de leitura, cultura pop e cinema — inclusive boas histórias de terror. Esses interesses aparecem aqui como parte de quem sou, sem perder o cuidado e os limites de um espaço profissional.</p><p><Link className="text-link" href="/formacao">Ver formação e trajetória acadêmica →</Link></p><p><Link className="button" href="/contato">Conversar sobre atendimento</Link></p></section>
  </main>;
}
