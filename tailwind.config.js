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
      animation: {
        fadeIn: "fadeIn 0.5s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": {opacity: 0},
          "100%": {opacity: 1}
        }
      }
    },
    variants: {
      animation: ["motion-safe"]
    }
  },
  plugins: [require("daisyui")],
}