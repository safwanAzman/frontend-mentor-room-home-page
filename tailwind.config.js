module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    letterSpacing: {
      widestcustom: '.4em',
    },
    
    extend: {
      // inset: {
      //   '-29': '-28.5%',
      // },
      // width: {
      //   '29': '28.5%',
      // }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
