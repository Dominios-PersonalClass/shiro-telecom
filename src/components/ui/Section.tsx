/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V4 */
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

export type SectionTone = "paper" | "soft" | "night" | "brand";
export type SectionSize = "compact" | "default" | "spacious";

export type SectionProps<T extends ElementType = "section"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  tone?: SectionTone;
  size?: SectionSize;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Section<T extends ElementType = "section">({
  as,
  children,
  className = "",
  tone = "paper",
  size = "default",
  ...props
}: SectionProps<T>) {
  const Component = as ?? "section";

  return (
    <Component
      className={`st-section st-section--${tone} st-section--${size} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
}
