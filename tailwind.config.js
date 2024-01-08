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
        basket2: "basket2 1s linear both",
        favorite: "favorite 1s linear both",
        grow: "grow 1s linear both",
        delete: "delete 1s linear both",
        slide: "slide 1s linear both",
        slide2: "slide2 1s linear both",
        dropdown: "dropdown 0.5s linear both",
        dropdown2: "dropdown2 0.5s linear both",
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
        basket2: {
          "0%": {
            transform: "translateX(0%) translateY(0%) scale(1)",
            opacity: 1,
          },
          "100%": {
            transform: "translateX(105%) translateY(4%) scale(0)",
            opacity: 0.3,
          },
        },
        favorite: {
          "0%": {
            transform: "scale(1)",
            opacity: 1,
          },
          "20%": {
            transform: "scale(1.2)",
            opacity: 1,
          },
          "100%": {
            transform: "scale(0)",
            opacity: 0,
          },
        },
        grow: {
          "0%": {
            transform: "translateX(100%) translateY(0%) scale(1)",
          },
          "20%": {
            transform: "translateX(100%) translateY(0%) scale(1.3)",
          },
          "100%": {
            transform: "translateX(100%) translateY(0%) scale(1.3)",
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
        slide: {
          "0%": {
            transform: "translateX(0%) scaleX(1)",
            borderRadius: "0",
          },
          "100%": {
            transform: "translateX(85.7%) scaleX(0.65)",
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
          },
        },
        slide2: {
          "0%": {
            transform: "translateX(85.7%) scaleX(0.65)",
            borderRadius: "0",
          },
          "100%": {
            transform: "translateX(0%) scaleX(1)",
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
          },
        },
        dropdown: {
          "0%": {
            transform: "scaleX(0) scaleY(0)",
            transformOrigin: "100% 0%",
            opacity: "0",
          },
          "70%": {
            transform: "scaleX(1) scaleY(0.5)",
            transformOrigin: "100% 0%",
            opacity: "0.7",
          },
          "100%": {
            transform: "scaleX(1) scaleY(1)",
            transformOrigin: "100% 0%",
            opacity: "1",
          },
        },
        dropdown2: {
          "0%": {
            transform: "scaleX(1) scaleY(1)",
            transformOrigin: "100% 0%",
            opacity: "1",
          },
          "70%": {
            transform: "scaleX(1) scaleY(0.5)",
            transformOrigin: "100% 0%",
            opacity: "0.7",
          },
          "100%": {
            transform: "scaleX(0) scaleY(0)",
            transformOrigin: "100% 0%",
            opacity: "0",
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
