import React, { useState, useRef, useEffect } from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const fontFamily = "'Poppins', 'Inter', sans-serif";

const ratingOptions = Array.from({ length: 10 }, (_, idx) => idx + 1);

const Internship = () => {
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [areaOfStudy, setAreaOfStudy] = useState("");
  const [institute, setInstitute] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [areaOfInterest, setAreaOfInterest] = useState("");
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");
  const [skillRating, setSkillRating] = useState(null);
  const [resume, setResume] = useState(null);
  const [description, setDescription] = useState("");
  const [emailError, setEmailError] = useState("");

  const dobInputRef = useRef(null);

  useEffect(() => {
    if (dobInputRef.current) {
      flatpickr(dobInputRef.current, {
        dateFormat: "d/m/Y",
        maxDate: "today",
        allowInput: true,
        onChange: (selectedDates, dateStr) => setDob(dateStr),
      });
    }
  }, []);

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

  // Handle skill input and add on comma or enter
  const handleSkillInput = (e) => {
    const value = e.target.value;
    // If comma or enter is pressed, add skill
    if (
      (e.key === "," || e.key === "Enter") &&
      value.trim().replace(",", "") !== ""
    ) {
      e.preventDefault();
      addSkill(value);
    }
  };

  const addSkill = (value) => {
    const skill = value.trim().replace(/,$/, "");
    if (skill && !skills.includes(skill)) {
      setSkills([...skills, skill]);
    }
    setSkillInput("");
  };

  const handleSkillChange = (e) => {
    setSkillInput(e.target.value);
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
    <div
      style={{
        minHeight: "100vh",
        width: "98.65vw",
        background: "#fff",
        fontFamily,
        color: "#181b22",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 0,
        margin: 0,
      }}
    >
      {/* Header Image */}
      <div
        style={{
          width: "100vw",
          height: "22vw",
          minHeight: 120,
          maxHeight: 220,
          background: "#e6e6ef",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: 0,
          padding: 0,
          position: "relative",
          left: "50%",
          right: "50%",
          transform: "translate(-50%, 0)",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80"
          alt="Internship"
          style={{
            width: "100vw",
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
      <form
        style={{
          width: "100%",
          maxWidth: 600,
          minWidth: 0,
          margin: "0 auto",
          background: "transparent",
          borderRadius: 0,
          boxShadow: "none",
          padding: "0 4vw 32px 4vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontFamily,
          boxSizing: "border-box",
        }}
        onSubmit={handleSubmit}
      >
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
          <label style={labelStyle}>
            <span style={spanStyle}>
              Full Name <span style={asteriskStyle}>*</span>
            </span>
            <input
              type="text"
              placeholder="e.g. Alex Smith"
              style={inputStyle}
              required
              value={fullName}
              onChange={e => setFullName(e.target.value)}
            />
          </label>
          <label style={labelStyle}>
            <span style={spanStyle}>
              Date Of Birth <span style={asteriskStyle}>*</span>
            </span>
            <div
              style={{
                position: "relative",
                width: "100%",
                cursor: "pointer",
                marginTop: 4,
              }}
              onClick={() => dobInputRef.current && dobInputRef.current._flatpickr.open()}
            >
              <input
                ref={dobInputRef}
                type="text"
                value={dob}
                placeholder="DD/MM/YYYY"
                style={{
                  ...inputStyle,
                  cursor: "pointer",
                  marginTop: 0,
                }}
                readOnly
                required
                onFocus={e => e.target.blur()}
              />
              <span
                style={{
                  position: "absolute",
                  right: 12,
                  top: "50%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                  opacity: 0.7,
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <svg width="20" height="20" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
              </span>
            </div>
          </label>
          <label style={labelStyle}>
            <span style={spanStyle}>
              Phone No. <span style={asteriskStyle}>*</span>
            </span>
            <div style={{ width: "100%" }}>
              <PhoneInput
                country={'in'}
                value={phone}
                onChange={setPhone}
                inputStyle={{
                  ...inputStyle,
                  paddingLeft: 48,
                  width: "100%",
                  marginTop: 0,
                }}
                buttonStyle={{
                  border: "none",
                  background: "transparent"
                }}
                inputProps={{
                  name: 'phone',
                  required: true,
                  autoFocus: false
                }}
                containerStyle={{
                  width: "100%",
                  marginTop: 4
                }}
                onlyCountries={['in', 'us', 'gb', 'ae', 'au', 'ca', 'sg']}
                enableSearch
                disableCountryCode={false}
                disableDropdown={false}
                countryCodeEditable={false}
              />
            </div>
          </label>
          <label style={labelStyle}>
            <span style={spanStyle}>
              Email <span style={asteriskStyle}>*</span>
            </span>
            <input
              type="email"
              placeholder="e.g. name@gmail.com"
              style={inputStyle}
              required
              value={email}
              onChange={handleEmailChange}
              onBlur={handleEmailChange}
            />
            {emailError && (
              <span style={{ color: "red", fontSize: 13, marginTop: 2 }}>{emailError}</span>
            )}
          </label>
          <label style={labelStyle}>
            <span style={spanStyle}>
              Area of study <span style={asteriskStyle}>*</span>
            </span>
            <input
              type="text"
              placeholder="e.g. Computer Science"
              style={inputStyle}
              required
              value={areaOfStudy}
              onChange={e => setAreaOfStudy(e.target.value)}
            />
          </label>
          <label style={labelStyle}>
            <span style={spanStyle}>
              Name of Educational Institute <span style={asteriskStyle}>*</span>
            </span>
            <input
              type="text"
              placeholder="Institute Name"
              style={inputStyle}
              required
              value={institute}
              onChange={e => setInstitute(e.target.value)}
            />
          </label>
          <label style={labelStyle}>
            <span style={spanStyle}>
              Year of Graduation <span style={asteriskStyle}>*</span>
            </span>
            <div style={{ position: "relative", width: "100%" }}>
              <select
                style={{
                  ...inputStyle,
                  appearance: "none",
                  WebkitAppearance: "none",
                  MozAppearance: "none",
                  paddingRight: 36,
                }}
                required
                value={graduationYear}
                onChange={e => setGraduationYear(e.target.value)}
              >
                <option value="" disabled>
                  Select
                </option>
                {getYearOptions().map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
              <span
                style={{
                  position: "absolute",
                  right: 18,
                  top: "50%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                  opacity: 0.7,
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path d="M6 8l4 4 4-4" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
          </label>
          <label style={labelStyle}>
            <span style={spanStyle}>
              Area of Interest in Internship <span style={asteriskStyle}>*</span>
            </span>
            <input
              type="text"
              placeholder="e.g. AI, ML, Data Science"
              style={inputStyle}
              required
              value={areaOfInterest}
              onChange={e => setAreaOfInterest(e.target.value)}
            />
          </label>
          <label style={labelStyle}>
            <span style={spanStyle}>
              Skills <span style={asteriskStyle}>*</span>
            </span>
            <div style={{ width: "100%", minHeight: 44, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 6, border: "1px solid #e0e0e0", borderRadius: 8, padding: "4px 8px", background: "#fff" }}>
              {skills.map((skill, idx) => (
                <span
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    background: "#f5f5f5",
                    color: "#181b22",
                    borderRadius: 16,
                    padding: "2px 10px 2px 8px",
                    fontSize: 14,
                    marginRight: 4,
                    marginBottom: 2,
                  }}
                >
                  {skill}
                  <span
                    onClick={() => removeSkill(idx)}
                    style={{
                      marginLeft: 6,
                      cursor: "pointer",
                      color: "#e53935",
                      fontWeight: 700,
                      fontSize: 14,
                      display: "flex",
                      alignItems: "center",
                    }}
                    title="Remove"
                  >
                    ×
                  </span>
                </span>
              ))}
              <input
                type="text"
                placeholder={skills.length === 0 ? "List your skills" : ""}
                style={{
                  border: "none",
                  outline: "none",
                  fontSize: 14,
                  flex: 1,
                  minWidth: 80,
                  background: "#fff",
                  padding: "4px 0",
                  marginLeft: 2,
                }}
                value={skillInput}
                onChange={handleSkillChange}
                onKeyDown={handleSkillInput}
                onBlur={() => addSkill(skillInput)}
              />
            </div>
          </label>
          <label style={labelStyle}>
            <span style={spanStyle}>
              Rate your Skills <span style={asteriskStyle}>*</span>
            </span>
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              marginTop: 8,
              width: "100%",
              gap: 6,
              padding: "0 4px"
            }}>
              {ratingOptions.map((option) => (
                <label
                  key={option}
                  htmlFor={`skill-rate-${option}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 28,
                    height: 28,
                    cursor: "pointer",
                    userSelect: "none"
                  }}
                  title={`Rate ${option}`}
                >
                  <input
                    type="radio"
                    id={`skill-rate-${option}`}
                    name="skillRating"
                    value={option}
                    checked={skillRating === option}
                    onChange={() => setSkillRating(option)}
                    style={{ display: "none" }}
                    required
                  />
                  <span
                    aria-hidden="true"
                    style={{
                      fontSize: 22,
                      lineHeight: 1,
                      color: option <= (skillRating || 0) ? "#ffc24b" : "#cfcfcf",
                      transition: "color 0.15s ease"
                    }}
                  >
                    {option <= (skillRating || 0) ? "★" : "☆"}
                  </span>
                </label>
              ))}
            </div>
            <div style={{ textAlign: "center", fontSize: 13, color: "#888", marginTop: 4 }}>
              {skillRating ? `Selected: ${skillRating}` : "Select your skill level"}
            </div>
          </label>
          <label style={labelStyle}>
            <span style={spanStyle}>
              Attach your Resume <span style={asteriskStyle}>*</span>
            </span>
            <div style={{ position: "relative", width: "100%" }}>
              <input
                type="file"
                style={{
                  ...inputStyle,
                  paddingRight: 36,
                  background: "#fff",
                  border: "1px solid #e0e0e0",
                  borderRadius: 6,
                  cursor: "pointer",
                  color: "#181b22",
                }}
                accept=".pdf,.doc,.docx"
                required
                onChange={e => setResume(e.target.files[0])}
              />
              <span
                style={{
                  position: "absolute",
                  right: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                  opacity: 0.8,
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.44 11.05l-8.49 8.49a5.5 5.5 0 0 1-7.78-7.78l9.19-9.19a3.5 3.5 0 0 1 4.95 4.95l-9.19 9.19a1.5 1.5 0 0 1-2.12-2.12l8.49-8.49" />
                </svg>
              </span>
            </div>
          </label>
          <label style={labelStyle}>
            <span style={spanStyle}>Description</span>
            <textarea
              placeholder="Type here"
              style={{
                ...inputStyle,
                minHeight: 60,
                resize: "vertical",
                background: "#fff",
                color: "#181b22",
              }}
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </label>
        </div>
        <button
          type="submit"
          style={{
            marginTop: 32,
            width: "100%",
            background: "#ffc24b",
            color: "#18181a",
            border: "none",
            borderRadius: 6,
            padding: "14px 0",
            fontWeight: 600,
            fontSize: 18,
            cursor: "pointer",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            fontFamily,
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          }}
        >
          Submit Form
        </button>
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