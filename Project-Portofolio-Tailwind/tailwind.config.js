/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#6A9C89', // Warna biru tua
        'secondary': '#C4DAD2', // Warna kuning tua
        'custom-green': '#E9EFEC', // Warna abu-abu
        'custom-dark': '#111827', // Warna dark
      },
    },
  },
  plugins: [],
}

