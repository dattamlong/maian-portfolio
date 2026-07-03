"use client";

import { useState } from "react";
import { LuMail, LuPhone } from "react-icons/lu";
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
    "w-full rounded-xl border border-line bg-soft px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-faint focus:border-ink";

  return (
    <section id="contact" className="scroll-mt-28">
      <Reveal>
        <div className="panel p-7 shadow-panel sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Cùng hiện thực hóa ý tưởng
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
            Mình luôn sẵn sàng cho những dự án mới, ý tưởng sáng tạo và cơ hội
            hợp tác. Cứ để lại lời nhắn nhé!
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            {/* contact info */}
            <div className="flex flex-col gap-3 text-sm">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-3 text-muted transition-colors hover:text-ink"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full bg-soft">
                  <LuMail className="h-4 w-4" strokeWidth={1.7} />
                </span>
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone}`}
                className="inline-flex items-center gap-3 text-muted transition-colors hover:text-ink"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full bg-soft">
                  <LuPhone className="h-4 w-4" strokeWidth={1.7} />
                </span>
                {profile.phone}
              </a>
              <a
                href={profile.behance.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-muted transition-colors hover:text-ink"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full bg-soft text-xs font-bold">
                  Bē
                </span>
                Behance {profile.behance.label}
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
                className="mt-1 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-90"
              >
                Gửi lời nhắn
              </button>
            </form>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
