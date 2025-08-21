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


const Courses = () => {
  const [showAll, setShowAll] = useState(false);

  // Determine which courses to show
  const displayedCourses = showAll ? courses : courses.slice(0, 6);

  return (
    <Box sx={{ bgcolor: "#F6F8FB", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box sx={{ py: 1, bgcolor: "#FFFFFF" }}>
        <Container maxWidth="lg" sx={{ ml: { xs: 0, sm: 2, md: 4, lg: 8 } }}>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", mb: 3, mt: { xs: 4, sm: 8, md: 10 }, ml: { xs: 0, sm: 1, md: 2 } }}>
            <Typography variant="h3" align="left" sx={{ fontWeight: 800, mb: 2, color: "#22223b", fontFamily: 'Inter, sans-serif' }}>
              Ready to imagine your career?
            </Typography>
            <Typography variant="h6" align="left" color="text.secondary" sx={{ mb: 5, fontWeight: 500, fontFamily: 'Inter, sans-serif' }}>
              Get the skills with real world experience Employers want with career Accelators
            </Typography>
          </Box>
          <Grid container spacing={4} justifyContent="flex-start">
            {displayedCourses.map((course, idx) => (
              <Grid item xs={12} sm={6} md={3} lg={3} key={idx} sx={{ mb: 3 }}>
                <CourseCard course={course} />
              </Grid>
            ))}
          </Grid>
          {!showAll && (
            <Box sx={{ textAlign: "left", mt: 5 }}>
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
                All Career Accelators
              </Button>
            </Box>
          )}
        </Container>
      </Box>
    </Box>
  );
}

export default Courses;
