# Shiro Telecom

Sitio corporativo de [Shiro Telecom](https://shirotele.com), empresa peruana de soluciones tecnológicas integrales para hogares, negocios, organizaciones e instituciones.

El proyecto comunica soporte informático, dispositivos, redes y telecomunicaciones, seguridad electrónica, control de acceso y soluciones empresariales. WhatsApp es el canal comercial principal.

## Stack

- Next.js 16 con App Router y React 19
- TypeScript estricto
- Tailwind CSS 4
- ESLint con reglas de Next.js
- `next/font` para Space Grotesk e Inter
- Lucide React para iconografía coherente
- Datos locales tipados, sin CMS ni backend en esta primera versión

## Desarrollo local

Requisitos: Node.js 20.9 o superior y npm.

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). Si ese puerto está ocupado, Next.js mostrará el puerto alternativo en la terminal.

## Verificación

```bash
npm run lint
npm run typecheck
npm run build
npm run start
```

No se debe desplegar una revisión en la que `npm run build` falle.

## Estructura relevante

```text
src/
  app/                 Rutas, metadata, sitemap, robots y 404
  components/          Componentes UI, layout, tarjetas y visuales
  config/site.ts       Datos oficiales y navegación
  data/services.ts     Servicios editables
  data/products.ts     Catálogo editable
  data/projects.ts     Proyectos editables
  lib/whatsapp.ts      Mensajes y URLs centralizadas de WhatsApp
  lib/analytics.ts     Contrato de eventos para analítica futura
public/
  brand/               Logos, isotipo y favicon
  products/            Fotografías del catálogo
  projects/            Fotografías de proyectos
  team/                Fotografías autorizadas del equipo
  local/               Fotografías autorizadas del local
tokens.css             Tokens portables del sistema visual
PRODUCT.md             Verdad de producto y restricciones
DESIGN.md              Dirección y reglas visuales
```

## Cambiar información oficial

Edita [`src/config/site.ts`](src/config/site.ts). Ahí se centralizan empresa, dominio, WhatsApp, teléfono, email, TikTok, dirección, horario, cobertura, modalidades y navegación.

No escribas el número o las URLs de WhatsApp directamente en componentes. Usa `buildWhatsAppUrl()` desde [`src/lib/whatsapp.ts`](src/lib/whatsapp.ts).

## Agregar productos

Edita [`src/data/products.ts`](src/data/products.ts). Cada producto incluye:

- `id`
- `name`
- `brand`
- `category`
- `description`
- `features`
- `image` e `imageAlt`
- `availability`
- `isTemporary`

Las categorías del filtro se generan desde los propios productos. Coloca imágenes optimizadas en `public/products/` y actualiza la ruta `image`. La información incluida inicialmente está marcada como demostrativa y debe sustituirse por catálogo validado antes de anunciar stock real.

## Agregar proyectos

Edita [`src/data/projects.ts`](src/data/projects.ts). Cada registro acepta título, categoría, ubicación, cliente, problema, solución, tecnologías, resultado e imágenes.

Coloca fotografías autorizadas en `public/projects/`. Si un cliente no puede identificarse, usa `Cliente privado — [ubicación]`. Los registros iniciales son plantillas editoriales temporales, no casos ejecutados declarados como reales.

## Logos y fotografías

Los SVG temporales viven en `public/brand/` y pueden reemplazarse conservando estos nombres:

- `logo-horizontal.svg`
- `logo-horizontal-light.svg`
- `logo-mark.svg`
- `logo-monochrome.svg`
- `favicon.svg`

La tarjeta social de 1200 × 630 px se genera en `src/app/opengraph-image.tsx` y se reutiliza para Twitter desde `src/app/twitter-image.tsx`.

No uses enlaces de Google Drive en producción. Descarga, optimiza y versiona los assets dentro de `public/`. Los README de cada carpeta describen el uso esperado.

## Analítica futura

[`src/lib/analytics.ts`](src/lib/analytics.ts) define el contrato de eventos previsto: `whatsapp_click`, `phone_click`, `email_click`, `tiktok_click`, `product_inquiry`, `business_lead` y `support_request`.

No contiene IDs ficticios. Para incorporar GA4 o Google Tag Manager, conecta esos eventos solo después de definir el consentimiento y los identificadores reales. Search Console se configura al validar el dominio desplegado.

## Despliegue en Vercel

1. Crea un repositorio en GitHub y sube el proyecto.
2. En Vercel, selecciona **Add New → Project** e importa el repositorio.
3. Conserva el preset **Next.js** y ejecuta el despliegue. No hacen falta variables de entorno para esta versión.
4. En **Project Settings → Domains**, añade `shirotele.com`.
5. Añade también `www.shirotele.com` y configúralo para redirigir al dominio principal.
6. En el proveedor DNS, crea exactamente los registros que Vercel indique. No copies valores de otro proyecto.
7. Espera la propagación y confirma que Vercel muestre el certificado SSL como válido.
8. Deja `https://shirotele.com` como dominio principal y verifica que `https://www.shirotele.com` redirija correctamente.

Antes de publicar, reemplaza logo, fotografías, productos y casos temporales; revisa metadata y ejecuta lint, TypeScript y build.
