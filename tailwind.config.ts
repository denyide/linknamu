import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        card: "var(--card)",
        border: "var(--border)",
        "border-strong": "var(--border-strong)",
      },
      boxShadow: {
        card: "var(--shadow)",
        "card-hover": "var(--shadow-hover)",
      },
    },
  },
  plugins: [],
};
export default config;
