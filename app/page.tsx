import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { profile } from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen bg-paper">
      <Navbar />
      <main className="mx-auto flex max-w-shell flex-col gap-5 px-4 pb-8 pt-28">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="mx-auto max-w-shell px-8 pb-10">
        <div className="flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-sm text-faint sm:flex-row">
          <span className="flex items-center gap-2 text-ink">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-ink text-[10px] font-semibold text-paper">
              MA
            </span>
            {profile.name}
          </span>
          <span>© {new Date().getFullYear()} · Portfolio · Next.js</span>
        </div>
      </footer>
    </div>
  );
}
