// src/components/Navbar.tsx
import React, { memo } from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

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

// Extend LinkProps to include isActive
const NavLink = styled(Link)<NavLinkProps>(({ theme, isActive }) => ({
  color: isActive ? 'var(--color-primary)' : 'rgba(255, 255, 255, 0.7)',
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
    backgroundColor: 'var(--color-primary)',
    visibility: 'hidden',
    transform: 'scaleX(0)',
    transition: 'all 0.3s ease-in-out',
  },
  '&:hover:before': {
    visibility: 'visible',
    transform: 'scaleX(1)',
  },
  '&:hover': {
    color: 'var(--color-primary)',
  },
  '&:active': {
    color: 'var(--color-primary)',
  },
}));

const Logo = styled('img')({
  height: '60px',
  objectFit: 'contain',
  cursor: 'pointer',
});

const Navbar = memo(() => {
  Navbar.displayName = 'Navbar';

  const location = useLocation();

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <NavbarContainer>
        <AppBar position="fixed" color="transparent" elevation={0}>
          <Toolbar>
            <Box display="flex" alignItems="center" width="100%">
              <Link to="/">
                <Logo src="/agent_alpha_name.png" alt="Agent Alpha Logo" />
              </Link>
              <Box flexGrow={1} />
              <NavLink to="/about" isActive={location.pathname === '/about'}>
                About
              </NavLink>
              <NavLink to="/projects" isActive={location.pathname === '/projects'}>
                Projects
              </NavLink>
              <NavLink to="/#contact" isActive={location.hash === '#contact'}>
                Contact
              </NavLink>
            </Box>
          </Toolbar>
        </AppBar>
      </NavbarContainer>
    </motion.div>
  );
});

export default Navbar;
