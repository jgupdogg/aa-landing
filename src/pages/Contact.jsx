// src/pages/Contact.jsx
import React, { useContext } from 'react';
import { Typography, Box, Grid, Card, CardContent, useMediaQuery } from '@mui/material';
import { ThemeContext } from '../contexts/ThemeContext';
import { Button } from '../components/button';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import './home.css'; // Reuse animations from the home page

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';
  const isMobile = useMediaQuery('(max-width:640px)');

  // Define theme-based classes using Tailwind color names
  const textColor = theme === 'dark' ? 'text-textLight' : 'text-textDark';
  const secondaryTextColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-600';
  const bgColor1 = theme === 'dark' ? 'bg-darkBg' : 'bg-lightBg';
  const oddBlockBg = theme === 'dark' ? 'bg-oddBlockDark' : 'bg-oddBlock';
  const evenBlockBg = theme === 'dark' ? 'bg-evenBlockDark' : 'bg-evenBlock';

  // Define gradient classes based on the theme to match content box backgrounds
  const gradientClasses = theme === 'dark'
    ? 'from-drab-brown to-ebony' 
    : 'from-columbia-blue to-cool-gray-light';

  // Define text color for the Hero section based on the theme
  const gradientTextColor = theme === 'dark' ? 'text-columbia-blue' : 'text-drab-brown';

  return (
    <div className={`relative min-h-screen flex flex-col items-center ${bgColor1} py-16 px-4`}>
      {/* Hero Section */}
      <motion.section 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className={`w-full flex flex-col items-center justify-center py-16 px-4 mb-12 bg-gradient-to-br ${gradientClasses} ${gradientTextColor} rounded-lg shadow-lg relative overflow-hidden`}
      >
        <div className="data-particles absolute inset-0 opacity-10"></div>
        
        <Typography variant="h2" className="font-bold mb-4 text-center z-10 relative">
          Get In Touch
        </Typography>
        <Typography variant="h6" className="text-center z-10 relative">
          Let's Discuss Your Data Pipeline Needs
        </Typography>
        
        {!isMobile && (
          <Box className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
            <svg viewBox="0 0 800 50" preserveAspectRatio="none" className="w-full h-full">
              <path
                d="M0,0 C150,40 350,0 500,30 C650,60 750,20 800,0 V50 H0 Z"
                fill={isDark ? 'rgba(214, 238, 255, 0.1)' : 'rgba(62, 68, 43, 0.1)'}
              ></path>
            </svg>
          </Box>
        )}
      </motion.section>

      {/* Contact Cards Section */}
      <Grid container spacing={4} className="w-full max-w-5xl mb-12">
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className={`h-full ${oddBlockBg} rounded-lg shadow-lg group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}>
              <CardContent className="p-8">
                <Box className="flex items-center mb-6">
                  <Box className={`text-4xl mr-4 text-primary dark:text-columbia-blue group-hover:scale-110 transition-transform duration-300`}>
                    <FaEnvelope />
                  </Box>
                  <Typography variant="h4" className={`font-semibold ${textColor}`}>
                    Email Me
                  </Typography>
                </Box>
                
                <Typography variant="body1" className={`${secondaryTextColor} mb-6`}>
                  For project inquiries, collaborations, or questions about my data pipeline services, reach out via email:
                </Typography>
                
                <Box className="flex flex-col space-y-2 mb-6">
                  <a 
                    href="mailto:admin@agentalpha.ai" 
                    className={`flex items-center transition-colors hover:text-primary dark:hover:text-columbia-blue`}
                  >
                    <Box className="text-lg mr-2">📧</Box>
                    <Typography variant="h6" className="underline">
                      admin@agentalpha.ai
                    </Typography>
                  </a>
                  
                  <a 
                    href="mailto:gupta.justin1@gmail.com" 
                    className={`flex items-center transition-colors hover:text-primary dark:hover:text-columbia-blue`}
                  >
                    <Box className="text-lg mr-2">📧</Box>
                    <Typography variant="h6" className="underline">
                      gupta.justin1@gmail.com
                    </Typography>
                  </a>
                </Box>
                
                <Typography variant="body1" className={`${secondaryTextColor}`}>
                  I typically respond within 24-48 hours to all inquiries.
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className={`h-full ${evenBlockBg} rounded-lg shadow-lg group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}>
              <CardContent className="p-8">
                <Box className="flex items-center mb-6">
                  <Box className={`text-4xl mr-4 text-primary dark:text-columbia-blue group-hover:scale-110 transition-transform duration-300`}>
                    <FaLinkedin />
                  </Box>
                  <Typography variant="h4" className={`font-semibold ${textColor}`}>
                    Connect With Me
                  </Typography>
                </Box>
                
                <Typography variant="body1" className={`${secondaryTextColor} mb-6`}>
                  Follow my work, stay updated on my latest projects, and connect with me professionally on these platforms:
                </Typography>
                
                <Grid container spacing={3} className="mb-4">
                  <Grid item xs={6}>
                    <a 
                      href="https://www.linkedin.com/in/justin-gupta-p-e-06162686/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button
                        variant="secondary"
                        size="lg"
                        className="w-full flex items-center justify-center gap-2 transition-all transform hover:scale-105"
                      >
                        <FaLinkedin className="text-xl" />
                        LinkedIn
                      </Button>
                    </a>
                  </Grid>
                  
                  <Grid item xs={6}>
                    <a 
                      href="https://github.com/jgupdogg" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button
                        variant="secondary"
                        size="lg"
                        className="w-full flex items-center justify-center gap-2 transition-all transform hover:scale-105"
                      >
                        <FaGithub className="text-xl" />
                        GitHub
                      </Button>
                    </a>
                  </Grid>
                </Grid>
                
                <Typography variant="body1" className={`${secondaryTextColor}`}>
                  Let's connect and discuss how data engineering can help your business succeed.
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>

      {/* Call to Action */}
      <motion.section
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={`w-full max-w-5xl py-12 px-8 mx-auto ${oddBlockBg} rounded-lg shadow-lg mb-12 relative overflow-hidden`}
      >
        <div className="data-flow-decoration absolute inset-0 opacity-10"></div>
        
        <Box className="relative z-10 text-center">
          <Typography variant="h4" className={`font-semibold mb-4 ${textColor}`}>
            Ready to Transform Your Data?
          </Typography>
          <Typography variant="body1" className={`${secondaryTextColor} mb-6 max-w-2xl mx-auto`}>
            Whether you need a complete end-to-end data pipeline or help with a specific data challenge, I'm here to help you turn raw data into valuable insights that drive your business forward.
          </Typography>
          <Button 
            variant="secondary"
            size="lg"
            className="px-8 transform transition-transform hover:scale-105"
          >
            <a href="mailto:admin@agentalpha.ai">
              Schedule a Consultation
            </a>
          </Button>
        </Box>
      </motion.section>
    </div>
  );
};

export default Contact;