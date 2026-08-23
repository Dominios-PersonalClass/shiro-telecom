/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V4 */
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Button, type ButtonVariant } from "../ui/Button";
import { Container } from "../ui/Container";
import { siteConfig } from "@/config/site";

export interface CTAAction {
  label: string;
  href: string;
  external?: boolean;
  variant?: ButtonVariant;
  ariaLabel?: string;
}

export interface CTASectionProps {
  eyebrow?: string;
  title: ReactNode;
  description: ReactNode;
  primary: CTAAction;
  secondary?: CTAAction;
  tone?: "brand" | "night" | "soft";
  className?: string;
}

export function CTASection({
  eyebrow,
  title,
  description,
  primary,
  secondary,
  tone = "night",
  className = "",
}: CTASectionProps) {
  return (
    <section className={`st-cta st-cta--${tone} ${className}`.trim()}>
      <Image
        className="st-cta__watermark"
        src={siteConfig.brand.mark}
        alt=""
        width={512}
        height={516}
        aria-hidden="true"
      />
      <Container>
        <div className="st-cta__inner">
          <div className="st-cta__copy">
            {eyebrow ? <p className="st-eyebrow">{eyebrow}</p> : null}
            <h2 className="st-cta__title">{title}</h2>
            <div className="st-cta__description">{description}</div>
          </div>
          <div className="st-cta__actions">
            <Button
              href={primary.href}
              external={primary.external}
              variant={primary.variant ?? "whatsapp"}
              ariaLabel={primary.ariaLabel}
              iconEnd={<ArrowRight aria-hidden="true" size={18} />}
            >
              {primary.label}
            </Button>
            {secondary ? (
              <Button
                href={secondary.href}
                external={secondary.external}
                variant={secondary.variant ?? "secondary"}
                ariaLabel={secondary.ariaLabel}
              >
                {secondary.label}
              </Button>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}

