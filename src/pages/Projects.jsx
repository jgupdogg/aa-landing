// src/pages/Projects.jsx
import React, { useContext, useState } from 'react';
import { Typography, Box, Grid, Card, CardContent, Tabs, Tab, Chip, useMediaQuery } from '@mui/material';
import { ThemeContext } from '../contexts/ThemeContext';
import { Button } from '../components/button';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaDatabase, FaServer, FaCode, FaBrain, FaTable } from 'react-icons/fa';
import './home.css'; // Reuse animations from the home page

// Define projects data structure
const projects = [
  {
    title: 'Finance News Aggregator',
    liveLink: 'https://dev.d18qrrz5fmpzed.amplifyapp.com/',
    description: 'Aggregates and summarizes financial news from various sources.',
    longDescription: 'A comprehensive data pipeline that scrapes financial news, processes it through AI summarization, stores it in vector databases, and presents it in a searchable interface. This project demonstrates end-to-end data engineering from acquisition to presentation.',
    date: '2023-07-16',
    tags: ['Data Pipeline', 'AI', 'Web Scraping', 'Vector DB'],
    image: '/finance-news.jpg', // Replace with actual image path
    components: [
      {
        name: 'Apache Airflow Data Pipeline',
        hostedOn: 'Locally (due to cost)',
        framework: 'Python',
        packages:
          'apache-airflow, snowflake-snowpark-python, aiohttp, pandas, requests, selenium, boto3, fastapi, langchain, openai, pinecone, pytest',
        description:
          'Connects data sources to Snowflake and Pinecone DB with three DAGs for scraping, fetching, and summarizing articles. Utilizes Pinecone as a vector database and AI for article summaries.',
        git: 'https://github.com/jgupdogg/alpha-apache',
        icon: FaDatabase
      },
      {
        name: 'Pinecone Fetch Endpoint',
        hostedOn: 'AWS Lambda / API Gateway / ECR',
        framework: 'Python',
        packages: 'pinecone, openai, numpy, snowflake-snowpark-python',
        description:
          'Lambda function to search articles in Pinecone DB, fetch source data from Snowflake, and retrieve price data.',
        git: 'https://github.com/jgupdogg/pinecone_summary_lambda',
        icon: FaServer
      },
      {
        name: 'News Aggregator App',
        hostedOn: 'AWS Amplify',
        framework: 'React-Vite',
        packages: 'react, vite',
        description: 'React app that allows users to search for articles using the Lambda function.',
        git: 'https://github.com/jgupdogg/agent-alpha-app',
        icon: FaCode
      },
    ],
  },
  {
    title: 'Coinbase Network Visualization',
    liveLink: 'https://dev.d19wrnwuqcg589.amplifyapp.com/',
    description: 'Visualizes network transactions within and adjacent to the Coinbase network.',
    longDescription: 'A data analytics platform that transforms raw transaction data into interactive network visualizations. This project shows how complex data can be processed and presented in a way that reveals insights about interconnections and transaction patterns.',
    date: '2023-07-10',
    tags: ['Network Analysis', 'Data Visualization', 'SQL', 'AWS Lambda'],
    image: '/network-viz.jpg', // Replace with actual image path
    components: [
      {
        name: 'Lambda Function',
        hostedOn: 'AWS Lambda / API Gateway / ECR',
        framework: 'Python',
        packages: 'requests, pandas, networkx, seaborn, matplotlib',
        description:
          'Processes SQL query results into network graphs using NetworkX and performs basic analytics.',
        git: 'https://github.com/jgupdogg/lf-sol-network',
        icon: FaServer
      },
      {
        name: 'Network Visualization Component',
        hostedOn: 'AWS Amplify',
        framework: 'React-Vite',
        packages: 'react, vite, cytoscape',
        description:
          'React app that displays network graphs using Cytoscape based on Lambda function data.',
        git: 'https://github.com/jgupdogg/network_viz',
        icon: FaCode
      },
      {
        name: 'SQL Query',
        hostedOn: 'Flipside Crypto',
        framework: 'SQL',
        packages: '-',
        description:
          'Queries Flipside Crypto DB for daily aggregated transactions by user type within Coinbase network.',
        git: 'https://github.com/jgupdogg/network_viz/blob/main/src/api/sql_query',
        icon: FaTable
      },
    ],
  },
];

// Component for rendering a single project component
const ProjectComponent = ({ component, isDark, textColor, secondaryTextColor }) => {
  const Icon = component.icon || FaCode;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-6"
    >
      <Box className="flex flex-col sm:flex-row gap-4 items-start">
        <Box className={`p-3 rounded-full ${isDark ? 'bg-drab-brown' : 'bg-columbia-blue'} flex-shrink-0`}>
          <Icon className={`text-xl ${isDark ? 'text-columbia-blue' : 'text-drab-brown'}`} />
        </Box>
        
        <Box className="flex-grow">
          <Box className="flex items-center justify-between flex-wrap gap-2 mb-2">
            <Typography variant="h6" className={`font-semibold ${textColor}`}>
              {component.name}
            </Typography>
            
            <a 
              href={component.git}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1 text-sm ${isDark ? 'text-columbia-blue hover:text-cool-gray-light' : 'text-drab-brown hover:text-ebony'} transition-colors`}
            >
              <FaGithub /> View Code
            </a>
          </Box>
          
          <Typography variant="body2" className={`${secondaryTextColor} mb-2`}>
            {component.description}
          </Typography>
          
          <Box className="flex flex-wrap gap-2 mt-2">
            <Chip 
              label={`Hosted on: ${component.hostedOn}`}
              size="small"
              className={isDark ? 'bg-ebony text-white' : 'bg-cool-gray-light text-drab-brown'}
            />
            <Chip 
              label={`Framework: ${component.framework}`}
              size="small"
              className={isDark ? 'bg-ebony text-white' : 'bg-cool-gray-light text-drab-brown'}
            />
          </Box>
          
          {component.packages && component.packages !== '-' && (
            <Typography variant="caption" className={`block mt-2 ${secondaryTextColor}`}>
              <span className="font-semibold">Packages:</span> {component.packages}
            </Typography>
          )}
        </Box>
      </Box>
    </motion.div>
  );
};

// Component for the project card
const ProjectCard = ({ project, onClick, delay }) => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';
  
  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      onClick={onClick}
      className="cursor-pointer"
    >
      <Card className={`overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${isDark ? 'bg-oddBlockDark' : 'bg-oddBlock'}`}>
        <Box 
          className="h-48 relative bg-gradient-to-r from-drab-brown to-ebony"
        >
          {project.image ? (
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover opacity-80"
            />
          ) : (
            <Box className="w-full h-full flex items-center justify-center">
              <Typography variant="h5" className="text-white text-center p-4">
                {project.title}
              </Typography>
            </Box>
          )}
          
          <Box className="absolute top-2 right-2 flex gap-2">
            <a 
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-8 h-8 rounded-full bg-white text-drab-brown flex items-center justify-center hover:bg-columbia-blue transition-colors"
            >
              <FaExternalLinkAlt size={14} />
            </a>
            {project.components[0]?.git && (
              <a 
                href={project.components[0].git}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-8 h-8 rounded-full bg-white text-drab-brown flex items-center justify-center hover:bg-columbia-blue transition-colors"
              >
                <FaGithub size={14} />
              </a>
            )}
          </Box>
          
          <Box className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent">
            <Box className="flex flex-wrap gap-1">
              {project.tags.map((tag, index) => (
                <Chip 
                  key={index}
                  label={tag}
                  size="small"
                  className="bg-white/20 text-white text-xs backdrop-blur-sm"
                />
              ))}
            </Box>
          </Box>
        </Box>
        
        <CardContent className="p-4">
          <Typography variant="h5" className="font-semibold mb-1">
            {project.title}
          </Typography>
          <Typography variant="caption" className="block mb-2 text-gray-500">
            {new Date(project.date).toLocaleDateString()}
          </Typography>
          <Typography variant="body2" className="line-clamp-3">
            {project.description}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';
  const isMobile = useMediaQuery('(max-width:640px)');
  const [selectedProject, setSelectedProject] = useState(null);

  // Define theme-based classes using Tailwind color names
  const textColor = isDark ? 'text-textLight' : 'text-textDark';
  const secondaryTextColor = isDark ? 'text-gray-300' : 'text-gray-600';
  const bgColor1 = isDark ? 'bg-darkBg' : 'bg-lightBg';
  const oddBlockBg = isDark ? 'bg-oddBlockDark' : 'bg-oddBlock';
  const evenBlockBg = isDark ? 'bg-evenBlockDark' : 'bg-evenBlock';

  // Define gradient classes based on the theme to match content box backgrounds
  const gradientClasses = isDark
    ? 'from-drab-brown to-ebony' 
    : 'from-columbia-blue to-cool-gray-light';

  // Define text color for the Hero section based on the theme
  const gradientTextColor = isDark ? 'text-columbia-blue' : 'text-drab-brown';

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    // Scroll to the detail section
    setTimeout(() => {
      document.getElementById('project-detail')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

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
          Data Pipeline Projects
        </Typography>
        <Typography variant="h6" className="text-center z-10 relative max-w-2xl">
          Showcasing end-to-end data solutions from acquisition to visualization
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

      {/* Projects Grid */}
      <Box className="w-full max-w-5xl mb-12">
        <Typography variant="h4" className={`font-semibold mb-6 ${textColor}`}>
          Featured Projects
        </Typography>
        
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <ProjectCard 
                project={project} 
                onClick={() => handleProjectClick(project)}
                delay={0.1 * (index + 1)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Project Detail Section */}
      {selectedProject && (
        <motion.section
          id="project-detail"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`w-full max-w-5xl py-8 px-6 mx-auto ${evenBlockBg} rounded-lg shadow-lg mb-12`}
        >
          <Box className="flex justify-between items-start flex-wrap gap-4 mb-6">
            <div>
              <Typography variant="h3" className={`font-semibold ${textColor}`}>
                {selectedProject.title}
              </Typography>
              <Typography variant="subtitle1" className={secondaryTextColor}>
                Completed on {new Date(selectedProject.date).toLocaleDateString()}
              </Typography>
            </div>
            
            <a 
              href={selectedProject.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="secondary"
                size="lg"
                className="flex items-center gap-2"
              >
                <FaExternalLinkAlt /> View Live Project
              </Button>
            </a>
          </Box>
          
          <Typography variant="body1" className={`${secondaryTextColor} mb-8`}>
            {selectedProject.longDescription || selectedProject.description}
          </Typography>
          
          <Typography variant="h5" className={`font-semibold mb-4 ${textColor}`}>
            Project Components
          </Typography>
          
          <Box className="mb-8">
            {selectedProject.components.map((component, index) => (
              <ProjectComponent 
                key={index}
                component={component}
                isDark={isDark}
                textColor={textColor}
                secondaryTextColor={secondaryTextColor}
              />
            ))}
          </Box>
          
          <Typography variant="h5" className={`font-semibold mb-4 ${textColor}`}>
            Technologies Used
          </Typography>
          
          <Box className="flex flex-wrap gap-2 mb-8">
            {/* Extract unique technologies from components */}
            {Array.from(new Set(
              selectedProject.components.flatMap(comp => 
                [comp.framework, ...(comp.packages.split(',').map(pkg => pkg.trim()))]
              ).filter(tech => tech && tech !== '-')
            )).map((tech, index) => (
              <Chip 
                key={index}
                label={tech}
                className={isDark ? 'bg-drab-brown text-columbia-blue' : 'bg-columbia-blue text-drab-brown'}
              />
            ))}
          </Box>
          
          <Box className="flex justify-center">
            <Button
              variant="outline"
              size="default"
              onClick={() => setSelectedProject(null)}
              className={`border-current ${isDark ? 'text-columbia-blue' : 'text-drab-brown'}`}
            >
              Back to Projects
            </Button>
          </Box>
        </motion.section>
      )}

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
            Need a Custom Data Pipeline?
          </Typography>
          <Typography variant="body1" className={`${secondaryTextColor} mb-6 max-w-2xl mx-auto`}>
            I can help you build end-to-end data solutions tailored to your specific needs. From data acquisition to visualization, let's transform your raw data into valuable insights.
          </Typography>
          <a href="/contact">
            <Button
              variant="secondary"
              size="lg"
              className="px-8 transform transition-transform hover:scale-105"
            >
              Discuss Your Project
            </Button>
          </a>
        </Box>
      </motion.section>
    </div>
  );
};

export default Projects;