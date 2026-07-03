"use client";

import { useState } from "react";
import { LuMail, LuPhone, LuArrowUpRight } from "react-icons/lu";
import { profile } from "@/lib/data";
import Reveal from "./Reveal";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Liên hệ từ ${name || "portfolio"}`);
    const body = encodeURIComponent(
      `Họ tên: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-faint focus:border-ink";

  return (
    <section id="contact" className="scroll-mt-24 py-16 sm:py-24">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-[2rem]">
          Cùng kết nối
        </h2>
        <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-muted">
          Mình luôn sẵn sàng cho những dự án mới, ý tưởng sáng tạo và cơ hội hợp
          tác. Cứ để lại lời nhắn nhé!
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* links */}
          <div className="flex flex-col gap-4 text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 text-muted transition-colors hover:text-ink"
            >
              <LuMail className="h-4 w-4" strokeWidth={1.7} />
              {profile.email}
              <LuArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="inline-flex items-center gap-2 text-muted transition-colors hover:text-ink"
            >
              <LuPhone className="h-4 w-4" strokeWidth={1.7} />
              {profile.phone}
            </a>
            <a
              href={profile.behance.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-muted transition-colors hover:text-ink"
            >
              <span className="text-sm font-bold">Bē</span>
              Behance {profile.behance.label}
              <LuArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
            <p className="mt-2 text-faint">{profile.location}</p>
          </div>

          {/* form */}
          <form onSubmit={onSubmit} className="flex flex-col gap-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                className={field}
                placeholder="Họ và tên"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                className={field}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <textarea
              className={`${field} min-h-[120px] resize-y`}
              placeholder="Nội dung lời nhắn..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button
              type="submit"
              className="mt-1 inline-flex w-fit items-center gap-1.5 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-90"
            >
              Gửi lời nhắn
              <LuArrowUpRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </Reveal>
    </section>
  );
}
