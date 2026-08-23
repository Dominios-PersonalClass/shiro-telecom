export type NavigationItem = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "Shiro Telecom",
  legalName: "Shiro Telecom",
  domain: "shirotele.com",
  url: "https://shirotele.com",
  locale: "es_PE",
  language: "es",
  description:
    "Soluciones integrales de informática, telecomunicaciones, redes y seguridad electrónica para hogares y empresas en Chanchamayo y todo el Perú.",
  tagline: "Soluciones tecnológicas para un mundo conectado.",
  valueProposition:
    "Cuéntanos tu problema tecnológico. Nosotros encontramos la solución.",
  phone: {
    display: "+51 926 202 133",
    international: "+51926202133",
    whatsapp: "51926202133",
    href: "tel:+51926202133",
  },
  email: {
    address: "shiro.telecom@gmail.com",
    href: "mailto:shiro.telecom@gmail.com",
  },
  social: {
    tiktok:
      "https://www.tiktok.com/@shirotelecom?_r=1&_t=ZS-996YIwBGiSi",
  },
  operationsCenter: "La Merced, Chanchamayo, Junín, Perú",
  address: {
    street: "Av. Los Pioneros 170-180",
    locality: "La Merced",
    district: "Chanchamayo",
    region: "Junín",
    country: "Perú",
    countryCode: "PE",
    display:
      "Av. Los Pioneros 170-180, La Merced, Chanchamayo, Junín, Perú",
  },
  coverage: "Todo el Perú",
  serviceModalities: [
    "Atención local",
    "Atención a domicilio",
    "Soporte remoto",
    "Proyecto empresarial",
  ],
  schedule: {
    days: "Todos los días",
    hours: "24 horas",
    display: "24 horas al día, los 7 días de la semana",
    opens: "00:00",
    closes: "23:59",
  },
  navigation: [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/servicios" },
    { label: "Empresas", href: "/empresas" },
    { label: "Productos", href: "/productos" },
    { label: "Proyectos", href: "/proyectos" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Contacto", href: "/contacto" },
  ] satisfies readonly NavigationItem[],
  brand: {
    logo: "/brand/wordmark.png",
    logoLight: "/brand/wordmark-light.png",
    mark: "/brand/mark.png",
    monochrome: "/brand/wordmark-mono.png",
    lockup: "/brand/lockup-vertical.png",
    lockupLight: "/brand/lockup-vertical-light.png",
    favicon: "/brand/mark-256.png",
    colors: {
      white: "#FFFFFF",
      indigo: "#4B0082",
      mint: "#00FF88",
      night: "#1A1A24",
    },
  },
} as const;

export const mainNavigation = siteConfig.navigation;

export type SiteConfig = typeof siteConfig;
