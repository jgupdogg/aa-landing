// src/components/ThemeToggle.tsx
import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import colors from '../colors'; // Import colors from the centralized file

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDarkMode = theme === 'dark';

  // Effect to add or remove the 'dark' class on the <html> element
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <DarkModeSwitch
      checked={isDarkMode}
      onChange={toggleTheme}
      size={24}
      sunColor={isDarkMode ? colors.primary : colors.textDark}  // Use primary color for sun in dark mode
      moonColor={isDarkMode ? colors.textLight : colors.primary} // Use light color for moon in light mode
      // Optional: Add ARIA labels for accessibility
      aria-label="Toggle Dark Mode"
    />
  );
};

export default ThemeToggle;
