export const PRODUCT_AVAILABILITY = [
  "Disponible",
  "Bajo pedido",
  "Consultar disponibilidad",
] as const;

export type ProductAvailability = (typeof PRODUCT_AVAILABILITY)[number];

export type Product = {
  id: string;
  name: string;
  brand: string;
  category: string;
  description: string;
  features: readonly string[];
  image: string;
  imageAlt: string;
  availability: ProductAvailability;
  isTemporary: boolean;
};

/**
 * CATÁLOGO CON FOTOGRAFÍA PROPIA
 * Las imágenes corresponden a equipos que Shiro Telecom ha instalado o preparado.
 * No se publican precios ni stock: el modelo exacto y la disponibilidad se
 * confirman en la consulta. Marca solo se declara cuando es legible en la foto.
 */
export const products = [
  {
    id: "camara-wifi-exterior",
    name: "Cámara WiFi exterior full-color",
    brand: "Imou",
    category: "Seguridad electrónica",
    description:
      "Cámara de exterior con visión a color de noche y detección de personas, para viviendas y fachadas de negocio.",
    features: ["WiFi", "Full-color nocturno", "Detección de personas"],
    image: "/products/camara-wifi-exterior.jpg",
    imageAlt: "Caja de una cámara Imou Full-Color WiFi Outdoor lista para instalar",
    availability: "Consultar disponibilidad",
    isTemporary: false,
  },
  {
    id: "camara-ptz-wifi",
    name: "Cámara PTZ WiFi motorizada",
    brand: "Imou",
    category: "Seguridad electrónica",
    description:
      "Cámara motorizada con giro e inclinación para cubrir patios, estacionamientos y áreas amplias con un solo punto.",
    features: ["Giro e inclinación", "WiFi", "Visión nocturna"],
    image: "/products/camara-ptz-wifi.jpg",
    imageAlt: "Cámara PTZ WiFi con antenas, preparada antes de su instalación",
    availability: "Consultar disponibilidad",
    isTemporary: false,
  },
  {
    id: "camara-domo-exterior",
    name: "Cámara domo para exterior",
    brand: "Marca según proyecto",
    category: "Seguridad electrónica",
    description:
      "Domo de exterior con brazo de pared, pensado para instalaciones en altura sobre fachadas y perímetros.",
    features: ["Montaje en pared", "Uso exterior", "Instalación evaluada"],
    image: "/products/camara-domo-motorizada.jpg",
    imageAlt: "Cámara domo con brazo de pared sostenida antes del montaje",
    availability: "Consultar disponibilidad",
    isTemporary: false,
  },
  {
    id: "kit-internet-satelital",
    name: "Kit de internet satelital",
    brand: "Starlink",
    category: "Conectividad",
    description:
      "Antena satelital para zonas sin cobertura de fibra o cable. Incluye instalación, orientación y configuración.",
    features: ["Cobertura rural", "Instalación y orientación", "Configuración incluida"],
    image: "/products/kit-internet-satelital.jpg",
    imageAlt: "Kit de internet satelital Starlink recién abierto en el taller",
    availability: "Consultar disponibilidad",
    isTemporary: false,
  },
  {
    id: "router-wifi-doble-banda",
    name: "Router WiFi doble banda",
    brand: "Marca según proyecto",
    category: "Redes",
    description:
      "Router para hogares y oficinas pequeñas, dimensionado según la cantidad de usuarios y el tamaño del espacio.",
    features: ["Doble banda", "Antenas externas", "Configuración asistida"],
    image: "/products/router-wifi-doble-banda.jpg",
    imageAlt: "Router WiFi de doble banda con antenas externas sobre un escritorio",
    availability: "Consultar disponibilidad",
    isTemporary: false,
  },
  {
    id: "repetidor-wifi",
    name: "Repetidor WiFi",
    brand: "Marca según proyecto",
    category: "Redes",
    description:
      "Extensor de cobertura para llegar a habitaciones o áreas donde la señal del router no alcanza.",
    features: ["Amplía cobertura", "Instalación sencilla", "Configuración incluida"],
    image: "/products/repetidor-wifi.jpg",
    imageAlt: "Repetidor WiFi instalado en pared junto al equipo de red del domicilio",
    availability: "Consultar disponibilidad",
    isTemporary: false,
  },
  {
    id: "placa-y-componentes",
    name: "Placa madre y componentes de PC",
    brand: "MSI",
    category: "Computación",
    description:
      "Armado y actualización de computadoras de escritorio: placa, memoria, almacenamiento y refrigeración.",
    features: ["Armado a medida", "Actualización de equipos", "Pruebas antes de entregar"],
    image: "/products/placa-y-componentes.jpg",
    imageAlt: "Placa madre MSI preparada en el taller para el armado de un equipo",
    availability: "Consultar disponibilidad",
    isTemporary: false,
  },
  {
    id: "procesador",
    name: "Procesador para equipo de escritorio",
    brand: "Intel",
    category: "Computación",
    description:
      "Procesadores para armado o mejora de equipos, elegidos según el uso real: oficina, diseño o producción.",
    features: ["Elección según uso", "Instalación incluida", "Compatibilidad verificada"],
    image: "/products/procesador.jpg",
    imageAlt: "Procesador Intel Core Ultra 5 montado en el zócalo de la placa",
    availability: "Consultar disponibilidad",
    isTemporary: false,
  },
] as const satisfies readonly Product[];

export const productCategories = Array.from(
  new Set(products.map((product) => product.category)),
);

export const productsDataNotice =
  "Fotografías de equipos instalados o preparados por Shiro Telecom. No publicamos precios: el modelo exacto y la disponibilidad se confirman en la consulta.";
