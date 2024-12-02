import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.blue["900"],
        secondary: colors.blue["500"],
        tertiary: colors.blue["200"],
        neutral: colors.blue["100"],
      },
    },
  },
  plugins: [],
};
