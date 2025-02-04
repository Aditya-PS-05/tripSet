/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'primary': '#FF5C28',
          'background': '#ffd4d4',
        },
        fontFamily: {
          'hanken': ['Hanken Grotesk', 'sans-serif'],
          'hanken-bold': ['Hanken Grotesk', 'sans-serif'],
        }
      },
    },
    plugins: [],
  }