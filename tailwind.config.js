/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'back': '#F8F8F8',
      'front': '#40324C',
      'lead': '#40324C',
      'pink': '#CE7E8F',
      'lead-text': '#ffffff',
      'line': '#7E6671',
      'skill-1': '#CE7E8F',
      'skill-2': '#CE7E8F',
      'skill-3': '#CE7E8F',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      borderRadius: {
        lg: "1rem",
      },
      spacing: {
        "14": "3.5rem",
      },
    },
  },
  plugins: [],
}