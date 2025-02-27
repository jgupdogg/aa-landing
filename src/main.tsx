// src/main.tsx
import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import './index.css';
import './theme-variables.css'; // Import our CSS variables
import { ThemeProvider as ContextThemeProvider, ThemeContext } from './contexts/ThemeContext';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme';

Amplify.configure({});

const AppWithTheme: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const isThemeDark = theme === 'dark';
  
  // Add or remove the 'dark' class on the document element
  React.useEffect(() => {
    if (isThemeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isThemeDark]);
  
  return (
    <MUIThemeProvider theme={isThemeDark ? darkTheme : lightTheme}>
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