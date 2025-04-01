import React from 'react';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/HomePage/Navbar';
import Hero from './components/HomePage/Hero';
import QuickLinks from './components/HomePage/QuickLinks';
import About from './components/HomePage/About';
import Features from './components/HomePage/Features';
import ImpactStats from './components/HomePage/ImpactStats';
import HowItWorks from './components/HomePage/HowItWorks';
import AboutUs from './components/AboutUs';
import Footer from './components/HomePage/Footer';
import Contact from './components/HomePage/Contact';
import Gallery from './components/HomePage/Gallery';
import FullGallery from './components/FullGallery';
import Register from './components/Register';
import Login from './components/Login';
import NgoDashboard from './components/dashboards/NgoDashboard';
import HotelDashboard from './components/dashboards/HotelDashboard';
import IndividualDashboard from './components/dashboards/IndividualDashboard';

const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Open Sans", sans-serif',
  },
  palette: {
    primary: {
      main: '#166534',
    },
    secondary: {
      main: '#2196F3',
    },
    background: {
      default: '#F8F9FA',
    },
  },
});

function HomePage() {
  return (
    <>
      <Hero />
      
      <QuickLinks />
      <About />
      <Features />
      <ImpactStats />
      <HowItWorks />
      <Gallery />
    </>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/features" element={<Features />} />
              <Route path="/impact" element={<ImpactStats />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/register" element={<Register/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/gallery" element={<FullGallery />} />
              <Route path="/ngo-dashboard" element={<NgoDashboard />} />
              <Route path="/hotel-dashboard" element={<HotelDashboard />} />
              <Route path="/individual-dashboard" element={<IndividualDashboard />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App; 