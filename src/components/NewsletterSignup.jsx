import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { colors } from "@mui/material";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Add newsletter signup logic here
  };

  return (
    <Paper elevation={0} sx={{ mx: 0, my: 6, p: 4, borderRadius: 0, textAlign: 'center', backgroundColor: '#F6F7FE' }}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'center', gap: 1 }}>
        <Box sx={{ flex: 7, textAlign: { xs: 'center', md: 'left' },right: { md: '-50px' } }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: { xs: 2, md: 0 }, color: '#000' }}>
            Find out about the latest courses with the <span style={{color:'#5A69F2', borderRadius:4, padding:'0 4px'}}>academy</span> newsletter
          </Typography>
        </Box>
        <Box component="form" onSubmit={handleSubmit} sx={{ flex: 3, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 1, alignItems: 'center', justifyContent: 'flex-end', position: { md: 'relative' }, left: { md: '-50px' } }}>
          <TextField
            type="email"
            label="Email "
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            fullWidth
            sx={{ bgcolor: '#fff', maxWidth: 320 }}
          />
          <Button type="submit" variant="contained"  sx={{ fontWeight: 600, minWidth: 120, width: { xs: '100%', md: 'auto' }, height: 56, backgroundColor: "#262627" ,color:"#fff" }}>
            SUBMIT
          </Button>
        </Box>
      </Box>
      {submitted && (
        <Typography sx={{ mt: 2, color: 'success.main' }}>
          Thank you for subscribing!
        </Typography>
      )}
    </Paper>
  );
};

export default NewsletterSignup;
