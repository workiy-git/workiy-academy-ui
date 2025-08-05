import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{maxWidth: 600, margin: "40px auto", padding: 24, background: "#fff", borderRadius: 12, boxShadow: "0 2px 12px rgba(0,0,0,0.07)"}}>
      <h1>Contact Us</h1>
      <p>Have questions? Reach out to us using the form below or email us at <a href="mailto:info@workiyacademy.com">info@workiyacademy.com</a>.</p>
      {submitted ? (
        <div style={{color: "green", margin: "24px 0"}}>
          Thank you for contacting us! We'll get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", gap: 16}}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            style={{padding: 10, borderRadius: 6, border: "1px solid #ccc"}}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            style={{padding: 10, borderRadius: 6, border: "1px solid #ccc"}}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            style={{padding: 10, borderRadius: 6, border: "1px solid #ccc"}}
          />
          <button type="submit" style={{padding: "10px 24px", background: "#007bff", color: "#fff", border: "none", borderRadius: 6, cursor: "pointer"}}>
            Send Message
          </button>
        </form>
      )}
      <div style={{marginTop: 32}}>
        <h3>Workiy Academy</h3>
        <p>123 AI Street, Tech City, 12345</p>
        <p>Phone: +1 234 567 8900</p>
      </div>
    </div>
  );
}

export default Contact;
