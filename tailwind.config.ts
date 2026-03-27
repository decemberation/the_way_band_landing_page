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
        primary: "#ff9f1c",
        "primary-2": "#ffd166",
        secondary: "#1e3a8a",
        brand: {
          bg: "#0f172a",
          bg2: "#111827",
          dark: "#0b1120",
        },
      },
      maxWidth: {
        content: "1180px",
      },
      borderRadius: {
        "4xl": "30px",
        "5xl": "36px",
      },
      boxShadow: {
        card: "0 20px 60px rgba(0,0,0,0.35)",
        primary: "0 15px 40px rgba(255,159,28,0.28)",
        logo: "0 10px 30px rgba(255,159,28,0.35)",
      },
      backdropBlur: {
        xs: "4px",
      },
    },
  },
  plugins: [],
};

export default config;
