"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaWhatsapp, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { gerarLinkWhatsApp, type WhatsAppPayload } from "@/lib/utils/whatsapp";
import { EASING, VIEWPORT_DEFAULTS } from "@/lib/animations";
import styles from "./Contato.module.css";

interface ContatoFormData {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
}

interface FormErrors {
  nome?: string;
  email?: string;
  mensagem?: string;
}

const EMPTY: ContatoFormData = { nome: "", email: "", telefone: "", mensagem: "" };

function validate(f: ContatoFormData): FormErrors {
  const e: FormErrors = {};
  if (!f.nome.trim() || f.nome.trim().length < 3)
    e.nome = "Informe seu nome completo (mínimo 3 caracteres).";
  if (!f.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim()))
    e.email = "Informe um endereço de e-mail válido.";
  if (!f.mensagem.trim() || f.mensagem.trim().length < 10)
    e.mensagem = "Escreva uma mensagem com pelo menos 10 caracteres.";
  return e;
}

function formatPhone(raw: string): string {
  const d = raw.replace(/\D/g, "").slice(0, 11);
  if (d.length === 0) return "";
  if (d.length <= 2) return `(${d}`;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10)
    return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

export function ContatoForm() {
  const [form, setForm] = useState<ContatoFormData>(EMPTY);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState<Partial<Record<keyof ContatoFormData, boolean>>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const next = {
      ...form,
      [name]: name === "telefone" ? formatPhone(value) : value,
    };
    setForm(next);
    if (touched[name as keyof ContatoFormData]) {
      setErrors(validate(next));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(form));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mark all relevant fields as touched
    setTouched({ nome: true, email: true, mensagem: true });
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const payload: WhatsAppPayload = {
      nome: form.nome.trim(),
      email: form.email.trim(),
      telefone: form.telefone || "Não informado",
      mensagem: form.mensagem.trim(),
    };
    const link = gerarLinkWhatsApp(payload);
    window.open(link, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm(EMPTY);
      setTouched({});
      setErrors({});
    }, 4000);
  };

  const fieldClass = (name: keyof FormErrors) =>
    `form-input ${errors[name] && touched[name] ? styles.inputError : ""}`;

  return (
    <motion.div
      className={styles.formWrapper}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_DEFAULTS}
      transition={{ duration: 0.6, ease: EASING.smooth }}
    >
      {/* Form header */}
      <p className="overline" style={{ marginBottom: "var(--space-4)", display: "block" }}>
        Formulário de contato
      </p>
      <h2 className={styles.formTitle}>
        Envie sua <span className="text-gold-gradient">mensagem</span>
      </h2>
      <p className={styles.formSubtitle}>
        Preencha os campos abaixo e você será redirecionado para o WhatsApp com
        a mensagem já formatada.
      </p>

      {/* Success banner */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            className={styles.successBanner}
            role="alert"
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            transition={{ duration: 0.35, ease: EASING.smooth }}
          >
            <FaCheckCircle aria-hidden="true" className={styles.successIcon} />
            <span>
              WhatsApp aberto com sucesso! Se não abriu, verifique se o app está
              instalado.
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} noValidate>
        {/* Nome */}
        <div className="form-group">
          <label htmlFor="contato-nome" className="form-label">
            Nome completo <span className={styles.required}>*</span>
          </label>
          <input
            id="contato-nome"
            name="nome"
            type="text"
            autoComplete="name"
            required
            placeholder="Seu nome completo"
            value={form.nome}
            onChange={handleChange}
            onBlur={handleBlur}
            className={fieldClass("nome")}
            aria-describedby={errors.nome && touched.nome ? "erro-nome" : undefined}
            aria-invalid={!!(errors.nome && touched.nome)}
          />
          <AnimatePresence>
            {errors.nome && touched.nome && (
              <motion.p
                id="erro-nome"
                role="alert"
                className={styles.fieldError}
                initial={{ opacity: 0, y: -4, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -4, height: 0 }}
                transition={{ duration: 0.22, ease: EASING.smooth }}
              >
                <FaExclamationCircle aria-hidden="true" />
                {errors.nome}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="contato-email" className="form-label">
            E-mail <span className={styles.required}>*</span>
          </label>
          <input
            id="contato-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="seu@email.com.br"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={fieldClass("email")}
            aria-describedby={errors.email && touched.email ? "erro-email" : undefined}
            aria-invalid={!!(errors.email && touched.email)}
          />
          <AnimatePresence>
            {errors.email && touched.email && (
              <motion.p
                id="erro-email"
                role="alert"
                className={styles.fieldError}
                initial={{ opacity: 0, y: -4, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -4, height: 0 }}
                transition={{ duration: 0.22, ease: EASING.smooth }}
              >
                <FaExclamationCircle aria-hidden="true" />
                {errors.email}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Telefone */}
        <div className="form-group">
          <label htmlFor="contato-telefone" className="form-label">
            Telefone / WhatsApp{" "}
            <span className={styles.optional}>(opcional)</span>
          </label>
          <input
            id="contato-telefone"
            name="telefone"
            type="tel"
            autoComplete="tel"
            placeholder="(14) 99999-9999"
            value={form.telefone}
            onChange={handleChange}
            onBlur={handleBlur}
            className="form-input"
            inputMode="numeric"
          />
        </div>

        {/* Mensagem */}
        <div className="form-group">
          <label htmlFor="contato-mensagem" className="form-label">
            Mensagem <span className={styles.required}>*</span>
          </label>
          <textarea
            id="contato-mensagem"
            name="mensagem"
            required
            rows={5}
            placeholder="Descreva como podemos ajudá-lo..."
            value={form.mensagem}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-input form-textarea ${
              errors.mensagem && touched.mensagem ? styles.inputError : ""
            }`}
            aria-describedby={
              errors.mensagem && touched.mensagem ? "erro-mensagem" : undefined
            }
            aria-invalid={!!(errors.mensagem && touched.mensagem)}
          />
          <div className={styles.charCount}>
            {form.mensagem.length} caracteres
          </div>
          <AnimatePresence>
            {errors.mensagem && touched.mensagem && (
              <motion.p
                id="erro-mensagem"
                role="alert"
                className={styles.fieldError}
                initial={{ opacity: 0, y: -4, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -4, height: 0 }}
                transition={{ duration: 0.22, ease: EASING.smooth }}
              >
                <FaExclamationCircle aria-hidden="true" />
                {errors.mensagem}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Submit */}
        <motion.button
          type="submit"
          className={`btn-primary btn-whatsapp ${styles.submitBtn}`}
          whileHover={{ y: -2, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.97 }}
          disabled={submitted}
        >
          <FaWhatsapp aria-hidden="true" style={{ fontSize: "1.1rem" }} />
          {submitted ? "Redirecionando..." : "Enviar pelo WhatsApp"}
        </motion.button>

        <p className={styles.formNote}>
          Ao enviar, você será redirecionado para o WhatsApp com os dados
          preenchidos.
        </p>
      </form>
    </motion.div>
  );
}
