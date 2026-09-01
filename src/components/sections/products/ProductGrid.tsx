import Image from "next/image";
import { Check } from "lucide-react";
import { getTranslations } from "next-intl/server";
import fleetPlatform from "@/assets/fleet-platform.png";
import { getProductModules } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export async function ProductGrid() {
  const [t, tContent] = await Promise.all([getTranslations("ProductsPage.grid"), getTranslations("Content")]);
  const productModules = getProductModules(tContent);

  return (
    <section className="bg-white py-24">
      <Container className="flex flex-col gap-14">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <SectionHeading eyebrow={t("eyebrow")} title={t("title")} accent={t("accent")} description={t("description")} />
          </Reveal>
          <Reveal delay={100} className="overflow-hidden rounded-3xl border border-ink-900/8 shadow-lift">
            <Image
              src={fleetPlatform}
              alt={t("imageAlt")}
              className="w-full object-cover"
              sizes="(min-width: 1024px) 520px, 90vw"
            />
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {productModules.map((product, index) => (
            <Reveal key={product.code} delay={(index % 4) * 60}>
              <article className="flex h-full flex-col gap-5 rounded-3xl border border-ink-900/8 bg-paper p-7 transition-shadow duration-300 hover:shadow-lift">
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-ink-900 text-brand-400">
                    <product.icon className="size-6" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-ink-900/30">
                    {t("productLabel")} {product.code}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-2xl font-extrabold leading-tight text-ink-900">
                    {product.brand} <span className="text-brand-500">{product.name}</span>
                  </h3>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-ink-500">
                    {product.tagline}
                  </p>
                </div>

                <p className="text-sm leading-relaxed text-ink-500">{product.description}</p>

                <ul className="mt-auto flex flex-col gap-2.5 border-t border-ink-900/8 pt-5">
                  {product.points.slice(0, 3).map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-ink-700">
                      <Check className="mt-0.5 size-4 shrink-0 text-brand-500" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
