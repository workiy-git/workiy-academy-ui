import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import "./Contact.css";
import config from "../config/config";
import Snackbar from '@mui/material/Snackbar';

const contactInfo = [
  {
    icon: <EmailIcon sx={{ fontSize: 40, color: "#7c3aed" }} />,
    label: "Email",
    content: "hr@workiy.co",
    desc: "Our friendly team is here to help",
    link: "mailto:hr@workiy.co",
  },
  {
    icon: <LocationOnIcon sx={{ fontSize: 40, color: "#7c3aed" }} />,
    label: "Location",
    content: "#6-181, CityLinkMadican Road, Chennai - 115",
    desc: "Come say hello at our office HQ.",
  },
  {
    icon: <PhoneIcon sx={{ fontSize: 40, color: "#7c3aed" }} />,
    label: "Phone",
    content: "+91 9342482504",
    desc: "Mon-Fri: 8am to 6pm.",
    link: "tel:+919342482504",
  },
];

const newsletterSignupData = {
  thankYou: "Thank you for subscribing!",
};

const Contact = () => {
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [subscribeEmail, setSubscribeEmail] = useState("");
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);
  const [subscribeMsg, setSubscribeMsg] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  // Handle form submit dynamically
  const handleSubmit = async (e) => {
  e.preventDefault();
  setMessage("");
  setIsError(false);

  const form = e.target;
  const formData = new FormData(form);

  // Convert FormData into an object
  const data = Object.fromEntries(formData.entries());

  // Check for empty required fields dynamically (excluding privacy checkbox)
  const emptyFields = Object.entries(data).filter(
    ([key, value]) => key !== "privacy" && !value.trim()
  );

  if (emptyFields.length > 0) {
    setMessage("⚠️ Please fill in all required fields.");
    setIsError(true);
    return;
  }

  // Validate privacy checkbox
  if (!formData.get("privacy")) {
    setMessage("⚠️ You must agree to the privacy policy.");
    setIsError(true);
    return;
  }

  try {
    setLoading(true);

    // Send POST request to API
    const response = await fetch(`${config.apiUrl}/enquiry`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      // ✅ Success case
      setMessage("✅ Your message has been sent successfully!");
      setIsError(false);
      form.reset();
    } else {
      // ❌ API error response
      setMessage(result.message || "❌ Failed to send your message. Please try again.");
      setIsError(true);
    }
  } catch (error) {
    // ❌ Network or server error
    console.error("Error submitting form:", error);
    setMessage("❌ Something went wrong. Please try again later.");
    setIsError(true);
  } finally {
    setLoading(false);
  }

  console.log("Form Submitted Data:", data);
};

  const handleSubscribe = async () => {
    if (!subscribeEmail.trim()) {
      setSubscribeMsg("Please enter your email.");
      setSubscribeSuccess(false);
      setOpenSnackbar(true);
      return;
    }
    try {
      const response = await fetch(`${config.apiUrl}/newsletter`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: subscribeEmail }),
      });
      if (response.ok) {
        setSubscribeMsg("");
        setSubscribeSuccess(true);
        setSubmitted(true);
        setSubmittedEmail(subscribeEmail);
        setSubscribeEmail("");
      } else {
        setSubscribeMsg("Subscription failed. Please try again.");
        setSubscribeSuccess(false);
      }
    } catch (error) {
      setSubscribeMsg("Network error. Please try again later.");
      setSubscribeSuccess(false);
    }
    setOpenSnackbar(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ p: { xs: 2, sm: 4 }, bgcolor: "#f9f9fb", color: "#18181a" }}>
      {/* Header */}
      <Box textAlign="center" sx={{ mb: { xs: 1, sm: 5 } }}>
        <Typography variant="h6" sx={{ color: "#7c3aed", fontSize: { xs: 15, sm: 25 }, mb: 1 }}>Contact US</Typography>
        <Typography variant="h2" sx={{ fontWeight: 700, fontSize: { xs: 25, sm: 52 }, mb: 1 }}>We’d love to hear from you</Typography>
        <Typography variant="h6" sx={{ color: "#666", fontSize: { xs: 15, sm: 25 } }}>Our friendly team is always here to chat.</Typography>
      </Box>

      {/* Contact Info */}
      <Grid container spacing={4} justifyContent="center" mb={5}>
        {contactInfo.map((info, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Box sx={{ p: 3, minWidth: 200, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
              {info.icon}
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mt: 1 }}>{info.label}</Typography>
              <Typography variant="body2" sx={{ color: "#666", mb: 1 }}>{info.desc}</Typography>
              {info.link ? (
                <Typography component="a" href={info.link} sx={{ color: "#7c3aed", fontWeight: 500, textDecoration: "none" }}>{info.content}</Typography>
              ) : (
                <Typography sx={{ color: "#7c3aed", fontWeight: 500 }}>{info.content}</Typography>
              )}
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Contact Form */}
      <Box textAlign="center" mb={5}>
        <Typography variant="h6" sx={{ color: "#7c3aed", fontSize: { xs: 15, sm: 25 }, mb: 1 }}>Contact US</Typography>
        <Typography variant="h3" sx={{ fontWeight: 700, fontSize: { xs: 25, sm: 52 }, mb: 1 }}>Get in touch</Typography>
        <Typography variant="h6" sx={{ color: "#666", fontSize: { xs: 15, sm: 25 } }}>We’d love to hear from you. Please fill out this form.</Typography>
      </Box>

      <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600, mx: "auto", p: 4 }}>
        <Grid>
          <Grid item xs={12} container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="subtitle2" sx={{ mb: 1, textAlign: "left", fontWeight: 500 }}>First name *</Typography>
                <input type="text" name="firstName" placeholder="First name" style={{ padding: "12px", borderRadius: "6px", border: "1px solid #E4E7EC", fontSize: "1rem", background: "#F9FAFB" }} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="subtitle2" sx={{ mb: 1, textAlign: "left", fontWeight: 500 }}>Last name *</Typography>
                <input type="text" name="lastName" placeholder="Last name" style={{ padding: "12px", borderRadius: "6px", border: "1px solid #E4E7EC", fontSize: "1rem", background: "#F9FAFB" }} />
              </Box>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="subtitle2" sx={{ mb: 1, textAlign: "left", fontWeight: 500 }}>Email *</Typography>
              <input type="email" name="email" placeholder="example@email.com" style={{ padding: "12px", borderRadius: "6px", border: "1px solid #E4E7EC", fontSize: "1rem", background: "#F9FAFB" }} />
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="subtitle2" sx={{ mb: 1, textAlign: "left", fontWeight: 500 }}>Phone number *</Typography>
              <input type="tel" name="phone" placeholder="+91 00000 00000" style={{ padding: "12px", borderRadius: "6px", border: "1px solid #E4E7EC", fontSize: "1rem", background: "#F9FAFB" }} />
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="subtitle2" sx={{ mb: 1, textAlign: "left", fontWeight: 500 }}>Message *</Typography>
              <textarea name="message" placeholder="Leave us a message..." rows={4} style={{ padding: "12px", borderRadius: "6px", border: "1px solid #E4E7EC", fontSize: "1rem", background: "#F9FAFB", resize: "vertical" }} />
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <input type="checkbox" name="privacy" id="privacy" style={{ marginRight: "8px", width: 20, height: 20 }} />
              <label htmlFor="privacy" style={{ fontSize: "1rem" }}>
                You agree to our friendly{" "}
                <a href="/privacy-policy" target="_self" rel="noopener noreferrer" style={{ color: "#7c3aed", textDecoration: "underline" }}>
                  privacy policy
                </a>.
              </label>
            </Box>
          </Grid>

          <Grid item sx={{ mt: { xs: 3, sm: 5 }, textAlign: "center" }} xs={12}>
            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                padding: "14px",
                background: loading ? "#b5a3e4" : "#7F56D9",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                fontSize: "1.1rem",
                fontWeight: 600,
                cursor: loading ? "not-allowed" : "pointer",
                marginTop: "8px",
              }}
            >
              {loading ? "Sending..." : "Send message"}
            </button>

            {/* Confirmation / Error Message */}
            {message && (
              <Typography
                sx={{
                  mt: 2,
                  color: isError ? "red" : "green",
                  fontWeight: 500,
                  fontSize: "1rem",
                }}
              >
                {message}
              </Typography>
            )}
          </Grid>
        </Grid>
      </Box>
      			{/* Subscribe Block */}
			<Box sx={{ width: '70%', p: 4, margin:'auto' }}>
				<Grid container alignItems="center" sx={{display:'flex', justifyContent:'space-between'}} spacing={2}>
					<Grid item xs={12} md={6}>
						<Typography variant="h6" sx={{ fontWeight: 600, fontSize: 22 }}>
							Join 3,000+ subscribers
						</Typography>
					</Grid>
					<Grid item xs={12} md={6}>
						<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'stretch', md: 'flex-end' } }}>
							<Box sx={{ display: 'flex', width: '100%' }}>
								<input
                  type="email"
                  placeholder="Enter your email"
                  value={subscribeEmail}
                  onChange={e => setSubscribeEmail(e.target.value)}
                  style={{ flex: 1, padding: '12px', borderRadius: '6px 0 0 6px', border: '1px solid #E4E7EC', fontSize: '1rem', background: '#F9FAFB', borderRight: 'none' }}
                />
                <button
                  type="button"
                  onClick={handleSubscribe}
                  style={{ padding: '12px 24px', background: '#7F56D9', color: '#fff', border: 'none', borderRadius: '0 6px 6px 0', fontSize: '1rem', fontWeight: 600, cursor: 'pointer' }}
                >
                  Subscribe
                </button>
							</Box>
							<Typography variant="body2" sx={{ color: '#666', mt: 1, textAlign: 'left' }}>
								We care about your data in our <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: '#7c3aed', textDecoration: 'underline' }}>privacy policy</a>.
							</Typography>
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
					</Grid>
				</Grid>
       
			</Box>
    {/* Map */}
	<Box sx={{ width: '100%', mt: 6, mb: 6, display: 'flex', justifyContent: 'center' }}>
				<Box sx={{ width: '80%', height: 350, borderRadius: 3, overflow: 'hidden', boxShadow: 2 }}>
					<iframe
						title="Office Location"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2997788969333!2d80.18195657410162!3d12.888435216698145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5259bca6ba1e7f%3A0xa2ef3b6cb7355435!2sWorkiy%20Technologies%20private%20limited!5e0!3m2!1sen!2sin!4v1755085292200!5m2!1sen!2sin"
						width="100%"
						height="100%"
						style={{ border: 0 }}
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</Box>
			</Box>
    </Box>
  );
};

export default Contact;
