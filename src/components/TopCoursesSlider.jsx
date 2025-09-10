import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import StarIcon from "@mui/icons-material/Star";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Carousel from "react-material-ui-carousel";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import GroupIcon from "@mui/icons-material/Group";
import BarChartIcon from "@mui/icons-material/BarChart";
import { GlobalStyles } from "@mui/material";
import config from "../config/config";

// Reusable Course Card Component
const CourseCard = ({ title, lessons, students, duration, level, rating, image, path, lessonsLabel, studentsLabel, startCourseLabel }) => {
  const handleStartCourse = () => {
    window.location.href = path;
  };

  return (
    <Card
      sx={{
        minWidth: { xs: 220, sm: 260, md: 320 },
        maxWidth: { xs: 260, sm: 300, md: 340 },
        mx: "auto",
        borderRadius: 3,
        boxShadow: 3,
        transition: "box-shadow 0.3s",
        "&:hover": { boxShadow: 8 },
        display: "flex",
        flexDirection: "column",
        height: { xs: 270, sm: 320, md: 360 },
      }}
    >
      <Box sx={{ height: 140, background: `url(${image}) center/cover`, borderTopLeftRadius: 12, borderTopRightRadius: 12 }} />
      <CardContent sx={{ p: { xs: 0.4, sm: 2 }, flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, minHeight: { xs: 32, sm: 40, md: 48 }, color: "#212529", fontSize: { xs: 15, sm: 16, md: 18 } }}>
          {title}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 1, sm: 2, md: 3 }, mb: 1, flexWrap: "wrap" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, color: "#5A69F2" }}>
            <MenuBookIcon sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }} />
            <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 500, fontSize: { xs: "0.65rem", sm: "0.75rem" } }}>
              {lessons} <span style={{ fontSize: "0.65rem" }}>{lessonsLabel}</span>
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, color: "#5A69F2" }}>
            <GroupIcon sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }} />
            <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 500, fontSize: { xs: "0.65rem", sm: "0.75rem" } }}>
              {duration} <span style={{ fontSize: "0.65rem" }}></span>
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, color: "#5A69F2" }}>
            <BarChartIcon sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }} />
            <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 500, fontSize: { xs: "0.65rem", sm: "0.75rem" } }}>
              <span style={{ fontSize: "0.65rem" }}>{level}</span>
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} sx={{ color: i < rating ? "#FFD600" : "#e0e0e0", fontSize: { xs: 16, sm: 18, md: 20 } }} />
          ))}
        </Box>
        <Button
          variant="contained"
          endIcon={<ChevronRightIcon />}
          sx={{
            mt: 1,
            fontWeight: 600,
            borderRadius: 2,
            fontSize: { xs: 9, sm: 10 },
            py: 1,
            px: 2,
            bgcolor: "#212529",
            color: "#fff",
            "&:hover": { bgcolor: "#000" },
            width: { xs: "100%", sm: "60%", md: "50%" },
            alignSelf: { xs: "center", sm: "flex-start" },
          }}
          onClick={handleStartCourse}
        >
          {startCourseLabel}
        </Button>
      </CardContent>
    </Card>
  );
};

// Main Slider Component
const TopCoursesSlider = () => {
  const scrollRef = useRef(null);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get(`${config.apiUrl}/courses`)
      .then((res) => setCourses(res.data))
      .catch((err) => console.error("Error fetching courses:", err));
  }, []);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.querySelector("div[role='button'], .MuiCard-root");
    const cardWidth = card ? card.offsetWidth : 320;
    const scrollAmount = cardWidth + 24;
    container.scrollBy({ left: direction === "left" ? -scrollAmount * 1.5 : scrollAmount * 1.5, behavior: "smooth" });
  };

  const courseCardLabels = {
    sectionTitle: "Top Courses",
    startCourse: "Start course",
    lessonsLabel: "Lessons",
    studentsLabel: "Duration",
  };

  return (
    <>
      <GlobalStyles
        styles={{
          "@media (min-width:600px)": {
            ".css-1mz3xfn-MuiPaper-root-MuiCard-root": {
              minWidth: "260px",
              maxWidth: "300px",
              marginLeft: "12px",
              marginRight: "12px",
              height: "300px",
              marginBottom: "100px",
            },
            ".css-1ll330w": {
              paddingTop: "32px",
              paddingBottom: "0px",
            },
          },
        }}
      />
      <Box sx={{ py: { xs: 3, sm: 4, md: 6 }, bgcolor: "none" }}>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: { xs: "flex-start", sm: "center" }, justifyContent: "space-between", mb: 3, px: { xs: 1, sm: 2 } }}>
          <Typography variant="h5" sx={{ fontWeight: 700, fontSize: { xs: 18, sm: 22, md: 28 }, mb: { xs: 1, sm: 0 } }}>
            {courseCardLabels.sectionTitle}
          </Typography>
          <Box sx={{ display: "flex", gap: 1, mt: { xs: 2, sm: 0 } }}>
            <Avatar sx={{ bgcolor: "#e3e3e3", color: "#007bff", width: 32, height: 32, cursor: "pointer" }} onClick={() => scroll("left")}>
              <ChevronLeftIcon sx={{ fontSize: 20 }} />
            </Avatar>
            <Avatar sx={{ bgcolor: "#e3e3e3", color: "#007bff", width: 32, height: 32, cursor: "pointer" }} onClick={() => scroll("right")}>
              <ChevronRightIcon sx={{ fontSize: 20 }} />
            </Avatar>
          </Box>
        </Box>
        <Carousel indicators={false} navButtonsAlwaysVisible={false} autoPlay={false} animation="slide" sx={{ width: "100%" }}>
          <Box
            ref={scrollRef}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              gap: { xs: 1, sm: 2, md: 3 },
              px: { xs: 1, sm: 0 },
              overflowX: "auto",
              WebkitOverflowScrolling: "touch",
              width: "100%",
              scrollBehavior: "smooth",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              "&::-webkit-scrollbar": {
                height: 0,
                display: "none",
                background: "transparent",
              },
            }}
          >
            {courses.map((course, idx) => (
              <Box
                key={idx}
                sx={{
                  flex: { xs: "0 0 85%", sm: "0 0 48%", md: "0 0 32%" },
                  maxWidth: { xs: "85%", sm: "48%", md: "32%" },
                  minWidth: { xs: 220, sm: 260, md: 320 },
                  boxSizing: "border-box",
                  display: "flex",
                }}
              >
                <CourseCard
                  {...course}
                  lessonsLabel={courseCardLabels.lessonsLabel}
                  studentsLabel={courseCardLabels.studentsLabel}
                  startCourseLabel={courseCardLabels.startCourse}
                />
              </Box>
            ))}
          </Box>
        </Carousel>
      </Box>
    </>
  );
};

export default TopCoursesSlider;
