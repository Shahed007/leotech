import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "764",
        lg: "1024px",
        xl: "1240px",
        "2xl": "1440px",
      },
      container: {
        center: true,
        padding: "0 20px",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        jakarta: ["var(--font-jakarta)"],
      },
      colors: {
        primary_color: "#045DDE",
        secondary_color: "#0245CA",
        btn_hover_color: "#FFC107",
        text_color: "#4c5671",
      },
    },
  },
  plugins: [],
};
export default config;
