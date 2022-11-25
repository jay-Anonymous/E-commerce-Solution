/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        dark: "url('/src/assets/img/bg-desktop-dark.jpg')",
        light: "url('/src/assets/img/bg-desktop-light.jpg')",
        "mobile-dark": "url('/src/assets/img/bg-mobile-dark.jpg')",
        "mobile-light": "url('/src/assets/img/bg-mobile-light.jpg')",
      },
      colors: {
        white: "#fff",
        brightBlue: "hsl(220, 98%, 61%)",
        veryDarkGrayishBlue: "hsl(237, 14%, 26%)",
        /* Light Theme */
        veryLightGray: "hsl(0, 0%, 98%)",
        veryLightGrayishBlue: "hsl(236, 33%, 92%)",
        lightGrayishBlue: "hsl(233, 11%, 84%)",
        darkGrayishBlue: "hsl(236, 9%, 61%)",
        veryDarkGrayishBlue: "hsl(235, 19%, 35%)",

        /* Dark Theme */
        veryDarkBlue: {
          DEFAULT: "hsl(235, 21%, 11%)",
          desaturated: "hsl(235, 24%, 19%)",
        },
        lightGrayishBlue: {
          DEFAULT: "hsl(234, 39%, 85%)",
          hover: "hsl(236, 33%, 92%)",
        },
        darkGrayishBlueDark: "hsl(234, 11%, 52%)",
        veryDarkGrayishBlue: {
          DEFAULT: "hsl(233, 14%, 35%)",
          hover: "hsl(237, 14%, 26%)",
        },
      },
    },
  },
  plugins: [],
};
