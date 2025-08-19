import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const partnerImages = [

  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  
  "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
];

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
    }}
  >
    <Typography
      variant="h6"
      sx={{
        fontWeight: 700,
        color: '#808080',
        letterSpacing: 1,
        fontSize: { xs: 16, sm: 18, md: 20 },
        textAlign: { xs: 'center', md: 'left' },
        width: { xs: '100%', md: '18%' },
        minWidth: 120,
        pl: { xs: 0, md: 6 },
        pr: { xs: 0, md: 0 },
        mb: { xs: 1.5, md: 0 },
      }}
    >
      OUR POTENTIAL PARTNERS
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
        pl: { xs: 1, md: 2 },
        pb: { xs: 1, md: 0 },
      }}
    >
      {partnerImages.map((img, idx) => (
        <Box
          key={idx}
          sx={{
            height: { xs: 44, sm: 54, md: 60 },
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
              maxHeight: 32,
              maxWidth: 80,
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
