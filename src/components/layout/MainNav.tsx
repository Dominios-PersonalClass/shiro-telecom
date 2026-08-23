"use client";

/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V5 */
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavigationItem } from "./MobileMenu";

export interface MainNavProps {
  items: readonly NavigationItem[];
}

export function isCurrentSection(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname() ?? "/";

  return (
    <nav className="st-site-header__nav" aria-label="Navegación principal">
      <ul className="st-site-header__nav-list">
        {items.map((item) => {
          const current = isCurrentSection(pathname, item.href);

          return (
            <li key={item.href}>
              <Link
                className="st-site-header__nav-link"
                href={item.href}
                aria-current={current ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
