import { getTranslations, setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/home/Hero";
import { WhoWeAre } from "@/components/sections/home/WhoWeAre";
import { Challenge } from "@/components/sections/home/Challenge";
import { Story } from "@/components/sections/home/Story";
import { Ecosystem } from "@/components/sections/home/Ecosystem";
import { CtaBanner } from "@/components/ui/CtaBanner";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("HomePage.cta");

  return (
    <>
      <Hero />
      <WhoWeAre />
      <Challenge />
      <Story />
      <Ecosystem />
      <CtaBanner title={t("title")} accent={t("accent")} description={t("description")} />
    </>
  );
}
