/*
 * THESIS: Shiro convierte un problema tecnológico en una ruta visible hacia la solución; rehúye el hero SaaS centrado y abstracto.
 * OWN-WORLD: papel técnico claro, chasis gris noche, rutas índigo y pequeños nodos menta; módulos precisos sin exceso de tarjetas.
 * STORY: el visitante reconoce su problema, comprende la capacidad integral, ve cómo se trabaja y abre WhatsApp con contexto.
 * FIRST VIEWPORT: argumento 7/5 a la izquierda y una topología hogar/empresa/seguridad a la derecha; soporte siempre visible.
 * FORM: Split Studio, dirección elegida de la mesa de diagnóstico conectada; seed 3ff4b846, variante A delegada por el usuario.
 */
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Camera,
  CheckCircle2,
  CircleHelp,
  Headphones,
  House,
  Laptop,
  MapPinned,
  MessageCircle,
  ScanSearch,
  ShoppingBag,
  Smartphone,
  Wifi,
} from "lucide-react";

import {
  Button,
  Container,
  CTASection,
  ProductCard,
  ProjectCard,
  Section,
  SectionHeader,
  ServiceCard,
} from "@/components";
import { siteConfig } from "@/config/site";
import { products } from "@/data/products";
import { projects } from "@/data/projects";
import { serviceList } from "@/data/services";
import { createPageMetadata } from "@/lib/metadata";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { PageTransition } from "@/components/layout/PageTransition";
import Image from "next/image";

export const metadata: Metadata = createPageMetadata({
  title: "Shiro Telecom | Soluciones tecnológicas integrales",
  description:
    "Soporte informático, telecomunicaciones, redes, CCTV, control de acceso y soluciones empresariales desde Chanchamayo para todo el Perú.",
  path: "/",
});

const problemCards = [
  {
    title: "Mi computadora está fallando",
    detail: "Diagnóstico, reparación y mantenimiento.",
    href: buildWhatsAppUrl("computers"),
    icon: Laptop,
    external: true,
  },
  {
    title: "Mi celular necesita reparación",
    detail: "Revisión, mantenimiento y configuración.",
    href: "/servicios#celulares-y-dispositivos",
    icon: Smartphone,
    external: false,
  },
  {
    title: "Tengo problemas con mi WiFi",
    detail: "Cobertura, estabilidad y configuración de red.",
    href: "/servicios#redes-y-telecomunicaciones",
    icon: Wifi,
    external: false,
  },
  {
    title: "Necesito cámaras de seguridad",
    detail: "CCTV, cámaras IP, grabación y monitoreo.",
    href: buildWhatsAppUrl("cameras"),
    icon: Camera,
    external: true,
  },
  {
    title: "Necesito soporte para mi empresa",
    detail: "Una solución coordinada para tu operación.",
    href: buildWhatsAppUrl("business"),
    icon: Building2,
    external: true,
  },
  {
    title: "Quiero comprar tecnología",
    detail: "Catálogo sin precios y consulta de disponibilidad.",
    href: "/productos",
    icon: ShoppingBag,
    external: false,
  },
  {
    title: "Tengo otro problema",
    detail: "Cuéntanos el contexto y buscamos la solución.",
    href: buildWhatsAppUrl("general"),
    icon: CircleHelp,
    external: true,
  },
] as const;

const processSteps = [
  ["01", "Cuéntanos el problema", "Describe qué ocurre, en qué equipo o espacio y dónde te encuentras."],
  ["02", "Diagnosticamos", "Revisamos el contexto antes de recomendar equipos o intervenciones."],
  ["03", "Proponemos la solución", "Definimos una ruta clara y acorde con la necesidad identificada."],
  ["04", "Implementamos", "Ejecutamos la reparación, configuración o proyecto acordado."],
  ["05", "Te brindamos soporte", "Acompañamos la continuidad de la solución cuando lo necesites."],
] as const;

const strengths = [
  ["Solución integral", "Unimos soporte, conectividad, telecomunicaciones y seguridad en una misma evaluación."],
  ["Atención flexible", "Atención presencial, a domicilio y remota según el problema y la ubicación."],
  ["Cobertura nacional", "Operamos desde La Merced y atendemos necesidades y proyectos en todo el Perú."],
  ["Diagnóstico primero", "Partimos del problema antes de indicar una tecnología o intervención."],
  ["Hogar y empresa", "Ajustamos alcance y lenguaje para personas, viviendas y organizaciones."],
  ["Soporte especializado", "Cada solución considera configuración, implementación y continuidad."],
] as const;

export default function HomePage() {
  const generalWhatsApp = buildWhatsAppUrl("general");
  const businessWhatsApp = buildWhatsAppUrl("business");

  return (
    <PageTransition>
      <main>
        <section className="home-hero" aria-labelledby="home-title">
          <div className="home-hero__backdrop" aria-hidden="true">
            <picture className="home-hero__backdrop-media">
              <source
                media="(max-width: 59.999rem)"
                srcSet="/local/hero-shiro-telecom-mobile.png"
              />
              <Image
                src="/local/hero-shiro-telecom.png"
                alt=""
                fill
                priority
                sizes="100vw"
              />
            </picture>
          </div>
          <Container className="home-hero__container">
            <div className="home-hero__copy">
              <h1 id="home-title" className="home-hero__title">
                Soluciones tecnológicas que mantienen tu mundo conectado.
              </h1>
              <p className="home-hero__description">
                Informática, telecomunicaciones, redes y seguridad electrónica para
                hogares y empresas. Desde Chanchamayo, soluciones para todo el Perú.
              </p>
              <div className="home-hero__actions">
                <Button
                  href={generalWhatsApp}
                  external
                  size="lg"
                  iconStart={<Headphones aria-hidden="true" size={19} />}
                  ariaLabel="Solicitar soporte a Shiro Telecom por WhatsApp"
                >
                  Solicitar soporte
                </Button>
                <Button
                  href={generalWhatsApp}
                  external
                  variant="whatsapp"
                  size="lg"
                  iconStart={<MessageCircle aria-hidden="true" size={19} />}
                  ariaLabel="Hablar con Shiro Telecom por WhatsApp"
                >
                  Hablar por WhatsApp
                </Button>
              </div>
              <Link className="home-hero__explore" href="#resolver">
                Explorar soluciones
                <ArrowRight aria-hidden="true" size={17} />
              </Link>
              <p className="home-hero__location">
                <MapPinned aria-hidden="true" size={18} />
                Hub operativo: {siteConfig.operationsCenter}
              </p>
            </div>
          </Container>
        </section>

        <Section id="resolver" tone="soft" size="spacious" aria-labelledby="resolver-title">
          <Container>
            <SectionHeader
              titleId="resolver-title"
              title="¿Qué necesitas resolver?"
              titleAs="h2"
              description={
                <p id="resolver-description">
                  Empieza por lo que está pasando. Te llevamos al canal o servicio más útil.
                </p>
              }
            />
            <div className="problem-resolver" aria-describedby="resolver-description">
              {problemCards.map(({ title, detail, href, icon: Icon, external }) => {
                const content = (
                  <>
                    <span className="problem-resolver__icon" aria-hidden="true">
                      <Icon size={23} strokeWidth={1.7} />
                    </span>
                    <span className="problem-resolver__copy">
                      <strong>{title}</strong>
                      <span>{detail}</span>
                    </span>
                    <ArrowRight className="problem-resolver__arrow" aria-hidden="true" size={19} />
                  </>
                );

                return external ? (
                  <a
                    className="problem-resolver__item"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={title}
                  >
                    {content}
                  </a>
                ) : (
                  <Link className="problem-resolver__item" href={href} key={title}>
                    {content}
                  </Link>
                );
              })}
            </div>
          </Container>
        </Section>

        <Section id="soluciones" size="spacious" aria-labelledby="services-title">
          <Container>
            <SectionHeader
              titleId="services-title"
              title="Tecnología que conecta, protege y mantiene tu mundo funcionando."
              titleAs="h2"
              action={
                <Button href="/servicios" variant="secondary" iconEnd={<ArrowRight aria-hidden="true" size={17} />}>
                  Ver todos los servicios
                </Button>
              }
            />
            <div className="home-services-grid">
              {serviceList.map((service) => (
                <ServiceCard service={service} key={service.id} />
              ))}
            </div>
          </Container>
        </Section>

        <Section tone="night" size="spacious" aria-label="Soluciones para hogar y empresas">
          <Container>
            <div className="audience-split">
              <article className="audience-split__panel audience-split__panel--home">
                <House aria-hidden="true" size={32} strokeWidth={1.6} />
                <h2>Shiro Hogar</h2>
                <p>
                  Soporte, conectividad, dispositivos y seguridad para personas y viviendas.
                </p>
                <Button href={generalWhatsApp} external variant="secondary">
                  Necesito una solución
                </Button>
              </article>
              <article className="audience-split__panel audience-split__panel--business">
                <Building2 aria-hidden="true" size={32} strokeWidth={1.6} />
                <h2>Shiro Empresas</h2>
                <p>
                  Infraestructura y soporte tecnológico para negocios, organizaciones e instituciones.
                </p>
                <Button href={businessWhatsApp} external variant="whatsapp">
                  Solicitar evaluación
                </Button>
              </article>
            </div>
          </Container>
        </Section>

        <Section size="spacious" aria-labelledby="process-title">
          <Container>
            <div className="process-layout">
              <div className="process-layout__intro">
                <ScanSearch aria-hidden="true" size={34} strokeWidth={1.5} />
                <h2 id="process-title">Un proceso claro, desde el diagnóstico.</h2>
                <p>Primero entendemos. Después proponemos e implementamos.</p>
              </div>
              <ol className="process-list">
                {processSteps.map(([number, title, description]) => (
                  <li key={number}>
                    <span className="process-list__number">{number}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Container>
        </Section>

        <Section tone="soft" size="spacious" aria-labelledby="strengths-title">
          <Container>
            <SectionHeader
              titleId="strengths-title"
              title="Por qué Shiro Telecom"
              titleAs="h2"
              description={<p>Capacidad práctica, cobertura amplia y una conversación centrada en tu necesidad.</p>}
            />
            <div className="strengths-list">
              {strengths.map(([title, description], index) => (
                <article key={title}>
                  <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                  <CheckCircle2 aria-hidden="true" size={20} />
                </article>
              ))}
            </div>
          </Container>
        </Section>

        <Section size="spacious" aria-labelledby="projects-title">
          <Container>
            <SectionHeader
              titleId="projects-title"
              title="Proyectos preparados para documentar resultados reales."
              titleAs="h2"
              action={
                <Button href="/proyectos" variant="secondary" iconEnd={<ArrowRight aria-hidden="true" size={17} />}>
                  Ver proyectos
                </Button>
              }
            />
            <div className="home-projects-grid">
              {projects.slice(0, 3).map((project) => (
                <ProjectCard project={project} key={project.id} />
              ))}
            </div>
          </Container>
        </Section>

        <Section tone="soft" size="spacious" aria-labelledby="products-title">
          <Container>
            <SectionHeader
              titleId="products-title"
              title="Tecnología seleccionada según tu necesidad."
              titleAs="h2"
              action={
                <Button href="/productos" variant="secondary" iconEnd={<ArrowRight aria-hidden="true" size={17} />}>
                  Explorar catálogo
                </Button>
              }
            />
            <div className="home-products-grid">
              {products.slice(0, 3).map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </div>
          </Container>
        </Section>

        <Section tone="night" size="spacious" aria-labelledby="coverage-title">
          <Container>
            <div className="coverage-layout">
              <div className="coverage-layout__copy">
                <MapPinned aria-hidden="true" size={34} strokeWidth={1.5} />
                <h2 id="coverage-title">Un hub local. Cobertura nacional.</h2>
                <p>
                  Centro de operaciones en <strong>La Merced — Chanchamayo</strong> y
                  cobertura de soluciones en <strong>todo el Perú</strong>.
                </p>
              </div>
              <div className="coverage-layout__modes">
                <p>Modalidades de atención</p>
                <ul>
                  {siteConfig.serviceModalities.map((modality, index) => (
                    <li key={modality}>
                      <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                      {modality}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Section>

        <CTASection
          title="¿Tienes un problema tecnológico?"
          description={<p>Cuéntanos qué necesitas y encontremos la solución.</p>}
          primary={{
            label: "Escribir por WhatsApp",
            href: generalWhatsApp,
            external: true,
            variant: "whatsapp",
            ariaLabel: "Escribir por WhatsApp para contar mi problema tecnológico",
          }}
          secondary={{ label: "Ver contacto", href: "/contacto", variant: "secondary" }}
          tone="brand"
        />
      </main>
    </PageTransition>
  );
}
