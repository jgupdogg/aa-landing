// src/components/Navbar.tsx
import React, { memo, useContext } from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { ThemeContext } from '../contexts/ThemeContext';

interface NavLinkProps {
  isActive: boolean;
}

const NavbarContainer = styled('div')({
  flexGrow: 1,
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  zIndex: 10,
});

const NavLink = styled(Link)<NavLinkProps>(({ theme, isActive }) => ({
  color: isActive
    ? theme.palette.mode === 'dark'
      ? 'var(--color-primary)'
      : 'var(--color-secondary)'
    : `var(--color-text-${theme.palette.mode === 'dark' ? 'light' : 'dark'})`,
  textDecoration: 'none',
  marginRight: theme.spacing(2),
  position: 'relative',
  overflow: 'hidden',
  fontFamily: 'Inter, sans-serif',

  '&:before': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '2px',
    bottom: 0,
    left: 0,
    backgroundColor: isActive
      ? theme.palette.mode === 'dark'
        ? 'var(--color-primary)'
        : 'var(--color-secondary)'
      : 'transparent',
    visibility: isActive ? 'visible' : 'hidden',
    transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
    transition: 'all 0.3s ease-in-out',
  },
  '&:hover:before': {
    visibility: 'visible',
    transform: 'scaleX(1)',
    backgroundColor:
      theme.palette.mode === 'dark' ? 'var(--color-primary)' : 'var(--color-secondary)',
  },
  '&:hover': {
    color: theme.palette.mode === 'dark' ? 'var(--color-primary)' : 'var(--color-secondary)',
  },
}));

const Logo = styled('img')({
  height: '40px',
  objectFit: 'contain',
  cursor: 'pointer',
});

const Navbar = memo(() => {
  Navbar.displayName = 'Navbar';

  const location = useLocation();
  const { theme } = useContext(ThemeContext);

  const logoSrc = theme === 'dark' ? '/agent_alpha_name.png' : '/agent_alpha_name_dark.png';

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <NavbarContainer>
        <AppBar
          position="fixed"
          color="transparent" // Set the color to transparent
          elevation={1}
          sx={{
            backgroundColor: theme === 'dark' ? 'var(--color-dark-bg)' : 'var(--color-light-bg)',
          }}
        >
          <Toolbar>
            <Box display="flex" alignItems="center" width="100%">
              <Link to="/">
                <Logo src={logoSrc} alt="Agent Alpha Logo" />
              </Link>
              <Box flexGrow={1} />
              {/* NavLinks */}
              <NavLink to="/about" isActive={location.pathname === '/about'}>
                About
              </NavLink>
              <NavLink to="/projects" isActive={location.pathname === '/projects'}>
                Projects
              </NavLink>
              <NavLink to="/contact" isActive={location.pathname === '/contact'}>
                Contact
              </NavLink>
              {/* ThemeToggle */}
              <Box ml={2}>
                <ThemeToggle />
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </NavbarContainer>
    </motion.div>
  );
});

export default Navbar;