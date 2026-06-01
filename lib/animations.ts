import type { Transition } from "motion/react";

export const EASING = {
  smooth: [0.22, 1, 0.36, 1] as [number, number, number, number],
  snappy: [0.4, 0, 0.2, 1] as [number, number, number, number],
  bounce: { type: "spring" as const, stiffness: 400, damping: 28 },
  gentle: { type: "spring" as const, stiffness: 200, damping: 30 },
} as const;

export const DURATION = {
  fast:   0.2,
  normal: 0.4,
  slow:   0.6,
  hero:   0.8,
} as const;

export const PARALLAX = {
  hero:         { speed: -0.3 },
  heroBg:       { speed: 0.4 },
  sectionTitle: { speed: -0.1 },
  decorElement: { speed: 0.2 },
} as const;

export const VIEWPORT_DEFAULTS = {
  once:   true,
  margin: "-8% 0px",
} as const;

export const BASE_TRANSITION: Transition = {
  duration: DURATION.normal,
  ease: EASING.smooth,
};
