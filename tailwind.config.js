/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,html}'],
  safelist: [
    'text-primary-600', 'text-secondary-500', 'text-green-500', 'text-red-500', 'text-yellow-500', 'text-blue-500', 'text-black', 'text-white',
    'text-4xl', 'text-3xl', 'text-2xl', 'text-xl', 'text-lg', 'text-base',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'var(--primary-50)',
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          300: 'var(--primary-300)',
          400: 'var(--primary-400)',
          500: 'var(--primary-500)',
          600: 'var(--primary-600)',
          700: 'var(--primary-700)',
          800: 'var(--primary-800)',
          900: 'var(--primary-900)',
          950: 'var(--primary-950)',
        },
      },
    },
  },
  plugins: [],
};
