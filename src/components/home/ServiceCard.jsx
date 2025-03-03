// src/components/home/ServiceCard.jsx
import React from 'react';
import { Typography, Box, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className="h-full"
    >
      <Card className="h-full service-card group">
        <CardContent className="p-6 text-center flex flex-col items-center h-full">
          <Box className="text-5xl mb-4 text-primary dark:text-columbia-blue group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
            <Icon />
          </Box>
          <Typography variant="h3" component="h3" className="mb-3 font-semibold text-lg">
            {title}
          </Typography>
          <Typography variant="body1" className="text-gray-600 dark:text-gray-300">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;