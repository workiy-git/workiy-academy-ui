import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Paper from "@mui/material/Paper";

const ContactUs = () => {
  const [form, setForm] = React.useState({ name: "", email: "", comment: "", save: false });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form submission logic here
    alert("Thank you for contacting us!");
  };

  return (
    <Paper
      elevation={3}
      sx={{
        width: '95vw',
        maxWidth: '95vw',
        mx: 0,
        my: { xs: 2, md: 6 },
        p: { xs: 2, sm: 3, md: 4 },
        borderRadius: 0,
      }}
    >
      <Typography
        variant="h5"
        sx={{
          mb: 2,
          fontWeight: 600,
          textAlign: 'center',
          fontSize: { xs: 18, sm: 22, md: 28 },
        }}
      >
        Contact us
      </Typography>
      <Typography
        variant="body2"
        sx={{
          mb: 2,
          textAlign: 'center',
          fontSize: { xs: 13, sm: 14 },
        }}
      >
        Your email address will not be published. Required fields are marked *
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, mb: 2 }}>
          <TextField
            label="Name*"
            name="name"
            value={form.name}
            onChange={handleChange}
            fullWidth
            required
            sx={{ fontSize: { xs: 14, sm: 16 } }}
          />
          <TextField
            label="Email*"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            fullWidth
            required
            sx={{ fontSize: { xs: 14, sm: 16 } }}
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Comment"
            name="comment"
            value={form.comment}
            onChange={handleChange}
            fullWidth
            multiline
            minRows={3}
            sx={{ fontSize: { xs: 14, sm: 16 } }}
          />
        </Box>
        <Box sx={{ mb: 2, display: 'flex', justifyContent: { xs: 'flex-start', md: 'flex-start' } }}>
          <FormControlLabel
            control={
              <Checkbox
                name="save"
                checked={form.save}
                onChange={handleChange}
                color="primary"
              />
            }
            label={<span style={{ fontSize: '0.95em' }}>Save my name, email in this browser for the next time I comment</span>}
            sx={{ flex: 1, ml: 0 }}
          />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
          <Button
            type="submit"
            variant="contained"
            sx={{
              width: { xs: '100%', sm: 140 },
              fontWeight: 600,
              bgcolor: '#5A69F2',
              fontSize: { xs: 15, sm: 16 },
              py: { xs: 1.2, sm: 1.5 },
              '&:hover': { bgcolor: '#4051b5' },
            }}
          >
            SEND
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default ContactUs;
