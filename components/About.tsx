import { education, profile } from "@/lib/data";
import Section from "./Section";
import Reveal from "./Reveal";

export default function About() {
  return (
    <Section id="about" label="Giới thiệu" title="Về mình">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <p className="text-lg leading-relaxed text-muted">{profile.intro}</p>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Mình quan tâm đến cách <span className="text-ink">thiết kế</span>,{" "}
            <span className="text-ink">công nghệ</span> và{" "}
            <span className="text-ink">nhu cầu kinh doanh</span> kết hợp với nhau
            để tạo ra sản phẩm số thực sự hữu ích cho người dùng.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h3 className="font-serif text-xl font-semibold text-ink">Học vấn</h3>
          <ul className="mt-5 flex flex-col gap-6">
            {education.map((e) => (
              <li
                key={e.school}
                className="border-l-2 border-line pl-4 transition-colors hover:border-accent"
              >
                <div className="text-xs font-medium uppercase tracking-wide text-accent">
                  {e.period}
                </div>
                <div className="mt-1 font-medium text-ink">{e.school}</div>
                <div className="text-sm text-muted">{e.program}</div>
                <div className="text-sm text-faint">{e.place}</div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
