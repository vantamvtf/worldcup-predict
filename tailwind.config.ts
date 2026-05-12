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
          primaryGold: "#C98A13",
          goldLight: "#E4B64A",
          goldDark: "#9E6808",
          green: "#0B6B3A",
          greenDark: "#064F2D",
          softGreen: "#EAF7EF",
          textDark: "#10201A",
          textMuted: "#66736C",
          borderSoft: "#EADFCB",
          bgWarm: "#FBFAF6",
          card: "#FFFFFF",
          deepGreen: "#0B6B3A"
        }
      },
      boxShadow: {
        card: "0 10px 24px rgba(42, 34, 18, 0.08)",
        nav: "0 10px 28px rgba(70, 54, 24, 0.1)"
      }
    }
  },
  plugins: []
};

export default config;
