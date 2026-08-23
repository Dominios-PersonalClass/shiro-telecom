/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V4 */
import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Building2,
  Camera,
  Check,
  KeyRound,
  Laptop,
  Network,
  Smartphone,
} from "lucide-react";

import { CTASection } from "@/components/layout/CTASection";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { serviceList, type Service } from "@/data/services";
import { createPageMetadata } from "@/lib/metadata";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { PageTransition } from "@/components/layout/PageTransition";
import Image from "next/image";

const title = "Servicios tecnológicos";
const description =
  "Soporte informático, reparación de dispositivos, redes, telecomunicaciones, CCTV, seguridad electrónica y control de acceso en Chanchamayo y todo el Perú.";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path: "/servicios",
});

const serviceIcons: Record<Service["icon"], LucideIcon> = {
  computer: Laptop,
  smartphone: Smartphone,
  network: Network,
  camera: Camera,
  access: KeyRound,
  building: Building2,
};

export default function ServiciosPage() {
  return (
    <PageTransition>
      <main>
        <PageHero
          eyebrow="Servicios"
          title="Soluciones para cada problema tecnológico."
          description={
            <p>
              Diagnóstico, reparación, conectividad y seguridad para hogares y
              organizaciones. Cuéntanos qué está pasando y encontraremos el camino
              adecuado.
            </p>
          }
          breadcrumbs={<Breadcrumbs items={[{ label: "Servicios" }]} />}
        >
          <Button
            href={buildWhatsAppUrl("general")}
            external
            variant="whatsapp"
            iconEnd={<ArrowRight aria-hidden="true" size={18} />}
          >
            Solicitar soporte
          </Button>
          <Button href="#categorias" variant="secondary">
            Ver categorías
          </Button>
        </PageHero>

        <Section id="categorias" tone="soft" size="spacious">
          <Container>
            <SectionHeader
              eyebrow="Qué podemos resolver"
              title="Servicios organizados alrededor de tu necesidad."
            />

            <div className="mt-10 grid min-w-0 gap-5 lg:grid-cols-2">
              {serviceList.map((service) => {
                const Icon = serviceIcons[service.icon];

                return (
                  <article
                    className="st-reveal st-lift flex min-w-0 flex-col border border-[var(--color-rule)] bg-[var(--color-brand-white)] p-6 sm:p-8"
                    id={service.slug}
                    key={service.id}
                  >
                    {service.image ? (
                      <span className="st-service-photo">
                        <Image
                          className="st-service-photo__img"
                          src={service.image}
                          alt={service.imageAlt ?? ""}
                          width={1200}
                          height={750}
                          sizes="(min-width: 64rem) 46vw, 100vw"
                        />
                      </span>
                    ) : null}
                    <div className="flex items-start gap-4">
                      <span className="grid size-11 shrink-0 place-items-center rounded-[var(--radius-sm)] bg-[var(--color-brand-purple-soft)] text-[var(--color-brand-purple)]">
                        <Icon aria-hidden="true" size={23} strokeWidth={1.8} />
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.025em] text-[var(--color-ink)]">
                          {service.title}
                        </h3>
                        <p className="mt-3 max-w-[65ch] text-sm leading-6 text-[var(--color-ink-2)] sm:text-base">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <ul className="mt-7 grid gap-x-5 gap-y-2 border-t border-[var(--color-rule-2)] pt-6 sm:grid-cols-2">
                      {service.items.map((item) => (
                        <li className="flex min-w-0 items-start gap-2 text-sm text-[var(--color-ink)]" key={item}>
                          <Check
                            aria-hidden="true"
                            className="mt-0.5 shrink-0 text-[var(--color-success)]"
                            size={16}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-7">
                      <Button
                        href={buildWhatsAppUrl(service.whatsappIntent)}
                        external
                        variant="secondary"
                        size="sm"
                        iconEnd={<ArrowRight aria-hidden="true" size={16} />}
                        ariaLabel={`Consultar este servicio: ${service.title} mediante WhatsApp`}
                      >
                        Consultar este servicio
                      </Button>
                    </div>
                  </article>
                );
              })}
            </div>
          </Container>
        </Section>

        <Section size="spacious">
          <Container>
            <div className="grid min-w-0 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-center lg:gap-16">
              <SectionHeader
                eyebrow="Atención flexible"
                title="El canal se adapta al problema."
                description={
                  <p>
                    Desde nuestro centro de operaciones en La Merced coordinamos atención
                    local, a domicilio, remota y proyectos empresariales con cobertura en
                    todo el Perú.
                  </p>
                }
              />
              <dl className="st-reveal grid gap-px overflow-hidden border border-[var(--color-rule)] bg-[var(--color-rule)] sm:grid-cols-2">
                {[
                  ["Local", "Atención desde La Merced, Chanchamayo."],
                  ["A domicilio", "Coordinación según servicio y ubicación."],
                  ["Remoto", "Asistencia cuando la necesidad puede resolverse a distancia."],
                  ["Proyecto empresarial", "Evaluación e implementación por alcance."],
                ].map(([term, detail]) => (
                  <div className="bg-[var(--color-brand-white)] p-6" key={term}>
                    <dt className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-ink)]">
                      {term}
                    </dt>
                    <dd className="mt-2 text-sm leading-6 text-[var(--color-ink-2)]">{detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Container>
        </Section>

        <CTASection
          eyebrow="¿No sabes qué categoría elegir?"
          title="Cuéntanos el problema. Nosotros encontramos la solución."
          description={
            <p>
              Describe qué equipo, espacio o sistema necesitas atender y desde dónde nos
              escribes.
            </p>
          }
          primary={{
            label: "Escribir por WhatsApp",
            href: buildWhatsAppUrl("general"),
            external: true,
            variant: "whatsapp",
            ariaLabel: "Escribir por WhatsApp para solicitar soporte general a Shiro Telecom",
          }}
          secondary={{ label: "Ver soluciones para empresas", href: "/empresas" }}
        />
      </main>
    </PageTransition>
  );
}
