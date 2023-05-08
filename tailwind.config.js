const { join } = require("path")
/** @type {import('tailwindcss').Config} */


module.exports = {
  mode: 'jit',
  purge: ['./client/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {},
  variants: {},
  plugins: [require("tailwindcss"), require("autoprefixer")],
  content: [
    join(__dirname, '**/*.{js,ts,jsx,tsx}'),
    './client/pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
}
