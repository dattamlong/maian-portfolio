import type { IconType } from "react-icons";
import {
  LuPalette,
  LuScanSearch,
  LuPencilRuler,
  LuMousePointerClick,
  LuComponent,
  LuFigma,
  LuLayoutTemplate,
  LuPenTool,
  LuNotebookPen,
  LuPresentation,
  LuFileCode2,
  LuGlobe,
} from "react-icons/lu";
import { languages, skills, tools } from "@/lib/data";
import Section from "./Section";
import Reveal from "./Reveal";

const skillIcons: Record<string, IconType> = {
  ui: LuPalette,
  research: LuScanSearch,
  wireframe: LuPencilRuler,
  prototype: LuMousePointerClick,
  system: LuComponent,
};

const toolIcons: Record<string, IconType> = {
  figma: LuFigma,
  canva: LuLayoutTemplate,
  illustrator: LuPenTool,
  notion: LuNotebookPen,
  office: LuPresentation,
  htmlcss: LuFileCode2,
};

// độ lệch dọc tạo cảm giác so le, nghệ thuật (chỉ ở màn lớn)
const skillOffset = ["lg:mt-0", "lg:mt-14", "lg:mt-6", "lg:mt-20", "lg:mt-10"];
const toolOffset = [
  "lg:mt-16",
  "lg:mt-4",
  "lg:mt-20",
  "lg:mt-8",
  "lg:mt-24",
  "lg:mt-2",
];

export default function Skills() {
  return (
    <Section
      id="skills"
      label="Expertise"
      title="Kỹ năng & Công cụ"
      subtitle="Những kỹ năng mình rèn luyện và công cụ mình dùng để hiện thực hóa thiết kế."
    >
      {/* skills — thẻ so le */}
      <div className="grid grid-cols-2 items-start gap-5 sm:grid-cols-3 lg:grid-cols-5">
        {skills.map((s, i) => {
          const Icon = skillIcons[s.key];
          return (
            <Reveal key={s.key} delay={(i % 5) * 0.06} className={skillOffset[i]}>
              <div className="group flex h-full flex-col items-center rounded-[1.6rem] border border-line bg-surface p-6 text-center shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-paper">
                  <Icon className="h-6 w-6" strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 font-serif text-lg font-semibold text-ink">
                  {s.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* tools */}
      <Reveal>
        <h3 className="mt-20 text-center font-serif text-2xl font-semibold text-ink">
          Công cụ mình sử dụng
        </h3>
      </Reveal>
      <div className="mt-10 grid grid-cols-2 items-start gap-5 sm:grid-cols-3 lg:grid-cols-6">
        {tools.map((t, i) => {
          const Icon = toolIcons[t.key];
          return (
            <Reveal key={t.key} delay={(i % 6) * 0.05} className={toolOffset[i]}>
              <div className="group flex h-full flex-col items-center rounded-[1.6rem] border border-line bg-surface p-5 text-center shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold-soft text-gold-deep transition-colors group-hover:bg-gold group-hover:text-accent-ink">
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <h4 className="mt-4 text-sm font-bold text-ink">{t.name}</h4>
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  {t.desc}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* languages */}
      <Reveal>
        <div className="mx-auto mt-16 flex max-w-md items-center justify-center gap-3 rounded-full border border-line bg-surface px-6 py-3.5 shadow-card">
          <LuGlobe className="h-5 w-5 text-accent" strokeWidth={1.6} />
          {languages.map((l) => (
            <span key={l.name} className="text-sm text-muted">
              <span className="font-semibold text-ink">{l.name}</span> —{" "}
              {l.level}
            </span>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
