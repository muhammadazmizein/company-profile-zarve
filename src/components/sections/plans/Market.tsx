import Image from "next/image";
import { Check } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { getDifferentiators, getIndustries } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export async function Market() {
  const [t, tContent] = await Promise.all([getTranslations("PlansPage.market"), getTranslations("Content")]);
  const differentiators = getDifferentiators(tContent);
  const industries = getIndustries(tContent);

  return (
    <section className="bg-white py-24">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal className="flex flex-col gap-8">
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} accent={t("accent")} description={t("description")} />

          <article className="overflow-hidden rounded-3xl border border-brand-500/30 bg-white shadow-soft">
            <header className="bg-brand-500 px-7 py-5 text-white">
              <h3 className="font-display text-xl font-extrabold uppercase">{t("whyTitle")}</h3>
            </header>
            <ul className="px-7 py-5">
              {differentiators.map((item) => (
                <li key={item} className="flex items-center gap-3 border-b border-ink-900/8 py-3 text-sm font-medium text-ink-900 last:border-0">
                  <Check className="size-5 shrink-0 rounded-full bg-brand-500 p-1 text-white" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        <div className="flex flex-col gap-6">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {industries.map((item, index) => (
              <Reveal key={item.title} delay={index * 60}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-900/8 bg-paper">
                  <div className="relative h-32 w-full overflow-hidden bg-white">
                    <Image
                      src={item.image}
                      alt={t("vehiclesAlt", { title: item.title })}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 1280px) 340px, (min-width: 640px) 45vw, 90vw"
                    />
                  </div>
                  <div className="flex items-start gap-3 p-4">
                    <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-ink-900 text-brand-400">
                      <item.icon className="size-4" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wide text-ink-900">{item.title}</h3>
                      <p className="mt-0.5 text-xs text-ink-500">{item.description}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="rounded-2xl bg-ink-900 px-6 py-5 text-center">
            <p className="text-base font-bold uppercase text-white sm:text-lg">
              {t("bannerPart1")}
              <span className="text-brand-400">{t("bannerAccent1")}</span>
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
