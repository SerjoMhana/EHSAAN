module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
       

      },
      scrollBehavior: {
        smooth: 'smooth',
      }
    }
  },
  plugins: [ require('flowbite/plugin'),  require('preline/plugin') ],

};
