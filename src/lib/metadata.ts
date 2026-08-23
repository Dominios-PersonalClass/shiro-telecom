import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

export const seoKeywords = [
  "Shiro Telecom",
  "soporte técnico Chanchamayo",
  "soporte técnico La Merced",
  "reparación de computadoras Chanchamayo",
  "reparación de laptops",
  "cámaras de seguridad Chanchamayo",
  "CCTV",
  "redes y telecomunicaciones",
  "seguridad electrónica",
  "control de acceso",
  "soluciones tecnológicas Perú",
] as const;

export type PageMetadataOptions = {
  title: string;
  description: string;
  path?: `/${string}` | "/";
  keywords?: readonly string[];
};

function absoluteUrl(path: string): string {
  if (path === "/") return siteConfig.url;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

const socialImageAlt =
  "Shiro Telecom — soluciones tecnológicas para un mundo conectado";

const openGraphImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: socialImageAlt,
} as const;

export function createPageMetadata({
  title,
  description,
  path = "/",
  keywords = [],
}: PageMetadataOptions): Metadata {
  const canonical = absoluteUrl(path);

  return {
    title,
    description,
    keywords: [...new Set([...seoKeywords, ...keywords])],
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: canonical,
      siteName: siteConfig.name,
      title,
      description,
      images: [openGraphImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: "/twitter-image", alt: socialImageAlt }],
    },
  };
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: `${siteConfig.name} | Soluciones tecnológicas integrales`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...seoKeywords],
  icons: {
    icon: siteConfig.brand.favicon,
    shortcut: siteConfig.brand.favicon,
    apple: siteConfig.brand.mark,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Soluciones tecnológicas integrales`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Soluciones tecnológicas integrales`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${siteConfig.url}/#business`,
  name: siteConfig.name,
  url: siteConfig.url,
  logo: absoluteUrl(siteConfig.brand.mark),
  description: siteConfig.description,
  telephone: siteConfig.phone.international,
  email: siteConfig.email.address,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.locality,
    addressRegion: siteConfig.address.region,
    addressCountry: siteConfig.address.countryCode,
  },
  areaServed: {
    "@type": "Country",
    name: "Perú",
  },
  sameAs: [siteConfig.social.tiktok],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "https://schema.org/Monday",
        "https://schema.org/Tuesday",
        "https://schema.org/Wednesday",
        "https://schema.org/Thursday",
        "https://schema.org/Friday",
        "https://schema.org/Saturday",
        "https://schema.org/Sunday",
      ],
      opens: siteConfig.schedule.opens,
      closes: siteConfig.schedule.closes,
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.phone.international,
    contactType: "customer service",
    areaServed: "PE",
    availableLanguage: "Spanish",
  },
  knowsAbout: [
    "Soporte informático",
    "Redes y telecomunicaciones",
    "Seguridad electrónica",
    "Control de acceso",
    "Soluciones tecnológicas empresariales",
  ],
} as const;
