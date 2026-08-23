/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V4 */
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { CTASection } from "@/components/layout/CTASection";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { products } from "@/data/products";
import { createPageMetadata } from "@/lib/metadata";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

import { ProductCatalog } from "./product-catalog";
import { PageTransition } from "@/components/layout/PageTransition";
import { ProductMarquee } from "@/components/cards/ProductMarquee";
import Image from "next/image";

const title = "Catálogo de productos tecnológicos";
const description =
  "Consulta productos de computación, redes, seguridad electrónica y control de acceso. Catálogo sin precios y disponibilidad confirmada por WhatsApp.";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path: "/productos",
});

export default function ProductosPage() {
  return (
    <PageTransition>
      <main>
        <PageHero
          eyebrow="Catálogo"
          title="Tecnología elegida para lo que necesitas."
          description={
            <p>
              Explora el catálogo único de Shiro Telecom. No mostramos precios: cada
              consulta confirma modelo, compatibilidad y disponibilidad antes de comprar.
            </p>
          }
          breadcrumbs={<Breadcrumbs items={[{ label: "Productos" }]} />}
          visual={
            <figure className="st-photo st-reveal">
              <Image
                className="st-photo__img"
                src="/heroes/productos.jpg"
                alt="Cámara Imou Full-Color WiFi de exterior lista para entregar e instalar"
                width={1600}
                height={900}
                priority
                sizes="(min-width: 60rem) 46vw, 100vw"
              />
            </figure>
          }
        >
          <Button
            href="#catalogo"
            variant="primary"
            iconEnd={<ArrowRight aria-hidden="true" size={18} />}
          >
            Explorar catálogo
          </Button>
          <Button href={buildWhatsAppUrl("general")} external variant="whatsapp">
            Consulta general
          </Button>
        </PageHero>

        <Section id="catalogo" tone="soft" size="spacious">
          <Container>
            <div className="max-w-3xl">
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.025em] text-[var(--color-ink)] sm:text-4xl">
                Catálogo disponible para consulta
              </h2>
              <p className="mt-4 max-w-[65ch] leading-7 text-[var(--color-ink-2)]">
                Busca por nombre o característica y filtra las categorías generadas a
                partir de los productos publicados.
              </p>
            </div>

            <ProductMarquee className="mt-8" products={products} />

            <div className="mt-10">
              <ProductCatalog products={products} />
            </div>
          </Container>
        </Section>

        <CTASection
          eyebrow="¿Buscas otro equipo?"
          title="Consulta el producto que necesitas."
          description={
            <p>
              Dinos qué uso tendrá, dónde lo necesitas y cualquier requisito que debamos
              considerar.
            </p>
          }
          primary={{
            label: "Consultar disponibilidad",
            href: buildWhatsAppUrl("general"),
            external: true,
            variant: "whatsapp",
            ariaLabel: "Consultar disponibilidad de un producto tecnológico por WhatsApp",
          }}
          secondary={{ label: "Ver servicios", href: "/servicios" }}
        />
      </main>
    </PageTransition>
  );
}
