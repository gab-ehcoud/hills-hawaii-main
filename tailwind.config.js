/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js, jsx}"],

  theme: {
    extend: {
      colors: {
        primary: {
          100: "#f0f9ff",
          200: "#e0f2fe",
          300: "#cbe7fd",
          400: "#90caf9",
          500: "#2196f3",
          600: "#1e88e5",
          700: "#1976d2",
          800: "#1565c0",
          900: "#0d47a1",
        },
        secondary: {
          100: "#f8f0f0",
          200: "#f1e1e1",
          300: "#e3c7c7",
          400: "#c39090",
          500: "#a55b5b",
          600: "#9b5252",
          700: "#874646",
          800: "#723a3a",
          900: "#4d2727",
        },
        accent: {
          1: "#ff5d00",
          2: "#ff7e29",
          3: "#ff9f52",
          4: "#ffbf7a",
          5: "#ffdf9f",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

