// tailwind.config.js

import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00ffff',
        'primary-foreground': '#00ffff',
        destructive: '#cbc5ea', // Added '#' prefix
        'destructive-foreground': '#313d5a',
        input: '#73628a',
        background: '#313d5a',
        accent: '#00ffff',
        'accent-foreground': '#1F2937',
        secondary: '#183642',
        'secondary-foreground': '#111827',
        ring: '#3B82F6',
      },
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        ':root': {
          '--color-primary': theme('colors.primary'),
          '--color-primary-foreground': theme('colors.primary-foreground'),
          '--color-destructive': theme('colors.destructive'),
          '--color-destructive-foreground': theme('colors.destructive-foreground'),
          '--color-input': theme('colors.input'),
          '--color-background': theme('colors.background'),
          '--color-accent': theme('colors.accent'),
          '--color-accent-foreground': theme('colors.accent-foreground'),
          '--color-secondary': theme('colors.secondary'),
          '--color-secondary-foreground': theme('colors.secondary-foreground'),
          '--color-ring': theme('colors.ring'),
        },
      });
    }),
  ],
};
