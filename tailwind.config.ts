import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#0B1120",
        surface: "#0F1729",
        line: "#1E293B",
        accent: {
          DEFAULT: "#3B82F6",
          cyan: "#06B6D4",
        },
        ink: {
          DEFAULT: "#E2E8F0",
          muted: "#8B98AE",
          faint: "#5B677E",
        },
      },
      fontFamily: {
        display: ["var(--font-geist)", "Inter", "sans-serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "IBM Plex Mono", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, #0B1120), linear-gradient(90deg, rgba(59,130,246,0.08) 1px, transparent 1px), linear-gradient(rgba(59,130,246,0.08) 1px, transparent 1px)",
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "fade-up": "fadeUp 0.7s ease forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
