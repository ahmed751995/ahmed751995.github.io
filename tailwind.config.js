/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        darkred: 'var(--darkred)',
      }
    },
  },
  plugins: [],
  important: true,
};
