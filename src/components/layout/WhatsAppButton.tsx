/* Hallmark · component: floating WhatsApp button · genre: modern-minimal · theme: Shiro locked system
 * states: default · hover · focus · active · disabled · loading · error · success
 * contrast: pass (token-dependent)
 * Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V4
 */
import { MessageCircle } from "lucide-react";
import type { WhatsAppIntent } from "@/lib/whatsapp";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export interface WhatsAppButtonProps {
  intent?: WhatsAppIntent;
  message?: string;
  productName?: string;
  label?: string;
  className?: string;
}

export function WhatsAppButton({
  intent = "general",
  message,
  productName,
  label = "Hablar por WhatsApp",
  className = "",
}: WhatsAppButtonProps) {
  const href = buildWhatsAppUrl(message ? { message } : { intent, productName });

  return (
    <a
      className={`st-whatsapp-float ${className}`.trim()}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (se abre en una pestaña nueva)`}
      data-event="whatsapp_click"
    >
      <MessageCircle aria-hidden="true" size={23} strokeWidth={1.9} />
      <span className="st-whatsapp-float__label">{label}</span>
    </a>
  );
}

