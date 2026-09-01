import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "./Container";
import { Button } from "./Button";
import { Reveal } from "./Reveal";

interface CtaBannerProps {
  title: string;
  accent?: string;
  description: string;
}

export async function CtaBanner({ title, accent, description }: CtaBannerProps) {
  const t = await getTranslations("Cta");

  return (
    <section className="bg-paper py-24">
      <Container>
        <Reveal className="relative overflow-hidden rounded-3xl bg-ink-900 px-8 py-14 text-center sm:px-16">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-500/20 blur-[100px]" />
          <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-brand-400/10 blur-[100px]" />
          <div className="relative flex flex-col items-center gap-6">
            <h2 className="font-display text-3xl font-extrabold leading-tight text-balance text-white sm:text-4xl">
              {title} {accent ? <span className="text-brand-400">{accent}</span> : null}
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-white/70">{description}</p>
            <Button href="/contact" variant="secondary" icon={<ArrowUpRight className="size-4" />}>
              {t("talkToTeam")}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
