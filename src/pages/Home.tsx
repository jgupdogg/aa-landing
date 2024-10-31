// src/pages/Home.jsx
import React, { useContext } from 'react';
import { Typography } from '@mui/material';
import { ThemeContext } from '../contexts/ThemeContext';
import { Button } from '../components/button';
import clsx from 'clsx'; // Ensure clsx is installed via npm or yarn

const Home = () => {
  const { theme } = useContext(ThemeContext);

  // Define theme-based classes using Tailwind color names
  const textColor = theme === 'dark' ? 'text-textLight' : 'text-textDark';
  const secondaryTextColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-600';
  const bgColor1 = theme === 'dark' ? 'bg-darkBg' : 'bg-lightBg';
  const oddBlockBg = theme === 'dark' ? 'bg-oddBlockDark' : 'bg-oddBlock';
  const evenBlockBg = theme === 'dark' ? 'bg-evenBlockDark' : 'bg-evenBlock';

  // Define gradient classes based on the theme to match content box backgrounds
  const gradientClasses = theme === 'dark'
    ? 'from-oddBlockDark to-evenBlockDark' // Dark mode: matches oddBlockBg to evenBlockBg
    : 'from-oddBlock to-evenBlock'; // Light mode: matches oddBlockBg to evenBlockBg

  // Define text color for the Hero section based on the theme
  const gradientTextColor = theme === 'dark' ? 'text-white' : 'text-textDark';

  // Define button classes with different hover behavior based on theme
  const buttonBgColor = 'bg-secondary';
  const buttonTextColor = theme === 'dark' ? 'text-white' : 'text-primaryForeground';
  const buttonHoverClass = theme === 'dark' ? 'hover:bg-primary-dark/90' : 'hover:bg-primary/90';

  return (
    <div className={`relative min-h-screen flex flex-col items-center ${bgColor1} py-24 px-4`}>
      {/* Hero Section */}
      <section className={`w-full flex flex-col items-center justify-center py-24 bg-gradient-to-r ${gradientClasses} ${gradientTextColor} mb-8`}>
        <Typography variant="h2" className="font-bold mb-4">
          Welcome to Agent Alpha
        </Typography>
        <Typography variant="h6">
          Freelance Data Projects & Portfolio Showcase
        </Typography>
      </section>

      {/* Who We Are Section */}
      <section className={`w-full max-w-5xl py-16 px-8 mx-auto ${oddBlockBg} rounded-lg shadow-lg mt-8`}>
        <Typography variant="h4" className={`font-semibold mb-4 ${textColor}`}>
          Who We Are
        </Typography>
        <Typography variant="body1" className={`${secondaryTextColor}`}>
          Agent Alpha is a one-person data company founded by Justin Gupta, specializing in data acquisition, processing, and AI transformations. We deliver customized solutions tailored to meet unique client needs.
        </Typography>
      </section>

      {/* What We Do Section */}
      <section className={`w-full max-w-5xl py-16 px-8 mx-auto ${evenBlockBg} rounded-lg shadow-lg mt-8`}>
        <Typography variant="h4" className={`font-semibold mb-4 ${textColor}`}>
          What We Do
        </Typography>
        <Typography variant="body1" className={`${secondaryTextColor}`}>
          Our expertise spans data acquisition, web scraping, processing, AI-driven data transformations, vector databases, Apache Airflow pipelines, and serverless AWS solutions such as Lambda functions.
        </Typography>
      </section>

      {/* Our Projects Section */}
      <section className={`w-full max-w-5xl py-16 px-8 mx-auto ${oddBlockBg} rounded-lg shadow-lg mt-8`}>
        <Typography variant="h4" className={`font-semibold mb-4 ${textColor}`}>
          Our Projects
        </Typography>
        <Typography variant="body1" className={`${secondaryTextColor} mb-4`}>
          From developing a financial news aggregator to visualizing network analysis and designing classification functions for engineering projects, Agent Alpha showcases versatility and deep expertise in data solutions.
        </Typography>
        <div className="flex flex-col items-center gap-4">
          <Button
            asChild
            variant="secondary"
            size="lg"
            className={`w-auto px-8 ${buttonTextColor} ${buttonHoverClass}`}
          >
            <a href="https://dev.d18qrrz5fmpzed.amplifyapp.com/" target="_blank" rel="noopener noreferrer">
              Finance News Aggregator
            </a>
          </Button>
          <Button
            asChild
            variant="secondary"
            size="lg"
            className={`w-auto px-8 ${buttonTextColor} ${buttonHoverClass}`}
          >
            <a href="https://dev.d19wrnwuqcg589.amplifyapp.com/" target="_blank" rel="noopener noreferrer">
              Coinbase Network Analysis
            </a>
          </Button>
        </div>
      </section>

      {/* Seeking Opportunities Section */}
      <section className={`w-full max-w-5xl py-16 px-8 mx-auto ${evenBlockBg} rounded-lg shadow-lg mt-8`}>
        <Typography variant="h4" className={`font-semibold mb-4 ${textColor}`}>
          Seeking Opportunities
        </Typography>
        <Typography variant="body1" className={`${secondaryTextColor}`}>
          I am currently looking for full-time roles where I can apply my data and AI expertise to contribute to innovative projects and business growth.
        </Typography>
      </section>

      {/* Get in Touch Section */}
      <section className={`w-full max-w-5xl py-16 px-8 mx-auto ${oddBlockBg} rounded-lg shadow-lg mt-8`}>
        <Typography variant="h4" className={`font-semibold mb-4 ${textColor}`}>
          Get in Touch
        </Typography>
        <Typography variant="body1" className={`${secondaryTextColor} mb-4`}>
          For business inquiries or collaborations, contact me at <a href="mailto:admin@agentalpha.ai" className="underline">admin@agentalpha.ai</a> or <a href="mailto:gupta.justin1@gmail.com" className="underline">gupta.justin1@gmail.com</a>.
        </Typography>
        <div className="flex justify-center">
          <Button
            variant="secondary"
            size="lg"
            className={`px-8 ${buttonTextColor} ${buttonHoverClass}`}
          >
            Contact Me
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
