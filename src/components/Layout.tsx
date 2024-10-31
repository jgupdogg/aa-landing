// src/components/Layout.tsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Transition from './Transition';
import { AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const location = useLocation();

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-dark-bg text-white' : 'bg-light-bg text-black'}`}>
      <Navbar />
      <AnimatePresence mode="wait">
        {/* Use location.pathname as the key to trigger animations on route change */}
        <Transition key={location.pathname}>
          <main className="flex-grow">
            {children}
          </main>
        </Transition>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Layout;
