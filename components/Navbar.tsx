"use client";

import { useState } from "react";
import { LuCat } from "react-icons/lu";
import { nav } from "@/lib/data";

function GradientDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden>
      <defs>
        <linearGradient id="catGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#de0f66" />
          <stop offset="1" stopColor="#5a08ea" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full">
      <GradientDefs />
      <nav className="mx-auto flex h-[124px] max-w-shell items-center justify-between px-6 sm:px-12 lg:px-[120px]">
        <a href="#top" className="flex items-center" aria-label="Home">
          <LuCat
            className="h-12 w-12"
            strokeWidth={2}
            style={{ stroke: "url(#catGrad)" }}
          />
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {nav.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-[13px] font-medium uppercase tracking-[0.08em] text-ink transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="grid h-9 w-9 place-items-center text-ink md:hidden"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-line md:hidden">
          <ul className="mx-auto flex max-w-shell flex-col px-6 py-2">
            {nav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-sm uppercase tracking-[0.08em] text-ink transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
