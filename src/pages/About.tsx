// src/pages/About.jsx
import React, { useContext } from 'react';
import { Typography } from '@mui/material';
import { ThemeContext } from '../contexts/ThemeContext';

const About = () => {
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
          About Agent Alpha
        </Typography>
        <Typography variant="h6">
          Discover Our Mission and Vision
        </Typography>
      </section>

      {/* Our Mission Section */}
      <section className={`w-full max-w-5xl py-16 px-8 mx-auto ${oddBlockBg} rounded-lg shadow-lg mt-8`}>
        <Typography variant="h4" className={`font-semibold mb-4 ${textColor}`}>
          Our Mission
        </Typography>
        <Typography variant="body1" className={`${secondaryTextColor}`}>
          At Agent Alpha, our mission is to empower clients with data-driven insights and solutions that drive business value. We are passionate about leveraging cutting-edge technology to turn data into actionable intelligence.
        </Typography>
      </section>

      {/* Our Vision Section */}
      <section className={`w-full max-w-5xl py-16 px-8 mx-auto ${evenBlockBg} rounded-lg shadow-lg mt-8`}>
        <Typography variant="h4" className={`font-semibold mb-4 ${textColor}`}>
          Our Vision
        </Typography>
        <Typography variant="body1" className={`${secondaryTextColor}`}>
          We envision a world where data is accessible and valuable for everyone. Through our projects, we strive to contribute to this vision by building tools and applications that make data more meaningful and impactful.
        </Typography>
      </section>

      {/* Our Team Section */}
      <section className={`w-full max-w-5xl py-16 px-8 mx-auto ${oddBlockBg} rounded-lg shadow-lg mt-8`}>
        <Typography variant="h4" className={`font-semibold mb-4 ${textColor}`}>
          Our Team
        </Typography>
        <Typography variant="body1" className={`${secondaryTextColor}`}>
          Agent Alpha is a one-person data company founded by Justin Gupta, specializing in data acquisition, processing, and AI transformations. We deliver customized solutions tailored to meet unique client needs.
        </Typography>
      </section>

      {/* Get in Touch Section */}
      <section className={`w-full max-w-5xl py-16 px-8 mx-auto ${evenBlockBg} rounded-lg shadow-lg mt-8 mb-8`}>
        <Typography variant="h4" className={`font-semibold mb-4 ${textColor}`}>
          Get in Touch
        </Typography>
        <Typography variant="body1" className={`${secondaryTextColor}`}>
          For business inquiries or collaborations, contact me at{' '}
          <a href="mailto:admin@agentalpha.ai" className="underline">
            admin@agentalpha.ai
          </a>{' '}
          or{' '}
          <a href="mailto:gupta.justin1@gmail.com" className="underline">
            gupta.justin1@gmail.com
          </a>.
        </Typography>
      </section>
    </div>
  );
};

export default About;
