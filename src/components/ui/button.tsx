import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  dark: "bg-ink text-bg",
  line: "bg-transparent text-ink shadow-[inset_0_0_0_1px_var(--color-line)]",
  gold: "bg-gold text-ink",
} as const;

const sizes = {
  md: "h-[52px] px-[26px] text-[0.98rem]",
  sm: "h-[42px] px-5 text-[0.9rem]",
} as const;

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
  onClick?: () => void;
};

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

function isLink(props: ButtonAsLink | ButtonAsButton): props is ButtonAsLink {
  return typeof props.href === "string";
}

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const variant = props.variant ?? "dark";
  const size = props.size ?? "md";
  const classes = cn(
    "inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-pill font-medium transition-transform duration-200 motion-safe:hover:-translate-y-px disabled:cursor-not-allowed disabled:opacity-50",
    variants[variant],
    sizes[size],
    props.className,
  );

  if (isLink(props)) {
    return (
      <Link href={props.href} className={classes} onClick={props.onClick}>
        {props.children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      className={classes}
      onClick={props.onClick}
      disabled={props.disabled}
      aria-label={props["aria-label"]}
      name={props.name}
    >
      {props.children}
    </button>
  );
}
