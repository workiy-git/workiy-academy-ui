import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const DirectLine = () => {
  return (
    <Box sx={{ width: '100vw', bgcolor: '#fff', py: { xs: 3, md: 8 }, px: { xs: 1, sm: 2, md: 0 } }}>
      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        justifyContent="center"
        alignItems="stretch"
      >
        {/* Left Side: Contact Info */}
        <Grid item xs={12} md={5}>
          <Paper elevation={0} sx={{ bgcolor: 'transparent', p: 0 }}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: '#212529',
                  textAlign: { xs: 'center', md: 'left' },
                  fontSize: { xs: 18, sm: 22, md: 28 },
                }}
              >
                Need a direct line?
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 2,
                  color: '#555',
                  textAlign: { xs: 'center', md: 'left' },
                  fontSize: { xs: 14, sm: 15, md: 16 },
                }}
              >
                We’re here to help you with any questions, feedback, or support you need.
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 3, mb: 0.5, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <PhoneIcon sx={{ color: '#5A69F2', mr: 1 }} />
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#5A69F2', textAlign: 'left' }}>
                  Phone
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ mb: 2, color: '#212529', textAlign: { xs: 'center', md: 'left' }, ml: { xs: 0, md: 4 }, fontSize: { xs: 13, sm: 14 } }}>
                +91 9342483624
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <EmailIcon sx={{ color: '#5A69F2', mr: 1 }} />
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#5A69F2', textAlign: 'left' }}>
                  Email
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ mb: 2, color: '#212529', textAlign: { xs: 'center', md: 'left' }, ml: { xs: 0, md: 4 }, fontSize: { xs: 13, sm: 14 } }}>
                hr@workiy.ca
              </Typography>
            </Box>
          </Paper>
        </Grid>
        {/* Right Side: Location Map */}
        <Grid item xs={12} md={7}>
          <Paper
            elevation={2}
            sx={{
              p: 0,
              borderRadius: 3,
              height: '100%',
              minHeight: { xs: 200, md: 300 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box sx={{ width: '100%', height: { xs: 200, sm: 250, md: 300 }, mx: 'auto' }}>
              <iframe
                title="Workiy Academy Location"
                src="https://www.google.com/maps?q=Workiy+Academy&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: 12 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DirectLine;
