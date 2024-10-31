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
      colors, // Use the centralized colors
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Ensure Inter font is defined
      },
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        ':root': {
          '--color-primary': theme('colors.primary'),
          '--color-primary-foreground': theme('colors.primaryForeground'),
          '--color-secondary': theme('colors.secondary'),
          '--color-secondary-foreground': theme('colors.secondaryForeground'),
          '--color-accent': theme('colors.accent'),
          '--color-accent-foreground': theme('colors.accentForeground'),
          '--color-destructive': theme('colors.destructive'),
          '--color-destructive-foreground': theme('colors.destructiveForeground'),
          '--color-background': theme('colors.background'),
          '--color-dark-bg': theme('colors.darkBg'),
          '--color-light-bg': theme('colors.lightBg'),
          '--color-odd-block': theme('colors.oddBlock'),
          '--color-even-block': theme('colors.evenBlock'),
          '--color-odd-block-dark': theme('colors.oddBlockDark'),
          '--color-even-block-dark': theme('colors.evenBlockDark'),
          '--color-text-dark': theme('colors.textDark'),
          '--color-text-light': theme('colors.textLight'),
        },
      });
    }),
  ],
};
