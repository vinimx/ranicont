"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { FaWhatsapp, FaPhone, FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import { SITE } from "@/lib/data/site";
import { gerarLinkWhatsAppCTA } from "@/lib/utils/whatsapp";
import { EASING } from "@/lib/animations";

// Partículas — posições determinísticas para evitar hydration mismatch
const PARTICLES = [
  { id: 1, left: "8%", top: "20%", size: 4, duration: 6.2, delay: 0 },
  { id: 2, left: "15%", top: "65%", size: 3, duration: 7.8, delay: 0.3 },
  { id: 3, left: "28%", top: "35%", size: 5, duration: 5.4, delay: 0.6 },
  { id: 4, left: "72%", top: "25%", size: 3.5, duration: 8.2, delay: 0.2 },
  { id: 5, left: "85%", top: "70%", size: 4, duration: 6.8, delay: 0.5 },
  { id: 6, left: "42%", top: "80%", size: 3, duration: 7.1, delay: 0.1 },
  { id: 7, left: "65%", top: "15%", size: 4.5, duration: 9.3, delay: 0.4 },
  { id: 8, left: "22%", top: "55%", size: 3.5, duration: 8.5, delay: 0.7 },
] as const;

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effect for content on scroll
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["0%", "15%"]
  );

  return (
    <section ref={ref} className="hero-section-enhanced">
      {/* ── Animated gradient background (CSS animation) ── */}
      <div
        className="hero-gradient-animated"
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(-45deg, #000080, #0000ff, #00aaff, #0033cc, #000080)",
          backgroundSize: "300% 300%",
          animation: shouldReduceMotion ? "none" : "gradientFlow 15s ease infinite",
          zIndex: 0,
        }}
      />

      {/* ── Floating particles (8 pieces with independent animations) ── */}
      {PARTICLES.map((particle) => (
        <motion.div
          key={particle.id}
          aria-hidden="true"
          className="hero-particle"
          style={{
            position: "absolute",
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(217, 195, 138, 0.8), rgba(217, 195, 138, 0))",
            pointerEvents: "none",
            zIndex: 1,
          }}
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, -30, -60, -30, 0],
                  x: [0, 12, -8, 15, 0],
                  opacity: [0.3, 0.6, 0.4, 0.5, 0.3],
                }
          }
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}

      {/* ── Content wrapper with parallax on scroll ── */}
      <motion.div
        className="hero-content-enhanced"
        style={{ position: "relative", zIndex: 2, y: shouldReduceMotion ? 0 : contentY }}
      >
        {/* ── Visually-hidden h1 for SEO / screen readers ── */}
        <h1 className="visually-hidden">
          {SITE.nome} — Escritório Contábil em Avaré SP
        </h1>

        {/* ── Logo: scale + fade in ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.72 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: EASING.smooth, delay: 0.1 }}
          className="hero-logo-wrapper"
        >
          <Image
            src={SITE.logo}
            alt={SITE.nome}
            width={156}
            height={156}
            priority
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNTYiIGhlaWdodD0iMTU2Ij48cmVjdCB3aWR0aD0iMTU2IiBoZWlnaHQ9IjE1NiIgZmlsbD0iIzAwMDA4MCIgcng9IjEyIi8+PC9zdmc+"
            style={{ filter: "brightness(0) invert(1)", objectFit: "contain" }}
          />
        </motion.div>

        {/* ── Overline label (appears early) ── */}
        <motion.p
          className="hero-overline"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: EASING.smooth }}
        >
          Escritório Contábil — Avaré SP
        </motion.p>

        {/* ── Slogan with word-by-word reveal ── */}
        <motion.div
          className="hero-slogan-container"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.65,
              },
            },
          }}
        >
          {SITE.slogan.split(" ").map((word, i, arr) => (
            <motion.span
              key={i}
              className="hero-slogan-word"
              variants={{
                hidden: { opacity: 0, y: 32 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                    ease: EASING.smooth,
                  },
                },
              }}
            >
              {word}
              {i < arr.length - 1 && " "}
            </motion.span>
          ))}
        </motion.div>

        {/* ── Decorative line below slogan (draws left to right) ── */}
        <motion.svg
          className="hero-decorative-line"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.15, duration: 0.4 }}
          viewBox="0 0 120 2"
          style={{
            width: "120px",
            height: "2px",
            margin: "var(--space-8) auto",
            display: "block",
          }}
        >
          <motion.line
            x1="0"
            y1="1"
            x2="120"
            y2="1"
            stroke="var(--color-accent-gold-lt)"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.7, delay: 1.15, ease: EASING.smooth }}
            strokeLinecap="round"
          />
        </motion.svg>

        {/* ── Phone numbers ── */}
        <motion.div
          className="hero-contact-group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.35, ease: "easeOut" }}
        >
          {SITE.telefones.map((tel, i) => (
            <motion.a
              key={tel}
              href={`tel:${tel.replace(/\D/g, "")}`}
              className="hero-phone-link"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 1.45 + i * 0.12,
                ease: EASING.smooth,
              }}
              whileHover={{ scale: 1.06, color: "var(--color-accent-gold-lt)" }}
            >
              <FaPhone aria-hidden="true" style={{ fontSize: "0.85em" }} />
              <span>{tel}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* ── CTA Buttons ── */}
        <motion.div
          className="hero-buttons-group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.8, ease: "easeOut" }}
        >
          <motion.a
            href={gerarLinkWhatsAppCTA()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-whatsapp"
            whileHover={{ scale: 1.07, y: -4 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            aria-label="Falar pelo WhatsApp"
          >
            <FaWhatsapp aria-hidden="true" />
            Falar pelo WhatsApp
          </motion.a>

          <motion.a
            href="/servicos"
            className="btn-outline-inverse"
            whileHover={{ scale: 1.07, y: -4 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            Nossos Serviços
          </motion.a>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator (pulsing) ── */}
      <motion.div
        className="hero-scroll-indicator-enhanced"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        aria-hidden="true"
      >
        <motion.span
          className="scroll-indicator-text"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.6, repeat: Infinity }}
        >
          Role para baixo
        </motion.span>
        <motion.div
          className="scroll-indicator-chevron"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaChevronDown />
        </motion.div>
      </motion.div>
    </section>
  );
}
