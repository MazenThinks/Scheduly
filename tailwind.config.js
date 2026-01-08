/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf9',
          100: '#ccfbef',
          200: '#99f6e0',
          300: '#5fe9d0',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        accent: {
          50: '#fef6ee',
          100: '#fdecd3',
          200: '#fbd5a8',
          300: '#f8b871',
          400: '#f59338',
          500: '#f27315',
          600: '#e3560b',
          700: '#bc3f0b',
          800: '#963210',
          900: '#7a2c11',
        },
        sage: {
          50: '#f6f7f6',
          100: '#e3e7e3',
          200: '#c7cfc8',
          300: '#a3afa5',
          400: '#7d8c80',
          500: '#627166',
          600: '#4d5b51',
          700: '#404a43',
          800: '#353d38',
          900: '#2e342f',
        },
        warm: {
          50: '#fefcf3',
          100: '#fef7e0',
          200: '#fcefc1',
          300: '#fae396',
          400: '#f7d169',
          500: '#f4b944',
          600: '#e89a2a',
          700: '#c27620',
          800: '#9a5d20',
          900: '#7d4c1e',
        },
      },
      fontFamily: {
        sans: ['Nunito', 'system-ui', 'sans-serif'],
        display: ['Tomorrow', 'system-ui', 'sans-serif'],
        handwritten: ['Caveat', 'cursive'],
        signature: ['Tomorrow', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'grid-reveal': 'gridReveal 1.5s ease-out 0.3s forwards',
        'grid-fade-out': 'gridFadeOut 3s ease-in-out forwards',
        'hero-entrance': 'heroEntrance 1.2s ease-out forwards',
        'delay-200': 'fadeInUp 1s ease-out 0.2s forwards',
        'delay-300': 'fadeInUp 1s ease-out 0.3s forwards',
      },
      keyframes: {
        fadeIn: {
          'from': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        gridReveal: {
          'from': {
            opacity: '0',
          },
          'to': {
            opacity: '1',
          },
        },
        gridFadeOut: {
          '0%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.3',
          },
          '100%': {
            opacity: '0',
          },
        },
        heroEntrance: {
          'from': {
            opacity: '0',
            transform: 'translateY(40px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}
