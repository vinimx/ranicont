"use client";

import { motion } from "motion/react";
import { EASING, VIEWPORT_DEFAULTS } from "@/lib/animations";

interface ServiceCardProps {
  icon: React.ReactNode;
  titulo: string;
  descricao: string;
  itens?: string[];
  index?: number;
  className?: string;
}

export function ServiceCard({
  icon,
  titulo,
  descricao,
  itens,
  index = 0,
  className,
}: ServiceCardProps) {
  return (
    <motion.article
      className={`service-card${className ? ` ${className}` : ""}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_DEFAULTS}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: EASING.smooth,
      }}
      whileHover={{ y: -8, transition: { duration: 0.25, ease: EASING.smooth } }}
    >
      <motion.div
        className="service-card__icon"
        whileHover={{ scale: 1.15, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        {icon}
      </motion.div>

      <h3 className="service-card__title">{titulo}</h3>
      <p className="service-card__desc">{descricao}</p>

      {itens && itens.length > 0 && (
        <ul className="service-card__list" role="list">
          {itens.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VIEWPORT_DEFAULTS}
              transition={{
                duration: 0.35,
                delay: 0.3 + i * 0.08,
                ease: EASING.smooth,
              }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      )}
    </motion.article>
  );
}
