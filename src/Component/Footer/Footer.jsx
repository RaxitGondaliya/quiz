import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#1976d2',
        color: 'white',
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {/* Footer Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box>
              <Link href="#" color="inherit" underline="none">
                Home
              </Link>
            </Box>
            <Box>
              <Link href="#" color="inherit" underline="none">
                Quizzes
              </Link>
            </Box>
            <Box>
              <Link href="#" color="inherit" underline="none">
                Leaderboards
              </Link>
            </Box>
            <Box>
              <Link href="#" color="inherit" underline="none">
                About
              </Link>
            </Box>
          </Grid>

          {/* Social Media Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <IconButton href="#" color="inherit">
                <FacebookIcon />
              </IconButton>
              <IconButton href="#" color="inherit">
                <TwitterIcon />
              </IconButton>
              <IconButton href="#" color="inherit">
                <InstagramIcon />
              </IconButton>
              <IconButton href="#" color="inherit">
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Copyright Section */}
          <Grid item xs={12} sm={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography>
              Email: <Link href="mailto:support@quizapp.com" color="inherit">support@quizapp.com</Link>
            </Typography>
            <Typography>
              Phone: <Link href="tel:+1234567890" color="inherit">+123-456-7890</Link>
            </Typography>
            <Box mt={2}>
              <Typography variant="body2" color="inherit">
                © {new Date().getFullYear()} Quiz App. All rights reserved.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
