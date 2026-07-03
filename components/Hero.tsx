"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LuMail, LuArrowUpRight } from "react-icons/lu";
import { brands, profile } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const up = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export default function Hero() {
  const marquee = [...brands, ...brands];

  return (
    <section id="top" className="scroll-mt-24 pb-16 pt-16 sm:pb-20 sm:pt-24">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.3fr_0.7fr]">
        {/* text */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={up}
            className="inline-flex items-center gap-2 text-sm font-medium text-accent"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Sẵn sàng cho cơ hội mới
          </motion.p>

          <motion.h1
            variants={up}
            className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={up}
            className="mt-6 max-w-lg text-xl leading-relaxed text-muted"
          >
            Mình tạo ra những trải nghiệm số{" "}
            <span className="text-ink">hữu ích, tinh tế</span> và lấy người dùng
            làm trung tâm.
          </motion.p>

          <motion.p variants={up} className="mt-6 text-sm text-muted">
            Hiện tại · <span className="text-ink">UI/UX Designer @ DIGIBIRD</span>{" "}
            · TP. Hồ Chí Minh
          </motion.p>

          <motion.div variants={up} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-90"
            >
              Xem dự án
              <LuArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-soft"
            >
              <LuMail className="h-4 w-4" />
              Liên hệ
            </a>
          </motion.div>
        </motion.div>

        {/* photo */}
        <motion.div
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease }}
          className="relative mx-auto w-full max-w-xs overflow-hidden rounded-3xl border border-line lg:max-w-none"
        >
          <div className="relative aspect-[4/5]">
            <Image
              src="/about-portrait.jpg"
              alt={profile.name}
              fill
              priority
              sizes="(max-width: 1024px) 320px, 360px"
              className="object-cover object-[50%_25%]"
            />
          </div>
        </motion.div>
      </div>

      {/* brands marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-16 border-t border-line pt-8"
      >
        <p className="text-xs uppercase tracking-widest text-faint">
          Đã thiết kế cho 30+ thương hiệu
        </p>
        <div className="marquee-mask relative mt-5 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="marquee-track gap-12 pr-12">
            {marquee.map((b, i) => (
              <span
                key={i}
                className="whitespace-nowrap text-lg font-semibold tracking-tight text-muted/70"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
