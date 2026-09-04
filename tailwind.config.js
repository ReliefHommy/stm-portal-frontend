/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    "./pages/**/*.{js,ts,jsx,tsx}",      // For App Router
    './components/**/*.{js,ts,jsx,tsx}', // For your components
  ],
  theme: {
    extend: {
      colors: {
        premium: {
          bg: '#09090b', // Deep Zinc
          card: 'rgba(255, 255, 255, 0.03)',
          accent: '#8b5cf6', // Sophisticated Violet
        },
      },
      fontFamily: {
        // High-end Serif for headings, sleek Sans for body
        display: ['var(--font-serif)', 'serif'],
        sans: ['var(--font-geist-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
