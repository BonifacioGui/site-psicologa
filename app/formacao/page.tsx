import type { Metadata } from "next";
import { InfoPage } from "../components/InfoPage";
import { pages } from "../content";

export const metadata: Metadata = {
  title: "Formação e trajetória",
  description: "Conheça a formação em Psicologia, o estágio clínico em TCC e o projeto de extensão de Ana Lívia Calado da Costa.",
};

export default function Page() {
  return <InfoPage data={pages.formacao} />;
}
