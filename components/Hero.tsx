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
    <section id="top" className="relative overflow-hidden">
      {/* subtle grain texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.045] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      {/* ambient warmth */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-40 h-[38rem] w-[38rem] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, var(--gold-soft), transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-40 h-[30rem] w-[30rem] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, var(--accent-soft), transparent 65%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-content grid-cols-1 items-center gap-14 px-6 pb-24 pt-32 sm:pt-40 lg:grid-cols-[1.1fr_0.9fr] lg:pb-32">
        {/* left copy */}
        <motion.div variants={container} initial="hidden" animate="show">
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
            className="mt-7 max-w-md text-lg leading-relaxed text-muted"
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
              className="rounded-full border border-accent/30 bg-surface px-7 py-3 text-sm font-medium text-accent-ink transition-colors hover:border-accent"
            >
              Tải CV
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-12 flex flex-wrap gap-x-10 gap-y-4"
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

        {/* right visual: arch portrait + floating cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto hidden w-full max-w-sm lg:block"
        >
          {/* gold ring accent */}
          <div
            aria-hidden
            className="absolute -right-4 -top-4 h-24 w-24 rounded-full border-2 border-gold/60"
          />

          {/* arch frame */}
          <div className="arch relative overflow-hidden border border-line bg-surface p-3 shadow-soft">
            <div className="arch relative aspect-[3/4] overflow-hidden">
              <Image
                src="/hero-portrait.jpg"
                alt={`${profile.name} — ${profile.role}`}
                fill
                priority
                sizes="384px"
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
