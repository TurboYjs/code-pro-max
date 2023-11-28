const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/**/*.js',
    './src/**/*.ts',
    './src/**/*.tsx',
    './pages/**/*.js',
    './pages/**/*.ts',
    './pages/**/*.tsx',
  ],
  // theme: {
  //   extend: {
  //     colors: {
  //       gray: colors.neutral,
  //     },
  //   },
  // },

  theme: {
    extend: {
      colors: {
        textBase: '#afb6c2',
        textTitle: '#d4ccb6',
        background: '#191816',
        formBackground: '#24221f',
        primaryColor: '#ffc632'
      }
    },
    fontFamily: {
      'titles': ['Poppins', 'sans-serif'],
      'body': ['Roboto', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
