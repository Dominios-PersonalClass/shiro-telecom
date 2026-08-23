import type { Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import { Footer, Header, WhatsAppButton } from "@/components";
import { defaultMetadata, siteStructuredData } from "@/lib/metadata";

import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata = defaultMetadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "light",
  themeColor: "#1A1A24",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = JSON.stringify(siteStructuredData).replace(/</g, "\\u003c");

  return (
    <html lang="es-PE" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        <Header />
        <div id="main-content" tabIndex={-1}>
          {children}
        </div>
        <Footer />
        <WhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredData }}
        />
      </body>
    </html>
  );
}
