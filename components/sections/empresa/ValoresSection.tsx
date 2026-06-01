"use client";

import { motion } from "motion/react";
import { FaBalanceScale, FaMedal, FaEye, FaChartLine } from "react-icons/fa";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { EASING, VIEWPORT_DEFAULTS } from "@/lib/animations";

const VALORES = [
  {
    icon: <FaBalanceScale aria-hidden="true" />,
    titulo: "Ética",
    descricao:
      "Agimos com integridade em cada orientação, priorizando sempre o que é correto, legal e benéfico para o seu negócio — sem atalhos.",
  },
  {
    icon: <FaMedal aria-hidden="true" />,
    titulo: "Qualidade",
    descricao:
      "Equipe certificada pelo CFC e em constante atualização técnica, garantindo serviços precisos, no prazo e dentro das normas vigentes.",
  },
  {
    icon: <FaEye aria-hidden="true" />,
    titulo: "Transparência",
    descricao:
      "Comunicação clara sobre honorários, prazos e obrigações — sem surpresas, sem letras miúdas. Você sempre sabe o que está acontecendo.",
  },
  {
    icon: <FaChartLine aria-hidden="true" />,
    titulo: "Economia",
    descricao:
      "Planejamento tributário estratégico que reduz sua carga fiscal de forma legal e eficiente, aumentando a competitividade da sua empresa.",
  },
] as const;

export function ValoresSection() {
  return (
    <section className="valores-section">
      <div className="container-site">
        {/* Section header */}
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
          <motion.p
            className="overline"
            style={{ marginBottom: "var(--space-3)", display: "block" }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_DEFAULTS}
            transition={{ duration: 0.5, ease: EASING.smooth }}
          >
            Nossos princípios
          </motion.p>

          <AnimatedText
            text="Valores que guiam cada decisão"
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
            transition={{ duration: 0.5, delay: 0.25, ease: EASING.smooth }}
          >
            Mais de 20 anos de história sustentados por princípios sólidos que colocam
            o cliente sempre em primeiro lugar.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="valores-grid">
          {VALORES.map((item, i) => (
            <motion.div
              key={item.titulo}
              className="valor-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_DEFAULTS}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASING.smooth }}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: EASING.smooth } }}
            >
              <motion.div
                className="valor-card__icon-wrap"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                {item.icon}
              </motion.div>

              <h3 className="valor-card__title">{item.titulo}</h3>
              <p className="valor-card__desc">{item.descricao}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
