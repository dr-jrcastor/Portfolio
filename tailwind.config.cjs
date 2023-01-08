/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Caveat', 'Bree\\Serif', defaultTheme.fontFamily.serif],
        'sans': ['Cambay', defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
