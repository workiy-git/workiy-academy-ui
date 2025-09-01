import React, { useEffect, useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SchoolIcon from "@mui/icons-material/School";
import PsychologyIcon from "@mui/icons-material/Psychology";
import BuildIcon from "@mui/icons-material/Build";
import GroupsIcon from "@mui/icons-material/Groups";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ConstructionIcon from "@mui/icons-material/Construction";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import Diversity3Icon from '@mui/icons-material/Diversity3';

const About = () => {
  // Data-driven Hero Section
  const heroData = {
    title: [
      { text: 'Where Learning', color: '#FFB703' },
      { text: 'Meets Doing.', color: '#100E85' },
    ],
    description: `At Workiy Academy, we offer cutting-edge Generative AI courses designed to equip you with the most in-demand skills of today’s tech world. Our programs are built by industry experts to help you learn the concepts, apply them in practice, and master real-time project experience. We focus on hands-on learning where you work on live projects, solve real-world problems, and gain the confidence to apply AI solutions in practical scenarios. With guidance from experienced trainers, you’ll learn how to build and deploy AI-driven applications that match industry standards. Whether you’re a student, working professional, or beginner, our Gen AI course will help you gain future-ready skills and stay ahead in the evolving IT landscape.`
    ,   
    image: {
      src: 'https://i.ibb.co/67zHv4jL/images.jpg',
      alt: 'AI Brain Visual',
    },
  };
  // Partners carousel logic
  const partners = [
    { src: "https://i.ibb.co/DHDDq4rJ/images.png", alt: "Freshworks" },
    {
      src: "https://i.ibb.co/b5Df8Z9v/650c9830-9601-11eb-b593-972a7dbc1054-google-939112-1280.jpg",
      alt: "Google",
    },
    { src: "https://i.ibb.co/2YcHNgnn/OIP.webp[/img][/url]", alt: "Microsoft" },
    { src: "https://i.ibb.co/hFXzk0cx/phonepe3248.jpg", alt: "PhonePe" },
    { src: "https://i.ibb.co/GQfLyTdj/paypal-logo-transparent-free-png.webp", alt: "PayPal" },
    { src: "https://i.ibb.co/3ysyyQ2F/aaa245759726ab04e968b9bff4981a52.jpg", alt: "TCS" },
    { src: "https://i.ibb.co/TqJdTsPW/wipro-logo.jpg", alt: "Wipro" },
    { src: "https://i.ibb.co/p6GqLGgg/infosys-logo-PNG.png", alt: "Infosys" },
    { src: "https://i.ibb.co/G3cXxCV4/Accenture-Logo-Tagline-Slogan.webp", alt: "Accenture" },
    { src: "https://i.ibb.co/FLHCkTHm/VECTOR69-COM-Cognizant-Logo-Download-Free-Vector-CDR-Corel-Draw.webp", alt: "Cognizant" },
    { src: "https://i.ibb.co/G3Gh0ZhR/Hcl-logo-300x296.jpg", alt: "HCL" },
    { src: "https://i.ibb.co/hJ2X6P0j/Tech-Mahindra-true-color-logo-42.jpg", alt: "Tech Mahindra" },
    { src: "https://i.ibb.co/jkhQ4t2x/OIP-2.webp", alt: "Capgemini" },
    { src: "https://i.ibb.co/B1GSP0C/OIP-1.webp", alt: "IBM" },
    { src: "https://i.ibb.co/WWMFSX5H/OIP-3.webp", alt: "Oracle" },
  ];
  const [partnerIndex, setPartnerIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  // Responsive visibleCount based on screen width
  const [visibleCount, setVisibleCount] = useState(3);
  useEffect(() => {
    function updateVisibleCount() {
      if (window.innerWidth < 600) setVisibleCount(1);
      else if (window.innerWidth < 900) setVisibleCount(2);
      else if (window.innerWidth < 1200) setVisibleCount(3);
      else if (window.innerWidth < 1500) setVisibleCount(4);
      else setVisibleCount(5);
    }
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const handlePrev = () => {
    setPartnerIndex((prev) => (prev - 1 + partners.length) % partners.length);
  };
  const handleNext = () => {
    setPartnerIndex((prev) => (prev + 1) % partners.length);
  };

  // Animated stats logic
  const [learners, setLearners] = useState(0);
  const [projects, setProjects] = useState(0);
  const [courses, setCourses] = useState(0);

  useEffect(() => {
    let l = 0, p = 0, c = 0;
    const lTarget = 1000, pTarget = 100, cTarget = 20;
    const duration = 1200;
    const steps = 60;
    const lStep = Math.ceil(lTarget / steps);
    const pStep = Math.ceil(pTarget / steps);
    const cStep = Math.ceil(cTarget / steps);
    let count = 0;
    const interval = setInterval(() => {
      count++;
      l = Math.min(l + lStep, lTarget);
      p = Math.min(p + pStep, pTarget);
      c = Math.min(c + cStep, cTarget);
      setLearners(l);
      setProjects(p);
      setCourses(c);
      if (count >= steps) clearInterval(interval);
    }, duration / steps);
    return () => clearInterval(interval);
  }, []);

  const approachData = [
    {
      icon: <SchoolIcon sx={{ color: '#100E85' }}/> ,
      title: "Learn by Doing",
      desc: "Experience hands-on learning with real projects.",
    },
    {
      icon: <PsychologyIcon sx={{ color: '#100E85' }}/> ,
      title: "Blend Theory & Practice",
      desc: "A space to thrive, collaborate, and innovate.",
    },
    {
      icon: <BuildIcon sx={{ color: '#100E85' }}/> ,
      title: "Industry Alignment",
      desc: "Stay updated with skills that match industry needs.",
    },
    {
      icon: <GroupsIcon sx={{ color: '#100E85' }}/> ,
      title: "Expert Mentorship",
      desc: "Get guidance from experienced professionals.",
    },
    {
      icon: <TrendingUpIcon sx={{ color: '#100E85' }} />,
      title: "Continuous Growth",
      desc: "Develop skills for long-term career success.",
    },
    {
      icon: <SupportAgentIcon sx={{ color: '#100E85' }} />,
      title: "Personal Support",
      desc: "Receive help and feedback at every step.",
    },
    
  ];

  const differentData = [
    {
      icon: <AutoAwesomeIcon  sx={{ color: '#100E85' }}/> ,
      title: "Learning by Building",
      desc: "Gain real skills through hands-on projects that make learning practical and impactful.",
    },
    {
      icon: <PsychologyIcon  sx={{ color: '#100E85' }}/> ,
      title: "Generative AI at the Core",
      desc: "While others talk about AI, we put you ahead with real, practical Generative AI training.",
    },
    {
      icon: <GroupsIcon  sx={{ color: '#100E85' }}/> ,
      title: "Mentors Who've Been There",
      desc: "Learn directly from industry professionals who bring real-world experience into every lesson.",
    },
    {
      icon: <ConstructionIcon  sx={{ color: '#100E85' }}/> ,
      title: "Startup Energy. Personal Attention",
      desc: "We’re young, fast-growing, and adaptive — giving you the focus and care you deserve.",
    },
    {
      icon: <EmojiEventsIcon  sx={{ color: '#100E85' }}/> ,
      title: "Career-Driven Approach",
      desc: "Everything we teach is built with your future in mind, turning skills into real opportunities.",
    },
    {
      icon: <Diversity3Icon sx={{ color: '#100E85' }} />,
      title: "Inclusive Community",
      desc: "We foster a welcoming environment where everyone can thrive, collaborate, and innovate together.",
    },
  ];

  // Mission, Principles, and Values data
  const missionData = [
"Turning learners into future innovators",
"Fueling skills for today and tomorrow",
"Building strong hands-on industry expertise",
"Turning aspirations into thriving careers",
"Shaping futures with lasting impact",];
  const principlesData = [
    "Learning effectively by doing always",
    "Staying relevant to the industry",
    "Putting bold innovation first",
    "Giving personal attention",
    "Upholding integrity always",
  ];
  const valuesData = [
    "Showing true passion for learning",
    "Driving strong commitment to quality",
    "Embracing bold innovation every day",
    "Respecting each and every learner",
    "Delivering real results that matter",
  ];

  return (
    <Box sx={{ p: { xs: 2, sm: 4 } }}>
      {/* Hero Section (data-driven) */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: { xs: 2, md: 6 },
          mb: { xs: 4, md: 8 },
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
            {heroData.title.map((part, idx) => (
              <span key={idx} style={{ color: part.color }}>
                {part.text}{' '}
              </span>
            ))}
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            {heroData.description}
          </Typography>
        </Box>
        <Box
          component="img"
          src={heroData.image.src}
          alt={heroData.image.alt}
          sx={{
            flex: 1,
            maxWidth: { xs: '100%', md: 350 },
            borderRadius: 2,
          }}
        />
      </Box>

      {/* Mission, Principles, and Values Section */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
          gap: 3,
          mb: { xs: 4, md: 8 },
        }}
      >
  <Box sx={{ p: 2, border: "1px solid #eee", borderRadius: 2, transition: 'all 0.3s', cursor: 'pointer', '&:hover': { boxShadow: '0 8px 30px rgba(255, 184, 3, 0.38)', borderColor: '#FFB703',color: '#100E85',transform: 'translateY(-4px) scale(1.03)' } }}>
          <Typography variant="h5" sx={{ mb: 1, fontWeight: 'bold', color: '#100E85' }}>
            Our Mission
          </Typography>
          <ul>
            {missionData.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </Box>
  <Box sx={{ p: 2, border: "1px solid #eee", borderRadius: 2, transition: 'all 0.3s', cursor: 'pointer', '&:hover': { boxShadow: '0 8px 30px rgba(255, 184, 3, 0.38)', borderColor: '#FFB703',color: '#100E85',transform: 'translateY(-4px) scale(1.03)' } }}>
          <Typography variant="h5" sx={{ mb: 1, fontWeight: 'bold', color: '#100E85' }}>
            Our Principles
          </Typography>
          <ul>
            {principlesData.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </Box>
  <Box sx={{ p: 2, border: "1px solid #eee", borderRadius: 2, transition: 'all 0.3s', cursor: 'pointer', '&:hover': { boxShadow: '0 8px 30px rgba(255,183,3,0.35)', borderColor: '#FFB703', color: '#100E85',transform: 'translateY(-4px) scale(1.03)' } }}>
          <Typography variant="h5" sx={{ mb: 1, fontWeight: 'bold', color: '#100E85' }}>
            Our Values
          </Typography>
          <ul>
            {valuesData.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </Box>
      </Box>

      {/* Approach Section */}
      <Box sx={{ mb: { xs: 4, md: 8 } }}>
        <Typography
          variant="h4"
          sx={{ mb: 3, color: '#FFB703', fontWeight: 'bold', textAlign: 'center', background: 'none', textShadow: 'none', WebkitBackgroundClip: 'unset', WebkitTextFillColor: 'unset' }}
        >
          Our Approach
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" },
            gap: 3,
          }}
        >
          {approachData.map((box, idx) => (
            <Box
              key={idx}
              sx={{
                p: 2,
                border: "1px solid #eee",
                borderRadius: 2,
                textAlign: "center",
                transition: 'all 0.3s',
                cursor: 'pointer',
                '&:hover': {
                  boxShadow: '0 8px 30px rgba(255,183,3,0.35)',
                  color: '#100E85',
                  borderColor: '#FFB703',
                  transform: 'translateY(-4px) scale(1.03)',
                },
              }}
            >
              {box.icon}
              <Typography variant="h6" sx={{ mt: 1, mb: 1, fontWeight: 'bold', color: '#100E85' }}>
                {box.title}
              </Typography>
              <Typography variant="body2">{box.desc}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Different Section */}
      <Box sx={{ mb: { xs: 4, md: 8 } }}>
        <Typography
          variant="h4"
          sx={{ mb: 3, color: '#FFB703', fontWeight: 'bold', textAlign: 'center', background: 'none', textShadow: 'none', WebkitBackgroundClip: 'unset', WebkitTextFillColor: 'unset' }}
        >
          What Makes Us Different
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 3,
          }}
        >
          {differentData.map((item, idx) => (
            <Box
              key={idx}
              sx={{
                p: 2,
                border: "1px solid #eee",
                borderRadius: 2,
                transition: 'all 0.3s',
                cursor: 'pointer',
                '&:hover': {
                  boxShadow: '0 12px 40px 0 rgba(255,183,3,0.35), 0 2px 10px 0 rgba(16,14,133,0.10)',
                  borderColor: '#FFB703',
                  borderTop: '6px solid #FFB703',
                  color: '#100E85',
                  transform: 'translateY(-4px) scale(1.03)',
                },
              }}
            >
              {item.icon}
              <Typography
                variant="h6"
                sx={{ mt: 1, color: '#100E85', fontWeight: 'bold' }}
              >
                {item.title}
              </Typography>
              <Typography variant="body2">{item.desc}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Animated Stats Section */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 6, mb: 6, flexWrap: 'wrap' }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h3" sx={{ color: '#100E85', fontWeight: 'bold' }}>{learners}+</Typography>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Learners</Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h3" sx={{ color: '#100E85', fontWeight: 'bold' }}>{projects}+</Typography>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Real Time Projects</Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h3" sx={{ color: '#100E85', fontWeight: 'bold' }}>{courses}+</Typography>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>GEN AI Courses</Typography>
        </Box>
      </Box>

      {/* Partners Section */}
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          sx={{ mb: 3, color: '#FFB703', fontWeight: 'bold', textAlign: 'center', background: 'none', textShadow: 'none', WebkitBackgroundClip: 'unset', WebkitTextFillColor: 'unset' }}
        >
          Our Hiring Partners
        </Typography>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            minHeight: 80,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            id="partner-scroll"
            sx={{
              display: 'flex',
              overflowX: 'auto',
              gap: 2,
              scrollBehavior: 'smooth',
              width: '100%',
              px: 5,
              scrollbarWidth: 'none', // Firefox
              msOverflowStyle: 'none', // IE/Edge
              '&::-webkit-scrollbar': { display: 'none' }, // Chrome/Safari
            }}
          >
            {partners.map((partner, idx) => (
              <Box
                key={idx}
                sx={{
                  width: 120,
                  height: 70,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 2,
                  border: '1px solid #eee',
                  background: '#fff',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                  p: 1,
                  m: 0,
                  flex: '0 0 auto',
                  '&:hover': {
                    borderColor: '#FFB703',
                    transform: 'translateY(-2px) scale(1.05)',
                  },
                }}
              >
                {partner.src ? (
                  <Box
                    component="img"
                    src={partner.src}
                    alt={partner.alt}
                    sx={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                      m: 0,
                    }}
                  />
                ) : (
                  <Typography variant="body2" sx={{ color: '#aaa', fontWeight: 500 }}>
                    {partner.alt}
                  </Typography>
                )}
              </Box>
            ))}
          </Box>
          {/* Arrows only if overflow */}
          <IconButton
            onClick={() => {
              const el = document.getElementById('partner-scroll');
              if (el) el.scrollBy({ left: -150, behavior: 'smooth' });
            }}
            size="large"
            sx={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2,
              background: '#fff',
              boxShadow: 1,
              display: { xs: 'flex', sm: 'flex' },
              '&:hover': { background: '#FFB703', color: '#100E85' },
              opacity: 0.8,
            }}
            aria-label="Previous"
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              const el = document.getElementById('partner-scroll');
              if (el) el.scrollBy({ left: 150, behavior: 'smooth' });
            }}
            size="large"
            sx={{
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2,
              background: '#fff',
              boxShadow: 1,
              display: { xs: 'flex', sm: 'flex' },
              '&:hover': { background: '#FFB703', color: '#100E85' },
              opacity: 0.8,
            }}
            aria-label="Next"
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
