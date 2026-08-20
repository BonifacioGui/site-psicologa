/* SVGs locais preservam a nitidez da marca em qualquer densidade de tela. */
/* eslint-disable @next/next/no-img-element, @next/next/no-html-link-for-pages */

type BrandLogoProps = {
  placement: "header" | "footer";
};

export function BrandLogo({ placement }: BrandLogoProps) {
  const isHeader = placement === "header";

  return <a
    className={`brand brand-logo brand-logo-${placement}`}
    href="/"
    aria-label="Ana Lívia Psicologia — página inicial"
  >
    <span className="brand-logo-art" aria-hidden="true">
      {isHeader && <>
        <img className="brand-logo-image brand-logo-horizontal brand-logo-light" src="/brand/horizontal-light.svg" alt="" />
        <img className="brand-logo-image brand-logo-horizontal brand-logo-dark" src="/brand/horizontal-dark.svg" alt="" />
        <img className="brand-logo-image brand-logo-monogram brand-logo-light" src="/brand/monograma-light.svg" alt="" />
        <img className="brand-logo-image brand-logo-monogram brand-logo-dark" src="/brand/monograma-dark.svg" alt="" />
      </>}
      {!isHeader && <img className="brand-logo-image" src="/brand/logo-completa-dark.svg" alt="" />}
    </span>
    <span className="brand-logo-fallback">Ana Lívia Psicologia</span>
  </a>;
}
