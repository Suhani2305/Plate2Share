import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const slideLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const GalleryContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: '#ffffff',
  overflow: 'hidden',
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 700,
  textAlign: 'center',
  color: '#000000',
  marginBottom: theme.spacing(6),
  '& span': {
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-10px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '80px',
      height: '4px',
      background: '#dc2626',
      borderRadius: '2px',
    }
  }
}));

const SlideTrack = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: 'calc(250px * 12)', // Adjust based on number of images
  animation: `${slideLeft} 20s linear infinite`,
  gap: theme.spacing(2),
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  width: '300px',
  flexShrink: 0,
  overflow: 'hidden',
  borderRadius: '8px',
  '& img': {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.1)',
    }
  }
}));

const SeeMoreButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#dc2626',
  color: '#ffffff',
  padding: '12px 32px',
  fontSize: '1.1rem',
  fontWeight: 600,
  borderRadius: '50px',
  textTransform: 'none',
  marginTop: theme.spacing(6),
  '&:hover': {
    backgroundColor: '#b91c1c',
  },
}));

// Base images array
const baseImages = [
  '/images/10410943_1536413906576327_7533414068352711562_n.jpg',
  '/images/Covid-feeding-1.jpg',
  '/images/fooddonation1_1ebcdcd1-40b7-41a9-9ef1-c085bc9054ec.webp',
  '/images/WhatsApp-Image-2022-12-21-at-11.18.10-AM-1-1024x768.webp',
];

// Repeat images 4 times for smoother infinite scroll
const images = [...baseImages, ...baseImages, ...baseImages, ...baseImages];

const Gallery = () => {
  return (
    <GalleryContainer>
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Title variant="h2">
          <span>OUR GALLERY</span>
        </Title>
      </Container>
      <Box sx={{ 
        overflow: 'hidden', 
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100px',
          height: '100%',
          background: 'linear-gradient(to right, #fff, transparent)',
          zIndex: 2,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100px',
          height: '100%',
          background: 'linear-gradient(to left, #fff, transparent)',
          zIndex: 2,
        }
      }}>
        <SlideTrack>
          {images.map((image, index) => (
            <ImageContainer key={index}>
              <img src={image} alt={`Gallery image ${index + 1}`} />
            </ImageContainer>
          ))}
        </SlideTrack>
      </Box>
      <Container maxWidth="lg" sx={{ textAlign: 'center', mt: 4 }}>
        <Link to="/gallery" style={{ textDecoration: 'none' }}>
          <SeeMoreButton variant="contained">
            See Full Gallery
          </SeeMoreButton>
        </Link>
      </Container>
    </GalleryContainer>
  );
};

export default Gallery; 