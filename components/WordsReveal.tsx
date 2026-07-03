"use client";

import { motion } from "framer-motion";
import type { ElementType } from "react";

type Segment = { text: string; accent?: boolean };

const ease = [0.22, 1, 0.36, 1] as const;

// Hiện chữ theo TỪNG TỪ (fade + trồi nhẹ). An toàn với dấu tiếng Việt.
export default function WordsReveal({
  text,
  segments,
  as = "h2",
  className,
  trigger = "view",
  stagger = 0.04,
  delay = 0,
}: {
  text?: string;
  segments?: Segment[];
  as?: ElementType;
  className?: string;
  trigger?: "view" | "load";
  stagger?: number;
  delay?: number;
}) {
  const segs: Segment[] = segments ?? [{ text: text ?? "" }];
  const words: Segment[] = [];
  segs.forEach((s) => {
    s.text.split(/\s+/).forEach((w) => {
      if (w) words.push({ text: w, accent: s.accent });
    });
  });

  const Tag = motion[as as keyof typeof motion] as ElementType;

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  const word = {
    hidden: { opacity: 0, y: "0.5em" },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
  };

  const animateProps =
    trigger === "load"
      ? { initial: "hidden", animate: "show" }
      : {
          initial: "hidden" as const,
          whileInView: "show" as const,
          viewport: { once: true, margin: "-60px" },
        };

  return (
    <Tag className={className} variants={container} {...animateProps}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          variants={word}
          className={`inline-block ${w.accent ? "text-accent" : ""}`}
          style={{ marginRight: "0.25em" }}
        >
          {w.text}
        </motion.span>
      ))}
    </Tag>
  );
}
