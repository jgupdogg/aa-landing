// src/pages/Projects.tsx
import React, { useContext } from 'react';
import { Typography, Box } from '@mui/material';
import { FaGithub } from 'react-icons/fa';
import { ThemeContext } from '../contexts/ThemeContext';
import { Button } from '../components/button';

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

  // Define theme-based classes
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-800';
  const secondaryTextColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-600';
  const borderColor = theme === 'dark' ? 'border-gray-700' : 'border-gray-300';

  // Define button classes with different hover behavior based on theme
  const buttonBgColor = theme === 'dark' ? 'bg-primary-dark' : 'bg-primary';
  const buttonTextColor = theme === 'dark' ? 'text-white' : 'text-primary-foreground';
  const buttonHoverClass = theme === 'dark' ? 'hover:bg-primary-dark/90' : 'hover:bg-primary/90';

  // Define hover classes for table rows
  const tableRowHoverClass =
    theme === 'dark' ? 'dark:hover:bg-gray-500/10' : 'hover:bg-gray-100/20';

  return (
    <div className="w-full flex flex-col items-center justify-start text-left py-24 px-4 relative">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 to-green-500 opacity-10 dark:from-blue-700 dark:to-green-700 pointer-events-none"></div>

      <div className="relative flex flex-col items-start justify-start w-full max-w-5xl">
        <Typography variant="h2" className={`font-bold mb-4 ${textColor}`}>
          Projects
        </Typography>
        <Typography variant="h6" className={`mb-8 ${secondaryTextColor}`}>
          Here are some of my projects...
        </Typography>
        <Box className="w-full bg-transparent p-4 space-y-12">
          {projects.map((project: Project, projectIndex: number) => (
            <div key={projectIndex} className="flex flex-col items-start w-full">
              {/* Project Title and Live Link Button */}
              <div className="flex items-center justify-between w-full">
                <Typography variant="h4" className={`font-semibold mb-2 ${textColor}`}>
                  {project.title}
                </Typography>
                <Button
                  variant="default"
                  size="sm"
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
                Date: {project.date}
              </Typography>
              {/* Components Table */}
              <div className="overflow-x-auto">
                <table className="table-auto w-full text-left">
                  <thead>
                    <tr className={secondaryTextColor}>
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
                        className={`border-b ${borderColor} ${tableRowHoverClass}`}
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
        </Box>
      </div>
    </div>
  );
};

export default Projects;
