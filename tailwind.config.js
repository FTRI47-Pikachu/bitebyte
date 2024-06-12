/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1DA1F2', // Define your custom color here
        'hover-blue': '#0d8bcd', // Define your hover color here
      },
      borderRadius: {
        custom: '0.375rem', // Example for custom rounded class
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
