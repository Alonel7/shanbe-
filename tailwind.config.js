/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}" , "./index.html"],
  theme: {
    extend: {},
    screens:{
      "max":{max:'510px'},
      //@media (max-width:510px){}
    }
  },
  plugins: [],
}
