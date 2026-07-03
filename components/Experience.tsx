import { LuBriefcase, LuCheck, LuMapPin } from "react-icons/lu";
import { experience, stats } from "@/lib/data";
import Section from "./Section";
import Reveal from "./Reveal";

const highlights = stats.slice(0, 3);

export default function Experience() {
  const job = experience[0];

  return (
    <Section
      id="experience"
      label="Journey"
      title="Kinh nghiệm"
      subtitle="Hành trình làm nghề và những gì mình đã đóng góp."
    >
      <Reveal>
        <div className="glass mx-auto grid max-w-5xl overflow-hidden rounded-[2rem] shadow-soft lg:grid-cols-[0.82fr_1.18fr]">
          {/* left identity panel */}
          <div
            className="relative flex flex-col p-9 sm:p-11"
            style={{
              background:
                "linear-gradient(165deg, #e4e9de 0%, #f5f1e5 55%, #f9edd3 100%)",
            }}
          >
            {/* decorative rings */}
            <span
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full border border-gold/30"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute right-6 top-6 h-16 w-16 rounded-full border border-accent/15"
            />

            <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-surface text-accent shadow-card">
              <LuBriefcase className="h-6 w-6" strokeWidth={1.5} />
            </span>

            <h3 className="relative mt-7 font-serif text-3xl font-semibold leading-snug text-ink">
              {job.title}
            </h3>
            <p className="relative mt-2 font-medium text-gold-deep">
              {job.company}
            </p>
            <p className="relative mt-1 inline-flex items-center gap-1.5 text-sm text-muted">
              <LuMapPin className="h-3.5 w-3.5" strokeWidth={1.6} />
              {job.place}
            </p>

            <div className="relative mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-paper">
                {job.type}
              </span>
              <span className="rounded-full border border-accent/25 bg-surface/70 px-3 py-1 text-xs font-medium text-accent-ink">
                {job.period}
              </span>
            </div>

            <div className="gold-rule relative mt-8" />

            {/* refined metrics */}
            <dl className="relative mt-6 flex flex-wrap gap-x-8 gap-y-5">
              {highlights.map((h) => (
                <div key={h.label}>
                  <dt className="font-serif text-3xl font-semibold text-accent">
                    {h.value}
                  </dt>
                  <dd className="mt-0.5 text-xs uppercase tracking-wider text-muted">
                    {h.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* right responsibilities panel */}
          <div className="p-9 sm:p-11">
            <p className="leading-relaxed text-muted">{job.summary}</p>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
              Trách nhiệm chính
            </p>
            <ul className="mt-5 flex flex-col gap-4">
              {job.points.map((p, idx) => (
                <li key={idx} className="flex gap-3.5">
                  <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-gold-soft text-gold-deep">
                    <LuCheck className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span className="leading-relaxed text-muted">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
