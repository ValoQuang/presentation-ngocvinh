import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  index: number;
  total: number;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  variant?: "default" | "cover" | "split";
};

export function SlideFrame({
  index,
  total,
  eyebrow,
  title,
  subtitle,
  children,
  variant = "default",
}: Props) {
  return (
    <motion.section
      key={index}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto flex h-[100dvh] w-full max-w-[1400px] flex-col px-10 py-10 md:px-16 md:py-14"
    >
      {/* Header bar */}
      <header className="flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-slate-500">
        <div className="flex items-center gap-3">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="font-mono">SOL · Operations Standardization</span>
        </div>
        <div className="font-mono tabular-nums">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </div>
      </header>

      <div className="divider mt-4" />

      {/* Title block */}
      <div className={variant === "cover" ? "mt-16" : "mt-8"}>
        {eyebrow && (
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/60 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            {eyebrow}
          </div>
        )}
        <h1
          className={
            variant === "cover"
              ? "text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl"
              : "text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl"
          }
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-400 md:text-lg">
            {subtitle}
          </p>
        )}
      </div>

      <div className="mt-8 flex-1 overflow-hidden">{children}</div>

      <footer className="mt-4 flex items-center justify-between font-mono text-[10.5px] uppercase tracking-[0.22em] text-slate-600">
        <span>v1.0 · Vinh Trương</span>
      </footer>
    </motion.section>
  );
}
