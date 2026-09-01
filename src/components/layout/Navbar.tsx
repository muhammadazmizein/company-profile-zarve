"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { navLinks } from "@/content/site";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "./Logo";
import { LanguageToggle } from "./LanguageToggle";

export function Navbar() {
  const pathname = usePathname();
  const t = useTranslations("Nav");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-lg transition-shadow duration-300",
        scrolled ? "border-ink-900/8 shadow-soft" : "border-transparent",
      )}
    >
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="shrink-0 transition-opacity hover:opacity-80">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative py-1 text-sm font-semibold transition-colors",
                  isActive ? "text-brand-600" : "text-ink-700 hover:text-brand-600",
                )}
              >
                {t(link.key)}
                {isActive ? (
                  <span className="absolute -bottom-[17px] left-0 h-0.5 w-full rounded-full bg-brand-500" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <LanguageToggle className="w-[88px]" />
          <Button href="/contact" variant="secondary">
            {t("requestDemo")}
          </Button>
        </div>

        <button
          type="button"
          aria-label={t("toggleMenu")}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid size-10 place-items-center rounded-full text-ink-900 md:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </Container>

      {open ? (
        <nav className="flex flex-col gap-1 border-t border-ink-900/8 bg-white px-6 py-4 md:hidden">
          {navLinks.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-sm font-semibold",
                  isActive ? "bg-brand-50 text-brand-700" : "text-ink-700",
                )}
              >
                {t(link.key)}
              </Link>
            );
          })}

          <div className="flex items-center justify-between px-3 py-2.5">
            <span className="text-sm font-semibold text-ink-500">{t("language")}</span>
            <LanguageToggle onNavigate={() => setOpen(false)} className="w-[88px]" />
          </div>

          <Button href="/contact" variant="secondary" className="mt-2 w-full">
            {t("requestDemo")}
          </Button>
        </nav>
      ) : null}
    </header>
  );
}
