// src/theme.ts
import { createTheme } from '@mui/material/styles';
import colors from './colors'; // Import centralized colors

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    background: {
      default: colors.lightBg,
      paper: '#FFFFFF',
    },
    text: {
      primary: colors.textDark,
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif', // Ensure consistency with Tailwind's font
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    background: {
      default: colors.darkBg,
      paper: colors.darkBg,
    },
    text: {
      primary: colors.textLight,
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif', // Ensure consistency with Tailwind's font
  },
});

export { lightTheme, darkTheme };
