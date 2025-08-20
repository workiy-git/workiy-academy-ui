

import React from "react";

import { Box, Typography, Grid, Stack, Button, TextField, IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

const Footer = () => (
  <Box component="footer" sx={{ width: '100%', bgcolor: '#222', color: '#fff', mt: 6, pt: 6, pb: 2 }}>
    <Grid container spacing={4} justifyContent="center" sx={{ px: { xs: 1, md: 8 } }}>
      <Grid item xs={12}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 3, md: 4 }}
          alignItems={{ xs: 'center', md: 'flex-start' }}
          justifyContent="space-between"
          sx={{ width: '100%' }}
        >
          <Box flex={2} minWidth={220} sx={{ width: { xs: '100%', md: 'auto' }, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h5" fontWeight={700} gutterBottom>Workiy Academy</Typography>
            <Typography variant="body2" sx={{ opacity: 0.85 }}>
              Workiy Academy is the leading Software Training Institute in Chennai which offers the latest and trending courses with a practical learning experience. In addition to the core curriculum, Workiy often offers a range of support services to help students succeed. These may include mentorship programs, career services, and access to a network of alumni and industry professionals.
            </Typography>
          </Box>
          <Box flex={1} minWidth={120} sx={{ width: { xs: '100%', sm: 220, md: 'auto' }, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="subtitle1" fontWeight={400} gutterBottom sx={{ color: '#3A86FF' }}>Service</Typography>
            <Stack spacing={1}>
              <Typography variant="body2">CRM</Typography>
              <Typography variant="body2">Mobile Design</Typography>
              <Typography variant="body2">Motion Graphic</Typography>
              <Typography variant="body2">Web Design</Typography>
              <Typography variant="body2">Development</Typography>
              <Typography variant="body2">SEO</Typography>
            </Stack>
          </Box>
          <Box flex={1} minWidth={120} sx={{ width: { xs: '100%', sm: 220, md: 'auto' }, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="subtitle1" fontWeight={400} gutterBottom sx={{ color: '#3A86FF' }}>Company</Typography>
            <Stack spacing={1}>
              <Typography variant="body2">Service</Typography>
              <Typography variant="body2">Courses</Typography>
              <Typography variant="body2">Our Team</Typography>
              <Typography variant="body2">Internship</Typography>
              <Typography variant="body2">Blog</Typography>
              <Typography variant="body2">Contact Us</Typography>
            </Stack>
          </Box>
          <Box flex={2} minWidth={220} sx={{ width: { xs: '100%', md: 'auto' }, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="subtitle1" fontWeight={400} gutterBottom sx={{ color: '#3A86FF' }}>Join a Newsletter</Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} component="form" sx={{ mt: 1, justifyContent: { xs: 'center', sm: 'flex-start' } }}>
              <TextField
                variant="filled"
                size="small"
                label="Your Email"
                placeholder="Enter Your Email"
                InputProps={{
                  disableUnderline: true,
                  sx: {
                    bgcolor: '#4F5A68',
                    borderRadius: 1,
                    color: '#fff',
                    '::placeholder': { color: '#77808B', opacity: 1 },
                  },
                  style: { color: '#fff' }
                }}
                sx={{ flex: 1, minWidth: 180,
                  '& .MuiInputBase-input::placeholder': {
                    color: '#77808B',
                    opacity: 1,
                  },
                  color: '#fff'
                }}
              />
              <Button type="submit" variant="contained" size="small" sx={{ minWidth: 80, px: 2, py: 0.5, fontWeight: 400, fontSize: 14, bgcolor: '#3A86FF', '&:hover': { bgcolor: '#2563c9' } }}>
                Subscribe
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Grid>
    </Grid>
    <Grid container spacing={2} alignItems="center" sx={{ mt: 4, borderTop: '1px solid #444', pt: 2, px: { xs: 1, md: 8 } }}>
      <Grid item xs={12} md={4} sx={{ mb: { xs: 2, md: 0 }, textAlign: { xs: 'center', md: 'left' } }}>
        <Typography variant="body2" sx={{ opacity: 0.7 }}>
          Copyright Workiy {new Date().getFullYear()}
        </Typography>
      </Grid>
      <Grid item xs={12} md={4} sx={{ mb: { xs: 2, md: 0 }, textAlign: { xs: 'center', md: 'center' } }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center" justifyContent="center">
          <Stack direction="row" spacing={1} alignItems="center">
            <LocationOnIcon fontSize="small" sx={{ color: '#3A86FF' }} />
            <Typography variant="body2">#6-183, Ottiyambakkam Road, Chennai - 126</Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <EmailIcon fontSize="small" sx={{ color: '#3A86FF' }} />
            <Typography variant="body2">hr@Workiy.ca</Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <PhoneIcon fontSize="small" sx={{ color: '#3A86FF' }} />
            <Typography variant="body2">+91 9342483624</Typography>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
        <Stack direction="row" spacing={1} alignItems="center" justifyContent={{ xs: 'center', md: 'flex-end' }} sx={{ mb: { xs: 1, md: 0 } }}>
          <IconButton color="inherit" size="small"><InstagramIcon /></IconButton>
          <IconButton color="inherit" size="small"><FacebookIcon /></IconButton>
          <IconButton color="inherit" size="small"><LinkedInIcon /></IconButton>
          <IconButton color="inherit" size="small"><EmailIcon /></IconButton>
        </Stack>
      </Grid>
    </Grid>
  </Box>
);

export default Footer;