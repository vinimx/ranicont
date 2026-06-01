import type { Metadata } from "next";
import { EmpresaHero } from "@/components/sections/empresa/EmpresaHero";
import { ValoresSection } from "@/components/sections/empresa/ValoresSection";
import { TimelineSection } from "@/components/sections/empresa/TimelineSection";

export const metadata: Metadata = {
  title: "A Empresa",
  description:
    "Conheça o Escritório Ranicont — mais de 20 anos de experiência contábil em Avaré SP. Ética, qualidade, transparência e economia como pilares do nosso trabalho.",
  openGraph: {
    title: "A Empresa | Escritório Ranicont",
    description:
      "Mais de 20 anos dedicados à saúde financeira das empresas em Avaré e região — com ética, precisão e atendimento personalizado.",
    url: "/empresa",
  },
  alternates: { canonical: "/empresa" },
};

export default function EmpresaPage() {
  return (
    <>
      <EmpresaHero />
      <ValoresSection />
      <TimelineSection />
    </>
  );
}
