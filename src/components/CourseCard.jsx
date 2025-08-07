import React from "react";
import "./CourseCard.css";

function CourseCard({ title, description, image }) {
  return (
    <div className="course-card">
      <img src={image} alt={title} className="course-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="enroll-btn">Enroll Now</button>
    </div>
  );
}

export default CourseCard;