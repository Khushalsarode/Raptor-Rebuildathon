/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode toggling
  theme: {
    extend: {
      colors: {
        ocean: {
          lightBg: '#E6F7FA',      // very light aqua (light mode bg)
          lightBg2: '#FFFFFF',     // white (light mode secondary bg)
          lightPrimary: '#0077B6', // deep sea blue (light mode primary accent)
          lightSecondary: '#00B4D8', // bright aqua/cyan
          lightButton: '#90E0EF',  // light cyan (buttons)
          lightText: '#022B3A',    // deep navy (text)

          darkBg: '#012A4A',       // deep ocean blue (dark mode bg)
          darkBg2: '#013A63',      // slightly lighter blue
          darkPrimary: '#00B4D8',  // aqua pop (primary accent)
          darkSecondary: '#90E0EF',// soft contrast
          darkButton: '#CAF0F8',   // pale aqua (buttons)
          darkText: '#E0FBFC',     // soft white (text)
        },
      },
    },
  },
  plugins: [],
}
