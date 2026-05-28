/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "Menlo", "monospace"],
      },
      colors: {
        ink: {
          950: "#05080d",
          900: "#080c14",
          800: "#0d131c",
          700: "#141b27",
          600: "#1c2533",
          500: "#2a3445",
        },
        accent: {
          DEFAULT: "#22d3ee",
          soft: "#67e8f9",
          deep: "#0891b2",
        },
        signal: {
          warn: "#fbbf24",
          danger: "#f97066",
          ok: "#34d399",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(34,211,238,0.18), 0 20px 60px -20px rgba(34,211,238,0.25)",
      },
    },
  },
  plugins: [],
};
