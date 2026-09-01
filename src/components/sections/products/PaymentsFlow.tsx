import { getTranslations } from "next-intl/server";
import { getPaymentSteps } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export async function PaymentsFlow() {
  const [t, tContent] = await Promise.all([getTranslations("ProductsPage.payments"), getTranslations("Content")]);
  const paymentSteps = getPaymentSteps(tContent);
  const paymentContext = tContent.raw("paymentContext") as string[];

  return (
    <section className="bg-paper py-24">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} accent={t("accent")} description={t("description")} />
        </Reveal>

        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          <div aria-hidden="true" className="absolute left-[8%] right-[8%] top-11 hidden h-px bg-brand-200 lg:block" />
          {paymentSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 60} className="relative flex flex-col items-center text-center">
              <span className="relative z-10 mb-4 grid size-11 place-items-center rounded-full bg-white text-brand-600 shadow-soft ring-4 ring-paper">
                <step.icon className="size-5" aria-hidden="true" />
              </span>
              <div className="flex min-h-[130px] w-full flex-col rounded-2xl border border-ink-900/8 bg-white p-4">
                <span className="mx-auto text-xs font-bold text-brand-300">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-1 text-sm font-bold leading-snug text-ink-900">{step.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-500">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="flex flex-col items-center gap-5 rounded-2xl bg-ink-900 px-6 py-7 xl:flex-row xl:justify-between xl:px-10">
          <p className="text-center text-lg font-bold uppercase text-white xl:text-left">
            {t("bannerPart1")}
            <span className="text-brand-400">{t("bannerAccent1")}</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {paymentContext.map((item) => (
              <span key={item} className="rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white">
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
