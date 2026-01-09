/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gallery: '#FAFAFA',
        paper: '#FFFFFF',
        'cool-grey': '#E2E8F0',
        'brand-indigo': '#6366F1',
        'brand-amber': '#F59E0B',
      },
      fontFamily: {
        sans: ['Geist Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        serif: ['Newsreader', 'serif'],
      },
    },
  },
  plugins: [],
}
