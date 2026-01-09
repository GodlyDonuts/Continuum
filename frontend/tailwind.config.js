/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cardstock: '#EFEEEB',
        charcoal: '#1A1A1A',
        stone: '#A1A1A1',
        orange: '#FF4F00',
        cinnabar: '#E11D48',
        slate: '#475569',
        'optic-cyan': '#00E5FF',
        'gallery-white': '#F9F9F9',
        'international-orange': '#FF4F00',
      },
      fontFamily: {
        sans: ['Geist Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        serif: ['Newsreader', 'serif'],
      },
      borderRadius: {
        DEFAULT: '2px',
        sm: '1px',
        md: '2px',
        lg: '2px',
        xl: '2px',
        '2xl': '2px',
        full: '9999px',
      },
    },
  },
  plugins: [],
}
