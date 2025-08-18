import React from "react";
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
import MenuBookIcon from '@mui/icons-material/MenuBook';
import GroupIcon from '@mui/icons-material/Group';
import BarChartIcon from '@mui/icons-material/BarChart';

const topCourses = [
  {
    title: "Learn Figma - UI/UX Design Essential Training",
    lessons: 8,
    students: 198,
    level: "Beginner",
    rating: 4,
    image: "https://i.ibb.co/hFBsFqGP/unsplash-7u-SKXpks-CKg.png",
  },
  {
    title: "Python for Beginners - Learn Programming from scratch",
    lessons: 21,
    students: 99,
    level: "Beginner",
    rating: 3,
    image: "https://i.ibb.co/1G268Rjx/learning-education-ideas-insight-intelligence-study-concept.png",
  },

  {
    title: "Mobile App Development with Flutter & Dart",
    lessons: 15,
    students: 215,
    level: "Advanced",
    rating: 2,
    image: "https://i.ibb.co/rKb60RNF/unsplash-b-OKIpt-Pzd-Pk.png",
  }
];

const CourseCard = ({ title, lessons, students, level, rating, image }) => (
  <Card
    sx={{
      minWidth: { xs: 220, sm: 260, md: 320 },
      maxWidth: { xs: 260, sm: 300, md: 340 },
      mx: { xs: 0.5, sm: 1.5, md: 2 },
      borderRadius: 3,
      boxShadow: 3,
      position: "relative",
      transition: 'box-shadow 0.3s',
      '&:hover': { boxShadow: 8 },
      display: 'flex',
      flexDirection: 'column',
      height: { xs: 270, sm: 320, md: 360 },
    }}
  >
    <Box sx={{ height: 140, background: `url(${image}) center/cover`, borderTopLeftRadius: 12, borderTopRightRadius: 12 }} />
    <CardContent sx={{ p: { xs: 0.4, sm: 2 }, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, minHeight: { xs: 32, sm: 40, md: 48 }, color: '#212529', fontSize: { xs: 15, sm: 16, md: 18 } }}>{title}</Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 1, sm: 2, md: 3 }, mb: 1, flexWrap: 'wrap' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#5A69F2' }}>
          <MenuBookIcon sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }} />
          <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 500, fontSize: { xs: '0.65rem', sm: '0.75rem' } }}>
            {lessons} <span style={{ fontSize: '0.65rem' }}>Lessons</span>
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#5A69F2' }}>
          <GroupIcon sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }} />
          <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 500, fontSize: { xs: '0.65rem', sm: '0.75rem' } }}>
            {students} <span style={{ fontSize: '0.65rem' }}>Students</span>
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#5A69F2' }}>
          <BarChartIcon sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }} />
          <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 500, fontSize: { xs: '0.65rem', sm: '0.75rem' } }}>
            <span style={{ fontSize: '0.65rem' }}>{level}</span>
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} sx={{ color: i < rating ? "#FFD600" : "#e0e0e0", fontSize: { xs: 16, sm: 18, md: 20 } }} />
        ))}
      </Box>
      <Button variant="contained" endIcon={<ChevronRightIcon />} sx={{ mt: 1, fontWeight: 600, borderRadius: 2, fontSize: { xs: 9, sm: 10 }, py: 1, px: 2, bgcolor: "#212529", color: "#fff", '&:hover': { bgcolor: "#000" }, width: { xs: '100%', sm: '60%', md: '50%' }, alignSelf: { xs: 'center', sm: 'flex-start' } }}>
        Start course
      </Button>
    </CardContent>
  </Card>
);

const TopCoursesSlider = () => (
  <Box sx={{ py: { xs: 3, sm: 4, md: 6 }, bgcolor: "#fff" }}>
    <Box sx={{ display: "flex", flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'flex-start', sm: 'center' }, justifyContent: "space-between", mb: 3, px: { xs: 1, sm: 2 } }}>
      <Typography variant="h5" sx={{ fontWeight: 700, fontSize: { xs: 18, sm: 22, md: 28 }, mb: { xs: 1, sm: 0 } }}>
        Top Courses
      </Typography>
      <Box sx={{ display: "flex", gap: 1, alignSelf: { xs: 'flex-end', sm: 'center' } }}>
        <Avatar sx={{ bgcolor: "#e3e3e3", color: "#007bff", width: 32, height: 32 }}>
          <ChevronLeftIcon sx={{ fontSize: 20 }} />
        </Avatar>
        <Avatar sx={{ bgcolor: "#e3e3e3", color: "#007bff", width: 32, height: 32 }}>
          <ChevronRightIcon sx={{ fontSize: 20 }} />
        </Avatar>
      </Box>
    </Box>
    <Carousel
      indicators={false}
      navButtonsAlwaysVisible={false}
      autoPlay={false}
      animation="slide"
      sx={{ width: "100%" }}
      navButtonsWrapperProps={{ style: { display: "none" } }}
      cycleNavigation={false}
      swipe={true}
      fullHeightHover={false}
      height={400}
    >
      <Box sx={{
        display: "flex",
        justifyContent: { xs: 'flex-start', sm: 'center' },
        gap: { xs: 1, sm: 2, md: 3 },
        px: { xs: 1, sm: 0 },
        overflowX: { xs: 'auto', sm: 'unset' },
      }}>
        {topCourses.map((course, idx) => (
          <CourseCard key={idx} {...course} />
        ))}
      </Box>
    </Carousel>
  </Box>
);

export default TopCoursesSlider;
