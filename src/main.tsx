// src/main.tsx
import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import './index.css';
import { ThemeProvider as ContextThemeProvider, ThemeContext } from './contexts/ThemeContext';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme';

Amplify.configure({});

const AppWithTheme: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <MUIThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <AppRoutes />
    </MUIThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextThemeProvider>
      <AppWithTheme />
    </ContextThemeProvider>
  </React.StrictMode>
);
