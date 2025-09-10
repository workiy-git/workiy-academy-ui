import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Paper from "@mui/material/Paper";

// All UI text and labels in a single JSON object
const contactUsData = {
  title: "Contact Us",
  subtitle: "Your email address will not be published. Required fields are marked *",
  fields: {
    name: { label: "Name*", placeholder: "Enter your name" },
    email: { label: "Email*", placeholder: "Enter your email" },
    comment: { label: "Comment", placeholder: "Enter your comment" },
    save: { label: "Save my name, email in this browser for the next time I comment" }
  },
  button: { text: "Send" },
  alert: "Thank you for contacting us!"
};


const ContactUs = () => {
  const [form, setForm] = React.useState({ name: "", email: "", phone: "", comment: "", save: false });
  const [submittedData, setSubmittedData] = React.useState(null); // To save submitted form data

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(form); // Save form data to variable
    alert(contactUsData.alert);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        width: '80%',
        mx: 'auto',
        my: { xs: 2, md: 6 },
        p: { xs: 2, sm: 3, md: 4 },
        borderRadius: 6,
        boxShadow: '0 8px 32px 0 rgba(90,105,242,0.10)',
        background: 'linear-gradient(135deg, #f7faff 0%, #e3e8ff 100%)',
        minWidth: { xs: 'unset', sm: 380 },
        fontFamily: 'Inter, Roboto, Arial, sans-serif',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
        <Box sx={{ width: 56, height: 5, mb: 1, borderRadius: 3, background: 'linear-gradient(90deg, #5A69F2 0%, #7B61FF 100%)' }} />
        <Typography
          variant="h5"
          sx={{
            fontWeight: 800,
            textAlign: 'center',
            fontSize: { xs: 22, sm: 28, md: 34 },
            mb: 0.5,
            letterSpacing: 1,
            color: '#23235B',
            fontFamily: 'Inter, Roboto, Arial, sans-serif',
          }}
        >
          {contactUsData.title}
        </Typography>
      </Box>
      <Typography
        variant="body2"
        sx={{
          mb: 2,
          textAlign: 'center',
          fontSize: { xs: 14, sm: 15 },
          color: '#5A69F2',
          fontWeight: 500,
          fontFamily: 'Inter, Roboto, Arial, sans-serif',
        }}
      >
        {contactUsData.subtitle}
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, mb: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <Typography sx={{ mb: 0.5, ml: 0.5, fontWeight: 400, color: '#23235B', fontSize: { xs: 14, sm: 15 }, fontFamily: 'Inter, Roboto, Arial, sans-serif' }}>{contactUsData.fields.name.label}</Typography>
            <TextField
              name="name"
              value={form.name}
              onChange={handleChange}
              fullWidth
              required
              variant="outlined"
              placeholder={contactUsData.fields.name.placeholder}
              sx={{
                fontSize: { xs: 15, sm: 17 },
                borderRadius: 3,
                background: '#f7f8fa',
                boxShadow: '0 1px 4px 0 rgba(90,105,242,0.04)',
                fontFamily: 'Inter, Roboto, Arial, sans-serif',
                '& .MuiOutlinedInput-root': {
                  borderRadius: 3,
                  fontFamily: 'Inter, Roboto, Arial, sans-serif',
                  '&.Mui-focused fieldset': {
                    borderColor: '#5A69F2',
                    boxShadow: '0 0 0 2px #e3e8ff',
                  },
                },
              }}
              InputProps={{ style: { borderRadius: 12, background: '#f7f8fa', fontFamily: 'Inter, Roboto, Arial, sans-serif' } }}
            />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <Typography sx={{ mb: 0.5, ml: 0.5, fontWeight: 400, color: '#23235B', fontSize: { xs: 14, sm: 15 }, fontFamily: 'Inter, Roboto, Arial, sans-serif' }}>{contactUsData.fields.email.label}</Typography>
            <TextField
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              fullWidth
              required
              variant="outlined"
              placeholder={contactUsData.fields.email.placeholder}
              sx={{
                fontSize: { xs: 15, sm: 17 },
                borderRadius: 3,
                background: '#f7f8fa',
                boxShadow: '0 1px 4px 0 rgba(90,105,242,0.04)',
                fontFamily: 'Inter, Roboto, Arial, sans-serif',
                '& .MuiOutlinedInput-root': {
                  borderRadius: 3,
                  fontFamily: 'Inter, Roboto, Arial, sans-serif',
                  '&.Mui-focused fieldset': {
                    borderColor: '#5A69F2',
                    boxShadow: '0 0 0 2px #e3e8ff',
                  },
                },
              }}
              InputProps={{ style: { borderRadius: 12, background: '#f7f8fa', fontFamily: 'Inter, Roboto, Arial, sans-serif' } }}
            />
          </Box>
        </Box>
      
        {/* Phone Number Input */}
        <Box sx={{ mb: 2 }}>
          <Typography sx={{ mb: 0.5, ml: 0.5, fontWeight: 400, color: '#23235B', fontSize: { xs: 14, sm: 15 }, fontFamily: 'Inter, Roboto, Arial, sans-serif' }}>
            Phone Number*
          </Typography>
          <TextField
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            fullWidth
            required
            variant="outlined"
            placeholder="Enter your phone number"
            sx={{
              fontSize: { xs: 15, sm: 17 },
              borderRadius: 3,
              background: '#f7f8fa',
              boxShadow: '0 1px 4px 0 rgba(90,105,242,0.04)',
              fontFamily: 'Inter, Roboto, Arial, sans-serif',
              '& .MuiOutlinedInput-root': {
                borderRadius: 3,
                fontFamily: 'Inter, Roboto, Arial, sans-serif',
                '&.Mui-focused fieldset': {
                  borderColor: '#5A69F2',
                  boxShadow: '0 0 0 2px #e3e8ff',
                },
              },
            }}
            InputProps={{ style: { borderRadius: 12, background: '#f7f8fa', fontFamily: 'Inter, Roboto, Arial, sans-serif' } }}
          />
        </Box>
          <Box sx={{ mb: 2 }}>
          <Typography sx={{ mb: 0.5, ml: 0.5, fontWeight: 400, color: '#23235B', fontSize: { xs: 14, sm: 15 }, fontFamily: 'Inter, Roboto, Arial, sans-serif' }}>{contactUsData.fields.comment.label}</Typography>
          <TextField
            name="comment"
            value={form.comment}
            onChange={handleChange}
            fullWidth
            multiline
            minRows={3}
            variant="outlined"
            placeholder={contactUsData.fields.comment.placeholder}
            sx={{
              fontSize: { xs: 15, sm: 17 },
              borderRadius: 3,
              background: '#fff',
              boxShadow: '0 1px 4px 0 rgba(90,105,242,0.04)',
              fontFamily: 'Inter, Roboto, Arial, sans-serif',
              '& .MuiOutlinedInput-root': {
                borderRadius: 3,
                fontFamily: 'Inter, Roboto, Arial, sans-serif',
                '&.Mui-focused fieldset': {
                  borderColor: '#5A69F2',
                  boxShadow: '0 0 0 2px #e3e8ff',
                },
              },
            }}
            InputProps={{ style: { borderRadius: 12, background: '#f7f8fa', fontFamily: 'Inter, Roboto, Arial, sans-serif' } }}
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
            label={<span style={{ fontSize: '0.97em', color: '#23235B', fontFamily: 'Inter, Roboto, Arial, sans-serif' }}>{contactUsData.fields.save.label}</span>}
            sx={{ flex: 1, ml: 0 }}
          />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
          <Button
            type="submit"
            variant="contained"
            sx={{
              width: { xs: 110, sm: 120 },
              minWidth: 90,
              fontWeight: 700,
              fontSize: { xs: 11, sm: 12 },
              py: { xs: 0.7, sm: 1 },
              px: 2.5,
              borderRadius: 7,
              boxShadow: '0 1px 4px 0 rgba(90,105,242,0.10)',
              textTransform: 'none',
              background: 'linear-gradient(90deg, #5A69F2 0%, #7B61FF 100%)',
              color: '#fff',
              letterSpacing: 0.5,
              transition: 'all 0.2s',
              fontFamily: 'Inter, Roboto, Arial, sans-serif',
              '&:hover': {
                background: 'linear-gradient(90deg, #7B61FF 0%, #5A69F2 100%)',
                boxShadow: '0 2px 8px 0 rgba(90,105,242,0.18)',
              },
            }}
          >
            {contactUsData.button.text}
          </Button>
        </Box>
      </Box>
      {/* For debugging: show submitted data */}
      {submittedData && (
        <Box sx={{ mt: 3, p: 2, background: '#f7f8fa', borderRadius: 2, color: '#23235B', fontSize: 14 }}>
          <strong>Submitted Data:</strong>
          <pre style={{ margin: 0 }}>{JSON.stringify(submittedData, null, 2)}</pre>
        </Box>
      )}
    </Paper>
  );
};

export default ContactUs;
