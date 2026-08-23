import { siteConfig } from "@/config/site";

/** Mensajes de WhatsApp: directos, breves y listos para completar. */
export const WHATSAPP_INTENTS = {
  general: `🙋‍♂️ Hola, los encontré en la web, quisiera más información sobre ${siteConfig.domain}.

Mi nombre es:`,
  computers: `🙋‍♂️ Hola, encontré Shiro Telecom en la web y necesito soporte para mi computadora o laptop.

Mi nombre es:
Problema:
Mi ubicación:`,
  cameras: `🙋‍♂️ Hola, encontré Shiro Telecom en la web y quisiera cotizar cámaras de seguridad.

Mi nombre es:
Mi ubicación:
Cantidad aproximada de cámaras:`,
  business: `🙋‍♂️ Hola, encontré Shiro Telecom en la web y necesito una solución tecnológica para mi empresa.

Mi nombre es:
Empresa:
Necesidad:
Ubicación:`,
} as const;

export type WhatsAppIntent = keyof typeof WHATSAPP_INTENTS | "product";

export type WhatsAppUrlOptions = {
  intent?: WhatsAppIntent;
  productName?: string;
  message?: string;
};

export function buildProductWhatsAppMessage(productName: string): string {
  const safeProductName = productName.trim() || "Producto por confirmar";

  return `🙋‍♂️ Hola, encontré este producto en la web de Shiro Telecom y quisiera información sobre su disponibilidad.

Producto: ${safeProductName}
Mi nombre es:`;
}

export const whatsappMessages = {
  general: WHATSAPP_INTENTS.general,
  computers: WHATSAPP_INTENTS.computers,
  cameras: WHATSAPP_INTENTS.cameras,
  business: WHATSAPP_INTENTS.business,
  product: buildProductWhatsAppMessage,
} as const;

export function getWhatsAppMessage(
  intent: WhatsAppIntent = "general",
  productName?: string,
): string {
  if (intent === "product") {
    return buildProductWhatsAppMessage(productName ?? "Producto por confirmar");
  }

  return WHATSAPP_INTENTS[intent];
}

/**
 * Construye una URL de WhatsApp centralizada y segura para enlaces web.
 *
 * @example buildWhatsAppUrl("computers")
 * @example buildWhatsAppUrl({ intent: "product", productName: product.name })
 * @example buildWhatsAppUrl({ message: "Mensaje contextual" })
 */
export function buildWhatsAppUrl(): string;
export function buildWhatsAppUrl(messageOrIntent: string): string;
export function buildWhatsAppUrl(options: WhatsAppUrlOptions): string;
export function buildWhatsAppUrl(
  options: string | WhatsAppUrlOptions = "general",
): string {
  const message = (() => {
    if (typeof options === "string") {
      const value = options.trim();
      if (!value) return WHATSAPP_INTENTS.general;
      if (value in WHATSAPP_INTENTS) {
        return getWhatsAppMessage(value as keyof typeof WHATSAPP_INTENTS);
      }
      if (value === "product") return getWhatsAppMessage("product");
      return value;
    }

    return (
      options.message?.trim() ||
      getWhatsAppMessage(options.intent ?? "general", options.productName)
    );
  })();

  return `https://wa.me/${siteConfig.phone.whatsapp}?text=${encodeURIComponent(message)}`;
}