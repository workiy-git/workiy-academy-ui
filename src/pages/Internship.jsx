import React, { useState, useRef, useEffect } from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const fontFamily = "'Poppins', 'Inter', sans-serif";

const emojiList = [
  "😞", // 1
  "😕", // 2
  "😐", // 3
  "🙂", // 4
  "😊", // 5
  "😃", // 6
  "😁", // 7
  "😎", // 8
  "🤩", // 9
  "🥇", // 10
];

const Internship = () => {
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [areaOfStudy, setAreaOfStudy] = useState("");
  const [institute, setInstitute] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [areaOfInterest, setAreaOfInterest] = useState("");
  const [skills, setSkills] = useState("");
  const [skillRating, setSkillRating] = useState(null);
  const [resume, setResume] = useState(null);
  const [description, setDescription] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
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
          width: "100vw", // Make image container full viewport width
          height: "22vw",
          minHeight: 120,
          maxHeight: 220,
          background: "#e6e6ef",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: 0, // Remove auto margin
          padding: 0,
          position: "relative",
          left: "50%",
          right: "50%",
          transform: "translate(-50%, 0)", // Ensure it stretches edge-to-edge
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80"
          alt="Internship"
          style={{
            width: "100vw", // Full viewport width
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
          fontWeight: 700,
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
          maxWidth: 600, // Increased maxWidth for wider fields
          minWidth: 0,
          margin: "0 auto",
          background: "transparent",
          borderRadius: 0,
          boxShadow: "none",
          padding: "0 4vw 32px 4vw", // Slightly less padding for more width
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
              onChange={e => setEmail(e.target.value)}
            />
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
            <input
              type="text"
              placeholder="List your skills"
              style={inputStyle}
              required
              value={skills}
              onChange={e => setSkills(e.target.value)}
            />
          </label>
          <label style={labelStyle}>
            <span style={spanStyle}>
              Rate your Skills <span style={asteriskStyle}>*</span>
            </span>
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 8,
              width: "100%",
              gap: 2, // reduced from 8 to 2 for less spacing between emojis
              padding: "0 4px" // reduced side padding for tighter layout
            }}>
              {emojiList.map((emoji, idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-label={`Rate ${idx + 1}`}
                  onClick={() => setSkillRating(idx + 1)}
                  style={{
                    background: "none",
                    border: "none",
                    outline: "none",
                    cursor: "pointer",
                    fontSize: skillRating === idx + 1 ? 24 : 18,
                    transition: "font-size 0.15s, filter 0.15s",
                    filter: skillRating === idx + 1 ? "drop-shadow(0 2px 8px #ffc24b)" : "none",
                    color: skillRating === idx + 1 ? "#ffc24b" : "#bbb",
                    padding: 0,
                    margin: 0,
                  }}
                >
                  <span
                    style={{
                      borderRadius: "50%",
                      background: skillRating === idx + 1 ? "#ffc24b33" : "transparent",
                      padding: skillRating === idx + 1 ? 2 : 0,
                      display: "inline-block",
                      transition: "background 0.15s",
                    }}
                  >
                    {emoji}
                  </span>
                </button>
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