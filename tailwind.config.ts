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
          goldLight: "#E5B94F",
          deepGreen: "#0B6B3A",
          softGreen: "#EAF7EF",
          textDark: "#0F1F1A",
          borderSoft: "#EADFCB",
          bgWarm: "#FBFAF6",
          card: "#FFFFFF"
        }
      },
      boxShadow: {
        card: "0 12px 30px rgba(101, 79, 35, 0.08)",
        nav: "0 10px 20px rgba(52, 39, 17, 0.08)"
      },
      backgroundImage: {
        hero: "radial-gradient(circle at 82% 20%, rgba(201,138,19,0.18), transparent 45%), radial-gradient(circle at 15% 85%, rgba(11,107,58,0.12), transparent 40%)"
      }
    }
  },
  plugins: []
};

export default config;
