import React from 'react';
import { Container, Typography, Box, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const PageContainer = styled(Box)({
  minHeight: '100vh',
  background: '#ffffff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '24px',
});

const HeaderSection = styled(Box)(({ theme }) => ({
  background: '#166534',
  padding: theme.spacing(4),
  textAlign: 'center',
  color: '#ffffff',
  marginBottom: theme.spacing(8),
  marginTop: theme.spacing(4),
  marginLeft: theme.spacing(8),
  marginRight: theme.spacing(8),
  borderRadius: '8px',
  width: '80%',
  maxWidth: '1200px',
}));

const MainTitle = styled(Typography)(({ theme }) => ({
  fontSize: '3rem',
  fontWeight: 700,
}));

const MainSection = styled(Box)(({ theme }) => ({
  width: '80%',
  maxWidth: '1200px',
  padding: theme.spacing(6),
  background: '#f3f4f6',
  borderRadius: '16px',
  marginLeft: theme.spacing(8),
  marginRight: theme.spacing(8),
}));

const ContentBox = styled(Box)(({ theme }) => ({
  background: '#ffffff',
  borderRadius: '16px',
  padding: theme.spacing(6),
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  marginBottom: theme.spacing(6),
  width: '100%',
}));

const FormTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 600,
  color: '#166534',
  marginBottom: theme.spacing(2),
  textAlign: 'center',
}));

const FormSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  color: '#666666',
  marginBottom: theme.spacing(6),
  textAlign: 'center',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    '&:hover fieldset': {
      borderColor: '#166534',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#166534',
    },
  },
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#166534',
  color: '#ffffff',
  padding: '15px 0',
  fontSize: '1.2rem',
  borderRadius: '8px',
  width: '100%',
  maxWidth: '400px',
  margin: '0 auto',
  display: 'block',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#14532d',
  },
}));

const InfoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4),
  maxWidth: '600px',
  margin: '0 auto',
}));

const InfoItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(3),
  '& svg': {
    fontSize: '32px',
    color: '#166534',
  },
}));

const InfoText = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  color: '#4b5563',
  lineHeight: 1.6,
}));

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <PageContainer>
      {/* First Main Div */}
      <HeaderSection>
        <MainTitle>Contact Us</MainTitle>
      </HeaderSection>

      {/* Second Main Div */}
      <MainSection>
        {/* Form Box */}
        <ContentBox>
          <FormTitle>We'd Love to Hear From You</FormTitle>
          <FormSubtitle>For Online Inquiries</FormSubtitle>
          <form onSubmit={handleSubmit}>
            <Box sx={{ maxWidth: '600px', margin: '0 auto' }}>
              <StyledTextField
                fullWidth
                label="Your Name"
                variant="outlined"
                placeholder="Enter your name"
                required
              />
              <StyledTextField
                fullWidth
                label="Your Email"
                variant="outlined"
                type="email"
                placeholder="Enter your email"
                required
              />
              <StyledTextField
                fullWidth
                label="Your Message"
                variant="outlined"
                multiline
                rows={6}
                placeholder="Write your message here..."
                required
              />
              <SubmitButton type="submit" variant="contained">
                Send Message
              </SubmitButton>
            </Box>
          </form>
        </ContentBox>

        {/* Contact Info Box */}
        <ContentBox>
          <FormTitle>Contact Information</FormTitle>
          <InfoContainer>
            <InfoItem>
              <LocationOnIcon />
              <InfoText>
                LPU, Phagwara, Punjab, India
              </InfoText>
            </InfoItem>
            <InfoItem>
              <PhoneIcon />
              <InfoText>+91 9999999999</InfoText>
            </InfoItem>
            <InfoItem>
              <EmailIcon />
              <InfoText>info.plates2share@gmail.com</InfoText>
            </InfoItem>
          </InfoContainer>
        </ContentBox>
      </MainSection>
    </PageContainer>
  );
};

export default Contact; 