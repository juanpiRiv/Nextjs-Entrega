/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Asegúrate de incluir la ruta correcta
  ],
  theme: {
    extend: {
      colors: {
        text: '#e7f6fc',
        background: '#04161e',
        primary: '#7bc4ee',
        secondary: '#4c128c',
        accent: '#e644e7',
      },
    },
  },
  plugins: [],
};