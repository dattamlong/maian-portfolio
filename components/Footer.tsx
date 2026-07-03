import { LuCat } from "react-icons/lu";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-shell px-6 pb-10 sm:px-12 lg:px-[120px]">
      <div className="flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-sm text-faint sm:flex-row">
        <span className="flex items-center gap-2.5">
          <LuCat
            className="h-7 w-7"
            strokeWidth={2}
            style={{ stroke: "url(#catGrad)" }}
          />
          <span className="text-ink">{profile.name}</span>
        </span>
        <span>© {new Date().getFullYear()} · Portfolio</span>
      </div>
    </footer>
  );
}
