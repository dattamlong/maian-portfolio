import Image from "next/image";
import { brands, profile } from "@/lib/data";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="scroll-mt-28">
      <Reveal>
        <div className="panel p-7 shadow-panel sm:p-10">
          {/* top row */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <span className="relative h-12 w-12 overflow-hidden rounded-full border border-line">
                <Image
                  src="/about-portrait.jpg"
                  alt={profile.name}
                  fill
                  sizes="48px"
                  className="object-cover object-[50%_28%]"
                />
              </span>
              <div>
                <p className="font-semibold leading-tight text-ink">
                  {profile.name}
                </p>
                <p className="text-sm text-muted">{profile.role}</p>
              </div>
            </div>

            <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1.5 text-xs font-medium text-accent">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              Sẵn sàng cho cơ hội mới
            </span>
          </div>

          {/* headline */}
          <h1 className="mt-9 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight text-ink sm:text-[2.6rem]">
            {profile.heroHeadline}
          </h1>
          <p className="mt-5 max-w-xl leading-relaxed text-muted">
            {profile.heroSub}
          </p>

          {/* buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-90"
            >
              Liên hệ với mình
            </a>
            <a
              href="#projects"
              className="rounded-full border border-line bg-surface px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-soft"
            >
              Xem dự án
            </a>
          </div>

          {/* brands */}
          <div className="mt-12 border-t border-line pt-7">
            <p className="text-xs uppercase tracking-widest text-faint">
              Đã thiết kế cho 30+ thương hiệu, gồm
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-7 gap-y-3">
              {brands.map((b) => (
                <span
                  key={b}
                  className="text-sm font-semibold tracking-tight text-muted/80"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
