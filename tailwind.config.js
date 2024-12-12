/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"], // make sure to include jsx files if you're using React
  theme: {
    extend: {
      fontFamily: {
        arimo: ['Arimo', 'sans-serif'],
        caveat: ['Caveat', 'cursive'],
        matemasie: ['Matemasie', 'serif'],
      },
    },
  },
  plugins: [],
}
