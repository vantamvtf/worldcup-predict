import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        wc: {
          navy: "#081226",
          card: "#0f1b32",
          green: "#22c55e",
          gold: "#f7c948",
          soft: "#9fb0cb"
        }
      },
      boxShadow: {
        card: "0 10px 30px rgba(2, 6, 23, 0.45)"
      },
      backgroundImage: {
        hero: "radial-gradient(circle at top right, rgba(34,197,94,0.28), transparent 42%), radial-gradient(circle at top left, rgba(247,201,72,0.2), transparent 45%)"
      }
    }
  },
  plugins: []
};

export default config;
