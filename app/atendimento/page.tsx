import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = { title: "Atendimento psicológico", description: "Entenda a duração, os combinados e como funciona a primeira sessão de psicoterapia online." };

export default function Page() {
  return <main>
    <PageHero eyebrow="Atendimento" title="Informações claras desde o primeiro contato." intro="Sessões online com duração aproximada de 45 minutos, realizadas em horários previamente agendados e combinados com você." />
    <section className="content shell session-details">
      <div className="session-summary"><p className="eyebrow">Sobre as sessões</p><h2>45 minutos reservados para o acompanhamento.</h2><p>Os encontros acontecem online, em horários previamente agendados. Para preservar a privacidade e a qualidade da conversa, é importante estar em um ambiente reservado e utilizar uma conexão estável.</p></div>
      <div className="session-facts"><div><span>Modalidade</span><strong>Online</strong></div><div><span>Duração</span><strong>Aproximadamente 45 minutos</strong></div><div><span>Horário</span><strong>Previamente agendado</strong></div></div>
    </section>
    <section className="contract-band"><div className="shell split"><div><p className="eyebrow pale">Antes de começar</p><h2>Combinados registrados com transparência.</h2></div><div><p>Antes do início do acompanhamento, você receberá um contrato ou termo de prestação de serviços psicológicos. Nele estarão descritas as principais informações sobre o processo terapêutico.</p><ul><li>valores e forma de pagamento;</li><li>horários e atrasos;</li><li>cancelamentos e remarcações;</li><li>responsabilidades de ambas as partes.</li></ul></div></div></section>
    <section className="content narrow shell prose"><p className="eyebrow">Primeira sessão</p><h2>Um primeiro encontro para compreender sua trajetória.</h2><p>A primeira sessão é um momento para compreender melhor o que motivou a busca pela terapia, sua história, suas principais dificuldades e suas expectativas em relação ao acompanhamento.</p><p>É também um momento para acolher sua trajetória, esclarecer dúvidas e conversar sobre como será o processo. Você não precisa chegar com tudo organizado ou saber exatamente por onde começar.</p><h2>Depois do primeiro encontro</h2><p>A partir do que for conversado, avaliamos as prioridades iniciais e como o acompanhamento pode contribuir. Os objetivos são revistos ao longo do tempo, de acordo com as necessidades percebidas nas sessões.</p><p><Link className="button" href="/contato">Tirar uma dúvida inicial</Link></p></section>
  </main>;
}
