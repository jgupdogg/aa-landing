// src/components/home/ServicesShowcaseSection.jsx
import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { FaStream, FaCode, FaDatabase, FaEye } from 'react-icons/fa';

const ServiceItem = ({ icon: Icon, title, description, secondaryTextColor }) => (
  <Box className="flex items-start mb-4">
    <Box className="text-primary dark:text-columbia-blue mr-3 mt-1 text-xl" aria-hidden="true">
      <Icon />
    </Box>
    <Box>
      <Typography variant="h3" component="h3" className="font-semibold mb-1 text-lg">
        {title}
      </Typography>
      <Typography variant="body2" className={secondaryTextColor}>
        {description}
      </Typography>
    </Box>
  </Box>
);

const ServicesShowcaseSection = ({ textColor, secondaryTextColor, oddBlockBg }) => {
  return (
    <motion.section 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className={`w-full max-w-5xl py-12 px-8 mx-auto ${oddBlockBg} rounded-lg shadow-lg mb-12`}
      aria-labelledby="solutions-heading"
    >
      <Typography variant="h2" id="solutions-heading" className={`font-semibold mb-4 ${textColor} text-2xl md:text-3xl`}>
        Complete Data Engineering Solutions
      </Typography>
      <Typography variant="body1" className={`${secondaryTextColor} mb-6`}>
        My expertise spans the entire data lifecycle, including:
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <ServiceItem 
            icon={FaStream}
            title="Data Pipelines"
            description="End-to-end automated workflows using Apache Airflow, AWS Step Functions, and custom solutions."
            secondaryTextColor={secondaryTextColor}
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <ServiceItem 
            icon={FaCode}
            title="Serverless AWS Solutions"
            description="Lambda functions, API Gateway, and cloud-native architectures for scalable data processing."
            secondaryTextColor={secondaryTextColor}
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <ServiceItem 
            icon={FaDatabase}
            title="Vector Databases"
            description="Implementation of modern vector databases for AI applications and semantic search capabilities."
            secondaryTextColor={secondaryTextColor}
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <ServiceItem 
            icon={FaEye}
            title="Data Visualization"
            description="Interactive dashboards and reports that make complex data accessible and actionable."
            secondaryTextColor={secondaryTextColor}
          />
        </Grid>
      </Grid>
    </motion.section>
  );
};

export default ServicesShowcaseSection;