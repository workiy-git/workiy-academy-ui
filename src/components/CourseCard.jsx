import React from "react";
import "./CourseCard.css";


const CourseCard = ({ title, description, image }) => (
  <div className="course-card">
    <img src={image} alt={title} className="course-image" />
    <h3>{title}</h3>
    <p>{description}</p>
    <button className="enroll-btn">Enroll Now</button>
  </div>
);

export default CourseCard;