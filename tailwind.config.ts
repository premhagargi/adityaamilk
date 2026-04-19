import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          900: "#27398F",
          800: "#1F2F7A",
          600: "#3A4CA8",
        },
        gold: {
          500: "#C9A227",
          400: "#D4AF37",
          100: "#F6EBC8",
        },
        cream: {
          50: "#FAF6F0",
          100: "#F8F5ED",
          200: "#F1EADB",
        },
        ink: {
          900: "#1F2521",
          600: "#4A4A46",
          400: "#8A8880",
        },
        line: "#E7E1D2",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(39,57,143,0.05), 0 8px 24px rgba(39,57,143,0.08)",
        lift: "0 2px 4px rgba(39,57,143,0.08), 0 16px 40px rgba(39,57,143,0.12)",
      },
      borderRadius: {
        xs: "4px",
      },
      maxWidth: {
        content: "1280px",
        prose: "720px",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 0.61, 0.36, 1)",
      },
      letterSpacing: {
        eyebrow: "0.14em",
      },
    },
  },
  plugins: [],
};

export default config;
