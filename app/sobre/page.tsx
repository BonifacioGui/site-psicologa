import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";
import { professionalContact } from "../site";
import { RegistryLink } from "../components/RegistryLink";

export const metadata: Metadata = {
  title: "Sobre mim",
  description: "Conheça a formação, a experiência clínica em TCC, o interesse por Neurociências e a atuação profissional de Ana Lívia Calado da Costa.",
};

export default function Page() {
  return <main>
    <PageHero eyebrow="Sobre mim" title="Conhecimento técnico, ética e humanidade." intro="Minha formação, experiência clínica e interesse pela ciência orientam minha prática com adolescentes, jovens adultos e adultos." />
    <section className="content shell about-grid">
      <figure className="about-photo-real">
        <picture>
          <source type="image/avif" srcSet="/ana-livia-sobre-480.avif 480w, /ana-livia-sobre.avif 960w" sizes="(max-width: 560px) calc(100vw - 30px), (max-width: 900px) calc(100vw - 48px), 430px" />
          <source type="image/webp" srcSet="/ana-livia-sobre-480.webp 480w, /ana-livia-sobre.webp 960w" sizes="(max-width: 560px) calc(100vw - 30px), (max-width: 900px) calc(100vw - 48px), 430px" />
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
        </picture>
        <figcaption>Ana Lívia Calado da Costa<br /><span>Psicóloga · <RegistryLink /></span></figcaption>
      </figure>
      <div className="prose about-story">
        <p className="eyebrow">Formação e prática clínica</p>
        <h2>Uma prática construída entre clínica, ciência e desenvolvimento contínuo.</h2>
        <div className="about-professional-topics">
          <section className="about-professional-topic">
            <div className="about-topic-heading"><span className="index">01</span><h3>Formação em Psicologia</h3></div>
            <p>Sou psicóloga, <strong>formada pela UNINASSAU</strong>, com experiência clínica em Terapia Cognitivo-Comportamental (TCC) e atuação voltada especialmente para adolescentes, jovens adultos e adultos.</p>
          </section>
          <section className="about-professional-topic">
            <div className="about-topic-heading"><span className="index">02</span><h3>Experiência clínica</h3></div>
            <p>Durante minha formação, tive <strong>experiência direta no atendimento clínico de adolescentes e jovens</strong>, acompanhando demandas como ansiedade, insegurança, baixa autoestima, autocobrança, dificuldades nos relacionamentos, adaptação a mudanças e regulação emocional. Essa vivência reforçou meu interesse por compreender os desafios próprios dessa fase da vida e por ajudar cada pessoa a desenvolver formas mais saudáveis de lidar com eles.</p>
          </section>
          <section className="about-professional-topic">
            <div className="about-topic-heading"><span className="index">03</span><h3>TCC e estudos contínuos</h3></div>
            <p>Minha prática é orientada principalmente pela Terapia Cognitivo-Comportamental, uma <strong>abordagem baseada em evidências científicas</strong> que busca compreender a relação entre pensamentos, emoções e comportamentos. Também mantenho estudos complementares em temas relacionados à regulação emocional, mindfulness e abordagens contemporâneas da TCC.</p>
          </section>
          <section className="about-professional-topic">
            <div className="about-topic-heading"><span className="index">04</span><h3>Ações psicoeducativas</h3></div>
            <p>Além da experiência clínica, ao longo da graduação participei de atividades voltadas à Psicologia, saúde mental e desenvolvimento de crianças e adolescentes, incluindo <strong>ações psicoeducativas em contexto escolar</strong>.</p>
          </section>
          <section className="about-professional-topic">
            <div className="about-topic-heading"><span className="index">05</span><h3>Psicologia e Neurociências</h3></div>
            <p>Outra área importante da minha trajetória foi o estudo da relação entre <strong>Psicologia e Neurociências</strong>. Meu Trabalho de Conclusão de Curso foi desenvolvido sobre o uso do <strong>neurofeedback</strong> como recurso psicológico no tratamento de transtornos mentais, incluindo revisão científica e visita técnica a um instituto especializado em neurofeedback e <strong>avaliação por EEG</strong>. Essa experiência ampliou meu interesse pela integração entre saúde mental, funcionamento cerebral e práticas baseadas em evidências.</p>
          </section>
        </div>
      </div>
    </section>
    <section className="presence-band"><div className="shell presence-copy"><p className="eyebrow pale">É nesse processo que quero estar presente</p><h2>Não para impedir todo sofrimento, mas para que você não precise atravessar sozinho aquilo que ainda não consegue compreender.</h2></div></section>
    <section className="content shell study-grid">
      <div><p className="eyebrow">Estudo contínuo</p><h2>As referências que orientam meu olhar clínico.</h2><p>Minha principal referência é a Terapia Cognitivo-Comportamental (TCC). Meus estudos também passam por abordagens e temas que ampliam a compreensão sobre emoções, relações e comportamento.</p></div>
      <div className="study-list" aria-label="Temas de atendimento e estudo"><span>TCC</span><span>ACT</span><span>DBT</span><span>Mindfulness</span><span>Ansiedade</span><span>Autoestima e autoconfiança</span><span>Insegurança</span><span>Autocobrança e perfeccionismo</span><span>Regulação emocional</span><span>Dificuldades nos relacionamentos</span><span>Habilidades de enfrentamento</span><span>Comparação e medo de julgamento</span><span>Transições da adolescência e do início da vida adulta</span><span>Autoconhecimento</span><span>Habilidades socioemocionais</span><span>Avaliação psicológica</span><span>Neuropsicologia</span><span>Cérebro, comportamento e saúde mental</span></div>
    </section>
    <section className="personal-section">
      <div className="shell personal-grid">
        <div className="personal-aside">
          <p className="index">Para além da psicóloga</p>
          <figure className="personal-photo">
            <picture>
              <source type="image/avif" srcSet="/ana-livia-pessoal-480.avif 480w, /ana-livia-pessoal.avif 960w" sizes="(max-width: 560px) calc(100vw - 30px), (max-width: 900px) 520px, 430px" />
              <source type="image/webp" srcSet="/ana-livia-pessoal-480.webp 480w, /ana-livia-pessoal.webp 960w" sizes="(max-width: 560px) calc(100vw - 30px), (max-width: 900px) 520px, 430px" />
              <img
                src="/ana-livia-pessoal.jpg"
                srcSet="/ana-livia-pessoal-480.jpg 480w, /ana-livia-pessoal.jpg 960w"
                sizes="(max-width: 560px) calc(100vw - 30px), (max-width: 900px) 520px, 430px"
                alt="Ana Lívia lendo um livro em seu espaço de estudos"
                width="960"
                height="1280"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </figure>
        </div>
        <div className="personal-copy"><h2>Também sou alguém que continua se construindo.</h2><p>Fora do consultório, penso, sinto, aprendo e me questiono. Gosto de livros, de momentos tranquilos, de conhecer lugares novos, de estar perto de quem amo e de conversas que vão além do superficial.</p><p>Talvez uma das coisas mais importantes que a minha própria história tenha me ensinado seja esta: eu entendo como pode ser difícil não saber o que fazer com aquilo que você sente.</p><p>Por isso, não acredito em uma Psicologia distante ou em um profissional colocado em um pedestal. Acredito em conhecimento técnico, ética e responsabilidade, mas também em humanidade.</p><div className="actions"><a className="button" href={professionalContact.whatsappHref} target="_blank" rel="noreferrer">Conversar sobre atendimento</a><a className="text-link" href="/formacao">Ver formação e trajetória acadêmica →</a></div></div>
      </div>
    </section>
  </main>;
}
