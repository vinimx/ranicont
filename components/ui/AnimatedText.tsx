"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { EASING } from "@/lib/animations";

type TextTag = "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
type SplitMode = "word" | "char" | "line";

interface AnimatedTextProps {
  text: string;
  as?: TextTag;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  splitBy?: SplitMode;
}

const ITEM_STYLES: Record<SplitMode, React.CSSProperties> = {
  word: { display: "inline-block", marginRight: "0.25em" },
  char: { display: "inline-block", whiteSpace: "pre" },
  line: { display: "block" },
};

const STAGGER_DELAY: Record<SplitMode, number> = {
  word: 0.05,
  char: 0.025,
  line: 0.12,
};

export function AnimatedText({
  text,
  as: tag = "p",
  className,
  style,
  delay = 0,
  splitBy = "word",
}: AnimatedTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const items =
    splitBy === "word"
      ? text.split(" ")
      : splitBy === "char"
        ? text.split("")
        : text.split("\n");

  const Tag = tag as React.ElementType;

  return (
    <Tag
      ref={ref}
      className={className}
      style={{ overflow: "hidden", ...style }}
    >
      {items.map((item, i) => (
        <motion.span
          key={i}
          style={ITEM_STYLES[splitBy]}
          initial={{ opacity: 0, y: 22 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: delay + i * STAGGER_DELAY[splitBy],
            ease: EASING.smooth,
          }}
        >
          {item}
        </motion.span>
      ))}
    </Tag>
  );
}
