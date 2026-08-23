/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V5 */
import { ViewTransition, type ReactNode } from "react";

export interface PageTransitionProps {
  children: ReactNode;
}

/**
 * Envuelve el contenido de una página para que el cambio de ruta se resuelva
 * con un fundido y una elevación corta en vez de un corte seco. Los estilos
 * viven en globals.css como `::view-transition-*(.st-page-enter | .st-page-exit)`.
 * Sin soporte del navegador la navegación funciona igual, solo que sin animar.
 */
export function PageTransition({ children }: PageTransitionProps) {
  return (
    <ViewTransition enter="st-page-enter" exit="st-page-exit" default="none">
      {children}
    </ViewTransition>
  );
}
