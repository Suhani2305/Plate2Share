import React, { useState } from 'react';
import { Container, Typography, Box, Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const OuterWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  background: '#ffffff',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  margin: theme.spacing(0, 12),
  maxWidth: 'calc(100% - 192px)',
}));

const PageTitle = styled(Box)(({ theme }) => ({
  background: '#166534',
  padding: theme.spacing(4),
  textAlign: 'center',
  color: '#ffffff',
  '& h1': {
    fontSize: '3.5rem',
    fontWeight: 700,
    margin: 0,
  }
}));

const MainTitleSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 4),
  textAlign: 'center',
}));

const ContentSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 6, 6),
}));

const GradientTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2.8rem',
  fontWeight: 700,
  background: 'linear-gradient(90deg, #166534 0%, #f97316 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textAlign: 'center',
  marginBottom: theme.spacing(3),
}));

const OrangeMissionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 700,
  color: '#ea580c',
  textAlign: 'center',
  marginBottom: theme.spacing(3),
}));

const CenteredText = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  color: '#4b5563',
  lineHeight: 1.8,
  textAlign: 'center',
  maxWidth: '1000px',
  margin: '0 auto',
  marginBottom: theme.spacing(4),
}));

const SectionCard = styled(Box)(({ theme, bgcolor }) => ({
  padding: theme.spacing(6),
  background: bgcolor || '#ffffff',
  borderRadius: '12px',
  marginBottom: theme.spacing(5),
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.8rem',
  fontWeight: 600,
  color: '#1f2937',
  marginBottom: theme.spacing(2),
}));

const SectionText = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  color: '#4b5563',
  lineHeight: 1.8,
}));

const BulletList = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  marginBottom: theme.spacing(3),
  '& li': {
    fontSize: '1.1rem',
    color: '#4b5563',
    lineHeight: 1.7,
    marginBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    position: 'relative',
    '&::before': {
      content: '"•"',
      position: 'absolute',
      left: 0,
      color: '#166534',
    }
  }
}));

const DonateCard = styled(Box)(({ theme }) => ({
  background: '#ffffff',
  borderRadius: '12px',
  padding: theme.spacing(6, 4),
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
  maxWidth: '600px',
  margin: '0 auto',
  marginTop: theme.spacing(6),
}));

const DonateTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2.2rem',
  fontWeight: 700,
  color: '#1f2937',
  textAlign: 'center',
  marginBottom: theme.spacing(3),
}));

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
});

const DonateButton = styled(Button)(({ theme }) => ({
  background: '#166534',
  color: '#ffffff',
  padding: '16px 48px',
  borderRadius: '50px',
  fontSize: '1.1rem',
  fontWeight: 600,
  textTransform: 'none',
  '&:hover': {
    background: '#14532d',
  },
}));

const TaglineText = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: '#6b7280',
  fontStyle: 'italic',
  textAlign: 'center',
  marginTop: theme.spacing(3),
}));

const DonateFormContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  maxWidth: '500px',
  background: '#ffffff',
  borderRadius: '8px',
  padding: theme.spacing(4),
  boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
  zIndex: 1000,
}));

const Overlay = styled(Box)({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 999,
});

const FormTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.8rem',
  fontWeight: 600,
  color: '#166534',
  marginBottom: theme.spacing(4),
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: '#166534',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#166534',
    },
  },
}));

const PayButton = styled(Button)(({ theme }) => ({
  background: '#166534',
  color: '#ffffff',
  padding: '12px',
  width: '100%',
  fontSize: '1.1rem',
  fontWeight: 600,
  marginTop: theme.spacing(2),
  '&:hover': {
    background: '#14532d',
  },
}));

const PaymentMethodsImg = styled('img')({
  width: '100%',
  maxHeight: '40px',
  objectFit: 'contain',
  marginTop: '16px',
});

const ThankYouContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(4),
  '& h2': {
    color: '#166534',
    fontSize: '2rem',
    marginBottom: theme.spacing(2)
  },
  '& p': {
    color: '#4b5563',
    fontSize: '1.1rem',
    lineHeight: 1.6
  }
}));

const AboutUs = () => {
  const [showDonateForm, setShowDonateForm] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState({
    amount: '',
    email: '',
    phone: '',
    details: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDonateClick = () => {
    setShowDonateForm(true);
  };

  const handlePayClick = () => {
    if (!formData.amount || !formData.email || !formData.phone || !formData.details) {
      alert('Please fill in all fields');
      return;
    }

    // Show thank you message
    setShowDonateForm(false);
    setShowThankYou(true);
    
    // Reset form data
    setFormData({
      amount: '',
      email: '',
      phone: '',
      details: ''
    });

    // Hide thank you message after 5 seconds
    setTimeout(() => {
      setShowThankYou(false);
    }, 5000);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <OuterWrapper>
        {/* First Div - Header */}
        <PageTitle>
          <h1>About Us</h1>
        </PageTitle>

        {/* Second Div - Main Title Section */}
        <MainTitleSection>
          <GradientTitle>About Plates2Share</GradientTitle>
          <CenteredText>
            At Plates2Share, we strive to reduce food waste and provide meals to those in need. 
            Our platform connects surplus food from restaurants, hotels, and individuals to NGOs 
            and community kitchens, ensuring that excess food reaches the right hands instead of going to waste.
          </CenteredText>
          <OrangeMissionTitle>Our Mission</OrangeMissionTitle>
          <CenteredText>
            Our mission is to create a world where no one sleeps hungry. We believe that food is a right, 
            not a privilege, and our goal is to ensure that surplus food is used efficiently to feed the needy.
          </CenteredText>
        </MainTitleSection>

        {/* Third Div - Content Sections */}
        <ContentSection>
          <SectionCard bgcolor="#f8fafc">
            <SectionTitle>Food Donation Drive</SectionTitle>
            <SectionText>
              India faces a dual challenge: hunger and food wastage. Through our Food Donation Drive, 
              we work with food businesses and individuals to ensure that surplus food reaches those who need it most.
            </SectionText>
            <SectionText>
              📦 Impact so far:
            </SectionText>
            <BulletList>
              <li>Donated over 50,000+ meals</li>
              <li>Partnered with 200+ food providers (hotels, restaurants, caterers)</li>
              <li>Connected with 150+ NGOs to expand food distribution</li>
            </BulletList>
          </SectionCard>

          <SectionCard sx={{ 
            background: 'linear-gradient(90deg, #166534 0%, #ea580c 100%)',
            color: '#ffffff'
          }}>
            <SectionTitle sx={{ color: '#ffffff' }}>Community Meal Distribution</SectionTitle>
            <SectionText sx={{ color: '#ffffff' }}>
              To support homeless individuals, low-income families, and daily wage workers, 
              we conduct regular meal distribution programs in urban and rural areas.
            </SectionText>
            <SectionText sx={{ color: '#ffffff' }}>
              📍 Achievements:
            </SectionText>
            <BulletList>
              <li>Established 25+ food distribution centers</li>
              <li>Served over 100,000+ meals to people in need</li>
            </BulletList>
          </SectionCard>

          <SectionCard bgcolor="#f0fdf4">
            <SectionTitle>Food Waste Awareness</SectionTitle>
            <SectionText>
              Millions of meals go to waste every day due to lack of awareness. Our Zero Food Waste Campaign focuses on:
            </SectionText>
            <BulletList>
              <li>Mindful consumption and portion control</li>
              <li>Proper storage techniques to prevent food spoilage</li>
              <li>Encouraging food businesses to donate excess food</li>
            </BulletList>
            <SectionText>
              We have conducted 100+ awareness sessions in schools, offices, and communities to promote sustainable food habits.
            </SectionText>
          </SectionCard>

          <SectionCard bgcolor="#f0f9ff">
            <SectionTitle>Plates2Share Mobile App</SectionTitle>
            <SectionText>
              We have developed an easy-to-use mobile app that enables:
            </SectionText>
            <BulletList>
              <li>Restaurants and individuals to list surplus food</li>
              <li>NGOs to request and schedule pickups</li>
              <li>Live tracking and seamless coordination</li>
            </BulletList>
            <SectionText>
              This technology-driven solution makes food redistribution faster and more efficient.
            </SectionText>
          </SectionCard>

          <SectionCard bgcolor="#f0fdf4">
            <SectionTitle>Emergency Food Relief</SectionTitle>
            <SectionText>
              During crises such as natural disasters, pandemics, or economic hardships, 
              we ensure that affected families receive timely food assistance.
            </SectionText>
            <SectionText>
              ⏳ Our Response Efforts:
            </SectionText>
            <BulletList>
              <li>Provided emergency food to 50,000+ individuals during COVID-19</li>
              <li>Set up rapid distribution points in high-need areas</li>
            </BulletList>
          </SectionCard>

          {/* Donate Section at the end */}
          <DonateCard>
            <DonateTitle>Join Our Movement</DonateTitle>
            <Box sx={{ textAlign: 'center' }}>
              <CenteredText sx={{ mb: 4 }}>
                Your contribution can change lives. Choose an amount to donate and make a difference.
              </CenteredText>
              <DonateButton onClick={handleDonateClick}>
                Donate Now
              </DonateButton>
              <TaglineText>
                Because every plate shared is a step towards a better world.
              </TaglineText>
            </Box>
          </DonateCard>
        </ContentSection>
      </OuterWrapper>

      {/* Donation Form Modal */}
      {showDonateForm && (
        <>
          <Overlay onClick={() => setShowDonateForm(false)} />
          <DonateFormContainer>
            <FormTitle>Donation Details</FormTitle>
            <StyledTextField
              fullWidth
              label="Amount (₹)"
              name="amount"
              type="number"
              value={formData.amount}
              onChange={handleInputChange}
              placeholder="Enter Amount"
              InputProps={{
                startAdornment: '₹',
              }}
            />
            <StyledTextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
            />
            <StyledTextField
              fullWidth
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
            />
            <StyledTextField
              fullWidth
              label="Details"
              name="details"
              multiline
              rows={3}
              value={formData.details}
              onChange={handleInputChange}
              placeholder="Full name + Aadhar no + Address"
            />
            <PayButton onClick={handlePayClick}>
              Submit Donation Details
            </PayButton>
          </DonateFormContainer>
        </>
      )}

      {/* Thank You Modal */}
      {showThankYou && (
        <>
          <Overlay onClick={() => setShowThankYou(false)} />
          <DonateFormContainer>
            <ThankYouContainer>
              <h2>Thank You for Your Support!</h2>
              <p>We have received your donation details. Our team will contact you soon with further information about completing your donation.</p>
              <p>Amount: ₹{formData.amount}</p>
              <PayButton onClick={() => setShowThankYou(false)} sx={{ mt: 3 }}>
                Close
              </PayButton>
            </ThankYouContainer>
          </DonateFormContainer>
        </>
      )}
    </Container>
  );
};

export default AboutUs; 