// src/pages/Contact.jsx
import React, { useContext } from 'react';
import { Typography } from '@mui/material';
import { ThemeContext } from '../contexts/ThemeContext';
import { Button } from '../components/button'; // Assuming you have a Button component similar to Home.jsx

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  // Define theme-based classes using Tailwind color names
  const textColor = theme === 'dark' ? 'text-textLight' : 'text-textDark';
  const secondaryTextColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-600';
  const bgColor1 = theme === 'dark' ? 'bg-darkBg' : 'bg-lightBg';
  const oddBlockBg = theme === 'dark' ? 'bg-oddBlockDark' : 'bg-oddBlock';
  const evenBlockBg = theme === 'dark' ? 'bg-evenBlockDark' : 'bg-evenBlock';

  // Define gradient classes based on the theme to match content box backgrounds
  const gradientClasses = theme === 'dark'
    ? 'from-oddBlockDark to-evenBlockDark' // Dark mode: matches oddBlockBg to evenBlockBg
    : 'from-oddBlock to-evenBlock'; // Light mode: matches oddBlockBg to evenBlockBg

  // Define text color for the Hero section based on the theme
  const gradientTextColor = theme === 'dark' ? 'text-white' : 'text-textDark';

  return (
    <div className={`relative min-h-screen flex flex-col items-center ${bgColor1}`}>
      {/* Hero Section */}
      <section className={`w-full flex flex-col items-center justify-center py-24 bg-gradient-to-r ${gradientClasses} ${gradientTextColor} mb-8`}>
        <Typography variant="h2" className="font-bold mb-4">
          Contact Agent Alpha
        </Typography>
        <Typography variant="h6">
          Get in Touch with Us
        </Typography>
      </section>

      {/* Contact Information Section */}
      <section className={`w-full max-w-5xl py-16 px-8 mx-auto ${oddBlockBg} rounded-lg shadow-lg mt-8`}>
        <Typography variant="h4" className={`font-semibold mb-4 ${textColor}`}>
          Our Email
        </Typography>
        <Typography variant="body1" className={`${secondaryTextColor} mb-4`}>
          For any inquiries, feel free to contact us at:
        </Typography>
        <Typography variant="body1" className={`${secondaryTextColor} mb-4`}>
          <a href="mailto:admin@agentalpha.ai" className="underline">
            admin@agentalpha.ai
          </a>
        </Typography>
        <Typography variant="body1" className={`${secondaryTextColor} mb-4`}>
          or
        </Typography>
        <Typography variant="body1" className={`${secondaryTextColor} mb-8`}>
          <a href="mailto:gupta.justin1@gmail.com" className="underline">
            gupta.justin1@gmail.com
          </a>
        </Typography>
      </section>

      {/* Follow Us Section */}
      <section className={`w-full max-w-5xl py-16 px-8 mx-auto ${evenBlockBg} rounded-lg shadow-lg mt-8`}>
        <Typography variant="h4" className={`font-semibold mb-4 ${textColor}`}>
          Follow Us
        </Typography>
        <Typography variant="body1" className={`${secondaryTextColor} mb-8`}>
          You can also follow us on LinkedIn and GitHub to stay updated on our latest projects and developments.
        </Typography>
        <div className="flex space-x-6 justify-center">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <Button
              variant="secondary"
              size="lg"
              className="px-6 text-textLight hover:bg-secondary/80"
            >
              LinkedIn
            </Button>
          </a>
          <a href="https://github.com/jgupdogg" target="_blank" rel="noopener noreferrer">
            <Button
              variant="secondary"
              size="lg"
              className="px-6 text-textLight hover:bg-secondary/80"
            >
              GitHub
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
