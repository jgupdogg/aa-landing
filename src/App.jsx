// src/App.jsx
import React, { useContext } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { ThemeContext } from './contexts/ThemeContext';
import Layout from './components/Layout';
import AnimatedPage from './components/AnimatedPage';
import ClientLayout from './components/ClientLayout';
import { FaDatabase, FaChartLine, FaCloud, FaCodeBranch } from 'react-icons/fa';
import './App.css';

// Placeholder for case study images - replace with your actual images
import caseStudy1Image from './assets/case-study-1.jpg'; // Update path as needed
import caseStudy2Image from './assets/case-study-2.jpg'; // Update path as needed
import alphaLogo from './assets/alpha-logo.svg'; // Update path as needed

function App() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  return (
    <Layout>
      <AnimatedPage>
        <ClientLayout>
          {/* Hero Section */}
          <Box 
            className="hero-section" 
            sx={{ 
              py: { xs: 10, md: 16 }, 
              mt: 8, // Add margin to account for fixed navbar
              background: isDark 
                ? 'linear-gradient(135deg, #3E442B 0%, #6A7062 100%)' 
                : 'linear-gradient(135deg, #D6EEFF 0%, #AAADC4 100%)'
            }}
          >
            <Container maxWidth="lg">
              <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={7}>
                  <Typography variant="h2" component="h1" sx={{ fontWeight: 700, mb: 2 }}>
                    Custom Data Pipelines Built For Your Business
                  </Typography>
                  <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
                    Transforming raw data into actionable insights with tailored solutions
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Button 
                      variant="contained" 
                      color="primary" 
                      size="large" 
                      sx={{ px: 4, py: 1.5, borderRadius: 2 }}
                    >
                      Get Started
                    </Button>
                    <Button 
                      variant="outlined" 
                      color="primary" 
                      size="large" 
                      sx={{ px: 4, py: 1.5, borderRadius: 2 }}
                    >
                      Learn More
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Box 
                    component="img" 
                    src={alphaLogo}
                    alt="Agent Alpha Logo"
                    sx={{ 
                      width: { xs: '80%', md: '100%' }, 
                      maxWidth: 450,
                      filter: isDark ? 'drop-shadow(0 0 12px rgba(214,238,255,0.2))' : 'drop-shadow(0 0 12px rgba(62,68,43,0.2))'
                    }}
                  />
                </Grid>
              </Grid>
            </Container>
          </Box>

          {/* Services Section */}
          <Box 
            sx={{ 
              py: { xs: 8, md: 12 },
              background: isDark ? 'var(--color-even-block-dark)' : 'var(--color-even-block)'
            }}
          >
            <Container maxWidth="lg">
              <Typography variant="h3" component="h2" sx={{ textAlign: 'center', mb: 2 }}>
                Our Services
              </Typography>
              <Typography variant="subtitle1" sx={{ textAlign: 'center', mb: 6, maxWidth: 800, mx: 'auto' }}>
                We specialize in designing and implementing custom data pipeline solutions that solve complex business challenges.
              </Typography>
              
              <Grid container spacing={4}>
                <Grid item xs={12} md={6} lg={3}>
                  <Card 
                    sx={{ 
                      height: '100%', 
                      boxShadow: 3, 
                      borderRadius: 2,
                      bgcolor: isDark ? 'var(--color-odd-block-dark)' : 'var(--color-odd-block)',
                      color: isDark ? 'var(--color-text-light)' : 'var(--color-text-dark)'
                    }}
                  >
                    <CardContent sx={{ p: 4, textAlign: 'center' }}>
                      <Box sx={{ mb: 2, fontSize: 60, color: isDark ? '#D6EEFF' : '#3E442B' }}>
                        <FaDatabase />
                      </Box>
                      <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
                        Data Integration
                      </Typography>
                      <Typography>
                        Connect and consolidate data from multiple sources into a unified system tailored to your business needs.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                
                <Grid item xs={12} md={6} lg={3}>
                  <Card 
                    sx={{ 
                      height: '100%', 
                      boxShadow: 3, 
                      borderRadius: 2,
                      bgcolor: isDark ? 'var(--color-odd-block-dark)' : 'var(--color-odd-block)',
                      color: isDark ? 'var(--color-text-light)' : 'var(--color-text-dark)'
                    }}
                  >
                    <CardContent sx={{ p: 4, textAlign: 'center' }}>
                      <Box sx={{ mb: 2, fontSize: 60, color: isDark ? '#D6EEFF' : '#3E442B' }}>
                        <FaChartLine />
                      </Box>
                      <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
                        ETL Processes
                      </Typography>
                      <Typography>
                        Custom extract, transform, and load processes that prepare your data for analysis and reporting.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                
                <Grid item xs={12} md={6} lg={3}>
                  <Card 
                    sx={{ 
                      height: '100%', 
                      boxShadow: 3, 
                      borderRadius: 2,
                      bgcolor: isDark ? 'var(--color-odd-block-dark)' : 'var(--color-odd-block)',
                      color: isDark ? 'var(--color-text-light)' : 'var(--color-text-dark)'
                    }}
                  >
                    <CardContent sx={{ p: 4, textAlign: 'center' }}>
                      <Box sx={{ mb: 2, fontSize: 60, color: isDark ? '#D6EEFF' : '#3E442B' }}>
                        <FaCloud />
                      </Box>
                      <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
                        Real-time Analytics
                      </Typography>
                      <Typography>
                        Stream processing solutions that deliver insights as events occur, enabling immediate action.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                
                <Grid item xs={12} md={6} lg={3}>
                  <Card 
                    sx={{ 
                      height: '100%', 
                      boxShadow: 3, 
                      borderRadius: 2,
                      bgcolor: isDark ? 'var(--color-odd-block-dark)' : 'var(--color-odd-block)',
                      color: isDark ? 'var(--color-text-light)' : 'var(--color-text-dark)'
                    }}
                  >
                    <CardContent sx={{ p: 4, textAlign: 'center' }}>
                      <Box sx={{ mb: 2, fontSize: 60, color: isDark ? '#D6EEFF' : '#3E442B' }}>
                        <FaCodeBranch />
                      </Box>
                      <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
                        Custom Development
                      </Typography>
                      <Typography>
                        Bespoke data solutions built to address your unique business requirements and technical challenges.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Container>
          </Box>

          {/* Case Studies Section */}
          <Box 
            sx={{ 
              py: { xs: 8, md: 12 },
              background: isDark ? 'var(--color-odd-block-dark)' : 'var(--color-odd-block)'
            }}
          >
            <Container maxWidth="lg">
              <Typography variant="h3" component="h2" sx={{ textAlign: 'center', mb: 2 }}>
                Case Studies
              </Typography>
              <Typography variant="subtitle1" sx={{ textAlign: 'center', mb: 6, maxWidth: 800, mx: 'auto' }}>
                Explore how our custom data pipeline solutions have helped clients overcome challenges and achieve their goals.
              </Typography>
              
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Card 
                    sx={{ 
                      height: '100%', 
                      boxShadow: 3, 
                      borderRadius: 2, 
                      overflow: 'hidden',
                      bgcolor: isDark ? 'var(--color-even-block-dark)' : 'var(--color-even-block)',
                      color: isDark ? 'var(--color-text-light)' : 'var(--color-text-dark)'
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="240"
                      image={caseStudy1Image}
                      alt="Finance sector data pipeline"
                    />
                    <CardContent sx={{ p: 4 }}>
                      <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
                        Financial Data Integration
                      </Typography>
                      <Typography sx={{ mb: 2 }}>
                        Helped a fintech company integrate multiple data sources into a unified dashboard, reducing report generation time by 85%.
                      </Typography>
                      <Button 
                        variant="outlined" 
                        color="primary"
                        sx={{ 
                          borderColor: isDark ? 'var(--color-text-light)' : 'var(--color-primary)',
                          color: isDark ? 'var(--color-text-light)' : 'var(--color-primary)'
                        }}
                      >
                        Read Case Study
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <Card 
                    sx={{ 
                      height: '100%', 
                      boxShadow: 3, 
                      borderRadius: 2, 
                      overflow: 'hidden',
                      bgcolor: isDark ? 'var(--color-even-block-dark)' : 'var(--color-even-block)',
                      color: isDark ? 'var(--color-text-light)' : 'var(--color-text-dark)'
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="240"
                      image={caseStudy2Image}
                      alt="Healthcare data pipeline"
                    />
                    <CardContent sx={{ p: 4 }}>
                      <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
                        Healthcare Analytics Pipeline
                      </Typography>
                      <Typography sx={{ mb: 2 }}>
                        Built a HIPAA-compliant real-time analytics system that improved patient care metrics tracking for a regional hospital network.
                      </Typography>
                      <Button 
                        variant="outlined" 
                        color="primary"
                        sx={{ 
                          borderColor: isDark ? 'var(--color-text-light)' : 'var(--color-primary)',
                          color: isDark ? 'var(--color-text-light)' : 'var(--color-primary)'
                        }}
                      >
                        Read Case Study
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Container>
          </Box>

          {/* CTA Section */}
          <Box 
            sx={{ 
              py: { xs: 8, md: 12 },
              background: isDark ? 'var(--color-even-block-dark)' : 'var(--color-even-block)'
            }}
          >
            <Container maxWidth="md">
              <Box 
                sx={{ 
                  textAlign: 'center', 
                  p: { xs: 4, md: 6 },
                  borderRadius: 4,
                  boxShadow: 4, 
                  background: isDark 
                    ? 'linear-gradient(135deg, #3E442B 0%, #6A7062 100%)' 
                    : 'linear-gradient(135deg, #D6EEFF 0%, #AAADC4 100%)'
                }}
              >
                <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
                  Ready to Transform Your Data Infrastructure?
                </Typography>
                <Typography sx={{ mb: 4, maxWidth: 700, mx: 'auto' }}>
                  Let's discuss how our custom data pipelines can help your business make better decisions, improve efficiency, and drive growth.
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary"
                  size="large"
                  sx={{ 
                    px: 4, 
                    py: 1.5, 
                    borderRadius: 2,
                    bgcolor: isDark ? '#D6EEFF' : '#3E442B',
                    color: isDark ? '#3E442B' : '#D6EEFF',
                    '&:hover': {
                      bgcolor: isDark ? '#AAADC4' : '#6A7062',
                    }
                  }}
                >
                  Contact Us
                </Button>
              </Box>
            </Container>
          </Box>
        </ClientLayout>
      </AnimatedPage>
    </Layout>
  );
}

export default App;