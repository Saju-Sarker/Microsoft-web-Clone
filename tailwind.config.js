/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "deskAfter": "1000px",
        "deskAfter2": "1100px",
      },
      animation: {
        "intro": 'introAnimate 0.2s ease-in-out forwards',
      },
      keyframes: {
        introAnimate: {
          "0%": {height: '0px'},
          "100%": {height: "480px"}
        }
      }
    },
  },
  plugins: [],
}

