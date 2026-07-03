import Image from "next/image";
import { LuArrowUpRight } from "react-icons/lu";
import { featuredProjects, personalProjects, type Project } from "@/lib/data";
import Section from "./Section";
import Reveal from "./Reveal";

function Thumb({ p }: { p: Project }) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-soft">
      {p.image ? (
        <Image
          src={p.image}
          alt={p.name}
          fill
          sizes="(max-width: 768px) 100vw, 460px"
          className="object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]">
          <span className="text-sm font-medium uppercase tracking-widest text-faint">
            {p.category}
          </span>
        </div>
      )}
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
      <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
        {featuredProjects.map((p, i) => (
          <Reveal key={p.name} delay={(i % 2) * 0.08}>
            <article className="group cursor-default">
              <Thumb p={p} />
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-faint">
                    {p.category}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-ink">
                    {p.name}
                  </h3>
                </div>
                <LuArrowUpRight className="mt-1 h-5 w-5 flex-none text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {p.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      {/* personal projects */}
      <div className="mt-16">
        <h3 className="text-lg font-semibold text-ink">Dự án cá nhân</h3>
        <p className="mt-1 text-sm text-muted">
          Những sản phẩm mình tự khởi xướng và thiết kế từ đầu (2024 – 2025).
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {personalProjects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 0.08}>
              <div className="h-full rounded-2xl border border-line p-5 transition-colors hover:bg-soft">
                <p className="text-xs font-medium uppercase tracking-wide text-faint">
                  {p.category}
                </p>
                <h4 className="mt-1 font-semibold text-ink">{p.name}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {p.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
