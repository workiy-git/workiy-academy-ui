import React from "react";

function About() {
  return (
    <div style={{maxWidth: 800, margin: "40px auto", padding: 24, background: "#fff", borderRadius: 12, boxShadow: "0 2px 12px rgba(0,0,0,0.07)"}}>
      <h1>About Workiy Academy</h1>
      <p>
        Workiy Academy is dedicated to empowering learners with the latest skills in Artificial Intelligence and Machine Learning. Our mission is to make advanced technology education accessible, practical, and engaging for everyone.
      </p>
      <p>
        Our expert instructors bring real-world experience to the classroom, ensuring that our students gain not only theoretical knowledge but also hands-on expertise. Whether you are a beginner or looking to advance your AI career, Workiy Academy is your trusted partner in learning.
      </p>
      <ul>
        <li>Expert-led courses</li>
        <li>Hands-on projects</li>
        <li>Flexible online learning</li>
        <li>Community support</li>
      </ul>
    </div>
  );
}

export default About;
