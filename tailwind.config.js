/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'main': '#018c01',
        'main-dark': '#014701',
        'main-light': '#7efa7e',
        'support': '#ffd700',
        'dark': '#111',
        'light': '#fafffa',
        'grey-1': '#333',
        'grey-2': '#999',
        'grey-3': '#ccc',
        'grey-4': '#eee',
        'grey-5': '#fafafa',
      }
    },
  },
  plugins: [],
}

