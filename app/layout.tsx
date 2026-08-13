import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import "./revision.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.exemplo-psicologia.com.br"),
  title: { default: "Ana Lívia Calado da Costa | Psicóloga", template: "%s | Ana Lívia Calado da Costa" },
  description: "Atendimento psicológico online para adolescentes e jovens adultos pela Terapia Cognitivo-Comportamental.",
  keywords: ["psicóloga online", "terapia para adolescentes", "TCC"],
  openGraph: { type: "website", locale: "pt_BR", title: "Ana Lívia Calado da Costa | Psicóloga", description: "Atendimento psicológico online para adolescentes e jovens adultos." },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

const links = [["Sobre", "/sobre"], ["Atendimento", "/atendimento"], ["TCC", "/abordagem-tcc"], ["Conteúdos", "/conteudos"]];

export default function Layout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR"><body>
    <a className="skip" href="#conteudo">Pular para o conteúdo</a>
    <header><div className="shell nav"><Link className="brand" href="/"><small>Psicóloga</small>Ana Lívia</Link><nav aria-label="Navegação principal">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav><Link className="nav-button" href="/contato">Contato</Link></div></header>
    <div id="conteudo">{children}</div>
    <footer><div className="shell foot"><div><Link className="brand" href="/"><small>Psicóloga</small>Ana Lívia</Link><p>Ana Lívia Calado da Costa<br />CRP 02/34611 · Atendimento online</p></div><div><strong>Navegue</strong><Link href="/sobre">Sobre</Link><Link href="/atendimento">Atendimento</Link><Link href="/conteudos">Conteúdos</Link></div><div><strong>Informações</strong><Link href="/faq">Perguntas frequentes</Link><Link href="/politica-de-privacidade">Privacidade</Link><Link href="/contato">Contato</Link></div><div><strong>Importante</strong><p>Este site não oferece atendimento de urgência. Em risco imediato, ligue 192 ou 188 (CVV).</p></div></div><div className="shell copy">© 2026 Ana Lívia Calado da Costa · Conteúdo informativo; não substitui avaliação profissional.</div></footer>
  </body></html>;
}
