import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";
import { faqEntries } from "../faq-data";

export const metadata: Metadata = {
  title: "Perguntas frequentes",
  description: "Dúvidas sobre primeira sessão, duração, atendimento online, sigilo, adolescentes, horários e valores.",
};

export default function Page() {
  return <main>
    <PageHero eyebrow="Perguntas frequentes" title="Informação também faz parte do cuidado." intro="Seis respostas diretas sobre o início da terapia, duração, atendimento online, adolescentes, sigilo, horários e valores." />
    <section className="content narrow shell faq faq-expanded">
      {faqEntries.map(({ question, answer }, index) => <details key={question} open={index === 0}>
        <summary>{question}</summary>
        <div className="faq-answer">{answer.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </details>)}
    </section>
  </main>;
}
