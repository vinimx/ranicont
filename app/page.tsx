import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { DiferenciaisSection } from "@/components/sections/home/DiferenciaisSection";
import { NumerosSection } from "@/components/sections/home/NumerosSection";
import { CTASection } from "@/components/sections/home/CTASection";

export const metadata: Metadata = {
  title: "Escritório Ranicont — Contabilidade em Avaré SP",
  description:
    "Escritório contábil em Avaré – SP com mais de 20 anos de experiência. Abertura de empresas, MEI, planejamento tributário, departamento pessoal e assessoria fiscal. Fale pelo WhatsApp.",
  openGraph: {
    title: "Escritório Ranicont — Contabilidade em Avaré SP",
    description:
      "Mais de 20 anos cuidando da saúde financeira das empresas em Avaré e região. Serviços contábeis, tributários e trabalhistas.",
    url: "/",
  },
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <DiferenciaisSection />
      <NumerosSection />
      <CTASection />
    </>
  );
}
