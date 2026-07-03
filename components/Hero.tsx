"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile, stats } from "@/lib/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden"
    >
      {/* subtle grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.04] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* full-bleed portrait blended into background */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-y-0 right-0 z-0 w-full lg:w-[60%]"
      >
        <Image
          src="/hero-portrait.jpg"
          alt={`${profile.name} — ${profile.role}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover object-center"
        />
        {/* fade edges into cream (nhẹ hơn để ảnh rõ) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #f5f1e5 0%, rgba(245,241,229,0.7) 8%, rgba(245,241,229,0.12) 26%, rgba(245,241,229,0) 44%), linear-gradient(to top, #f5f1e5 0%, rgba(245,241,229,0) 10%), linear-gradient(to bottom, rgba(245,241,229,0.5) 0%, rgba(245,241,229,0) 9%)",
          }}
        />
        {/* extra veil on mobile for text legibility */}
        <div
          className="absolute inset-0 lg:hidden"
          style={{ background: "rgba(245,241,229,0.5)" }}
        />
      </motion.div>

      {/* soft accents */}
      <span
        aria-hidden
        className="blob left-[-4%] top-24 z-0 h-72 w-72"
        style={{ background: "var(--gold-soft)" }}
      />

      {/* content */}
      <div className="relative z-10 mx-auto w-full max-w-content px-6 py-28">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-xl"
        >
          <motion.div variants={item} className="flex items-center gap-3">
            <span className="gold-rule" />
            <p className="text-sm font-medium tracking-wide text-muted">
              {profile.greeting}
            </p>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-5 font-serif text-6xl font-semibold leading-[1.02] tracking-tight text-ink sm:text-7xl"
          >
            UI/UX
            <br />
            <span className="italic text-accent">Designer</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-md text-lg leading-relaxed text-muted"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full bg-accent px-7 py-3 text-sm font-medium text-paper shadow-card transition-transform hover:-translate-y-0.5"
            >
              Liên hệ
            </a>
            <a
              href={profile.cvUrl}
              target={profile.cvUrl.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="glass rounded-full px-7 py-3 text-sm font-medium text-accent-ink transition-transform hover:-translate-y-0.5"
            >
              Tải CV
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="glass mt-12 inline-flex flex-wrap gap-x-10 gap-y-4 rounded-2xl px-7 py-5"
          >
            {stats.slice(0, 3).map((s) => (
              <div key={s.label}>
                <div className="font-serif text-3xl font-semibold text-ink">
                  {s.value}
                </div>
                <div className="mt-0.5 text-xs uppercase tracking-wider text-faint">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
