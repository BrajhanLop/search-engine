/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1F1F20'
      },
      fontFamily: {
        'Righteous': ['"Righteous"', 'cursive']
      },
      backgroundImage: {
        'bgHome': "url('./src/image/bg3.jpg')"        
      }
    }
  },
  plugins: []
}
