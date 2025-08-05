import React from "react";
import CourseCard from "../components/CourseCard";

const courses = [
  {
    title: "Introduction to AI",
    description: "Learn the basics of Artificial Intelligence, including history, applications, and future trends.",
    image: "https://source.unsplash.com/400x200/?ai,robot"
  },
  {
    title: "Machine Learning Fundamentals",
    description: "Dive into supervised and unsupervised learning, algorithms, and real-world projects.",
    image: "https://source.unsplash.com/400x200/?machine-learning"
  },
  {
    title: "Deep Learning with Neural Networks",
    description: "Explore deep learning, neural networks, and build your own models.",
    image: "https://source.unsplash.com/400x200/?deep-learning"
  },
  // Add more courses as needed
];

function Home() {
  return (
    <div>
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
}

export default Home;
