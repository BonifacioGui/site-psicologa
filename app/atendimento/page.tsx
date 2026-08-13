import type { Metadata } from "next";
import Link from "next/link";
import { AnchorNav } from "../components/AnchorNav";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = { title: "Atendimento psicológico", description: "Entenda a duração, os combinados e como funciona a primeira sessão de psicoterapia online." };

export default function Page() {
  return <main>
    <PageHero eyebrow="Atendimento" title="Informações claras desde o primeiro contato." intro="Sessões online com duração aproximada de 45 minutos, realizadas em horários previamente agendados e combinados com você." />
    <AnchorNav items={[
      { href: "#como-funciona", label: "Como funciona" },
      { href: "#primeira-sessao", label: "Primeira sessão" },
      { href: "#atendimento-online", label: "Atendimento online" },
      { href: "#valores-e-horarios", label: "Valores e horários" },
      { href: "#faq-atendimento", label: "FAQ" },
    ]} />
    <section id="como-funciona" className="content shell session-details anchor-target">
      <div className="session-summary"><p className="eyebrow">Sobre as sessões</p><h2>45 minutos reservados para o acompanhamento.</h2><p>Os encontros acontecem online, em horários previamente agendados. Para preservar a privacidade e a qualidade da conversa, é importante estar em um ambiente reservado e utilizar uma conexão estável.</p></div>
      <div className="session-facts"><div><span>Modalidade</span><strong>Online</strong></div><div><span>Duração</span><strong>Aproximadamente 45 minutos</strong></div><div><span>Horário</span><strong>Previamente agendado</strong></div></div>
    </section>
    <section id="primeira-sessao" className="content narrow shell prose anchor-target"><p className="eyebrow">Primeira sessão</p><h2>Um primeiro encontro para compreender sua trajetória.</h2><p>A primeira sessão é um momento para compreender melhor o que motivou a busca pela terapia, sua história, suas principais dificuldades e suas expectativas em relação ao acompanhamento.</p><p>É também um momento para acolher sua trajetória, esclarecer dúvidas e conversar sobre como será o processo. Você não precisa chegar com tudo organizado ou saber exatamente por onde começar.</p><h2>Depois do primeiro encontro</h2><p>A partir do que for conversado, avaliamos as prioridades iniciais e como o acompanhamento pode contribuir. Os objetivos são revistos ao longo do tempo, de acordo com as necessidades percebidas nas sessões.</p></section>
    <section id="atendimento-online" className="dark anchor-target"><div className="shell split"><div><p className="eyebrow pale">Atendimento online</p><h2>Privacidade e presença, mesmo à distância.</h2></div><div><p>As sessões são realizadas por videochamada. Para aproveitar melhor esse momento, procure um ambiente reservado, use fones de ouvido se isso aumentar sua privacidade e confira a estabilidade da conexão antes do horário combinado.</p><p>O link e as orientações práticas são informados antes do encontro.</p></div></div></section>
    <section id="valores-e-horarios" className="values-band anchor-target"><div className="shell split"><div><p className="eyebrow">Valores e horários</p><h2>Combinados registrados com transparência.</h2></div><div><p>A disponibilidade, os valores e a forma de pagamento são informados no contato inicial. Antes do acompanhamento, você receberá um contrato ou termo de prestação de serviços psicológicos com os principais combinados.</p><ul><li>valores e forma de pagamento;</li><li>horários e atrasos;</li><li>cancelamentos e remarcações;</li><li>responsabilidades de ambas as partes.</li></ul></div></div></section>
    <section id="faq-atendimento" className="content shell faq-callout anchor-target"><div><p className="eyebrow">FAQ</p><h2>Ainda ficou alguma dúvida?</h2></div><div><p>Na página de dúvidas frequentes, você encontra informações sobre sigilo, duração do tratamento, Terapia Cognitivo-Comportamental e o papel da conversa na psicoterapia.</p><p><Link className="text-link" href="/faq">Ver dúvidas frequentes →</Link></p><p><Link className="button" href="/contato">Tirar uma dúvida inicial</Link></p></div></section>
  </main>;
}
