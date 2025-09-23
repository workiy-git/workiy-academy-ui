import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Paper from "@mui/material/Paper";
import config from "../config/config";

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
  const [form, setForm] = React.useState({ firstName: "", lastName: "", email: "", phone: "", comment: "", save: false });
  const [submittedData, setSubmittedData] = React.useState(null);
  const [message, setMessage] = React.useState("");
  const [isError, setIsError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsError(false);

    // Check for empty required fields dynamically (excluding privacy checkbox)
    const requiredFields = [
      { key: 'firstName', label: 'First name' },
      { key: 'lastName', label: 'Last name' },
      { key: 'email', label: 'Email' },
      { key: 'phone', label: 'Phone number' },
      { key: 'comment', label: 'Message' }
    ];
    const emptyFields = requiredFields.filter(
      ({ key }) => !form[key] || !form[key].trim()
    );

    if (emptyFields.length > 0) {
      const missing = emptyFields.map(f => f.label).join(', ');
      setMessage(`⚠️ Please fill in the following required field(s): ${missing}`);
      setIsError(true);
      return;
    }

    // First name validation (letters only, min 2 chars)
    if (!/^[A-Za-z]{2,}$/.test(form.firstName)) {
      setMessage("⚠️ First name should contain only letters and be at least 2 characters.");
      setIsError(true);
      return;
    }

    // Last name validation (letters only, min 2 chars)
    if (!/^[A-Za-z]{2,}$/.test(form.lastName)) {
      setMessage("⚠️ Last name should contain only letters and be at least 2 characters.");
      setIsError(true);
      return;
    }

    // Email format validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setMessage("⚠️ Please enter a valid email address.");
      setIsError(true);
      return;
    }

    // Phone number validation (digits only, 10-15 chars)
    if (!/^[0-9]{10,15}$/.test(form.phone)) {
      setMessage("⚠️ Phone number should contain only numbers and be 10-15 digits.");
      setIsError(true);
      return;
    }

    // Message validation (min 10 chars)
    if (!form.comment || form.comment.trim().length < 10) {
      setMessage("⚠️ Message should be at least 10 characters.");
      setIsError(true);
      return;
    }

    // Prepare form data for POST (as JSON, not FormData)
    const postData = {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      phone: form.phone,
      message: form.comment,
    };

    try {
      setLoading(true);
      const response = await fetch(`${config.apiUrl}/enquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      });
      const result = await response.json();
      if (response.ok) {
        setMessage("✅ Your message has been sent successfully!");
        setIsError(false);
        setForm({ firstName: "", lastName: "", email: "", phone: "", comment: "", save: false });
      } else {
        setMessage(result.message || "❌ Failed to send your message. Please try again.");
        setIsError(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("❌ Something went wrong. Please try again later.");
      setIsError(true);
    } finally {
      setLoading(false);
    }
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
            <Typography sx={{ mb: 0.5, ml: 0.5, fontWeight: 400, color: '#23235B', fontSize: { xs: 14, sm: 15 }, fontFamily: 'Inter, Roboto, Arial, sans-serif' }}>First Name*</Typography>
            <TextField
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              fullWidth
              required
              variant="outlined"
              placeholder="Enter your first name"
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
            <Typography sx={{ mb: 0.5, ml: 0.5, fontWeight: 400, color: '#23235B', fontSize: { xs: 14, sm: 15 }, fontFamily: 'Inter, Roboto, Arial, sans-serif' }}>Last Name*</Typography>
            <TextField
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              fullWidth
              required
              variant="outlined"
              placeholder="Enter your last name"
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
        {/* Checkbox removed as requested */}
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

        {/* Success and Error Message */}
        {message && (
          <Box sx={{ mt: 2, mb: 1, textAlign: 'center' }}>
            <Typography
              sx={{
                color: isError ? '#d32f2f' : '#388e3c',
                background: isError ? '#ffebee' : '#e8f5e9',
                border: isError ? '1px solid #d32f2f' : '1px solid #388e3c',
                borderRadius: 2,
                px: 2,
                py: 1,
                fontWeight: 500,
                fontSize: 15,
                fontFamily: 'Inter, Roboto, Arial, sans-serif',
                display: 'inline-block',
                boxShadow: isError ? '0 1px 4px 0 rgba(211,47,47,0.08)' : '0 1px 4px 0 rgba(56,142,60,0.08)',
              }}
            >
              {message}
            </Typography>
          </Box>
        )}
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
