import { experience } from "@/lib/data";
import Section from "./Section";

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Kinh nghiệm"
      subtitle="Hành trình làm nghề và những gì mình đã đóng góp."
    >
      <div className="flex flex-col gap-10">
        {experience.map((job) => (
          <div key={job.company}>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-ink">{job.title}</h3>
                <p className="mt-0.5 text-sm text-muted">
                  {job.company} · {job.place}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
                  {job.type}
                </span>
                <span className="rounded-full border border-line px-3 py-1 text-xs font-medium text-muted">
                  {job.period}
                </span>
              </div>
            </div>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
              {job.summary}
            </p>

            <div className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {job.points.map((p, idx) => (
                <div key={idx} className="flex gap-3 text-sm">
                  <span
                    aria-hidden
                    className="mt-2 h-1 w-3 flex-none rounded-full bg-ink/25"
                  />
                  <span className="leading-relaxed text-muted">{p}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
