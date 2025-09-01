import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Grid, Typography, Button, Box, AppBar, Toolbar, Link, Stack } from "@mui/material";
import CourseCard from "../components/CourseCard";





const startTitle = "Ready to imagine your career?";
const startSubtitle = "Get the skills with real world experience Employers want with career Accelators";
const buttonName= "All Career Accelators";
const Courses = () => {
  const [showAll, setShowAll] = useState(false);

  // Determine which courses to show


      const [course, setCourses] = useState([]);
  
        useEffect(() => {
          axios.get("http://127.0.0.1:8000/api/courses")
            .then((res) => setCourses(res.data))
            .catch((err) => console.error("Error fetching courses:", err));
        }, []);
  
        console.log("Fetched Courses:", course);

  const displayedCourses = showAll ? course : course.slice(0, 6);


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
