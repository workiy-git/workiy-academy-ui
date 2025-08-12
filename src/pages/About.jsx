import React from "react";


const About = () => (
  <div style={{maxWidth: 800, margin: "40px auto", padding: 24, background: "#f9f9fb", color: "#18181a", borderRadius: 12, boxShadow: "0 2px 12px rgba(0,0,0,0.07)"}}>
    <h1>About Workiy Academy</h1>
    <p>
      Workiy Academy is a premier institution dedicated to advancing education in Artificial Intelligence and Machine Learning. Founded with the vision of democratizing AI knowledge, we provide comprehensive, industry-aligned courses that bridge the gap between theoretical concepts and practical applications.
    </p>
    
    <h2>Our Mission</h2>
    <p>
      To empower individuals and organizations with cutting-edge AI skills through expert-led instruction, hands-on projects, and real-world applications. We believe that AI literacy is essential for the future workforce and strive to make this knowledge accessible to everyone.
    </p>

    <h2>What We Offer</h2>
    <ul>
      <li><strong>Comprehensive AI Curriculum:</strong> From fundamentals to advanced topics like deep learning, NLP, and computer vision</li>
      <li><strong>Expert Instructors:</strong> Industry professionals with years of experience in AI development and research</li>
      <li><strong>Hands-on Projects:</strong> Real-world applications and case studies to reinforce learning</li>
      <li><strong>Flexible Learning:</strong> Online courses designed to fit your schedule and learning pace</li>
      <li><strong>Community Support:</strong> Access to forums, study groups, and networking opportunities</li>
      <li><strong>Career Guidance:</strong> Industry insights and job placement assistance</li>
    </ul>

    <h2>Our Course Categories</h2>
    <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "16px", marginTop: "16px"}}>
      <div style={{background: "#f8f9fa", padding: "16px", borderRadius: "8px"}}>
        <h3 style={{color: "#007bff", marginBottom: "8px"}}>Foundation Courses</h3>
        <p>Introduction to AI, Machine Learning Fundamentals</p>
      </div>
      <div style={{background: "#f8f9fa", padding: "16px", borderRadius: "8px"}}>
        <h3 style={{color: "#007bff", marginBottom: "8px"}}>Specialized AI</h3>
        <p>NLP, Computer Vision, Reinforcement Learning</p>
      </div>
      <div style={{background: "#f8f9fa", padding: "16px", borderRadius: "8px"}}>
        <h3 style={{color: "#007bff", marginBottom: "8px"}}>Applied AI</h3>
        <p>AI for Business, Healthcare AI, Ethics & Responsible AI</p>
      </div>
    </div>

    <h2>Why Choose Workiy Academy?</h2>
    <p>
      With over 10,000+ successful graduates and partnerships with leading tech companies, we've established ourselves as a trusted name in AI education. Our courses are regularly updated to reflect the latest industry trends and technological advancements.
    </p>
  </div>
);

export default About;
