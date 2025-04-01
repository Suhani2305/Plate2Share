import React, { useState, useEffect } from 'react';
import { Container, Box, Button, Grid } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { Link } from 'react-router-dom';

const zoomOut = keyframes`
  0% {
    transform: scale(1.2);
  }
  50% {
    transform: scale(1);
  }
`;

const zoomIn = keyframes`
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.2);
  }
`;

const HeroContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
}));

const ImageOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.4))',
  zIndex: 1,
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  overflow: 'hidden',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    animation: `${zoomOut} 5s ease-out, ${zoomIn} 5s ease-in`,
  }
}));

const ContentContainer = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  padding: theme.spacing(8, 0),
  color: '#ffffff',
}));

const Title = styled(motion.div)(({ theme }) => ({
  fontSize: '5rem',
  fontWeight: 900,
  lineHeight: 1.2,
  marginBottom: theme.spacing(3),
  color: '#ffffff',
  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-10px',
    left: 0,
    width: '120px',
    height: '4px',
    background: 'linear-gradient(90deg, #fbbf24,rgb(251, 7, 7))',
    borderRadius: '2px',
  },
  '@media (max-width: 600px)': {
    fontSize: '3.5rem',
  }
}));

const Subtitle = styled(motion.div)(({ theme }) => ({
  fontSize: '1.8rem',
  color: '#ffffff',
  marginBottom: theme.spacing(6),
  maxWidth: '800px',
  lineHeight: 1.8,
  textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
  '@media (max-width: 600px)': {
    fontSize: '1.4rem',
  }
}));

const ButtonContainer = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(4),
  marginBottom: theme.spacing(8),
  '@media (max-width: 600px)': {
    flexDirection: 'column',
    alignItems: 'stretch',
  }
}));

const StyledButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(2, 6),
  fontSize: '1.2rem',
  borderRadius: '50px',
  textTransform: 'none',
  fontWeight: 600,
  backgroundColor: '#fbbf24',
  color: '#000000',
  boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent)',
    transform: 'translateX(-100%)',
    transition: 'transform 0.6s ease',
  },
  '&:hover::before': {
    transform: 'translateX(100%)',
  },
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 25px rgba(0,0,0,0.3)',
  }
}));

const images = [
  '/images/10410943_1536413906576327_7533414068352711562_n.jpg',
  '/images/Covid-feeding-1.jpg',
  '/images/fooddonation1_1ebcdcd1-40b7-41a9-9ef1-c085bc9054ec.webp',
  '/images/WhatsApp-Image-2022-12-21-at-11.18.10-AM-1-1024x768.webp'
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Image rotation timer - now set to 10 seconds to match total zoom animation duration
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Changed to 10000 (10 seconds) to match total zoom animation duration

    return () => {
      clearInterval(imageTimer);
    };
  }, []);

  return (
    <HeroContainer id="hero">
      <AnimatePresence mode='wait'>
        <ImageContainer key={currentImageIndex}>
          <motion.img
            src={images[currentImageIndex]}
            alt="Hero background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </ImageContainer>
      </AnimatePresence>
      <ImageOverlay />
      <ContentContainer>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12}>
            <Title
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Share Food, Share Hope
            </Title>
            <Subtitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Connect hotels with NGOs to reduce food waste and help those in need. 
              Join our mission to make food sharing simple and impactful.
            </Subtitle>
            <ButtonContainer
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link to="/register" style={{ textDecoration: 'none' }}>
                <StyledButton
                  variant="contained"
                  size="large"
                  startIcon={<RestaurantIcon />}
                >
                  List Your Food
                </StyledButton>
              </Link>
              <Link to="/partner" style={{ textDecoration: 'none' }}>
                <StyledButton
                  variant="outlined"
                  size="large"
                  startIcon={<VolunteerActivismIcon />}
                  sx={{
                    color: '#fbbf24',
                    borderColor: '#fbbf24',
                    backgroundColor: 'transparent',
                    '&:hover': {
                      borderColor: '#f59e0b',
                      backgroundColor: 'rgba(251, 191, 36, 0.1)',
                    }
                  }}
                >
                  Partner With Us
                </StyledButton>
              </Link>
            </ButtonContainer>
          </Grid>
        </Grid>
      </ContentContainer>
    </HeroContainer>
  );
};

export default Hero; 