"use client";

/* Hallmark · component: mobile navigation · genre: modern-minimal · theme: Shiro locked system
 * states: default · hover · focus · active · disabled · loading · error · success
 * contrast: pass (token-dependent)
 * Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V4
 */
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

export interface NavigationItem {
  label: string;
  href: string;
}

export interface MobileMenuProps {
  items: readonly NavigationItem[];
  cta: NavigationItem & { external?: boolean };
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function MobileMenu({ items, cta }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const panelId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // El overlay se monta en <body> con un portal: dentro de la cabecera quedaría
  // atrapado por su `backdrop-filter`, que crea bloque contenedor para elementos
  // fijos y dejaba el panel del alto del propio header.
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeButton = panelRef.current?.querySelector<HTMLButtonElement>("[data-menu-close]");
    closeButton?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
      );
      const first = focusable.at(0);
      const last = focusable.at(-1);
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="st-mobile-menu">
      <button
        ref={triggerRef}
        className="st-mobile-menu__trigger"
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-label="Abrir menú de navegación"
        onClick={() => setIsOpen(true)}
      >
        <Menu aria-hidden="true" size={22} strokeWidth={1.8} />
      </button>

      {isOpen
        ? createPortal(
        <div className="st-mobile-menu__portal">
          <button
            className="st-mobile-menu__backdrop"
            type="button"
            aria-label="Cerrar menú de navegación"
            onClick={() => setIsOpen(false)}
          />
          <div
            ref={panelRef}
            id={panelId}
            className="st-mobile-menu__panel"
            role="dialog"
            aria-modal="true"
            aria-label="Navegación principal"
          >
            <div className="st-mobile-menu__top">
              <span className="st-mobile-menu__title">Menú</span>
              <button
                className="st-mobile-menu__close"
                type="button"
                aria-label="Cerrar menú de navegación"
                data-menu-close
                onClick={() => {
                  setIsOpen(false);
                  triggerRef.current?.focus();
                }}
              >
                <X aria-hidden="true" size={22} strokeWidth={1.8} />
              </button>
            </div>
            <nav aria-label="Navegación móvil">
              <ul className="st-mobile-menu__list">
                {items.map((item) => {
                  const isActive =
                    item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        className="st-mobile-menu__link"
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            {cta.external ? (
              <a
                className="st-mobile-menu__cta"
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                {cta.label}
              </a>
            ) : (
              <Link
                className="st-mobile-menu__cta"
                href={cta.href}
                onClick={() => setIsOpen(false)}
              >
                {cta.label}
              </Link>
            )}
          </div>
        </div>,
            document.body,
          )
        : null}
    </div>
  );
}
