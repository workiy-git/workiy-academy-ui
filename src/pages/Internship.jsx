import React, { useState, useRef, useEffect } from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const fieldWidth = "100%";
const innerContainerWidth = 700;

const Internship = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
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

  return (
    <div style={{ maxWidth: 900, margin: "40px auto", background: "#fff", borderRadius: 12, boxShadow: "0 2px 12px rgba(0,0,0,0.07)", overflow: "hidden" }}>
      {/* Header Image */}
      <div style={{ width: "100%", height: 220, background: "#e6e6ef", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80"
          alt="Internship"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      {/* Title */}
      <h2 style={{ textAlign: "center", margin: "24px 0 8px", fontWeight: 700 }}>INTERNSHIP FORM</h2>
      {/* Form */}
      <form style={{ padding: 32, display: "flex", justifyContent: "center" }}>
        <div style={{ width: innerContainerWidth }}>
          <h3 style={{ textAlign: "center", marginBottom: 24, fontWeight: 600 }}>Please fill the below Details</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <label style={labelStyle}>
              <span>Full Name <span style={asteriskStyle}>*</span></span>
              <input type="text" placeholder="e.g. Alex Smith" style={inputStyle} required />
            </label>
            <label style={labelStyle}>
              <span>Date Of Birth <span style={asteriskStyle}>*</span></span>
              <div
                style={{
                  position: "relative",
                  width: fieldWidth,
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
                    background: "#f9f9fb",
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
              <span>Phone No. <span style={asteriskStyle}>*</span></span>
              <PhoneInput
                country={'in'}
                value={phone}
                onChange={setPhone}
                inputStyle={{
                  ...inputStyle,
                  paddingLeft: 48,
                  width: "100%",
                  marginTop: 0
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
            </label>
            <label style={labelStyle}>
              <span>Email <span style={asteriskStyle}>*</span></span>
              <input type="email" placeholder="e.g. name@gmail.com" style={inputStyle} required />
            </label>
            <label style={labelStyle}>
              <span>Area of study <span style={asteriskStyle}>*</span></span>
              <input type="text" placeholder="e.g. Computer Science" style={inputStyle} required />
            </label>
            <label style={labelStyle}>
              <span>Name of Educational Institute <span style={asteriskStyle}>*</span></span>
              <input type="text" placeholder="Institute Name" style={inputStyle} required />
            </label>
            <label style={labelStyle}>
              <span>Year of Graduation <span style={asteriskStyle}>*</span></span>
              <div style={{ position: "relative", width: fieldWidth }}>
                <select
                  style={{
                    ...inputStyle,
                    appearance: "none",
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                    paddingRight: 36
                  }}
                  required
                  defaultValue=""
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
              <span>Area of Interest in Internship <span style={asteriskStyle}>*</span></span>
              <input type="text" placeholder="e.g. AI, ML, Data Science" style={inputStyle} required />
            </label>
            <label style={labelStyle}>
              <span>Skills <span style={asteriskStyle}>*</span></span>
              <input type="text" placeholder="List your skills" style={inputStyle} required />
            </label>
            <label style={labelStyle}>
              <span>Rate your Skills <span style={asteriskStyle}>*</span></span>
              <div style={{ display: "flex", gap: 12, marginTop: 4 }}>
                {[1,2,3,4,5,6,7,8,9,10].map(num => (
                  <label key={num} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <input
                      type="radio"
                      name="skillRating"
                      value={num}
                      required
                      style={{ display: "none" }}
                      checked={selectedSkill === num}
                      onChange={() => setSelectedSkill(num)}
                    />
                    <span
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 600,
                        color: "#fff",
                        background: getSkillColor(num),
                        fontSize: 15,
                        boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                        marginBottom: 2,
                        cursor: "pointer",
                        transition: "background 0.2s, box-shadow 0.2s, border 0.2s",
                        border: selectedSkill === num ? "3px solid #fff" : "3px solid transparent",
                        boxShadow: selectedSkill === num ? "0 0 0 2px #2196f3" : "0 1px 4px rgba(0,0,0,0.08)"
                      }}
                    >
                      {num}
                    </span>
                  </label>
                ))}
              </div>
            </label>
            <label style={labelStyle}>
              <span>Attach your Resume <span style={asteriskStyle}>*</span></span>
              <div style={{ position: "relative", width: fieldWidth }}>
                <input
                  type="file"
                  style={{
                    ...inputStyle,
                    paddingRight: 36,
                    background: "#f9f9fb",
                    border: "1px solid #e0e0e0",
                    borderRadius: 6,
                    cursor: "pointer",
                    color: "#333"
                  }}
                  accept=".pdf,.doc,.docx"
                  required
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
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.44 11.05l-8.49 8.49a5.5 5.5 0 0 1-7.78-7.78l9.19-9.19a3.5 3.5 0 0 1 4.95 4.95l-9.19 9.19a1.5 1.5 0 0 1-2.12-2.12l8.49-8.49" />
                  </svg>
                </span>
              </div>
            </label>
            <label style={labelStyle}>
              <span>Description</span>
              <textarea
                placeholder="Type here"
                style={{
                  ...inputStyle,
                  minHeight: 60,
                  resize: "vertical"
                }}
              />
            </label>
          </div>
          <button type="submit" style={{
            marginTop: 28,
            width: "100%",
            background: "#ffc24b",
            color: "#18181a",
            border: "none",
            borderRadius: 6,
            padding: "14px 0",
            fontWeight: 600,
            fontSize: 16,
            cursor: "pointer",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto"
          }}>
            Submit Form
          </button>
          <div style={{ textAlign: "center", marginTop: 12, fontSize: 12, color: "#888" }}>
            Powered by Workiy Academy
          </div>
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

function getSkillColor(num) {
  // Gradient from red (1) to green (10)
  const colors = [
    "#e53935", // 1 - red
    "#ef5350", // 2
    "#fb8c00", // 3 - orange
    "#fbc02d", // 4 - yellow
    "#cddc39", // 5 - yellow-green
    "#8bc34a", // 6 - light green
    "#43a047", // 7 - green
    "#388e3c", // 8 - darker green
    "#2e7d32", // 9
    "#008000"  // 10 - green
  ];
  return colors[num - 1];
}

const inputStyle = {
  width: fieldWidth,
  padding: "10px 12px",
  marginTop: 4,
  border: "1px solid #e0e0e0",
  borderRadius: 6,
  fontSize: 15,
  background: "#f9f9fb",
  boxSizing: "border-box"
};

const labelStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  fontWeight: 500,
  width: "100%"
};

const asteriskStyle = {
  color: "red",
  marginLeft: 2
};

export default Internship;