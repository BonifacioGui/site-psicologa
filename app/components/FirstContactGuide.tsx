"use client";

import type { FormEvent } from "react";
import { professionalContact } from "../site";

const contactOptions = [
  {
    legend: "Para quem é o atendimento?",
    name: "audience",
    options: ["Adolescente", "Jovem adulto", "Adulto", "Prefiro conversar antes"],
  },
  {
    legend: "Melhor período",
    name: "period",
    options: ["Manhã", "Tarde", "Noite", "Ainda não sei"],
  },
  {
    legend: "Sobre o que deseja informação?",
    name: "subject",
    options: ["Valores e horários", "Como funciona o atendimento", "Atendimento para adolescente", "Outro"],
  },
] as const;

export function FirstContactGuide() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const audience = data.get("audience");
    const period = data.get("period");
    const subject = data.get("subject");

    if (!audience || !period || !subject) return;

    const message = [
      "Olá, Ana Lívia! Gostaria de informações sobre atendimento psicológico.",
      "",
      `Atendimento para: ${audience}`,
      `Melhor período: ${period}`,
      `Gostaria de saber sobre: ${subject}`,
    ].join("\n");
    const whatsappUrl = `https://wa.me/5587981709760?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return <form className="first-contact-form" onSubmit={handleSubmit}>
    {contactOptions.map(({ legend, name, options }, groupIndex) => <fieldset className="contact-choice-group" key={name}>
      <legend><span aria-hidden="true">0{groupIndex + 1}</span>{legend}</legend>
      <div className="contact-choice-options">
        {options.map((option, optionIndex) => {
          const id = `${name}-${optionIndex}`;
          return <label className="contact-choice" htmlFor={id} key={option}>
            <input id={id} name={name} type="radio" value={option.toLocaleLowerCase("pt-BR")} required={optionIndex === 0} />
            <span>{option}</span>
          </label>;
        })}
      </div>
    </fieldset>)}
    <div className="first-contact-actions">
      <button className="button" type="submit">Continuar pelo WhatsApp →</button>
      <a className="text-link" href={professionalContact.whatsappHref} target="_blank" rel="noopener noreferrer">Prefiro conversar diretamente pelo WhatsApp ↗</a>
    </div>
    <p className="contact-privacy-note">Não compartilhe informações clínicas ou dados sensíveis por este formulário.</p>
  </form>;
}
