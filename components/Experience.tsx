import { experience } from "@/lib/data";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <Section id="experience" label="Kinh nghiệm" title="Hành trình làm nghề">
      <div className="flex flex-col gap-10">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.1}>
            <div className="rounded-2xl border border-line bg-surface p-7 sm:p-9">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-ink">
                    {job.company}
                  </h3>
                  <p className="mt-1 font-medium text-accent">{job.title}</p>
                </div>
                <div className="text-sm text-faint sm:text-right">
                  <div>{job.period}</div>
                  <div>{job.place}</div>
                </div>
              </div>

              <ul className="mt-6 flex flex-col gap-3">
                {job.points.map((p, idx) => (
                  <li key={idx} className="flex gap-3 text-muted">
                    <span
                      aria-hidden
                      className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-accent"
                    />
                    <span className="leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
