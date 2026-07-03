import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function Section({
  id,
  label,
  title,
  subtitle,
  soft = false,
  children,
}: {
  id: string;
  label: string;
  title: string;
  subtitle?: string;
  soft?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 py-20 sm:py-28 ${
        soft ? "border-y border-line bg-soft" : ""
      }`}
    >
      <div className="mx-auto w-full max-w-content px-6">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <p className="section-label">{label}</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            {title}
          </h2>
          <span className="mt-5 h-px w-16 bg-gold" />
          {subtitle && <p className="mt-5 text-muted">{subtitle}</p>}
        </Reveal>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}
