import { LuMail, LuPhone, LuDownload } from "react-icons/lu";
import { profile, stats } from "@/lib/data";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" title="Về mình">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="max-w-xl text-lg leading-relaxed text-ink/90">
            {profile.intro}
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-muted">
            {profile.intro2}
          </p>

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
        </div>

        {/* stats + education */}
        <div>
          <div className="grid grid-cols-2 gap-6">
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
      </div>
    </Section>
  );
}
