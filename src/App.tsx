import { useCallback, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { SLIDES } from "./slides";

export default function App() {
  const [i, setI] = useState(0);
  const total = SLIDES.length;

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
    <div className="bg-orbit relative min-h-[100dvh] w-full overflow-hidden">
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
    </div>
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
