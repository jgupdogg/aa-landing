// src/theme.ts
import { createTheme } from '@mui/material/styles';
import { colors } from '../tailwind.config'; // Import colors from Tailwind config

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
});

export { lightTheme, darkTheme };
