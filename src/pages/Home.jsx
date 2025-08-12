import React from "react";
import CourseCard from "../components/CourseCard";

const courses = [
  {
    title: "Introduction to Artificial Intelligence",
    description: "Master the fundamentals of AI, including machine learning basics, neural networks, and real-world applications.",
    image: "https://source.unsplash.com/400x200/?artificial-intelligence"
  },
  {
    title: "Machine Learning Fundamentals",
    description: "Learn supervised and unsupervised learning algorithms, data preprocessing, and model evaluation techniques.",
    image: "https://source.unsplash.com/400x200/?machine-learning"
  },
  {
    title: "Deep Learning with Neural Networks",
    description: "Explore convolutional neural networks, recurrent neural networks, and transformer architectures.",
    image: "https://source.unsplash.com/400x200/?neural-network"
  },
  {
    title: "Natural Language Processing (NLP)",
    description: "Build chatbots, sentiment analysis systems, and language models using modern NLP techniques.",
    image: "https://source.unsplash.com/400x200/?text-analysis"
  },
  {
    title: "Computer Vision & Image Recognition",
    description: "Develop image classification, object detection, and facial recognition systems using AI.",
    image: "https://source.unsplash.com/400x200/?computer-vision"
  },
  {
    title: "AI for Business & Strategy",
    description: "Learn how to implement AI solutions in business, from automation to predictive analytics.",
    image: "https://source.unsplash.com/400x200/?business-ai"
  },
  {
    title: "Reinforcement Learning",
    description: "Master Q-learning, policy gradients, and deep reinforcement learning for game AI and robotics.",
    image: "https://source.unsplash.com/400x200/?robot-learning"
  },
  {
    title: "AI Ethics & Responsible AI",
    description: "Understand bias, fairness, transparency, and ethical considerations in AI development.",
    image: "https://source.unsplash.com/400x200/?ethics"
  }
];


const Home = () => (
  <div style={{maxWidth: 1000, margin: "40px auto", padding: 24, background: "#f9f9fb", color: "#18181a", borderRadius: 12, boxShadow: "0 2px 12px rgba(0,0,0,0.07)"}}>
    <section style={{background: "linear-gradient(90deg, #007bff 0%, #00c6ff 100%)", color: "#fff", padding: "60px 0 40px 0", textAlign: "center"}}>
      <h1 style={{fontSize: "2.8rem", marginBottom: 16}}>Welcome to Workiy Academy</h1>
      <p style={{fontSize: "1.3rem", maxWidth: 600, margin: "0 auto 24px auto"}}>
        Unlock your future with cutting-edge AI courses taught by industry experts. Learn, build, and grow your career with us!
      </p>
      <a href="#courses" style={{padding: "12px 32px", background: "#fff", color: "#007bff", borderRadius: 8, fontWeight: 600, textDecoration: "none", fontSize: "1.1rem", boxShadow: "0 2px 8px rgba(0,0,0,0.08)"}}>
        View Courses
      </a>
    </section>
    <h1 id="courses" style={{textAlign: "center", margin: "32px 0"}}>Our AI Courses</h1>
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "24px"
    }}>
      {courses.map((course, idx) => (
        <CourseCard key={idx} {...course} />
      ))}
    </div>
  </div>
);

export default Home;
