const registryUrl = "https://cadastro.cfp.org.br/";

type RegistryLinkProps = {
  label?: "registration" | "verification";
};

export function RegistryLink({ label = "registration" }: RegistryLinkProps) {
  return <a
    className={`registry-link registry-link-${label}`}
    href={registryUrl}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Consultar o registro profissional CRP 02/34611 no Cadastro Nacional de Profissionais de Psicologia (abre em nova aba)"
  >
    {label === "registration" ? "CRP 02/34611" : "Consultar registro no CFP"}
    <span aria-hidden="true">↗</span>
  </a>;
}
