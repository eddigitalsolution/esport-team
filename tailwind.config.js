/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDark: '#0D0D11',
        bgCard: 'rgba(20, 21, 28, 0.75)',
        accentGold: '#F5C400',
        accentCyan: '#00F2FE',
      },
      fontFamily: {
        heading: ['Bebas Neue', 'sans-serif'],
        subheading: ['Rajdhani', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
