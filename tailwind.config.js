/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/theme.config.tsx",
  ],
  theme: {
      extend: {},
  },
  plugins: [],
}
