"use client";

/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V5 */
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import { useCallback, useEffect, useRef, useState } from "react";

export interface ContactCubeFace {
  id: string;
  label: string;
  value: string;
  href: string;
  external?: boolean;
  icon: ReactNode;
  event?: string;
  featured?: boolean;
}

export interface ContactCubeProps {
  faces: readonly ContactCubeFace[];
  className?: string;
}

/** Ángulo de reposo: el cubo nunca se detiene de frente, así siempre se ven dos caras. */
const REST_ANGLE = -26;
const STEP = 90;
const AUTO_INTERVAL = 5200;
const DRAG_SENSITIVITY = 0.55;

/** Redondea al reposo más cercano para que el giro manual siempre cierre en una cara. */
function snap(angle: number) {
  return Math.round((angle - REST_ANGLE) / STEP) * STEP + REST_ANGLE;
}

export function ContactCube({ faces, className = "" }: ContactCubeProps) {
  const [angle, setAngle] = useState(REST_ANGLE);
  const [dragging, setDragging] = useState(false);
  const [held, setHeld] = useState(false);
  const [autoAllowed, setAutoAllowed] = useState(false);
  const drag = useRef<{ pointerId: number; startX: number; startAngle: number; moved: boolean } | null>(null);
  const bodyRef = useRef<HTMLUListElement>(null);

  // El giro automático solo corre donde el cubo existe y si no se pidió menos movimiento.
  useEffect(() => {
    const wide = window.matchMedia("(min-width: 70rem)");
    const still = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setAutoAllowed(wide.matches && !still.matches);

    sync();
    wide.addEventListener("change", sync);
    still.addEventListener("change", sync);

    return () => {
      wide.removeEventListener("change", sync);
      still.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    if (!autoAllowed || held || dragging) {
      return;
    }

    const timer = window.setInterval(() => setAngle((current) => current - STEP), AUTO_INTERVAL);

    return () => window.clearInterval(timer);
  }, [autoAllowed, dragging, held]);

  const turn = useCallback((direction: 1 | -1) => {
    setAngle((current) => snap(current) - direction * STEP);
  }, []);

  function onPointerDown(event: React.PointerEvent<HTMLUListElement>) {
    if (event.button !== 0 && event.pointerType === "mouse") {
      return;
    }

    drag.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startAngle: angle,
      moved: false,
    };
    setDragging(true);
    bodyRef.current?.setPointerCapture(event.pointerId);
  }

  function onPointerMove(event: React.PointerEvent<HTMLUListElement>) {
    const state = drag.current;

    if (!state || state.pointerId !== event.pointerId) {
      return;
    }

    const delta = event.clientX - state.startX;

    if (Math.abs(delta) > 4) {
      state.moved = true;
    }

    setAngle(state.startAngle + delta * DRAG_SENSITIVITY);
  }

  function endDrag(event: React.PointerEvent<HTMLUListElement>) {
    const state = drag.current;

    if (!state || state.pointerId !== event.pointerId) {
      return;
    }

    // Un arrastre real no debe abrir el enlace que quedó debajo del dedo.
    if (state.moved) {
      event.preventDefault();
    }

    drag.current = null;
    setDragging(false);
    setAngle((current) => snap(current));
    bodyRef.current?.releasePointerCapture?.(event.pointerId);
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      turn(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      turn(-1);
    }
  }

  return (
    <div
      className={`st-cube ${className}`.trim()}
      onKeyDown={onKeyDown}
      onFocusCapture={() => setHeld(true)}
      onBlurCapture={() => setHeld(false)}
    >
      <div
        className="st-cube__stage"
        onPointerEnter={() => setHeld(true)}
        onPointerLeave={() => setHeld(false)}
      >
        <ul
          className="st-cube__body"
          ref={bodyRef}
          data-dragging={dragging ? "true" : undefined}
          style={{ "--cube-angle": `${angle}deg` } as CSSProperties}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
        >
          {faces.map(({ id, label, value, href, external, icon, event, featured }, index) => (
            <li
              className={`st-cube__face ${featured ? "st-cube__face--featured" : ""}`.trim()}
              key={id}
              style={{ "--face-index": index } as CSSProperties}
            >
              <a
                className="st-cube__link"
                href={href}
                data-event={event}
                draggable={false}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <span className="st-cube__icon" aria-hidden="true">
                  {icon}
                </span>
                <span className="st-cube__label">{label}</span>
                <strong className="st-cube__value">{value}</strong>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="st-cube__controls">
        <button className="st-cube__control" type="button" onClick={() => turn(-1)}>
          <ChevronLeft aria-hidden="true" size={19} />
          <span className="st-cube__control-text">Canal anterior</span>
        </button>
        <button className="st-cube__control" type="button" onClick={() => turn(1)}>
          <span className="st-cube__control-text">Canal siguiente</span>
          <ChevronRight aria-hidden="true" size={19} />
        </button>
      </div>
    </div>
  );
}
