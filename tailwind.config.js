/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors: {
        'border-header': '0px 10px 10px -6px black',
        'border-overlay': '3px 0px 0px rgb(77 124 15)'
      }
    },
  },
  plugins: [],
}
