import Image from "next/image";
import { featuredProjects, personalProjects, type Project } from "@/lib/data";
import Section from "./Section";

function Thumb({ p }: { p: Project }) {
  if (p.image) {
    return (
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line">
        <Image
          src={p.image}
          alt={p.name}
          fill
          sizes="(max-width: 768px) 100vw, 420px"
          className="object-cover"
        />
      </div>
    );
  }
  return (
    <div className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-line bg-soft">
      <span className="text-sm font-medium uppercase tracking-widest text-faint">
        {p.category}
      </span>
    </div>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Dự án tiêu biểu"
      subtitle="Một số sản phẩm mình đã thiết kế trong quá trình làm nghề."
    >
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
        {featuredProjects.map((p) => (
          <article key={p.name} className="group">
            <Thumb p={p} />
            <p className="mt-3 text-xs font-medium uppercase tracking-wide text-faint">
              {p.category}
            </p>
            <h3 className="mt-1 font-semibold text-ink">{p.name}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              {p.description}
            </p>
          </article>
        ))}
      </div>

      {/* personal projects */}
      <h3 className="mt-14 text-lg font-semibold text-ink">Dự án cá nhân</h3>
      <p className="mt-1 text-sm text-muted">
        Những sản phẩm mình tự khởi xướng và thiết kế từ đầu (2024 – 2025).
      </p>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {personalProjects.map((p) => (
          <div
            key={p.name}
            className="rounded-2xl border border-line bg-soft p-5"
          >
            <p className="text-xs font-medium uppercase tracking-wide text-faint">
              {p.category}
            </p>
            <h4 className="mt-1 font-semibold text-ink">{p.name}</h4>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
