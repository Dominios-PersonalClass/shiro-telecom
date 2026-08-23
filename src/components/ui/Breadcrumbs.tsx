/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V4 */
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  return (
    <nav className={`st-breadcrumbs ${className}`.trim()} aria-label="Migas de pan">
      <ol className="st-breadcrumbs__list">
        <li className="st-breadcrumbs__item">
          <Link className="st-breadcrumbs__link" href="/" aria-label="Inicio">
            <Home aria-hidden="true" size={16} strokeWidth={1.8} />
            <span className="st-breadcrumbs__home-label">Inicio</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1 || !item.href;
          return (
            <li className="st-breadcrumbs__item" key={`${item.label}-${index}`}>
              <ChevronRight
                className="st-breadcrumbs__separator"
                aria-hidden="true"
                size={15}
                strokeWidth={1.8}
              />
              {isCurrent ? (
                <span className="st-breadcrumbs__current" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link className="st-breadcrumbs__link" href={item.href!}>
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

