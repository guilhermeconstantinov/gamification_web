module.exports = {
  purge: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        principal: '#557FEB',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
