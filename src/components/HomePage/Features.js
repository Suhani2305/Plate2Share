import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import VerifiedIcon from '@mui/icons-material/Verified';
import NatureIcon from '@mui/icons-material/Nature';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: '#f5f5f5',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
    background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.01))',
    zIndex: 0,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '200%',
    height: '200%',
    background: `
      radial-gradient(circle at center, rgba(255,255,255,0.95) 0%, transparent 70%),
      repeating-linear-gradient(45deg, rgba(76, 175, 80, 0.05) 0%, rgba(76, 175, 80, 0.05) 1px, transparent 1px, transparent 10px),
      repeating-linear-gradient(-45deg, rgba(33, 150, 243, 0.05) 0%, rgba(33, 150, 243, 0.05) 1px, transparent 1px, transparent 10px)
    `,
    zIndex: 0,
    animation: 'gradientShift 15s ease infinite',
  },
  '@keyframes gradientShift': {
    '0%, 100%': {
      transform: 'translate(-50%, -50%) rotate(0deg)',
    },
    '50%': {
      transform: 'translate(-50%, -50%) rotate(5deg)',
    }
  }
}));

const ContentContainer = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '3.5rem',
  fontWeight: 900,
  textAlign: 'center',
  marginBottom: theme.spacing(2),
  color: '#000000',
  position: 'relative',
  textTransform: 'uppercase',
  letterSpacing: '3px',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-15px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '120px',
    height: '4px',
    background: '#000000',
    borderRadius: '2px',
  }
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.3rem',
  textAlign: 'center',
  color: '#666666',
  marginBottom: theme.spacing(10),
  maxWidth: '800px',
  margin: '0 auto',
  paddingTop: theme.spacing(4),
  lineHeight: 1.8,
  opacity: 0.9,
}));

const FeatureGrid = styled(Grid)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: theme.spacing(3),
  maxWidth: '1200px',
  margin: '0 auto',
  padding: theme.spacing(0, 2),
  position: 'relative',
  zIndex: 1,
}));

const FeatureCard = styled(motion.div)(({ theme }) => ({
  background: '#f5f5f5',
  borderRadius: '20px',
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  height: '100%',
  textAlign: 'center',
  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  border: '1px solid rgba(0,0,0,0.05)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
    '& .featureIcon': {
      backgroundColor: '#FFD700',
      '& svg': {
        color: '#ffffff',
        transform: 'rotate(360deg)',
      }
    }
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    width: '150px',
    height: '150px',
    background: 'linear-gradient(45deg, transparent, rgba(76, 175, 80, 0.12))',
    transform: 'rotate(45deg) translate(50%, -100%)',
    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    opacity: 0.5,
  }
}));

const CardContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '100%',
  gap: theme.spacing(3),
}));

const IconContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const TextContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  flex: 1,
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  backgroundColor: '#ef4444',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: '#ffffff',
  transition: 'all 0.3s ease',
  position: 'relative',
  '& svg': {
    fontSize: '40px',
    transition: 'all 0.5s ease',
  }
}));

const FeatureTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.6rem',
  fontWeight: 'bold',
  color: '#1B5E20',
  marginBottom: theme.spacing(2),
  position: 'relative',
  transition: 'all 0.3s ease',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-8px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '40px',
    height: '3px',
    background: '#ef4444',
    borderRadius: '2px',
  },
  '.MuiBox-root:hover &': {
    transform: 'scale(1.05)',
    '&::after': {
      width: '60px',
    }
  }
}));

const FeatureDescription = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: '#666666',
  lineHeight: 1.6,
  maxWidth: '280px',
  margin: '0 auto',
  position: 'relative',
  opacity: 0.9,
}));

const features = [
  {
    icon: <RestaurantIcon />,
    title: 'Easy Food Listing',
    description: 'Simple and quick process for hotels to list their surplus food with detailed information.'
  },
  {
    icon: <AccessTimeIcon />,
    title: 'Real-time Updates',
    description: 'Get instant notifications and track food pickup status in real-time.'
  },
  {
    icon: <VolunteerActivismIcon />,
    title: 'NGO Network',
    description: 'Connect with verified NGOs in your area for efficient food distribution.'
  },
  {
    icon: <TrackChangesIcon />,
    title: 'Impact Tracking',
    description: 'Monitor your contribution to reducing food waste and helping the community.'
  },
  {
    icon: <VerifiedIcon />,
    title: 'Verified Partners',
    description: 'All participating hotels and NGOs are verified for safety and reliability.'
  },
  {
    icon: <NatureIcon />,
    title: 'Eco-friendly',
    description: 'Help reduce carbon footprint by preventing food waste and supporting sustainability.'
  }
];

const Features = () => {
  return (
    <SectionContainer id="features">
      <ContentContainer>
        <Title>Our Features</Title>
        <Subtitle>
          Discover how Plates2Share makes food sharing simple, efficient, and impactful
        </Subtitle>
        <FeatureGrid>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CardContent>
                <IconContainer>
                  <IconWrapper className="featureIcon">
                    {feature.icon}
                  </IconWrapper>
                </IconContainer>
                <TextContainer>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </TextContainer>
              </CardContent>
            </FeatureCard>
          ))}
        </FeatureGrid>
      </ContentContainer>
    </SectionContainer>
  );
};

export default Features; 