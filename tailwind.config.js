/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "footer-image": "url('/src/assets/footer-bg.svg')",
      },
      fontFamily: {
        jostBold: ["Jost-Bold"],
        jostRegular: ["Jost-Regular"],
        jostExtraBold: ["Jost-ExtraBold"],
        jostSemiBold: ["Jost-SemiBold"],
        jostMedium: ["Jost-Medium"],
        poppinsBold: ["Poppins-Bold"],
        poppinsExtraBold: ["Poppins-ExtraBold"],
        jost: ["Jost"],
        inter: ["Inter"],
      },
      colors: {
        "custom-green1": "rgba(30, 58, 43, 1)",
        "custom-green2": "rgba(126, 217, 87, 1)",
        "custom-orange": "rgba(255, 250, 233, 0.93)",
        "green-bg": "rgba(30, 58, 43, 1)",
        "green-bg2": "rgba(73, 119, 53, 1)",
      },
      screens: {
        xs: "480px",
        sm: "640px",
        mm: "730px",
        md: "820px",
        cs: "1000px",
        lg: "1100px",
        lgg: "1213px",
        xl: "1380px",
        xll: "1452px",
      },
    },
  },
  plugins: [],
};
