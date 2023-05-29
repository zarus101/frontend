module.exports = {
  content: ["./src/**/**.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#ff9900",
        secondary: "#263959",
        third:"",
        para: "#696E77",
        "secondary-rgba": "rgba(15, 53, 103, 0.693)",
      },
      backgroundImage: {
        'service': 'url("./components/assests/images/icon-dotted-map-2.png")',
      },
      screens: {
        "2xl": { max: "1535px" },
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        md: { max: "800px" },
        mobile: { max: "512px" },
      },
      boxShadow: {
        shadow1: "0px 10px 60px rgba(15,53,103,0.1)",
        shadow2: "rgba(99, 99, 99, 0.2) 0px 2px 2px 0px;",
        main_shadow:"0 0px 15px rgba(0, 0, 0, 0.07)",
        hover_shadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"

      },
    },
  },
  variants: {},
  plugins: [],
};
