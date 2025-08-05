import React from "react";

const courses = [
  {
    title: "Introduction to AI",
    description: "Learn the basics of Artificial Intelligence, including history, applications, and future trends."
  },
  {
    title: "Machine Learning Fundamentals",
    description: "Dive into supervised and unsupervised learning, algorithms, and real-world projects."
  },
  {
    title: "Deep Learning with Neural Networks",
    description: "Explore deep learning, neural networks, and build your own models."
  },
  {
    title: "AI in Business",
    description: "Discover how AI is transforming industries and how to implement AI solutions in business."
  },
  {
    title: "Natural Language Processing",
    description: "Understand how machines process and understand human language."
  }
];

function Courses() {
  return (
    <div style={{maxWidth: 900, margin: "40px auto", padding: 24}}>
      <h1>All Courses</h1>
      <ul style={{listStyle: "none", padding: 0}}>
        {courses.map((course, idx) => (
          <li key={idx} style={{background: "#fff", borderRadius: 10, boxShadow: "0 2px 8px rgba(0,0,0,0.06)", margin: "18px 0", padding: 24}}>
            <h2 style={{marginBottom: 8}}>{course.title}</h2>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;
