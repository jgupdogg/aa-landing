// src/pages/About.jsx
import React from 'react';
import { Typography } from '@mui/material';

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <Typography variant="h3" className="font-bold mb-4">
        About
      </Typography>
      <Typography variant="body1">
        This is the about page...
      </Typography>
    </div>
  );
};

export default About;
