/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          purple: {
            500: '#8B5CF6',
            600: '#7C3AED',
          },
        },
        backgroundImage: {
          'chart-pattern': "url('/image.png')",
        },
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }