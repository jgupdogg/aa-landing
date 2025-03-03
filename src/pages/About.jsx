// src/pages/About.jsx
import React, { useContext } from 'react';
import { Typography, Box, Grid, Card, CardContent, Avatar, useMediaQuery } from '@mui/material';
import { ThemeContext } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';
import { FaDatabase, FaLaptopCode, FaChartLine, FaBrain } from 'react-icons/fa';
import './home.css'; // Reuse animations from the home page

const SkillCard = ({ icon: Icon, title, description, delay }) => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';
  
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className="h-full"
    >
      <Card className="h-full skill-card group">
        <CardContent className="p-4 text-center flex flex-col items-center h-full">
          <Box className="text-4xl mb-3 text-primary dark:text-columbia-blue group-hover:scale-110 transition-transform duration-300">
            <Icon />
          </Box>
          <Typography variant="h6" component="h3" className="mb-2 font-semibold">
            {title}
          </Typography>
          <Typography variant="body2">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const About = () => {
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
          About Agent Alpha
        </Typography>
        <Typography variant="h6" className="text-center z-10 relative max-w-2xl">
          Independent Data Engineering Solutions by Justin Gupta P.E.
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

      {/* About Me Section */}
      <Grid container spacing={5} className="w-full max-w-5xl mb-12">
        <Grid item xs={12} md={5}>
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Box className="flex flex-col items-center">
              <Avatar 
                src="/justin-gupta.jpg" // Replace with your actual photo
                alt="Justin Gupta"
                sx={{ 
                  width: 240, 
                  height: 240, 
                  mb: 3,
                  border: isDark ? '4px solid #D6EEFF' : '4px solid #3E442B'
                }}
                className="shadow-lg"
              />
              <Typography variant="h4" className={`font-semibold mb-2 ${textColor} text-center`}>
                Justin Gupta, P.E.
              </Typography>
              <Typography variant="subtitle1" className={`${secondaryTextColor} text-center mb-4`}>
                Data Pipeline Engineer
              </Typography>
            </Box>
          </motion.div>
        </Grid>
        
        <Grid item xs={12} md={7}>
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Card className={`p-6 ${oddBlockBg} rounded-lg shadow-lg`}>
              <CardContent>
                <Typography variant="h4" className={`font-semibold mb-4 ${textColor}`}>
                  My Story
                </Typography>
                <Typography variant="body1" className={`${secondaryTextColor} mb-4`}>
                  Agent Alpha is my one-person data engineering company where I specialize in building end-to-end data pipelines that turn raw information into actionable insights.
                </Typography>
                <Typography variant="body1" className={`${secondaryTextColor} mb-4`}>
                  With a background in engineering and a passion for data, I bring a unique perspective to data challenges. My approach combines technical expertise with a deep understanding of how data can drive business value.
                </Typography>
                <Typography variant="body1" className={`${secondaryTextColor}`}>
                  I work directly with individuals and small businesses to deliver customized data solutions that solve their specific challenges, without the overhead of a large agency.
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>

      {/* Skills & Expertise Section */}
      <motion.section
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`w-full max-w-5xl py-12 px-8 mx-auto ${evenBlockBg} rounded-lg shadow-lg mb-12`}
      >
        <Typography variant="h4" className={`font-semibold mb-2 text-center ${textColor}`}>
          Core Expertise
        </Typography>
        <Typography variant="body1" className={`${secondaryTextColor} mb-8 text-center max-w-3xl mx-auto`}>
          My skills span the entire data pipeline workflow, enabling me to build comprehensive solutions from data acquisition to visualization.
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <SkillCard 
              icon={FaDatabase} 
              title="Data Engineering" 
              description="ETL processes, databases, cloud storage, data warehousing, and pipeline design."
              delay={0.3}
            />
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <SkillCard 
              icon={FaLaptopCode} 
              title="Development" 
              description="Python, SQL, AWS, Apache Airflow, serverless architectures, and APIs."
              delay={0.4}
            />
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <SkillCard 
              icon={FaBrain} 
              title="AI Integration" 
              description="Vector databases, LLM implementation, ML pipelines, and AI-powered analytics."
              delay={0.5}
            />
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <SkillCard 
              icon={FaChartLine} 
              title="Data Analysis" 
              description="Statistical analysis, visualization, insights extraction, and reporting."
              delay={0.6}
            />
          </Grid>
        </Grid>
      </motion.section>

      {/* Mission & Vision Section */}
      <Grid container spacing={4} className="w-full max-w-5xl mb-12">
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className={`h-full ${oddBlockBg} rounded-lg shadow-lg`}>
              <CardContent className="p-6">
                <Typography variant="h4" className={`font-semibold mb-4 ${textColor}`}>
                  My Mission
                </Typography>
                <Typography variant="body1" className={`${secondaryTextColor}`}>
                  I'm dedicated to empowering clients with data-driven insights that drive business value. My mission is to make advanced data engineering accessible to individuals and small businesses who may not have the resources for a full data team but need professional data pipeline solutions.
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className={`h-full ${evenBlockBg} rounded-lg shadow-lg`}>
              <CardContent className="p-6">
                <Typography variant="h4" className={`font-semibold mb-4 ${textColor}`}>
                  My Vision
                </Typography>
                <Typography variant="body1" className={`${secondaryTextColor}`}>
                  I envision a world where businesses of all sizes can leverage data as effectively as large enterprises. Through my work, I strive to democratize data engineering by building tools and applications that make complex data workflows accessible, actionable, and valuable for everyone.
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
        transition={{ duration: 0.5, delay: 0.5 }}
        className={`w-full max-w-5xl py-12 px-8 mx-auto ${oddBlockBg} rounded-lg shadow-lg mb-12 relative overflow-hidden`}
      >
        <div className="data-flow-decoration absolute inset-0 opacity-10"></div>
        
        <Box className="relative z-10 text-center">
          <Typography variant="h4" className={`font-semibold mb-4 ${textColor}`}>
            Let's Build Your Data Pipeline
          </Typography>
          <Typography variant="body1" className={`${secondaryTextColor} mb-6 max-w-2xl mx-auto`}>
            Ready to transform your data into actionable insights? I'd love to discuss your project and how I can help you achieve your data goals.
          </Typography>
          <Box className="flex flex-wrap justify-center gap-4">
            <a href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-lg font-medium ${
                  isDark 
                    ? 'bg-columbia-blue text-drab-brown hover:bg-cool-gray-light' 
                    : 'bg-drab-brown text-columbia-blue hover:bg-ebony'
                } transition-colors`}
              >
                Contact Me
              </motion.button>
            </a>
            <a href="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-lg font-medium border-2 ${
                  isDark 
                    ? 'border-columbia-blue text-columbia-blue hover:bg-columbia-blue/10' 
                    : 'border-drab-brown text-drab-brown hover:bg-drab-brown/10'
                } transition-colors`}
              >
                View Projects
              </motion.button>
            </a>
          </Box>
        </Box>
      </motion.section>
    </div>
  );
};

export default About;