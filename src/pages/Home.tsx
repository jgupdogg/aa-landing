// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/data'; // Adjust import path if necessary
import '@aws-amplify/ui-react/styles.css';
import { Typography, Box } from '@mui/material';

import AnimatedPage from '../components/AnimatedPage';

// Amplify.configure(awsconfig); // Already configured in main.jsx

// Assuming generateClient is properly set up
const client = generateClient(); // Adjust type if using TypeScript

const Home = () => {
  const [todos, setTodos] = useState([]);

  return (
    <AnimatedPage>
      <div className="relative bg-frames-pattern w-full h-screen flex flex-col items-center justify-center text-center py-24 border-glow">
        <div className="w-96 h-96 rounded-full bg-gradient-to-r from-blue-500 to-green-500 opacity-50"></div>
        <div className="relative flex flex-col items-center justify-center w-full">
          <Typography variant="h2" className="text-white font-bold mb-4">
            Welcome to Agent Alpha
          </Typography>
          <Typography variant="h6" className="text-white mb-8">
            Freelance Data Projects & Portfolio Showcase
          </Typography>
          <Box className="flex items-center mb-4 text-white">
            <Typography variant="body2" className="mr-2">
              Powered by:
            </Typography>
            {/* Replace Next.js Image with standard img or a suitable React component */}
            <img src="/agent_alpha_name.png" alt="Agent Alpha Logo" width={100} height={50} />
          </Box>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Home;
