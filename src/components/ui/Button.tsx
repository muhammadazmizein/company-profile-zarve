import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
  icon?: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-ink-900 text-white hover:bg-ink-800",
  secondary: "bg-brand-500 text-white hover:bg-brand-600",
  ghost: "border border-ink-900/15 bg-white text-ink-900 hover:border-ink-900/30",
};

export function Button({ href, variant = "primary", children, icon, className, ...props }: ButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200",
    variantClasses[variant],
    className,
  );

  if (isExternal) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
      {icon}
    </Link>
  );
}
