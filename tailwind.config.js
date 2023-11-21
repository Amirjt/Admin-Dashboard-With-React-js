/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        main : '#f0f8ff',
        second : '#ff99c8',
        third : '#e4c1f9'
      }
    },
  },
  plugins: [],
}