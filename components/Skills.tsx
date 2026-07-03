import type { IconType } from "react-icons";
import {
  LuFigma,
  LuLayoutTemplate,
  LuPenTool,
  LuNotebookPen,
  LuPresentation,
  LuFileCode2,
} from "react-icons/lu";
import { languages, skills, tools } from "@/lib/data";
import Section from "./Section";

const toolIcons: Record<string, IconType> = {
  figma: LuFigma,
  canva: LuLayoutTemplate,
  illustrator: LuPenTool,
  notion: LuNotebookPen,
  office: LuPresentation,
  htmlcss: LuFileCode2,
};

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Kỹ năng & Công cụ"
      subtitle="Những kỹ năng mình rèn luyện và công cụ mình dùng để hiện thực hóa thiết kế."
    >
      {/* numbered skills */}
      <div className="grid grid-cols-1 gap-x-10 gap-y-7 sm:grid-cols-2">
        {skills.map((s, i) => (
          <div key={s.key} className="flex gap-5">
            <span className="text-sm font-medium tabular-nums text-faint">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-semibold text-ink">{s.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* tools */}
      <h3 className="mt-10 text-sm font-semibold uppercase tracking-wide text-faint">
        Công cụ
      </h3>
      <div className="mt-4 flex flex-wrap gap-2.5">
        {tools.map((t) => {
          const Icon = toolIcons[t.key];
          return (
            <span
              key={t.key}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-soft px-4 py-2 text-sm font-medium text-ink"
            >
              <Icon className="h-4 w-4 text-muted" strokeWidth={1.7} />
              {t.name}
            </span>
          );
        })}
      </div>

      {/* languages */}
      <h3 className="mt-8 text-sm font-semibold uppercase tracking-wide text-faint">
        Ngôn ngữ
      </h3>
      <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        {languages.map((l) => (
          <span key={l.name} className="text-muted">
            <span className="font-medium text-ink">{l.name}</span> — {l.level}
          </span>
        ))}
      </div>
    </Section>
  );
}
