// src/components/home/HeroSection.jsx
import React from 'react';
import { Typography, Box, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { Button } from '../button';
import DataServiceTypewriter from './DataServiceTypewriter';

const HeroSection = ({ isDark, buttonTextColor, buttonHoverClass }) => {
  const isMobile = useMediaQuery('(max-width:640px)');

  return (
    <section 
      className={`w-full flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-br ${isDark ? 'from-drab-brown to-ebony' : 'from-columbia-blue to-cool-gray-light'} ${isDark ? 'text-columbia-blue' : 'text-drab-brown'} mb-12 rounded-lg shadow-lg relative overflow-hidden`}
      aria-labelledby="hero-heading"
    >
      <div className="data-particles absolute inset-0 opacity-10" aria-hidden="true"></div>
      
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-center z-10 max-w-3xl px-4 py-8 md:py-12"
      >
        <Typography variant="h1" id="hero-heading" className="font-bold mb-6 text-center px-4 text-3xl md:text-4xl lg:text-5xl">
          End-to-End Data Pipeline Solutions
        </Typography>
        
        <Typography variant="h2" className="mb-8 flex justify-center flex-wrap gap-2 px-4 text-xl md:text-2xl">
          <span>Data</span> 
          <DataServiceTypewriter />
        </Typography>
        
        <Typography variant="h3" className="mb-10 px-4 text-lg md:text-xl">
          Freelance Data Engineering by Justin Gupta P.E.
        </Typography>
          
        <Box className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="secondary"
            size="lg"
            className={`px-8 ${buttonTextColor} ${buttonHoverClass}`}
            aria-label="Contact me for hiring inquiries"
          >
            Hire Me
          </Button>
          <Button
            variant="outline"
            size="lg"
            className={`px-8 ${isDark ? 'border-current text-columbia-blue' : 'border-drab-brown text-drab-brown'} hover:bg-opacity-10 hover:bg-primary`}
            aria-label="View my portfolio of data engineering projects"
          >
            View Projects
          </Button>
        </Box>
      </motion.div>
      
      {/* Pipeline SVG Animation */}
      {!isMobile && (
        <div className="w-full max-w-3xl mt-12 pipeline-animation">
          <svg viewBox="0 0 800 120" className="w-full" aria-label="Data pipeline flow visualization" role="img">
            <title>Data Pipeline Flow</title>
            <desc>An animated visualization of data flowing through a pipeline system</desc>
            <defs>
              <linearGradient id="pipeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" className={isDark ? "text-ebony" : "text-cool-gray-light"} style={{ stopColor: 'currentColor' }} />
                <stop offset="100%" className={isDark ? "text-columbia-blue" : "text-drab-brown"} style={{ stopColor: 'currentColor' }} />
              </linearGradient>
            </defs>
            
            {/* Main pipeline flow */}
            <path 
              d="M50,60 C150,20 300,100 400,60 S650,20 750,60" 
              stroke="url(#pipeGradient)" 
              strokeWidth="8" 
              fill="none" 
              strokeLinecap="round"
              className="pipeline-path"
            />
            
            {/* Data nodes */}
            <circle cx="50" cy="60" r="10" className={`node node1 ${isDark ? "fill-columbia-blue" : "fill-drab-brown"}`} />
            <circle cx="400" cy="60" r="10" className={`node node2 ${isDark ? "fill-cool-gray-light" : "fill-ebony"}`} />
            <circle cx="750" cy="60" r="10" className={`node node3 ${isDark ? "fill-columbia-blue" : "fill-drab-brown"}`} />
            
            {/* Data flow animations */}
            <circle r="4" className={`data-dot dot1 ${isDark ? "fill-columbia-blue" : "fill-drab-brown"}`}>
              <animateMotion
                path="M50,60 C150,20 300,100 400,60 S650,20 750,60"
                dur="4s"
                repeatCount="indefinite"
              />
            </circle>
            <circle r="4" className={`data-dot dot2 ${isDark ? "fill-cool-gray-light" : "fill-ebony"}`}>
              <animateMotion
                path="M50,60 C150,20 300,100 400,60 S650,20 750,60"
                dur="4s"
                begin="1s"
                repeatCount="indefinite"
              />
            </circle>
            <circle r="4" className={`data-dot dot3 ${isDark ? "fill-columbia-blue" : "fill-drab-brown"}`}>
              <animateMotion
                path="M50,60 C150,20 300,100 400,60 S650,20 750,60"
                dur="4s"
                begin="2s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </div>
      )}
    </section>
  );
};

export default HeroSection;