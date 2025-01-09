/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #00D084 0%, #7BDCB5 0%, #52ADE8 100%)',
      }
    },
  },
  plugins: [],
};
