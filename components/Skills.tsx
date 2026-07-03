import { languages, skills, tools } from "@/lib/data";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <Section id="skills" label="Kỹ năng" title="Chuyên môn & công cụ">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <Reveal>
          <h3 className="font-serif text-xl font-semibold text-ink">
            Kỹ năng thiết kế
          </h3>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {skills.map((s) => (
              <span
                key={s}
                className="rounded-full px-4 py-2 text-sm font-medium text-accent-ink"
                style={{ backgroundColor: "var(--accent-soft)" }}
              >
                {s}
              </span>
            ))}
          </div>

          <h3 className="mt-10 font-serif text-xl font-semibold text-ink">
            Ngôn ngữ
          </h3>
          <ul className="mt-4 flex flex-col gap-2">
            {languages.map((l) => (
              <li key={l.name} className="flex items-baseline justify-between">
                <span className="text-ink">{l.name}</span>
                <span className="text-sm text-faint">{l.level}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <h3 className="font-serif text-xl font-semibold text-ink">Công cụ</h3>
          <ul className="mt-5 flex flex-col divide-y divide-line">
            {tools.map((t, i) => (
              <li
                key={t}
                className="flex items-center gap-4 py-3 text-ink"
              >
                <span className="font-serif text-sm tabular-nums text-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-medium">{t}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
