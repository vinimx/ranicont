"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { EASING } from "@/lib/animations";

const TITLE_PARTS = [
  { text: "Entre em", gold: false },
  { text: "Contato", gold: true },
] as const;

export function ContatoHero() {
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
    shouldReduceMotion ? ["0%", "0%"] : ["0%", "30%"]
  );

  return (
    <section ref={ref} className="inner-hero">
      {/* Primary orb — right */}
      <motion.div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: "580px",
          height: "580px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,100,255,0.2) 0%, rgba(0,50,180,0.07) 50%, transparent 70%)",
          right: "-5%",
          top: "45%",
          translateY: "-50%",
          y: orbY,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Gold orb — bottom-left */}
      <motion.div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: "340px",
          height: "340px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(201,162,39,0.13) 0%, transparent 65%)",
          left: "-2%",
          bottom: "5%",
          y: orbY2,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="container-site" style={{ position: "relative", zIndex: 1 }}>
        <motion.p
          className="overline overline--gold"
          style={{ marginBottom: "var(--space-6)", display: "block" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASING.smooth, delay: 0.15 }}
        >
          Fale conosco
        </motion.p>

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

        <motion.p
          className="empresa-hero__desc"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.85, ease: EASING.smooth }}
        >
          Estamos prontos para atender a sua empresa. Preencha o formulário ou
          use um dos nossos canais diretos — respondemos com agilidade.
        </motion.p>

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
