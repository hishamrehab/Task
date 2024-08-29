import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
    "./pages/**/*.{ts,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/js/**/*.js",
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
        monthlyColor: "#656861",
        inputColor: "#C3C9CB",
        borderColor: "#FBFBFD",
        loginInputCol: "#656861",
        loginInputBgCol: "#F4F4F3",
        loginD: "#1C2820",
        footerBg: "#F3F3F1",
        borderCol: "#3E453E",
        FollowUsCol: " #8D999D",
        navBorder: "#929EAA",
      },
      spacing: {
        md: "120px",
        marginFrame: "76px",
        p23: "23px",
        p20: "20px",
        Ml101: "101px",
        p71: "71px",
        p67: "67px",
        p76: "76px",
        p17: "17px",
      },

      width: {
        w516: "516px",
        w399: "399px",
        w250: "250px",
        w670: "670px",
        w515: "515px",
        w870: "870px",
        wArrow: "10.5px",
      },
      height: {
        h46: "46px",
        h75: "75px",
        h72: "72px",
        h374: "374px",
        hArrow: "10.5px",
        h625px: "625px",
      },
      lineHeight: {
        lh18: "18px",
        lh21: "21px",
        lh39px: "39px",
        lh19: "19.06px",
      },

      fontSize: {
        fs32: "32px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
