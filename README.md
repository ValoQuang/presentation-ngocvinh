# SOL · Chuẩn hóa Quy trình & Tối ưu Vận hành

A keyboard-navigated, data-themed slide deck for the SOL operations standardization proposal (v1.0, 26/05/2026 — Vinh Trương).

**Stack:** Vite · React 18 · TypeScript · Tailwind v3 · Recharts · Framer Motion.

## Highlights

- 14 slides built from the source proposal — cover, exec summary, pain points, cause-and-effect chain, 4-phase roadmap, two phase deep-dives, org structure, risk matrix, benefits, KPIs, team, call to action, closing.
- Real charts (no placeholder boxes):
  - Horizontal bar — pain point severity, root cause highlighted
  - Donut — 70/30 solution mix
  - Scatter — risk matrix (probability × impact, bubble sized by combined score)
  - Dual horizontal bars — direct vs indirect benefits
  - Radial — adoption baseline vs target
  - Gantt-style timeline — phase durations
- Dark, professional palette (slate/ink + cyan accent). Mono numerals via JetBrains Mono.
- Keyboard nav: `← / →`, `Space`, `PgUp/PgDn`, `Home/End`, digits `1–9` jump.

## Run

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # static build → dist/
npm run preview   # serve dist/
```

## Layout

```
src/
  App.tsx             # nav shell + keyboard handling
  slides.tsx          # all 14 slide components
  data.ts             # content extracted from the proposal
  components/
    SlideFrame.tsx    # shared slide chrome
    charts.tsx        # Recharts wrappers
  index.css           # Tailwind + theme tokens
```

## Source

Built from `SOL-proposal-presentation-v1-pdf.md` — internal proposal, do not redistribute.
