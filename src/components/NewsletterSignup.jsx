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

    <Paper
      elevation={0}
      sx={{
        mx: 0,
        my: { xs: 2, md: 6 },
        p: { xs: 2, sm: 3, md: 4 },
        borderRadius: 0,
        textAlign: 'center',
        backgroundColor: '#F6F7FE',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'stretch', md: 'center' },
          justifyContent: 'center',
          gap: { xs: 2, md: 1 },
        }}
      >
        <Box
          sx={{
            flex: 7,
            textAlign: { xs: 'center', md: 'left' },
            mb: { xs: 2, md: 0 },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: '#000',
              fontSize: { xs: 18, sm: 22, md: 28 },
              mb: { xs: 1, md: 0 },
            }}
          >
            Find out about the latest courses with the{' '}
            <span style={{ color: '#5A69F2', borderRadius: 4, padding: '0 4px' }}>academy</span> newsletter
          </Typography>
        </Box>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            flex: 3,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 1, md: 1 },
            alignItems: { xs: 'stretch', md: 'center' },
            justifyContent: { xs: 'center', md: 'flex-end' },
            width: { xs: '100%', md: 'auto' },
          }}
        >
          <TextField
            type="email"
            label="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            fullWidth
            sx={{
              bgcolor: '#fff',
              maxWidth: { xs: '100%', md: 320 },
              fontSize: { xs: 14, sm: 16 },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              fontWeight: 600,
              minWidth: { xs: '100%', md: 120 },
              width: { xs: '100%', md: 'auto' },
              height: { xs: 44, md: 56 },
              fontSize: { xs: 14, sm: 16 },
              backgroundColor: "#262627",
              color: "#fff",
              mt: { xs: 1, md: 0 },
            }}
          >
            SUBMIT
          </Button>
        </Box>
      </Box>
      {submitted && (
        <Typography sx={{ mt: 2, color: 'success.main', fontSize: { xs: 14, sm: 16 } }}>
          Thank you for subscribing!
        </Typography>
      )}
    </Paper>
  );
};

export default NewsletterSignup;
