/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    container: {
      padding: '10px',
      center: true,
      screens: {
        sm: '640px',
        md: '650px',
        lg: '984px',
        xl: '1220px',
      }
    },
  },
  plugins: [],
};
