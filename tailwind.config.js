module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        Darkblue: "#327D9A",
        Lightblue: "#5396B0",
        Darkgray: "#4B4D57",
        pupple: "#8A719B",
        Darkpupple: "#824DAB", 
        Lightgray: "#858585",
        BlueGray: "#718F9B",
        RedGray: "#9B7171",
        Lightred: "#AB4D4D",
        Darkred: "#7A5757",
        Hower: "#0A8EC1",
        primary: {
          DEFAULT: "#050609",
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
