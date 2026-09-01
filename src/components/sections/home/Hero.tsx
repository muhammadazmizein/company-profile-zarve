import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import heroDevices from "@/assets/hero-devices.png";
import { getHeroBenefits, siteMeta } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export async function Hero() {
  const [t, tContent] = await Promise.all([getTranslations("HomePage.hero"), getTranslations("Content")]);
  const heroBenefits = getHeroBenefits(tContent);
  const heroStrip = t.raw("strip") as string[];

  return (
    <section className="relative overflow-hidden bg-ink-900">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.06]" />
      <div className="pointer-events-none absolute -left-40 top-[-10%] h-[520px] w-[520px] rounded-full bg-brand-500/20 blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 top-1/3 h-[420px] w-[420px] rounded-full bg-brand-400/10 blur-[120px]" />

      <Container className="relative grid gap-14 pb-20 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-28 lg:pt-24">
        <Reveal className="flex flex-col gap-7">
          <Eyebrow tone="onDark">
            {siteMeta.name} {t("eyebrowSuffix")}
          </Eyebrow>
          <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-balance text-white sm:text-6xl">
            {t("titleLine1")} <span className="text-brand-400">{t("titleAccent")}</span>
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-white/70">{t("body")}</p>

          <div className="flex flex-wrap items-center gap-4">
            <Button href="/contact" variant="secondary" icon={<ArrowUpRight className="size-4" />}>
              {t("ctaPrimary")}
            </Button>
            <Button href="/products" variant="ghost" className="border-white/20 bg-transparent text-white hover:border-white/40">
              {t("ctaSecondary")}
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-2">
            {heroStrip.map((item, index) => (
              <span key={item} className="flex items-center gap-3 text-sm font-semibold uppercase tracking-wide text-white/50">
                {item}
                {index < heroStrip.length - 1 ? <span className="h-1 w-1 rounded-full bg-brand-400" /> : null}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-2 shadow-lift backdrop-blur">
            <Image
              src={heroDevices}
              alt={t("imageAlt")}
              className="rounded-2xl object-cover"
              priority
              sizes="(min-width: 1024px) 560px, 90vw"
            />
          </div>
        </Reveal>
      </Container>

      <Container className="relative pb-16">
        <Reveal delay={80} className="grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {heroBenefits.map((benefit) => (
            <div key={benefit.title} className="flex items-start gap-4 bg-ink-900 px-6 py-6">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-500/15 text-brand-400">
                <benefit.icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-white">{benefit.title}</h3>
                <p className="mt-1 text-sm leading-5 text-white/60">{benefit.description}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
