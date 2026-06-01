"use client";

import { motion } from "motion/react";
import { CounterCard } from "@/components/ui/CounterCard";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { SITE } from "@/lib/data/site";
import { EASING, VIEWPORT_DEFAULTS } from "@/lib/animations";

export function NumerosSection() {
  return (
    <section className="numeros-section">
      <div className="container-site">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "var(--space-16)" }}>
          <motion.p
            className="overline overline--gold"
            style={{ marginBottom: "var(--space-3)" }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_DEFAULTS}
            transition={{ duration: 0.5, ease: EASING.smooth }}
          >
            Nossa trajetória
          </motion.p>
          <AnimatedText
            text="Números que falam por si"
            as="h2"
            className="section-title section-title--inverse"
            delay={0.1}
            splitBy="word"
          />
        </div>

        {/* Counter grid */}
        <div className="numeros-grid">
          {SITE.numeros.map((item, i) => (
            <CounterCard
              key={item.label}
              valor={item.valor}
              sufixo={item.sufixo}
              label={item.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
