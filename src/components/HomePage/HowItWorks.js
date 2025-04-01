import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: '#ffffff',
  position: 'relative',
  overflow: 'hidden',
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
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-15px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '120px',
    height: '4px',
    background: '#dc2626',
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
}));

const StepsGrid = styled(Grid)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: theme.spacing(4),
  maxWidth: '1200px',
  margin: '0 auto',
  padding: theme.spacing(0, 2),
  position: 'relative',
  zIndex: 1,
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: theme.spacing(6),
  },
}));

const StepCard = styled(motion.div)(({ theme }) => ({
  background: '#ffffff',
  borderRadius: '20px',
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  boxShadow: '0 10px 30px rgba(27, 94, 32, 0.1)',
  position: 'relative',
  overflow: 'hidden',
  border: '2px solid rgba(27, 94, 32, 0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 40px rgba(27, 94, 32, 0.15)',
    borderColor: '#1b5e20',
  }
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  background: '#dc2626',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: '#ffffff',
  '& svg': {
    fontSize: '40px',
  }
}));

const StepTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.8rem',
  fontWeight: 'bold',
  color: '#000000',
  marginBottom: theme.spacing(2),
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-8px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '40px',
    height: '3px',
    background: '#dc2626',
    borderRadius: '2px',
  }
}));

const StepDescription = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  color: '#666666',
  lineHeight: 1.6,
  padding: theme.spacing(0, 2),
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    width: '4px',
    height: '80%',
    background: '#1b5e20',
    borderRadius: '2px',
  }
}));

const steps = [
  {
    icon: <RestaurantIcon />,
    title: 'Share Food',
    description: 'Restaurants and individuals share surplus food through our platform'
  },
  {
    icon: <LocalShippingIcon />,
    title: 'Quick Delivery',
    description: 'Efficient logistics ensure food reaches those in need promptly'
  },
  {
    icon: <VolunteerActivismIcon />,
    title: 'Make Impact',
    description: 'Together we reduce food waste and help those in need'
  }
];

const HowItWorks = () => {
  return (
    <SectionContainer id="how-it-works">
      <Container>
        <Title>How It Works</Title>
        <Subtitle>
          Simple steps to make a difference in your community through food sharing
        </Subtitle>
        <StepsGrid>
          {steps.map((step, index) => (
            <StepCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <IconWrapper>{step.icon}</IconWrapper>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </StepCard>
          ))}
        </StepsGrid>
      </Container>
    </SectionContainer>
  );
};

export default HowItWorks; 