/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V4 */
import type { CSSProperties } from "react";
import type { Metadata } from "next";
import {
  ArrowRight,
  Building2,
  Cable,
  Camera,
  Check,
  KeyRound,
  Laptop,
  Network,
  RadioTower,
  Store,
  Wifi,
} from "lucide-react";

import { CTASection } from "@/components/layout/CTASection";
import { PageHero } from "@/components/layout/PageHero";
import { IsometricScene } from "@/components/visuals/IsometricScene";
import { NetworkVisual } from "@/components/visuals/NetworkVisual";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { createPageMetadata } from "@/lib/metadata";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { PageTransition } from "@/components/layout/PageTransition";

const title = "Soluciones tecnológicas para empresas";
const description =
  "Soporte, infraestructura, redes, WiFi empresarial, CCTV, control de acceso y telecomunicaciones para empresas e instituciones en todo el Perú.";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path: "/empresas",
});

const audiences = [
  { label: "Negocios y comercios", icon: Store },
  { label: "Empresas y oficinas", icon: Building2 },
  { label: "Instituciones", icon: Network },
];

const businessSolutions = [
  {
    title: "Soporte e infraestructura",
    description:
      "Diagnóstico, mantenimiento y soporte informático para mantener puestos y equipos operativos.",
    icon: Laptop,
    items: ["Soporte informático", "Mantenimiento", "Infraestructura"],
  },
  {
    title: "Conectividad empresarial",
    description:
      "Redes diseñadas según el espacio, los usuarios y las necesidades de operación.",
    icon: Wifi,
    items: ["WiFi empresarial", "Redes LAN", "Access Points"],
  },
  {
    title: "Cableado y telecomunicaciones",
    description:
      "Base física ordenada para conectar equipos, áreas y servicios tecnológicos.",
    icon: Cable,
    items: ["Cableado estructurado", "Conectividad", "Telecomunicaciones"],
  },
  {
    title: "Videovigilancia",
    description:
      "Sistemas CCTV evaluados según accesos, áreas críticas y necesidades de supervisión.",
    icon: Camera,
    items: ["Cámaras IP", "NVR y DVR", "Alarmas y sensores"],
  },
  {
    title: "Control de acceso",
    description:
      "Tecnología para gestionar ingresos con credenciales adecuadas al flujo del lugar.",
    icon: KeyRound,
    items: ["Biometría", "PIN y tarjetas", "Cerraduras electrónicas"],
  },
  {
    title: "Implementación de proyectos",
    description:
      "Integración de soporte, conectividad y seguridad dentro de una solución coordinada.",
    icon: RadioTower,
    items: ["Evaluación", "Implementación", "Soporte"],
  },
];

const businessWhatsAppUrl = buildWhatsAppUrl("business");

export default function EmpresasPage() {
  return (
    <PageTransition>
      <main>
        <PageHero
          tone="night"
          eyebrow="Shiro Empresas"
          title="Tecnología que mantiene tu empresa operativa."
          description={
            <p>
              Integramos soporte, redes, telecomunicaciones, seguridad electrónica y
              control de acceso para negocios, oficinas, comercios e instituciones.
            </p>
          }
          breadcrumbs={<Breadcrumbs items={[{ label: "Empresas" }]} />}
          visual={<NetworkVisual compact title="Soluciones conectadas para empresas" />}
        >
          <Button
            href={businessWhatsAppUrl}
            external
            variant="whatsapp"
            iconEnd={<ArrowRight aria-hidden="true" size={18} />}
          >
            Solicitar evaluación
          </Button>
          <Button href="#soluciones" variant="secondary">
            Ver soluciones
          </Button>
        </PageHero>

        <Section size="compact" aria-label="Organizaciones atendidas">
          <Container>
            <ul className="grid gap-3 sm:grid-cols-3">
              {audiences.map(({ label, icon: Icon }) => (
                <li
                  className="flex min-w-0 items-center gap-3 border-y border-[var(--color-rule)] py-4 text-sm font-semibold text-[var(--color-ink)]"
                  key={label}
                >
                  <Icon aria-hidden="true" className="shrink-0 text-[var(--color-brand-purple)]" size={20} />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </Container>
        </Section>

        <Section id="soluciones" tone="soft" size="spacious">
          <Container>
            <SectionHeader
              eyebrow="Capacidad integral"
              title="Una solución coordinada, no piezas aisladas."
              description={
                <p>
                  Partimos de la necesidad operativa y conectamos los servicios que el
                  entorno realmente requiere.
                </p>
              }
            />

            <div className="st-reveal st-box3d-grid mt-10 grid gap-5 md:grid-cols-2">
              {businessSolutions.map(({ title: itemTitle, description: itemDescription, icon: Icon, items }, index) => (
                <article
                  className="st-box3d flex min-w-0 flex-col rounded-[var(--radius-md)] border border-[var(--color-rule)] bg-[var(--color-brand-white)] p-6 md:p-7"
                  key={itemTitle}
                  style={{ "--box-delay": `${index * 900}ms` } as CSSProperties}
                >
                  <Icon aria-hidden="true" className="text-[var(--color-brand-purple)]" size={28} strokeWidth={1.8} />
                  <h3 className="mt-6 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-ink)]">
                    {itemTitle}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--color-ink-2)]">
                    {itemDescription}
                  </p>
                  <ul className="mt-6 space-y-2 border-t border-[var(--color-rule-2)] pt-5">
                    {items.map((item) => (
                      <li className="flex items-start gap-2 text-sm text-[var(--color-ink)]" key={item}>
                        <Check
                          aria-hidden="true"
                          className="mt-0.5 shrink-0 text-[var(--color-success)]"
                          size={16}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </Container>
        </Section>

        <Section tone="night" size="spacious" aria-labelledby="instalacion-title">
          <Container>
            <div className="grid min-w-0 items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
              <div className="min-w-0">
                <p className="st-eyebrow">Una instalación integrada</p>
                <h2
                  className="mt-3 max-w-[16ch] font-[family-name:var(--font-display)] text-[length:var(--text-3xl)] font-bold leading-[1.05] tracking-[-0.035em] text-[var(--color-brand-white)]"
                  id="instalacion-title"
                >
                  Los equipos no trabajan solos.
                </h2>
                <p className="mt-6 max-w-[46ch] text-[length:var(--text-lg)] leading-7 text-[var(--color-paper-3)]">
                  Servidor, red y videovigilancia comparten cableado, direccionamiento y
                  mantenimiento. Evaluamos la instalación completa antes de recomendar
                  cualquier equipo por separado.
                </p>
              </div>
              <IsometricScene tone="night" />
            </div>
          </Container>
        </Section>

        <Section size="spacious">
          <Container>
            <div className="grid min-w-0 gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
              <SectionHeader
                eyebrow="Cómo trabajamos"
                title="Del problema a una implementación clara."
                description={
                  <p>
                    La evaluación ayuda a definir alcance, prioridades y tecnologías antes
                    de implementar.
                  </p>
                }
              />
              <ol className="divide-y divide-[var(--color-rule)] border-y border-[var(--color-rule)]">
                {[
                  ["01", "Necesidad", "Nos cuentas la operación, el problema y la ubicación."],
                  ["02", "Evaluación", "Revisamos el entorno y las dependencias de la solución."],
                  ["03", "Propuesta", "Definimos un alcance coherente con la necesidad identificada."],
                  ["04", "Implementación", "Ejecutamos y dejamos la solución lista para operar."],
                  ["05", "Soporte", "Acompañamos la continuidad tecnológica del proyecto."],
                ].map(([number, step, copy]) => (
                  <li className="grid gap-2 py-5 sm:grid-cols-[3rem_9rem_minmax(0,1fr)] sm:items-baseline" key={number}>
                    <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--color-brand-purple)]">
                      {number}
                    </span>
                    <strong className="text-[var(--color-ink)]">{step}</strong>
                    <span className="text-sm leading-6 text-[var(--color-ink-2)]">{copy}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Container>
        </Section>

        <CTASection
          eyebrow="Hablemos de tu operación"
          title="Cuéntanos qué necesita tu empresa."
          description={
            <p>
              Comparte tu necesidad, empresa y ubicación por WhatsApp para iniciar la
              evaluación.
            </p>
          }
          primary={{
            label: "Hablar con Shiro Telecom",
            href: businessWhatsAppUrl,
            external: true,
            variant: "whatsapp",
            ariaLabel: "Hablar con Shiro Telecom sobre una solución empresarial por WhatsApp",
          }}
          secondary={{ label: "Ver proyectos", href: "/proyectos", variant: "secondary" }}
        />
      </main>
    </PageTransition>
  );
}
