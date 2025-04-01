import React from 'react';
import { Container, Typography, Box, Grid, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: '#ffffff',
  position: 'relative',
  overflow: 'hidden',
  minHeight: '500px',
  display: 'flex',
  alignItems: 'center'
}));

const ContentContainer = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
}));

const GridContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    textAlign: 'center',
  },
}));

const TextSection = styled(Box)(({ theme }) => ({
  flex: 1,
  paddingRight: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    paddingRight: 0,
    paddingBottom: theme.spacing(4),
  },
}));

const SmallTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  fontWeight: 500,
  color: '#ef4444',
  marginBottom: theme.spacing(2),
  textTransform: 'uppercase',
  letterSpacing: '2px',
  opacity: 0.9,
}));

const MainTitle = styled(Typography)(({ theme }) => ({
  fontSize: '3.5rem',
  fontWeight: 900,
  color: '#000000',
  marginBottom: theme.spacing(3),
  lineHeight: 1.2,
  [theme.breakpoints.down('md')]: {
    fontSize: '2.5rem',
  },
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  color: '#666666',
  marginBottom: theme.spacing(4),
  lineHeight: 1.8,
  opacity: 0.9,
  maxWidth: '600px',
}));

const LearnMoreButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#ef4444',
  color: '#ffffff',
  padding: '12px 32px',
  borderRadius: '30px',
  fontSize: '1rem',
  fontWeight: 600,
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#dc2626',
  },
}));

const LogoSection = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
}));

const LogoContainer = styled(motion.div)(({ theme }) => ({
  background: '#ffffff',
  borderRadius: '20px',
  padding: theme.spacing(4),
  position: 'relative',
  width: '300px',
  height: '300px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
}));

const EstablishedBadge = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '-30px',
  right: '-30px',
  backgroundColor: '#fbbf24',
  borderRadius: '50%',
  width: '120px',
  height: '120px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#000000',
  fontWeight: 'bold',
  boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
  '& > span:first-of-type': {
    fontSize: '1.1rem',
  },
  '& > span:last-child': {
    fontSize: '1.4rem',
  },
}));

const About = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/about-us');
  };

  return (
    <SectionContainer id="about">
      <ContentContainer>
        <GridContainer container>
          <TextSection>
            <SmallTitle>ABOUT US</SmallTitle>
            <MainTitle>
              Bridging the Gap Between Surplus and Need
            </MainTitle>
            <Description>
              At Plates2Share, we believe that no meal should go to waste while millions sleep hungry. Our platform is built with a simple yet powerful mission—to connect surplus food from restaurants, hotels, and individuals to those who need it the most.
            </Description>
            <LearnMoreButton 
              variant="contained"
              onClick={handleLearnMore}
            >
              Learn More
            </LearnMoreButton>
          </TextSection>
          <LogoSection>
            <LogoContainer
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="/images/logo.png" 
                alt="Plates2Share Logo" 
                style={{ 
                  width: '160%',
                  height: '160%',
                  objectFit: 'contain',
                  padding: '20px'
                }}
              />
              <EstablishedBadge>
                <span>Est.</span>
                <span>2025</span>
              </EstablishedBadge>
            </LogoContainer>
          </LogoSection>
        </GridContainer>
      </ContentContainer>
    </SectionContainer>
  );
};

export default About; 