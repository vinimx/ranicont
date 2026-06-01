"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { FaTimes, FaWhatsapp, FaExternalLinkAlt, FaPhone } from "react-icons/fa";
import { SITE } from "@/lib/data/site";
import { gerarLinkWhatsAppCTA } from "@/lib/utils/whatsapp";
import { BrandLogo } from "@/components/ui/BrandLogo";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/empresa", label: "Empresa" },
  { href: "/servicos", label: "Serviços" },
  { href: "/consultas", label: "Consultas" },
  { href: "/contato", label: "Contato" },
];

const SPRING = { type: "spring" as const, damping: 32, stiffness: 320 };

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

export function MobileMenu({ isOpen, onClose, pathname }: MobileMenuProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  return (
    // Two separate AnimatePresence children (no fragment) so each gets its own exit animation
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-overlay"
          className="mobile-menu-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      {isOpen && (
        <motion.nav
          key="mobile-drawer"
          id="mobile-menu"
          className="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={SPRING}
        >
          {/* Header */}
          <div className="mobile-menu__header">
            <BrandLogo
              variant="mobile"
              className="mobile-menu__brand"
              ariaLabel="Ranicont — página inicial"
              onClick={onClose}
            />
            <button
              className="mobile-menu__close"
              onClick={onClose}
              aria-label="Fechar menu"
            >
              <FaTimes aria-hidden="true" />
            </button>
          </div>

          {/* Nav links with stagger */}
          <ul className="mobile-menu__nav" role="list">
            {NAV_LINKS.map((link, i) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{
                  delay: 0.06 + i * 0.055,
                  ease: [0.22, 1, 0.36, 1],
                  duration: 0.35,
                }}
              >
                <Link
                  href={link.href}
                  className={`mobile-nav-link${pathname === link.href ? " active" : ""}`}
                  onClick={onClose}
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}

            <motion.li
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{
                delay: 0.06 + NAV_LINKS.length * 0.055,
                ease: [0.22, 1, 0.36, 1],
                duration: 0.35,
              }}
            >
              <a
                href={SITE.simulador}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-nav-link mobile-nav-link--external"
                onClick={onClose}
              >
                Simulador de Impostos
                <FaExternalLinkAlt
                  aria-hidden="true"
                  style={{ fontSize: "0.75em", marginLeft: "auto" }}
                />
              </a>
            </motion.li>
          </ul>

          {/* Footer with contact info */}
          <motion.div
            className="mobile-menu__footer"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.38, duration: 0.3 }}
          >
            <div className="mobile-menu__contact-line">
              <FaPhone aria-hidden="true" />
              <span>{SITE.telefones[0]}</span>
            </div>
            <div className="mobile-menu__contact-line">
              <FaPhone aria-hidden="true" />
              <span>{SITE.telefones[1]}</span>
            </div>

            <a
              href={gerarLinkWhatsAppCTA()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-whatsapp"
              style={{ justifyContent: "center", marginTop: "var(--space-4)" }}
              onClick={onClose}
            >
              <FaWhatsapp aria-hidden="true" />
              Falar no WhatsApp
            </a>
          </motion.div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
