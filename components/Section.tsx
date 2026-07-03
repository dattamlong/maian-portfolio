import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function Section({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-content px-6">
        <Reveal>
          <p className="section-label">{label}</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {title}
          </h2>
          <div className="mt-6 h-px w-full bg-line" />
        </Reveal>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
