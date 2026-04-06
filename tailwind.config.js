/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a4d5c",
        "primary-dark": "#153d4a",
        "primary-light": "#2a6b7d",
        accent: "#d4a024",
        "accent-dark": "#b8891f",
        "accent-light": "#e6b84d",
        "brand-green": "#3d7a45",
        "dark-navy": "#1a4d5c",
        "darker-navy": "#0f2d36",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
