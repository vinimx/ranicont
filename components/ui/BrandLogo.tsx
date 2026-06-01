"use client";

import Image from "next/image";
import Link from "next/link";
import type { MouseEventHandler } from "react";
import { SITE } from "@/lib/data/site";

type BrandLogoVariant = "header" | "footer" | "mobile";

interface BrandLogoProps {
  variant?: BrandLogoVariant;
  className?: string;
  ariaLabel?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  priority?: boolean;
}

const LOGO_SIZES: Record<BrandLogoVariant, { width: number; height: number; sizes: string }> = {
  header: {
    width: 96,
    height: 96,
    sizes: "(max-width: 991px) 76px, 96px",
  },
  footer: {
    width: 112,
    height: 112,
    sizes: "(max-width: 767px) 92px, 112px",
  },
  mobile: {
    width: 84,
    height: 84,
    sizes: "84px",
  },
};

export function BrandLogo({
  variant = "header",
  className,
  ariaLabel = `${SITE.nome} — página inicial`,
  onClick,
  priority = false,
}: BrandLogoProps) {
  const size = LOGO_SIZES[variant];

  return (
    <Link
      href="/"
      className={`brand-logo brand-logo--${variant}${className ? ` ${className}` : ""}`}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      <Image
        src={SITE.logo}
        alt=""
        aria-hidden="true"
        width={size.width}
        height={size.height}
        sizes={size.sizes}
        priority={priority}
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTIiIGhlaWdodD0iMTEyIj48cmVjdCB3aWR0aD0iMTEyIiBoZWlnaHQ9IjExMiIgZmlsbD0iI2YwZjRmZiIgcng9IjgiLz48L3N2Zz4="
        className="brand-logo__image"
      />
    </Link>
  );
}