import Image from "next/image";
import { getTranslations } from "next-intl/server";
import managementDashboard from "@/assets/management-command-center.webp";
import { getManagementFeatures } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export async function ManagementCenter() {
  const [t, tContent] = await Promise.all([getTranslations("ProductsPage.management"), getTranslations("Content")]);
  const managementFeatures = getManagementFeatures(tContent);

  return (
    <section className="bg-white py-24">
      <Container className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal className="flex flex-col gap-8">
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} accent={t("accent")} description={t("description")} />

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            {managementFeatures.map((feature) => (
              <div key={feature.title} className="flex flex-col items-center gap-2 rounded-xl bg-paper p-4 text-center">
                <span className="grid size-10 place-items-center rounded-lg bg-brand-50 text-brand-600">
                  <feature.icon className="size-5" aria-hidden="true" />
                </span>
                <p className="text-xs font-semibold leading-tight text-ink-900">{feature.title}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 rounded-2xl bg-ink-900 px-6 py-5">
            <div className="h-full w-1 self-stretch rounded-full bg-brand-500" />
            <p className="text-sm leading-relaxed text-white/80">
              <span className="font-bold text-brand-400">{t("noteAccent")}</span>
              {t("note")}
            </p>
          </div>
        </Reveal>

        <Reveal delay={120} className="overflow-hidden rounded-3xl border border-ink-900/8 bg-ink-900 shadow-lift">
          <Image
            src={managementDashboard}
            alt={t("imageAlt")}
            className="w-full object-cover"
            sizes="(min-width: 1024px) 560px, 90vw"
          />
        </Reveal>
      </Container>
    </section>
  );
}
