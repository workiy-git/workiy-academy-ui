import React from "react";

const courses = [
  {
    title: "Introduction to Artificial Intelligence",
    description: "Master the fundamentals of AI, including machine learning basics, neural networks, and real-world applications.",
    duration: "8 weeks",
    level: "Beginner"
  },
  {
    title: "Machine Learning Fundamentals",
    description: "Learn supervised and unsupervised learning algorithms, data preprocessing, and model evaluation techniques.",
    duration: "10 weeks",
    level: "Intermediate"
  },
  {
    title: "Deep Learning with Neural Networks",
    description: "Explore convolutional neural networks, recurrent neural networks, and transformer architectures.",
    duration: "12 weeks",
    level: "Advanced"
  },
  {
    title: "Natural Language Processing (NLP)",
    description: "Build chatbots, sentiment analysis systems, and language models using modern NLP techniques.",
    duration: "10 weeks",
    level: "Intermediate"
  },
  {
    title: "Computer Vision & Image Recognition",
    description: "Develop image classification, object detection, and facial recognition systems using AI.",
    duration: "10 weeks",
    level: "Intermediate"
  },
  {
    title: "AI for Business & Strategy",
    description: "Learn how to implement AI solutions in business, from automation to predictive analytics.",
    duration: "8 weeks",
    level: "Beginner"
  },
  {
    title: "Reinforcement Learning",
    description: "Master Q-learning, policy gradients, and deep reinforcement learning for game AI and robotics.",
    duration: "12 weeks",
    level: "Advanced"
  },
  {
    title: "AI Ethics & Responsible AI",
    description: "Understand bias, fairness, transparency, and ethical considerations in AI development.",
    duration: "6 weeks",
    level: "All Levels"
  },
  {
    title: "Generative AI & Large Language Models",
    description: "Learn about GPT, BERT, and other transformer models for text generation and understanding.",
    duration: "10 weeks",
    level: "Advanced"
  },
  {
    title: "AI in Healthcare",
    description: "Explore medical image analysis, drug discovery, and patient care optimization using AI.",
    duration: "8 weeks",
    level: "Intermediate"
  }
];

function Courses() {
  return (
    <div style={{maxWidth: 1000, margin: "40px auto", padding: 24, background: "#f9f9fb", color: "#18181a", borderRadius: 12, boxShadow: "0 2px 12px rgba(0,0,0,0.07)"}}>
      <h1>All AI Courses</h1>
      <p style={{textAlign: "center", marginBottom: "32px", color: "#666"}}>
        Comprehensive AI education from fundamentals to advanced applications
      </p>
      <ul style={{listStyle: "none", padding: 0}}>
        {courses.map((course, idx) => (
          <li key={idx} style={{background: "#fff", borderRadius: 10, boxShadow: "0 2px 8px rgba(0,0,0,0.06)", margin: "18px 0", padding: 24}}>
            <h2 style={{marginBottom: 8, color: "#007bff"}}>{course.title}</h2>
            <p style={{marginBottom: "12px", lineHeight: "1.6"}}>{course.description}</p>
            <div style={{display: "flex", gap: "16px", fontSize: "0.9rem", color: "#666"}}>
              <span>⏱️ {course.duration}</span>
              <span>📊 {course.level}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;
