import type { Metadata } from "next";
import { FirstContactGuide } from "../components/FirstContactGuide";

export const metadata: Metadata = {
  title: "Primeiro contato",
  description: "Organize informações simples sobre modalidade, período e funcionamento antes de conversar pelo WhatsApp.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return <main>
    <section className="page-hero first-contact-hero">
      <div className="shell">
        <p className="eyebrow">Contato inicial</p>
        <h1>Seu primeiro contato pode ser simples.</h1>
        <p>Você não precisa explicar o que está vivendo agora. Estas informações servem apenas para facilitar a conversa sobre modalidade, horários e funcionamento do atendimento.</p>
      </div>
    </section>
    <section className="content shell first-contact-layout">
      <div className="first-contact-intro">
        <p className="index">Sem triagem clínica</p>
        <h2>Escolha apenas o que ajuda a começar a conversa.</h2>
        <p>As respostas não são salvas nem enviadas ao site. Elas serão usadas somente para montar a mensagem quando você decidir continuar pelo WhatsApp.</p>
      </div>
      <FirstContactGuide />
    </section>
  </main>;
}
