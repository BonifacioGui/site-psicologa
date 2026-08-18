import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";
import { professionalContact } from "../site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Saiba como este site informativo trata privacidade, dados técnicos e contatos externos por WhatsApp e e-mail.",
};

export default function Page() {
  return <main><PageHero eyebrow="Privacidade" title="Seus dados merecem cuidado." intro="Esta versão do site foi projetada para coletar o mínimo possível de informações." /><section className="content narrow shell prose"><p><strong>Última atualização: 13 de agosto de 2026.</strong></p><h2>Sobre este site</h2><p>Este é um site informativo. Não há cadastro, login, formulário clínico, banco de dados ou armazenamento próprio de mensagens nesta versão.</p><h2>Contato por serviços externos</h2><p>Ao escolher e-mail ou WhatsApp, você utiliza serviços de terceiros, sujeitos às políticas dessas plataformas. Envie apenas informações administrativas mínimas e evite dados sensíveis de saúde.</p><h2>Dados técnicos</h2><p>O provedor de hospedagem pode processar registros técnicos essenciais, como endereço IP, data, hora e navegador, para segurança e funcionamento. Se métricas ou cookies forem adicionados, esta política deverá ser revisada.</p><h2>Seus direitos e contato</h2><p>Você pode solicitar informações, correção ou exclusão de dados eventualmente mantidos nos canais profissionais, observadas as obrigações legais e profissionais. Para assuntos relacionados a esta política, escreva para <a className="text-link" href={professionalContact.gmailHref} target="_blank" rel="noreferrer">{professionalContact.email}</a>.</p></section></main>;
}
