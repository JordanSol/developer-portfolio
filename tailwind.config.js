/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        acier: "'acier-bat-solid'",
        acierOutline: "'acier-bat-outline'",
        montserrat: "'montserrat'",
        barlow: "'Barlow Condensed'"
      },
      fontSize: {
        '8xl': '7rem',
        '9xl': '9rem'
      },
    },
  },
  plugins: [require("daisyui")],
}