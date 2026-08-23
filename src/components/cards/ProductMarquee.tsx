/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V5 */
import Image from "next/image";
import type { Product } from "@/data/products";

export interface ProductMarqueeProps {
  products: readonly Product[];
  label?: string;
  className?: string;
}

/**
 * Carrusel continuo: la tira se recorre en bucle sin principio ni final visibles.
 * El truco es duplicar la lista y desplazar exactamente la mitad, de modo que el
 * salto de vuelta caiga sobre una copia idéntica. La segunda copia queda oculta a
 * la tecnología asistiva para no repetir el catálogo dos veces.
 */
export function ProductMarquee({
  products,
  label = "Recorrido del catálogo",
  className = "",
}: ProductMarqueeProps) {
  if (!products.length) {
    return null;
  }

  return (
    <div className={`st-marquee ${className}`.trim()} aria-label={label} role="group">
      <div className="st-marquee__track">
        {[0, 1].map((copy) => (
          <ul className="st-marquee__row" key={copy} aria-hidden={copy === 1 ? "true" : undefined}>
            {products.map((product) => (
              <li className="st-marquee__item" key={`${copy}-${product.id}`}>
                <span className="st-marquee__media">
                  <Image
                    src={product.image}
                    alt={copy === 1 ? "" : product.imageAlt}
                    width={320}
                    height={240}
                    sizes="240px"
                    loading="eager"
                  />
                </span>
                <span className="st-marquee__body">
                  <span className="st-marquee__category">{product.category}</span>
                  <strong className="st-marquee__name">{product.name}</strong>
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
