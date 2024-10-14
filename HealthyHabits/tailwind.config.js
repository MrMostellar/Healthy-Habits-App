/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        brandBackground: "#F0F3FF",
        brandHeaderBackground: "#211951",
        primary: "#15f5ba",
        secondary: "#35a29f"
      },
      textColor: {
        brandText: "#373A40",
        brandTextPrimary: "#15f5ba",
        brandTextSecondary: "#35a29f"
      }
    },
  },
  plugins: [],
}

