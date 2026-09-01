import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import contactOffice from "@/assets/contact-office.png";
import { getContactDetails } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export async function ContactSection() {
  const [t, tContent] = await Promise.all([getTranslations("ContactPage.section"), getTranslations("Content")]);
  const contactDetails = getContactDetails(tContent);

  return (
    <section className="bg-white py-24">
      <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-3xl font-extrabold leading-tight text-ink-900 sm:text-4xl">
              {t("titlePart1")} <span className="text-brand-500">{t("titleAccent")}</span>
            </h2>
            <p className="text-base leading-relaxed text-ink-500">{t("intro")}</p>
          </div>

          <div className="flex flex-col divide-y divide-ink-900/8">
            {contactDetails.map((item) => {
              const content = (
                <div className="flex items-start gap-4 py-5 first:pt-0">
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-ink-900 text-brand-400">
                    <item.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-600">{item.label}</p>
                    <p className="mt-1 whitespace-pre-line text-base leading-relaxed text-ink-900">{item.value}</p>
                  </div>
                  {item.href ? (
                    <ArrowUpRight className="ml-auto mt-1 size-4 shrink-0 text-ink-900/30" aria-hidden="true" />
                  ) : null}
                </div>
              );

              if (!item.href) {
                return <div key={item.label}>{content}</div>;
              }

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group transition-colors hover:bg-paper"
                >
                  {content}
                </a>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={120} className="overflow-hidden rounded-3xl border border-ink-900/8 shadow-lift">
          <Image
            src={contactOffice}
            alt={t("imageAlt")}
            className="w-full object-cover"
            sizes="(min-width: 1024px) 640px, 90vw"
          />
        </Reveal>
      </Container>
    </section>
  );
}
