/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
      extend: {
        colors: {
          'primary' : '#FFCE1A',
          'secondary' : '#0D0842',
          'blackBG' : '#F3F3F3',
          'Favorite' : '#FF5841',
          'BGcolor' : '#fff',
          'BGtext'  : '#FFFFF8'

        },
        fontFamily: {
          'primary' : ['montserrat', 'sans-serif'],
          'secondary' : ['Nunito Sans', 'sans-serif'],
        }
      },
  },
  plugins: [],
};
