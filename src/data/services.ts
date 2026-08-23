import type { WhatsAppIntent } from "@/lib/whatsapp";

export type ServiceIconName =
  | "computer"
  | "smartphone"
  | "network"
  | "camera"
  | "access"
  | "building";

export type Service = {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  items: readonly string[];
  icon: ServiceIconName;
  whatsappIntent: WhatsAppIntent;
  /** Fotografía propia del servicio. Ausente cuando todavía no hay una imagen honesta. */
  image?: string;
  imageAlt?: string;
};

export const services = [
  {
    id: "support",
    slug: "soporte-informatico",
    title: "Soporte informático",
    shortTitle: "Soporte informático",
    description:
      "Diagnóstico, reparación y mantenimiento de computadoras y laptops, con soluciones de hardware y software.",
    items: [
      "Computadoras",
      "Laptops",
      "Mantenimiento",
      "Reparación",
      "Diagnóstico",
      "Hardware",
      "Software",
      "Optimización",
    ],
    icon: "computer",
    whatsappIntent: "computers",
    image: "/services/soporte-informatico.jpg",
    imageAlt:
      "Laptop abierta en el taller durante una ampliación de almacenamiento",
  },
  {
    id: "devices",
    slug: "celulares-y-dispositivos",
    title: "Celulares y dispositivos",
    shortTitle: "Dispositivos",
    description:
      "Diagnóstico, mantenimiento, reparación y configuración de celulares, tablets y equipos electrónicos.",
    items: ["Reparación", "Diagnóstico", "Mantenimiento", "Configuración"],
    icon: "smartphone",
    whatsappIntent: "general",
    image: "/services/celulares-y-dispositivos.jpg",
    imageAlt:
      "Banco de trabajo de Shiro Telecom con equipos y herramientas de reparación",
  },
  {
    id: "networks",
    slug: "redes-y-telecomunicaciones",
    title: "Redes y telecomunicaciones",
    shortTitle: "Redes y telecomunicaciones",
    description:
      "Conectividad estable para hogares y empresas mediante redes WiFi y LAN, cableado e infraestructura.",
    items: [
      "WiFi",
      "Routers",
      "Access Points",
      "Redes LAN",
      "Cableado estructurado",
      "Conectividad",
      "Infraestructura",
    ],
    icon: "network",
    whatsappIntent: "general",
    image: "/services/redes-y-telecomunicaciones.jpg",
    imageAlt:
      "Técnico empalmando fibra óptica en una caja de distribución",
  },
  {
    id: "security",
    slug: "seguridad-electronica",
    title: "Seguridad electrónica",
    shortTitle: "Seguridad electrónica",
    description:
      "Soluciones de videovigilancia, alarmas y sensores diseñadas según cada espacio y necesidad.",
    items: ["CCTV", "Cámaras IP", "NVR", "DVR", "Alarmas", "Sensores"],
    icon: "camera",
    whatsappIntent: "cameras",
    image: "/services/seguridad-electronica.jpg",
    imageAlt:
      "Cámara motorizada y caja de conexiones instaladas en una pared exterior",
  },
  {
    id: "access-control",
    slug: "control-de-acceso",
    title: "Control de acceso",
    shortTitle: "Control de acceso",
    description:
      "Tecnología para gestionar accesos con cerraduras inteligentes, biometría y videoporteros.",
    items: [
      "Chapas electrónicas",
      "Cerraduras inteligentes",
      "Biometría",
      "PIN",
      "Tarjetas",
      "Videoporteros",
    ],
    icon: "access",
    whatsappIntent: "general",
  },
  {
    id: "business",
    slug: "soluciones-empresariales",
    title: "Soluciones empresariales",
    shortTitle: "Soluciones empresariales",
    description:
      "Infraestructura, soporte, redes, seguridad y telecomunicaciones integrados para organizaciones.",
    items: [
      "Soporte informático",
      "Infraestructura",
      "Mantenimiento",
      "WiFi empresarial",
      "Cableado estructurado",
      "CCTV",
      "Control de acceso",
      "Telecomunicaciones",
      "Implementación de proyectos",
    ],
    icon: "building",
    whatsappIntent: "business",
    image: "/services/soluciones-empresariales.jpg",
    imageAlt:
      "Instalación de cámara sobre escalera en una nave de gran altura",
  },
] as const satisfies readonly Service[];

/**
 * Catálogo público. Una categoría se publica únicamente cuando dispone de una
 * fotografía propia y honesta. Al añadir la imagen de Control de acceso volverá
 * a aparecer automáticamente en Servicios, Home y Footer.
 */
export const serviceList: readonly Service[] = services.filter(
  (service) => "image" in service && Boolean(service.image),
);

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
