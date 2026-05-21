/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#f0f4f8',
          100: '#d9e3ee',
          200: '#b3c7dd',
          300: '#7fa2c2',
          400: '#4d7ba5',
          500: '#2a5d8f',
          600: '#1e4a76',
          700: '#173b60',
          800: '#122e4d',
          900: '#1a2e4a',
          DEFAULT: '#1a2e4a',
        },
        gold: {
          50:  '#fef9ec',
          100: '#f9f0d7',
          200: '#f0d98a',
          300: '#e4c460',
          400: '#d4a840',
          500: '#c9a84c',
          600: '#b08a30',
          700: '#8a6820',
          DEFAULT: '#c9a84c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
