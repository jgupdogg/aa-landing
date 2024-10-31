// src/pages/Projects.tsx
import React, { useContext } from 'react';
import { Typography } from '@mui/material';
import { FaGithub } from 'react-icons/fa';
import { ThemeContext } from '../contexts/ThemeContext';
import { Button } from '../components/button'; // Assuming you have a Button component similar to Home.jsx
import clsx from 'clsx'; // Ensure clsx is installed via npm or yarn

// Define interfaces for project components and projects
interface ProjectComponent {
  name: string;
  hostedOn: string;
  framework: string;
  packages: string;
  description: string;
  git: string;
}

interface Project {
  title: string;
  liveLink: string;
  description: string;
  date: string;
  components: ProjectComponent[];
}

// Define the projects array with explicit typing
const projects: Project[] = [
  {
    title: 'Finance News Aggregator',
    liveLink: 'https://dev.d18qrrz5fmpzed.amplifyapp.com/',
    description: 'Aggregates and summarizes financial news from various sources.',
    date: '2023-07-16',
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
      },
      {
        name: 'Pinecone Fetch Endpoint',
        hostedOn: 'AWS Lambda / API Gateway / ECR',
        framework: 'Python',
        packages: 'pinecone, openai, numpy, snowflake-snowpark-python',
        description:
          'Lambda function to search articles in Pinecone DB, fetch source data from Snowflake, and retrieve price data.',
        git: 'https://github.com/jgupdogg/pinecone_summary_lambda',
      },
      {
        name: 'News Aggregator App',
        hostedOn: 'AWS Amplify',
        framework: 'React-Vite',
        packages: 'react, vite',
        description: 'React app that allows users to search for articles using the Lambda function.',
        git: 'https://github.com/jgupdogg/agent-alpha-app',
      },
    ],
  },
  {
    title: 'Coinbase Network Visualization',
    liveLink: 'https://dev.d19wrnwuqcg589.amplifyapp.com/',
    description: 'Visualizes network transactions within and adjacent to the Coinbase network.',
    date: '2023-07-10',
    components: [
      {
        name: 'Lambda Function',
        hostedOn: 'AWS Lambda / API Gateway / ECR',
        framework: 'Python',
        packages: 'requests, pandas, networkx, seaborn, matplotlib',
        description:
          'Processes SQL query results into network graphs using NetworkX and performs basic analytics.',
        git: 'https://github.com/jgupdogg/lf-sol-network',
      },
      {
        name: 'Network Visualization Component',
        hostedOn: 'AWS Amplify',
        framework: 'React-Vite',
        packages: 'react, vite, cytoscape',
        description:
          'React app that displays network graphs using Cytoscape based on Lambda function data.',
        git: 'https://github.com/jgupdogg/network_viz',
      },
      {
        name: 'SQL Query',
        hostedOn: 'Flipside Crypto',
        framework: 'SQL',
        packages: '-', // Removed redundant 'SQL' entry
        description:
          'Queries Flipside Crypto DB for daily aggregated transactions by user type within Coinbase network.',
        git: 'https://github.com/jgupdogg/network_viz/blob/main/src/api/sql_query',
      },
    ],
  },
];

const Projects: React.FC = () => {
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

  // Define hover classes for table rows
  const tableRowHoverClass =
    theme === 'dark' ? 'dark:hover:bg-gray-500/10' : 'hover:bg-gray-100/20';

  return (
    <div className={`relative min-h-screen flex flex-col items-center ${bgColor1}`}>
      {/* Hero Section */}
      <section className={`w-full flex flex-col items-center justify-center py-24 bg-gradient-to-r ${gradientClasses} ${gradientTextColor} mb-8`}>
        <Typography variant="h2" className="font-bold mb-4">
          Our Projects
        </Typography>
        <Typography variant="h6">
          Explore Our Diverse Portfolio
        </Typography>
      </section>

      {/* Projects Container */}
      <section className="w-full max-w-5xl flex flex-col space-y-12">
        {projects.map((project: Project, projectIndex: number) => (
          <div
            key={projectIndex}
            className={`flex flex-col items-start w-full p-6 rounded-lg shadow-lg ${
              projectIndex % 2 === 0 ? oddBlockBg : evenBlockBg
            }`}
          >
            {/* Project Header */}
            <div className="flex items-center justify-between w-full">
              <Typography variant="h4" className={`font-semibold mb-2 ${textColor}`}>
                {project.title}
              </Typography>
              <Button
                variant="default"
                size="lg"
                className={`${buttonBgColor} ${buttonTextColor} ${buttonHoverClass}`}
                asChild
              >
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  View Live
                </a>
              </Button>
            </div>
            {/* Project Description and Date */}
            <Typography variant="subtitle1" className={`mb-1 ${secondaryTextColor}`}>
              {project.description}
            </Typography>
            <Typography variant="subtitle2" className={`mb-4 ${secondaryTextColor}`}>
              Date: {new Date(project.date).toLocaleDateString()}
            </Typography>
            {/* Components Table */}
            <div className="overflow-x-auto w-full">
              <table className="table-auto w-full text-left">
                <thead>
                  <tr className={`border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'}`}>
                    <th scope="col" className="px-4 py-2">
                      Component
                    </th>
                    <th scope="col" className="px-4 py-2">
                      Description
                    </th>
                    <th scope="col" className="px-4 py-2">
                      Hosted On
                    </th>
                    <th scope="col" className="px-4 py-2">
                      Framework / Packages
                    </th>
                    <th scope="col" className="px-4 py-2 text-center">
                      Repo
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {project.components.map((component: ProjectComponent, compIndex: number) => (
                    <tr
                      key={compIndex}
                      className={`border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'} ${tableRowHoverClass}`}
                    >
                      <td className={`px-4 py-2 ${textColor}`}>{component.name}</td>
                      <td className={`px-4 py-2 ${secondaryTextColor}`}>{component.description}</td>
                      <td className={`px-4 py-2 ${secondaryTextColor}`}>{component.hostedOn}</td>
                      <td className={`px-4 py-2 ${secondaryTextColor}`}>
                        <span>{component.framework}</span>
                        <br />
                        <span className="text-sm">{component.packages}</span>
                      </td>
                      <td className="px-4 py-2 text-center">
                        <a
                          href={component.git}
                          className={`${secondaryTextColor} hover:${textColor}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub size={24} />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Projects;
