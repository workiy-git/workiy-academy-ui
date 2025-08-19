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

const courses = [
  {
    title: "Introduction to Artificial Intelligence",
    description:
      "Master the fundamentals of AI, including machine learning basics, neural networks, and real-world applications.",
    image: "https://source.unsplash.com/400x200/?artificial-intelligence",
  },
  {
    title: "Machine Learning Fundamentals",
    description:
      "Learn supervised and unsupervised learning algorithms, data preprocessing, and model evaluation techniques.",
    image: "https://source.unsplash.com/400x200/?machine-learning",
  },
  {
    title: "Deep Learning with Neural Networks",
    description:
      "Explore convolutional neural networks, recurrent neural networks, and transformer architectures.",
    image: "https://source.unsplash.com/400x200/?neural-network",
  },
  {
    title: "Natural Language Processing (NLP)",
    description:
      "Build chatbots, sentiment analysis systems, and language models using modern NLP techniques.",
    image: "https://source.unsplash.com/400x200/?text-analysis",
  },
  {
    title: "Computer Vision & Image Recognition",
    description:
      "Develop image classification, object detection, and facial recognition systems using AI.",
    image: "https://i.ibb.co/DDf3TQzq/modern-education-banner-design.png",
  },
  {
    title: "AI for Business & Strategy",
    description:
      "Learn how to implement AI solutions in business, from automation to predictive analytics.",
    image: "https://i.ibb.co/rKb60RNF/unsplash-b-OKIpt-Pzd-Pk.png",
  },
  {
    title: "Reinforcement Learning",
    description:
      "Master Q-learning, policy gradients, and deep reinforcement learning for game AI and robotics.",
    image: "https://i.ibb.co/rKb60RNF/unsplash-b-OKIpt-Pzd-Pk.png",
  },
  {
    title: "AI Ethics & Responsible AI",
    description:
      "Understand bias, fairness, transparency, and ethical considerations in AI development.",
    image: "https://i.ibb.co/rKb60RNF/unsplash-b-OKIpt-Pzd-Pk.png",
  },
];

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
