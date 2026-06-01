"use client";

import { motion } from "motion/react";
import { FaTable, FaFileAlt, FaUniversity, FaFileInvoice } from "react-icons/fa";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { EASING, VIEWPORT_DEFAULTS } from "@/lib/animations";

const DIFERENCIAIS = [
  {
    icon: <FaTable />,
    numero: "01",
    titulo: "Tabelas Práticas",
    descricao:
      "Acesso a tabelas fiscais e tributárias atualizadas para auxiliar na gestão do seu negócio com precisão e segurança.",
  },
  {
    icon: <FaFileAlt />,
    numero: "02",
    titulo: "Modelos de Documentos",
    descricao:
      "Biblioteca de modelos prontos para contratos, declarações e documentos fiscais, simplificando o dia a dia operacional.",
  },
  {
    icon: <FaUniversity />,
    numero: "03",
    titulo: "Instituições Financeiras",
    descricao:
      "Suporte e relacionamento para abertura de contas, linhas de crédito e operações com bancos e instituições parceiras.",
  },
  {
    icon: <FaFileInvoice />,
    numero: "04",
    titulo: "Emissão de Nota Fiscal",
    descricao:
      "Orientação e suporte completo para emissão de NF-e, NFS-e e demais documentos fiscais eletrônicos obrigatórios.",
  },
] as const;

export function DiferenciaisSection() {
  return (
    <section className="diferenciais-section">
      <div className="container-site">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto" }}>
          <motion.p
            className="overline"
            style={{ marginBottom: "var(--space-3)" }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_DEFAULTS}
            transition={{ duration: 0.5, ease: EASING.smooth }}
          >
            Por que escolher o Ranicont
          </motion.p>
          <AnimatedText
            text="Diferenciais que fazem a diferença"
            as="h2"
            className="section-title"
            delay={0.1}
            splitBy="word"
          />
          <motion.p
            className="body-text"
            style={{ marginTop: "var(--space-5)" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_DEFAULTS}
            transition={{ duration: 0.5, delay: 0.2, ease: EASING.smooth }}
          >
            Mais de 20 anos de experiência transformados em soluções práticas para o seu negócio.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="diferenciais-grid">
          {DIFERENCIAIS.map((item, i) => (
            <motion.div
              key={item.numero}
              className="diferencial-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_DEFAULTS}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASING.smooth }}
              whileHover={{ y: -4, transition: { duration: 0.25, ease: EASING.smooth } }}
            >
              {/* Background number */}
              <span className="diferencial-card__number" aria-hidden="true">
                {item.numero}
              </span>

              {/* Icon */}
              <motion.div
                className="diferencial-card__icon"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                aria-hidden="true"
              >
                {item.icon}
              </motion.div>

              <h3 className="diferencial-card__title">{item.titulo}</h3>
              <p className="diferencial-card__desc">{item.descricao}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
