/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{html,js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lightBg: "#f8f9fa",
        lightText: "#333", 
        darkBg: "#1e1e1e",
        darkText: "#fff",
      },
    },
  },
  plugins: [],
}

