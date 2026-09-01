import Image from "next/image";
import { getTranslations } from "next-intl/server";
import intelligenceDashboard from "@/assets/intelligence-dashboard.png";
import { getIntelligenceTimeline, getIntelligenceUseCases } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export async function Intelligence() {
  const [t, tContent] = await Promise.all([getTranslations("ProductsPage.intelligence"), getTranslations("Content")]);
  const intelligenceTimeline = getIntelligenceTimeline(tContent);
  const intelligenceUseCases = getIntelligenceUseCases(tContent);

  return (
    <section className="bg-paper py-24">
      <Container className="flex flex-col gap-14">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <SectionHeading eyebrow={t("eyebrow")} title={t("title")} accent={t("accent")} description={t("description")} />
          </Reveal>
          <Reveal delay={120} className="overflow-hidden rounded-3xl border border-ink-900/8 shadow-lift">
            <Image
              src={intelligenceDashboard}
              alt={t("imageAlt")}
              className="w-full object-cover"
              sizes="(min-width: 1024px) 560px, 90vw"
            />
          </Reveal>
        </div>

        <Reveal delay={80} className="relative grid gap-6 sm:grid-cols-5">
          <div aria-hidden="true" className="absolute left-[6%] right-[6%] top-9 hidden h-px bg-brand-200 sm:block" />
          {intelligenceTimeline.map((item, index) => (
            <div key={item.title} className="relative flex flex-col items-center gap-3 text-center">
              <span className="relative z-10 grid size-[72px] place-items-center rounded-full border-2 border-brand-500 bg-white text-sm font-extrabold text-brand-600 shadow-soft">
                {index + 1}
              </span>
              <p className="text-sm font-bold uppercase tracking-wide text-ink-900">{item.title}</p>
              <p className="text-xs leading-snug text-ink-500">{item.description}</p>
            </div>
          ))}
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {intelligenceUseCases.map((item, index) => (
            <Reveal key={item.title} delay={index * 50}>
              <article className="flex h-full items-start gap-4 rounded-2xl border border-brand-500/25 bg-white p-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <item.icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-ink-900">{item.title}</h3>
                  <p className="mt-1 text-sm leading-snug text-ink-500">{item.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100} className="rounded-2xl bg-ink-900 px-6 py-6 text-center sm:px-10">
          <p className="text-lg font-bold leading-snug text-white">
            {t("bannerPart1")}
            <span className="text-brand-400">{t("bannerAccent1")}</span>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
