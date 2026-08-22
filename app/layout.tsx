/* Full-page navigation avoids the vinext RSC link interception failure in the hosted build. */
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
import "./theme.css";
import { BrandLogo } from "./components/BrandLogo";
import { ThemeToggle } from "./components/ThemeToggle";
import { RegistryLink } from "./components/RegistryLink";

const themeScript = `(() => {
  const key = "ana-livia-theme";
  const media = matchMedia("(prefers-color-scheme: dark)");
  const getSaved = () => {
    try {
      const saved = localStorage.getItem(key);
      return saved === "light" || saved === "dark" ? saved : null;
    } catch {
      return null;
    }
  };
  const updateButton = (theme) => {
    const button = document.querySelector("[data-theme-toggle]");
    if (!button) return;
    const isDark = theme === "dark";
    const label = isDark ? "Ativar modo claro" : "Ativar modo escuro";
    button.setAttribute("aria-label", label);
    button.setAttribute("aria-pressed", String(isDark));
    button.setAttribute("title", label);
  };
  const applyTheme = (theme, persist = false) => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    updateButton(theme);
    if (persist) {
      try { localStorage.setItem(key, theme); } catch {}
    }
  };
  const initialTheme = getSaved() || (media.matches ? "dark" : "light");
  applyTheme(initialTheme);
  const bindToggle = () => {
    const button = document.querySelector("[data-theme-toggle]");
    if (!button || button.dataset.bound === "true") return;
    button.dataset.bound = "true";
    updateButton(document.documentElement.dataset.theme || initialTheme);
    button.addEventListener("click", () => {
      const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      applyTheme(nextTheme, true);
    });
    media.addEventListener("change", (event) => {
      if (!getSaved()) applyTheme(event.matches ? "dark" : "light");
    });
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindToggle, { once: true });
  } else {
    bindToggle();
  }
})();`;

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
  icons: { icon: "/brand/monograma-light.svg" },
};

const links = [["Sobre", "/sobre"], ["Atendimento", "/atendimento"], ["TCC", "/abordagem-tcc"]];
const mobileLinks = [["Início", "/"], ...links, ["FAQ", "/faq"]];

export default function Layout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR" suppressHydrationWarning><head><script id="theme-init" dangerouslySetInnerHTML={{ __html: themeScript }} /></head><body>
    <a className="skip" href="#conteudo">Pular para o conteúdo</a>
    <header><div className="shell nav">
      <BrandLogo placement="header" />
      <nav aria-label="Navegação principal">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
      <ThemeToggle />
      <a className="nav-button" href="/contato">Contato</a>
      <details className="mobile-menu">
        <summary aria-label="Menu de navegação"><span className="mobile-menu-label">Menu</span><span className="mobile-menu-icon" aria-hidden="true" /></summary>
        <nav className="mobile-menu-panel" aria-label="Navegação móvel">{mobileLinks.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
      </details>
    </div></header>
    <div id="conteudo">{children}</div>
    <footer><div className="shell foot"><div><BrandLogo placement="footer" /><p>Ana Lívia Calado da Costa<br /><RegistryLink /> · Atendimento online<br />{professionalContact.locationDisplay}</p></div><div><strong>Navegue</strong><a href="/sobre">Sobre</a><a href="/atendimento">Atendimento</a></div><div><strong>Contato</strong><a href="/faq">Perguntas frequentes</a><a href={professionalContact.whatsappHref} target="_blank" rel="noreferrer">WhatsApp</a><a href={professionalContact.gmailHref} target="_blank" rel="noreferrer">E-mail</a><a href={professionalContact.instagramHref} target="_blank" rel="noreferrer">Instagram: {professionalContact.instagramDisplay}</a><a href="/politica-de-privacidade">Privacidade</a></div><div><strong>Importante</strong><p>Este site não oferece atendimento de urgência. Em risco imediato, ligue 192 ou 188 (CVV).</p></div></div><div className="shell copy">© 2026 Ana Lívia Calado da Costa · Conteúdo informativo; não substitui avaliação profissional.</div></footer>
  </body></html>;
}
