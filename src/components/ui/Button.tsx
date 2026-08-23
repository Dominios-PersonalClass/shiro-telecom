/* Hallmark · component: button · genre: modern-minimal · theme: Shiro locked system
 * states: default · hover · focus · active · disabled · loading · error · success
 * contrast: pass (token-dependent)
 * Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V4
 */
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "whatsapp" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonStatus = "idle" | "loading" | "error" | "success";

interface ButtonSharedProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  status?: ButtonStatus;
  loadingLabel?: string;
}

export interface LinkButtonProps extends ButtonSharedProps {
  href: string;
  external?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
}

export interface ActionButtonProps
  extends ButtonSharedProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className"> {
  href?: never;
  external?: never;
  ariaLabel?: string;
}

export type ButtonProps = LinkButtonProps | ActionButtonProps;

export function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    className = "",
    iconStart,
    iconEnd,
    status = "idle",
    loadingLabel = "Procesando…",
    ariaLabel,
  } = props;
  const classes = `st-button st-button--${variant} st-button--${size} ${className}`.trim();
  const content = (
    <>
      {status === "loading" ? <span className="st-button__spinner" aria-hidden="true" /> : iconStart}
      <span className="st-button__label">
        {status === "loading" ? loadingLabel : children}
      </span>
      {status !== "loading" ? iconEnd : null}
    </>
  );

  if ("href" in props && props.href) {
    if (props.disabled || status === "loading") {
      return (
        <span
          className={classes}
          aria-disabled="true"
          aria-busy={status === "loading" || undefined}
          data-state={status}
        >
          {content}
        </span>
      );
    }

    if (props.external) {
      return (
        <a
          className={classes}
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
          data-state={status}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        className={classes}
        href={props.href}
        aria-label={ariaLabel}
        data-state={status}
      >
        {content}
      </Link>
    );
  }

  const {
    children: _children,
    variant: _variant,
    size: _size,
    className: _className,
    iconStart: _iconStart,
    iconEnd: _iconEnd,
    status: _status,
    loadingLabel: _loadingLabel,
    href: _href,
    external: _external,
    ariaLabel: _ariaLabel,
    ...buttonProps
  } = props as ActionButtonProps;
  void _children;
  void _variant;
  void _size;
  void _className;
  void _iconStart;
  void _iconEnd;
  void _status;
  void _loadingLabel;
  void _href;
  void _external;
  void _ariaLabel;

  return (
    <button
      {...buttonProps}
      className={classes}
      aria-label={ariaLabel}
      aria-busy={status === "loading" || undefined}
      data-state={status}
      disabled={buttonProps.disabled || status === "loading"}
    >
      {content}
    </button>
  );
}

export const LinkButton = Button;
