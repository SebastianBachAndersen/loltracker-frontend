module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#050609"
        },
        secondary: {
          DEFAULT: "#373C3D"
        }
      },
      transitionProperty: {
        width: "width"
      }
    }
  },
  plugins: []
};
