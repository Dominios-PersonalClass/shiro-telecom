/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V5 */
export interface IsometricSceneProps {
  caption?: string;
  tone?: "default" | "night";
  className?: string;
}

const devices = [
  {
    id: "rack",
    title: "Rack y servidor",
    detail: "Infraestructura de la operación",
  },
  {
    id: "router",
    title: "Router y red",
    detail: "Cableado y conectividad",
  },
  {
    id: "camera",
    title: "Cámara IP",
    detail: "Vigilancia y grabación",
  },
] as const;

export function IsometricScene({
  caption = "Ilustración de una instalación tipo: rack, router y cámara IP conectados por la misma red.",
  tone = "default",
  className = "",
}: IsometricSceneProps) {
  return (
    <figure className={`st-iso st-iso--${tone} ${className}`.trim()}>
      <div className="st-iso__stage">
        <div className="st-iso__inner">
          <svg className="st-iso__svg" viewBox="0 0 720 480" aria-hidden="true" focusable="false">
            <g className="st-iso__floor" fill="none">
              <path d="M60 330 L360 480" />
              <path d="M160 280 L460 430" />
              <path d="M260 230 L560 380" />
              <path d="M660 330 L360 480" />
              <path d="M560 280 L260 430" />
              <path d="M460 230 L160 380" />
            </g>

            <g className="st-iso__links" fill="none">
              <path d="M330 300C280 320 230 340 185 352" />
              <path className="st-iso__link--delayed" d="M350 220C430 220 500 210 540 232" />
            </g>

            <g className="st-iso__device">
              <polygon className="st-iso__face--top" points="330,150 410,190 350,220 270,180" />
              <polygon className="st-iso__face--right" points="330,150 410,190 410,340 330,300" />
              <polygon className="st-iso__face--left" points="330,150 270,180 270,330 330,300" />
              <g className="st-iso__slots" fill="none">
                <path d="M342 208 L396 235" />
                <path d="M342 238 L396 265" opacity="0.6" />
                <path d="M342 268 L396 295" opacity="0.35" />
              </g>
              <circle className="st-iso__led" cx="286" cy="212" r="3.5" />
              <circle className="st-iso__led" cx="286" cy="240" r="3.5" opacity="0.5" />
            </g>

            <g className="st-iso__device">
              <polygon className="st-iso__face--top" points="170,344 240,379 185,407 115,372" />
              <polygon className="st-iso__face--right" points="170,344 240,379 240,405 170,370" />
              <polygon className="st-iso__face--left" points="170,344 115,372 115,398 170,370" />
              <circle className="st-iso__led" cx="196" cy="382" r="3.2" />
              <circle className="st-iso__led" cx="212" cy="390" r="3.2" opacity="0.6" />
              <g className="st-iso__antenna" fill="none">
                <path d="M150 344 L138 318" />
                <path d="M196 348 L212 322" />
              </g>
            </g>

            <g className="st-iso__device">
              <polygon className="st-iso__face--top" points="540,232 586,255 550,273 504,250" />
              <polygon className="st-iso__face--right" points="540,232 586,255 586,273 540,250" />
              <polygon className="st-iso__face--left" points="540,232 504,250 504,268 540,250" />
              <path className="st-iso__pole" d="M540 232 L540 176" fill="none" />
              <polygon className="st-iso__face--top" points="540,138 580,158 552,172 512,152" />
              <polygon className="st-iso__face--right" points="540,138 580,158 580,180 540,160" />
              <polygon className="st-iso__face--left" points="540,138 512,152 512,174 540,160" />
              <circle className="st-iso__lens" cx="560" cy="169" r="6" />
              <circle className="st-iso__lens-core" cx="560" cy="169" r="2.4" />
            </g>
          </svg>

          <ul className="st-iso__chips">
            {devices.map(({ id, title, detail }) => (
              <li className={`st-iso__chip st-iso__chip--${id}`} key={id}>
                <strong>{title}</strong>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <figcaption className="st-iso__caption">{caption}</figcaption>
    </figure>
  );
}
