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
        background: "#fafaf9",
        foreground: "#1c1917",
        muted: "#f0fdfa",
        accent: "#0d9488",
        accent2: "#0f766e",
        card: "#ffffff",
        border: "#e7e5e4",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        display: ["var(--font-display)", ...fontFamily.sans],
        mono: ["var(--font-mono)", ...fontFamily.mono],
      },
      boxShadow: {
        soft: "0 8px 24px rgba(28, 25, 23, 0.06)",
        glow: "0 0 20px rgba(13, 148, 136, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
