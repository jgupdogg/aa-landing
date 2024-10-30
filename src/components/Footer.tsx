// src/components/Footer.tsx
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="p-4 w-full fixed bottom-0 left-0 z-10 bg-transparent">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-gray-400 text-sm">
          &copy; 2023 Agent Alpha LLC
        </div>
        <div className="flex space-x-6">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-gray-300 hover:text-gray-300" size={40} />
          </a>
          <a href="https://github.com/jgupdogg" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-300 hover:text-gray-300" size={40} />
          </a>
          <a href="#contact">
            <FaEnvelope className="text-gray-300 hover:text-gray-300" size={40} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
