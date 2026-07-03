import { profile } from "@/lib/data";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-content px-6">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-line bg-surface p-10 sm:p-16">
            <p className="section-label">Liên hệ</p>
            <h2 className="mt-4 max-w-2xl font-serif text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
              Cùng tạo nên sản phẩm số ý nghĩa.
            </h2>
            <p className="mt-5 max-w-xl text-lg text-muted">
              Mình đang mở với các cơ hội hợp tác và dự án thiết kế mới. Cứ nhắn
              cho mình một lời chào nhé!
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
              >
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone}`}
                className="rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
              >
                {profile.phone}
              </a>
              <a
                href={profile.behance.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Behance {profile.behance.label}
              </a>
            </div>

            <p className="mt-8 text-sm text-faint">{profile.location}</p>
          </div>
        </Reveal>

        <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-sm text-faint sm:flex-row">
          <span className="font-serif text-base text-ink">
            {profile.name}
            <span className="text-accent">.</span>
          </span>
          <span>© {new Date().getFullYear()} · Thiết kế & xây dựng bằng Next.js</span>
        </footer>
      </div>
    </section>
  );
}
