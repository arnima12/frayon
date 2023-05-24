/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        frayontheme: {

          "primary": "#F59E0B",
          "secondary": "#FCD34D",
          "base-100": "#FFFFFF",
          "accent": "#2A303C",
          "error": "#FF0000"

        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

