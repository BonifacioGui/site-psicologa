import { professionalContact } from "../site";

export function RegistryLink() {
  return <a
    className="registry-link"
    href={professionalContact.registryHref}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Consultar o registro profissional CRP 02/34611 no Cadastro Nacional de Profissionais de Psicologia (abre em nova aba)"
  >
    CRP 02/34611
    <span aria-hidden="true">↗</span>
  </a>;
}
