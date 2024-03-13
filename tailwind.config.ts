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
        plusJakarta: '"Plus Jakarta Sans", sans-serif',
      },
      colors: {
        primary_color: "#045DDE",
        secondary_color: "#0245CA",
      },
    },
  },
  plugins: [],
};
export default config;
