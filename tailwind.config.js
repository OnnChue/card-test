/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    

    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
        serif: ['Young Serif', 'serif'],
        roboto:['Roboto', 'sans-serif'],
      },

      colors: {
        'primary': '#5b21b6',
        'secondary': '#86E3CE',
        'accent': '#CCABD8',
      },
    },
  },
  plugins: [],
}

