/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V4 */
import type { HTMLAttributes } from "react";

export type BadgeTone = "neutral" | "brand" | "success" | "inverse";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
  dot?: boolean;
}

export function Badge({
  tone = "neutral",
  dot = false,
  className = "",
  children,
  ...props
}: BadgeProps) {
  return (
    <span className={`st-badge st-badge--${tone} ${className}`.trim()} {...props}>
      {dot ? <span className="st-badge__dot" aria-hidden="true" /> : null}
      {children}
    </span>
  );
}

