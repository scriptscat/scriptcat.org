import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import clsx from "clsx";
import { Icon } from "../Icon";
import styles from "./ui.module.css";

// The card and form primitives /uninstall/ is built from, on plain elements.
// It is the only page that needs them, and it needs nothing a UI framework
// would add on top — see AGENTS.md ("Bundle budget").
//
// Everything is scoped to `.root`, which owns the design tokens; wrap the page
// in <UiRoot> (or add `styles.root` yourself) or the colours resolve to
// nothing.

export { styles as uiStyles };

export function UiRoot({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={clsx(styles.root, className)}>{children}</div>;
}

// ---- card ---------------------------------------------------------------
export function Card({
  title,
  bodyStyle,
  className,
  children,
}: {
  title?: ReactNode;
  /** Overrides the body padding, which varies per card on the page. */
  bodyStyle?: CSSProperties;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section className={clsx(styles.card, className)}>
      {title !== undefined && <div className={styles.cardHead}>{title}</div>}
      <div className={styles.cardBody} style={bodyStyle}>
        {children}
      </div>
    </section>
  );
}

// ---- typography ---------------------------------------------------------
export function Heading({
  level,
  required,
  className,
  children,
}: {
  level: 1 | 2 | 3;
  /** Prefixes the red asterisk that marks a required field. */
  required?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const Tag = `h${level}` as "h1" | "h2" | "h3";
  return (
    <Tag
      className={clsx(
        styles[`h${level}`],
        required && styles.required,
        className
      )}
    >
      {children}
    </Tag>
  );
}

export function Paragraph({
  secondary,
  className,
  children,
}: {
  secondary?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <p className={clsx(secondary && styles.secondary, className)}>{children}</p>
  );
}

export function Divider() {
  return <hr className={styles.divider} />;
}

// ---- button -------------------------------------------------------------
type BtnProps = {
  variant?: "default" | "primary" | "link";
  size?: "small" | "middle" | "large" | "xl";
  block?: boolean;
  icon?: ReactNode;
  loading?: boolean;
  className?: string;
  children?: ReactNode;
} & (
  | { href: string; target?: string; onClick?: never; submit?: never }
  | { href?: never; target?: never; onClick?: () => void; submit?: boolean }
);

export function Btn({
  variant = "default",
  size = "middle",
  block,
  icon,
  loading,
  className,
  children,
  ...rest
}: BtnProps) {
  const cls = clsx(
    styles.btn,
    variant === "primary" && styles.btnPrimary,
    variant === "default" && styles.btnDefault,
    variant === "link" && styles.btnLink,
    size === "large" && styles.btnLg,
    size === "xl" && styles.btnXl,
    size === "small" && styles.btnSm,
    block && styles.btnBlock,
    className
  );
  const inner = (
    <>
      {loading ? <span className={styles.spinner} /> : icon}
      {children}
    </>
  );

  if ("href" in rest && rest.href) {
    return (
      <a
        className={cls}
        href={rest.href}
        {...(rest.target === "_blank"
          ? { target: "_blank", rel: "noreferrer" }
          : rest.target
            ? { target: rest.target }
            : {})}
      >
        {inner}
      </a>
    );
  }
  return (
    <button
      className={cls}
      type={"submit" in rest && rest.submit ? "submit" : "button"}
      onClick={"onClick" in rest ? rest.onClick : undefined}
      disabled={loading}
    >
      {inner}
    </button>
  );
}

// ---- radio --------------------------------------------------------------
// A real <input type="radio"> inside a <label>, so a shared `name` gives the
// group arrow-key navigation and form semantics for free.
export function Radio({
  name,
  value,
  checked,
  onChange,
  className,
  children,
}: {
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  className?: string;
  children: ReactNode;
}) {
  return (
    <label className={clsx(styles.radio, className)}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
      />
      <span className={styles.radioDot} />
      {children}
    </label>
  );
}

// ---- textarea -----------------------------------------------------------
export function Textarea({
  value,
  onChange,
  rows,
  maxLength,
  placeholder,
  className,
}: {
  value: string;
  onChange: (value: string) => void;
  rows?: number;
  /** Caps the input and drives the `n / max` counter underneath. */
  maxLength?: number;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <textarea
        className={styles.textarea}
        value={value}
        rows={rows}
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
      {maxLength !== undefined && (
        <div className={styles.count}>
          {/* Count code points, not UTF-16 units, so an emoji reads as 1. */}
          {[...value].length} / {maxLength}
        </div>
      )}
    </div>
  );
}

// ---- alert --------------------------------------------------------------
export function InfoAlert({
  title,
  className,
  children,
}: {
  title: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={clsx(styles.alert, className)}>
      <Icon icon="lucide:info" className={styles.alertIcon} />
      <div>
        <div className={styles.alertTitle}>{title}</div>
        {children}
      </div>
    </div>
  );
}

// ---- toast --------------------------------------------------------------
type ToastKind = "success" | "error" | "warning";
type Toast = { id: number; kind: ToastKind; text: string };

const TOAST_ICON: Record<ToastKind, string> = {
  success: "lucide:circle-check",
  error: "lucide:circle-x",
  warning: "lucide:circle-alert",
};

const ToastContext = createContext<((kind: ToastKind, text: string) => void) | null>(
  null
);

/** Transient status messages: `.success(…)` / `.error(…)` / `.warning(…)`. */
export function useMessage() {
  const show = useContext(ToastContext);
  if (!show) {
    throw new Error("useMessage() must be used inside <ToastProvider>");
  }
  return useMemo(
    () => ({
      success: (text: string) => show("success", text),
      error: (text: string) => show("error", text),
      warning: (text: string) => show("warning", text),
    }),
    [show]
  );
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const nextId = useRef(0);

  const show = useCallback((kind: ToastKind, text: string) => {
    const id = nextId.current++;
    setToasts((prev) => [...prev, { id, kind, text }]);
    setTimeout(
      () => setToasts((prev) => prev.filter((toast) => toast.id !== id)),
      3000
    );
  }, []);

  return (
    <ToastContext.Provider value={show}>
      {children}
      <div className={styles.toastLayer} aria-live="polite">
        <div>
          {toasts.map((toast) => (
            <div key={toast.id} className={styles.toast}>
              <Icon
                icon={TOAST_ICON[toast.kind]}
                className={styles[`toast${toast.kind[0].toUpperCase()}${toast.kind.slice(1)}`]}
              />
              {toast.text}
            </div>
          ))}
        </div>
      </div>
    </ToastContext.Provider>
  );
}
