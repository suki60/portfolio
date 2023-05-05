/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.js'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '900px',
        lg: '1200px',
        xl: '1536px',
      },
    },
  },
  plugins: [],
}
