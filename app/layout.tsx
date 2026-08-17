/* Full-page navigation avoids the vinext RSC link interception failure in the hosted build. */
/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
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
import "./livia-suggestions.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Ana Lívia Calado da Costa | Psicóloga", template: "%s | Ana Lívia Calado da Costa" },
  description: "Atendimento psicológico online para adolescentes e jovens adultos com psicóloga sediada em Garanhuns, Pernambuco, pela Terapia Cognitivo-Comportamental.",
  keywords: ["psicóloga online", "psicóloga em Garanhuns", "psicóloga Garanhuns PE", "terapia para adolescentes", "TCC"],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Ana Lívia Calado da Costa | Psicóloga",
    title: "Ana Lívia Calado da Costa | Psicóloga",
    description: "Psicoterapia online para adolescentes e jovens adultos com profissional sediada em Garanhuns, Pernambuco.",
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
    description: "Psicoterapia online para adolescentes e jovens adultos com profissional sediada em Garanhuns, Pernambuco.",
    images: [`${siteUrl}/og.png`],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

const links = [["Sobre", "/sobre"], ["Atendimento", "/atendimento"], ["TCC", "/abordagem-tcc"], ["Conteúdos", "/conteudos"]];
const mobileLinks = [["Início", "/"], ...links, ["FAQ", "/faq"]];

export default function Layout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR"><body>
    <a className="skip" href="#conteudo">Pular para o conteúdo</a>
    <header><div className="shell nav">
      <a className="brand" href="/"><small>Psicóloga</small>Ana Lívia</a>
      <nav aria-label="Navegação principal">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
      <a className="nav-button" href="/contato">Contato</a>
      <details className="mobile-menu">
        <summary aria-label="Menu de navegação"><span className="mobile-menu-label">Menu</span><span className="mobile-menu-icon" aria-hidden="true" /></summary>
        <nav className="mobile-menu-panel" aria-label="Navegação móvel">{mobileLinks.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
      </details>
    </div></header>
    <div id="conteudo">{children}</div>
    <footer><div className="shell foot"><div><a className="brand" href="/"><small>Psicóloga</small>Ana Lívia</a><p>Ana Lívia Calado da Costa<br />CRP 02/34611 · Atendimento online<br />{professionalContact.locationDisplay}</p></div><div><strong>Navegue</strong><a href="/sobre">Sobre</a><a href="/atendimento">Atendimento</a><a href="/conteudos">Conteúdos</a></div><div><strong>Contato</strong><a href="/faq">Perguntas frequentes</a><a href={professionalContact.whatsappHref} target="_blank" rel="noreferrer">WhatsApp</a><a href={`mailto:${professionalContact.email}`}>E-mail</a><a href={professionalContact.instagramHref} target="_blank" rel="noreferrer">Instagram: {professionalContact.instagramDisplay}</a><a href="/politica-de-privacidade">Privacidade</a></div><div><strong>Importante</strong><p>Este site não oferece atendimento de urgência. Em risco imediato, ligue 192 ou 188 (CVV).</p></div></div><div className="shell copy">© 2026 Ana Lívia Calado da Costa · Conteúdo informativo; não substitui avaliação profissional.</div></footer>
  </body></html>;
}
