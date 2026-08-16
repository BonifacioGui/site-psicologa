import type { Metadata } from "next";
import Link from "next/link";
import { AnchorNav } from "../components/AnchorNav";
import { PageHero } from "../components/PageHero";
import { professionalContact } from "../site";

export const metadata: Metadata = { title: "Atendimento psicológico", description: "Entenda a duração, os combinados e como funciona a primeira sessão de psicoterapia online." };

export default function Page() {
  return <main>
    <PageHero eyebrow="Atendimento" title="Informações claras desde o primeiro contato." intro="Sessões online pelo Google Meet ou Microsoft Teams, com duração aproximada de 45 minutos e horários definidos conforme disponibilidade e agendamento prévio." />
    <AnchorNav items={[
      { href: "#como-funciona", label: "Como funciona" },
      { href: "#primeira-sessao", label: "Primeira sessão" },
      { href: "#atendimento-online", label: "Atendimento online" },
      { href: "#valores-e-horarios", label: "Valores e horários" },
      { href: "#faq-atendimento", label: "FAQ" },
    ]} />
    <section className="content shell session-details">
      <div className="session-summary"><p className="eyebrow">Sobre as sessões</p><h2>45 minutos reservados para o acompanhamento.</h2><p>Os encontros acontecem online pelo Google Meet ou Microsoft Teams. Para preservar a privacidade e a qualidade da conversa, é importante estar em um ambiente reservado e utilizar uma conexão estável.</p></div>
      <div className="session-facts"><div><span>Modalidade</span><strong>Online</strong></div><div><span>Plataforma</span><strong>Google Meet ou Microsoft Teams</strong></div><div><span>Duração</span><strong>Aproximadamente 45 minutos</strong></div><div><span>Horário</span><strong>Conforme disponibilidade e agendamento prévio</strong></div></div>
    </section>
    <section id="como-funciona" className="therapy-process anchor-target"><div className="shell">
      <div className="process-heading"><div><p className="eyebrow">Como funciona</p><h2>O que acontece depois do primeiro contato?</h2></div><p>Você não precisa conhecer o processo terapêutico antes de começar. Cada etapa é explicada com clareza, e os combinados são construídos respeitando sua história e suas necessidades.</p></div>
      <div className="process-steps">
        <article className="process-step"><span>01</span><h3>Contato inicial</h3><p>Uma mensagem breve para conhecer horários, disponibilidade e valor, sem precisar relatar questões clínicas.</p></article>
        <article className="process-step"><span>02</span><h3>Acolhimento</h3><p>Na primeira sessão, conversamos sobre o que motivou a busca, sua trajetória, dificuldades e expectativas.</p></article>
        <article className="process-step"><span>03</span><h3>Sigilo e combinados</h3><p>Você recebe orientações sobre privacidade, contrato, horários, pagamentos, cancelamentos e responsabilidades.</p></article>
        <article className="process-step"><span>04</span><h3>Processo terapêutico</h3><p>Definimos prioridades, observamos padrões e acompanhamos objetivos que podem ser revistos ao longo da terapia.</p></article>
      </div>
    </div></section>
    <section id="primeira-sessao" className="content narrow shell prose anchor-target"><p className="eyebrow">Primeira sessão</p><h2>Um primeiro encontro para compreender sua trajetória.</h2><p>A primeira sessão é um momento para compreender melhor o que motivou a busca pela terapia, sua história, suas principais dificuldades e suas expectativas em relação ao acompanhamento.</p><p>É também um momento para acolher sua trajetória, esclarecer dúvidas e conversar sobre como será o processo. Você não precisa chegar com tudo organizado ou saber exatamente por onde começar.</p><h2>Depois do primeiro encontro</h2><p>A partir do que for conversado, avaliamos as prioridades iniciais e como o acompanhamento pode contribuir. Os objetivos são revistos ao longo do tempo, de acordo com as necessidades percebidas nas sessões.</p></section>
    <section id="atendimento-online" className="dark anchor-target"><div className="shell split"><div><p className="eyebrow pale">Atendimento online</p><h2>Privacidade e presença, mesmo à distância.</h2></div><div><p>As sessões são realizadas por videochamada pelo Google Meet ou Microsoft Teams. Para aproveitar melhor esse momento, procure um ambiente reservado, use fones de ouvido se isso aumentar sua privacidade e confira a estabilidade da conexão antes do horário combinado.</p><p>O link e as orientações práticas são informados antes do encontro.</p></div></div></section>
    <section id="valores-e-horarios" className="values-band anchor-target"><div className="shell split"><div><p className="eyebrow">Valores e horários</p><h2>Combinados registrados com transparência.</h2></div><div><p>O valor da sessão e os horários disponíveis são informados no contato inicial, em espaço reservado. A orientação profissional é que o preço não seja utilizado como forma de propaganda.</p><p>Antes do acompanhamento, você receberá um contrato ou termo de prestação de serviços psicológicos com os principais combinados.</p><ul><li>valor e forma de pagamento;</li><li>horários e atrasos;</li><li>cancelamentos e remarcações;</li><li>responsabilidades de ambas as partes.</li></ul></div></div></section>
    <section id="faq-atendimento" className="content shell faq-callout anchor-target"><div><p className="eyebrow">FAQ</p><h2>Ainda ficou alguma dúvida?</h2></div><div><p>Na página de dúvidas frequentes, você encontra informações sobre sigilo, duração do tratamento, Terapia Cognitivo-Comportamental e o papel da conversa na psicoterapia.</p><p><Link className="text-link" href="/faq">Ver dúvidas frequentes →</Link></p><p><a className="button" href={professionalContact.whatsappHref} target="_blank" rel="noreferrer">Tirar uma dúvida inicial</a></p></div></section>
  </main>;
}
