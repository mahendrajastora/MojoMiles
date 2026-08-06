import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./lib/**/*.{js,ts,jsx,tsx}", "./types/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-manrope)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],
      },
      colors: {
        brand: {
          DEFAULT: "#1F3A2D",
          light: "#4B6C61",
          muted: "#71867B",
        },
        sand: {
          DEFAULT: "#D8C3A5",
          soft: "#E3D5C3",
          muted: "#C0A78D",
        },
        charcoal: {
          DEFAULT: "#1C1C1C",
          soft: "#2E2E2E",
          muted: "#4A4A4A",
        },
        surface: {
          DEFAULT: "#121110",
          muted: "#171615",
          soft: "#1C1A19",
        },
        foreground: {
          DEFAULT: "#F9F8F6",
          muted: "#CFCBC5",
          low: "#A8A49C",
        },
        accent: {
          coral: "#F28B6A",
          melon: "#FFB04C",
          ocean: "#4EA5FF",
          lavender: "#8C7FFF",
        },
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top left, rgba(78, 165, 255, 0.18), transparent 22%), radial-gradient(circle at bottom right, rgba(242, 139, 106, 0.18), transparent 24%)",
      },
      borderRadius: {
        xl: "1.75rem",
        "2xl": "2.25rem",
        "3xl": "2.75rem",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(0, 0, 0, 0.18)",
        card: "0 18px 60px rgba(0, 0, 0, 0.22)",
        elevated: "0 32px 120px rgba(0, 0, 0, 0.24)",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
      },
      animation: {
        fade: "fade 0.45s ease-out both",
        "slide-up": "slide-up 0.45s ease-out both",
        "scale-in": "scale-in 0.35s ease-out both",
      },
      keyframes: {
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
