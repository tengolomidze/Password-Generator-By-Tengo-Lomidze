/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif']
      },
      colors: {
        "main": "rgb(255, 255, 255)",
        "bg": "rgb(0, 0, 0)"
      },
    },
    screens: {
      'phone': '400px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
  },
  plugins: [],
}
