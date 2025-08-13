import React, { useState } from "react";
import { Container, Grid, Typography, Button, Box, AppBar, Toolbar, Link, Stack } from "@mui/material";
import CourseCard from "../components/CourseCard";
import reactImg from "../assets/react.svg";

const courses = [
  {
    title: "Full Stack Web Developer",
    description: "Get the skills with real world experience Employers want with career Accelators.",
    duration: "12 weeks",
    level: "Beginner",
    image: reactImg
  },
  {
    title: "Data Scientist",
    description: "Master data analysis, machine learning, and AI for real-world business solutions.",
    duration: "10 weeks",
    level: "Intermediate",
    image: reactImg
  },
  {
    title: "MERN Stack with Gen AI",
    description: "Build modern web apps using MongoDB, Express, React, Node, and Generative AI.",
    duration: "12 weeks",
    level: "Advanced",
    image: reactImg
  },
  {
    title: "AI and ML",
    description: "Learn AI and ML fundamentals, algorithms, and practical applications.",
    duration: "10 weeks",
    level: "Intermediate",
    image: reactImg
  }
];


const Courses = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <Box sx={{ bgcolor: "#F6F8FB", minHeight: "100vh" }}>
      {/* Header Navigation */}
      <AppBar position="static" color="default" elevation={0} sx={{ bgcolor: "#fff", boxShadow: "none", borderBottom: "1px solid #E3EAF2" }}>
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 8 } }}>
          <Stack direction="row" spacing={4} alignItems="center">
            <Link href="#" underline="none" color="inherit" sx={{ fontWeight: 700, fontSize: 18 }}>HOME</Link>
            <Link href="#" underline="none" color="primary" sx={{ fontWeight: 700, fontSize: 18 }}>Courses</Link>
            <Link href="#" underline="none" color="inherit" sx={{ fontWeight: 700, fontSize: 18 }}>Blog</Link>
            <Link href="#" underline="none" color="inherit" sx={{ fontWeight: 700, fontSize: 18 }}>Internship</Link>
            <Link href="#" underline="none" color="inherit" sx={{ fontWeight: 700, fontSize: 18 }}>About us</Link>
          </Stack>
          <Button variant="contained" color="primary" sx={{ borderRadius: 3, fontWeight: 700, px: 4, py: 1, fontSize: 16, boxShadow: "none" }}>ENQUIRED</Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box sx={{ py: 7, bgcolor: "#FFFFFF" }}>
        <Container maxWidth="md">
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 3 }}>
            <Typography variant="h3" align="center" sx={{ fontWeight: 800, mb: 2, color: "#1A237E", fontFamily: 'Inter, sans-serif' }}>
              Ready to imagine your career?
            </Typography>
            <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 5, fontWeight: 500, fontFamily: 'Inter, sans-serif' }}>
              Get the skills with real world experience Employers want with career Accelators
            </Typography>
          </Box>
          <Grid container spacing={4} justifyContent="center">
            {courses.slice(0, 4).map((course, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <CourseCard course={course} />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: "center", mt: 5 }}>
            <Button variant="contained" color="primary" sx={{ px: 6, py: 2, borderRadius: 3, fontWeight: 800, fontSize: 18, fontFamily: 'Inter, sans-serif', boxShadow: "none" }} onClick={() => setShowAll(true)}>
              All Career Accelators
            </Button>
          </Box>
          {/* Show all courses below when showAll is true */}
          {showAll && (
            <Box sx={{ py: 7, bgcolor: "#F6F8FB" }}>
              <Container maxWidth="lg">
                <Typography variant="h4" align="center" sx={{ fontWeight: 800, mb: 4, color: "#1A237E", fontFamily: 'Inter, sans-serif' }}>
                  All Courses
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                  {courses.map((course, idx) => (
                    <Grid item xs={12} sm={6} md={3} key={idx}>
                      <CourseCard course={course} />
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </Box>
          )}
        </Container>
      </Box>

      {/* Academy Info Section */}
      <Box sx={{ py: 7 }}>
        <Container maxWidth="md">
          <Typography variant="h4" align="center" sx={{ fontWeight: 800, mb: 2, color: "#1A237E", fontFamily: 'Inter, sans-serif' }}>
            Workiy Academy is the leading Software Training Institute in Chennai
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 2, fontSize: 17, fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
            which offers the latest and trending courses with a practical learning experience. In addition to the core curriculum, Workiy often offers a range of support services to help students succeed. These may include mentorship programs, career services, and access to a network of alumni and industry professionals.
          </Typography>
        </Container>
      </Box>

      {/* Footer Section */}
      <Box sx={{ bgcolor: "#1A237E", color: "#fff", py: 5 }}>
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, fontSize: 18, fontFamily: 'Inter, sans-serif', mb: 1 }}>HOME</Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, fontSize: 18, fontFamily: 'Inter, sans-serif', mb: 1 }}>Courses</Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, fontSize: 18, fontFamily: 'Inter, sans-serif', mb: 1 }}>Blog</Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, fontSize: 18, fontFamily: 'Inter, sans-serif', mb: 1 }}>Internship</Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, fontSize: 18, fontFamily: 'Inter, sans-serif', mb: 1 }}>About us</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" sx={{ fontSize: 16, fontFamily: 'Inter, sans-serif', mb: 1 }}>#6-183, Ottiyambakkam Road , Chennai - 126</Typography>
              <Typography variant="body2" sx={{ fontSize: 16, fontFamily: 'Inter, sans-serif', mb: 1 }}>9342483624</Typography>
              <Typography variant="body2" sx={{ fontSize: 16, fontFamily: 'Inter, sans-serif', mb: 1 }}>hr@Workiy.ca</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Courses;
