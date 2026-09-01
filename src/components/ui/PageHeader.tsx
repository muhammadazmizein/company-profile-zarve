import { Container } from "./Container";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  accent?: string;
  description: string;
}

export function PageHeader({ eyebrow, title, accent, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-20">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.06]" />
      <div className="pointer-events-none absolute -left-24 top-0 h-[360px] w-[360px] rounded-full bg-brand-500/20 blur-[120px]" />

      <Container className="relative flex flex-col gap-5">
        <Reveal>
          <Eyebrow tone="onDark">{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <h1 className="font-display max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-balance text-white sm:text-5xl">
            {title} {accent ? <span className="text-brand-400">{accent}</span> : null}
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="max-w-xl text-lg leading-relaxed text-white/70">{description}</p>
        </Reveal>
      </Container>
    </section>
  );
}
