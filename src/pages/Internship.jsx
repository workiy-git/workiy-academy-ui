import React from "react";

const Internship = () => (
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
    <form style={{ padding: 32 }}>
      <h3 style={{ textAlign: "center", marginBottom: 24, fontWeight: 600 }}>Please fill the below Details</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <label style={labelStyle}>
          <span>Full Name <span style={asteriskStyle}>*</span></span>
          <input type="text" placeholder="e.g. Alex Smith" style={inputStyle} required />
        </label>
        <label style={labelStyle}>
          <span>Date Of Birth <span style={asteriskStyle}>*</span></span>
          <input type="date" style={inputStyle} required />
        </label>
        <label style={labelStyle}>
          <span>Phone No. <span style={asteriskStyle}>*</span></span>
          <input type="tel" placeholder="Enter phone number" style={inputStyle} required />
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
          <select style={inputStyle} required>
            {getYearOptions().map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
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
          <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
            {[1,2,3,4,5,6,7,8,9,10].map(num => (
              <label key={num} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <input type="radio" name="skillRating" value={num} required />
                <span style={{ fontSize: 12 }}>{num}</span>
              </label>
            ))}
          </div>
        </label>
        <label style={labelStyle}>
          <span>Attach your Resume <span style={asteriskStyle}>*</span></span>
          <div style={{ position: "relative", width: "100%" }}>
            <input
              type="file"
              style={{
                ...inputStyle,
                paddingRight: 36 // space for the pin icon
              }}
              accept=".pdf,.doc,.docx"
              required
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/60/60995.png"
              alt="attachment"
              style={{
                position: "absolute",
                right: 10,
                top: "50%",
                transform: "translateY(-50%)",
                width: 20,
                height: 20,
                pointerEvents: "none",
                opacity: 0.7
              }}
            />
          </div>
        </label>
        <label style={labelStyle}>
          <span>Description</span>
          <textarea placeholder="Type here" style={{ ...inputStyle, minHeight: 60 }} />
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
        cursor: "pointer"
      }}>
        Submit Form
      </button>
      <div style={{ textAlign: "center", marginTop: 12, fontSize: 12, color: "#888" }}>
        Powered by Workiy Academy
      </div>
    </form>
  </div>
);

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
  padding: "10px 12px",
  marginTop: 4,
  border: "1px solid #e0e0e0",
  borderRadius: 6,
  fontSize: 15,
  background: "#f9f9fb"
};

const labelStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  fontWeight: 500
};

const asteriskStyle = {
  color: "red",
  marginLeft: 2
};

export default Internship;