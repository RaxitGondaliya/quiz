import React, { useRef } from 'react';
import { Box, Typography, Container, Grid, Button, Card, CardContent, Stepper, Step, StepLabel, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; // Import the ExpandMore icon
import quizBackground from '../Image/Quizbackground.jpg'; // Import your local image

const steps = ['Choose a Category', 'Take the Quiz', 'Review Your Results']; // Define steps for the stepper

const Body = () => {
  const quizCategoriesRef = useRef(null); // Create a ref

  const scrollToCategories = () => {
    if (quizCategoriesRef.current) {
      const y = quizCategoriesRef.current.getBoundingClientRect().top + window.scrollY - 100; // Adjust the offset here
      window.scrollTo({ top: y, behavior: 'smooth' }); // Smooth scroll to the adjusted position
    }
  };

  return (
    <>
      {/* Background Section */}
      <Box
        sx={{
          height: '100vh', // Full-screen height for the background image section
          width: '100%',
          backgroundImage: `url(${quizBackground})`, // Use the imported image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          '&:before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark overlay for readability
            backdropFilter: 'blur(3px)', // Blur effect on the background
          },
        }}
      >
        <Container
          maxWidth="md"
          sx={{ position: 'relative', zIndex: 1, color: '#fff' }}
        >
          <Typography variant="h3" gutterBottom sx={{ fontWeight: '600' }}>
            Challenge Your Knowledge
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ mb: 4 }}>
            Discover quizzes on various topics and enhance your skills!
          </Typography>

          {/* Call to Action Buttons */}
          <Grid container spacing={3} justifyContent="center">
            <Grid item>
              <Button variant="contained" sx={{ backgroundColor: '#1976d2', color: '#fff', fontWeight: 'bold' }}>
                Start Quiz
              </Button>
            </Grid>
            <Grid item>
              <Button 
                variant="outlined" 
                sx={{ borderColor: '#fbc02d', color: '#fbc02d', fontWeight: 'bold' }} 
                onClick={scrollToCategories} // Click handler for Learn More button
              >
                Learn More
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Content Section Below the Image */}
      <Box sx={{ py: 5, bgcolor: '#f5f5f5' }} ref={quizCategoriesRef}> {/* Attach ref to this Box */}
        <Container>
          {/* Section 1: Popular Quiz Categories */}
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2', textAlign: 'center', mb: 4 }}>
            Popular Quiz Categories
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {/* Example of colorful feature cards */}
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  backgroundColor: '#f06292',
                  height: 150, // Height for uniformity
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  boxShadow: 3,
                  transition: 'transform 0.3s, box-shadow 0.3s', // Hover effect
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 6,
                  },
                  p: 2, // Added padding
                }}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#fff' }}>
                    Science
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#fff' }}>
                    Quiz on physics, chemistry, and biology.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  backgroundColor: '#4db6ac',
                  height: 150, // Height for uniformity
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  boxShadow: 3,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 6,
                  },
                  p: 2, // Added padding
                }}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#fff' }}>
                    History
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#fff' }}>
                    Test your knowledge of historical events.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  backgroundColor: '#ba68c8',
                  height: 150, // Height for uniformity
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  boxShadow: 3,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 6,
                  },
                  p: 2, // Added padding
                }}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#fff' }}>
                    Sports
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#fff' }}>
                    Quiz yourself on popular sports.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stepper Section */}
      <Box sx={{ py: 5, bgcolor: '#e3f2fd' }}>
        <Container>
          <Stepper activeStep={0} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel 
                  sx={{
                    '& .MuiStepLabel-label': {
                      fontWeight: 'bold',
                      color: '#1976d2', // Change the label color
                    },
                    '& .MuiStepIcon-root': {
                      color: '#1976d2', // Change icon color
                      '&.MuiStepIcon-active': {
                        color: '#fbc02d', // Color when step is active
                      },
                      '&.MuiStepIcon-completed': {
                        color: '#4caf50', // Color for completed step
                      },
                    },
                  }}
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Container>
      </Box>

      {/* Section 2: Call to Action */}
      <Box sx={{ py: 5, bgcolor: '#fff' }}>
        <Container>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2', textAlign: 'center', mb: 4 }}>
            Ready to Get Started?
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center', mb: 4 }}>
            Join thousands of quiz enthusiasts and test your knowledge today!
          </Typography>
          <Grid container justifyContent="center">
            <Button variant="contained" sx={{ backgroundColor: '#1976d2', color: '#fff', fontWeight: 'bold' }}>
              Sign Up Now
            </Button>
          </Grid>
        </Container>
      </Box>

      {/* FAQs Section */}
      <Box sx={{ py: 5, bgcolor: '#f5f5f5' }}>
        <Container>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2', textAlign: 'center', mb: 4 }}>
            Frequently Asked Questions
          </Typography>
          <Accordion sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography sx={{ fontWeight: 'bold' }}>What types of quizzes are available?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We offer a variety of quizzes across multiple categories including Science, History, Sports, and more!
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
              <Typography sx={{ fontWeight: 'bold' }}>How can I track my progress?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                After completing quizzes, you will receive detailed feedback and scores to help you track your progress.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
              <Typography sx={{ fontWeight: 'bold' }}>Can I take quizzes with friends?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes! You can challenge your friends to quizzes and compare your scores.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4a-content" id="panel4a-header">
              <Typography sx={{ fontWeight: 'bold' }}>Is there a cost to take quizzes?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Most quizzes are free to take. However, some premium quizzes may require a subscription.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Container>
      </Box>
    </>
  );
};

export default Body;
