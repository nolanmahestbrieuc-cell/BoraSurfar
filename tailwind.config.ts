import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './maison-aurele.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EAFBF9',
          100: '#D3F5F1',
          200: '#A8EBE4',
          300: '#7ADFD5',
          400: '#52D0C4',
          500: '#2DBDB5',
          600: '#229E97',
          700: '#1C7F7A',
          800: '#17635F',
          900: '#124C49',
        },
        navy: {
          50: '#EEF3F7',
          100: '#DCE6EF',
          200: '#B3C6D9',
          300: '#7E9DBB',
          400: '#4D739B',
          500: '#2E5578',
          600: '#1F3E5C',
          700: '#172F47',
          800: '#0F2136',
          900: '#0A1826',
        },
        sand: {
          50: '#FDFAF2',
          100: '#F9F1DC',
          200: '#F0E1B8',
        },
        // Palette éditoriale de la page Maison Aurèle : nuit chaude + or.
        aurele: {
          ink: '#0A0908',
          coal: '#100D0A',
          ember: '#1A1510',
          bark: '#2A2119',
          gold: '#C8A461',
          amber: '#E4C88F',
          cream: '#F4EEE2',
          mist: '#A79D8C',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        display: ['Cormorant Garamond', 'Times New Roman', 'Georgia', 'serif'],
      },
      maxWidth: {
        app: '480px',
        desktop: '1200px',
        editorial: '1440px',
      },
    },
  },
  plugins: [],
} satisfies Config
