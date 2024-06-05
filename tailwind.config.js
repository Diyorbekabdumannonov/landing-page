const { list } = require("postcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        24: "24px",
        18: "18px",
      },
      colors: {
        primary: "#09102a",
        lightgray: "#f7f7f7",
        blue: "#3958d3",
        lightblue: "#f2f4fc",
        green: "#35d1a2",
        gray450: "#f6f7f9",
        gray650: "#272d44",
        blue300: "#9fc9fd",
        blue500: "#3957d3",
      },
      lineHeight: {
        70: "70px",
      },
      maxHeight: {
        380: "380px",
      },
      maxWidth: {
        475: "475px",
        900: "900px",
        370: "370px",
        340: "340px",
      },
      width: {
        440: "440px",
      },
    },
  },
  plugins: [],
};
