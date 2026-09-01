import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProductGrid } from "@/components/sections/products/ProductGrid";
import { PaymentsFlow } from "@/components/sections/products/PaymentsFlow";
import { ManagementCenter } from "@/components/sections/products/ManagementCenter";
import { Intelligence } from "@/components/sections/products/Intelligence";
import { CtaBanner } from "@/components/ui/CtaBanner";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.products" });

  return { title: t("title"), description: t("description") };
}

export default async function ProductsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ProductsPage");

  return (
    <>
      <PageHeader
        eyebrow={t("header.eyebrow")}
        title={t("header.title")}
        accent={t("header.accent")}
        description={t("header.description")}
      />
      <ProductGrid />
      <PaymentsFlow />
      <ManagementCenter />
      <Intelligence />
      <CtaBanner title={t("cta.title")} accent={t("cta.accent")} description={t("cta.description")} />
    </>
  );
}
