import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import GroupsIcon from '@mui/icons-material/Groups';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: '#ffffff',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
    background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.05) 0%, rgba(220, 38, 38, 0.05) 100%)',
    zIndex: 0,
  }
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
    background: 'linear-gradient(90deg, #fbbf24, #1b5e20)',
    borderRadius: '2px',
  }
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.3rem',
  textAlign: 'center',
  color: '#666666',
  marginBottom: theme.spacing(6),
  maxWidth: '800px',
  margin: '0 auto',
  paddingTop: theme.spacing(4),
  lineHeight: 1.8,
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(4),
  maxWidth: '1000px',
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

const ChartWrapper = styled(Box)(({ theme }) => ({
  width: '400px',
  height: '400px',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    width: '300px',
    height: '300px',
  },
}));

const LegendContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  background: '#f8f8f8',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
}));

const LegendItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  borderRadius: '8px',
  background: '#ffffff',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateX(8px)',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  }
}));

const ColorBox = styled(Box)(({ color }) => ({
  width: '24px',
  height: '24px',
  borderRadius: '6px',
  background: color,
  border: '2px solid #ffffff',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
}));

const LegendContent = styled(Box)(({ theme }) => ({
  flex: 1,
}));

const LegendTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  fontWeight: 'bold',
  color: '#333333',
  marginBottom: theme.spacing(0.5),
}));

const LegendDescription = styled(Typography)(({ theme }) => ({
  fontSize: '0.9rem',
  color: '#666666',
}));

const data = [
  { name: 'Meals Shared', value: 35, color: '#dc2626', icon: <RestaurantIcon />, description: '10,000+ meals shared through our platform' },
  { name: 'Active Partners', value: 30, color: '#1b5e20', icon: <GroupsIcon />, description: '200+ restaurants and NGOs actively participating' },
  { name: 'Lives Impacted', value: 35, color: '#fbbf24', icon: <VolunteerActivismIcon />, description: '50,000+ people benefited from food donations' },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <Box sx={{ 
        background: '#ffffff', 
        padding: '12px', 
        borderRadius: '8px', 
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        border: '1px solid #e0e0e0'
      }}>
        <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#333333' }}>
          {payload[0].name}
        </Typography>
        <Typography variant="body2" sx={{ color: '#666666' }}>
          {payload[0].value}% of total impact
        </Typography>
        <Typography variant="body2" sx={{ color: '#666666', mt: 1 }}>
          {payload[0].payload.description}
        </Typography>
      </Box>
    );
  }
  return null;
};

const ImpactStats = () => {
  return (
    <SectionContainer id="impact">
      <Container>
        <Title>Our Impact</Title>
        <Subtitle>
          Making a difference in our community through food sharing and waste reduction
        </Subtitle>
        <ContentWrapper>
          <LegendContainer>
            {data.map((item, index) => (
              <LegendItem key={index}>
                <ColorBox color={item.color} />
                <LegendContent>
                  <LegendTitle>{item.name}</LegendTitle>
                  <LegendDescription>{item.description}</LegendDescription>
                </LegendContent>
              </LegendItem>
            ))}
          </LegendContainer>
          <ChartWrapper>
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                cx={200}
                cy={200}
                innerRadius={80}
                outerRadius={140}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ChartWrapper>
        </ContentWrapper>
      </Container>
    </SectionContainer>
  );
};

export default ImpactStats;
