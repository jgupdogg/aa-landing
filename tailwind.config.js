// tailwind.config.js
import plugin from 'tailwindcss/plugin';

const colors = {
  primary: '#00ffff',
  primaryDark: '#009e99',         // Dark mode primary
  primaryForeground: '#00ffff',
  destructive: '#cbc5ea',
  destructiveForeground: '#313d5a',
  input: '#73628a',
  background: '#313d5a',
  accent: '#00ffff',
  accentForeground: '#1F2937',
  secondary: '#183642',
  secondaryForeground: '#111827',
  ring: '#3B82F6',
  darkBg: '#363732', // Dark theme background
  lightBg: '#F9FAFB', // Light theme background
  textDark: '#111827', // Text for light theme
  textLight: '#FFFFFF', // Text for dark theme
};

export { colors };

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        ':root': {
          '--color-primary': theme('colors.primary'),
          '--color-primary-foreground': theme('colors.primaryForeground'),
          '--color-destructive': theme('colors.destructive'),
          '--color-destructive-foreground': theme('colors.destructiveForeground'),
          '--color-input': theme('colors.input'),
          '--color-background': theme('colors.background'),
          '--color-accent': theme('colors.accent'),
          '--color-accent-foreground': theme('colors.accentForeground'),
          '--color-secondary': theme('colors.secondary'),
          '--color-secondary-foreground': theme('colors.secondaryForeground'),
          '--color-ring': theme('colors.ring'),
          '--color-dark-bg': theme('colors.darkBg'),
          '--color-light-bg': theme('colors.lightBg'),
          '--color-text-dark': theme('colors.textDark'),
          '--color-text-light': theme('colors.textLight'),
        },
      });
    }),
  ],
};
