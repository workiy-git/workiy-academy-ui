import React, { useEffect, useState } from "react";
import "../assets/About.css";
import SchoolIcon from "@mui/icons-material/School";
import PsychologyIcon from "@mui/icons-material/Psychology";
import BuildIcon from "@mui/icons-material/Build";
import GroupsIcon from "@mui/icons-material/Groups";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ConstructionIcon from "@mui/icons-material/Construction";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const About = () => {
  // Partners carousel logic
  const partners = [
    { src: "", alt: "Freshworks" },
    { src: "", alt: "Google" },
    { src: "", alt: "Microsoft" },
    { src: "", alt: "PhonePe" },
    { src: "", alt: "PayPal" },
    { src: "", alt: "TCS" },
  ];
  const [partnerIndex, setPartnerIndex] = useState(0);
  const isMobile =
    typeof window !== "undefined" && window.innerWidth <= 900;
  const visibleCount = isMobile ? 1 : 2;

  const handlePrev = () => {
    setPartnerIndex(
      (prev) => (prev - 1 + partners.length) % partners.length
    );
  };
  const handleNext = () => {
    setPartnerIndex((prev) => (prev + 1) % partners.length);
  };

  // Animated stats logic
  const [learners, setLearners] = useState(0);
  const [projects, setProjects] = useState(0);
  const [courses, setCourses] = useState(0);

  // ✅ Keep static data OUTSIDE useEffect
  const missionData = [
    "Turning learners into tech leaders",
    "Powering skills for today's demands",
    "Building hands-on industry expertise",
    "Guiding dreams into careers",
    "Shaping futures that last",
  ];
  const principlesData = [
    "Learning by Doing",
    "Industry Relevance",
    "Innovation First",
    "Personal Attention",
    "Integrity Always",
  ];
  const valuesData = [
    "Passion for learning",
    "Commitment to quality",
    "Innovation every day",
    "Respect for every learner",
    "Results that matter",
  ];

  // (optional future animations)
  useEffect(() => {
    // animation counters or API calls can go here
  }, []);

  const approachData = [
    {
      icon: <SchoolIcon className="approach-icon" />,
      title: "Learn by Doing",
      desc: "Experience hands-on learning with real projects.",
    },
    {
      icon: <PsychologyIcon className="approach-icon" />,
      title: "Blend Theory & Practice",
      desc: "Combine foundational knowledge with practical application.",
    },
    {
      icon: <BuildIcon className="approach-icon" />,
      title: "Industry Alignment",
      desc: "Stay updated with skills that match industry needs.",
    },
    {
      icon: <GroupsIcon className="approach-icon" />,
      title: "Expert Mentorship",
      desc: "Get guidance from experienced professionals.",
    },
    {
      icon: <TrendingUpIcon className="approach-icon" />,
      title: "Continuous Growth",
      desc: "Develop skills for long-term career success.",
    },
    {
      icon: <SupportAgentIcon className="approach-icon" />,
      title: "Personal Support",
      desc: "Receive help and feedback at every step.",
    },
  ];

  const differentData = [
    {
      icon: <AutoAwesomeIcon className="different-icon" />,
      title: "Learning by Building",
      desc: "We focus on hands-on, real-world projects from day one...",
    },
    {
      icon: <PsychologyIcon className="different-icon" />,
      title: "Generative AI at the Core",
      desc: "While others talk about AI, we train you on practical Generative AI...",
    },
    {
      icon: <GroupsIcon className="different-icon" />,
      title: "Mentors Who've Been There",
      desc: "Our trainers are industry professionals...",
    },
    {
      icon: <ConstructionIcon className="different-icon" />,
      title: "Startup Energy. Personal Attention",
      desc: "We're young, fast-growing, and constantly adapting...",
    },
    {
      icon: <EmojiEventsIcon className="different-icon" />,
      title: "Career-Driven Approach",
      desc: "Everything we teach is designed with your future in mind...",
    },
  ];

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-main-heading">
              <span className="yellow-text">Where Learning</span>{" "}
              <span className="blue-text">Meets Doing.</span>
            </h1>
            <p>
              At Workiy Academy, we specialize in cutting-edge Generative AI
            </p>
            <p>
              We believe in making learning practical, relevant, and engaging...
            </p>
          </div>
          <div className="hero-image">
            <img
              src="https://i.ibb.co/67zHv4jL/images.jpg"
              alt="AI Brain Visual"
              className="hero-img-responsive"
            />
          </div>
        </div>
      </section>

      {/* Mission, Principles, and Values Section */}
      <section className="values-section">
        <div className="values-grid">
          <div className="value-card mission">
            <h2>Our Mission</h2>
            <ul>
              {missionData.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="value-card principles">
            <h2>Our Principles</h2>
            <ul>
              {principlesData.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="value-card values">
            <h2>Our Values</h2>
            <ul>
              {valuesData.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="approach-section">
        <h2 className="yellow-text">Our Approach</h2>
        <div className="approach-boxes-grid">
          {approachData.map((box, idx) => (
            <div className="approach-box" key={idx}>
              {box.icon}
              <div className="approach-title">{box.title}</div>
              <div className="approach-desc">{box.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Different Section */}
      <section className="different-section">
        <h2 className="yellow-text">What Makes Us Different</h2>
        <div className="different-content">
          {differentData.map((item, idx) => (
            <div className="different-item" key={idx}>
              {item.icon}
              <h3>
                <span className="blue-text">{item.title}</span>
              </h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
