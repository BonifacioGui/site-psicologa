import { professionalContact } from "./site";
import { BrainCircuit, Flower2, Gauge, Heart, Signpost, UsersRound } from "lucide-react";

export default function Home() {
  return <main>
    <section className="hero editorial-hero shell">
      <div className="hero-copy">
        <p className="eyebrow">Atendimento psicológico online <span aria-hidden="true">·</span> {professionalContact.locationDisplay}</p>
        <h1 className="professional-name">Ana Lívia Calado da Costa</h1>
        <p className="professional-id">Psicóloga <span aria-hidden="true">·</span> CRP 02/34611</p>
        <h2 className="hero-service">Psicoterapia online para adolescentes e jovens adultos.</h2>
        <p className="approach-label">Terapia Cognitivo-Comportamental</p>
        <p className="hero-emotional">Um trabalho para compreender o que acontece hoje, reconhecer padrões e testar respostas mais úteis na vida real.</p>
        <div className="actions">
          <a className="button" href={professionalContact.whatsappHref} target="_blank" rel="noreferrer">Conversar sobre atendimento</a>
          <a className="button outline" href="#atendimentos">Conheça o atendimento ↓</a>
        </div>
      </div>
      <figure className="portrait">
        <picture>
          <img
            className="profile-photo hero-profile-photo"
            src="/ana-livia-hero-arch-transparent.png"
            srcSet="/ana-livia-hero-arch-transparent-512.png 512w, /ana-livia-hero-arch-transparent.png 1055w"
            sizes="(max-width: 560px) min(100vw, 360px), (max-width: 900px) 420px, 500px"
            alt="Ana Lívia em retrato profissional com blazer claro"
            width="1055"
            height="1491"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
        <figcaption>Ana Lívia Calado da Costa</figcaption>
      </figure>
    </section>

    <section className="focus-strip" aria-label="Temas de atendimento">
      <ul className="shell focus-area-list">
        <li className="focus-area-card">
          <span className="focus-area-icon" aria-hidden="true"><BrainCircuit /></span>
          <h3>Ansiedade</h3>
          <p>Compreender e manejar a ansiedade para viver com mais calma e equilíbrio.</p>
        </li>
        <li className="focus-area-card">
          <span className="focus-area-icon" aria-hidden="true"><Heart /></span>
          <h3>Autoestima</h3>
          <p>Fortalecer sua autoconfiança e se relacionar com mais respeito e gentileza.</p>
        </li>
        <li className="focus-area-card">
          <span className="focus-area-icon" aria-hidden="true"><UsersRound /></span>
          <h3>Relacionamentos</h3>
          <p>Melhorar suas relações e aprender a se comunicar de forma mais saudável.</p>
        </li>
        <li className="focus-area-card">
          <span className="focus-area-icon" aria-hidden="true"><Gauge /></span>
          <h3>Autocobrança</h3>
          <p>Reduzir a pressão interna e cuidar de si com mais leveza no dia a dia.</p>
        </li>
        <li className="focus-area-card">
          <span className="focus-area-icon" aria-hidden="true"><Flower2 /></span>
          <h3>Regulação emocional</h3>
          <p>Identificar, acolher e lidar melhor com suas emoções no cotidiano.</p>
        </li>
        <li className="focus-area-card">
          <span className="focus-area-icon" aria-hidden="true"><Signpost /></span>
          <h3>Transições</h3>
          <p>Apoio em mudanças, escolhas e novos começos.</p>
        </li>
      </ul>
    </section>

    <section className="shell intro">
      <p className="index">01 — Como funciona</p>
      <div className="therapy-intro-copy">
        <h2>Nunca fiz terapia, como funciona?</h2>
        <p className="lead">Você não precisa chegar sabendo exatamente o que dizer, nem ter tudo organizado na cabeça. Muitas vezes, começamos justamente pelo que está confuso.</p>
        <p className="lead">Nas primeiras sessões, o psicólogo procura conhecer melhor você, sua história, o que tem acontecido e o que fez você buscar ajuda naquele momento. Aos poucos, vocês vão identificando dificuldades, padrões, emoções e situações que merecem mais atenção.</p>
        <p className="lead">Durante o processo, você pode falar sobre pensamentos, sentimentos, relações, acontecimentos do dia a dia, medos, inseguranças ou qualquer questão que esteja sendo importante para você. O papel do psicólogo não é julgar, dar broncas ou simplesmente dizer o que você deve fazer, mas ajudar você a compreender melhor o que está vivendo e encontrar formas mais saudáveis de lidar com isso.</p>
        <p className="lead">A terapia também não precisa começar por uma grande crise. Você pode buscar acompanhamento porque está se sentindo sobrecarregado, quer se conhecer melhor, deseja mudar alguns padrões ou simplesmente sente que algumas coisas poderiam estar mais leves.</p>
        <p className="lead">E não se preocupe se houver silêncio, nervosismo ou dificuldade para falar no começo. Isso também faz parte. O vínculo e a confiança são construídos aos poucos, no seu ritmo.</p>
      </div>
    </section>

    <section className="audience-reason">
      <div className="shell audience-reason-grid">
        <p className="index">02 — Para quem atendo</p>
        <div>
          <h2>Por que adolescentes e jovens adultos?</h2>
          <p className="lead">Tenho uma identificação especial com o atendimento de adolescentes e jovens adultos porque essa é uma fase marcada por muitas construções: identidade, autoestima, relações, escolhas, expectativas sobre o futuro e formas de enxergar a si mesmo e o mundo. Ao longo desses acompanhamentos, pude contribuir para que aspectos que antes pareciam difíceis de compreender ou manejar se tornassem mais claros e possíveis de enfrentar. É também um período em que determinadas crenças e padrões de comportamento começam a ganhar força. Quando não são percebidos e trabalhados, alguns deles podem acompanhar a pessoa até a vida adulta, tornando-se mais rígidos ou até virando transtornos diante de novas responsabilidades, relacionamentos e desafios.</p>
        </div>
      </div>
    </section>

    <section id="atendimentos" className="shell section anchor-target">
      <p className="eyebrow">Atendimentos</p>
      <div className="section-title"><h2>Questões diferentes pedem conversas diferentes.</h2><a className="text-link" href="/atendimento">Como funciona →</a></div>
      <div className="cards">
        <a className="card wine" href="/adolescentes"><span>Adolescentes e responsáveis</span><h3>Ansiedade, escola, identidade, relações e mudanças dessa fase.</h3><p>Informações específicas para quem vai fazer terapia e para quem acompanha e contrata o atendimento.</p><b aria-hidden="true">↗</b></a>
        <a className="card plum" href="/jovens-adultos"><span>Jovens adultos</span><h3>Escolhas, carreira, autonomia, vínculos e autocobrança.</h3><p>Um trabalho focado em compreender dificuldades atuais e desenvolver recursos para decisões e transições.</p><b aria-hidden="true">↗</b></a>
      </div>
    </section>

    <section className="dark"><div className="shell split"><div><p className="eyebrow pale">Abordagem</p><h2>Por que Terapia Cognitivo-Comportamental?</h2></div><div><p>A TCC oferece uma forma clara de relacionar pensamentos, emoções e comportamentos. Gosto de uma abordagem em que paciente e terapeuta entendem o que estão trabalhando, definem prioridades juntos e acompanham mudanças de maneira concreta.</p><a className="button light" href="/abordagem-tcc">Conhecer a TCC</a></div></div></section>

    <section className="shell quote about-preview">
      <p className="index">03 — Sobre mim</p>
      <div className="about-preview-copy">
        <blockquote>uma formação marcada pela clínica, pelo aprimoramento profissional e baseada em evidências.</blockquote>
        <p>Conheça minha trajetória, por que escolhi a clínica, os temas que estudo e um pouco de quem existe fora do consultório.</p>
        <a className="text-link" href="/sobre">Conheça a profissional →</a>
      </div>
      <figure className="about-preview-photo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/ana-livia-home-sobre-transparent.png"
          alt="Ana Lívia sentada em retrato profissional com blazer claro"
          width="1024"
          height="1536"
          loading="lazy"
          decoding="async"
        />
      </figure>
    </section>

    <section className="cta"><p className="eyebrow pale">Contato inicial</p><h2>Quer saber sobre horários e valores?</h2><p>Envie uma mensagem breve. Não é necessário relatar questões clínicas pelo WhatsApp.</p><a className="button light" href={professionalContact.whatsappHref} target="_blank" rel="noreferrer">Conversar pelo WhatsApp</a></section>
  </main>;
}
