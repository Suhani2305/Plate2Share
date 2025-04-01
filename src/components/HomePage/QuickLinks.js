import React from 'react';
import { Box, Typography, Container, Grid, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import GroupsIcon from '@mui/icons-material/Groups';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: '60px 0',
  backgroundColor: '#f8fafc', // Light gray background
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: '700',
  textAlign: 'center',
  marginBottom: '50px',
  color: '#1e293b', // Dark blue
  letterSpacing: '-0.5px',
}));

const CardContainer = styled(Box)(({ theme }) => ({
  background: '#ffffff',
  borderRadius: '16px',
  padding: '40px 30px',
  textAlign: 'center',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  backgroundColor: '#ef4444', // Red
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '28px',
  transition: 'transform 0.3s ease',
  '& svg': {
    fontSize: '40px',
    color: '#ffffff',
  },
  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

const CardTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: '700',
  marginBottom: '16px',
  color: '#1b5e20', // Dark blue
  lineHeight: 1.2,
  letterSpacing: '-0.5px',
}));

const CardDescription = styled(Typography)(({ theme }) => ({
  color: '#64748b', // Gray
  marginBottom: '28px',
  flexGrow: 1,
  fontSize: '1.1rem',
  lineHeight: 1.6,
  maxWidth: '280px',
  margin: '0 auto 28px',
}));

const ActionButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#fbbf24', // Yellow
  color: '#000000',
  padding: '14px 0',
  width: '100%',
  maxWidth: '240px',
  borderRadius: '12px',
  textTransform: 'none',
  fontSize: '1.1rem',
  fontWeight: '600',
  border: 'none',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#f59e0b',
    transform: 'scale(1.05)',
    boxShadow: '0 4px 12px rgba(251, 191, 36, 0.3)',
  },
}));

const QuickLinks = () => {
  const cards = [
    {
      icon: <GroupsIcon />,
      title: 'For NGOs',
      description: 'Register your NGO and connect with restaurants to receive food donations.',
      buttonText: 'Join Us',
    },
    {
      icon: <RestaurantIcon />,
      title: 'For Restaurants',
      description: 'Partner with us to donate excess food and make a difference.',
      buttonText: 'Join Us',
    },
    {
      icon: <VolunteerActivismIcon />,
      title: 'Food Donation',
      description: 'Your one donation can feed someone\'s daily meal, show some kindness.',
      buttonText: 'Donate Now',
    }
  ];

  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <Title>Quick Links</Title>
        <Grid 
          container 
          spacing={4}
          sx={{ 
            justifyContent: 'center',
          }}
        >
          {cards.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CardContainer>
                <IconWrapper>
                  {card.icon}
                </IconWrapper>
                <CardTitle>
                  {card.title}
                </CardTitle>
                <CardDescription>
                  {card.description}
                </CardDescription>
                <ActionButton variant="contained" disableElevation>
                  {card.buttonText}
                </ActionButton>
              </CardContainer>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionContainer>
  );
};

export default QuickLinks; 