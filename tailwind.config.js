/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2D2D2D",
        secondary: "#FFFFFF",
        accent: "#F59E0B",
        background: "#F3F4F6",
        black: "#12100B",
        backgroundSecondary: "#F8F8F7",
        hero: "#F8F8FC",
        colorLocation: "#8D999D",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
