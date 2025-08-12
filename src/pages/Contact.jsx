import React, { useState } from "react";


const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "", courseInterest: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  const courseOptions = [
    "Introduction to Artificial Intelligence",
    "Machine Learning Fundamentals", 
    "Deep Learning with Neural Networks",
    "Natural Language Processing (NLP)",
    "Computer Vision & Image Recognition",
    "AI for Business & Strategy",
    "Reinforcement Learning",
    "AI Ethics & Responsible AI",
    "Generative AI & Large Language Models",
    "AI in Healthcare"
  ];

  return (
    <div style={{maxWidth: 600, margin: "40px auto", padding: 24, background: "#f9f9fb", color: "#18181a", borderRadius: 12, boxShadow: "0 2px 12px rgba(0,0,0,0.07)"}}>
      <h1 style={{color: '#18181a'}}>Contact Workiy Academy</h1>
      <p style={{color: '#18181a'}}>Have questions about our AI courses? Want to discuss enrollment or get career guidance? Reach out to our expert team!</p>
      
      {submitted ? (
        <div style={{color: "#155724", margin: "24px 0", padding: "16px", background: "#d4edda", borderRadius: "8px"}}>
          <h3>Thank you for contacting us!</h3>
          <p>We'll review your inquiry and get back to you within 24 hours. Our AI education specialists are excited to help you on your learning journey!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", gap: 16}}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={form.name}
            onChange={handleChange}
            required
            style={{padding: 12, borderRadius: 6, border: "1px solid #ccc"}}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={form.email}
            onChange={handleChange}
            required
            style={{padding: 12, borderRadius: 6, border: "1px solid #ccc"}}
          />
          <select
            name="courseInterest"
            value={form.courseInterest}
            onChange={handleChange}
            style={{padding: 12, borderRadius: 6, border: "1px solid #ccc"}}
          >
            <option value="">Select a course you're interested in (optional)</option>
            {courseOptions.map((course, idx) => (
              <option key={idx} value={course}>{course}</option>
            ))}
          </select>
          <textarea
            name="message"
            placeholder="Tell us about your AI learning goals, questions, or how we can help you..."
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            style={{padding: 12, borderRadius: 6, border: "1px solid #ccc"}}
          />
          <button type="submit" style={{padding: "12px 24px", background: "#007bff", color: "#fff", border: "none", borderRadius: 6, cursor: "pointer", fontSize: "1rem"}}>
            Send Message
          </button>
        </form>
      )}
      
      <div style={{marginTop: 32, padding: "24px", background: "#f8f9fa", borderRadius: "8px", color: "#18181a"}}>
        <h3>Get in Touch</h3>
        <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", marginTop: "16px"}}>
          <div>
            <h4>📍 Address</h4>
            <p>123 AI Innovation Drive<br/>Tech District, Silicon Valley<br/>CA 94025, USA</p>
          </div>
          <div>
            <h4>📧 Email</h4>
            <p><a href="mailto:info@workiyacademy.com">info@workiyacademy.com</a><br/>
            <a href="mailto:admissions@workiyacademy.com">admissions@workiyacademy.com</a></p>
          </div>
          <div>
            <h4>📞 Phone</h4>
            <p>+1 (555) 123-4567<br/>Mon-Fri: 9AM-6PM PST</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
