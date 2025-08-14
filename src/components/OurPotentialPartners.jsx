import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const partnerImages = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  
  "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
];

const OurPotentialPartners = () => (
  <Box sx={{height:'20px' ,width: '100vw', bgcolor: '#F6FAFF', py: 6, px: 0, display: 'flex', alignItems: 'center' }}>
    <Typography variant="h4" sx={{ fontWeight: 700, color: '#808080', letterSpacing: 1, fontSize: 20,textAlign: 'left', width: { xs: '100%', md: '10%' }, minWidth: 180,pl: { xs: 2, md: 6 }, pr: { xs: 2, md: 0 } }}>
      OUR POTENTIAL PARTNERS
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: { xs: 2, md: 6 }, flexWrap: 'nowrap', overflowX: 'auto', width: '90%', pl: 2 }}>
      {partnerImages.map((img, idx) => (
        <Box key={idx} sx={{ height: 60, width: 120, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 2, flex: '0 0 auto' }}>
          <img src={img} alt={`Partner ${idx + 1}`} style={{ maxHeight: 40, maxWidth: 100, objectFit: 'contain'}} />
        </Box>
      ))}
    </Box>
  </Box>
);

export default OurPotentialPartners;
