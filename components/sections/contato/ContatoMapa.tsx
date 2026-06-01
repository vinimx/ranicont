"use client";

import { motion } from "motion/react";
import { FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";
import { SITE } from "@/lib/data/site";
import { EASING, VIEWPORT_DEFAULTS } from "@/lib/animations";
import styles from "./Contato.module.css";

const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${SITE.endereco.logradouro}, ${SITE.endereco.bairro}, ${SITE.endereco.cidade}, ${SITE.endereco.cep}`
)}`;

export function ContatoMapa() {
  return (
    <section className={styles.mapaSection} aria-label="Localização no mapa">
      {/* Header */}
      <div className="container-site">
        <motion.div
          className={styles.mapaHeader}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_DEFAULTS}
          transition={{ duration: 0.55, ease: EASING.smooth }}
        >
          <p
            className="overline overline--gold"
            style={{ marginBottom: "var(--space-4)", display: "block" }}
          >
            Onde estamos
          </p>

          <h2 className={styles.mapaTitle}>
            Como nos{" "}
            <span className="text-gold-gradient">encontrar</span>
          </h2>

          <p className={styles.mapaAddress}>
            {SITE.endereco.logradouro} — {SITE.endereco.bairro}
            <br />
            {SITE.endereco.cidade} · CEP {SITE.endereco.cep}
          </p>

          <motion.a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mapaLinkBtn}
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.97 }}
          >
            <FaMapMarkerAlt aria-hidden="true" />
            Abrir no Google Maps
            <FaExternalLinkAlt
              aria-hidden="true"
              style={{ fontSize: "0.75em", opacity: 0.7 }}
            />
          </motion.a>
        </motion.div>
      </div>

      {/* Map iframe */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-5%" }}
        transition={{ duration: 0.7, ease: EASING.smooth }}
      >
        <iframe
          src={SITE.endereco.googleMaps}
          title={`Mapa — ${SITE.endereco.logradouro}, ${SITE.endereco.cidade}`}
          className={styles.mapaFrame}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </motion.div>
    </section>
  );
}
