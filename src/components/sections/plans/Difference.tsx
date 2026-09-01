import { getTranslations } from "next-intl/server";
import { getDifferenceJourney } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export async function Difference() {
  const [t, tContent] = await Promise.all([getTranslations("PlansPage.difference"), getTranslations("Content")]);
  const differenceJourney = getDifferenceJourney(tContent);

  return (
    <section className="bg-white py-24">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} accent={t("accent")} description={t("description")} />
        </Reveal>

        <div className="flex items-center gap-5">
          <div className="hidden h-px flex-1 bg-ink-900/15 sm:block" />
          <h3 className="rounded-full bg-ink-900 px-7 py-3 text-center text-sm font-bold uppercase tracking-wide text-white">
            {t("journeyTitle")}
          </h3>
          <div className="hidden h-px flex-1 bg-ink-900/15 sm:block" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-6">
          {differenceJourney.map((item, index) => (
            <Reveal key={item.title} delay={index * 50}>
              <article className="flex h-full flex-col items-center rounded-2xl border border-ink-900/8 bg-paper px-5 py-7 text-center">
                <span className="text-xs font-bold text-brand-300">{String(index + 1).padStart(2, "0")}</span>
                <span className="mt-3 grid size-14 place-items-center rounded-full bg-brand-50 text-brand-600">
                  <item.icon className="size-6" aria-hidden="true" />
                </span>
                <h4 className="mt-4 text-sm font-bold uppercase tracking-wide text-ink-900">{item.title}</h4>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-500">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
