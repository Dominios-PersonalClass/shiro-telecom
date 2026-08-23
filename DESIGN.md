# Shiro Telecom — sistema visual

<!-- impeccable:design-schema 1 -->

## Dirección

La web se comporta como una mesa de diagnóstico conectada: módulos precisos, rutas visibles, estados legibles y una única acción prioritaria. La composición combina la claridad de una consultora tecnológica con señales discretas de infraestructura, sin caer en estética gaming, cripto o cyberpunk.

## Mundo visual

- 70% corporativo: superficies claras, jerarquía directa, grandes márgenes, lenguaje factual y navegación predecible.
- 30% tecnológico: paneles gris noche, líneas de conexión, nodos de estado, cuadrículas técnicas y acentos menta de huella reducida.
- La estructura principal es Split Studio: afirmación y evidencia visual se reparten el espacio y alternan su posición.
- Las superficies oscuras se reservan para hero, cobertura, cierres o demostraciones; la lectura larga permanece clara.

## Color

- `--color-brand-purple`: Púrpura Índigo, acción primaria y autoridad.
- `--color-brand-mint`: Menta Neón, señal de estado o conectividad; nunca como texto largo sobre blanco.
- `--color-brand-night`: Gris Noche, fondos técnicos y tinta principal.
- `--color-brand-white`: Blanco Shiro, marca inversa y contraste.
- Los neutros se inclinan sutilmente hacia índigo. No se improvisan colores fuera de `tokens.css`.
- El menta ocupa menos superficie que el púrpura; los degradados aparecen solo dentro de visuales tecnológicos.

## Tipografía

- Space Grotesk para titulares, cifras, marca y frases institucionales.
- Inter para interfaz, navegación, etiquetas y cuerpo.
- Titulares en redonda, nunca itálicos, con tracking ajustado y líneas cortas.
- El H1 usa una escala fluida y no supera el ancho de lectura que permita comprender la oferta en cinco segundos.

## Forma y componentes

- Radios discretos, entre 8 y 20 px según escala; no todo es una tarjeta flotante.
- Bordes finos y fondos tonales definen contenedores; las sombras son excepcionales.
- Botones primarios índigo con texto blanco; secundarios delineados; WhatsApp conserva menta como señal de canal.
- Iconos de trazo coherente, 1.75–2 px, siempre acompañados de texto cuando expresan una acción importante.
- Placeholders de productos y proyectos son composiciones abstractas declaradas como temporales, no fotografías ficticias.

## Movimiento

- Solo `transform` y `opacity`, con desplazamientos de 2–4 px y duraciones cortas.
- Los nodos del hero pueden pulsar suavemente; `prefers-reduced-motion` detiene el pulso y elimina desplazamientos.
- El foco aparece de inmediato, sin animación.

## Responsive

- La composición se comprueba desde 320 px hasta 1440 px.
- Split Studio colapsa a una columna por debajo de 960 px; la evidencia visual queda después del argumento.
- Navegación completa en escritorio y menú modal accesible en móvil.
- Botones y links primarios no parten su texto en dos líneas; las cuadrículas con medios usan `minmax(0, 1fr)`.
- `html` y `body` usan `overflow-x: clip`.

## Accesibilidad

- Objetivo WCAG 2.2 AA razonable, landmarks semánticos, skip link, foco visible, navegación por teclado y controles con nombre accesible.
- El verde menta no se usa como único indicador; siempre existe texto, forma o icono adicional.
- El contenido y las acciones permanecen disponibles sin animación ni JavaScript ornamental.
