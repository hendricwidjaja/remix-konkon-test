import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        aquaKonkon: '#63DCDD',
        pinkKonkon: '#EA41F7'
      },
      fontFamily: {
        primary: ['"OCR A Extended"', 'sans-serif'], 
        secondary: ['"ETHNOCENTRIC"', 'sans-serif'],   
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
