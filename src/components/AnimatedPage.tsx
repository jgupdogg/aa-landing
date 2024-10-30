// src/components/AnimatedPage.tsx
import React from 'react';
import { motion, MotionProps } from 'framer-motion';

interface AnimatedPageProps {
  children: React.ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    x: '-100vw',
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: '100vw',
  },
};

const pageTransition = {
  type: 'tween',
  duration: 0.5,
};

const AnimatedPage: React.FC<AnimatedPageProps> = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ overflowX: 'hidden' } as React.CSSProperties} // Use type assertion
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
