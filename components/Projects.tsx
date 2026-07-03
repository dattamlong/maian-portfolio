import { featuredProjects, personalProjects, type Project } from "@/lib/data";
import Section from "./Section";
import Reveal from "./Reveal";

function ProjectCard({ p, index }: { p: Project; index: number }) {
  return (
    <Reveal delay={(index % 3) * 0.08}>
      <article className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg">
        <span className="text-xs font-medium uppercase tracking-wide text-accent">
          {p.category}
        </span>
        <h3 className="mt-2 font-serif text-xl font-semibold text-ink">
          {p.name}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {p.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line px-3 py-1 text-xs text-faint transition-colors group-hover:border-accent/40"
            >
              {t}
            </span>
          ))}
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <Section id="projects" label="Dự án" title="Dự án tiêu biểu">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((p, i) => (
          <ProjectCard key={p.name} p={p} index={i} />
        ))}
      </div>

      <Reveal>
        <h3 className="mt-16 font-serif text-2xl font-semibold text-ink">
          Dự án cá nhân
        </h3>
        <p className="mt-2 text-muted">
          Những sản phẩm mình tự khởi xướng và thiết kế từ đầu (2024 – 2025).
        </p>
      </Reveal>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {personalProjects.map((p, i) => (
          <ProjectCard key={p.name} p={p} index={i} />
        ))}
      </div>
    </Section>
  );
}
