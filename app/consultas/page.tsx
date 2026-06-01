import type { Metadata } from "next";
import { ConsultasHero } from "@/components/sections/consultas/ConsultasHero";
import { ConsultasGrid } from "@/components/sections/consultas/ConsultasGrid";

export const metadata: Metadata = {
  title: "Consultas",
  description:
    "Links úteis para consultas contábeis e fiscais: SEFAZ SP, Receita Federal, Simples Nacional, eSocial, MEI, CNAE e muito mais — reunidos pelo Escritório Ranicont.",
  openGraph: {
    title: "Consultas Contábeis | Escritório Ranicont",
    description:
      "Acesso rápido aos principais portais governamentais: Receita Federal, SEFAZ SP, JUCESP, Simples Nacional, eSocial e muito mais.",
    url: "/consultas",
  },
  alternates: { canonical: "/consultas" },
};

export default function ConsultasPage() {
  return (
    <>
      <ConsultasHero />
      <ConsultasGrid />
    </>
  );
}
