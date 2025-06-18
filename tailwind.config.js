/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgba(249,250,251,1)', // #f9fafb
      },
    },
  },
  plugins: [],
};
