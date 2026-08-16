import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";
import { professionalContact } from "../site";

export const metadata: Metadata = {
  title: "Contato",
  description: "Contato para informações e disponibilidade de atendimento psicológico online com profissional sediada em Garanhuns, Pernambuco.",
};

export default function Page() {
  return <main>
    <PageHero eyebrow="Contato" title="O primeiro contato pode ser simples." intro="Escreva apenas seu nome e que deseja informações sobre atendimento. Detalhes pessoais e clínicos podem ficar para um ambiente apropriado." />
    <section className="content shell contact">
      <div>
        <a className="contact-link" href={professionalContact.whatsappHref} target="_blank" rel="noreferrer">
          <span className="eyebrow">WhatsApp profissional</span>
          <b>{professionalContact.whatsappDisplay} →</b>
          <small>Mensagem inicial neutra para informações e agendamento</small>
        </a>
        <a className="contact-link" href={`mailto:${professionalContact.email}`}>
          <span className="eyebrow">E-mail profissional</span>
          <b>{professionalContact.email} →</b>
          <small>Para informações administrativas sobre o atendimento</small>
        </a>
        <div className="contact-link">
          <span className="eyebrow">Instagram profissional</span>
          <b>{professionalContact.instagramDisplay}</b>
          <small>Perfil provisório — o endereço definitivo será inserido posteriormente</small>
        </div>
        <p>Profissional sediada em {professionalContact.locationDisplay}.<br />Horários mediante disponibilidade e agendamento prévio.<br />Atendimentos online pelo Google Meet, com duração aproximada de 45 minutos.</p>
      </div>
      <aside>
        <div className="notice"><strong>Proteja sua privacidade</strong><p>Não envie laudos, documentos, histórico médico, diagnóstico ou relatos detalhados. Estes canais são apenas para dúvidas e agendamento.</p></div>
        <div className="notice"><strong>Precisa de ajuda agora?</strong><p>Este canal não é monitorado continuamente. Em risco imediato, ligue 192, procure uma emergência ou converse com o CVV pelo 188.</p></div>
      </aside>
    </section>
  </main>;
}
