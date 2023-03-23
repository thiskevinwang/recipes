const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '.dark-theme'],
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto-mono)', ...fontFamily.sans],
        mono: ['var(--font-roboto-mono)', ...fontFamily.mono],
      },
    },
  },
  plugins: [],
};
