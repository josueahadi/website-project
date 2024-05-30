/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "custom-green": "#00672E",
        "custom-bgcolor": "#EFECEA",
      },
    },
    fontFamily: {
      outfit: ["Outfit", "sans-serif"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "4rem",
        lg: "8rem",
      },
    },
  },
  plugins: [],
};
