/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#fbf5e6",
        cream: "#f5edd6",
        ink: {
          50: "#f1e9d2",
          100: "#e7dcbc",
          200: "#d4c69e",
          300: "#bba879",
          400: "#9c895d",
          500: "#7d6e48",
          600: "#5f5337",
          700: "#48402a",
          800: "#332e1f",
          900: "#1f1c13",
          950: "#100e09",
        },
        forest: {
          50: "#f1f5f1",
          100: "#dde7dd",
          200: "#b9cdb9",
          300: "#8aae8b",
          400: "#5e8e63",
          500: "#447049",
          600: "#345a39",
          700: "#2b4830",
          800: "#243927",
          900: "#1d2e20",
          950: "#0c1810",
        },
        gold: {
          400: "#d6b365",
          500: "#c89c44",
          600: "#a87f31",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

