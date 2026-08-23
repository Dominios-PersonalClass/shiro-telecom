/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V5 */
import { useId } from "react";
export interface NetworkVisualProps {
  title?: string;
  className?: string;
  compact?: boolean;
}

export function NetworkVisual({
  title = "Red de soluciones tecnológicas conectadas a Shiro Telecom",
  className = "",
  compact = false,
}: NetworkVisualProps) {
  const titleId = useId();
  const descriptionId = useId();

  return (
    <figure className={`st-network-visual ${compact ? "st-network-visual--compact" : ""} ${className}`.trim()}>
      <svg
        className="st-network-visual__svg"
        viewBox="0 0 640 500"
        role="img"
        aria-labelledby={`${titleId} ${descriptionId}`}
      >
        <title id={titleId}>{title}</title>
        <desc id={descriptionId}>
          Diagrama que conecta el centro operativo de Shiro Telecom con soporte,
          redes, seguridad y telecomunicaciones.
        </desc>

        <g className="st-network-visual__connections" fill="none">
          <path d="M320 250C245 250 224 122 132 122" />
          <path d="M320 250C405 250 424 104 520 104" />
          <path d="M320 250C232 250 222 382 116 382" />
          <path d="M320 250C412 250 432 396 536 396" />
          <path className="st-network-visual__signal" d="M132 122C224 122 245 250 320 250" />
        </g>

        <g className="st-network-visual__orbit" fill="none">
          <circle cx="320" cy="250" r="100" />
          <circle cx="320" cy="250" r="156" />
        </g>

        <g className="st-network-visual__node st-network-visual__node--hub">
          <circle cx="320" cy="250" r="58" />
          <circle cx="320" cy="250" r="9" />
          <text x="320" y="276" textAnchor="middle">La Merced</text>
        </g>

        <g className="st-network-visual__node">
          <circle cx="132" cy="122" r="34" />
          <circle cx="132" cy="122" r="6" />
          <text x="132" y="174" textAnchor="middle">Soporte</text>
        </g>
        <g className="st-network-visual__node">
          <circle cx="520" cy="104" r="34" />
          <circle cx="520" cy="104" r="6" />
          <text x="520" y="156" textAnchor="middle">Redes</text>
        </g>
        <g className="st-network-visual__node">
          <circle cx="116" cy="382" r="34" />
          <circle cx="116" cy="382" r="6" />
          <text x="116" y="434" textAnchor="middle">Seguridad</text>
        </g>
        <g className="st-network-visual__node">
          <circle cx="536" cy="396" r="34" />
          <circle cx="536" cy="396" r="6" />
          <text x="536" y="448" textAnchor="middle">Telecom</text>
        </g>
      </svg>
    </figure>
  );
}
