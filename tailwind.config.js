/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark retro-inspired color palette
        'retro-black': '#0f0f1b',
        'retro-dark': '#1a1a2e',
        'retro-primary': '#16213e',
        'retro-secondary': '#533483',
        'retro-accent': '#e94560',
        'retro-highlight': '#7b2cbf',
        'retro-text': '#e6e6e6',
        'retro-muted': '#8d8d8d',
      },
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'cursive'],
        'sans': ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'soft': '0.25rem',
      },
      boxShadow: {
        'retro': '2px 2px 0px rgba(0, 0, 0, 0.7)',
        'retro-hover': '4px 4px 0px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [],
};
