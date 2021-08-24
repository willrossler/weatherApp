module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'blue-lighter': '#1E213A',
        'blue-dark': '#100E1D',
        'light-gray': '#6E707A',
        'progress-bar': '#FFEC65',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
