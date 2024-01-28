const colors = require('tailwindcss/colors')
const fontFamily = require('tailwindcss/defaultTheme')
module.exports = {
   content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
   theme: {
      extend: {
         colors: {
            ...colors,
            primary: '#3498db',
            secondary: '#e74c3c',
         },
         fontFamily: {
            ...fontFamily,
            highbright: ['highbright', 'highbright'], // Corrected order
            cmu:['cmu','cmu']
         },
      },
   },
   plugins: [],
};
