export const ANALYTICS_EVENTS = {
  whatsappClick: "whatsapp_click",
  phoneClick: "phone_click",
  emailClick: "email_click",
  tiktokClick: "tiktok_click",
  productInquiry: "product_inquiry",
  businessLead: "business_lead",
  supportRequest: "support_request",
} as const;

export type AnalyticsEvent =
  (typeof ANALYTICS_EVENTS)[keyof typeof ANALYTICS_EVENTS];

export type AnalyticsParameters = Record<
  string,
  string | number | boolean | null | undefined
>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

/**
 * Punto único de instrumentación. No carga servicios externos ni utiliza IDs
 * ficticios. Cuando GA4/GTM se configure, la cola `dataLayer` será consumida
 * automáticamente; el evento de navegador permite integrar otros proveedores.
 */
export function trackEvent(
  event: AnalyticsEvent,
  parameters: AnalyticsParameters = {},
): void {
  if (typeof window === "undefined") return;

  const payload = { event, ...parameters };
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(payload);
  window.dispatchEvent(
    new CustomEvent("shiro:analytics", { detail: payload }),
  );
}
