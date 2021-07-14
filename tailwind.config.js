const colors = require('tailwindcss/colors')

module.exports = {
  // mode: 'jit',
  purge:  [
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'heading': ['Montserrat'],
      'sans': ['Lato']
    },
    colors: {
      ...colors,
      gray: {
        '50': '#fafafa',
        '100': '#f0f0f0',
        '200': '#e4e4e4',
        '300': '#d5d5d5',
        '400': '#bdbdbd',
        '500': '#9e9e9e',
        '600': '#757575',
        '700': '#424242',
        '800': '#212121',
        '900': '#181818'
      }      
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(ellipse at 50% 0%, var(--tw-gradient-stops))',
      },
      colors: {
        action: '#f63'
      },
      typography: {
        DEFAULT: {
          css: {
            'h1,h2,h3,h4': { fontFamily: 'Montserrat' }
          }
        }
      }      
    },
  },
  variants: {
    extend: {
      height: ['hover']
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
