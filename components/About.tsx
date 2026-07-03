import { LuMail, LuPhone, LuDownload } from "react-icons/lu";
import { profile, stats } from "@/lib/data";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="scroll-mt-28">
      <Reveal>
        <div className="panel p-7 shadow-panel sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Về mình
          </h2>

          <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-ink/90">
            Chào bạn, mình là <strong>Tran Thi Mai An</strong> — UI/UX Designer
            hướng sản phẩm. {profile.intro}
          </p>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            {profile.intro2}
          </p>

          {/* contact row */}
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 text-muted transition-colors hover:text-ink"
            >
              <LuMail className="h-4 w-4" strokeWidth={1.7} />
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="inline-flex items-center gap-2 text-muted transition-colors hover:text-ink"
            >
              <LuPhone className="h-4 w-4" strokeWidth={1.7} />
              {profile.phone}
            </a>
            <a
              href={profile.cvUrl}
              className="inline-flex items-center gap-2 font-medium text-ink transition-colors hover:text-accent"
            >
              <LuDownload className="h-4 w-4" strokeWidth={1.7} />
              Tải CV
            </a>
          </div>

          {/* stats */}
          <div className="mt-9 grid grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-semibold tracking-tight text-ink">
                  {s.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wide text-faint">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
