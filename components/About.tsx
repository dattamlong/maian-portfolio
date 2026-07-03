"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import WordsReveal from "./WordsReveal";

const ease = [0.22, 1, 0.36, 1] as const;

const textGroup = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-shell scroll-mt-24 px-6 py-20 sm:px-12 sm:py-28 lg:px-[120px]"
    >
      {/* heading + animated divider */}
      <div className="mb-10 flex items-center gap-5">
        <WordsReveal
          text="About me"
          as="h2"
          className="font-serif text-2xl font-bold text-ink sm:text-[1.9rem]"
        />
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease, delay: 0.25 }}
          style={{ transformOrigin: "left" }}
          className="h-px flex-1 bg-line"
        />
      </div>

      {/* cover image — clean wipe + zoom reveal */}
      <motion.div
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        whileInView={{ clipPath: "inset(0 0% 0 0)" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.1, ease }}
        className="relative mb-12 aspect-[16/9] w-full overflow-hidden"
      >
        <motion.div
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.6, ease }}
          className="absolute inset-0"
        >
          <Image
            src="/about-cover.jpg"
            alt={profile.name}
            fill
            quality={90}
            sizes="100vw"
            className="object-cover object-[50%_78%]"
          />
        </motion.div>
      </motion.div>

      {/* text — staggered rise */}
      <motion.div
        variants={textGroup}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="w-full px-2 pt-6 sm:px-10 sm:pt-12 lg:px-16"
      >
        <motion.p variants={item} className="text-2xl font-bold text-ink">
          I am Mai An, a UI/UX Designer based in Ho Chi Minh City.
        </motion.p>

        <motion.p variants={item} className="mt-8 text-[19px] leading-9 text-ink/90">
          My most recent role is at{" "}
          <span className="font-semibold text-accent">DIGIBIRD</span>, where I
          design UI/UX for Zalo Mini Apps and the AIMINI platform. I&apos;ve
          shipped <span className="font-semibold text-ink">30+ Mini Apps</span>{" "}
          and hundreds of screens for brands across retail, education, fintech,
          travel and loyalty, covering everything from user research and
          wireframing to interactive prototypes. Working closely with product
          managers, business analysts and developers taught me how to balance
          user needs, business goals and technical constraints.
        </motion.p>

        <motion.p variants={item} className="mt-6 text-[19px] leading-9 text-ink/90">
          I graduated in UX/UI Design from{" "}
          <span className="font-semibold text-accent">
            MindX Technology School
          </span>{" "}
          and study E-commerce at the{" "}
          <span className="font-semibold text-accent">
            Industrial University of Ho Chi Minh City
          </span>{" "}
          (<span className="font-semibold text-ink">GPA 3.43/4.0</span>). I love
          human-centered design methods and enjoy turning messy problems into
          clear, simple flows, then building{" "}
          <span className="font-semibold text-ink">design systems</span> that
          keep everything consistent and quick to scale.
        </motion.p>

        <motion.p variants={item} className="mt-6 text-[19px] leading-9 text-ink/90">
          Outside of work I&apos;m endlessly curious. I explore new apps, sketch
          ideas, and travel to recharge my creativity. I care about the small
          details that make a product feel thoughtful, and I&apos;m excited to
          keep growing as a designer. Everything else, from detailed experience
          to skills, lives in my résumé.
        </motion.p>

        <motion.a
          variants={item}
          href={profile.cvUrl}
          target={profile.cvUrl.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="mt-10 inline-block border-2 border-accent px-9 py-3.5 text-base font-bold text-accent transition-colors hover:bg-accent hover:text-white"
        >
          Résumé
        </motion.a>
      </motion.div>
    </section>
  );
}
