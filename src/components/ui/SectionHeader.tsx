/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V4 */
import type { ElementType, ReactNode } from "react";

export interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  align?: "start" | "center";
  titleAs?: ElementType;
  titleId?: string;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  align = "start",
  titleAs: Title = "h2",
  titleId,
  className = "",
}: SectionHeaderProps) {
  return (
    <header
      className={`st-section-header st-section-header--${align} ${className}`.trim()}
    >
      <div className="st-section-header__copy">
        {eyebrow ? <p className="st-eyebrow">{eyebrow}</p> : null}
        <Title id={titleId} className="st-section-header__title">{title}</Title>
        {description ? (
          <div className="st-section-header__description">{description}</div>
        ) : null}
      </div>
      {action ? <div className="st-section-header__action">{action}</div> : null}
    </header>
  );
}
