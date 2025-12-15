/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        tight: "1.2",
      },
    },
  },
  plugins: [],
};

export default config;
