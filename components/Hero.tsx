"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { profile } from "@/lib/data";
import WordsReveal from "./WordsReveal";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yImg = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  // tự xòe mỗi ~5s
  const [auto, setAuto] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setAuto(true);
      setTimeout(() => setAuto(false), 1300);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="mx-auto max-w-shell px-6 pb-24 pt-24 sm:px-12 sm:pb-32 sm:pt-40 lg:px-[120px]"
    >
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
        {/* text */}
        <div>
          <WordsReveal
            as="h1"
            trigger="load"
            delay={0.1}
            className="text-[32px] font-semibold leading-[40px] tracking-[-0.01em] text-ink sm:text-[50px] sm:leading-[60px]"
            segments={[
              { text: "I'm Mai An, a UI/UX Designer at" },
              { text: "DIGIBIRD.", accent: true },
              { text: "I craft useful, human-centered experiences." },
            ]}
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.7 }}
            className="mt-6 text-lg text-muted sm:text-[26px] sm:leading-[32px]"
          >
            Worked with <span className="text-accent">FPT Shop</span>,{" "}
            <span className="text-accent">Panasonic</span> and{" "}
            <span className="text-accent">Masan</span>
          </motion.p>
        </div>

        {/* photo with gradient offset (2 corners) + parallax */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative mx-auto w-full max-w-md"
        >
          <motion.div
            initial="rest"
            animate={auto ? "fan" : "rest"}
            whileHover="fan"
            className="relative"
          >
            {/* lớp gradient xòe sang trái */}
            <motion.div
              aria-hidden
              variants={{
                rest: { rotate: 0, x: -24, y: -24 },
                fan: { rotate: -10, x: -48, y: 0 },
              }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              style={{ transformOrigin: "bottom center" }}
              className="grad absolute inset-0 rounded-md"
            />
            {/* ảnh xòe sang phải */}
            <motion.div
              variants={{
                rest: { rotate: 0, x: 0 },
                fan: { rotate: 6, x: 26 },
              }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              style={{ transformOrigin: "bottom center" }}
              className="relative aspect-[4/5] cursor-pointer overflow-hidden rounded-md shadow-[0_20px_50px_-24px_rgba(10,10,20,0.4)]"
            >
              <motion.div
                style={{ y: yImg }}
                initial={{ clipPath: "inset(100% 0 0 0)", scale: 1.12 }}
                animate={{ clipPath: "inset(0% 0 0 0)", scale: 1.12 }}
                transition={{ duration: 1, ease, delay: 0.35 }}
                className="absolute inset-0"
              >
                <Image
                  src="/about-portrait.jpg"
                  alt={profile.name}
                  fill
                  priority
                  quality={92}
                  sizes="(max-width: 1024px) 92vw, 480px"
                  className="object-cover object-[50%_25%]"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
