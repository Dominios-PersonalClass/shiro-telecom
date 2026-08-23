/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V4 */
import type { Metadata } from "next";
import { ArrowRight, Expand, Eye, Gauge, Lightbulb, MapPin } from "lucide-react";

import { CTASection } from "@/components/layout/CTASection";
import { PageHero } from "@/components/layout/PageHero";
import { NetworkVisual } from "@/components/visuals/NetworkVisual";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { PageTransition } from "@/components/layout/PageTransition";
import { GlobeVisual } from "@/components/visuals/GlobeVisual";
import Image from "next/image";

const title = "Nosotros";
const description =
  "Conoce el enfoque de Shiro Telecom: soluciones tecnológicas integrales desde La Merced, Chanchamayo, con cobertura en todo el Perú.";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path: "/nosotros",
});

const values = [
  {
    name: "Innovación",
    description:
      "Evaluar tecnología útil para resolver necesidades reales, no por novedad aislada.",
    icon: Lightbulb,
  },
  {
    name: "Escalabilidad",
    description:
      "Pensar soluciones capaces de acompañar nuevas etapas, equipos y requerimientos.",
    icon: Expand,
  },
  {
    name: "Eficiencia",
    description:
      "Ordenar el diagnóstico y la implementación alrededor del resultado que se necesita.",
    icon: Gauge,
  },
  {
    name: "Transparencia",
    description:
      "Explicar el problema, el alcance y las alternativas con lenguaje directo.",
    icon: Eye,
  },
];

export default function NosotrosPage() {
  return (
    <PageTransition>
      <main>
        <PageHero
          eyebrow="Nosotros"
          title="Tecnología que conecta, protege y mantiene tu mundo funcionando."
          description={
            <p>
              Shiro Telecom es una empresa peruana de soluciones tecnológicas integrales
              para personas, hogares, negocios e instituciones.
            </p>
          }
          breadcrumbs={<Breadcrumbs items={[{ label: "Nosotros" }]} />}
          visual={<NetworkVisual compact />}
        >
          <Button
            href={buildWhatsAppUrl("general")}
            external
            variant="whatsapp"
            iconEnd={<ArrowRight aria-hidden="true" size={18} />}
          >
            Cuéntanos tu necesidad
          </Button>
          <Button href="/servicios" variant="secondary">
            Conocer servicios
          </Button>
        </PageHero>

        <Section size="spacious">
          <Container>
            <p className="st-reveal max-w-[30ch] font-[family-name:var(--font-display)] text-[length:var(--text-2xl)] font-bold leading-[1.08] tracking-[-0.035em] text-[var(--color-brand-purple)]">
              {siteConfig.valueProposition}
            </p>

            <div className="mt-12 grid min-w-0 items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
              <figure className="st-photo st-reveal">
                <Image
                  className="st-photo__img st-photo__img--nosotros"
                  src="/team/tecnico-instalacion.jpg"
                  alt="Técnico de Shiro Telecom junto a una cámara motorizada recién instalada"
                  width={1200}
                  height={900}
                  sizes="(min-width: 60rem) 40vw, 100vw"
                />
                <figcaption className="st-photo__caption">
                  Instalación de una cámara motorizada en campo.
                </figcaption>
              </figure>
              <div className="min-w-0">
                <div className="space-y-5 text-base leading-7 text-[var(--color-ink-2)]">
                <p>
                  Nuestro enfoque comienza por comprender qué dejó de funcionar, qué se
                  necesita mejorar o qué proyecto debe ponerse en marcha. A partir de allí,
                  conectamos soporte informático, redes, telecomunicaciones, seguridad
                  electrónica y control de acceso cuando la solución lo requiere.
                </p>
                <p>
                  Esta visión permite atender tanto una laptop con fallas como una
                  implementación empresarial que combine conectividad, cableado, cámaras y
                  accesos.
                </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        <Section tone="night" size="spacious">
          <Container>
            <div className="grid min-w-0 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
              <SectionHeader
                eyebrow="Base local, alcance nacional"
                title="Operamos desde Chanchamayo para atender necesidades en todo el Perú."
                description={
                  <p>
                    Nuestro centro de operaciones está en {siteConfig.operationsCenter}. La
                    modalidad se define según el tipo de servicio, la ubicación y el
                    alcance del proyecto.
                  </p>
                }
              />
              <GlobeVisual className="st-reveal" />
            </div>
            <div className="mt-9 flex items-start gap-3 border-t border-[var(--color-brand-white)]/15 pt-6 text-sm leading-6 text-[var(--color-brand-white)]/75">
              <MapPin aria-hidden="true" className="mt-0.5 shrink-0 text-[var(--color-brand-mint)]" size={19} />
              <p>{siteConfig.address.display}</p>
            </div>
          </Container>
        </Section>

        <Section tone="soft" size="spacious">
          <Container>
            <SectionHeader
              eyebrow="Principios"
              title="Una filosofía práctica para decisiones tecnológicas."
              description={
                <p>
                  Estos valores orientan la forma de diagnosticar, proponer e implementar
                  una solución.
                </p>
              }
            />
            <div className="st-reveal mt-10 grid gap-px overflow-hidden border border-[var(--color-rule)] bg-[var(--color-rule)] md:grid-cols-2">
              {values.map(({ name, description: valueDescription, icon: Icon }) => (
                <article className="min-w-0 bg-[var(--color-brand-white)] p-6 sm:p-8" key={name}>
                  <Icon aria-hidden="true" className="text-[var(--color-brand-purple)]" size={26} strokeWidth={1.7} />
                  <h3 className="mt-6 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-ink)]">
                    {name}
                  </h3>
                  <p className="mt-3 max-w-[55ch] text-sm leading-6 text-[var(--color-ink-2)]">
                    {valueDescription}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </Section>

        <CTASection
          eyebrow="Impulsamos tu futuro digital, hoy"
          title="Hablemos de lo que necesitas resolver."
          description={
            <p>
              Comparte tu problema tecnológico y tu ubicación para orientar el siguiente
              paso.
            </p>
          }
          primary={{
            label: "Escribir por WhatsApp",
            href: buildWhatsAppUrl("general"),
            external: true,
            variant: "whatsapp",
            ariaLabel: "Escribir por WhatsApp a Shiro Telecom",
          }}
          secondary={{ label: "Ver contacto", href: "/contacto" }}
        />
      </main>
    </PageTransition>
  );
}
