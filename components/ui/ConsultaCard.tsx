"use client";

import { motion } from "motion/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { EASING, VIEWPORT_DEFAULTS } from "@/lib/animations";

interface ConsultaCardProps {
  icon: React.ReactNode;
  nome: string;
  href: string;
  index?: number;
  className?: string;
}

export function ConsultaCard({
  icon,
  nome,
  href,
  index = 0,
  className,
}: ConsultaCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`consulta-card${className ? ` ${className}` : ""}`}
      aria-label={`${nome} — abre em nova aba`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_DEFAULTS}
      transition={{
        duration: 0.4,
        delay: index * 0.06,
        ease: EASING.smooth,
      }}
      whileHover={{ x: 4, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="consulta-card__icon"
        aria-hidden="true"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        {icon}
      </motion.div>

      <span className="consulta-card__name">{nome}</span>

      <FaExternalLinkAlt
        className="consulta-card__arrow"
        aria-hidden="true"
        style={{ fontSize: "0.8em" }}
      />
    </motion.a>
  );
}
