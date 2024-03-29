/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "lightgreen":"#b5e4ca",
        "lightpurple":"#cabdff",
        "lightyellow": "#ffd88d",
        "lightblue":"#b1e5fc",
        "gray-background":"#f4f4f4",
        "dark-purple":"#081A51",
        "light-white":"rgba(255,255,255,0.18)"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
