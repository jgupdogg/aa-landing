// src/components/home/ContactSection.jsx
import React from 'react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { Button } from '../button';

const ContactSection = ({ textColor, secondaryTextColor, oddBlockBg, buttonTextColor, buttonHoverClass }) => {
  return (
    <motion.section 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className={`w-full max-w-5xl py-12 px-8 mx-auto ${oddBlockBg} rounded-lg shadow-lg mb-12 relative overflow-hidden`}
      aria-labelledby="contact-heading"
    >
      <div className="data-flow-decoration absolute inset-0 opacity-10" aria-hidden="true"></div>
      
      <Box className="relative z-10">
        <Typography variant="h2" id="contact-heading" className={`font-semibold mb-4 ${textColor} text-2xl md:text-3xl`}>
          Get in Touch
        </Typography>
        <Typography variant="body1" className={`${secondaryTextColor} mb-6`}>
          For business inquiries, project discussions, or collaborations, contact me at <a href="mailto:admin@agentalpha.ai" className="underline hover:text-primary dark:hover:text-columbia-blue transition-colors" aria-label="Email admin at agentalpha.ai">admin@agentalpha.ai</a> or <a href="mailto:gupta.justin1@gmail.com" className="underline hover:text-primary dark:hover:text-columbia-blue transition-colors" aria-label="Email Justin Gupta">gupta.justin1@gmail.com</a>.
        </Typography>
        <div className="flex justify-center">
          <Button
            variant="secondary"
            size="lg"
            className={`px-8 ${buttonTextColor} ${buttonHoverClass} transform transition-transform hover:scale-105`}
            aria-label="Open contact form"
          >
            Contact Me
          </Button>
        </div>
      </Box>
    </motion.section>
  );
};

export default ContactSection;