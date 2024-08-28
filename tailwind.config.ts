import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
    "./pages/**/*.{ts,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        "hero-Image": "url('./public/images/Rectangle 1 (2).png')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
