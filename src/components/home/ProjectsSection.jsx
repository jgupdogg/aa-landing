// src/components/home/ProjectsSection.jsx
import React from 'react';
import { Typography, Grid, Box, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { Button } from '../button';

const ProjectsSection = ({ textColor, secondaryTextColor, evenBlockBg, isDark, buttonTextColor, buttonHoverClass }) => {
  return (
    <motion.section 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`w-full max-w-5xl py-12 px-8 mx-auto ${evenBlockBg} rounded-lg shadow-lg mb-12`}
      aria-labelledby="projects-heading"
    >
      <Typography variant="h2" id="projects-heading" className={`font-semibold mb-4 ${textColor} text-2xl md:text-3xl`}>
        Featured Projects
      </Typography>
      <Typography variant="body1" className={`${secondaryTextColor} mb-6`}>
        Explore my portfolio of custom data solutions, including a financial news aggregator, network analysis visualization, and other data engineering projects.
      </Typography>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card className="h-full project-card group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <Box className="h-48 bg-gradient-to-r from-drab-brown to-ebony relative overflow-hidden" aria-hidden="true">
              <Box className="absolute inset-0 flex items-center justify-center text-white text-opacity-90 p-4">
                <svg viewBox="0 0 200 100" className="w-full max-w-xs" aria-hidden="true">
                  <rect x="10" y="20" width="180" height="15" rx="2" className={isDark ? "fill-columbia-blue fill-opacity-70" : "fill-white fill-opacity-70"} />
                  <rect x="10" y="45" width="120" height="15" rx="2" className={isDark ? "fill-columbia-blue fill-opacity-70" : "fill-white fill-opacity-70"} />
                  <rect x="10" y="70" width="160" height="15" rx="2" className={isDark ? "fill-columbia-blue fill-opacity-70" : "fill-white fill-opacity-70"} />
                  
                  <circle cx="170" cy="45" r="12" className={isDark ? "fill-cool-gray-light" : "fill-cool-gray-light"} />
                </svg>
              </Box>
            </Box>
            <CardContent className="p-6">
              <Typography variant="h3" component="h3" className="mb-2 font-semibold text-xl">
                Finance News Aggregator
              </Typography>
              <Typography variant="body2" className={`${secondaryTextColor} mb-4`}>
                Custom data pipeline that collects, processes, and analyzes financial news from multiple sources to provide actionable insights.
              </Typography>
              <Button
                asChild
                variant="secondary"
                size="default"
                className={`w-auto ${buttonTextColor} ${buttonHoverClass}`}
              >
                <a href="https://dev.d18qrrz5fmpzed.amplifyapp.com/" target="_blank" rel="noopener noreferrer" aria-label="View Finance News Aggregator project">
                  View Project
                </a>
              </Button>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card className="h-full project-card group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <Box className="h-48 bg-gradient-to-r from-ebony to-cool-gray relative overflow-hidden" aria-hidden="true">
              <Box className="absolute inset-0 flex items-center justify-center text-white text-opacity-90 p-4">
                <svg viewBox="0 0 200 100" className="w-full max-w-xs" aria-hidden="true">
                  <circle cx="50" cy="50" r="15" className={isDark ? "fill-columbia-blue fill-opacity-70" : "fill-white fill-opacity-70"} />
                  <circle cx="100" cy="30" r="15" className={isDark ? "fill-columbia-blue fill-opacity-70" : "fill-white fill-opacity-70"} />
                  <circle cx="150" cy="50" r="15" className={isDark ? "fill-columbia-blue fill-opacity-70" : "fill-white fill-opacity-70"} />
                  <circle cx="100" cy="70" r="15" className={isDark ? "fill-columbia-blue fill-opacity-70" : "fill-white fill-opacity-70"} />
                  
                  <line x1="50" y1="50" x2="100" y2="30" stroke={isDark ? "white" : "white"} strokeWidth="2" strokeOpacity="0.7" />
                  <line x1="100" y1="30" x2="150" y2="50" stroke={isDark ? "white" : "white"} strokeWidth="2" strokeOpacity="0.7" />
                  <line x1="150" y1="50" x2="100" y2="70" stroke={isDark ? "white" : "white"} strokeWidth="2" strokeOpacity="0.7" />
                  <line x1="100" y1="70" x2="50" y2="50" stroke={isDark ? "white" : "white"} strokeWidth="2" strokeOpacity="0.7" />
                </svg>
              </Box>
            </Box>
            <CardContent className="p-6">
              <Typography variant="h3" component="h3" className="mb-2 font-semibold text-xl">
                Coinbase Network Analysis
              </Typography>
              <Typography variant="body2" className={`${secondaryTextColor} mb-4`}>
                Interactive visualization of network relationships and data flows for cryptocurrency transactions and market analysis.
              </Typography>
              <Button
                asChild
                variant="secondary"
                size="default"
                className={`w-auto ${buttonTextColor} ${buttonHoverClass}`}
              >
                <a href="https://dev.d19wrnwuqcg589.amplifyapp.com/" target="_blank" rel="noopener noreferrer" aria-label="View Coinbase Network Analysis project">
                  View Project
                </a>
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </motion.section>
  );
};

export default ProjectsSection;