import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export async function Ecosystem() {
  const t = await getTranslations("HomePage.ecosystem");
  const modules = t.raw("modules") as string[];

  return (
    <section className="relative overflow-hidden bg-ink-900 py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.05]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-brand-500/15 blur-[140px]" />

      <Container className="relative flex flex-col gap-12">
        <Reveal>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            accent={t("accent")}
            tone="onDark"
            align="center"
            description={t("description")}
            className="mx-auto"
          />
        </Reveal>

        <Reveal delay={100} className="flex flex-wrap items-center justify-center gap-3">
          {modules.map((module) => (
            <span
              key={module}
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white"
            >
              {module}
            </span>
          ))}
        </Reveal>

        <Reveal delay={160} className="rounded-2xl bg-white/[0.04] px-6 py-6 text-center sm:px-10">
          <p className="font-display text-lg font-bold leading-snug text-white sm:text-2xl">
            {t("bannerPart1")}
            <span className="text-brand-400">{t("bannerAccent1")}</span>
            {t("bannerPart2")}
            <span className="text-brand-400">{t("bannerAccent2")}</span>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
