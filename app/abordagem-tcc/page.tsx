import type { Metadata } from "next";
import { InfoPage } from "../components/InfoPage";
import { pages } from "../content";

export const metadata: Metadata = {
  title: "Terapia Cognitivo-Comportamental",
  description: "Entenda como a TCC relaciona pensamentos, emoções e comportamentos em um processo colaborativo, acolhedor e baseado em evidências.",
};

export default function Page() {
  return <InfoPage data={pages["abordagem-tcc"]} />;
}
