/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
        
      OpenSans: ['Open Sans', 'sans-serif']
    }
  },
  plugins: [require("daisyui")],
}

