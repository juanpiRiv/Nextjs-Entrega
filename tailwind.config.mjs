/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
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