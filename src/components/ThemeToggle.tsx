// src/components/ThemeToggle.tsx
import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { colors } from '../../tailwind.config'; // Import colors from Tailwind config

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDarkMode = theme === 'dark';

  return (
    <DarkModeSwitch
      checked={isDarkMode}
      onChange={toggleTheme}
      size={24}
      sunColor={isDarkMode ? colors.primary : colors.textDark}  // Use primary color for sun in dark mode
      moonColor={isDarkMode ? colors.textLight : colors.primary} // Use light color for moon in light mode
    />
  );
};

export default ThemeToggle;
