"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { EASING, VIEWPORT_DEFAULTS } from "@/lib/animations";
import { CONSULTAS_CATEGORIAS } from "@/lib/data/consultas";
import { ConsultaCard } from "@/components/ui/ConsultaCard";
import { FaTh } from "react-icons/fa";
import styles from "./ConsultasGrid.module.css";

const TODAS_ID = "todas";

export function ConsultasGrid() {
  const [activeId, setActiveId] = useState<string>(TODAS_ID);

  const allFilters = [
    { id: TODAS_ID, label: "Todas", labelCurto: "Todas", icon: FaTh },
    ...CONSULTAS_CATEGORIAS,
  ];

  const visibleCategorias =
    activeId === TODAS_ID
      ? CONSULTAS_CATEGORIAS
      : CONSULTAS_CATEGORIAS.filter((c) => c.id === activeId);

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
            Portais oficiais
          </p>
          <h2 className={`section-title ${styles.title}`}>
            Links{" "}
            <span className="text-gold-gradient">categorizados</span>
          </h2>
          <p className={styles.subtitle}>
            Acesse diretamente os sistemas governamentais mais utilizados na
            rotina contábil e fiscal — clique para abrir em nova aba.
          </p>
        </motion.div>

        {/* Filter bar */}
        <motion.div
          className={styles.filterBar}
          role="tablist"
          aria-label="Filtrar por categoria"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_DEFAULTS}
          transition={{ duration: 0.5, delay: 0.15, ease: EASING.smooth }}
        >
          {allFilters.map((filter) => {
            const isActive = activeId === filter.id;
            const Icon = filter.icon;
            return (
              <button
                key={filter.id}
                role="tab"
                aria-selected={isActive}
                className={`${styles.filterBtn} ${isActive ? styles.filterBtnActive : ""}`}
                onClick={() => setActiveId(filter.id)}
              >
                {isActive && (
                  <motion.span
                    layoutId="filter-pill"
                    className={styles.filterPill}
                    transition={{ duration: 0.3, ease: EASING.smooth }}
                  />
                )}
                <span className={styles.filterBtnInner}>
                  <Icon aria-hidden="true" className={styles.filterIcon} />
                  <span className={styles.filterLabel}>{filter.labelCurto}</span>
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Grid content — animated on category switch */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: EASING.smooth }}
          >
            {visibleCategorias.map((categoria, catIndex) => {
              const CatIcon = categoria.icon;
              return (
                <div key={categoria.id} className={styles.categoryBlock}>
                  {/* Category heading — only shown in "Todas" view */}
                  {activeId === TODAS_ID && (
                    <motion.div
                      className={styles.categoryHeading}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: catIndex * 0.07,
                        ease: EASING.smooth,
                      }}
                    >
                      <span className={styles.categoryHeadingIcon}>
                        <CatIcon aria-hidden="true" />
                      </span>
                      <span className={styles.categoryHeadingLabel}>
                        {categoria.label}
                      </span>
                      <span className={styles.categoryHeadingCount}>
                        {categoria.links.length} links
                      </span>
                    </motion.div>
                  )}

                  {/* Links grid */}
                  <div
                    className={`${styles.linksGrid} ${
                      activeId !== TODAS_ID ? styles.linksGridExpanded : ""
                    }`}
                  >
                    {categoria.links.map((link, i) => {
                      const Icon = link.icon;
                      return (
                        <ConsultaCard
                          key={link.id}
                          icon={<Icon aria-hidden="true" />}
                          nome={link.nome}
                          href={link.href}
                          index={catIndex * 6 + i}
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Info notice */}
        <motion.p
          className={styles.notice}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VIEWPORT_DEFAULTS}
          transition={{ duration: 0.5, delay: 0.3, ease: EASING.smooth }}
        >
          Todos os links abrem em nova aba e direcionam para portais oficiais do
          governo. O escritório não se responsabiliza por eventuais
          indisponibilidades dos sistemas externos.
        </motion.p>
      </div>
    </section>
  );
}
