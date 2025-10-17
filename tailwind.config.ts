import type { Config } from 'tailwindcss';
// @ts-expect-error types not required for plugin import in config file
import typography from '@tailwindcss/typography';

export default <Partial<Config>>{
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
    './public/content/**/*.{md,mdx}'
  ],
  theme: {
    extend: {
      container: { center: true, padding: '1rem' },
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81'
        }
      }
    }
  },
  plugins: [typography]
};
