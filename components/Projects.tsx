import Image from "next/image";
import { featuredProjects, personalProjects, type Project } from "@/lib/data";
import Section from "./Section";
import Reveal from "./Reveal";

function Mock({ p }: { p: Project }) {
  if (p.image) {
    return (
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-soft">
        <Image
          src={p.image}
          alt={p.name}
          fill
          sizes="(max-width: 1024px) 100vw, 560px"
          className="object-cover"
        />
        <span className="absolute left-5 top-5 rounded-full bg-black/25 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          {p.category}
        </span>
      </div>
    );
  }

  return (
    <div
      className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl shadow-soft"
      style={{ background: `linear-gradient(135deg, ${p.from}, ${p.to})` }}
    >
      <div className="flex items-end gap-3">
        <div className="h-28 w-16 rounded-2xl bg-paper/85 shadow-lg sm:h-36 sm:w-24" />
        <div className="h-36 w-20 rounded-2xl bg-paper shadow-xl sm:h-48 sm:w-28" />
        <div className="h-28 w-16 rounded-2xl bg-paper/75 shadow-lg sm:h-36 sm:w-24" />
      </div>
      <span className="absolute left-5 top-5 rounded-full bg-paper/25 px-3 py-1 text-xs font-semibold text-paper backdrop-blur">
        {p.category}
      </span>
    </div>
  );
}

function Info({ p }: { p: Project }) {
  return (
    <div>
      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-deep">
        <span className="h-1.5 w-1.5 rounded-full bg-gold" />
        {p.category}
      </span>
      <h3 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-ink">
        {p.name}
      </h3>
      <p className="mt-4 leading-relaxed text-muted">{p.description}</p>
      <p className="mt-5 text-sm text-faint">
        Vai trò: <span className="font-semibold text-ink">{p.role}</span>
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.tools.map((t) => (
          <span
            key={t}
            className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-accent-ink"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      label="Case Studies"
      title="Dự án tiêu biểu"
      subtitle="Một số sản phẩm mình đã thiết kế trong quá trình làm nghề."
      soft
    >
      <div className="flex flex-col gap-16 sm:gap-24">
        {featuredProjects.map((p, i) => {
          const flip = i % 2 === 1;
          return (
            <Reveal key={p.name}>
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
                <div className={flip ? "lg:order-2" : ""}>
                  <Mock p={p} />
                </div>
                <div className={flip ? "lg:order-1" : ""}>
                  <Info p={p} />
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* personal projects */}
      <Reveal>
        <div className="mt-24 flex flex-col items-center text-center">
          <p className="section-label">Personal</p>
          <h3 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-ink">
            Dự án cá nhân
          </h3>
          <span className="mt-5 h-px w-16 bg-gold" />
          <p className="mx-auto mt-5 max-w-xl text-muted">
            Những sản phẩm mình tự khởi xướng và thiết kế từ đầu (2024 – 2025).
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {personalProjects.map((p, i) => (
          <Reveal key={p.name} delay={(i % 3) * 0.08}>
            <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
              <div
                className="h-32"
                style={{
                  background: `linear-gradient(135deg, ${p.from}, ${p.to})`,
                }}
              />
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-gold-deep">
                  {p.category}
                </span>
                <h4 className="mt-2 font-serif text-xl font-semibold text-ink">
                  {p.name}
                </h4>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {p.description}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
