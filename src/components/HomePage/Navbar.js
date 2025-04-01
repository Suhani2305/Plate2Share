import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import DashboardIcon from '@mui/icons-material/Dashboard';

const TopBar = styled(Box)(({ theme }) => ({
  backgroundColor: '#fbbf24',
  padding: '8px 0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '8px 24px',
}));

const SocialIcons = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '12px',
  '& .MuiIconButton-root': {
    color: '#333',
    padding: '4px',
    '&:hover': {
      color: '#000',
    },
  },
}));

const NewsUpdate = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  color: '#333',
  '& .highlight': {
    color: '#ff1744',
    fontWeight: 'bold',
  },
}));

const Helpline = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  color: '#333',
  fontWeight: 'bold',
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#ffffff',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  marginTop: '0',
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

const LogoImage = styled('img')(({ theme }) => ({
  height: '100px',
  width: 'auto',
}));

const LogoText = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '& .title': {
    color: '#1b5e20',
    fontWeight: 'bold',
    fontSize: '2rem',
    textAlign: 'center',
  },
  '& .subtitle': {
    fontSize: '1.2rem',
    color: '#d32f2f',
    marginTop: '4px',
    textAlign: 'center',
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: '#ffffff',
  margin: '0 4px',
  fontWeight: 500,
  backgroundColor: '#1b5e20',
  padding: '8px 16px',
  '&:hover': {
    backgroundColor: '#2e7d32',
  },
}));

const AuthButton = styled(Button)(({ theme }) => ({
  padding: '8px 24px',
  borderRadius: '4px',
  fontWeight: 600,
  textTransform: 'none',
}));

const RegisterButton = styled(AuthButton)(({ theme }) => ({
  backgroundColor: '#ef5350',
  color: '#ffffff',
  '&:hover': {
    backgroundColor: '#e53935',
  },
}));

const LoginButton = styled(AuthButton)(({ theme }) => ({
  backgroundColor: '#4caf50',
  color: '#ffffff',
  marginLeft: '8px',
  '&:hover': {
    backgroundColor: '#43a047',
  },
}));

const MainToolbar = styled(Toolbar)(({ theme }) => ({
  backgroundColor: '#1b5e20',
  color: '#ffffff',
  minHeight: '48px',
  padding: '0 24px',
}));

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userType, setUserType] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if user is logged in and get user type from localStorage
    const userData = localStorage.getItem('userData');
    if (userData) {
      const { type } = JSON.parse(userData);
      setUserType(type);
    }
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLogoClick = () => {
    handleNavigation('/');
    scrollToTop();
  };

  const handleNavigation = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('userData');
    setUserType(null);
    handleNavigation('/');
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Features', path: '/features' },
    { name: 'Impact', path: '/impact' },
    { name: 'Contact Us', path: '/contact' }
  ];

  // Add dashboard link based on user type
  if (userType) {
    navItems.push({
      name: `${userType} Dashboard`,
      path: `/${userType.toLowerCase()}-dashboard`,
      icon: <DashboardIcon />
    });
  }

  const drawer = (
    <List>
      {navItems.map((item) => (
        <ListItem 
          button 
          key={item.name}
          onClick={() => handleNavigation(item.path)}
          selected={location.pathname === item.path}
        >
          {item.icon && <Box sx={{ mr: 1 }}>{item.icon}</Box>}
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
      {userType && (
        <ListItem button onClick={handleLogout}>
          <ListItemText primary="Logout" />
        </ListItem>
      )}
    </List>
  );

  return (
    <>
      <TopBar>
        <SocialIcons>
          <IconButton><FacebookIcon /></IconButton>
          <IconButton><TwitterIcon /></IconButton>
          <IconButton><InstagramIcon /></IconButton>
          <IconButton><LinkedInIcon /></IconButton>
        </SocialIcons>
        
        <NewsUpdate>
          <NotificationsActiveIcon />
          News & Updates:
          <span className="highlight">Exciting news coming up!</span>
        </NewsUpdate>
        
        <Helpline>
          <LocalPhoneIcon />
          Helpline: +91-8840206492
        </Helpline>
      </TopBar>

      <StyledAppBar position="static">
        <Toolbar sx={{ 
          padding: '0px 24px',
          display: 'grid',
          gridTemplateColumns: '120px 1fr 240px',
          gap: '24px',
          alignItems: 'center'
        }}>
          <LogoContainer onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
            <LogoImage src="/images/logo.png" alt="Plates2Share Logo" />
          </LogoContainer>

          <LogoText>
            <Typography className="title">Plates2Share</Typography>
            <Typography className="subtitle">Connecting Hotels with NGOs</Typography>
          </LogoText>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
            {!userType ? (
              <>
                <RegisterButton onClick={() => handleNavigation('/register')}>REGISTER</RegisterButton>
                <LoginButton onClick={() => handleNavigation('/login')}>LOGIN</LoginButton>
              </>
            ) : (
              <Button
                variant="contained"
                color="secondary"
                onClick={handleLogout}
                sx={{ backgroundColor: '#ef5350', '&:hover': { backgroundColor: '#e53935' } }}
              >
                LOGOUT
              </Button>
            )}
          </Box>
        </Toolbar>
        
        <MainToolbar>
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
              {navItems.map((item) => (
                <NavButton 
                  key={item.name}
                  onClick={() => handleNavigation(item.path)}
                  sx={{
                    backgroundColor: location.pathname === item.path ? '#2e7d32' : '#1b5e20',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  {item.icon && item.icon}
                  {item.name}
                </NavButton>
              ))}
            </Box>
          )}
        </MainToolbar>
      </StyledAppBar>
      
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar; 