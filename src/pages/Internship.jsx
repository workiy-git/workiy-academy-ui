import React, { useState } from "react";
import axios from "axios";
import config from "../config/config";
import { Box, TextField, MenuItem, Button, Rating, Chip, Stack, Typography, InputAdornment } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Autocomplete from "@mui/material/Autocomplete";

import "../assets/InternshipBanner.css";
import InternshipBannerImg from "../assets/Internship_image.png";


const fontFamily = "'Poppins', 'Inter', sans-serif";



const ratingOptions = Array.from({ length: 10 }, (_, idx) => idx + 1);



const Internship = () => {

  const [fullName, setFullName] = useState("");
  const [fullNameError, setFullNameError] = useState("");

  const [dob, setDob] = useState(null);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const [email, setEmail] = useState("");

  const [areaOfStudy, setAreaOfStudy] = useState("");

  const [institute, setInstitute] = useState("");

  const [graduationYear, setGraduationYear] = useState("");

  const [areaOfInterest, setAreaOfInterest] = useState("");

  const [skills, setSkills] = useState([]);

  // Using MUI Autocomplete for skills; freeSolo multiple chips
  const [skillRating, setSkillRating] = useState(null);

  const [resume, setResume] = useState(null);
  const [resumeError, setResumeError] = useState("");

  const [description, setDescription] = useState("");

  const [emailError, setEmailError] = useState("");
  const [submitStatus, setSubmitStatus] = useState("");



  // Date handled by MUI DatePicker


  // Email validation on blur or change

  const handleEmailChange = (e) => {

    const value = e.target.value;

    setEmail(value);

    if (

      value &&

      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value)

    ) {

      setEmailError("Please enter a valid email address.");

    } else {

      setEmailError("");

    }

  };



  const removeSkill = (removeIdx) => {

    setSkills(skills.filter((_, idx) => idx !== removeIdx));

  };



  // Name validation: should not accept numbers
  const handleFullNameChange = (e) => {
    const value = e.target.value;
    if (/\d/.test(value)) {
      setFullNameError("Name should not contain numbers.");
    } else {
      setFullNameError("");
    }
    setFullName(value);
  };



  const handleSubmit = async (e) => {

    e.preventDefault();
    let hasError = false;

    // Name validation
    if (/\d/.test(fullName)) {
      setFullNameError("Name should not contain numbers.");
      hasError = true;
    } else {
      setFullNameError("");
    }

    if (

      email &&

      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)

    ) {

      setEmailError("Please enter a valid email address.");

      hasError = true;

    } else {

      setEmailError("");

    }
    if (!/^\d{10}$/.test(phone)) {

      setPhoneError("Phone number must be exactly 10 digits.");

      hasError = true;

    } else {

      setPhoneError("");

    }

    // Graduation year validation: must be current year or above
    const currentYear = new Date().getFullYear();
    if (!graduationYear || Number(graduationYear) < currentYear) {
      setSubmitStatus(`Year of graduation should be ${currentYear} or above.`);
      return;
    }
    if (hasError) return;

    // Prepare data for API

    const payload = {

      fullName,

      dob: dob ? new Date(dob).toISOString().split("T")[0] : "",

      phone,

      email,

      areaOfStudy,

      institute,

      graduationYear: graduationYear ? Number(graduationYear) : "",

      areaOfInterest,

      skillRating: skillRating ? Number(skillRating) : "",

      resume: resume ? resume.name : "",

      description,

      skills,

    };

    try {

      setSubmitStatus("Submitting...");

      const response = await axios.post(
        `${config.apiUrl}/internship`,
        payload, // ✅ send payload directly
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        setSubmitStatus("Submitted successfully!");
        alert("Form submitted successfully!");

        // Reset all fields
        setFullName("");
        setDob(null);
        setPhone("");
        setEmail("");
        setAreaOfStudy("");
        setInstitute("");
        setGraduationYear("");
        setAreaOfInterest("");
        setSkills([]);
        setSkillRating(null);
        setResume(null);
        setResumeError("");
        setDescription("");
        setEmailError("");
        setPhoneError("");
      } else {
        setSubmitStatus("Submission failed. Please try again.");
      }

    } catch (error) {

      setSubmitStatus("Submission failed. Please try again.");

    }

  };



  return (
    <div className="internship-page-root">
      {/* Header Image */}
      <div className="internship-banner">
        <img
          src={InternshipBannerImg}
          alt="Internship Banner"
          className="internship-banner-img"
        />
      </div>
      {/* Title */}
      <h2 className="internship-title">
        INTERNSHIP FORM
      </h2>
      {/* Subtitle */}
      <h3 className="internship-subtitle">
        Please fill the below Details
      </h3>
      {/* Form */}
      <form className="internship-form" onSubmit={handleSubmit}>
        <div className="internship-form-fields">
          <Box>
            <Typography sx={{ mb: 0.5, fontWeight: 500 }}>
              Full Name <span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              required
              fullWidth
              size="small"
              placeholder="e.g. Alex Smith"
              value={fullName}
              onChange={handleFullNameChange}
              error={Boolean(fullNameError)}
              helperText={fullNameError || ""}
            />
          </Box>

          <Box>
            <Typography sx={{ mb: 0.5, fontWeight: 500 }}>Date Of Birth <span style={{ color: "red" }}>*</span></Typography>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={dob}
                onChange={(newValue) => setDob(newValue)}
                slotProps={{
                  textField: {
                    required: true,
                    fullWidth: true,
                    size: 'small',
                    placeholder: "DD/MM/YYYY"
                  }
                }}
                maxDate={new Date(new Date().setFullYear(new Date().getFullYear() - 15) - 1)} // Not today-15y or after
                minDate={new Date(1900, 0, 1)} // Or any earliest allowed date
              />
            </LocalizationProvider>
          </Box>

          <Box>
            <Typography sx={{ mb: 0.5, fontWeight: 500 }}>Phone No. <span style={{ color: "red" }}>*</span></Typography>
            <TextField required fullWidth size="small" type="tel" placeholder="e.g. 9876543210" value={phone} onChange={e => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))} InputProps={{ startAdornment: <InputAdornment position="start">+91</InputAdornment> }} error={Boolean(phoneError)} helperText={phoneError || ""} />
          </Box>

          <Box>
            <Typography sx={{ mb: 0.5, fontWeight: 500 }}>Email <span style={{ color: "red" }}>*</span></Typography>
            <TextField required fullWidth size="small" type="email" placeholder="e.g. name@email.com" value={email} onChange={handleEmailChange} onBlur={handleEmailChange} error={Boolean(emailError)} helperText={emailError || ""} />
          </Box>

          <Box>
            <Typography sx={{ mb: 0.5, fontWeight: 500 }}>Area of study <span style={{ color: "red" }}>*</span></Typography>
            <TextField required fullWidth size="small" placeholder="e.g. Computer Science" value={areaOfStudy} onChange={e => setAreaOfStudy(e.target.value)} />
          </Box>

          <Box>
            <Typography sx={{ mb: 0.5, fontWeight: 500 }}>Name of Educational Institute <span style={{ color: "red" }}>*</span></Typography>
            <TextField required fullWidth size="small" placeholder="Institute Name" value={institute} onChange={e => setInstitute(e.target.value)} />
          </Box>

          <Box>
            <Typography sx={{ mb: 0.5, fontWeight: 500 }}>Year of Graduation <span style={{ color: "red" }}>*</span></Typography>
            <TextField required fullWidth size="small" select value={graduationYear} onChange={e => setGraduationYear(e.target.value)} SelectProps={{ displayEmpty: true, renderValue: (selected) => selected !== '' ? selected : 'Select year of graduation' }} sx={{ '& .MuiSelect-select.MuiPlaceholder, & .MuiSelect-select:has(> .placeholder)': { color: '#888' }, '& .MuiInputBase-input': { color: graduationYear ? '#181b22' : '#666' } }}>
              <MenuItem value="" disabled sx={{ color: '#888' }}>
                Year of graduation should be {new Date().getFullYear()} or above
              </MenuItem>
              {getYearOptions().map(year => (
                <MenuItem key={year} value={year}>{year}</MenuItem>
              ))}
            </TextField>
          </Box>

          <Box>
            <Typography sx={{ mb: 0.5, fontWeight: 500 }}>Area of Interest in Internship <span style={{ color: "red" }}>*</span></Typography>
            <TextField required fullWidth size="small" placeholder="e.g. AI, ML, Data Science" value={areaOfInterest} onChange={e => setAreaOfInterest(e.target.value)} />
          </Box>

          <Box>
            <Typography sx={{ mb: 0.5, fontWeight: 500 }}>Skills <span style={{ color: "red" }}>*</span></Typography>
            <Autocomplete multiple freeSolo size="small" value={skills} onChange={(e, newValue) => setSkills(newValue)} options={[]} renderTags={(value, getTagProps) => value.map((option, index) => (
              <Chip variant="outlined" label={option} {...getTagProps({ index })} onDelete={() => removeSkill(index)} />
            ))} renderInput={(params) => (
              <TextField {...params} size="small" placeholder={skills.length === 0 ? "List your skills" : "Add more skills"} />
            )} />
          </Box>

          <Box>
            <Typography sx={{ mb: 0.5, fontWeight: 500 }}>Rate your Skills</Typography>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1 }}>
              <Rating name="skill-rating" max={10} value={skillRating || 0} onChange={(e, newValue) => setSkillRating(newValue)} />
              <Typography variant="body2" color="text.secondary">{skillRating ? `Selected: ${skillRating}` : "Select your skill level"}</Typography>
            </Stack>
          </Box>

          <Box>
            <Typography sx={{ mb: 0.5, fontWeight: 500 }}>
              Attach your Resume <span style={{ color: "red" }}>*</span>
            </Typography>
            <Stack spacing={0.5}>
              <Button
                fullWidth
                variant="contained"
                component="label"
                sx={{
                  padding: "10px 0",
                  fontSize: 16,
                  backgroundColor: "#7F56D9",
                  color: "#ffffff",
                  '&:hover': { backgroundColor: "#6f47cf" }
                }}
              >
                Choose File
                <input
                  hidden
                  type="file"
                  accept="application/pdf"
                  onChange={e => {
                    const file = e.target.files && e.target.files[0] ? e.target.files[0] : null;
                    if (!file) {
                      setResume(null);
                      setResumeError("");
                      return;
                    }
                    const maxBytes = 5 * 1024 * 1024; // 5 MB
                    if (file.size > maxBytes) {
                      setResume(null);
                      setResumeError("File too large. Maximum size is 5 MB.");
                      e.target.value = "";
                    } else if (file.type !== "application/pdf") {
                      setResume(null);
                      setResumeError("Only PDF files are accepted.");
                      e.target.value = "";
                    } else {
                      setResume(file);
                      setResumeError("");
                    }
                  }}
                />
              </Button>
              <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5 }}>
                Note: File size must be less than 5MB. Only PDF files are accepted.
              </Typography>
              {/* Show file info if uploaded */}
              {resume ? (
                <Typography variant="body2" color="text.secondary">
                  <strong>File:</strong> {resume.name} &nbsp;|&nbsp;
                  <strong>Type:</strong> {resume.name.split('.').pop().toUpperCase()} &nbsp;|&nbsp;
                  <strong>Size:</strong> {(resume.size / (1024 * 1024)).toFixed(2)} MB
                </Typography>
              ) : (
                <Typography variant="body2" color="text.secondary">
                  No file chosen
                </Typography>
              )}
              {resumeError && (
                <Typography variant="body2" color="error">
                  {resumeError}
                </Typography>
              )}
            </Stack>
          </Box>

          <TextField label="Description" fullWidth size="small" multiline minRows={3} placeholder="Type here" value={description} onChange={e => setDescription(e.target.value)} />
        </div>


        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            mt: 4,
            backgroundColor: "#ffc24b",
            color: "#18181a",
            fontWeight: "bold", // Make button text bold
            fontSize: 16,
            padding: "10px 0",
            '&:hover': { backgroundColor: "#ffb41f" }
          }}
        >
          Submit Form
        </Button>
        {submitStatus && (
          <Typography sx={{ mt: 2, color: submitStatus.includes("success") ? "green" : "red", fontSize: 15, textAlign: "center", width: "100%" }}>{submitStatus}</Typography>
        )}
        <div className="internship-footer">
          
        </div>
      </form>
    </div>

  );

};



function getYearOptions() {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = currentYear; i <= currentYear + 3; i++) {
    years.push(i);
  }
  return years;
}
const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  marginTop: 4,
  border: "1px solid #e0e0e0",
  borderRadius: 8,
  fontSize: 16,
  background: "#fff",
  color: "#181b22",
  fontFamily: "'Poppins', 'Inter', sans-serif",
  boxSizing: "border-box",
  outline: "none",
};
const labelStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  fontWeight: 500,
  width: "100%",
  fontFamily: "'Poppins', 'Inter', sans-serif",
  fontSize: 16,
  background: "transparent",
  borderRadius: 0,
  padding: 0,
};
const spanStyle = {
  fontFamily: "'Poppins', 'Inter', sans-serif",
  fontSize: 16,
  marginBottom: 2,
};
const asteriskStyle = {
  color: "red",
  marginLeft: 2,
  fontFamily: "'Poppins', 'Inter', sans-serif",
  fontSize: 16,
};
export default Internship;