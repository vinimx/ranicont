"use client";

import { motion } from "motion/react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { SITE } from "@/lib/data/site";
import { EASING, VIEWPORT_DEFAULTS } from "@/lib/animations";
import styles from "./Contato.module.css";

const INFO_ITEMS = [
  {
    id: "endereco",
    icon: FaMapMarkerAlt,
    titulo: "Endereço",
    conteudo: (
      <>
        <p>{SITE.endereco.logradouro}</p>
        <p>
          {SITE.endereco.bairro} — {SITE.endereco.cidade}
        </p>
        <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)" }}>
          CEP {SITE.endereco.cep}
        </p>
      </>
    ),
  },
  {
    id: "telefones",
    icon: FaPhone,
    titulo: "Telefones",
    conteudo: (
      <>
        {SITE.telefones.map((tel) => (
          <a
            key={tel}
            href={`tel:${tel.replace(/\D/g, "")}`}
            className={styles.infoLink}
          >
            {tel}
          </a>
        ))}
      </>
    ),
  },
  {
    id: "emails",
    icon: FaEnvelope,
    titulo: "E-mails",
    conteudo: (
      <>
        <a href={`mailto:${SITE.email.contato}`} className={styles.infoLink}>
          {SITE.email.contato}
        </a>
        <a href={`mailto:${SITE.email.geral}`} className={styles.infoLink}>
          {SITE.email.geral}
        </a>
        <a href={`mailto:${SITE.email.fiscal}`} className={styles.infoLink}>
          {SITE.email.fiscal}
        </a>
      </>
    ),
  },
  {
    id: "horario",
    icon: FaClock,
    titulo: "Horário de Atendimento",
    conteudo: (
      <>
        <p>{SITE.horario.semana}</p>
        <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)" }}>
          {SITE.horario.almoço}
        </p>
      </>
    ),
  },
] as const;

const SOCIAL_LINKS = [
  {
    id: "whatsapp",
    icon: FaWhatsapp,
    href: SITE.redes.whatsapp,
    label: "WhatsApp",
    color: "#25D366",
  },
  {
    id: "facebook",
    icon: FaFacebook,
    href: SITE.redes.facebook,
    label: "Facebook",
    color: "#1877F2",
  },
  {
    id: "instagram",
    icon: FaInstagram,
    href: SITE.redes.instagram,
    label: "Instagram",
    color: "#E1306C",
  },
] as const;

export function ContatoInfo() {
  return (
    <div className={styles.infoColumn}>
      {/* Overline */}
      <motion.p
        className="overline"
        style={{ marginBottom: "var(--space-4)", display: "block" }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT_DEFAULTS}
        transition={{ duration: 0.5, ease: EASING.smooth }}
      >
        Dados de contato
      </motion.p>

      <motion.h2
        className={`section-title ${styles.infoHeading}`}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT_DEFAULTS}
        transition={{ duration: 0.5, delay: 0.1, ease: EASING.smooth }}
      >
        Como nos{" "}
        <span className="text-gold-gradient">encontrar</span>
      </motion.h2>

      {/* Info cards */}
      <div className={styles.infoCards}>
        {INFO_ITEMS.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              className={styles.infoCard}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VIEWPORT_DEFAULTS}
              transition={{
                duration: 0.45,
                delay: i * 0.1,
                ease: EASING.smooth,
              }}
              whileHover={{ x: 4, transition: { duration: 0.2 } }}
            >
              <motion.div
                className={styles.infoCardIcon}
                whileHover={{ scale: 1.08, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Icon aria-hidden="true" />
              </motion.div>

              <div className={styles.infoCardBody}>
                <p className={styles.infoCardTitle}>{item.titulo}</p>
                <div className={styles.infoCardContent}>{item.conteudo}</div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Social links */}
      <motion.div
        className={styles.socialBlock}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT_DEFAULTS}
        transition={{ duration: 0.5, delay: 0.45, ease: EASING.smooth }}
      >
        <p className={styles.socialLabel}>Redes sociais</p>
        <div className={styles.socialRow}>
          {SOCIAL_LINKS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={styles.socialBtn}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={VIEWPORT_DEFAULTS}
                transition={{
                  duration: 0.35,
                  delay: 0.5 + i * 0.07,
                  ease: EASING.smooth,
                }}
                whileHover={{
                  scale: 1.12,
                  y: -3,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
                style={{ "--social-color": s.color } as React.CSSProperties}
              >
                <Icon aria-hidden="true" />
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
