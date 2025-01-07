import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
  plugins: [],
};

export default config;
