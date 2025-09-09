import React, { useState } from "react";
import { Box, TextField, MenuItem, Button, Rating, Chip, Stack, Typography, InputAdornment } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Autocomplete from "@mui/material/Autocomplete";


const fontFamily = "'Poppins', 'Inter', sans-serif";



const ratingOptions = Array.from({ length: 10 }, (_, idx) => idx + 1);



const Internship = () => {

  const [fullName, setFullName] = useState("");

  const [dob, setDob] = useState(null);
  const [phone, setPhone] = useState("");

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



  const handleSubmit = (e) => {

    e.preventDefault();

    if (

      email &&

      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)

    ) {

      setEmailError("Please enter a valid email address.");

      return;

    }

    console.log({

      fullName,

      dob,

      phone,

      email,

      areaOfStudy,

      institute,

      graduationYear,

      areaOfInterest,

      skills,

      skillRating,

      resume,

      description,

    });

  };



  return (

    <div style={{ minHeight: "100vh", width: "100%", background: "#fff", fontFamily, color: "#181b22", display: "flex", flexDirection: "column", alignItems: "center", padding: 0, margin: 0, overflowX: "hidden" }}>
      {/* Header Image */}

      <div

        style={{

          width: "100%",

          height: "clamp(140px, 22vw, 220px)",

          background: "#e6e6ef",

          display: "flex",

          alignItems: "center",

          justifyContent: "center",

          margin: 0,

          padding: 0
        }}

      >

        <img

          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80"

          alt="Internship"


          style={{

            width: "100%",

            height: "100%",

            objectFit: "cover",

            borderRadius: 0,

            display: "block",
          }}

        />

      </div>

      {/* Title */}

      <h2

        style={{

          textAlign: "center",

          margin: "32px 0 8px",

          fontWeight: "bold",

          fontFamily,

          fontSize: "clamp(1.5rem, 4vw, 2.2rem)",

          letterSpacing: 1,

          width: "100%",

          color: "#181b22",

        }}

      >

        INTERNSHIP FORM

      </h2>

      {/* Form */}

      <form style={{ width: "100%", maxWidth: "min(900px, 95vw)", minWidth: 0, margin: "0 auto", background: "transparent", borderRadius: 0, boxShadow: "none", padding: "0 clamp(12px,5vw,48px) 32px clamp(12px,5vw,48px)", display: "flex", flexDirection: "column", alignItems: "center", fontFamily, boxSizing: "border-box" }} onSubmit={handleSubmit}>
        <h3

          style={{

            textAlign: "center",

            marginBottom: 24,

            fontWeight: 500,

            fontFamily,

            fontSize: 18,

            color: "#888",

            width: "100%",

          }}

        >

          Please fill the below Details

        </h3>

        <div style={{ display: "flex", flexDirection: "column", gap: 22, width: "100%", minWidth: 0 }}>

          <Box>
            <Typography sx={{ mb: 0.5, fontWeight: 500 }}>Full Name <span style={{ color: "red" }}>*</span></Typography>
            <TextField required fullWidth size="small" placeholder="e.g. Alex Smith" value={fullName} onChange={e => setFullName(e.target.value)} />
          </Box>

          <Box>
            <Typography sx={{ mb: 0.5, fontWeight: 500 }}>Date Of Birth <span style={{ color: "red" }}>*</span></Typography>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker value={dob} onChange={(newValue) => setDob(newValue)} slotProps={{ textField: { required: true, fullWidth: true, size: 'small', placeholder: "DD/MM/YYYY" } }} />
            </LocalizationProvider>
          </Box>

          <Box>
            <Typography sx={{ mb: 0.5, fontWeight: 500 }}>Phone No. <span style={{ color: "red" }}>*</span></Typography>
            <TextField required fullWidth size="small" type="tel" placeholder="e.g. 9876543210" value={phone} onChange={e => setPhone(e.target.value.replace(/\D/g, '').slice(0,10))} InputProps={{ startAdornment: <InputAdornment position="start">+91</InputAdornment> }} />
          </Box>

          <Box>
            <Typography sx={{ mb: 0.5, fontWeight: 500 }}>Email <span style={{ color: "red" }}>*</span></Typography>
            <TextField required fullWidth size="small" type="email" placeholder="e.g. name@gmail.com" value={email} onChange={handleEmailChange} onBlur={handleEmailChange} error={Boolean(emailError)} helperText={emailError || ""} />
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
                Select year of graduation
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
            <Typography sx={{ mb: 0.5, fontWeight: 500 }}>Attach your Resume <span style={{ color: "red" }}>*</span></Typography>
            <Stack spacing={0.5}>
              <Button fullWidth variant="contained" component="label" sx={{ padding: "10px 0", fontSize: 16, backgroundColor: "#7F56D9", color: "#ffffff", '&:hover': { backgroundColor: "#6f47cf" } }}>
                Choose File
                <input hidden type="file" accept=".pdf,.doc,.docx" onChange={e => {
                  const file = e.target.files && e.target.files[0] ? e.target.files[0] : null;
                  if (!file) { setResume(null); setResumeError(""); return; }
                  const maxBytes = 5 * 1024 * 1024; // 5 MB
                  if (file.size > maxBytes) {
                    setResume(null);
                    setResumeError("File too large. Maximum size is 5 MB.");
                    e.target.value = "";
                  } else {
                    setResume(file);
                    setResumeError("");
                  }
                }} />
              </Button>
              <Typography variant="body2" color="text.secondary">{resume ? resume.name : "No file chosen"}</Typography>
              {resumeError && <Typography variant="body2" color="error">{resumeError}</Typography>}
            </Stack>
          </Box>

          <TextField label="Description" fullWidth size="small" multiline minRows={3} placeholder="Type here" value={description} onChange={e => setDescription(e.target.value)} />
            </div>


        <Button type="submit" variant="contained" fullWidth sx={{ mt: 4, backgroundColor: "#ffc24b", color: "#18181a", fontWeight: 400, fontSize: 16, padding: "10px 0", '&:hover': { backgroundColor: "#ffb41f" } }}>
          Submit Form

        </Button>
        <div

          style={{

            textAlign: "center",

            marginTop: 18,

            fontSize: 12,

            color: "#888",

            width: "100%",

            fontFamily,

          }}

        >

          Powered by Workiy Academy

        </div>

      </form>

    </div>

  );

};



function getYearOptions() {

  const currentYear = new Date().getFullYear();

  const years = [];

  for (let i = currentYear - 3; i <= currentYear + 3; i++) {

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