import React from "react";
import Box from "@mui/material/Box";
import ContactUs from "../components/ContactUs";
import HomepageReviews from "../components/HomepageReviews";
import NewsletterSignup from "../components/NewsletterSignup";
import HomepageFeatures from "../components/HomepageFeatures";
import TopCoursesSlider from "../components/TopCoursesSlider";
import CourseSearchBar from "../components/CourseSearchBar";
import WorkshopPromo from "../components/WorkshopPromo";
import BannerCarousel from "../components/BannerCarousel";
import DirectLine from "../components/DirectLine";
import OurPotentialPartners from "../components/OurPotentialPartners";

const bannerSlides = [
  {
    title: "Welcome to Workiy Academy",
    subtitle:
      "Unlock your future with cutting-edge AI courses taught by industry experts. Learn, build, and grow your career with us!",
    button: "View Courses",
    buttonHref: "#courses",
    bg: "linear-gradient(90deg, #007bff 100%, #212529 100%)",
    image: "https://i.ibb.co/MDCDzSXP/banner.jpg",
  },
  {
    title: "Master AI & Machine Learning",
    subtitle:
      "Join 100,000+ learners and get hands-on with real-world projects and expert mentorship.",
    button: "Explore Programs",
    buttonHref: "#courses",
    bg: "linear-gradient(90deg, #00c6ff 0%, #007bff 100%)",
    image: "https://i.ibb.co/MDCDzSXP/banner.jpg",
  },
  {
    title: "Future-Proof Your Career",
    subtitle:
      "From fundamentals to advanced topics, our courses are designed for every learner.",
    button: "Start Learning",
    buttonHref: "#courses",
    bg: "linear-gradient(90deg, #007bff 0%, #00c6ff 100%)",
    image: "https://i.ibb.co/MDCDzSXP/banner.jpg",
  },
];

const Home = () => (
  <Box
    sx={{
      minHeight: "100vh",
      m: 0,
      p: 0,
      bgcolor: "#fff",
      color: "#ffc03d",
      overflowX: 'hidden',
    }}
  >
    <Box sx={{ width: "100%", p: 0, m: 0 }}>
      <BannerCarousel slides={bannerSlides} />
    </Box>
    <OurPotentialPartners />
    <CourseSearchBar />
    <TopCoursesSlider />
    <NewsletterSignup />
    <HomepageFeatures />
    <WorkshopPromo />
    <HomepageReviews />
    <DirectLine />
    <ContactUs />
  </Box>
);

export default Home;
