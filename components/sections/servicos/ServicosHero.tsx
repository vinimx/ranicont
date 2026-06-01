"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { EASING } from "@/lib/animations";

const TITLE_PARTS = [
  { text: "Nossos principais", gold: false },
  { text: "Serviços", gold: true },
] as const;

export function ServicosHero() {
  const ref = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const orbY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["0%", "45%"]
  );

  const orbY2 = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["0%", "28%"]
  );

  return (
    <section ref={ref} className="inner-hero">
      {/* Primary orb — right */}
      <motion.div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: "650px",
          height: "650px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,100,255,0.2) 0%, rgba(0,50,180,0.07) 50%, transparent 70%)",
          right: "-8%",
          top: "50%",
          translateY: "-50%",
          y: orbY,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Secondary orb — left gold accent */}
      <motion.div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: "380px",
          height: "380px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(201,162,39,0.14) 0%, transparent 65%)",
          left: "-4%",
          bottom: "10%",
          y: orbY2,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="container-site" style={{ position: "relative", zIndex: 1 }}>
        {/* Overline */}
        <motion.p
          className="overline overline--gold"
          style={{ marginBottom: "var(--space-6)", display: "block" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASING.smooth, delay: 0.15 }}
        >
          O que fazemos
        </motion.p>

        {/* Title */}
        <motion.h1
          className="empresa-hero__title"
          style={{ marginBottom: "var(--space-8)" }}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.18, delayChildren: 0.32 },
            },
          }}
        >
          {TITLE_PARTS.map((part) => (
            <motion.span
              key={part.text}
              className={part.gold ? "text-gold-gradient" : ""}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.65, ease: EASING.smooth },
                },
              }}
              style={{ display: "block" }}
            >
              {part.text}
            </motion.span>
          ))}
        </motion.h1>

        {/* Description */}
        <motion.p
          className="empresa-hero__desc"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.85, ease: EASING.smooth }}
        >
          Assessoria completa em contabilidade, gestão tributária, departamento
          pessoal e muito mais — tudo sob medida para o seu negócio.
        </motion.p>

        {/* Gold accent line */}
        <motion.div
          aria-hidden="true"
          style={{
            width: "48px",
            height: "2px",
            background: "var(--gradient-gold)",
            borderRadius: "2px",
            marginTop: "var(--space-8)",
            originX: 0,
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1, ease: EASING.smooth }}
        />
      </div>
    </section>
  );
}
