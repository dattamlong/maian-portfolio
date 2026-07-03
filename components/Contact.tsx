import { profile } from "@/lib/data";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 px-6 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-content">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-[2.5rem] px-8 py-16 text-center shadow-soft sm:px-16 sm:py-24"
            style={{
              background:
                "linear-gradient(150deg, #2c3a2b 0%, #394b38 55%, #46583f 100%)",
            }}
          >
            {/* gold accents */}
            <div
              aria-hidden
              className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full opacity-20 blur-2xl"
              style={{ background: "var(--gold)" }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute right-10 top-10 h-20 w-20 rounded-full border border-gold/40"
            />

            <p className="relative text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Liên hệ
            </p>
            <h2 className="relative mx-auto mt-5 max-w-2xl font-serif text-4xl font-semibold leading-tight tracking-tight text-paper sm:text-5xl">
              Hãy cùng tạo nên điều{" "}
              <span className="italic text-gold">ý nghĩa</span>
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl leading-relaxed text-paper/80">
              Mình luôn sẵn sàng cho những dự án mới, ý tưởng sáng tạo và cơ hội
              hợp tác. Cứ nhắn cho mình một lời chào nhé!
            </p>

            <div className="relative mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-accent-ink transition-transform hover:-translate-y-0.5"
              >
                <span aria-hidden>✉️</span>
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone}`}
                className="inline-flex items-center gap-2 rounded-full border border-paper/40 px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-paper/10"
              >
                <span aria-hidden>📞</span>
                {profile.phone}
              </a>
            </div>

            <div className="relative mt-8 flex items-center justify-center gap-3">
              <a
                href={profile.behance.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Behance"
                className="grid h-11 w-11 place-items-center rounded-full bg-paper/15 font-serif text-sm font-bold text-paper transition-colors hover:bg-paper/30"
              >
                Bē
              </a>
              <span className="text-sm text-paper/70">
                {profile.behance.label}
              </span>
            </div>
          </div>
        </Reveal>

        <footer className="mt-12 flex flex-col items-center justify-between gap-4 text-sm text-faint sm:flex-row">
          <span className="flex items-center gap-2.5 text-ink">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-accent font-serif text-xs font-bold text-paper">
              MA
            </span>
            <span className="font-serif text-base font-semibold">
              {profile.name}
            </span>
          </span>
          <span>© {new Date().getFullYear()} · Thiết kế & xây dựng bằng Next.js</span>
        </footer>
      </div>
    </section>
  );
}
