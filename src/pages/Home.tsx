// src/pages/Home.jsx
import React, { useContext } from 'react';
import { Typography, Box } from '@mui/material';
import { ThemeContext } from '../contexts/ThemeContext';

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-800';
  const secondaryTextColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-600';

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center text-center py-24">
      {/* Background Gradient */}
      <div className="w-96 h-96 rounded-full bg-gradient-to-r from-blue-500 to-green-500 opacity-50 dark:from-blue-700 dark:to-green-700"></div>
      
      {/* Main Content */}
      <div className="relative flex flex-col items-center justify-center w-full max-w-3xl mx-auto p-4">
        <Typography variant="h2" className={`font-bold mb-4 ${textColor}`}>
          Welcome to Agent Alpha
        </Typography>
        <Typography variant="h6" className={`mb-8 ${secondaryTextColor}`}>
          Freelance Data Projects & Portfolio Showcase
        </Typography>
        
        <Box className="w-full bg-transparent p-4 text-left">
          <Typography variant="h5" className={`font-semibold mb-4 ${textColor}`}>
            Who We Are
          </Typography>
          <Typography variant="body2" className={`${secondaryTextColor}`}>
            Agent Alpha is dedicated to providing high-quality data solutions for freelance projects. We bring a wealth of experience and passion to each project, ensuring that every solution is tailored to meet our clients' needs.
          </Typography>

          <Typography variant="h5" className={`font-semibold mt-8 mb-4 ${textColor}`}>
            What We Do
          </Typography>
          <Typography variant="body2" className={`${secondaryTextColor}`}>
            Our portfolio showcases a range of data-driven projects, from blockchain analytics to network analysis. Each project is an opportunity to push the boundaries of what data can achieve.
          </Typography>

          <Typography variant="h5" className={`font-semibold mt-8 mb-4 ${textColor}`}>
            Why Choose Us
          </Typography>
          <Typography variant="body2" className={`${secondaryTextColor}`}>
            At Agent Alpha, we prioritize innovation, precision, and client satisfaction. Our team is skilled, responsive, and committed to delivering exceptional results.
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export default Home;
