/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./path/to/your/**/*.html",
    "./path/to/your/**/*.js",
    // Add other paths as needed
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
