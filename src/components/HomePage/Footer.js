import React, { useState } from 'react';
import { Container, Typography, Box, Grid, Link, IconButton, Fab, Tooltip, TextField, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import axios from 'axios';

const FooterContainer = styled(Box)(({ theme }) => ({
  background: `linear-gradient(rgba(0, 32, 0, 0.98), rgba(0, 32, 0, 0.98)),
    url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%234CAF50' fill-opacity='0.05'%3E%3Cpath d='M100 0C120 0 140 20 140 40L100 80L60 40C60 20 80 0 100 0zM0 100C0 80 20 60 40 60L80 100L40 140C20 140 0 120 0 100zM200 100C200 120 180 140 160 140L120 100L160 60C180 60 200 80 200 100zM100 200C80 200 60 180 60 160L100 120L140 160C140 180 120 200 100 200z'/%3E%3C/g%3E%3C/svg%3E")`,
  backgroundSize: '400px 400px',
  backgroundPosition: 'center',
  backgroundRepeat: 'repeat',
  padding: theme.spacing(6, 0, 0, 0),
  color: '#ffffff',
  position: 'relative',
}));

const Logo = styled('img')({
  width: '100px',
  height: '100px',
  marginBottom: '1rem',
});

const Tagline = styled(Typography)({
  fontSize: '1.25rem',
  color: '#ffffff',
  marginBottom: '2rem',
  fontWeight: 500,
});

const SocialContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(4),
  '& a': {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-3px)',
      '& .facebook, & .twitter, & .instagram, & .whatsapp, & .email': {
        color: '#FFD700'
      }
    }
  },
  '& .facebook': {
    color: '#4267B2',
  },
  '& .twitter': {
    color: '#1DA1F2',
  },
  '& .instagram': {
    color: '#E1306C',
  },
  '& .whatsapp': {
    color: '#25D366',
  },
  '& .email': {
    color: '#EA4335',
  }
}));

const ContentContainer = styled(Container)(({ theme }) => ({
  maxWidth: '1400px',
  margin: '0 auto',
  paddingBottom: theme.spacing(4),
  '& .shift-right': {
    marginLeft: 'auto',
  }
}));

const FooterTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 500,
  marginBottom: theme.spacing(4),
  color: '#ffffff',
  textTransform: 'uppercase',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.25rem',
    marginBottom: theme.spacing(10),
  }
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: '#ffffff',
  textDecoration: 'none',
  display: 'block',
  marginBottom: theme.spacing(2.5),
  fontSize: '1rem',
  transition: 'all 0.2s ease',
  '&:hover': {
    paddingLeft: theme.spacing(1),
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '0.9rem',
    marginBottom: theme.spacing(2),
  }
}));

const FooterText = styled(Typography)(({ theme }) => ({
  color: '#ffffff',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3),
  fontSize: '1rem',
  '& svg': {
    fontSize: '1.25rem',
  }
}));

const Copyright = styled(Box)(({ theme }) => ({
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  padding: theme.spacing(2, 0),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: theme.spacing(2),
  }
}));

const BottomLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  '& a': {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '0.9rem',
    transition: 'color 0.2s ease',
    '&:hover': {
      color: '#4CAF50',
    }
  }
}));

const ChatButton = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(4),
  right: theme.spacing(4),
  backgroundColor: '#dc2626',
  color: '#ffffff',
  '&:hover': {
    backgroundColor: '#b91c1c',
  },
  zIndex: 1000,
  boxShadow: '0 4px 14px 0 rgba(220, 38, 38, 0.25)',
}));

const ChatWindow = styled(Paper)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(12),
  right: theme.spacing(4),
  width: '380px',
  height: '550px',
  display: 'flex',
  flexDirection: 'column',
  zIndex: 1000,
  overflow: 'hidden',
  boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '12px',
  animation: 'slideIn 0.3s ease-out',
  '@keyframes slideIn': {
    from: {
      opacity: 0,
      transform: 'translateY(20px)'
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)'
    }
  }
}));

const ChatHeader = styled(Box)(({ theme }) => ({
  backgroundColor: '#dc2626',
  color: '#ffffff',
  padding: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: '1px solid rgba(255,255,255,0.1)',
  '& .MuiTypography-subtitle1': {
    fontWeight: 600,
    fontSize: '1.1rem'
  }
}));

const ChatMessages = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(2),
  overflowY: 'auto',
  backgroundColor: '#ffffff',
  '&::-webkit-scrollbar': {
    width: '8px',
  },
  '&::-webkit-scrollbar-track': {
    background: '#f1f1f1',
    borderRadius: '4px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#dc2626',
    borderRadius: '4px',
    '&:hover': {
      background: '#b91c1c',
    }
  }
}));

const MessageBubble = styled(Box)(({ theme, isUser }) => ({
  backgroundColor: isUser ? '#dc2626' : '#f8f9fa',
  color: isUser ? '#ffffff' : '#000000',
  padding: theme.spacing(1.5, 2),
  borderRadius: isUser ? '18px 18px 0 18px' : '18px 18px 18px 0',
  maxWidth: '85%',
  wordWrap: 'break-word',
  boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
  fontSize: '0.95rem',
  lineHeight: 1.4,
  marginBottom: '4px',
  animation: 'fadeIn 0.3s ease-out',
  '@keyframes fadeIn': {
    from: {
      opacity: 0,
      transform: 'translateY(10px)'
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)'
    }
  }
}));

const ChatInputContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: '#ffffff',
  borderTop: '1px solid #e0e0e0',
  display: 'flex',
  gap: theme.spacing(1),
  '& .MuiOutlinedInput-root': {
    borderRadius: '24px',
    backgroundColor: '#f8f9fa',
    '&.Mui-focused': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#dc2626',
      }
    }
  },
  '& .MuiOutlinedInput-input': {
    padding: '12px 16px',
  }
}));

const Message = styled(Box)(({ theme, isUser }) => ({
  marginBottom: theme.spacing(1),
  display: 'flex',
  flexDirection: 'column',
  alignItems: isUser ? 'flex-end' : 'flex-start',
}));

const ContentBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  borderRadius: '8px',
  padding: theme.spacing(5),
  height: '100%',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  '& > *': {
    marginBottom: theme.spacing(4)
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(4),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
  }
}));

// OpenAI API Configuration
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';
const OPENAI_MODEL = 'gpt-3.5-turbo';
const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

// System context for the AI
const SYSTEM_CONTEXT = `You are an AI assistant for Plates2Share, a platform that connects restaurants and food businesses with people in need.
Key information about Plates2Share:
- Mission: Reduce food waste while helping those in need
- Features: Real-time food listing, secure verification, donation tracking, impact measurement
- Process: Restaurants register surplus food → We verify → NGOs claim → Food is distributed
- Contact: Located at LPU, Phagwara, Punjab | Phone: +91 9999999999 | Email: info.plates2share@gmail.com
- Available 24/7 for support
Please provide helpful, friendly responses about our platform, services, and impact.
Keep responses concise but informative.`;

// Fallback responses for common questions
const getFallbackResponse = (userMessage) => {
  const message = userMessage.toLowerCase();
  
  const responses = {
    about: {
      keywords: ['what is', 'about', 'tell me about', 'plates2share', 'platform'],
      response: "Plates2Share is a platform that connects restaurants and food businesses with people in need, helping reduce food waste while feeding those who need it most. We make it easy to share surplus food with the community."
    },
    howItWorks: {
      keywords: ['how', 'work', 'process', 'steps', 'use', 'donate', 'receive'],
      response: "Here's how Plates2Share works:\n1. Restaurants register surplus food\n2. We verify and list the available food\n3. NGOs and verified users can claim the food\n4. Food is collected and distributed to those in need\nIt's that simple!"
    },
    features: {
      keywords: ['features', 'offer', 'services', 'provide', 'benefits'],
      response: "Plates2Share offers:\n• Real-time food listing\n• Secure verification system\n• Easy donation tracking\n• Impact measurement\n• Community engagement\n• 24/7 support"
    },
    impact: {
      keywords: ['impact', 'difference', 'achievement', 'help', 'community'],
      response: "Our impact:\n• Reduced food waste\n• Fed thousands of people in need\n• Connected local communities\n• Supported sustainable practices\n• Created a more equitable food system"
    },
    contact: {
      keywords: ['contact', 'reach', 'support', 'phone', 'email', 'location', 'address'],
      response: "You can reach us at:\n📍 LPU, Phagwara, Punjab, India\n📞 +91 9999999999\n📧 info.plates2share@gmail.com\nWe're available 24/7 to assist you!"
    },
    register: {
      keywords: ['register', 'join', 'sign up', 'become', 'partner'],
      response: "To register with Plates2Share:\n1. Click 'Sign Up' on our homepage\n2. Choose your role (Restaurant/NGO/Volunteer)\n3. Fill in your details\n4. Complete verification\nNeed help? We're here to assist!"
    }
  };

  // Check message against each category
  for (const category of Object.values(responses)) {
    if (category.keywords.some(keyword => message.includes(keyword))) {
      return category.response;
    }
  }

  // Default response
  return "I can help you with:\n• Information about Plates2Share\n• How to donate or receive food\n• Registration process\n• Our features and impact\n• Contact information\n\nPlease let me know what you'd like to know more about!";
};

const getAIResponse = async (userMessage, conversationHistory = []) => {
  try {
    // First try to get a fallback response
    const fallbackResponse = getFallbackResponse(userMessage);
    if (fallbackResponse) {
      return fallbackResponse;
    }

    // If no fallback response matches, try OpenAI API
    const response = await axios.post(OPENAI_API_URL, {
      model: OPENAI_MODEL,
      messages: [
        { role: "system", content: SYSTEM_CONTEXT },
        ...conversationHistory,
        { role: "user", content: userMessage }
      ],
      temperature: 0.7,
      max_tokens: 200,
      presence_penalty: 0.6,
      frequency_penalty: 0.5
    }, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Chat Error:', error.response?.data || error.message);
    
    // Return a helpful fallback response instead of error message
    return getFallbackResponse(userMessage);
  }
};

const Footer = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      text: "Hello! I'm your Plates2Share AI assistant. I can help you with:\n• Information about our platform\n• How to donate or receive food\n• Registration process\n• Our impact and features\n• Contact details and support\n\nHow can I assist you today?", 
      isUser: false 
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [conversationHistory, setConversationHistory] = useState([]);

  const handleChatClick = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isTyping) return;

    const userMessage = { text: inputMessage, isUser: true };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    try {
      // Simulate network delay for better UX
      const aiResponse = await new Promise((resolve) => {
        setTimeout(async () => {
          const response = await getAIResponse(inputMessage, conversationHistory);
          resolve(response);
        }, 500);
      });
      
      setConversationHistory(prev => [
        ...prev,
        { role: "user", content: inputMessage },
        { role: "assistant", content: aiResponse }
      ]);

      setMessages(prev => [...prev, { text: aiResponse, isUser: false }]);
      
      // Scroll to bottom after new message
      const chatMessages = document.querySelector('.chat-messages');
      if (chatMessages) {
        setTimeout(() => {
          chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 100);
      }
    } catch (error) {
      console.error('Chat Error:', error);
      setMessages(prev => [...prev, { 
        text: "I apologize, but I'm having trouble connecting right now. Please try again in a moment.", 
        isUser: false 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <FooterContainer>
        <ContentContainer>
          <Grid container spacing={{ xs: 3, sm: 4, md: 6 }} justifyContent="flex-end">
            {/* Logo and Social Section */}
            <Grid item xs={12} md={3}>
              <Box sx={{ mb: { xs: 3, md: 0 } }}>
                <Logo src="/images/logo.png" alt="Plates2Share Logo" />
                <Tagline>
                  Plates2Share
                </Tagline>
                <SocialContainer>
                  <Link href="#" aria-label="Facebook">
                    <FacebookIcon className="facebook" />
                  </Link>
                  <Link href="#" aria-label="Twitter">
                    <TwitterIcon className="twitter" />
                  </Link>
                  <Link href="#" aria-label="Instagram">
                    <InstagramIcon className="instagram" />
                  </Link>
                  <Link href="#" aria-label="WhatsApp">
                    <WhatsAppIcon className="whatsapp" />
                  </Link>
                  <Link href="#" aria-label="Email">
                    <EmailIcon className="email" />
                  </Link>
                </SocialContainer>
              </Box>
            </Grid>

            {/* Quick Links Section */}
            <Grid item xs={12} md={4} className="shift-right">
              <ContentBox>
                <FooterTitle>Quick Links</FooterTitle>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <FooterLink href="/">Home</FooterLink>
                    <FooterLink href="/how-it-works">How It Works</FooterLink>
                    <FooterLink href="/features">Features</FooterLink>
                  </Grid>
                  <Grid item xs={6}>
                    <FooterLink href="/impact">Impact</FooterLink>
                    <FooterLink href="/contact">Contact Us</FooterLink>
                  </Grid>
                </Grid>
              </ContentBox>
            </Grid>

            {/* Contact Section */}
            <Grid item xs={12} md={4}>
              <ContentBox>
                <FooterTitle>Contact Us</FooterTitle>
                <Box sx={{ '& > *:not(:last-child)': { mb: 3 } }}>
                  <FooterText>
                    <LocationOnIcon />
                    LPU, Phagwara, Punjab, India
                  </FooterText>
                  <FooterText>
                    <PhoneIcon />
                    +91 9999999999
                  </FooterText>
                  <FooterText>
                    <EmailIcon />
                    info.plates2share@gmail.com
                  </FooterText>
                  <FooterText>
                    <AccessTimeIcon />
                    24/7 Support
                  </FooterText>
                </Box>
              </ContentBox>
            </Grid>
          </Grid>
        </ContentContainer>

        <ContentContainer>
          <Copyright>
            <Typography variant="body2">
              © {new Date().getFullYear()} All Rights Reserved | Crafted with ❤️ by Suhani
            </Typography>
            <BottomLinks>
              <Link href="/">Home</Link>
              <Link href="/how-it-works">How It Works</Link>
              <Link href="/features">Features</Link>
              <Link href="/impact">Impact</Link>
              <Link href="/contact">Contact Us</Link>
            </BottomLinks>
          </Copyright>
        </ContentContainer>
      </FooterContainer>

      <Tooltip 
        title={isChatOpen ? "" : "Need help? Chat with us!"} 
        placement="left"
        arrow
      >
        <ChatButton
          aria-label="chat"
          onClick={handleChatClick}
          size="large"
          sx={{
            transition: 'transform 0.2s',
            '&:hover': {
              transform: 'scale(1.05)'
            }
          }}
        >
          {isChatOpen ? <CloseIcon sx={{ fontSize: 24 }} /> : <ChatIcon sx={{ fontSize: 28 }} />}
        </ChatButton>
      </Tooltip>

      {isChatOpen && (
        <ChatWindow>
          <ChatHeader>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <SmartToyIcon />
              <Typography variant="subtitle1">Plates2Share Assistant</Typography>
            </Box>
            <IconButton 
              size="small" 
              onClick={handleChatClick}
              sx={{ 
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              <CloseIcon />
            </IconButton>
          </ChatHeader>

          <ChatMessages className="chat-messages">
            {messages.map((message, index) => (
              <Message key={index} isUser={message.isUser}>
                <MessageBubble isUser={message.isUser}>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      whiteSpace: 'pre-line',
                      fontWeight: message.isUser ? 400 : 500
                    }}
                  >
                    {message.text}
                  </Typography>
                </MessageBubble>
              </Message>
            ))}
            {isTyping && (
              <Message isUser={false}>
                <MessageBubble isUser={false}>
                  <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                    <Typography variant="body2">Typing</Typography>
                    <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
                      {[1, 2, 3].map((dot) => (
                        <Box
                          key={dot}
                          sx={{
                            width: 4,
                            height: 4,
                            borderRadius: '50%',
                            backgroundColor: '#666',
                            animation: 'bounce 1.4s infinite',
                            animationDelay: `${(dot - 1) * 0.16}s`
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </MessageBubble>
              </Message>
            )}
          </ChatMessages>

          <ChatInputContainer>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Type your message..."
              size="small"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isTyping}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused': {
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#dc2626',
                      borderWidth: 2
                    }
                  }
                }
              }}
            />
            <IconButton 
              onClick={handleSendMessage}
              disabled={isTyping || !inputMessage.trim()}
              sx={{ 
                backgroundColor: '#dc2626',
                color: 'white',
                width: '40px',
                height: '40px',
                '&:hover': {
                  backgroundColor: '#b91c1c',
                },
                '&.Mui-disabled': {
                  backgroundColor: '#f87171',
                  color: '#ffffff80'
                },
                transition: 'all 0.2s'
              }}
            >
              <SendIcon />
            </IconButton>
          </ChatInputContainer>
        </ChatWindow>
      )}
    </>
  );
};

export default Footer; 