import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";


// All UI text, image, and button label in a single JSON object
const workshopPromoData = {
  image: {
    src: "https://i.ibb.co/9HyTYn2Q/Group-3625.png",
    alt: "Build Your First AI Chatbot"
  },
  title: "Build Your First AI Chatbot",
  subtitle: "Join Our ₹9 Workshop!",
  description: "We believe learning should be accessible to everyone! That’s why we’re offering our exclusive introductory workshop for only ₹9. Whether you’re a beginner or looking to enhance your skills, this is your golden chance.",
  button: "Buy ₹9",
  note: "Unlock your learning journey for less than the price of a cup of tea!"
};

const WorkshopPromo = () => (
  <Box
    sx={{
      mx: 0,
      my: { xs: 2, md: 6 },
      p: { xs: 2, sm: 3, md: 6 },
      borderRadius: 0,
      bgcolor: '#FF6363',
    }}
  >
    <Grid
      container
      spacing={0}
      sx={{
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: { xs: '100%', md: '50%' },
          mb: { xs: 2, md: 0 },
        }}
      >
        <Box
          sx={{
            width: { xs: '90%', sm: '80%', md: '100%' },
            maxWidth: 400,
            borderRadius: 3,
            overflow: 'hidden',
            boxShadow: 2,
          }}
        >
          <img
            src={workshopPromoData.image.src}
            alt={workshopPromoData.image.alt}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: { xs: 'center', md: 'flex-start' },
          width: { xs: '100%', md: '50%' },
        }}
      >
        <Box
          sx={{
            textAlign: { xs: 'center', md: 'left' },
            width: { xs: '100%', md: '80%' },
            color: '#fff',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: '#fff',
              fontSize: { xs: 20, sm: 24, md: 32 },
            }}
          >
            {workshopPromoData.title}
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, fontSize: { xs: 16, sm: 18, md: 22 } }}
          >
            {workshopPromoData.subtitle}
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 3, fontSize: { xs: 14, sm: 15, md: 16 } }}
          >
            {workshopPromoData.description}
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: '#000',
              color: '#fff',
              fontWeight: 700,
              px: { xs: 2, sm: 4 },
              py: 1.5,
              borderRadius: 2,
              width: { xs: '100%', sm: 'auto' },
              fontSize: { xs: 14, sm: 16 },
              mr: { xs: 0, sm: 2 },
              '&:hover': { bgcolor: '#808080' },
            }}
          >
            {workshopPromoData.button}
          </Button>
          <Typography
            variant="body2"
            sx={{ mt: 3, color: '#fff', fontSize: { xs: 13, sm: 14 } }}
          >
            {workshopPromoData.note}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  </Box>
);

export default WorkshopPromo;
