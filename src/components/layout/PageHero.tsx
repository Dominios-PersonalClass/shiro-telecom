/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V4 */
import type { ReactNode } from "react";
import { Container } from "../ui/Container";

export interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  description: ReactNode;
  children?: ReactNode;
  visual?: ReactNode;
  breadcrumbs?: ReactNode;
  tone?: "paper" | "night";
  className?: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  visual,
  breadcrumbs,
  tone = "paper",
  className = "",
}: PageHeroProps) {
  return (
    <section className={`st-page-hero st-page-hero--${tone} ${className}`.trim()}>
      <Container>
        {breadcrumbs ? <div className="st-page-hero__breadcrumbs">{breadcrumbs}</div> : null}
        <div className={`st-page-hero__layout ${visual ? "st-page-hero__layout--split" : ""}`.trim()}>
          <div className="st-page-hero__copy">
            {eyebrow ? <p className="st-eyebrow">{eyebrow}</p> : null}
            <h1 className="st-page-hero__title">{title}</h1>
            <div className="st-page-hero__description">{description}</div>
            {children ? <div className="st-page-hero__actions">{children}</div> : null}
          </div>
          {visual ? <div className="st-page-hero__visual">{visual}</div> : null}
        </div>
      </Container>
    </section>
  );
}

