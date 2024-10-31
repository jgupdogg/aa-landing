// src/components/Footer.tsx
import React, { useContext } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { ThemeContext } from '../contexts/ThemeContext';

const Footer: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  const textColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';
  const hoverColor = theme === 'dark' ? 'hover:text-gray-400' : 'hover:text-gray-500';

  return (
    <footer className={`p-4 w-full fixed bottom-0 left-0 z-10 ${theme === 'dark' ? 'bg-dark-bg' : 'bg-light-bg'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className={`text-sm ${textColor}`}>
          &copy; 2023 Agent Alpha LLC
        </div>
        <div className="flex space-x-6">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className={`${textColor} ${hoverColor}`} size={24} />
          </a>
          <a href="https://github.com/jgupdogg" target="_blank" rel="noopener noreferrer">
            <FaGithub className={`${textColor} ${hoverColor}`} size={24} />
          </a>
          <a href="#contact">
            <FaEnvelope className={`${textColor} ${hoverColor}`} size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
