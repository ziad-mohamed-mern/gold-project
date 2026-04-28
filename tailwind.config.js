/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enables dark mode toggling via class
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cairo', 'sans-serif'], // Added Arabic font support
      },
      colors: {
        gold: {
          light: '#FDE047',
          DEFAULT: '#EAB308',
          dark: '#A16207',
        },
        silver: {
          light: '#F3F4F6',
          DEFAULT: '#9CA3AF',
          dark: '#4B5563',
        },
        diamond: {
          light: '#E0F2FE',
          DEFAULT: '#38BDF8',
          dark: '#0369A1',
        }
      }
    },
  },
  plugins: [],
}
