import type { Metadata } from "next";
import { InfoPage } from "../components/InfoPage";
import { pages } from "../content";

export const metadata: Metadata = {
  title: "Psicoterapia para jovens adultos",
  description: "Psicoterapia online para jovens adultos com foco em ansiedade, autoestima, autocobrança, relacionamentos e transições da vida adulta.",
};

export default function Page() {
  return <InfoPage data={pages["jovens-adultos"]} />;
}
