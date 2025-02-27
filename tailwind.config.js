// tailwind.config.js
import plugin from 'tailwindcss/plugin';
import colors from './src/colors'; // Adjust the path if necessary

export default {
  darkMode: 'class', // Enable dark mode via class
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        // Additional shortcuts for the new color scheme
        'drab-brown': '#3E442B',
        'ebony': '#6A7062',
        'cool-gray': '#8D909B',
        'cool-gray-light': '#AAADC4',
        'columbia-blue': '#D6EEFF',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 14px 0 rgba(0, 0, 0, 0.1)',
        'custom-hover': '0 10px 25px 0 rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        ':root': {
          '--color-primary': theme('colors.drab-brown'),
          '--color-primary-foreground': '#FFFFFF',
          '--color-secondary': theme('colors.ebony'),
          '--color-secondary-foreground': '#FFFFFF',
          '--color-accent': theme('colors.cool-gray'),
          '--color-accent-foreground': '#FFFFFF',
          '--color-destructive': '#FF4444',
          '--color-destructive-foreground': '#FFFFFF',
          '--color-background': '#FFFFFF',
          '--color-dark-bg': theme('colors.drab-brown'),
          '--color-light-bg': '#F9FAFB',
          '--color-odd-block': theme('colors.cool-gray-light'),
          '--color-even-block': theme('colors.columbia-blue'),
          '--color-odd-block-dark': theme('colors.ebony'),
          '--color-even-block-dark': theme('colors.cool-gray'),
          '--color-text-dark': theme('colors.drab-brown'),
          '--color-text-light': theme('colors.columbia-blue'),
        },
        '.dark': {
          '--color-primary': theme('colors.columbia-blue'),
          '--color-primary-foreground': theme('colors.drab-brown'),
          '--color-secondary': theme('colors.cool-gray-light'),
          '--color-secondary-foreground': theme('colors.drab-brown'),
          '--color-background': theme('colors.drab-brown'),
          '--color-text-primary': theme('colors.columbia-blue'),
        },
      });
    }),
  ],
};