import Image from "next/image";
import { Quote } from "lucide-react";
import { getTranslations } from "next-intl/server";
import managementDashboard from "@/assets/management-dashboard.png";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export async function WhoWeAre() {
  const t = await getTranslations("HomePage.whoWeAre");
  const body = t.raw("body") as string[];

  return (
    <section className="bg-white py-24">
      <Container className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="flex flex-col gap-6">
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} accent={t("accent")} description={t("headline")} />
          <div className="flex flex-col gap-4 text-base leading-relaxed text-ink-500">
            {body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-2 flex gap-4 rounded-2xl border border-ink-900/8 bg-paper p-6">
            <Quote className="size-8 shrink-0 text-brand-500" aria-hidden="true" />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink-900">{t("visionLabel")}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{t("vision")}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="overflow-hidden rounded-3xl border border-ink-900/8 shadow-lift">
          <Image
            src={managementDashboard}
            alt={t("imageAlt")}
            className="w-full object-cover"
            sizes="(min-width: 1024px) 640px, 90vw"
          />
        </Reveal>
      </Container>
    </section>
  );
}
