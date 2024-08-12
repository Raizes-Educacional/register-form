/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontFamily: {
      body: ['Roboto', 'sans-serif'],
    },
    colors: {
      primary: {
        100: '#1B48F2',
        200: '#3CC8F2',
        300: '#041E49'
      },
      secondary: {
        100: '#5139A8',
        200: '#F0810E',
        300: '#F9B931'
      },
      achromatic: {
        100: '#FFFFFF',
        200: '#ECEFF7',
        300: '#383838'
      },
      screens: {
        'sm': {'min': '350px', 'max': '767px'},
        // => @media (min-width: 350px and max-width: 767px) { ... }
  
        'md': {'min': '768px', 'max': '1023px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }
  
        'lg': {'min': '1024px', 'max': '1279px'},
        // => @media (min-width: 1024px and max-width: 1279px) { ... }
  
        'xl': {'min': '1280px', 'max': '1535px'},
        // => @media (min-width: 1280px and max-width: 1535px) { ... }
  
        '2xl': {'min': '1536px'},
        // => @media (min-width: 1536px) { ... }
      },
      extend: {
        spacing: {
          // '8xl': '96rem',
          // '9xl': '128rem',
        },
        borderRadius: {
          // '4xl': '2rem',
        },
      },
    },
    plugins: [],
  }
}