// // tailwind.config.js

// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//     "./node_modules/flowbite/**/*.js",
//     "node_modules/flowbite-react/lib/esm/**/*.js",
//   ],
//   theme: {
//     extend: {},
//     colors: {
//       transparent: "transparent",
//       current: "currentColor",
//       white: "#ffffff",
//       purple: "#3f3cbb",
//       midnight: "#252B42",
//       darkgreen: "#00B207",
//       grey: "#333333",
//       dangerred: "#E21B1B",
//       orange: "#FFAB71",
//       mutedgrey: "#BDBDBD",
//       yellow: "#fde047",
//       pink: "#FFF2F3",
//       lightgrey: "#E6E6E6",
//       lightgreyw: "#FAFAFA",
//       grayl: "#F7F7F7",
//       greengrey: "#DAE5DA",
//     },
//     fontSize: {
//       xs: "0.75rem", // 12px
//       sm: "0.875rem", // 14px
//       base: "1rem", // 16px
//       lg: "1.125rem", // 18px
//       xl: "1.25rem", // 20px
//       "2xl": "1.5rem", // 24px
//       "3xl": "1.875rem", // 30px
//       "4xl": "2.25rem", // 36px
//       "5xl": "3rem", // 48px
//     },
//     fontFamily: {
//       sans: ["Poppins", "sans-serif"],
//     },
//     fontWeight: {
//       thin: 100,
//       extralight: 200,
//       light: 300,
//       normal: 400,
//       medium: 500,
//       semibold: 600,
//       bold: 700,
//       extrabold: 800,
//       black: 900,
//     },
//   },
//   plugins: [require("daisyui"), require("flowbite/plugin")],
// };


// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//     "./node_modules/flowbite/**/*.js"
//   ],
//   theme: {
//     extend: {},
//     colors: {
//       transparent: "transparent",
//       current: "currentColor",
//       white: "#ffffff",
//       purple: "#3f3cbb",
//       midnight: "#252B42",
//       darkgreen: "#00B207",
//       grey: "#333333",
//       dangerred: "#E21B1B",
//       orange: "#FFAB71",
//       mutedgrey: "#BDBDBD",
//       yellow: "#fde047",
//       pink: "#FFF2F3",
//       lightgrey: "#E6E6E6",
//       lightgreyw: "#FAFAFA",
//       grayl: "#F7F7F7",
//       greengrey: "#DAE5DA",
//     },
//     fontSize: {
//       xs: "0.75rem", // 12px
//       sm: "0.875rem", // 14px
//       base: "1rem", // 16px
//       lg: "1.125rem", // 18px
//       xl: "1.25rem", // 20px
//       "2xl": "1.5rem", // 24px
//       "3xl": "1.875rem", // 30px
//       "4xl": "2.25rem", // 36px
//       "5xl": "3rem", // 48px
//     },
//     fontFamily: {
//       sans: ["Poppins", "sans-serif"],
//     },
//     fontWeight: {
//       thin: 100,
//       extralight: 200,
//       light: 300,
//       normal: 400,
//       medium: 500,
//       semibold: 600,
//       bold: 700,
//       extrabold: 800,
//       black: 900,
//     },
//   },
//   plugins: [
//     require('flowbite/plugin')
//   ],
// }

// tailwind.config.js
// const flowbite = require("flowbite-react/tailwind");
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//     "./node_modules/flowbite/**/*.js",
//     // flowbite.content(),
//     // Add Flowbite React content
//     // "./node_modules/flowbite-react/**/*.js", 
//   ],
//   theme: {
//     extend: {},
//     colors: {
//       transparent: "transparent",
//       current: "currentColor",
//       white: "#ffffff",
//       purple: "#3f3cbb",
//       midnight: "#252B42",
//       darkgreen: "#00B207",
//       grey: "#333333",
//       dangerred: "#E21B1B",
//       orange: "#FFAB71",
//       mutedgrey: "#BDBDBD",
//       yellow: "#fde047",
//       pink: "#FFF2F3",
//       lightgrey: "#E6E6E6",
//       lightgreyw: "#FAFAFA",
//       grayl: "#F7F7F7",
//       greengrey: "#DAE5DA",
//     },
//     fontSize: {
//       xs: "0.75rem", // 12px
//       sm: "0.875rem", // 14px
//       base: "1rem", // 16px
//       lg: "1.125rem", // 18px
//       xl: "1.25rem", // 20px
//       "2xl": "1.5rem", // 24px
//       "3xl": "1.875rem", // 30px
//       "4xl": "2.25rem", // 36px
//       "5xl": "3rem", // 48px
//     },
//     fontFamily: {
//       sans: ["Poppins", "sans-serif"],
//     },
//     fontWeight: {
//       thin: 100,
//       extralight: 200,
//       light: 300,
//       normal: 400,
//       medium: 500,
//       semibold: 600,
//       bold: 700,
//       extrabold: 800,
//       black: 900,
//     },
//   },
//   plugins: [
//     require('flowbite/plugin'), // Add Flowbite plugin for Tailwind CSS
//     // require('flowbite-react/plugin'), // Add Flowbite React plugin for React
//     flowbite.plugin(),
//   ],
// };


// tailwind.config.js

import flowbite from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#252B42",
      darkgreen: "#00B207",
      grey: "#333333",
      dangerred: "#E21B1B",
      orange: "#FFAB71",
      mutedgrey: "#BDBDBD",
      yellow: "#fde047",
      pink: "#FFF2F3",
      lightgrey: "#E6E6E6",
      lightgreyw: "#FAFAFA",
      grayl: "#F7F7F7",
      greengrey: "#DAE5DA",
    },
    fontSize: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem", // 36px
      "5xl": "3rem", // 48px
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    fontWeight: {
      thin: 100,
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
  },
  plugins: [
    flowbite, // Flowbite plugin for Tailwind CSS
  ],
};
