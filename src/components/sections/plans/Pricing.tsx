import { Check } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { getPlanBenefits, getPricingPlans } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export async function Pricing() {
  const [t, tContent] = await Promise.all([getTranslations("PlansPage.pricing"), getTranslations("Content")]);
  const pricingPlans = getPricingPlans(tContent);
  const planBenefits = getPlanBenefits(tContent);

  return (
    <section className="bg-paper py-24">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} accent={t("accent")} description={t("description")} />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {pricingPlans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 60}>
              <article
                className={cn(
                  "flex h-full flex-col rounded-3xl border px-7 py-8",
                  plan.highlighted ? "border-ink-900 bg-ink-900 text-white" : "border-ink-900/10 bg-white text-ink-900",
                )}
              >
                <h3 className={cn("font-display text-2xl font-extrabold uppercase", plan.highlighted && "text-brand-400")}>
                  {plan.name}
                </h3>
                <p className={cn("mt-1.5 text-sm", plan.highlighted ? "text-white/70" : "text-ink-500")}>
                  {plan.audience}
                </p>
                <div className={cn("my-6 h-px w-full", plan.highlighted ? "bg-white/15" : "bg-ink-900/10")} />
                <ul className="flex flex-col gap-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm font-medium leading-snug">
                      <span
                        className={cn(
                          "grid size-5 shrink-0 place-items-center rounded-full",
                          plan.highlighted ? "bg-brand-500" : "bg-ink-900",
                        )}
                      >
                        <Check className="size-3 text-white" aria-hidden="true" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100} className="grid gap-6 rounded-3xl bg-ink-900 px-7 py-8 md:grid-cols-2 xl:grid-cols-4">
          {planBenefits.map((item) => (
            <div key={item.title} className="flex items-center gap-4">
              <span className="grid size-14 shrink-0 place-items-center rounded-full bg-white/10 text-brand-400">
                <item.icon className="size-6" aria-hidden="true" />
              </span>
              <div>
                <h4 className="text-sm font-extrabold uppercase tracking-wide text-brand-400">{item.title}</h4>
                <p className="mt-1 text-sm leading-snug text-white/70">{item.description}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
