/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V5 */
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export interface BrandLogoProps {
  href?: string;
  variant?: "default" | "light" | "monochrome";
  compact?: boolean;
  priority?: boolean;
  className?: string;
}

const wordmarkByVariant = {
  default: siteConfig.brand.logo,
  light: siteConfig.brand.logoLight,
  monochrome: siteConfig.brand.monochrome,
} as const;

export function BrandLogo({
  href = "/",
  variant = "default",
  compact = false,
  priority = false,
  className = "",
}: BrandLogoProps) {
  const content = compact ? (
    <span className="st-brand__mark">
      <Image src={siteConfig.brand.mark} alt="" width={80} height={80} priority={priority} />
    </span>
  ) : (
    <span className="st-brand__lockup">
      <Image
        src={wordmarkByVariant[variant]}
        alt=""
        width={715}
        height={160}
        priority={priority}
      />
    </span>
  );

  return (
    <Link
      className={`st-brand st-brand--${variant} ${compact ? "st-brand--compact" : ""} ${className}`.trim()}
      href={href}
      aria-label={`${siteConfig.name}, ir al inicio`}
    >
      {content}
    </Link>
  );
}
