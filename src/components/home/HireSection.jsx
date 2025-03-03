// src/components/home/HireSection.jsx
import React from 'react';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';

const HireSection = ({ textColor, secondaryTextColor, evenBlockBg }) => {
  return (
    <motion.section 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className={`w-full max-w-5xl py-12 px-8 mx-auto ${evenBlockBg} rounded-lg shadow-lg mb-12`}
      aria-labelledby="hire-heading"
    >
      <Typography variant="h2" id="hire-heading" className={`font-semibold mb-4 ${textColor} text-2xl md:text-3xl`}>
        Available for Hire
      </Typography>
      <Typography variant="body1" className={`${secondaryTextColor} mb-4`}>
        I'm currently accepting new clients for data engineering projects and consulting. Whether you need a complete data pipeline or assistance with a specific data challenge, I can help transform your raw data into valuable insights.
      </Typography>
      <Typography variant="body1" className={`${secondaryTextColor} mb-6`}>
        I'm also open to full-time opportunities where I can apply my data and AI expertise to contribute to innovative projects and business growth.
      </Typography>
    </motion.section>
  );
};

export default HireSection;