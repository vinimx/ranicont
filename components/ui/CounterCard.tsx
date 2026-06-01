"use client";

import { useRef, useEffect } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "motion/react";
import { EASING } from "@/lib/animations";

interface CounterCardProps {
  valor: number;
  sufixo?: string;
  label: string;
  prefixo?: string;
  duration?: number;
  className?: string;
}

export function CounterCard({
  valor,
  sufixo,
  label,
  prefixo,
  duration = 2,
  className,
}: CounterCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-5%" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, valor, {
        duration,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, count, valor, duration]);

  return (
    <motion.div
      ref={ref}
      className={`counter-card${className ? ` ${className}` : ""}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: EASING.smooth }}
    >
      <span className="counter-card__value">
        {prefixo && (
          <span style={{ fontSize: "0.6em", verticalAlign: "super" }}>{prefixo}</span>
        )}
        <motion.span>{rounded}</motion.span>
        {sufixo && (
          <span style={{ fontSize: "0.65em", marginLeft: "0.08em" }}>{sufixo}</span>
        )}
      </span>
      <span className="counter-card__label">{label}</span>
    </motion.div>
  );
}
