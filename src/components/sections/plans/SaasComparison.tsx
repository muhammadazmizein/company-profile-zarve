import Image from "next/image";
import { Check, X } from "lucide-react";
import { getTranslations } from "next-intl/server";
import growthScale from "@/assets/growth-scale.png";
import { getComparisonColumns } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export async function SaasComparison() {
  const [t, tContent] = await Promise.all([getTranslations("PlansPage.comparison"), getTranslations("Content")]);
  const comparisonColumns = getComparisonColumns(tContent);

  return (
    <section className="bg-paper py-24">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} accent={t("accent")} description={t("description")} />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {comparisonColumns.map((column) => (
            <Reveal key={column.heading} className="overflow-hidden rounded-3xl border border-ink-900/8 bg-white">
              <header className={cn("px-7 py-6", column.tone === "brand" ? "bg-brand-500 text-white" : "bg-ink-900 text-white")}>
                <h3 className="font-display text-2xl font-extrabold">{column.heading}</h3>
                <p className={cn("mt-1", column.tone === "brand" ? "text-brand-50" : "text-white/70")}>
                  {column.subheading}
                </p>
              </header>
              <ul className="px-7 py-5">
                {column.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 border-b border-ink-900/8 py-3 text-sm font-medium text-ink-700 last:border-0"
                  >
                    <span
                      className={cn(
                        "grid size-6 shrink-0 place-items-center rounded-full text-white",
                        column.tone === "brand" ? "bg-brand-500" : "bg-red-500",
                      )}
                    >
                      {column.tone === "brand" ? (
                        <Check className="size-3.5" aria-hidden="true" />
                      ) : (
                        <X className="size-3.5" aria-hidden="true" />
                      )}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100} className="grid items-center gap-8 overflow-hidden rounded-3xl border border-ink-900/8 bg-white p-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-0 divide-y divide-ink-900/8 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            <div className="px-4 py-4 sm:pl-0">
              <p className="font-display text-lg font-extrabold text-ink-900">{t("startSmallTitle")}</p>
              <p className="mt-1 text-sm text-brand-600">{t("startSmallSubtitle")}</p>
            </div>
            <div className="px-4 py-4">
              <p className="text-sm font-bold uppercase text-ink-900">{t("lowerCostTitle")}</p>
              <p className="mt-1 text-sm text-ink-500">{t("lowerCostSubtitle")}</p>
            </div>
            <div className="px-4 py-4">
              <p className="text-sm font-bold uppercase text-ink-900">{t("easyScaleTitle")}</p>
              <p className="mt-1 text-sm text-ink-500">{t("easyScaleSubtitle")}</p>
            </div>
          </div>
          <Image src={growthScale} alt={t("imageAlt")} className="w-full object-contain" />
        </Reveal>
      </Container>
    </section>
  );
}
