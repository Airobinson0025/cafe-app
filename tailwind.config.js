/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
  ],
  theme: {
    extend: {
      fontFamily: {
        homemade: ['Homemade Apple', 'cursive'] , 
        space: [ 'Space Mono', 'monospace' ],
        garamond: ['EB Garamond', 'serif'],
        rocksalt: ['Rock Salt', 'cursive'],
        sriracha: [ 'sriracha', 'cursive' ],
        noto: ['noto', 'sans-serif'],
        arvo: [ 'Arvo', 'serif'],
        labrada: [ 'Labrada', 'serif' ],
        mada: [ 'Mada', 'sans-serif' ],
        work: [ 'Work Sans' , 'sans-serif'],
        satisfy: [ 'Satiffy', 'cursive' ],

      }
    },
  },
  plugins: [],
}
