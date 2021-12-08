module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        monoton: ['Monoton', 'cursive'],
      },
      textColor: {
        yellow: '#ecd30f',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
