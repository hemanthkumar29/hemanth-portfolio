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
        background: "#0a0a0f",
        foreground: "#e4e4e7",
        muted: "#18181b",
        "muted-foreground": "#a1a1aa",
        accent: "#8b5cf6",
        "accent-secondary": "#06b6d4",
        card: "rgba(255, 255, 255, 0.03)",
        "card-hover": "rgba(255, 255, 255, 0.06)",
        border: "rgba(255, 255, 255, 0.08)",
        "border-hover": "rgba(139, 92, 246, 0.3)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        display: ["var(--font-display)", ...fontFamily.sans],
        mono: ["var(--font-mono)", ...fontFamily.mono],
      },
      boxShadow: {
        soft: "0 8px 32px rgba(0, 0, 0, 0.3)",
        glow: "0 0 30px rgba(139, 92, 246, 0.15)",
        "glow-cyan": "0 0 30px rgba(6, 182, 212, 0.15)",
        "glow-strong": "0 0 60px rgba(139, 92, 246, 0.25)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-accent": "linear-gradient(135deg, #8b5cf6, #06b6d4)",
        "gradient-accent-reverse": "linear-gradient(135deg, #06b6d4, #8b5cf6)",
        "gradient-dark": "linear-gradient(180deg, #0a0a0f 0%, #111118 50%, #0a0a0f 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "text-reveal": {
          "0%": { opacity: "0", transform: "translateY(10px) rotateX(-10deg)" },
          "100%": { opacity: "1", transform: "translateY(0) rotateX(0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-slower": "float 10s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        shimmer: "shimmer 2s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "text-reveal": "text-reveal 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
