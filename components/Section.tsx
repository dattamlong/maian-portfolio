import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <Reveal>
        <div className="panel p-7 shadow-panel sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
              {subtitle}
            </p>
          )}
          <div className="mt-8">{children}</div>
        </div>
      </Reveal>
    </section>
  );
}
