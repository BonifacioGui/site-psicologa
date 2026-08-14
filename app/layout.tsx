import type { Metadata } from "next";
import Link from "next/link";
import { professionalContact, siteUrl } from "./site";
import "@fontsource/dm-serif-display/400.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "./globals.css";
import "./revision.css";
import "./trajectory.css";
import "./interactions.css";
import "./refinements.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Ana Lívia Calado da Costa | Psicóloga", template: "%s | Ana Lívia Calado da Costa" },
  description: "Atendimento psicológico online para adolescentes e jovens adultos pela Terapia Cognitivo-Comportamental.",
  keywords: ["psicóloga online", "terapia para adolescentes", "TCC"],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Ana Lívia Calado da Costa | Psicóloga",
    title: "Ana Lívia Calado da Costa | Psicóloga",
    description: "Psicoterapia online para adolescentes e jovens adultos.",
    images: [{
      url: `${siteUrl}/og.png`,
      width: 1200,
      height: 630,
      alt: "Ana Lívia Calado da Costa, Psicóloga, CRP 02/34611",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ana Lívia Calado da Costa | Psicóloga",
    description: "Psicoterapia online para adolescentes e jovens adultos.",
    images: [`${siteUrl}/og.png`],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

const links = [["Sobre", "/sobre"], ["Atendimento", "/atendimento"], ["TCC", "/abordagem-tcc"], ["Conteúdos", "/conteudos"]];

export default function Layout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR"><body>
    <a className="skip" href="#conteudo">Pular para o conteúdo</a>
    <header><div className="shell nav"><Link className="brand" href="/"><small>Psicóloga</small>Ana Lívia</Link><nav aria-label="Navegação principal">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav><Link className="nav-button" href="/contato">Contato</Link></div></header>
    <div id="conteudo">{children}</div>
    <footer><div className="shell foot"><div><Link className="brand" href="/"><small>Psicóloga</small>Ana Lívia</Link><p>Ana Lívia Calado da Costa<br />CRP 02/34611 · Atendimento online</p></div><div><strong>Navegue</strong><Link href="/sobre">Sobre</Link><Link href="/atendimento">Atendimento</Link><Link href="/conteudos">Conteúdos</Link></div><div><strong>Contato</strong><Link href="/faq">Perguntas frequentes</Link><a href={professionalContact.whatsappHref} target="_blank" rel="noreferrer">WhatsApp</a><a href={`mailto:${professionalContact.email}`}>E-mail</a><Link href="/politica-de-privacidade">Privacidade</Link></div><div><strong>Importante</strong><p>Este site não oferece atendimento de urgência. Em risco imediato, ligue 192 ou 188 (CVV).</p></div></div><div className="shell copy">© 2026 Ana Lívia Calado da Costa · Conteúdo informativo; não substitui avaliação profissional.</div></footer>
  </body></html>;
}
