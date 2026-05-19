/** @type {import('tailwindcss').Config} */
module.exports = {
  // Only scan Next.js App Router and component files
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],

  // Let Bootstrap handle the base dark theme; Tailwind fills the gaps
  darkMode: 'class',

  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#1d9bf0',
          dark:    '#1a8cd8',
          light:   '#4db5f5',
        },
        surface: {
          base:    '#0a0e1a',
          card:    '#141d35',
          input:   '#1a2340',
        },
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
      },
    },
  },

  plugins: [],
};
