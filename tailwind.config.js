/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    //adding a custom font
    fontFamily: {
      'sans': ['Poppins', 'Poppins', 'sans-serif'],
    },
    extend: {
      // adding custom colors to tailwind styles
      colors: {
        'primary' : {
          main: '#273B73',
        surface: '#F0F1F5',
        border: '#B7BED0',
        hover: '#203160',
        pressed: '#131D39',
        focused: "rgba(39, 59, 115, 0.8)",
        

        }
    },
  },
  plugins: [
  
  
  ],
}
}

