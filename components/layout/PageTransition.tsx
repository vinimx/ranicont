"use client";

import { usePathname } from "next/navigation";
import { motion } from "motion/react";

interface PageTransitionProps {
  children: React.ReactNode;
}

/*
 * Por que não usar AnimatePresence mode="wait" aqui:
 *
 * No App Router o DOM é atualizado ANTES de usePathname() reagir. Quando o
 * key do motion.div muda, o AnimatePresence roda a animação de EXIT sobre o
 * conteúdo JÁ NOVO (não o antigo), causando o ciclo: aparece → desaparece
 * (400ms exit) → reaparece (400ms enter). O resultado é exatamente o sintoma
 * reportado: conteúdo pisca e só aparece corretamente após F5.
 *
 * Solução: sem AnimatePresence, sem opacity: 0 no initial. Apenas um
 * translateY mínimo que dá a sensação de transição suave sem esconder nada.
 * As animações de entrada de cada hero section cuidam do efeito visual.
 */
export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ y: 8 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      style={{ flex: 1, display: "flex", flexDirection: "column" }}
    >
      {children}
    </motion.div>
  );
}
