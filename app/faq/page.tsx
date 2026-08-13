import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = { title: "Perguntas frequentes", description: "Dúvidas sobre psicoterapia online, sessões, contrato e sigilo." };
const faq = [
  ["Como funciona a primeira sessão?", "É um momento para compreender o que motivou a busca pela terapia, sua história, dificuldades e expectativas. Também acolhemos sua trajetória, esclarecemos dúvidas e conversamos sobre como será o processo."],
  ["Quanto tempo dura cada sessão?", "Cada sessão dura aproximadamente 45 minutos e acontece em horário previamente agendado e combinado com você."],
  ["Receberei um contrato?", "Sim. Antes do acompanhamento, você receberá um contrato ou termo com valores, pagamento, horários, atrasos, cancelamentos, remarcações e responsabilidades de ambas as partes."],
  ["O atendimento online é sigiloso?", "Sim. O atendimento segue os princípios éticos da profissão. Escolha um ambiente privado e use um dispositivo pessoal sempre que possível."],
  ["Como funciona para adolescentes?", "Há conversa inicial com responsáveis e combinados claros sobre participação e sigilo. O espaço terapêutico do adolescente é preservado, observados limites éticos e situações de risco."],
  ["Você atende emergências?", "Não. Este canal e as sessões agendadas não são serviços de emergência. Em risco imediato, acione o SAMU (192), uma emergência local ou o CVV (188)."],
  ["Como saber valores e horários?", "Envie uma mensagem breve pelos canais de contato. Informações administrativas podem ser conversadas sem relatar dados clínicos."],
];
export default function Page() { return <main><PageHero eyebrow="FAQ" title="Dúvidas também fazem parte do começo." intro="Veja respostas para perguntas comuns sobre o atendimento." /><section className="content narrow shell faq">{faq.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</section></main>; }
