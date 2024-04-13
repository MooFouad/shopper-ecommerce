/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], 
  theme: {
    extend: {
      gridTemplateColumns: {
        'six': '.5fr 2fr 1fr 1fr 1fr 1fr',
      },
      gridTemplateRows: {
        'six': '.5fr 2fr 1fr 1fr 1fr 1fr',
      }
    },
  },
  plugins: [],
}

