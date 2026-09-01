import { getTranslations } from "next-intl/server";
import { getCommercialItems } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export async function Commercial() {
  const [t, tContent] = await Promise.all([getTranslations("PlansPage.commercial"), getTranslations("Content")]);
  const commercialItems = getCommercialItems(tContent);

  return (
    <section className="bg-white py-24">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} accent={t("accent")} description={t("description")} />
        </Reveal>

        <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          <div aria-hidden="true" className="absolute left-[6%] right-[6%] top-9 hidden h-px bg-brand-200 lg:block" />
          {commercialItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 60} className="relative flex flex-col items-center text-center">
              <span className="relative z-10 mb-4 grid size-[72px] place-items-center rounded-full border-2 border-brand-500 bg-white text-brand-600 shadow-soft">
                <item.icon className="size-7" aria-hidden="true" />
              </span>
              <div className="flex min-h-[130px] w-full flex-col rounded-2xl border border-ink-900/8 bg-paper p-4">
                <span className="text-xs font-bold text-brand-300">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-1 text-sm font-bold uppercase tracking-wide text-ink-900">{item.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-500">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
