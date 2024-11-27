import DefaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...DefaultTheme.fontFamily.sans],
        poppins: ["Poppins", ...DefaultTheme.fontFamily.sans],
        lato: ["Lato", ...DefaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#6B3CC9",
        secondary: "#F28D35",
        analogous: {
          1: "#6A44F2",
          2: "#1CBDDD",
        },
        triadic: "#52378C",
        greenbg: {
          1: "#78BF91",
          2: "#4DCA79",
        },
        black: "#2F2F2F",
        light: "#545A75",
        subtle: "#9C9991",
        accent: {
          1: "#E2F2FE",
          2: "#FFF8E0",
        },
        error: "#FF0335",
        success: "#5EB30B",
      },
    },
  },
  plugins: [],
};
