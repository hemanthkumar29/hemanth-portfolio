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
        background: "#04060a",
        foreground: "#e5e7eb",
        muted: "#0b1220",
        accent: "#7c7dff",
        accent2: "#1f9cff",
        card: "#0b0f1a",
        border: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        display: ["var(--font-display)", ...fontFamily.sans],
        mono: ["var(--font-mono)", ...fontFamily.mono],
      },
      boxShadow: {
        soft: "0 15px 45px rgba(0,0,0,0.25)",
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
