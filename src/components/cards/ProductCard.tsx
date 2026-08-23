/* Hallmark · component: product card · genre: modern-minimal · theme: Shiro locked system
 * states: default · hover · focus · active · disabled · loading · error · success
 * contrast: pass (token-dependent)
 * Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V4
 */
import { MessageCircle, PackageCheck } from "lucide-react";
import Image from "next/image";
import type { Product } from "@/data/products";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Badge } from "../ui/Badge";

export interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className = "" }: ProductCardProps) {
  const inquiryHref = buildWhatsAppUrl({
    intent: "product",
    productName: product.name,
  });

  return (
    <article className={`st-product-card ${className}`.trim()}>
      <div className="st-product-card__media">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="st-product-card__image"
        />
        {product.isTemporary ? (
          <Badge className="st-product-card__temporary" tone="inverse">
            Ficha temporal
          </Badge>
        ) : null}
      </div>
      <div className="st-product-card__body">
        <div className="st-product-card__meta">
          <span>{product.brand}</span>
          <span aria-hidden="true">·</span>
          <span>{product.category}</span>
        </div>
        <h3 className="st-product-card__title">{product.name}</h3>
        <p className="st-product-card__description">{product.description}</p>
        <ul className="st-product-card__features" aria-label={`Características de ${product.name}`}>
          {product.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <div className="st-product-card__footer">
          <Badge tone={product.availability === "Disponible" ? "success" : "neutral"} dot>
            {product.availability}
          </Badge>
          <a
            className="st-product-card__cta"
            href={inquiryHref}
            target="_blank"
            rel="noopener noreferrer"
            data-event="product_inquiry"
            aria-label={`Consultar por WhatsApp: disponibilidad de ${product.name}`}
          >
            <MessageCircle aria-hidden="true" size={17} strokeWidth={1.8} />
            Consultar por WhatsApp
          </a>
        </div>
      </div>
      <PackageCheck className="st-product-card__watermark" aria-hidden="true" />
    </article>
  );
}
