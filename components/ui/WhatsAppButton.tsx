"use client";

import { motion } from "motion/react";
import { FaWhatsapp } from "react-icons/fa";
import { SITE } from "@/lib/data/site";

export function WhatsAppButton() {
  return (
    <motion.a
      href={SITE.redes.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Falar com o Escritório Ranicont pelo WhatsApp"
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <FaWhatsapp
        aria-hidden="true"
        style={{ position: "relative", zIndex: 1, fontSize: "1.4rem" }}
      />
    </motion.a>
  );
}
