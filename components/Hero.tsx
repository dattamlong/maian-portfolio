"use client";

import { motion } from "framer-motion";
import { profile, stats } from "@/lib/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-36">
      {/* ambient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full opacity-[0.16] blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, var(--accent), transparent 60%)",
        }}
      />
      <div className="mx-auto grid w-full max-w-content grid-cols-1 gap-14 px-6 pb-20 sm:pb-28 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="section-label flex items-center gap-3"
          >
            <span className="h-px w-8 bg-accent" />
            {profile.role} · TP. Hồ Chí Minh
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-6 font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl"
          >
            Tran Thi
            <br />
            Mai&nbsp;An<span className="text-accent">.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-lg leading-relaxed text-muted"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              Xem dự án
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Liên hệ
            </a>
          </motion.div>
        </motion.div>

        {/* monogram + stat card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="overflow-hidden rounded-3xl border border-line bg-surface p-8 shadow-sm">
            <div
              className="flex aspect-[4/3] items-center justify-center rounded-2xl"
              style={{ backgroundColor: "var(--accent-soft)" }}
            >
              <span className="font-serif text-7xl font-semibold text-accent">
                MA
              </span>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-serif text-3xl font-semibold text-ink">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wide text-faint">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
