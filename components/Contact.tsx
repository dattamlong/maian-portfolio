import {
  FaBehance,
  FaInstagram,
  FaFacebookSquare,
  FaLinkedin,
} from "react-icons/fa";
import { profile } from "@/lib/data";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";

const socials = [
  { label: "Behance", href: profile.behance.url, Icon: FaBehance },
  { label: "Instagram", href: "#", Icon: FaInstagram },
  { label: "Facebook", href: "#", Icon: FaFacebookSquare },
  { label: "LinkedIn", href: "#", Icon: FaLinkedin },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-shell scroll-mt-24 px-6 sm:px-12 lg:px-[120px]"
    >
      <div className="border-t border-line py-24 text-center sm:py-32">
      <Reveal>
        <h2 className="font-serif text-3xl font-bold tracking-tight text-ink sm:text-[2.4rem]">
          Let&apos;s Connect
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted">
          Feel free to reach out for collaborations or just a friendly hello.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="link-pink mt-4 inline-block text-xl font-medium"
        >
          {profile.email}
        </a>

        <div className="mt-10 flex items-center justify-center gap-8">
          {socials.map((s) => (
            <Magnetic key={s.label} strength={0.4}>
              <a
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="block text-ink transition-colors hover:text-accent"
              >
                <s.Icon className="h-7 w-7" />
              </a>
            </Magnetic>
          ))}
        </div>
      </Reveal>
      </div>
    </section>
  );
}
