import Link from "next/link";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { SITE } from "@/lib/data/site";
import { BrandLogo } from "@/components/ui/BrandLogo";

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/empresa", label: "Empresa" },
  { href: "/servicos", label: "Serviços" },
  { href: "/consultas", label: "Consultas" },
  { href: "/contato", label: "Contato" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container-site">
        <div className="row g-5">
          {/* Coluna 1 — Identidade */}
          <div className="col-lg-4 col-md-12">
            <BrandLogo
              variant="footer"
              className="footer-logo"
              ariaLabel="Escritório Ranicont — voltar para a página inicial"
            />
            <p className="footer-slogan">{SITE.slogan}</p>

            <div
              style={{
                marginTop: "var(--space-6)",
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-3)",
              }}
            >
              <div className="mobile-menu__contact-line">
                <FaMapMarkerAlt aria-hidden="true" style={{ flexShrink: 0 }} />
                <span>
                  {SITE.endereco.logradouro},{" "}
                  {SITE.endereco.bairro} —{" "}
                  {SITE.endereco.cidade}
                </span>
              </div>
              <div className="mobile-menu__contact-line">
                <FaClock aria-hidden="true" style={{ flexShrink: 0 }} />
                <span>{SITE.horario.semana}</span>
              </div>
            </div>
          </div>

          {/* Coluna 2 — Links Rápidos */}
          <div className="col-lg-2 col-md-4 col-6">
            <p className="footer-heading">Navegação</p>
            <nav aria-label="Links rápidos do footer">
              {QUICK_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="footer-link">
                  {link.label}
                </Link>
              ))}
              <a
                href={SITE.simulador}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
                style={{ color: "var(--color-accent-gold-lt)" }}
              >
                Simulador ↗
              </a>
            </nav>
          </div>

          {/* Coluna 3 — Contato */}
          <div className="col-lg-3 col-md-4 col-6">
            <p className="footer-heading">Contato</p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-3)",
              }}
            >
              {SITE.telefones.map((tel) => (
                <a
                  key={tel}
                  href={`tel:${tel.replace(/\D/g, "")}`}
                  className="footer-link"
                  style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}
                >
                  <FaPhone aria-hidden="true" style={{ flexShrink: 0 }} />
                  {tel}
                </a>
              ))}
              <a
                href={`mailto:${SITE.email.geral}`}
                className="footer-link"
                style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}
              >
                <FaEnvelope aria-hidden="true" style={{ flexShrink: 0 }} />
                {SITE.email.geral}
              </a>
              <a
                href={`mailto:${SITE.email.contato}`}
                className="footer-link"
                style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}
              >
                <FaEnvelope aria-hidden="true" style={{ flexShrink: 0 }} />
                {SITE.email.contato}
              </a>
            </div>
          </div>

          {/* Coluna 4 — Redes Sociais */}
          <div className="col-lg-3 col-md-4 col-12">
            <p className="footer-heading">Redes Sociais</p>
            <div className="footer-social" role="list" aria-label="Redes sociais">
              <a
                href={SITE.redes.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social__link"
                aria-label="WhatsApp do Escritório Ranicont"
                role="listitem"
              >
                <FaWhatsapp aria-hidden="true" />
              </a>
              <a
                href={SITE.redes.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social__link"
                aria-label="Instagram do Escritório Ranicont"
                role="listitem"
              >
                <FaInstagram aria-hidden="true" />
              </a>
              <a
                href={SITE.redes.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social__link"
                aria-label="Facebook do Escritório Ranicont"
                role="listitem"
              >
                <FaFacebook aria-hidden="true" />
              </a>
            </div>

            <div style={{ marginTop: "var(--space-6)" }}>
              <p className="footer-heading" style={{ marginBottom: "var(--space-3)" }}>
                Horário
              </p>
              <p
                style={{
                  fontSize: "var(--text-sm)",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: "var(--leading-relaxed)",
                }}
              >
                {SITE.horario.semana}
                <br />
                {SITE.horario.almoço}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {currentYear} {SITE.nome}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
