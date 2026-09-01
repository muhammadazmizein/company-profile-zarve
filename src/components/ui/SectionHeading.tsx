import { cn } from "@/lib/cn";
import { Eyebrow } from "./Eyebrow";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
  align?: "left" | "center";
  tone?: "brand" | "onDark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = "left",
  tone = "brand",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-5", align === "center" && "items-center text-center", className)}>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2
        className={cn(
          "font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-5xl",
          tone === "onDark" ? "text-white" : "text-ink-900",
        )}
      >
        {title} {accent ? <span className="text-brand-500">{accent}</span> : null}
      </h2>
      {description ? (
        <p className={cn("max-w-xl text-lg leading-relaxed", tone === "onDark" ? "text-white/70" : "text-ink-500")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
