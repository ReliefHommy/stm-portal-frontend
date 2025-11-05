/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',    
     "./pages/**/*.{js,ts,jsx,tsx}",      // For App Router
    './components/**/*.{js,ts,jsx,tsx}', // For your components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


