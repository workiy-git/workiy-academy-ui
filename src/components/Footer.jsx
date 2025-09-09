import React, { useState } from "react";
import axios from "axios";
import config from "../config/config";

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
    "Site Map", "Courses", "Our Team", "Internship", "Blog", "Contact Us"
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

const newsletterSignupData = {
  thankYou: "Thank you for subscribing!",
};

const Footer = () => {
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const [submittedEmail, setSubmittedEmail] = React.useState("");
  const [successMsg, setSuccessMsg] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.apiUrl}/newsletter`, { email });
      setSubmitted(true);
      setSubmittedEmail(email);
      setSuccessMsg("Thank you for subscribing!");
      console.log("Success:", response.data);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert("Subscription failed. Please try again.");
    }
  };

  return (
    <Box component="footer" sx={{ width: '100%', bgcolor: '#222', color: '#fff', mt: 6, pt: 6, pb: 2 }}>
      <Grid container spacing={4} justifyContent="center" sx={{ px: { xs: 1, md: 8 } }}>
        <Grid item xs={12}>
          {/* Desktop: original layout, Mobile: custom layout */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Stack direction="row" spacing={4} alignItems="flex-start" justifyContent="space-between" sx={{ width: '100%' }}>
              {/* Description */}
              <Box flex={2} minWidth={220} sx={{ width: { md: 'auto' }, textAlign: 'left' }}>
                <Typography variant="h5" fontWeight={700} gutterBottom>{footerData.description.title}</Typography>
                <Typography variant="body2" sx={{ opacity: 0.85 }}>{footerData.description.text}</Typography>
              </Box>
              {/* Service and Company */}
              <Box flex={1} minWidth={120} sx={{ width: { md: 'auto' }, textAlign: 'left' }}>
                <Typography variant="subtitle1" fontWeight={400} gutterBottom sx={{ color: '#3A86FF' }}>Service</Typography>
                <Stack spacing={1}>
                  {footerData.service.map((item) => (
                    <Typography key={item} variant="body2">{item}</Typography>
                  ))}
                </Stack>
              </Box>
              <Box flex={1} minWidth={120} sx={{ width: { md: 'auto' }, textAlign: 'left' }}>
                <Typography variant="subtitle1" fontWeight={400} gutterBottom sx={{ color: '#3A86FF' }}>Company</Typography>
                <Stack spacing={1}>
                  {footerData.company.map((item) => (
                    <Typography key={item} variant="body2">{item}</Typography>
                  ))}
                </Stack>
              </Box>
              {/* Newsletter */}
              <Box flex={2} minWidth={220} sx={{ width: { md: 'auto' }, textAlign: 'left' }}>
                <Typography variant="subtitle1" fontWeight={400} gutterBottom sx={{ color: '#3A86FF' }}>{footerData.newsletter.title}</Typography>
                <Stack direction="row" spacing={1} component="form" sx={{ mt: 1, justifyContent: 'flex-start' }} onSubmit={handleSubmit}>
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button type="submit" variant="contained" size="small" sx={{ minWidth: 80, px: 2, py: 0.5, fontWeight: 400, fontSize: 14, bgcolor: '#3A86FF', '&:hover': { bgcolor: '#2563c9' } }}>
                    {footerData.newsletter.button}
                  </Button>
                </Stack>
                {submitted && (
                  <>
                    <Typography sx={{ mt: 2, color: 'success.main', fontSize: { xs: 14, sm: 16 } }}>
                      {newsletterSignupData.thankYou}
                    </Typography>
                    {/* For debugging: show submitted email */}
                    <Typography sx={{ mt: 1, color: '#5A69F2', fontSize: { xs: 13, sm: 14 } }}>
                      <strong>Submitted Email:</strong> {submittedEmail}
                    </Typography>
                  </>
                )}
              </Box>
            </Stack>
            {/* Address, Email, Phone, Social, Copyright for desktop */}
            <Stack direction="row" spacing={4} alignItems="center" justifyContent="center" sx={{ width: '100%', mt: 4 }}>
                {/* Copyright */}
              <Typography variant="body2" sx={{ opacity: 0.7, textAlign: 'center', minWidth: 180 }}>
                {footerData.copyright}
              </Typography>
              {/* Address */}
              <Stack direction="row" alignItems="center" spacing={1} sx={{ minWidth: 220 }}>
                <LocationOnIcon fontSize="small" sx={{ color: '#3A86FF' }} />
                <Typography variant="body2" sx={{ wordBreak: 'break-word' }}>{footerData.contact.address}</Typography>
              </Stack>
              {/* Email */}
              <Stack direction="row" alignItems="center" spacing={1} sx={{ minWidth: 180 }}>
                <EmailIcon fontSize="small" sx={{ color: '#3A86FF' }} />
                <Typography variant="body2" sx={{ wordBreak: 'break-all' }}>{footerData.contact.email}</Typography>
              </Stack>
              {/* Phone */}
              <Stack direction="row" alignItems="center" spacing={1} sx={{ minWidth: 150 }}>
                <PhoneIcon fontSize="small" sx={{ color: '#3A86FF' }} />
                <Typography variant="body2" sx={{ wordBreak: 'break-all' }}>{footerData.contact.phone}</Typography>
              </Stack>
              {/* Social Media */}
              <Stack direction="row" spacing={1} alignItems="center" justifyContent="center" sx={{ minWidth: 120 }}>
                {footerData.social.map((item, idx) => (
                  <IconButton key={item.name} color="inherit" size="small">
                    {item.icon}
                  </IconButton>
                ))}
              </Stack>
            
            </Stack>
          </Box>
          {/* Mobile: custom layout */}
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <Stack spacing={3} alignItems="center" sx={{ width: '100%' }}>
              <Typography variant="h5" fontWeight={700} gutterBottom textAlign="center">{footerData.description.title}</Typography>
              <Typography variant="body2" sx={{ opacity: 0.85, textAlign: 'center' }}>{footerData.description.text}</Typography>
              {/* Service and Company in same row */}
              <Stack direction="row" spacing={2} justifyContent="center" sx={{ width: '100%' }}>
                <Box sx={{ flex: 1, textAlign: 'center' }}>
                  <Typography variant="subtitle1" fontWeight={400} gutterBottom sx={{ color: '#3A86FF' }}>Service</Typography>
                  <Stack spacing={1}>
                    {footerData.service.map((item) => (
                      <Typography key={item} variant="body2">{item}</Typography>
                    ))}
                  </Stack>
                </Box>
                <Box sx={{ flex: 1, textAlign: 'center' }}>
                  <Typography variant="subtitle1" fontWeight={400} gutterBottom sx={{ color: '#3A86FF' }}>Company</Typography>
                  <Stack spacing={1}>
                    {footerData.company.map((item) => (
                      <Typography key={item} variant="body2">{item}</Typography>
                    ))}
                  </Stack>
                </Box>
              </Stack>
    
              {/* Newsletter */}
              <Box sx={{ width: '100%', textAlign: 'center' }}>
                <Typography variant="subtitle1" fontWeight={400} gutterBottom sx={{ color: '#3A86FF' }}>{footerData.newsletter.title}</Typography>
                <Stack direction="column" spacing={1} component="form" sx={{ mt: 1, alignItems: 'center' }} onSubmit={handleSubmit}>
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  
                  <Button type="submit" variant="contained" size="small" sx={{ minWidth: 80, px: 2, py: 0.5, fontWeight: 400, fontSize: 14, bgcolor: '#3A86FF', '&:hover': { bgcolor: '#2563c9' } }}>
                    {footerData.newsletter.button}
                  </Button>
                </Stack>
                {submitted && (
                  <>
                    <Typography sx={{ mt: 2, color: 'success.main', fontSize: { xs: 14, sm: 16 } }}>
                      {newsletterSignupData.thankYou}
                    </Typography>
                    {/* For debugging: show submitted email */}
                    <Typography sx={{ mt: 1, color: '#5A69F2', fontSize: { xs: 13, sm: 14 } }}>
                      <strong>Submitted Email:</strong> {submittedEmail}
                    </Typography>
                  </>
                )}
              </Box>
              <Box sx={{ width: '100%',  display:'flex', justifyContent:'center', mt: 2 }}>
                        {/* Address, Email, Phone as 2 columns: icon left, text right */}
              <Stack spacing={1} sx={{ width: '100%', alignItems: { xs: 'center', md: 'flex-start' } }}>
                <Grid container alignItems="center" spacing={1} sx={{ width: '100%' }}>
                  <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <LocationOnIcon fontSize="small" sx={{ color: '#3A86FF' }} />
                  </Grid>
                  <Grid item xs={10} sx={{ textAlign: 'left' }}>
                    <Typography variant="body2" sx={{ wordBreak: 'break-word' }}>{footerData.contact.address}</Typography>
                  </Grid>
                </Grid>
                <Grid container alignItems="center" spacing={1} sx={{ width: '100%' }}>
                  <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <EmailIcon fontSize="small" sx={{ color: '#3A86FF' }} />
                  </Grid>
                  <Grid item xs={10} sx={{ textAlign: 'left' }}>
                    <Typography variant="body2" sx={{ wordBreak: 'break-all' }}>{footerData.contact.email}</Typography>
                  </Grid>
                </Grid>
                <Grid container alignItems="center" spacing={1} sx={{ width: '100%' }}>
                  <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <PhoneIcon fontSize="small" sx={{ color: '#3A86FF' }} />
                  </Grid>
                  <Grid item xs={10} sx={{ textAlign: 'left' }}>
                    <Typography variant="body2" sx={{ wordBreak: 'break-all' }}>{footerData.contact.phone}</Typography>
                  </Grid>
                </Grid>
              </Stack>
              </Box>
              {/* Social media icons centered */}
              <Stack direction="row" spacing={1} alignItems="center" justifyContent="center" sx={{ width: '100%', mt: 2 }}>
                {footerData.social.map((item, idx) => (
                  <IconButton key={item.name} color="inherit" size="small">
                    {item.icon}
                  </IconButton>
                ))}
              </Stack>
              
              {/* Copyright centered and last */}
              <Typography variant="body2" sx={{ opacity: 0.7, mt: 2, textAlign: 'center', width: '100%' }}>
                {footerData.copyright}
              </Typography>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    {/* Desktop and mobile layouts are handled above. Remove this section. */}
    </Box>
  );
};

export default Footer;