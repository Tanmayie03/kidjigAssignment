/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "../assignment/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/Navbar.jsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
