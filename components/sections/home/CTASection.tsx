"use client";

import { motion } from "motion/react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { SITE } from "@/lib/data/site";
import { gerarLinkWhatsAppCTA } from "@/lib/utils/whatsapp";
import { EASING, VIEWPORT_DEFAULTS } from "@/lib/animations";

export function CTASection() {
  return (
    <section className="cta-section">
      {/* Decorative orb */}
      <div className="cta-section__orb" aria-hidden="true" />

      <div className="container-site cta-section__inner">
        <motion.p
          className="overline overline--gold"
          style={{ marginBottom: "var(--space-4)" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_DEFAULTS}
          transition={{ duration: 0.5, ease: EASING.smooth }}
        >
          Vamos conversar?
        </motion.p>

        <motion.h2
          className="section-title section-title--inverse cta-section__title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_DEFAULTS}
          transition={{ duration: 0.5, delay: 0.1, ease: EASING.smooth }}
        >
          Fale conosco <span className="text-gold-gradient">hoje mesmo</span>
        </motion.h2>

        <motion.p
          className="cta-section__text"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_DEFAULTS}
          transition={{ duration: 0.5, delay: 0.2, ease: EASING.smooth }}
        >
          Deixe a contabilidade com quem entende. Atendemos empresas e pessoas físicas em Avaré e
          região com agilidade, ética e comprometimento total.
        </motion.p>

        <motion.div
          className="cta-section__buttons"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_DEFAULTS}
          transition={{ duration: 0.5, delay: 0.3, ease: EASING.smooth }}
        >
          <motion.a
            href={gerarLinkWhatsAppCTA()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-whatsapp"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            aria-label="Falar pelo WhatsApp"
          >
            <FaWhatsapp aria-hidden="true" />
            Falar pelo WhatsApp
          </motion.a>

          <motion.a
            href={`tel:${SITE.telefones[0].replace(/\D/g, "")}`}
            className="btn-outline-inverse"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <FaPhone aria-hidden="true" style={{ fontSize: "0.85em" }} />
            {SITE.telefones[0]}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
