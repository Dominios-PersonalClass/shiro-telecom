/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V4 */
import type { HTMLAttributes } from "react";

export type ContainerProps = HTMLAttributes<HTMLDivElement>;

export function Container({ className = "", ...props }: ContainerProps) {
  return <div className={`st-container ${className}`.trim()} {...props} />;
}

