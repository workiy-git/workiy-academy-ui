import React, { useState } from "react";
import { Container, Grid, Typography, Button, Box, AppBar, Toolbar, Link, Stack } from "@mui/material";
import CourseCard from "../components/CourseCard";
import reactImg from "../assets/course1.png";

const courses = [
  {
    title: "Full Stack Web Developer",
    description: "Get the skills with real world experience Employers want with career Accelators.",
    duration: "12 weeks",
    level: "Beginner",
    image: reactImg,
    path: "/courses/full-stack-web-developer"
  },
  {
    title: "Data Scientist",
    description: "Master data analysis, machine learning, and AI for real-world business solutions.",
    duration: "10 weeks",
    level: "Intermediate",
    image: reactImg,
    path: "/courses/data-scientist"
  },
  {
    title: "MERN Stack with Gen AI",
    description: "Build modern web apps using MongoDB, Express, React, Node, and Generative AI.",
    duration: "12 weeks",
    level: "Advanced",
    image: reactImg,
    path: "/courses/mern-stack-gen-ai"
  },
  {
    title: "AI and ML",
    description: "Learn AI and ML fundamentals, algorithms, and practical applications.",
    duration: "10 weeks",
    level: "Intermediate",
    image: reactImg,
    path: "/courses/ai-ml"
  }, {
    title: "figma",
    description: "Learn AI and ML fundamentals, algorithms, and practical applications.",
    duration: "10 weeks",
    level: "Intermediate",
    image: reactImg,
    path: "/courses/figma"
  },
  {
    title: "photoshop",
    description: "Learn AI and ML fundamentals, algorithms, and practical applications.",
    duration: "10 weeks",
    level: "Intermediate",
    image: reactImg,
    path: "/courses/photoshop"
  },
  {
    title: "danvis",
    description: "Learn AI and ML fundamentals, algorithms, and practical applications.",
    duration: "10 weeks",
    level: "Intermediate",
    image: reactImg,
    path: "/courses/danvis"
  },
    {
    title: "Certified AI Automation Specialist Program",
    description: "Learn AI and ML fundamentals, algorithms, and practical applications.",
    duration: "10 weeks",
    level: "Intermediate",
    image: reactImg,
    path: "/courses/certified-ai-automation-specialist"
  }
];

const startTitle = "Ready to imagine your career?";
const startSubtitle = "Get the skills with real world experience Employers want with career Accelators";
const buttonName= "All Career Accelators";
const Courses = () => {
  const [showAll, setShowAll] = useState(false);

  // Determine which courses to show
  const displayedCourses = showAll ? courses : courses.slice(0, 6);

  return (
    <Box sx={{ bgcolor: "#F6F8FB", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box sx={{ py: 1, bgcolor: "#FFFFFF" }}>
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 }, mx: 'auto' }}>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 3, mt: { xs: 4, sm: 8, md: 10 } }}>
            <Typography variant="h3" align="center" sx={{ fontWeight: 800, mb: 2, color: "#22223b", fontFamily: 'Inter, sans-serif', fontSize: { xs: '2rem', sm: '2.6rem', md: '3rem', lg: '3.6rem' }, lineHeight: 1.05 }}>
              {startTitle}
            </Typography>
            <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 5, fontWeight: 500, fontFamily: 'Inter, sans-serif', fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.15rem' } }}>
            {startSubtitle}
            </Typography>
          </Box>
          <Grid container spacing={4} justifyContent="center" alignItems="stretch">
            {displayedCourses.map((course, idx) => (
              <Grid item xs={12} sm={6} md={4} lg={4} key={idx} sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
                <CourseCard course={course} />
              </Grid>
            ))}
          </Grid>
          {!showAll && (
            <Box sx={{ textAlign: "center", mt: 5, width: '100%' }}>
              <Button
                variant="contained"
                sx={{
                  px: 6,
                  py: 2,
                  borderRadius: 3,
                  fontWeight: 700,
                  fontSize: 15,
                  fontFamily: 'Inter, sans-serif',
                  backgroundColor: "#fff",
                  border: '3px solid #22223b',
                  color: "#22223b",
                  transition: 'background 0.2s, color 0.2s',
                  '&:hover': {
                    backgroundColor: '#22223b',
                    color: '#fff',
                  },
                }}
                onClick={() => setShowAll(true)}
              >
                {buttonName}
              </Button>
            </Box>
          )}
        </Container>
      </Box>
    </Box>
  );
}

export default Courses;
