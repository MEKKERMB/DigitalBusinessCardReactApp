/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "ui-sans-serif"],
    },
    extend: {
      colors: {
        primary: "#23252C",
        secondary: "#F5F5F5",
        tertiary: "#D5D4D8",
        darkSecondary: "#1A1B21",
        darkTertiary: "#161619",
      },
    },
  },
  plugins: [],
};
