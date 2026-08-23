/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V5 */
import Image from "next/image";
import { siteConfig } from "@/config/site";

export interface BrandObjectProps {
  /** `mark` usa el isotipo; `lockup` usa la marca vertical completa. */
  asset?: "mark" | "lockup";
  tone?: "default" | "night";
  caption?: string;
  className?: string;
}

const sources = {
  mark: { src: siteConfig.brand.mark, width: 512, height: 516 },
  lockup: { src: siteConfig.brand.lockup, width: 413, height: 520 },
  lockupLight: { src: siteConfig.brand.lockupLight, width: 413, height: 520 },
} as const;

/**
 * Presenta el logotipo como un objeto con volumen: flota sobre un halo, se inclina
 * en el eje Y y proyecta sombra. El movimiento se detiene con `prefers-reduced-motion`.
 */
export function BrandObject({
  asset = "mark",
  tone = "default",
  caption,
  className = "",
}: BrandObjectProps) {
  const key = asset === "lockup" && tone === "night" ? "lockupLight" : asset;
  const { src, width, height } = sources[key];

  return (
    <figure className={`st-brand-object st-brand-object--${tone} ${className}`.trim()}>
      <span className="st-brand-object__stage">
        <span className="st-brand-object__glow" aria-hidden="true" />
        <Image
          className="st-brand-object__img"
          src={src}
          alt={`Logotipo de ${siteConfig.name}`}
          width={width}
          height={height}
        />
      </span>
      {caption ? <figcaption className="st-brand-object__caption">{caption}</figcaption> : null}
    </figure>
  );
}
