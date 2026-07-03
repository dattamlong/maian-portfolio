"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { featuredProjects, personalProjects, type Project } from "@/lib/data";
import Section from "./Section";
import Reveal from "./Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};
const cardV = {
  hidden: { opacity: 0, y: 80, scale: 0.9, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease },
  },
};

const screens = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};
const screenV = {
  hidden: { scaleY: 0, opacity: 0 },
  show: {
    scaleY: 1,
    opacity: 1,
    transition: { duration: 0.7, ease },
  },
};

function Preview({ p }: { p: Project }) {
  if (p.image) {
    return (
      <motion.div
        initial={{ y: 50, opacity: 0, scale: 1.12 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease, delay: 0.25 }}
        className="absolute inset-x-8 bottom-0 top-0 overflow-hidden rounded-t-xl shadow-[0_18px_40px_-18px_rgba(10,10,20,0.4)] sm:inset-x-10"
      >
        <Image
          src={p.image}
          alt={p.name}
          fill
          sizes="(max-width: 768px) 100vw, 560px"
          className="object-cover object-top transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
        />
      </motion.div>
    );
  }
  return (
    <motion.div
      variants={screens}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="absolute inset-x-0 bottom-0 top-0 flex items-end justify-center gap-3 px-8 sm:px-10"
    >
      <motion.div
        variants={screenV}
        className="h-[62%] w-1/4 origin-bottom rounded-t-xl bg-white/85 shadow-lg transition-transform duration-500 group-hover:-translate-y-1"
      />
      <motion.div
        variants={screenV}
        className="h-[86%] w-1/3 origin-bottom rounded-t-xl bg-white shadow-xl transition-transform duration-500 group-hover:-translate-y-1.5"
      />
      <motion.div
        variants={screenV}
        className="h-[62%] w-1/4 origin-bottom rounded-t-xl bg-white/75 shadow-lg transition-transform duration-500 group-hover:-translate-y-1"
      />
    </motion.div>
  );
}

function Card({ p }: { p: Project }) {
  return (
    <motion.article
      variants={cardV}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative flex min-h-[500px] flex-col overflow-hidden rounded-2xl sm:min-h-[600px]"
      style={{ backgroundColor: p.tint }}
    >
      <div className="relative z-10 px-8 pt-9 sm:px-10 sm:pt-11">
        <h3 className="font-serif text-[1.8rem] font-extrabold leading-tight text-ink sm:text-[2.3rem]">
          {p.name}
        </h3>
        <p className="mt-3 max-w-md text-[17px] font-medium leading-relaxed text-ink/80">
          {p.description}
        </p>
      </div>
      <div className="relative mt-8 flex-1">
        <Preview p={p} />
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <Section id="projects">
      <Reveal>
        <div className="mb-6 flex items-center gap-5">
          <h3 className="font-serif text-2xl font-bold text-ink sm:text-[1.9rem]">
            Featured Projects
          </h3>
          <span className="h-px flex-1 bg-line" />
          <span className="text-sm text-faint">2025 – Present</span>
        </div>
      </Reveal>
      <motion.div
        variants={grid}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2"
      >
        {featuredProjects.map((p) => (
          <Card key={p.name} p={p} />
        ))}
      </motion.div>

      <Reveal>
        <div className="mb-6 mt-16 flex items-center gap-5">
          <h3 className="font-serif text-2xl font-bold text-ink sm:text-[1.9rem]">
            Personal Projects
          </h3>
          <span className="h-px flex-1 bg-line" />
          <span className="text-sm text-faint">2024 – 2025</span>
        </div>
      </Reveal>
      <motion.div
        variants={grid}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2"
      >
        {personalProjects.map((p) => (
          <Card key={p.name} p={p} />
        ))}
      </motion.div>
    </Section>
  );
}
