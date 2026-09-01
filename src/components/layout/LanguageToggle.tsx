"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/cn";

interface LanguageToggleProps {
  onNavigate?: () => void;
  className?: string;
}

export function LanguageToggle({ onNavigate, className }: LanguageToggleProps) {
  const pathname = usePathname();
  const locale = useLocale();
  const activeIndex = routing.locales.indexOf(locale as (typeof routing.locales)[number]);

  return (
    <div
      className={cn(
        "relative grid grid-cols-2 rounded-full bg-ink-900/5 p-1 text-xs font-bold uppercase tracking-wide",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-full bg-white shadow-soft transition-transform duration-300 ease-out"
        style={{ transform: activeIndex === 1 ? "translateX(100%)" : "translateX(0)" }}
      />
      {routing.locales.map((loc) => (
        <Link
          key={loc}
          href={pathname}
          locale={loc}
          onClick={onNavigate}
          aria-current={locale === loc ? "true" : undefined}
          className={cn(
            "relative z-10 rounded-full py-1.5 text-center transition-colors",
            locale === loc ? "text-brand-600" : "text-ink-500 hover:text-ink-900",
          )}
        >
          {loc}
        </Link>
      ))}
    </div>
  );
}
