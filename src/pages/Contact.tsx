// src/pages/Contact.jsx
import React, { useContext } from 'react';
import { Typography, Box, Link } from '@mui/material';
import { ThemeContext } from '../contexts/ThemeContext';

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-800';
  const secondaryTextColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-600';
  const linkColor = theme === 'dark' ? 'text-blue-400' : 'text-blue-600';

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center text-center py-24">
      {/* Background Gradient */}
      <div className="w-96 h-96 rounded-full bg-gradient-to-r from-blue-500 to-green-500 opacity-50 dark:from-blue-700 dark:to-green-700"></div>
      
      {/* Main Content */}
      <div className="relative flex flex-col items-center justify-center w-full max-w-3xl mx-auto p-4">
        <Typography variant="h2" className={`font-bold mb-4 ${textColor}`}>
          Contact Us
        </Typography>
        <Typography variant="h6" className={`mb-8 ${secondaryTextColor}`}>
          We’d love to hear from you! Reach out to us with any questions, project inquiries, or collaboration ideas.
        </Typography>
        
        <Box className="w-full bg-transparent p-4 text-left">
          <Typography variant="h5" className={`font-semibold mb-4 ${textColor}`}>
            Our Email
          </Typography>
          <Typography variant="body2" className={`${secondaryTextColor} mb-8`}>
            For any inquiries, feel free to contact us at:
          </Typography>
          <Link
            href="mailto:admin@agentalpha.ai"
            className={`${linkColor} underline`}
          >
            admin@agentalpha.ai
          </Link>

          <Typography variant="h5" className={`font-semibold mt-8 mb-4 ${textColor}`}>
            Office Hours
          </Typography>
          <Typography variant="body2" className={`${secondaryTextColor}`}>
            Monday - Friday: 9 AM - 5 PM (EST)
          </Typography>

          <Typography variant="h5" className={`font-semibold mt-8 mb-4 ${textColor}`}>
            Follow Us
          </Typography>
          <Typography variant="body2" className={`${secondaryTextColor}`}>
            You can also follow us on LinkedIn and GitHub to stay updated on our latest projects and developments.
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export default Contact;
