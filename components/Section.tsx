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
    <section id={id} className="scroll-mt-24 py-16 sm:py-24">
      <Reveal>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-[2rem]">
            {title}
          </h2>
          {subtitle && (
            <p className="max-w-xl text-[15px] leading-relaxed text-muted">
              {subtitle}
            </p>
          )}
        </div>
        <div className="mt-10">{children}</div>
      </Reveal>
    </section>
  );
}
