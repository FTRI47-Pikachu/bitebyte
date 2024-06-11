/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit', // Just-In-Time compiler mode
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Paths to all template files
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#646cff', // Custom color for buttons and links
        'hover-blue': '#535bf2', // Custom hover state color
        'light-hover-blue': '#747bff', // Alternative hover color for light mode
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'], // Custom font stack
      },
      borderRadius: {
        'custom': '8px', // Custom border radius for buttons
      },
      backgroundColor: {
        'custom-dark': '#242424', // Custom background color
        'button-dark': '#1a1a1a', // Button background color in dark mode
        'button-light': '#f9f9f9', // Button background color in light mode
      },
      borderColor: {
        'custom-blue': '#646cff', // Border color for hover states on buttons
      },
      outline: {
        'focus': '4px auto -webkit-focus-ring-color', // Custom focus outline for accessibility
      },
    },
  },
  plugins: [],
}
