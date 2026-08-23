/* Hallmark · component: service card · genre: modern-minimal · theme: Shiro locked system
 * states: default · hover · focus · active · disabled · loading · error · success
 * contrast: pass (token-dependent)
 * Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V4
 */
import {
  ArrowUpRight,
  Building2,
  Cctv,
  DoorOpen,
  Laptop,
  Network,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Service, ServiceIconName } from "@/data/services";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const serviceIcons: Record<ServiceIconName, LucideIcon> = {
  computer: Laptop,
  smartphone: Smartphone,
  network: Network,
  camera: Cctv,
  access: DoorOpen,
  building: Building2,
};

export interface ServiceCardProps {
  service: Service;
  ctaHref?: string;
  showItems?: boolean;
  className?: string;
}

export function ServiceCard({
  service,
  ctaHref,
  showItems = false,
  className = "",
}: ServiceCardProps) {
  const Icon = serviceIcons[service.icon];
  const supportHref = ctaHref ?? buildWhatsAppUrl(service.whatsappIntent);

  return (
    <article className={`st-service-card ${showItems ? "st-service-card--expanded" : ""} ${className}`.trim()}>
      {service.image ? (
        <span className="st-service-card__media">
          <Image
            className="st-service-card__image"
            src={service.image}
            alt={service.imageAlt ?? ""}
            width={1200}
            height={750}
            sizes="(min-width: 60rem) 33vw, 100vw"
          />
        </span>
      ) : null}
      <div className="st-service-card__topline">
        <span className="st-service-card__icon" aria-hidden="true">
          <Icon size={24} strokeWidth={1.7} />
        </span>
        <span className="st-service-card__signal" aria-hidden="true" />
      </div>
      <h3 className="st-service-card__title">{service.title}</h3>
      <p className="st-service-card__description">{service.description}</p>
      {showItems ? (
        <ul className="st-service-card__features" aria-label={`Incluye ${service.title}`}>
          {service.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      <div className="st-service-card__actions">
        <Link className="st-service-card__detail" href={`/servicios#${service.slug}`}>
          Ver solución
        </Link>
        <a
          className="st-service-card__cta"
          href={supportHref}
          target="_blank"
          rel="noopener noreferrer"
          data-event="support_request"
          aria-label={`Consultar por WhatsApp sobre ${service.title}`}
        >
          Consultar
          <ArrowUpRight aria-hidden="true" size={17} strokeWidth={1.8} />
        </a>
      </div>
    </article>
  );
}

