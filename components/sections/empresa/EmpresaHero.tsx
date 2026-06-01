"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { EASING } from "@/lib/animations";

// Words that get gold gradient treatment
const TITLE_PARTS = [
  { text: "Seu negócio", gold: false },
  { text: "em boas mãos!", gold: true },
] as const;

export function EmpresaHero() {
  const ref = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const orbY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["0%", "40%"]
  );

  return (
    <section ref={ref} className="inner-hero">
      {/* Parallax glow orb */}
      <motion.div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,100,255,0.22) 0%, rgba(0,60,200,0.08) 50%, transparent 70%)",
          right: "-10%",
          top: "50%",
          translateY: "-50%",
          y: orbY,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Secondary orb — left side balance */}
      <motion.div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(201,162,39,0.12) 0%, transparent 65%)",
          left: "-5%",
          top: "30%",
          y: useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["0%","0%"] : ["0%","25%"]),
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
          Sobre nós
        </motion.p>

        {/* Title — phrase by phrase stagger */}
        <motion.h1
          className="empresa-hero__title"
          style={{ marginBottom: "var(--space-8)" }}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.18, delayChildren: 0.32 } },
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
          Mais de 20 anos dedicados à saúde financeira das empresas em Avaré e região —
          com ética, precisão e o atendimento personalizado que o seu negócio merece.
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
