import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "var(--background)", // Ensure these variables are defined in CSS
        foreground: "var(--foreground)",
      },
      animation: {
        "border-beam":
          "border-beam calc(var(--duration, 4) * 1s) infinite linear", // Default duration fallback
      },
      keyframes: {
        "border-beam": {
          "0%": { "offset-distance": "0%" },
          "100%": { "offset-distance": "100%" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
