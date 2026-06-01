"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { EASING, VIEWPORT_DEFAULTS } from "@/lib/animations";
import { SERVICOS } from "@/lib/data/services";
import styles from "./ServicosGrid.module.css";

export function ServicosGrid() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggle = (id: string) =>
    setExpandedId((prev) => (prev === id ? null : id));

  return (
    <section className={styles.section}>
      <div className="container-site">
        {/* Section header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_DEFAULTS}
          transition={{ duration: 0.55, ease: EASING.smooth }}
        >
          <p className="overline" style={{ marginBottom: "var(--space-4)" }}>
            O que oferecemos
          </p>
          <h2 className={`section-title ${styles.title}`}>
            Soluções contábeis{" "}
            <span className="text-gold-gradient">completas</span>
          </h2>
          <p className={styles.subtitle}>
            Do planejamento à execução — cuidamos de cada detalhe para que você
            foque no que realmente importa: o crescimento da sua empresa.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className={styles.grid}>
          {SERVICOS.map((servico, index) => {
            const isOpen = expandedId === servico.id;
            const Icon = servico.icon;

            return (
              <motion.article
                key={servico.id}
                className={`${styles.card} ${servico.destaque ? styles.cardDestaque : ""} ${isOpen ? styles.cardOpen : ""}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_DEFAULTS}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: EASING.smooth,
                }}
                whileHover={
                  !isOpen ? { y: -6, transition: { duration: 0.25 } } : {}
                }
                layout
              >
                {/* Gold top bar */}
                <div className={styles.cardTopBar} aria-hidden="true" />

                {/* Destaque badge */}
                {servico.destaque && (
                  <motion.span
                    className={styles.badge}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={VIEWPORT_DEFAULTS}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08 + 0.3,
                      ease: EASING.smooth,
                    }}
                  >
                    Mais Procurado
                  </motion.span>
                )}

                {/* Icon */}
                <motion.div
                  className={`${styles.iconWrap} ${isOpen ? styles.iconWrapOpen : ""}`}
                  animate={
                    isOpen
                      ? { scale: 1.05, rotate: 0 }
                      : { scale: 1, rotate: 0 }
                  }
                  whileHover={{ scale: 1.12, rotate: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <Icon aria-hidden="true" />
                </motion.div>

                {/* Title */}
                <h3 className={styles.cardTitle}>{servico.titulo}</h3>

                {/* Description */}
                <p className={styles.cardDesc}>{servico.descricao}</p>

                {/* Expand / collapse trigger */}
                <button
                  className={`${styles.expandBtn} ${isOpen ? styles.expandBtnOpen : ""}`}
                  onClick={() => toggle(servico.id)}
                  aria-expanded={isOpen}
                  aria-controls={`details-${servico.id}`}
                >
                  <span>{isOpen ? "Ver menos" : "Ver detalhes"}</span>
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: EASING.smooth }}
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </motion.svg>
                </button>

                {/* Expandable list */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`details-${servico.id}`}
                      className={styles.expandContent}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.38, ease: EASING.smooth }}
                      style={{ overflow: "hidden" }}
                    >
                      <ul className={styles.itemList} role="list">
                        {servico.itens.map((item, i) => (
                          <motion.li
                            key={i}
                            className={styles.item}
                            initial={{ opacity: 0, x: -12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.3,
                              delay: i * 0.06,
                              ease: EASING.smooth,
                            }}
                          >
                            <span className={styles.itemArrow} aria-hidden="true">
                              →
                            </span>
                            {item}
                          </motion.li>
                        ))}
                      </ul>

                      <motion.a
                        href={`https://api.whatsapp.com/send?phone=5514996100465&text=${encodeURIComponent(
                          `Olá! Tenho interesse em saber mais sobre: ${servico.titulo}.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.ctaLink}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.35,
                          delay: servico.itens.length * 0.06 + 0.1,
                          ease: EASING.smooth,
                        }}
                        whileHover={{
                          x: 4,
                          transition: { duration: 0.2 },
                        }}
                      >
                        Solicitar este serviço
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </motion.a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className={styles.bottomCta}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_DEFAULTS}
          transition={{ duration: 0.55, delay: 0.2, ease: EASING.smooth }}
        >
          <p className={styles.bottomCtaText}>
            Não encontrou o que precisa? Fale conosco e encontramos a melhor
            solução para o seu caso.
          </p>
          <motion.a
            href="https://api.whatsapp.com/send?phone=5514996100465&text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20os%20servi%C3%A7os%20do%20Escritório%20Ranicont."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-whatsapp"
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.97 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Falar com um especialista
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
