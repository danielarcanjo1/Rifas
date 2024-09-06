/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'modal-rgba': 'rgba(0, 0, 0, 0.6)',
      },
      zIndex: {
        '-10': '-10',
      }
    },
  },
  plugins: [],
}