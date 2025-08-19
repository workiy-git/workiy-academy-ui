import React, { useEffect, useState } from "react";
import "../assets/About.css"
import SchoolIcon from '@mui/icons-material/School';
import PsychologyIcon from '@mui/icons-material/Psychology';
import BuildIcon from '@mui/icons-material/Build';
import GroupsIcon from '@mui/icons-material/Groups';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ConstructionIcon from '@mui/icons-material/Construction';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const About = () => {
  // Animated stats logic
  const [learners, setLearners] = useState(0);
  const [projects, setProjects] = useState(0);
  const [courses, setCourses] = useState(0);
  
  useEffect(() => {
    let l = 0, p = 0, c = 0;
    const lTarget = 10000, pTarget = 100, cTarget = 20;
    const lStep = Math.ceil(lTarget / 60), pStep = 2, cStep = 1;
    const interval = setInterval(() => {
      if (l < lTarget) l = Math.min(l + lStep, lTarget);
      if (p < pTarget) p = Math.min(p + pStep, pTarget);
      if (c < cTarget) c = Math.min(c + cStep, cTarget);
      setLearners(l);
      setProjects(p);
      setCourses(c);
      if (l === lTarget && p === pTarget && c === cTarget) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, []);
  return (


  <div className="about-container">
  {/* Stats Section (moved above partners) */}
  {/* ...existing code... */}

      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-main-heading">
              <span className="yellow-text">Where Learning</span> <span className="blue-text">Meets Doing.</span>
            </h1>
            <p>
              At Workiy Academy, we specialize in cutting-edge Generative AI training that goes beyond theory. 
              We provide real-time project experience and industry-relevant courses designed to prepare you 
              for the opportunities of tomorrow. Our programs bridge the gap between theoretical knowledge 
              and practical application.
            </p>
            <p>
              We believe in making learning practical, relevant, and engaging. Our approach is shaped by 
              industry demands, ensuring you stay ahead of the curve while building a portfolio that 
              showcases your skills to potential employers.
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
              <li>Turning learners into tech leaders</li>
              <li>Powering skills for today's demands</li>
              <li>Building hands-on industry expertise</li>
              <li>Guiding dreams into careers</li>
              <li>Shaping futures that last</li>
            </ul>
          </div>
          <div className="value-card principles">
            <h2>Our Principles</h2>
            <ul>
              <li>Learning by Doing</li>
              <li>Industry Relevance</li>
              <li>Innovation First</li>
              <li>Personal Attention</li>
              <li>Integrity Always</li>
            </ul>
          </div>
          <div className="value-card values">
            <h2>Our Values</h2>
            <ul>
              <li>Passion for learning</li>
              <li>Commitment to quality</li>
              <li>Innovation every day</li>
              <li>Respect for every learner</li>
              <li>Results that matter</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="approach-section">
  <h2 className="yellow-text">Our Approach</h2>
        <div className="approach-boxes-grid">
          <div className="approach-box">
            <SchoolIcon className="approach-icon" />
            <div className="approach-title">Learn by Doing</div>
            <div className="approach-desc">Experience hands-on learning with real projects.</div>
          </div>
          <div className="approach-box">
            <PsychologyIcon className="approach-icon" />
            <div className="approach-title">Blend Theory & Practice</div>
            <div className="approach-desc">Combine foundational knowledge with practical application.</div>
          </div>
          <div className="approach-box">
            <BuildIcon className="approach-icon" />
            <div className="approach-title">Industry Alignment</div>
            <div className="approach-desc">Stay updated with skills that match industry needs.</div>
          </div>
          <div className="approach-box">
            <GroupsIcon className="approach-icon" />
            <div className="approach-title">Expert Mentorship</div>
            <div className="approach-desc">Get guidance from experienced professionals.</div>
          </div>
          <div className="approach-box">
            <TrendingUpIcon className="approach-icon" />
            <div className="approach-title">Continuous Growth</div>
            <div className="approach-desc">Develop skills for long-term career success.</div>
          </div>
          <div className="approach-box">
            <SupportAgentIcon className="approach-icon" />
            <div className="approach-title">Personal Support</div>
            <div className="approach-desc">Receive help and feedback at every step.</div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="different-section">
  <h2 className="yellow-text">What Makes Us Different</h2>
        <div className="different-content">
          <div className="different-item">
            <AutoAwesomeIcon className="different-icon" />
            <h3><span className="blue-text">Learning by Building</span></h3>
            <p>
              We focus on hands-on, real-world projects from day one. You'll build actual applications 
              and solutions that demonstrate your skills to potential employers, ensuring you're job-ready 
              from the start.
            </p>
          </div>
          <div className="different-item">
            <PsychologyIcon className="different-icon" />
            <h3><span className="blue-text">Generative AI at the Core</span></h3>
            <p>
              While others talk about AI, we train you on practical Generative AI applications that are 
              in high demand. Our curriculum is built around the latest AI technologies that are shaping 
              the future of work.
            </p>
          </div>
          <div className="different-item">
            <GroupsIcon className="different-icon" />
            <h3><span className="blue-text">Mentors Who've Been There</span></h3>
            <p>
              Our trainers are industry professionals who have built solutions for real clients. They bring 
              battle-tested skills and insights that you won't find in traditional educational settings.
            </p>
          </div>
          <div className="different-item">
            <ConstructionIcon className="different-icon" />
            <h3><span className="blue-text">Startup Energy. Personal Attention</span></h3>
            <p>
              We're young, fast-growing, and constantly adapting. We innovate often, move quickly, and 
              provide the one-on-one support you need to succeed in a rapidly changing tech landscape.
            </p>
          </div>
          <div className="different-item">
            <EmojiEventsIcon className="different-icon" />
            <h3><span className="blue-text">Career-Driven Approach</span></h3>
            <p>
              Everything we teach is designed with your future in mind. From your first project to building 
              a portfolio that will impress interviewers, we're focused on your career success every step 
              of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section (moved above partners) */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-box">
            <div className="stat-number">{learners.toLocaleString()}<span className="stat-plus">+</span></div>
            <div className="stat-label">Learners</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">{projects}+ </div>
            <div className="stat-label">Real Time Projects</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">{courses}+ </div>
            <div className="stat-label"> GEN AI Courses</div>
          </div>
        </div>
      </section>

      {/* Our Hiring Partners Section */}
      <section className="partners-section">
        <h2 className="yellow-text">Our Hiring Partners</h2>
        <div className="partners-grid">
          <div className="partner-logo"><img src="" alt="Freshworks" /></div>
          <div className="partner-logo"><img src="" alt="Google" /></div>
          <div className="partner-logo"><img src="" alt="Microsoft" /></div>
          <div className="partner-logo"><img src="" alt="PhonePe" /></div>
          <div className="partner-logo"><img src="" alt="PayPal" /></div>
          <div className="partner-logo"><img src="" alt="TCS" /></div>
        </div>
      </section>
    </div>
  );
};

export default About;