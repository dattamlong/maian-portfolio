import type { ReactNode } from "react";
import Reveal from "./Reveal";
import WordsReveal from "./WordsReveal";

export default function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
}) {
  const hasHeader = Boolean(title || subtitle);
  return (
    <section
      id={id}
      className="mx-auto max-w-shell scroll-mt-24 px-6 py-16 sm:px-12 sm:py-20 lg:px-[120px]"
    >
      {title && (
        <WordsReveal
          text={title}
          as="h2"
          className="font-serif text-3xl font-bold tracking-tight text-ink sm:text-[2.4rem]"
        />
      )}
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="mt-3 max-w-xl leading-relaxed text-muted">{subtitle}</p>
        </Reveal>
      )}
      <div className={hasHeader ? "mt-10" : ""}>{children}</div>
    </section>
  );
}
