const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  mode: "jite",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        agency: ["Agency"],
      },
      colors: {
        header: "#171717",
        primary: "#3AA417",
      },
      dropShadow: {
        header: "0px 4px 4px rgba(0, 0, 0, 0.25",
      },
      backgroundImage: {
        hero: "url('/hero-bg.png')",
        tokenomics: "url('/tokenomics-bg.png')",
      },
    },
  },
  plugins: [],
};
