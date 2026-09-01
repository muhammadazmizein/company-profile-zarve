import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface EyebrowProps {
  children: ReactNode;
  tone?: "brand" | "onDark";
  className?: string;
}

export function Eyebrow({ children, tone = "brand", className }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em]",
        tone === "brand" && "border-brand-200 bg-brand-50 text-brand-700",
        tone === "onDark" && "border-white/15 bg-white/5 text-brand-300",
        className,
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", tone === "brand" ? "bg-brand-500" : "bg-brand-400")} />
      {children}
    </span>
  );
}
