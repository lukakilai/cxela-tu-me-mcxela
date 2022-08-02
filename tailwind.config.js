/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "archy-bold": ["ArchyEDT-Bold", "sans-serif"],
        "archy-thin": ["ArchyEDT-Thin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
