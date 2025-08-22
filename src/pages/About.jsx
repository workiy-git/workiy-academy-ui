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
  // Partners carousel logic
  const partners = [
    { src: "", alt: "Freshworks" },
    {
      src: "https://i.ibb.co/b5Df8Z9v/650c9830-9601-11eb-b593-972a7dbc1054-google-939112-1280.jpg",
      alt: "Google",
    },
    { src: "https://i.ibb.co/2YcHNgnn/OIP.webp[/img][/url]", alt: "Microsoft" },
    { src: "", alt: "PhonePe" },
    { src: "", alt: "PayPal" },
    { src: "", alt: "TCS" },
  ];
  const [partnerIndex, setPartnerIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const visibleCount = isMobile ? 1 : 3;

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
      desc: "Combine foundational knowledge with practical application.",
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
      desc: "We focus on hands-on, real-world projects from day one...",
    },
    {
      icon: <PsychologyIcon  sx={{ color: '#100E85' }}/> ,
      title: "Generative AI at the Core",
      desc: "While others talk about AI, we train you on practical Generative AI...",
    },
    {
      icon: <GroupsIcon  sx={{ color: '#100E85' }}/> ,
      title: "Mentors Who've Been There",
      desc: "Our trainers are industry professionals...",
    },
    {
      icon: <ConstructionIcon  sx={{ color: '#100E85' }}/> ,
      title: "Startup Energy. Personal Attention",
      desc: "We're young, fast-growing, and constantly adapting...",
    },
    {
      icon: <EmojiEventsIcon  sx={{ color: '#100E85' }}/> ,
      title: "Career-Driven Approach",
      desc: "Everything we teach is designed with your future in mind...",
    },
    {
      icon: <Diversity3Icon sx={{ color: '#100E85' }} />,
      title: "Inclusive Community",
      desc: "We foster a welcoming environment where everyone can thrive, collaborate, and innovate together.",
    },
  ];

  // Mission, Principles, and Values data
  const missionData = [
    "Turning learners into tech leaders",
    "Powering skills for today's demands",
    "Building hands-on industry expertise",
    "Guiding dreams into careers",
    "Shaping futures that last",
  ];
  const principlesData = [
    "Learning by Doing",
    "Industry Relevance",
    "Innovation First",
    "Personal Attention",
    "Integrity Always",
  ];
  const valuesData = [
    "Passion for learning",
    "Commitment to quality",
    "Innovation every day",
    "Respect for every learner",
    "Results that matter",
  ];

  return (
    <Box sx={{ p: { xs: 2, sm: 4 } }}>
      {/* Hero Section */}
      <Box 
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: { xs: 2, md: 6 },
          mb: { xs: 4, md: 8 },
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", mb: 2 }}
          >
            <span style={{ color: "#FFB703" }}>Where Learning</span>{" "}
            <span style={{ color: "#100E85" }}>Meets Doing.</span>
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            At Workiy Academy, we specialize in cutting-edge Generative AI
            education designed to prepare learners for the future of work. We
            believe learning should be practical, relevant, and engaging — not
            just theory, but skills you can immediately apply in real-world
            projects. Our courses are crafted by industry experts who actively
            work with the tools and technologies shaping the AI-driven world.
          </Typography>
        </Box>
        <Box
          component="img"
          src="https://i.ibb.co/67zHv4jL/images.jpg"
          alt="AI Brain Visual"
          sx={{
            flex: 1,
            maxWidth: { xs: "100%", md: 350 },
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
  <Box sx={{ p: 2, border: "1px solid #eee", borderRadius: 2, transition: 'all 0.3s', cursor: 'pointer', '&:hover': { boxShadow: '0 8px 30px rgba(255,183,3,0.35)', borderColor: '#FFB703', transform: 'translateY(-4px) scale(1.03)' } }}>
          <Typography variant="h5" sx={{ mb: 1, fontWeight: 'bold', color: '#100E85' }}>
            Our Principles
          </Typography>
          <ul>
            {principlesData.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </Box>
  <Box sx={{ p: 2, border: "1px solid #eee", borderRadius: 2, transition: 'all 0.3s', cursor: 'pointer', '&:hover': { boxShadow: '0 8px 30px rgba(255,183,3,0.35)', borderColor: '#FFB703', transform: 'translateY(-4px) scale(1.03)' } }}>
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
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: 2, sm: 4 },
          }}
        >
          { (
            <IconButton onClick={handlePrev} size="large">
              <ArrowBackIosNewIcon />
            </IconButton>
          )}
          <Box
            sx={{
              display: "flex",
              overflow: "hidden",
              justifyContent: "center",
              alignItems: "center",
              gap: { xs: 1, sm: 2 },
              minWidth: { xs: 120, sm: 320 },
            }}
          >
            {partners
              .slice(partnerIndex, partnerIndex + visibleCount)
              .concat(
                partnerIndex + visibleCount > partners.length
                  ? partners.slice(
                      0,
                      (partnerIndex + visibleCount) % partners.length
                    )
                  : []
              )
              .map((partner, idx) => (
                <Box
                  key={idx}
                  component="img"
                  src={partner.src}
                  alt={partner.alt}
                  sx={{
                    width: { xs: 80, sm: 100 },
                    height: { xs: 40, sm: 60 },
                    objectFit: "contain",
                    borderRadius: 2,
                    border: "1px solid #eee",
                    background: "#ffffffff",
                    transition: "all 0.3s",
                    cursor: 'pointer',
                    '&:hover': {
                      borderColor: '#FFB703',
                      transform: 'translateY(-2px) scale(1.05)',
                    },
                  }}
                />
              ))}
          </Box>
          {(
            <IconButton onClick={handleNext} size="large">
              <ArrowForwardIosIcon />
            </IconButton>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default About;
