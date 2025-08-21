

import React from "react";

import { Box, Typography, Grid, Stack, Button, TextField, IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
const footerData = {
  description: {
    title: "Workiy Academy",
    text: "Workiy Academy is the leading Software Training Institute in Chennai which offers the latest and trending courses with a practical learning experience. In addition to the core curriculum, Workiy often offers a range of support services to help students succeed. These may include mentorship programs, career services, and access to a network of alumni and industry professionals."
  },
  service: [
    "CRM", "Mobile Design", "Motion Graphic", "Web Design", "Development", "SEO"
  ],
  company: [
    "Service", "Courses", "Our Team", "Internship", "Blog", "Contact Us"
  ],
  newsletter: {
    title: "Join a Newsletter",
    label: "Your Email",
    placeholder: "Enter Your Email",
    button: "Subscribe"
  },
  contact: {
    address: "#6-183, Ottiyambakkam Road, Chennai - 126",
    email: "hr@Workiy.ca",
    phone: "+91 9342483624"
  },
  copyright: `Copyright Workiy ${new Date().getFullYear()}`,
  social: [
    { name: 'Instagram', icon: <InstagramIcon /> },
    { name: 'Facebook', icon: <FacebookIcon /> },
    { name: 'LinkedIn', icon: <LinkedInIcon /> },
    { name: 'Email', icon: <EmailIcon /> },
  ],
};

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
                <Typography variant="h5" fontWeight={700} gutterBottom>{footerData.description.title}</Typography>
                <Typography variant="body2" sx={{ opacity: 0.85 }}>
                  {footerData.description.text}
                </Typography>
          </Box>
          <Box flex={1} minWidth={120} sx={{ width: { xs: '100%', sm: 220, md: 'auto' }, textAlign: { xs: 'center', md: 'left' } }}>
                <Typography variant="subtitle1" fontWeight={400} gutterBottom sx={{ color: '#3A86FF' }}>Service</Typography>
                <Stack spacing={1}>
                  {footerData.service.map((item) => (
                    <Typography key={item} variant="body2">{item}</Typography>
                  ))}
                </Stack>
          </Box>
          <Box flex={1} minWidth={120} sx={{ width: { xs: '100%', sm: 220, md: 'auto' }, textAlign: { xs: 'center', md: 'left' } }}>
                <Typography variant="subtitle1" fontWeight={400} gutterBottom sx={{ color: '#3A86FF' }}>Company</Typography>
                <Stack spacing={1}>
                  {footerData.company.map((item) => (
                    <Typography key={item} variant="body2">{item}</Typography>
                  ))}
                </Stack>
          </Box>
          <Box flex={2} minWidth={220} sx={{ width: { xs: '100%', md: 'auto' }, textAlign: { xs: 'center', md: 'left' } }}>
                <Typography variant="subtitle1" fontWeight={400} gutterBottom sx={{ color: '#3A86FF' }}>{footerData.newsletter.title}</Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} component="form" sx={{ mt: 1, justifyContent: { xs: 'center', sm: 'flex-start' } }}>
                  <TextField
                    variant="filled"
                    size="small"
                    label={footerData.newsletter.label}
                    placeholder={footerData.newsletter.placeholder}
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
                    {footerData.newsletter.button}
                  </Button>
                </Stack>
          </Box>
        </Stack>
      </Grid>
    </Grid>
    <Grid container spacing={2} alignItems="center" sx={{ mt: 4, borderTop: '1px solid #444', pt: 2, px: { xs: 1, md: 8 } }}>
      <Grid item xs={12} md={4} sx={{ mb: { xs: 2, md: 0 }, textAlign: { xs: 'center', md: 'left' } }}>
        <Typography variant="body2" sx={{ opacity: 0.7 }}>
              {footerData.copyright}
        </Typography>
      </Grid>
      <Grid item xs={12} md={4} sx={{ mb: { xs: 2, md: 0 }, textAlign: { xs: 'center', md: 'center' } }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center" justifyContent="center">
          <Stack direction="row" spacing={1} alignItems="center">
            <LocationOnIcon fontSize="small" sx={{ color: '#3A86FF' }} />
                <Typography variant="body2">{footerData.contact.address}</Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <EmailIcon fontSize="small" sx={{ color: '#3A86FF' }} />
                <Typography variant="body2">{footerData.contact.email}</Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <PhoneIcon fontSize="small" sx={{ color: '#3A86FF' }} />
                <Typography variant="body2">{footerData.contact.phone}</Typography>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
        <Stack direction="row" spacing={1} alignItems="center" justifyContent={{ xs: 'center', md: 'flex-end' }} sx={{ mb: { xs: 1, md: 0 } }}>
              {footerData.social.map((item, idx) => (
            <IconButton key={item.name} color="inherit" size="small">
              {item.icon}
            </IconButton>
          ))}
        </Stack>
      </Grid>
    </Grid>
  </Box>
);

export default Footer;