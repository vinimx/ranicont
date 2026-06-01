"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScroll, useMotionValueEvent } from "motion/react";
import { FaWhatsapp, FaBars, FaExternalLinkAlt } from "react-icons/fa";
import { SITE } from "@/lib/data/site";
import { gerarLinkWhatsAppCTA } from "@/lib/utils/whatsapp";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { MobileMenu } from "./MobileMenu";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/empresa", label: "Empresa" },
  { href: "/servicos", label: "Serviços" },
  { href: "/consultas", label: "Consultas" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <div className="container-site">
          <div className="header-inner">
            <BrandLogo
              variant="header"
              className="site-header__logo"
              ariaLabel="Ranicont Escritório Contábil — página inicial"
              priority
            />

            <nav className="site-header__nav" aria-label="Navegação principal">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link${pathname === link.href ? " active" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={SITE.simulador}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link nav-link--external"
                aria-label="Simulador de Impostos — abre em nova aba"
              >
                Simulador&nbsp;
                <FaExternalLinkAlt
                  aria-hidden="true"
                  style={{ fontSize: "0.65em", verticalAlign: "middle" }}
                />
              </a>
            </nav>

            <div className="header-actions">
              <a
                href={gerarLinkWhatsAppCTA()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-whatsapp header-cta"
                aria-label="Falar no WhatsApp"
              >
                <FaWhatsapp aria-hidden="true" />
                WhatsApp
              </a>

              <button
                className="hamburger-btn"
                onClick={() => setMenuOpen(true)}
                aria-label="Abrir menu de navegação"
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                <FaBars aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        pathname={pathname}
      />
    </>
  );
}
