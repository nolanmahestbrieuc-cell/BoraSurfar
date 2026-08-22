import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
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
      },
      maxWidth: {
        app: '480px',
        desktop: '1200px',
      },
    },
  },
  plugins: [],
} satisfies Config
