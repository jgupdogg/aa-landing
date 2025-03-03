// src/components/home/AboutSection.jsx
import React from 'react';
import { Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { FaSearch, FaServer, FaRandom, FaChartBar } from 'react-icons/fa';

const AboutSection = ({ textColor, secondaryTextColor, oddBlockBg }) => {
  return (
    <section 
      className={`w-full max-w-5xl py-12 px-8 mx-auto ${oddBlockBg} rounded-lg shadow-lg mb-12`}
      aria-labelledby="about-heading services-heading"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h2" id="about-heading" className={`font-semibold mb-2 ${textColor} text-2xl md:text-3xl`}>
          Who I Am
        </Typography>
        <Typography variant="body1" className={`${secondaryTextColor} mb-6`}>
          I'm Justin Gupta, an independent full-stack data engineer specializing in custom data pipeline solutions. From data acquisition to insights, I deliver end-to-end systems that solve complex business challenges for individuals and small businesses.
        </Typography>
        
        <Typography variant="h2" id="services-heading" className={`font-semibold mb-6 mt-8 ${textColor} text-2xl md:text-3xl`}>
          Data Pipeline Services
        </Typography>
      </motion.div>
      
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <ServiceCard 
            icon={FaSearch} 
            title="Data Acquisition" 
            description="Web scraping, API integrations, and automated data collection solutions."
            delay={0.1}
          />
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <ServiceCard 
            icon={FaServer} 
            title="Data Storage" 
            description="Database design, cloud storage, and vector databases for efficient data management."
            delay={0.2}
          />
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <ServiceCard 
            icon={FaRandom} 
            title="Data Transformation" 
            description="ETL processes, Apache Airflow pipelines, and data cleaning services."
            delay={0.3}
          />
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <ServiceCard 
            icon={FaChartBar} 
            title="Data Analysis" 
            description="Statistical analysis, AI-driven transformations, and business intelligence."
            delay={0.4}
          />
        </Grid>
      </Grid>
    </section>
  );
};

export default AboutSection;