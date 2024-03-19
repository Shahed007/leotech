/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "764px",
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
