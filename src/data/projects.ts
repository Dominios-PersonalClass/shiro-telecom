export type Project = {
  id: string;
  title: string;
  category: string;
  location: string;
  client: string;
  problem: string;
  solution: string;
  technologies: readonly string[];
  result: string;
  images: readonly string[];
  imageAlts: readonly string[];
  isPlaceholder: boolean;
};

/**
 * TRABAJOS DOCUMENTADOS CON FOTOGRAFÍA PROPIA
 * Las imágenes son de intervenciones reales de Shiro Telecom. El texto describe
 * únicamente lo que la fotografía muestra y el tipo de trabajo ejecutado: no se
 * declaran clientes, cifras ni resultados que no estén confirmados por escrito.
 * Al obtener la autorización del cliente, completar `client`, `location` y `result`.
 */
export const projects = [
  {
    id: "cctv-perimetral-vivienda",
    title: "Videovigilancia perimetral en vivienda",
    category: "Seguridad electrónica",
    location: "Chanchamayo, Junín",
    client: "Cliente privado — nombre reservado",
    problem:
      "Cubrir el perímetro y los accesos de una vivienda de dos niveles, incluyendo las horas sin luz natural.",
    solution:
      "Cámaras exteriores montadas en los ángulos de la fachada, con cableado ordenado hasta el punto de grabación.",
    technologies: ["CCTV", "Cámaras exteriores", "Cableado"],
    result:
      "Detalle del alcance pendiente de publicar hasta contar con la autorización del cliente.",
    images: ["/projects/cctv-exterior-nocturno.jpg"],
    imageAlts: ["Fachada de vivienda al anochecer con cámaras instaladas en sus esquinas"],
    isPlaceholder: false,
  },
  {
    id: "cctv-nave-industrial",
    title: "Cámaras en nave de gran altura",
    category: "Seguridad electrónica",
    location: "Chanchamayo, Junín",
    client: "Cliente empresarial — nombre reservado",
    problem:
      "Supervisar el interior de una nave de techo alto, donde una sola cámara mal ubicada deja zonas ciegas.",
    solution:
      "Montaje en altura sobre estructura, con cámara domo orientada para cubrir la mayor superficie posible.",
    technologies: ["CCTV", "Cámara domo", "Montaje en altura"],
    result:
      "Detalle del alcance pendiente de publicar hasta contar con la autorización del cliente.",
    images: ["/projects/cctv-nave-industrial.jpg"],
    imageAlts: ["Instalación de una cámara domo sobre escalera dentro de una nave de gran altura"],
    isPlaceholder: false,
  },
  {
    id: "fibra-optica-campo",
    title: "Empalme de fibra óptica en campo",
    category: "Telecomunicaciones",
    location: "Trabajo en campo — Junín",
    client: "Trabajo de infraestructura",
    problem:
      "Restablecer y ordenar un tramo de fibra óptica fuera del área urbana, sin taller ni energía cercana.",
    solution:
      "Empalme y sellado de la caja de distribución en sitio, con verificación antes de cerrar el trabajo.",
    technologies: ["Fibra óptica", "Empalme", "Caja de distribución"],
    result:
      "Detalle del alcance pendiente de publicar hasta contar con la autorización del cliente.",
    images: ["/projects/fibra-optica-campo.jpg"],
    imageAlts: ["Dos técnicos de Shiro Telecom empalmando fibra óptica sobre el terreno"],
    isPlaceholder: false,
  },
  {
    id: "instalacion-local-comercial",
    title: "Instalación en local comercial",
    category: "Soluciones empresariales",
    location: "La Merced, Chanchamayo",
    client: "Cliente comercial — nombre reservado",
    problem:
      "Equipar un local en funcionamiento sin interrumpir la atención al público durante la instalación.",
    solution:
      "Trabajo coordinado en tienda, con montaje en altura y recorrido de cables sobre la estructura existente.",
    technologies: ["Instalación en tienda", "Montaje en altura", "Cableado"],
    result:
      "Detalle del alcance pendiente de publicar hasta contar con la autorización del cliente.",
    images: ["/projects/comercio-instalacion.jpg"],
    imageAlts: ["Equipo de Shiro Telecom trabajando dentro de un local comercial abierto"],
    isPlaceholder: false,
  },
  {
    id: "estacion-telemetria",
    title: "Estación de medición en campo",
    category: "Telecomunicaciones",
    location: "Trabajo en campo — Junín",
    client: "Trabajo de infraestructura",
    problem:
      "Instalar y dejar operativo un punto de medición alejado, con alimentación y enlace propios.",
    solution:
      "Montaje sobre poste con sensores y equipo de comunicación, orientado y fijado para exteriores.",
    technologies: ["Telemetría", "Montaje en poste", "Enlace de datos"],
    result:
      "Detalle del alcance pendiente de publicar hasta contar con la autorización del cliente.",
    images: ["/projects/estacion-telemetria.jpg"],
    imageAlts: ["Estación de medición montada sobre un poste en una zona arbolada"],
    isPlaceholder: false,
  },
  {
    id: "infraestructura-electrica",
    title: "Intervención en tablero eléctrico",
    category: "Soluciones empresariales",
    location: "Chanchamayo, Junín",
    client: "Cliente empresarial — nombre reservado",
    problem:
      "Ordenar la alimentación de los equipos de un local antes de sumar nueva carga tecnológica.",
    solution:
      "Revisión y trabajo sobre el tablero existente antes de conectar los equipos de red y seguridad.",
    technologies: ["Tablero eléctrico", "Infraestructura", "Preparación de instalación"],
    result:
      "Detalle del alcance pendiente de publicar hasta contar con la autorización del cliente.",
    images: ["/projects/tablero-electrico.jpg"],
    imageAlts: ["Dos técnicos trabajando sobre un tablero eléctrico abierto"],
    isPlaceholder: false,
  },
] as const satisfies readonly Project[];

export const projectsDataNotice =
  "Fotografías de trabajos reales de Shiro Telecom. Por respeto a cada cliente no publicamos nombres ni cifras sin su autorización.";
