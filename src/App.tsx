import { useCallback, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { SLIDES } from "./slides";

type Theme = "dark" | "light";

export default function App() {
  const [i, setI] = useState(0);
  const total = SLIDES.length;
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "dark";
    const saved = window.localStorage.getItem("sol-deck-theme");
    return saved === "light" ? "light" : "dark";
  });

  useEffect(() => {
    window.localStorage.setItem("sol-deck-theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(
    () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    [],
  );

  const next = useCallback(() => setI((v) => Math.min(v + 1, total - 1)), [total]);
  const prev = useCallback(() => setI((v) => Math.max(v - 1, 0)), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowRight", "PageDown", " "].includes(e.key)) {
        e.preventDefault();
        next();
      } else if (["ArrowLeft", "PageUp"].includes(e.key)) {
        e.preventDefault();
        prev();
      } else if (e.key === "Home") {
        setI(0);
      } else if (e.key === "End") {
        setI(total - 1);
      } else if (/^[0-9]$/.test(e.key)) {
        const n = Number(e.key);
        if (n >= 1 && n <= total) setI(n - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, total]);

  const Current = SLIDES[i];

  return (
    <div
      data-theme={theme}
      className={`bg-orbit relative min-h-[100dvh] w-full overflow-hidden ${
        theme === "light" ? "theme-light" : ""
      }`}
    >
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />

      {/* Progress strip */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-30 flex h-1 gap-[2px] px-2 pt-2">
        {Array.from({ length: total }).map((_, idx) => (
          <div
            key={idx}
            className={`h-1 flex-1 rounded-full transition-all duration-500 ${
              idx <= i ? "bg-accent" : "bg-slate-700/50"
            }`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <Current key={i} i={i} />
      </AnimatePresence>

      {/* Nav */}
      <div className="fixed bottom-6 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 rounded-full border border-slate-800/80 bg-slate-900/80 px-2 py-1.5 backdrop-blur">
        <NavBtn onClick={prev} disabled={i === 0} label="←" />
        <div className="px-3 font-mono text-xs tabular-nums text-slate-300">
          {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </div>
        <NavBtn onClick={next} disabled={i === total - 1} label="→" />
      </div>

      {/* Bottom-right cluster: back to start + theme toggle */}
      <div className="fixed bottom-6 right-6 z-30 flex items-center gap-2">
        <button
          onClick={() => setI(0)}
          disabled={i === 0}
          aria-label="Back to slide 1"
          className="flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-900/80 px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-slate-300 backdrop-blur transition hover:border-accent/60 hover:text-accent disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-slate-800/80 disabled:hover:text-slate-300"
        >
          <span aria-hidden className="text-base leading-none">⤺</span>
          <span>Slide 1 / {String(total).padStart(2, "0")}</span>
        </button>
        <button
          onClick={toggleTheme}
          aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          title={theme === "dark" ? "Light mode" : "Dark mode"}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800/80 bg-slate-900/80 font-mono text-base text-slate-300 backdrop-blur transition hover:border-accent/60 hover:text-accent"
        >
          {theme === "dark" ? (
            <SunIcon className="h-4 w-4" />
          ) : (
            <MoonIcon className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  );
}

function SunIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function NavBtn({
  onClick,
  disabled,
  label,
}: {
  onClick: () => void;
  disabled?: boolean;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex h-8 w-8 items-center justify-center rounded-full font-mono text-sm text-slate-200 transition hover:bg-accent/15 hover:text-accent disabled:cursor-not-allowed disabled:text-slate-600 disabled:hover:bg-transparent"
    >
      {label}
    </button>
  );
}
