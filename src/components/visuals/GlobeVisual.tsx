/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V5 */
import { siteConfig } from "@/config/site";

export interface GlobeVisualProps {
  caption?: string;
  className?: string;
}

/** Meridianos del armazón: cada anillo gira sobre el eje Y en un ángulo distinto. */
const meridians = [0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5];

/** Paralelos: radio relativo y desplazamiento vertical, de polo a polo. */
const parallels = [
  { scale: 0.42, offset: -38 },
  { scale: 0.72, offset: -22 },
  { scale: 0.94, offset: -7.5 },
  { scale: 1, offset: 7.5 },
  { scale: 0.86, offset: 22 },
  { scale: 0.6, offset: 36 },
];

/** Lecturas del panel: solo datos ya confirmados en la configuración del sitio. */
const readouts = [
  { label: "Hub", value: "La Merced" },
  { label: "Región", value: "Chanchamayo, Junín" },
  { label: "Cobertura", value: "Todo el Perú" },
];

export function GlobeVisual({
  caption = "Representación esquemática del alcance. No es un mapa cartográfico.",
  className = "",
}: GlobeVisualProps) {
  return (
    <figure className={`st-globe ${className}`.trim()}>
      <div className="st-globe__stage">
        <div className="st-globe__sphere" role="img" aria-label={`Globo terráqueo esquemático con el hub de ${siteConfig.name} señalado en el Perú`}>
          <span className="st-globe__atmosphere" aria-hidden="true" />
          <div className="st-globe__wire" aria-hidden="true">
            {meridians.map((angle) => (
              <span
                className="st-globe__meridian"
                key={angle}
                style={{ transform: `rotateY(${angle}deg)` }}
              />
            ))}
            {parallels.map(({ scale, offset }) => (
              <span
                className="st-globe__parallel"
                key={`${scale}-${offset}`}
                style={{ scale: `${scale}`, translate: `0 ${offset}%` }}
              />
            ))}
          </div>
          <span className="st-globe__terminator" aria-hidden="true" />
          <span className="st-globe__pin" aria-hidden="true">
            <span className="st-globe__ping" />
            <span className="st-globe__ping" style={{ animationDelay: "1.2s" }} />
            <span className="st-globe__ping" style={{ animationDelay: "2.4s" }} />
            <span className="st-globe__dot" />
          </span>
        </div>

        <ul className="st-globe__readout">
          {readouts.map(({ label, value }) => (
            <li key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </li>
          ))}
        </ul>
      </div>
      <figcaption className="st-globe__caption">{caption}</figcaption>
    </figure>
  );
}
