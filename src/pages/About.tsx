// src/pages/About.jsx
import React, { useContext } from 'react';
import { Typography, Box } from '@mui/material';
import { ThemeContext } from '../contexts/ThemeContext';

const About = () => {
  const { theme } = useContext(ThemeContext);
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-800';
  const secondaryTextColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-600';

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center text-center py-24">
      {/* Background gradient, similar to the Projects page */}
      <div className="w-96 h-96 rounded-full bg-gradient-to-r from-blue-500 to-green-500 opacity-50 dark:from-blue-700 dark:to-green-700"></div>
      
      {/* Main Content */}
      <div className="relative flex flex-col items-center justify-center w-full max-w-3xl mx-auto p-4">
        <Typography variant="h3" className={`font-bold mb-4 ${textColor}`}>
          About
        </Typography>
        <Typography variant="body1" className={`mb-8 ${secondaryTextColor}`}>
          Welcome to the About page. This section provides insights into the mission, vision, and work of Agent Alpha. Our team is dedicated to delivering high-quality data projects and showcasing innovative portfolio pieces to demonstrate our skills and expertise.
        </Typography>
        
        <Box className="w-full bg-transparent p-4 text-left">
          <Typography variant="h5" className={`font-semibold mb-4 ${textColor}`}>
            Our Mission
          </Typography>
          <Typography variant="body2" className={`${secondaryTextColor}`}>
            At Agent Alpha, our mission is to empower clients with data-driven insights and solutions that drive business value. We are passionate about leveraging cutting-edge technology to turn data into actionable intelligence.
          </Typography>

          <Typography variant="h5" className={`font-semibold mt-8 mb-4 ${textColor}`}>
            Our Vision
          </Typography>
          <Typography variant="body2" className={`${secondaryTextColor}`}>
            We envision a world where data is accessible and valuable for everyone. Through our projects, we strive to contribute to this vision by building tools and applications that make data more meaningful and impactful.
          </Typography>

          <Typography variant="h5" className={`font-semibold mt-8 mb-4 ${textColor}`}>
            Our Team
          </Typography>
          <Typography variant="body2" className={`${secondaryTextColor}`}>
            Agent Alpha is comprised of dedicated professionals who bring a wealth of experience in data science, software engineering, and project management. We are united by our commitment to excellence and our passion for innovation.
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export default About;
