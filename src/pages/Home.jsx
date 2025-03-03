// src/pages/Home.jsx
import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import SEO from '../components/SEO';

// Import all section components
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import ProjectsSection from '../components/home/ProjectsSection';
import ServicesShowcaseSection from '../components/home/ServicesShowcaseSection';
import HireSection from '../components/home/HireSection';
import ContactSection from '../components/home/ContactSection';

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  // Define theme-based classes using Tailwind color names
  const textColor = isDark ? 'text-textLight' : 'text-textDark';
  const secondaryTextColor = isDark ? 'text-gray-300' : 'text-gray-600';
  const bgColor1 = isDark ? 'bg-darkBg' : 'bg-lightBg';
  const oddBlockBg = isDark ? 'bg-oddBlockDark' : 'bg-oddBlock';
  const evenBlockBg = isDark ? 'bg-evenBlockDark' : 'bg-evenBlock';
  const buttonTextColor = isDark ? 'text-white' : 'text-primaryForeground';
  const buttonHoverClass = isDark ? 'hover:bg-primary-dark/90' : 'hover:bg-primary/90';

  const themeProps = {
    isDark,
    textColor,
    secondaryTextColor,
    oddBlockBg,
    evenBlockBg,
    buttonTextColor, 
    buttonHoverClass
  };

  return (
    <>
      <SEO 
        title="Agent Alpha | End-to-End Data Pipeline Solutions"
        description="Custom data engineering services for individuals and businesses. From data acquisition to insights with Justin Gupta, P.E."
        canonical="https://agentalpha.ai/"
      />
      <div className={`relative min-h-screen flex flex-col items-center ${bgColor1} py-16 px-4`}>
        <HeroSection {...themeProps} />
        <AboutSection {...themeProps} />
        <ProjectsSection {...themeProps} />
        <ServicesShowcaseSection {...themeProps} />
        <HireSection {...themeProps} />
        <ContactSection {...themeProps} />
      </div>
    </>
  );
};

export default Home;