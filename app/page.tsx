import Link from "next/link";
import { professionalContact } from "./site";

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
            src="/ana-livia-hero-arch-1132.png"
            srcSet="/ana-livia-hero-arch-566.png 566w, /ana-livia-hero-arch-1132.png 1132w"
            sizes="(max-width: 560px) 45vw, (max-width: 900px) 420px, 440px"
            alt="Ana Lívia em retrato profissional com blazer claro"
            width="1132"
            height="1600"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
        <figcaption>Ana Lívia Calado da Costa</figcaption>
      </figure>
    </section>

    <section className="shell intro">
      <p className="index">01 — Como trabalho</p>
      <div><h2>Uma sessão com direção, sem respostas prontas.</h2><p className="lead">Nas sessões, investigamos situações concretas: o que aconteceu, quais pensamentos apareceram, como isso afetou suas emoções e o que você fez em seguida. A partir daí, definimos objetivos, observamos padrões e construímos estratégias que possam ser usadas fora da terapia.</p></div>
    </section>

    <section id="atendimentos" className="shell section anchor-target">
      <p className="eyebrow">Atendimentos</p>
      <div className="section-title"><h2>Questões diferentes pedem conversas diferentes.</h2><Link className="text-link" href="/atendimento">Como funciona →</Link></div>
      <div className="cards">
        <Link className="card wine" href="/adolescentes"><span>Adolescentes e responsáveis</span><h3>Ansiedade, escola, identidade, relações e mudanças dessa fase.</h3><p>Informações específicas para quem vai fazer terapia e para quem acompanha e contrata o atendimento.</p><b aria-hidden="true">↗</b></Link>
        <Link className="card plum" href="/jovens-adultos"><span>Jovens adultos</span><h3>Escolhas, carreira, autonomia, vínculos e autocobrança.</h3><p>Um trabalho focado em compreender dificuldades atuais e desenvolver recursos para decisões e transições.</p><b aria-hidden="true">↗</b></Link>
      </div>
    </section>

    <section className="dark"><div className="shell split"><div><p className="eyebrow pale">Abordagem</p><h2>Por que Terapia Cognitivo-Comportamental?</h2></div><div><p>A TCC oferece uma forma clara de relacionar pensamentos, emoções e comportamentos. Gosto de uma abordagem em que paciente e terapeuta entendem o que estão trabalhando, definem prioridades juntos e acompanham mudanças de maneira concreta.</p><Link className="button light" href="/abordagem-tcc">Conhecer a TCC</Link></div></div></section>

    <section className="shell quote"><p className="index">02 — Sobre mim</p><div><blockquote>Psicologia, formação contínua e interesse genuíno pelas experiências de adolescentes e jovens adultos.</blockquote><p>Conheça minha trajetória, por que escolhi a clínica, os temas que estudo e um pouco de quem existe fora do consultório.</p><Link className="text-link" href="/sobre">Conheça a profissional →</Link></div></section>

    <section className="cta"><p className="eyebrow pale">Contato inicial</p><h2>Quer saber sobre horários e valores?</h2><p>Envie uma mensagem breve. Não é necessário relatar questões clínicas pelo WhatsApp.</p><a className="button light" href={professionalContact.whatsappHref} target="_blank" rel="noreferrer">Conversar pelo WhatsApp</a></section>
  </main>;
}
