import Image from "next/image";
import { badges, profile } from "@/lib/data";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-y border-line bg-soft py-20 sm:py-28"
    >
      <div className="mx-auto grid w-full max-w-content grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
        {/* arch photo placeholder */}
        <Reveal>
          <div className="relative mx-auto w-full max-w-sm">
            <div
              aria-hidden
              className="absolute -left-5 -top-5 h-24 w-24 rounded-full border-2 border-gold/50"
            />
            <div className="arch relative overflow-hidden border border-line bg-surface p-3 shadow-soft">
              <div className="arch relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/about-portrait.jpg"
                  alt={`${profile.name}`}
                  fill
                  sizes="(max-width: 1024px) 90vw, 384px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>

        {/* text */}
        <Reveal delay={0.1}>
          <p className="section-label">Giới thiệu</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            {profile.aboutHeadPre}{" "}
            <span className="italic text-gold-deep">
              {profile.aboutHeadHighlight}
            </span>
          </h2>

          <p className="mt-7 leading-relaxed text-muted">{profile.intro}</p>
          <p className="mt-4 leading-relaxed text-muted">{profile.intro2}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {badges.map((b) => (
              <span
                key={b.label}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-accent-ink"
              >
                <span aria-hidden>{b.icon}</span>
                {b.label}
              </span>
            ))}
          </div>

          <blockquote className="mt-8 border-l-2 border-gold pl-5 font-serif text-lg italic leading-relaxed text-ink/80">
            {profile.quote}
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
