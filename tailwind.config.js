const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
        basket: "basket 1s linear both",
        delete: "delete 1s linear both",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        basket: {
          from: {
            transform: "translateX(0%) translateY(0%) scale(1)",
            opacity: 1,
          },
          to: {
            right: "0",
            top: "0",
            transform: "translateX(100%) translateY(-100%) scale(0)",
            opacity: 0,
          },
        },
        delete: {
          "0%": {
            transform: "translateX(0%) scale(1)",
            opacity: 1,
          },
          "100%": {
            transform: "translateX(-100%) scale(0)",
            opacity: 0,
          },
        },
      },
      fontFamily: {
        montserrat: ["Montserrat"],
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
});
