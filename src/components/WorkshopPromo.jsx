import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const WorkshopPromo = () => (
  <Box sx={{ mx: 0, my: 6, p: { xs: 2, md: 6 }, borderRadius: 0, bgcolor: '#FF6363' }}>
    <Grid sx={{ display: 'flex',width: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <Grid item xs={12} md={6} sx={{ display: 'flex',width: '50%', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ width: { xs: '100%', md: '100%' }, maxWidth: 400, borderRadius: 3, overflow: 'hidden', boxShadow: 2 }}>
          <img
            src="https://i.ibb.co/9HyTYn2Q/Group-3625.png"
            alt="Build Your First AI Chatbot"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={6} sx={{ display: 'flex',width: '50%', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' } }}>
        <Box sx={{ textAlign: { xs: 'center', md: 'center' }, width: { xs: '100%', md: '80%' }, color: '#fff' }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: '#fff' }}>
            Build Your First AI Chatbot
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
            Join Our ₹9 Workshop!
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            We believe learning should be accessible to everyone! That’s why we’re offering our exclusive introductory workshop for only ₹9. Whether you’re a beginner or looking to enhance your skills, this is your golden chance.
          </Typography>
          <Button variant="contained" sx={{ bgcolor: '#000', color: '#fff', fontWeight: 700, px: 4, py: 1.5, borderRadius: 2, mr: 2, '&:hover': { bgcolor: '#4051b5' } }}>
            Buy ₹9
          </Button>
          <Typography variant="body2" sx={{ mt: 3, color: '#fff' }}>
            Unlock your learning journey for less than the price of a cup of tea!
          </Typography>
        </Box>
      </Grid>
    </Grid>
  </Box>
);

export default WorkshopPromo;
