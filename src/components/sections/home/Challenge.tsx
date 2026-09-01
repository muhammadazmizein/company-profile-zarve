import { getTranslations } from "next-intl/server";
import { getChallengeCards } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export async function Challenge() {
  const [t, tContent] = await Promise.all([getTranslations("HomePage.challenge"), getTranslations("Content")]);
  const challengeCards = getChallengeCards(tContent);

  return (
    <section className="bg-paper py-24">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} accent={t("accent")} description={t("description")} />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {challengeCards.map((card, index) => (
            <Reveal key={card.code} delay={index * 60}>
              <article className="group relative flex h-full flex-col gap-4 rounded-2xl border border-ink-900/8 bg-white p-6 transition-shadow duration-300 hover:shadow-lift">
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
                    <card.icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="font-display text-2xl font-extrabold text-ink-900/10 transition-colors group-hover:text-brand-200">
                    {card.code}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold uppercase tracking-wide text-ink-900">{card.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{card.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
