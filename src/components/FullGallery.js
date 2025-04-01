import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Modal } from '@mui/material';
import { styled } from '@mui/material/styles';

const GalleryContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: '#ffffff',
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

const ImageBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  paddingTop: '100%', // This creates a perfect square
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  cursor: 'pointer',
  '&:hover img': {
    transform: 'scale(1.1)',
  }
}));

const StyledImage = styled('img')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.3s ease',
});

const ModalImage = styled('img')({
  maxWidth: '90vw',
  maxHeight: '90vh',
  objectFit: 'contain',
});

// Base images array
const baseImages = [
  '/images/10410943_1536413906576327_7533414068352711562_n.jpg',
  '/images/Covid-feeding-1.jpg',
  '/images/fooddonation1_1ebcdcd1-40b7-41a9-9ef1-c085bc9054ec.webp',
  '/images/WhatsApp-Image-2022-12-21-at-11.18.10-AM-1-1024x768.webp',
];

// No need to repeat images as we already have enough
const images = baseImages;

const FullGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageError, setImageError] = useState({});  // Track image loading errors

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleImageError = (index) => {
    setImageError(prev => ({
      ...prev,
      [index]: true
    }));
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <GalleryContainer>
      <Container maxWidth="lg">
        <Title variant="h2">
          <span>OUR GALLERY</span>
        </Title>
        <Grid container spacing={3}>
          {images.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <ImageBox onClick={() => handleImageClick(image)}>
                <StyledImage 
                  src={image} 
                  alt={`Gallery image ${index + 1}`}
                  onError={() => handleImageError(index)}
                  style={{ display: imageError[index] ? 'none' : 'block' }}
                />
              </ImageBox>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Modal
        open={Boolean(selectedImage)}
        onClose={handleClose}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'rgba(0, 0, 0, 0.9)',
        }}
      >
        <Box
          sx={{
            outline: 'none',
            p: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: '95%',
            maxHeight: '95%',
            position: 'relative',
          }}
          onClick={handleClose}
        >
          <ModalImage
            src={selectedImage}
            alt="Enlarged view"
          />
        </Box>
      </Modal>
    </GalleryContainer>
  );
};

export default FullGallery;