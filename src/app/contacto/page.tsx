/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V4 */
import type { Metadata } from "next";
import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Music2,
  Phone,
} from "lucide-react";

import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { PageTransition } from "@/components/layout/PageTransition";
import { ContactCube } from "@/components/visuals/ContactCube";

const title = "Contacto";
const description =
  `Contacta a Shiro Telecom en La Merced, Chanchamayo. WhatsApp ${siteConfig.phone.display}. Atención: ${siteConfig.schedule.display}.`;

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path: "/contacto",
});

const whatsappUrl = buildWhatsAppUrl("general");

export default function ContactoPage() {
  return (
    <PageTransition>
      <main>
        <PageHero
          tone="night"
          eyebrow="Contacto"
          title="Cuéntanos qué necesitas resolver."
          description={
            <p>
              WhatsApp es nuestro canal comercial principal. Incluye tu nombre, el
              servicio que necesitas y tu ubicación para comenzar con mejor contexto.
            </p>
          }
          breadcrumbs={<Breadcrumbs items={[{ label: "Contacto" }]} />}
        >
          <Button
            href={whatsappUrl}
            external
            variant="whatsapp"
            iconStart={<MessageCircle aria-hidden="true" size={18} />}
            iconEnd={<ArrowRight aria-hidden="true" size={18} />}
            ariaLabel="Escribir por WhatsApp a Shiro Telecom"
          >
            Escribir por WhatsApp
          </Button>
          <Button href={siteConfig.phone.href} variant="secondary" iconStart={<Phone aria-hidden="true" size={18} />}>
            Llamar ahora
          </Button>
        </PageHero>

        <Section size="spacious">
          <Container>
            <div className="grid min-w-0 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
              <SectionHeader
                eyebrow="Canales oficiales"
                title="Elige la vía adecuada para tu consulta."
                description={
                  <p>
                    Para soporte, cotizaciones y proyectos recomendamos WhatsApp. El correo
                    electrónico está disponible como canal informativo.
                  </p>
                }
              />

              <ContactCube
                className="st-reveal"
                faces={[
                  {
                    id: "whatsapp",
                    label: "WhatsApp prioritario",
                    value: siteConfig.phone.display,
                    href: whatsappUrl,
                    external: true,
                    event: "whatsapp_click",
                    featured: true,
                    icon: <MessageCircle aria-hidden="true" size={26} />,
                  },
                  {
                    id: "telefono",
                    label: "Teléfono",
                    value: siteConfig.phone.display,
                    href: siteConfig.phone.href,
                    event: "phone_click",
                    icon: <Phone aria-hidden="true" size={26} />,
                  },
                  {
                    id: "email",
                    label: "Email informativo",
                    value: siteConfig.email.address,
                    href: siteConfig.email.href,
                    event: "email_click",
                    icon: <Mail aria-hidden="true" size={26} />,
                  },
                  {
                    id: "tiktok",
                    label: "TikTok oficial",
                    value: "@shirotelecom",
                    href: siteConfig.social.tiktok,
                    external: true,
                    event: "tiktok_click",
                    icon: <Music2 aria-hidden="true" size={26} />,
                  },
                ]}
              />
            </div>
          </Container>
        </Section>

        <Section tone="soft" size="spacious">
          <Container>
            <div className="st-reveal grid min-w-0 gap-px overflow-hidden border border-[var(--color-rule)] bg-[var(--color-rule)] lg:grid-cols-2">
              <address className="not-italic bg-[var(--color-brand-white)] p-7 sm:p-9">
                <MapPin aria-hidden="true" className="text-[var(--color-brand-purple)]" size={28} strokeWidth={1.7} />
                <h2 className="mt-7 font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--color-ink)]">
                  Centro de operaciones
                </h2>
                <p className="mt-4 max-w-[50ch] leading-7 text-[var(--color-ink-2)]">
                  {siteConfig.address.street}, {siteConfig.address.locality},{" "}
                  {siteConfig.address.district}, {siteConfig.address.region},{" "}
                  {siteConfig.address.country}
                </p>
                <p className="mt-4 text-sm font-semibold text-[var(--color-brand-purple)]">
                  Cobertura: {siteConfig.coverage}
                </p>
              </address>

              <div className="bg-[var(--color-brand-white)] p-7 sm:p-9">
                <Clock3 aria-hidden="true" className="text-[var(--color-brand-purple)]" size={28} strokeWidth={1.7} />
                <h2 className="mt-7 font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--color-ink)]">
                  Horario de atención
                </h2>
                <p className="mt-4 text-lg font-semibold text-[var(--color-ink)]">
                  {siteConfig.schedule.days}
                </p>
                <p className="mt-1 text-[var(--color-ink-2)]">{siteConfig.schedule.hours}</p>
                <ul className="mt-7 flex flex-wrap gap-2" aria-label="Modalidades de atención">
                  {siteConfig.serviceModalities.map((modality) => (
                    <li
                      className="rounded-[var(--radius-pill)] border border-[var(--color-rule)] px-3 py-1.5 text-xs font-semibold text-[var(--color-ink-2)]"
                      key={modality}
                    >
                      {modality}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Section>

        <Section tone="night" size="spacious">
          <Container>
            <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div>
                <p className="text-sm font-semibold text-[var(--color-brand-white)]/70">Respuesta con contexto</p>
                <h2 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.025em] text-[var(--color-brand-white)] sm:text-4xl">
                  Nombre, necesidad y ubicación: tres datos para comenzar.
                </h2>
              </div>
              <Button href={whatsappUrl} external variant="whatsapp" size="lg">
                Abrir WhatsApp
              </Button>
            </div>
          </Container>
        </Section>
      </main>
    </PageTransition>
  );
}
