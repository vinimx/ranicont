"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  bgImage?: string;
  bgColor?: string;
  speed?: number;
  overlay?: boolean;
  overlayOpacity?: number;
  as?: "section" | "div" | "article";
  style?: React.CSSProperties;
}

export function ParallaxSection({
  children,
  className,
  bgImage,
  bgColor,
  speed = 0.3,
  overlay = true,
  overlayOpacity = 0.85,
  as: Tag = "section",
  style,
}: ParallaxSectionProps) {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yRange = shouldReduceMotion ? ["0%", "0%"] : [`-${speed * 50}%`, `${speed * 50}%`];
  const y = useTransform(scrollYProgress, [0, 1], yRange);

  const Wrapper = Tag as React.ElementType;

  return (
    <Wrapper
      ref={ref}
      className={`parallax-section${className ? ` ${className}` : ""}`}
      style={{ position: "relative", overflow: "hidden", ...style }}
    >
      {bgImage && (
        <motion.div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: "-20%",
            y,
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}

      {bgColor && !bgImage && (
        <motion.div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: "-20%",
            y,
            background: bgColor,
          }}
        />
      )}

      {overlay && (bgImage || bgColor) && (
        <div
          className="parallax-overlay"
          aria-hidden="true"
          style={{ opacity: overlayOpacity }}
        />
      )}

      <div style={{ position: "relative", zIndex: 1 }}>
        {children}
      </div>
    </Wrapper>
  );
}
