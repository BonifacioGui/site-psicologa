import type { Metadata } from "next";
import { InfoPage } from "../components/InfoPage";
import { pages } from "../content";

export const metadata: Metadata = {
  title: "Terapia Cognitivo-Comportamental (TCC)",
  description: "Entenda como funciona a Terapia Cognitivo-Comportamental (TCC), abordagem baseada em evidências que relaciona pensamentos, emoções e comportamentos.",
};

export default function Page() {
  return <InfoPage data={pages["abordagem-tcc"]} />;
}
