import { siteConfig } from "@/config/site";

/**
 * Copys de WhatsApp: saludo corto, motivo claro y campos etiquetados con emoji
 * para que la persona vea de un vistazo qué completar antes de enviar.
 */
export const WHATSAPP_INTENTS = {
  general: `¡Hola ${siteConfig.name}! 👋

Los encontré en ${siteConfig.domain} y quiero contarles lo que necesito 💬

🙋 Mi nombre:
🔧 Lo que necesito:
📍 Dónde estoy:`,
  computers: `¡Hola ${siteConfig.name}! 👋

Mi computadora necesita ayuda 💻

🙋 Mi nombre:
⚠️ Qué le pasa:
📍 Dónde estoy:`,
  cameras: `¡Hola ${siteConfig.name}! 👋

Quiero cotizar cámaras de seguridad 📹

🙋 Mi nombre:
🏠 Qué quiero cubrir (casa, local, almacén):
🔢 Cuántas cámaras calculo:
📍 Dónde estoy:`,
  business: `¡Hola ${siteConfig.name}! 👋

Escribo por una necesidad tecnológica de mi empresa 🏢

🙋 Mi nombre:
🏷️ Empresa:
🎯 Qué necesitamos:
📍 Dónde estamos:`,
} as const;

export type WhatsAppIntent = keyof typeof WHATSAPP_INTENTS | "product";

export type WhatsAppUrlOptions = {
  intent?: WhatsAppIntent;
  productName?: string;
  message?: string;
};

export function buildProductWhatsAppMessage(productName: string): string {
  const safeProductName = productName.trim() || "Producto por confirmar";

  return `¡Hola ${siteConfig.name}! 👋

Vi este producto en ${siteConfig.domain} y quiero más información 🛒

📦 ${safeProductName}

¿Me confirman disponibilidad y precio? 🙏

🙋 Mi nombre:
📍 Dónde estoy:`;
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
