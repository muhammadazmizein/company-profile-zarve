import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/ui/PageHeader";
import { Commercial } from "@/components/sections/plans/Commercial";
import { SaasComparison } from "@/components/sections/plans/SaasComparison";
import { Market } from "@/components/sections/plans/Market";
import { Pricing } from "@/components/sections/plans/Pricing";
import { Difference } from "@/components/sections/plans/Difference";
import { CtaBanner } from "@/components/ui/CtaBanner";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.plans" });

  return { title: t("title"), description: t("description") };
}

export default async function PlansPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("PlansPage");

  return (
    <>
      <PageHeader
        eyebrow={t("header.eyebrow")}
        title={t("header.title")}
        accent={t("header.accent")}
        description={t("header.description")}
      />
      <Commercial />
      <SaasComparison />
      <Market />
      <Pricing />
      <Difference />
      <CtaBanner title={t("cta.title")} accent={t("cta.accent")} description={t("cta.description")} />
    </>
  );
}
