import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


// All UI text and partner images in a single JSON object
const ourPotentialPartnersData = {
  title: "OUR POTENTIAL PARTNERS",
  partners: [
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
  ]
};

const OurPotentialPartners = () => (
  <Box
    sx={{
      width: '100vw',
      bgcolor: '#F6FAFF',
      py: { xs: 3, md: 6 },
      px: 0,
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: { xs: 'flex-start', md: 'center' },
      gap: { xs: 2, md: 0 },
      height  : { xs: 'auto', md: 50 },
      padding: { xs: 1, md: 2 },
    }}
  >
    <Typography
      variant="h6"
      sx={{
        fontWeight: 500,
        color: '#212529',
        letterSpacing: 1,
        fontSize: { xs: 0, sm: 14, md: 14 },
        textAlign: { xs: 'center', md: 'left' },
        width: { xs: '100%', md: '15%' },
        minWidth: 120,
        pl: { xs: 0, md: 2 },
        pr: { xs: 0, md: 0 },
        mb: { xs: 0.5, md: 0 },
      }}
    >
      {ourPotentialPartnersData.title}
    </Typography>
    <Box
      sx={{
        display: 'flex',
        justifyContent: { xs: 'flex-start', md: 'center' },
        alignItems: 'center',
        gap: { xs: 2, md: 6 },
        flexWrap: 'nowrap',
        overflowX: 'auto',
        width: { xs: '100%', md: '82%' },
        pl: 0,
        pb: { xs: 1, md: 0 },
        scrollbarWidth: 'none', // Firefox
        msOverflowStyle: 'none', // IE/Edge
        '&::-webkit-scrollbar': {
          height: 0,
          display: 'none',
          background: 'transparent',
        },
      }}
    >
  {ourPotentialPartnersData.partners.map((img, idx) => (
        <Box
          key={idx}
          sx={{
            height: { xs: 34, sm: 44, md: 40 },
            width: { xs: 80, sm: 100, md: 120 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 2,
            flex: '0 0 auto',
            bgcolor: 'none',
            boxShadow: { xs: '0 1px 4px rgba(0,0,0,0.04)', md: 'none' },
            mx: { xs: 0.5, md: 0 },
          }}
        >
          <img
            src={img}
            alt={`Partner ${idx + 1}`}
            style={{
              maxHeight: 24,
              maxWidth: 60,
              objectFit: 'contain',
              width: '100%',
            }}
          />
        </Box>
      ))}
    </Box>
  </Box>
);

export default OurPotentialPartners;
