module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    fontFamily: {
      'primary': ['Kumbh Sans', 'sans-serif'],
      'secondary': ['Open Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        'chigen-primary': '#231B6E',
        'chigen-secondary': '#E600E9',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
