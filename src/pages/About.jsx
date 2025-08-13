import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Where Learning Meets Doing.</h1>
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
            <div className="geometric-pattern">
              <img 
                src="https://i.ibb.co/67zHv4jL/images.jpg" 
                alt="AI Brain Visual" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Principles, and Values Section */}
      <section className="values-section">
        <div className="values-grid">
          <div className="value-card">
            <h2>Our Mission</h2>
            <ul>
              <li>Turning learners into tech leaders</li>
              <li>Powering skills for today's demands</li>
              <li>Building hands-on industry expertise</li>
              <li>Guiding dreams into careers</li>
              <li>Shaping futures that last</li>
            </ul>
          </div>
          
          <div className="value-card">
            <h2>Our Principles</h2>
            <ul>
              <li>Learning by Doing</li>
              <li>Industry Relevance</li>
              <li>Innovation First</li>
              <li>Personal Attention</li>
              <li>Integrity Always</li>
            </ul>
          </div>
          
          <div className="value-card">
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
        <h2>Our Approach</h2>
        <div className="approach-content">
          <ul>
            <li>Learn by doing, not just listening</li>
            <li>Blend theory with real-world projects</li>
            <li>Stay aligned with industry demands</li>
            <li>Gain guidance from expert mentors</li>
            <li>Receive support from start to success</li>
          </ul>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="different-section">
        <h2>
          <span>What Makes</span> <span>Us Different</span>
        </h2>
        <div className="different-content">
          <div className="different-item">
            <h3>Learning by Building</h3>
            <p>
              We focus on hands-on, real-world projects from day one. You'll build actual applications 
              and solutions that demonstrate your skills to potential employers, ensuring you're job-ready 
              from the start.
            </p>
          </div>
          
          <div className="different-item">
            <h3>Generative AI at the Core</h3>
            <p>
              While others talk about AI, we train you on practical Generative AI applications that are 
              in high demand. Our curriculum is built around the latest AI technologies that are shaping 
              the future of work.
            </p>
          </div>
          
          <div className="different-item">
            <h3>Mentors Who've Been There</h3>
            <p>
              Our trainers are industry professionals who have built solutions for real clients. They bring 
              battle-tested skills and insights that you won't find in traditional educational settings.
            </p>
          </div>
          
          <div className="different-item">
            <h3>Startup Energy. Personal Attention</h3>
            <p>
              We're young, fast-growing, and constantly adapting. We innovate often, move quickly, and 
              provide the one-on-one support you need to succeed in a rapidly changing tech landscape.
            </p>
          </div>
          
          <div className="different-item">
            <h3>Career-Driven Approach</h3>
            <p>
              Everything we teach is designed with your future in mind. From your first project to building 
              a portfolio that will impress interviewers, we're focused on your career success every step 
              of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Our Hiring Partners Section */}
      <section className="partners-section">
        <h2>
          <span>Our Hiring</span> <span>Partners</span>
        </h2>
        <div className="partners-grid">
          <div className="partner-logo">Freshworks</div>
          <div className="partner-logo">Google</div>
          <div className="partner-logo">Microsoft</div>
          <div className="partner-logo">PhonePe</div>
          <div className="partner-logo">PayPal</div>
          <div className="partner-logo">TCS</div>
        </div>
      </section>
    </div>
  );
};

export default About;
