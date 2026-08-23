/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V4 */
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { ProjectCard } from "@/components/cards/ProjectCard";
import { CTASection } from "@/components/layout/CTASection";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects } from "@/data/projects";
import { createPageMetadata } from "@/lib/metadata";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { PageTransition } from "@/components/layout/PageTransition";
import Image from "next/image";

const title = "Proyectos tecnológicos";
const description =
  "Estructura de proyectos de redes, telecomunicaciones, CCTV y control de acceso de Shiro Telecom. Casos e imágenes verificadas se incorporarán progresivamente.";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path: "/proyectos",
});

export default function ProyectosPage() {
  return (
    <PageTransition>
      <main>
        <PageHero
          tone="night"
          eyebrow="Proyectos"
          title="Soluciones diseñadas para el entorno real."
          description={
            <p>
              Cada proyecto parte de un problema concreto y conecta infraestructura,
              equipos e implementación dentro de un alcance claro.
            </p>
          }
          breadcrumbs={<Breadcrumbs items={[{ label: "Proyectos" }]} />}
          visual={
            <figure className="st-photo st-reveal">
              <Image
                className="st-photo__img"
                src="/heroes/proyectos.jpg"
                alt="Fachada con cámaras de videovigilancia instaladas, fotografiada al anochecer"
                width={1600}
                height={900}
                priority
                sizes="(min-width: 60rem) 46vw, 100vw"
              />
            </figure>
          }
        >
          <Button
            href={buildWhatsAppUrl("business")}
            external
            variant="whatsapp"
            iconEnd={<ArrowRight aria-hidden="true" size={18} />}
          >
            Conversar sobre un proyecto
          </Button>
          <Button href="#casos" variant="secondary">
            Explorar estructura
          </Button>
        </PageHero>

        <Section id="casos" tone="soft" size="spacious">
          <Container>
            <SectionHeader
              eyebrow="Portafolio en preparación"
              title="Así presentamos cada proyecto tecnológico."
              description={
                <p>
                  Los casos publicados explicarán con claridad el contexto, el problema,
                  la solución, las tecnologías empleadas y el resultado verificable.
                </p>
              }
            />

            <div className="mt-8 grid min-w-0 gap-6 lg:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard project={project} detailed key={project.id} />
              ))}
            </div>
          </Container>
        </Section>

        <Section size="spacious">
          <Container>
            <div className="grid min-w-0 gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-16">
              <SectionHeader
                eyebrow="Qué documentaremos"
                title="Qué encontrarás en cada caso."
                description={
                  <p>
                    Al incorporar proyectos autorizados, cada ficha mostrará el proceso y
                    la evidencia disponible, no solo una fotografía final.
                  </p>
                }
              />
              <dl className="st-reveal grid gap-px overflow-hidden border border-[var(--color-rule)] bg-[var(--color-rule)] sm:grid-cols-2">
                {[
                  ["Contexto", "Ubicación y cliente, respetando su privacidad cuando corresponda."],
                  ["Problema", "La necesidad operativa que dio origen al proyecto."],
                  ["Solución", "El criterio aplicado y el alcance de la implementación."],
                  ["Tecnologías", "Equipos, sistemas y componentes relevantes."],
                  ["Resultado", "El resultado verificable documentado con precisión."],
                  ["Imágenes", "Fotografías locales autorizadas y optimizadas para la web."],
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
          eyebrow="Tu proyecto puede comenzar aquí"
          title="Cuéntanos el problema y el lugar de implementación."
          description={
            <p>
              Podemos conversar sobre redes, telecomunicaciones, seguridad electrónica,
              control de acceso o una solución combinada.
            </p>
          }
          primary={{
            label: "Solicitar evaluación",
            href: buildWhatsAppUrl("business"),
            external: true,
            variant: "whatsapp",
            ariaLabel: "Solicitar evaluación de un proyecto empresarial por WhatsApp",
          }}
          secondary={{ label: "Ver soluciones empresariales", href: "/empresas" }}
        />
      </main>
    </PageTransition>
  );
}
