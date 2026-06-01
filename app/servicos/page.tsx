import type { Metadata } from "next";
import { ServicosHero } from "@/components/sections/servicos/ServicosHero";
import { ServicosGrid } from "@/components/sections/servicos/ServicosGrid";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Assessoria contábil, planejamento tributário, departamento pessoal, abertura de empresas e regularização fiscal em Avaré – SP. Conheça os serviços da Ranicont.",
  openGraph: {
    title: "Serviços | Escritório Ranicont",
    description:
      "Do planejamento à execução — cuidamos de cada detalhe para que você foque no crescimento da sua empresa.",
    url: "/servicos",
  },
  alternates: { canonical: "/servicos" },
};

export default function ServicosPage() {
  return (
    <>
      <ServicosHero />
      <ServicosGrid />
    </>
  );
}
