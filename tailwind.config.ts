import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        background: "#030712",
        foreground: "#e8f0ff",
        muted: "#0b1220",
        accent: "#2ad2ff",
        accent2: "#7af59c",
        card: "#0a0f1e",
        border: "rgba(255,255,255,0.09)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        display: ["var(--font-display)", ...fontFamily.sans],
        mono: ["var(--font-mono)", ...fontFamily.mono],
      },
      boxShadow: {
        soft: "0 20px 55px rgba(0,0,0,0.35)",
      },
      backgroundImage: {
        "grid":
          "linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px), linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
