import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/PageHero";
import { professionalContact } from "../site";

export const metadata: Metadata = {
  title: "Sobre mim",
  description: "Conheça a formação, a experiência clínica em TCC, o interesse por Neurociências e a trajetória de Ana Lívia Calado da Costa.",
};

export default function Page() {
  return <main>
    <PageHero eyebrow="Sobre mim" title="Conhecimento técnico, ética e humanidade." intro="Minha história ajuda a explicar por que escolhi a clínica e por que trabalho com tanto cuidado com adolescentes e jovens adultos." />
    <section className="content shell about-grid">
      <figure className="about-photo-real">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="profile-photo"
          src="/ana-livia-sobre.jpg"
          srcSet="/ana-livia-sobre-480.jpg 480w, /ana-livia-sobre.jpg 960w"
          sizes="(max-width: 560px) calc(100vw - 30px), (max-width: 900px) calc(100vw - 48px), 430px"
          alt="Retrato profissional de Ana Lívia Calado da Costa"
          width="960"
          height="1280"
          loading="lazy"
          decoding="async"
        />
        <figcaption>Ana Lívia Calado da Costa<br /><span>Psicóloga · CRP 02/34611</span></figcaption>
      </figure>
      <div className="prose about-story">
        <p className="eyebrow">Formação e prática clínica</p>
        <h2>Uma prática construída entre clínica, ciência e desenvolvimento contínuo.</h2>
        <p>Sou psicóloga, formada pela UNINASSAU, com experiência clínica em Terapia Cognitivo-Comportamental (TCC) e atuação voltada especialmente para adolescentes, jovens adultos e adultos.</p>
        <p>Durante minha formação, tive experiência direta no atendimento clínico de adolescentes e jovens, acompanhando demandas como ansiedade, insegurança, baixa autoestima, autocobrança, dificuldades nos relacionamentos, adaptação a mudanças e regulação emocional. Essa vivência reforçou meu interesse por compreender os desafios próprios dessa fase da vida e por ajudar cada pessoa a desenvolver formas mais saudáveis de lidar com eles.</p>
        <p>Minha prática é orientada principalmente pela Terapia Cognitivo-Comportamental, uma abordagem baseada em evidências científicas que busca compreender a relação entre pensamentos, emoções e comportamentos. Também mantenho estudos complementares em temas relacionados à regulação emocional, mindfulness e abordagens contemporâneas da TCC.</p>
        <p>Além da experiência clínica, ao longo da graduação participei de atividades voltadas à Psicologia, saúde mental e desenvolvimento de crianças e adolescentes, incluindo ações psicoeducativas em contexto escolar.</p>
        <p>Outra área importante da minha trajetória foi o estudo da relação entre Psicologia e Neurociências. Meu Trabalho de Conclusão de Curso foi desenvolvido sobre o uso do neurofeedback como recurso psicológico no tratamento de transtornos mentais, incluindo revisão científica e visita técnica a um instituto especializado em neurofeedback e avaliação por EEG. Essa experiência ampliou meu interesse pela integração entre saúde mental, funcionamento cerebral e práticas baseadas em evidências.</p>
        <p className="eyebrow story-section-label">Minha trajetória</p>
        <h2>O que existe por trás do que mostramos ao mundo.</h2>
        <p>Escolhi a clínica porque, desde muito nova, sempre me interessou aquilo que existe por trás do que as pessoas mostram ao mundo. Mas existe também uma razão muito pessoal para eu me identificar tanto com o trabalho com adolescentes e jovens adultos.</p>
        <p>Durante a minha própria adolescência, houve momentos em que eu também precisei da ajuda de um profissional que pudesse me ajudar a compreender o que eu estava vivendo. Hoje penso no quanto ter tido esse suporte poderia ter tornado alguns momentos menos difíceis.</p>
        <blockquote className="story-quote">Talvez por isso eu enxergue essa fase da vida com tanto cuidado.</blockquote>
        <h2>Uma fase em que muita coisa começa a ganhar força.</h2>
        <p>A adolescência e o início da vida adulta são períodos de construção contínua. É quando muitas crenças sobre quem somos, sobre o nosso valor, sobre os outros e sobre o mundo começam a ganhar força.</p>
        <p>Inseguranças, experiências de rejeição, cobranças, comparações e medos podem parecer passageiros, mas algumas dessas experiências podem acompanhar a pessoa por muitos anos.</p>
        <p>Conforme a vida adulta chega, chegam também novas responsabilidades, decisões, relacionamentos, trabalho, faculdade, expectativas e frustrações. Aquilo que antes parecia apenas uma insegurança pode se tornar um padrão cada vez mais enraizado e interferir de forma significativa na maneira como a pessoa vive, sente e se relaciona.</p>
      </div>
    </section>
    <section className="presence-band"><div className="shell presence-copy"><p className="eyebrow pale">É nesse processo que quero estar presente</p><h2>Não para impedir todo sofrimento, mas para que você não precise atravessar sozinho aquilo que ainda não consegue compreender.</h2></div></section>
    <section className="content shell study-grid">
      <div><p className="eyebrow">Estudo contínuo</p><h2>As referências que orientam meu olhar clínico.</h2><p>Minha principal referência é a Terapia Cognitivo-Comportamental (TCC). Meus estudos também passam por abordagens e temas que ampliam a compreensão sobre emoções, relações e comportamento.</p></div>
      <div className="study-list" aria-label="Temas de atendimento e estudo"><span>TCC</span><span>ACT</span><span>DBT</span><span>Mindfulness</span><span>Ansiedade</span><span>Autoestima e autoconfiança</span><span>Insegurança</span><span>Autocobrança e perfeccionismo</span><span>Regulação emocional</span><span>Dificuldades nos relacionamentos</span><span>Habilidades de enfrentamento</span><span>Comparação e medo de julgamento</span><span>Transições da adolescência e do início da vida adulta</span><span>Autoconhecimento</span><span>Habilidades socioemocionais</span><span>Avaliação psicológica</span><span>Neuropsicologia</span><span>Cérebro, comportamento e saúde mental</span></div>
    </section>
    <section className="personal-section"><div className="shell personal-grid"><p className="index">Para além da psicóloga</p><div><h2>Também sou alguém que continua se construindo.</h2><p>Fora do consultório, penso, sinto, aprendo e me questiono. Gosto de livros, de momentos tranquilos, de conhecer lugares novos, de estar perto de quem amo e de conversas que vão além do superficial.</p><p>Talvez uma das coisas mais importantes que a minha própria história tenha me ensinado seja esta: eu entendo como pode ser difícil não saber o que fazer com aquilo que você sente.</p><p>Por isso, não acredito em uma Psicologia distante ou em um profissional colocado em um pedestal. Acredito em conhecimento técnico, ética e responsabilidade, mas também em humanidade.</p><div className="actions"><a className="button" href={professionalContact.whatsappHref} target="_blank" rel="noreferrer">Conversar sobre atendimento</a><Link className="text-link" href="/formacao">Ver formação e trajetória acadêmica →</Link></div></div></div></section>
  </main>;
}
