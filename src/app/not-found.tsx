/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V5 */
import type { Metadata } from "next";
import { ArrowLeft, MessageCircle } from "lucide-react";

import { BrandObject } from "@/components/brand/BrandObject";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { PageTransition } from "@/components/layout/PageTransition";

export const metadata: Metadata = {
  title: "Página no encontrada",
  description:
    "La dirección solicitada no existe. Regresa al inicio o contacta a Shiro Telecom por WhatsApp.",
  openGraph: {
    title: "Página no encontrada",
    description: "La dirección solicitada no existe en el sitio de Shiro Telecom.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Página no encontrada",
    description: "La dirección solicitada no existe en el sitio de Shiro Telecom.",
  },
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <PageTransition>
      <main>
        <Section tone="night" size="spacious" className="min-h-[72vh]">
          <Container>
            <div className="grid min-w-0 gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center">
              <div className="min-w-0">
                <p className="font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--color-brand-mint)]">
                  Error 404
                </p>
                <h1 className="mt-4 max-w-2xl [overflow-wrap:anywhere] font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.02] tracking-[-0.035em] text-[var(--color-brand-white)] sm:text-5xl lg:text-6xl">
                  Esta ruta perdió la conexión.
                </h1>
                <p className="mt-6 max-w-[58ch] leading-7 text-[var(--color-brand-white)]/70">
                  La página que buscas no existe o cambió de dirección. Puedes volver al
                  inicio, revisar nuestros servicios o escribirnos si necesitas soporte.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    href="/"
                    variant="primary"
                    iconStart={<ArrowLeft aria-hidden="true" size={18} />}
                  >
                    Volver al inicio
                  </Button>
                  <Button
                    href={buildWhatsAppUrl("general")}
                    external
                    variant="whatsapp"
                    iconStart={<MessageCircle aria-hidden="true" size={18} />}
                  >
                    Solicitar soporte
                  </Button>
                </div>
              </div>
              <BrandObject tone="night" />
            </div>
          </Container>
        </Section>
      </main>
    </PageTransition>
  );
}
