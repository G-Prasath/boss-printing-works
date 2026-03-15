/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Josefin Sans"', 'sans-serif'],
        body:    ['"Montserrat"', 'sans-serif'],
        cond:    ['"Josefin Sans"', 'sans-serif'],
      },
      colors: {
        pink:  { DEFAULT: '#e8006f', hover: '#ff1a7f' },
        dark:  { DEFAULT: '#0c0c14', nav: '#131320' },
      },
      boxShadow: {
        pink:     '0 14px 32px rgba(232,0,111,0.4)',
        'pink-sm':'0 6px 18px rgba(232,0,111,0.35)',
        card:     '0 24px 56px rgba(0,0,0,0.13)',
      },
    },
  },
  plugins: [],
}
