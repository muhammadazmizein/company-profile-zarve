import Image from "next/image";
import { getTranslations } from "next-intl/server";
import fleetVehicles from "@/assets/vehicles/vehicles-2.png";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export async function Story() {
  const t = await getTranslations("HomePage.story");
  const body = t.raw("body") as string[];

  return (
    <section className="bg-white py-24">
      <Container className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal delay={80} className="order-2 overflow-hidden rounded-3xl border border-ink-900/8 bg-white shadow-lift lg:order-1">
          <Image
            src={fleetVehicles}
            alt={t("imageAlt")}
            className="w-full object-contain p-8"
            sizes="(min-width: 1024px) 640px, 90vw"
          />
        </Reveal>

        <Reveal className="order-1 flex flex-col gap-6 lg:order-2">
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} accent={t("accent")} />
          <div className="flex flex-col gap-4 text-base leading-relaxed text-ink-500">
            {body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
