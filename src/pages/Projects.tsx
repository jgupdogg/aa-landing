// src/pages/Projects.jsx
import React from 'react';
import { Typography, Box } from '@mui/material';
import { Button } from '../components/button';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Solana Top Traders',
    description: 'Network analysis of top traders',
    date: '2023-07-16',
    link: 'https://main.d2pshd5agb0zvi.amplifyapp.com/',
    github: 'https://github.com/jgupdogg/network_viz',
  },
  {
    title: 'Project Two',
    description: 'Description of project two.',
    date: '2023-07-10',
    link: '#',
    github: 'https://github.com/username/project-two',
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <div className="relative bg-frames-pattern w-full min-h-screen flex flex-col items-center justify-center text-center py-24 border-glow">
      <div className="w-96 h-96 rounded-full bg-gradient-to-r from-blue-500 to-green-500 opacity-50"></div>
      <div className="relative flex flex-col items-center justify-center w-full">
        <Typography variant="h2" className="text-white font-bold mb-4">
          Projects
        </Typography>
        <Typography variant="h6" className="text-white mb-8">
          Here are some of my projects...
        </Typography>
        <Box className="w-4/5 bg-transparent p-4">
          <table className="table-auto w-full text-left">
            <thead>
              <tr className="text-gray-300">
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Links</th>
                <th className="px-4 py-2 text-center">Repo</th>
              </tr>
            </thead>
            <tbody className="text-gray-400">
              {projects.map((project, index) => (
                <tr key={index} className="border-b border-gray-700">
                  <td className="px-4 py-2 text-gray-200">{project.title}</td>
                  <td className="px-4 py-2">{project.description}</td>
                  <td className="px-4 py-2">{project.date}</td>
                  <td className="px-4 py-2">
                    <Button variant="default" size="sm" asChild>
                      <a href={project.link} className="text-white" target="_blank" rel="noopener noreferrer">
                        View Project
                      </a>
                    </Button>
                  </td>
                  <td className="px-4 py-2 text-center">
                    <a href={project.github} className="text-gray-400 hover:text-gray-300" target="_blank" rel="noopener noreferrer">
                      <FaGithub size={24} />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
      </div>
    </div>
  );
};

export default Projects;
