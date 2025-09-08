import React, { useState } from "react";
import {
  Box, TextField, Button, Chip, MenuItem, Rating, Typography
} from "@mui/material";
import {
  LocalizationProvider,
  DatePicker
} from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { InputAdornment } from "@mui/material";

const Internship = () => {
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState(null);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [areaOfStudy, setAreaOfStudy] = useState("");
  const [institute, setInstitute] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [areaOfInterest, setAreaOfInterest] = useState("");
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");
  const [skillRating, setSkillRating] = useState(null);
  const [resume, setResume] = useState(null);
  const [description, setDescription] = useState("");

  const getYearOptions = () => {
    const current = new Date().getFullYear();
    return Array.from({ length: 7 }, (_, i) => current - 3 + i);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(
      value && !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value)
        ? "Enter a valid email"
        : ""
    );
  };

  const addSkill = () => {
    const s = skillInput.trim();
    if (s && !skills.includes(s)) setSkills([...skills, s]);
    setSkillInput("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailError) return;
    console.log({
      fullName, dob, phone, email, areaOfStudy, institute,
      graduationYear, areaOfInterest, skills, skillRating, resume, description,
    });
  };

  return (
    <Box sx={{ p: 0, m: 0 }}>
      <Box
        sx={{
          width: "100%",
          p: 0,
          m: 0,
          height: { xs: 160, md: 240 },
          overflow: "hidden",
          borderRadius: 0,
          mb: 2,
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1600&q=80"
          alt="Internship"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </Box>
      
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 700 }}>
        Internship Form
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ display: "grid", gap: 2.5, maxWidth: 900, mx: "auto" }}>
        <TextField
          label="Full Name"
          placeholder="e.g. Alex Smith"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          InputLabelProps={{ shrink: true }}
          sx={{ '& .MuiInputLabel-root': { fontWeight: 700 }, '& .MuiOutlinedInput-root': { backgroundColor: '#fff', borderRadius: 1.5 } }}
        />

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Date Of Birth"
            value={dob}
            onChange={setDob}
            inputFormat="dd-MM-yyyy"
            renderInput={(params) => (
              <TextField
                required
                placeholder="dd-mm-yyyy"
                {...params}
                InputLabelProps={{ shrink: true }}
                sx={{ '& .MuiInputLabel-root': { fontWeight: 700 }, '& .MuiOutlinedInput-root': { backgroundColor: '#fff', borderRadius: 1.5 } }}
              />
            )}
            maxDate={(() => {
              const d = new Date();
              d.setFullYear(d.getFullYear() - 15);
              return d;
            })()}
          />
        </LocalizationProvider>

        <TextField
          label="Phone No."
          placeholder="0000000000"
          required
          value={phone}
          onChange={(e) => {
            const digits = e.target.value.replace(/\D/g, '').slice(0, 10);
            setPhone(digits);
          }}
          InputLabelProps={{ shrink: true }}
          InputProps={{
            startAdornment: <InputAdornment position="start">+91</InputAdornment>,
          }}
          sx={{ '& .MuiInputLabel-root': { fontWeight: 700 }, '& .MuiOutlinedInput-root': { backgroundColor: '#fff', borderRadius: 1.5 } }}
        />

        <TextField
          label="Email"
          placeholder="e.g. name@gmail.com"
          type="email"
          required
          error={!!emailError}
          helperText={emailError}
          value={email}
          onChange={handleEmailChange}
          onBlur={handleEmailChange}
          InputLabelProps={{ shrink: true }}
          sx={{ '& .MuiInputLabel-root': { fontWeight: 700 }, '& .MuiOutlinedInput-root': { backgroundColor: '#fff', borderRadius: 1.5 } }}
        />

        <TextField
          label="Area Of Study"
          placeholder="Mention your field of study (e.g. Data Science)"
          required
          value={areaOfStudy}
          onChange={(e) => setAreaOfStudy(e.target.value)}
          InputLabelProps={{ shrink: true }}
          sx={{ '& .MuiInputLabel-root': { fontWeight: 700 }, '& .MuiOutlinedInput-root': { backgroundColor: '#fff', borderRadius: 1.5 } }}
        />

        <TextField
          label="Name Of Educational Institute"
          placeholder="e.g. ABC College"
          required
          value={institute}
          onChange={(e) => setInstitute(e.target.value)}
          InputLabelProps={{ shrink: true }}
          sx={{ '& .MuiInputLabel-root': { fontWeight: 700 }, '& .MuiOutlinedInput-root': { backgroundColor: '#fff', borderRadius: 1.5 } }}
        />

        <TextField
          select
          label="Year Of Graduation"
          required
          value={graduationYear}
          onChange={(e) => setGraduationYear(e.target.value)}
          InputLabelProps={{ shrink: true }}
          sx={{ '& .MuiInputLabel-root': { fontWeight: 700 }, '& .MuiOutlinedInput-root': { backgroundColor: '#fff', borderRadius: 1.5 } }}
        >
          {getYearOptions().map((yr) => (
            <MenuItem key={yr} value={yr}>
              {yr}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Area Of Interest In Internship"
          placeholder="e.g. Development"
          required
          value={areaOfInterest}
          onChange={(e) => setAreaOfInterest(e.target.value)}
          InputLabelProps={{ shrink: true }}
          sx={{ '& .MuiInputLabel-root': { fontWeight: 700 }, '& .MuiOutlinedInput-root': { backgroundColor: '#fff', borderRadius: 1.5 } }}
        />

        <Box>
          <TextField
            fullWidth
            label="Add Skill"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            onBlur={addSkill}
            onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addSkill())}
            InputLabelProps={{ shrink: true }}
            sx={{ '& .MuiInputLabel-root': { fontWeight: 700 }, '& .MuiOutlinedInput-root': { backgroundColor: '#fff', borderRadius: 1.5 } }}
          />
          <Box sx={{ mt: 1, display: "flex", flexWrap: "wrap", gap: 1 }}>
            {skills.map((sk, idx) => (
              <Chip
                key={sk}
                label={sk}
                onDelete={() =>
                  setSkills(skills.filter((_, i) => i !== idx))
                }
              />
            ))}
          </Box>
        </Box>

        <Box>
          <Typography component="legend">Rate your Skills</Typography>
          <Rating
            name="skill-rating"
            value={skillRating}
            onChange={(_, val) => setSkillRating(val)}
            max={10}
          />
        </Box>

        <Button variant="contained" component="label" sx={{ backgroundColor: '#7c3aed', ':hover': { backgroundColor: '#6d28d9' } }}>
          Upload Resume *
          <input
            type="file"
            hidden
            accept=".pdf,.doc,.docx"
            required
            onChange={(e) => setResume(e.target.files?.[0])}
          />
        </Button>

        <TextField
          label="Description"
          multiline
          minRows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Button type="submit" variant="contained" sx={{ backgroundColor: '#ffc24b', color: '#18181a', ':hover': { backgroundColor: '#e0aa3f' } }}>
          Submit Form
        </Button>
      </Box>
    </Box>
  );
};

export default Internship;
