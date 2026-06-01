import type { Metadata } from "next";
import { ContatoHero } from "@/components/sections/contato/ContatoHero";
import { ContatoInfo } from "@/components/sections/contato/ContatoInfo";
import { ContatoForm } from "@/components/sections/contato/ContatoForm";
import { ContatoMapa } from "@/components/sections/contato/ContatoMapa";
import styles from "@/components/sections/contato/Contato.module.css";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com o Escritório Ranicont em Avaré – SP. Fale pelo WhatsApp, telefone ou e-mail. Av. Prof. Celso Ferreira da Silva, 786 — Jardim Europa, Avaré SP.",
  openGraph: {
    title: "Contato | Escritório Ranicont",
    description:
      "Fale com o Escritório Ranicont pelo WhatsApp, telefone ou e-mail. Localizado na Av. Prof. Celso Ferreira da Silva, 786 — Avaré SP.",
    url: "/contato",
  },
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  return (
    <>
      <ContatoHero />

      <section className={styles.contatoSection}>
        <div className="container-site">
          <div className={styles.contatoGrid}>
            <ContatoInfo />
            <ContatoForm />
          </div>
        </div>
      </section>

      <ContatoMapa />
    </>
  );
}
