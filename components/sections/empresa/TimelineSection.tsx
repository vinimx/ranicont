"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { EASING, VIEWPORT_DEFAULTS } from "@/lib/animations";

const TIMELINE = [
  {
    ano: "2005",
    titulo: "Fundação do Escritório",
    descricao:
      "O Escritório Ranicont nasce em Avaré com o propósito de oferecer contabilidade de excelência para micro e pequenos empresários da região.",
  },
  {
    ano: "2008",
    titulo: "Modernização Digital",
    descricao:
      "Adoção de sistemas digitais integrados — declarações eletrônicas, NF-e e relatórios automatizados — agilizando o atendimento.",
  },
  {
    ano: "2012",
    titulo: "100 Clientes Ativos",
    descricao:
      "Marco expressivo de 100 clientes ativos, consolidando o Ranicont como referência em contabilidade no interior paulista.",
  },
  {
    ano: "2015",
    titulo: "Consultoria Tributária",
    descricao:
      "Lançamento do serviço de consultoria tributária, auxiliando empresas a otimizar sua carga fiscal e aproveitar incentivos legais.",
  },
  {
    ano: "2024",
    titulo: "Trabalho com Produtores Rurais",
    descricao:
      "Expansão dos serviços para atender produtores rurais, oferecendo soluções contábeis especializadas para o setor agrícola.",
  },
  {
    ano: "2026",
    titulo: "20 Anos de Excelência",
    descricao:
      "Duas décadas de dedicação. Mais de 100 clientes ativos em mais de 10 municípios — e o mesmo compromisso com a saúde do seu negócio.",
  },
] as const;

export function TimelineSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll-driven track line growth
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 30%"],
  });

  const trackScaleY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [1, 1] : [0, 1]
  );

  return (
    <section ref={sectionRef} className="timeline-section">
      <div className="container-site">
        {/* Section header */}
        <div style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto" }}>
          <motion.p
            className="overline overline--gold"
            style={{ marginBottom: "var(--space-3)", display: "block" }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_DEFAULTS}
            transition={{ duration: 0.5, ease: EASING.smooth }}
          >
            Nossa história
          </motion.p>

          <AnimatedText
            text="Duas décadas de dedicação"
            as="h2"
            className="section-title section-title--inverse"
            delay={0.1}
            splitBy="word"
          />

          <motion.p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-base)",
              color: "rgba(255,255,255,0.62)",
              lineHeight: "var(--leading-relaxed)",
              marginTop: "var(--space-5)",
            }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_DEFAULTS}
            transition={{ duration: 0.5, delay: 0.25, ease: EASING.smooth }}
          >
            Uma trajetória construída com consistência, inovação e o propósito de fazer
            a diferença na vida dos nossos clientes.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="timeline">
          {/* Track line — grows with scroll */}
          <motion.div
            className="timeline__track"
            style={{ scaleY: trackScaleY }}
            aria-hidden="true"
          />

          {TIMELINE.map((item, i) => (
            <motion.div
              key={item.ano}
              className="timeline-item"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-5% 0px" }}
              transition={{
                duration: 0.55,
                delay: i * 0.06,
                ease: EASING.smooth,
              }}
            >
              {/* Gold dot — pops in with spring */}
              <motion.div
                className="timeline-dot"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-5% 0px" }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 22,
                  delay: i * 0.06 + 0.15,
                }}
                aria-hidden="true"
              />

              <p className="timeline-item__year">{item.ano}</p>
              <h3 className="timeline-item__title">{item.titulo}</h3>
              <p className="timeline-item__desc">{item.descricao}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
