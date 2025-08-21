import React from "react";

const Internship = () => (
  <div sty  {features.map((f, i) => (
          <Grid item xs={4} sm={4} md={4} key={i} display="flex">
            <div></div>
              <Box sx={{ mb: 2 }}>{f.icon}</Box>
              <CardContent sx={{ textAlign: "center", flexGrow: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  {f.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {f.desc}
                </Typography>
              </CardContent>
            </Card>
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
          <input type="text" placeholder="e.g. 2025" style={inputStyle} required />
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
          <span>Attach your Resume (.pdf,.doc,.docx required )<span style={asteriskStyle}>*</span></span>
          <input type="file" style={inputStyle} accept=".pdf,.doc,.docx" required />
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