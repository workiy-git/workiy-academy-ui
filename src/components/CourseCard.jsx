import React from "react";
import { Card, CardContent, Typography, Chip, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
const buttonName = "Read More";
const CourseCard = ({ course }) => {
  const navigate = useNavigate();
  const target = course.path ? (course.path.startsWith('/') ? course.path : `/courses/${course.path}`) : '/courses';
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 4,
        width: { xs: '100%', sm: 220, md: 240, lg: 260 },
        maxWidth: { xs: '100%', sm: 188, md: 216, lg: 245 },
        minHeight: 130,
        height: 'auto',
        bgcolor: '#fff',
        boxShadow: '0px 4px 24px rgba(26, 35, 126, 0.08)',
        transition: 'transform 0.2s, box-shadow 0.2s',
        mx: 'auto',
        p: { xs: 0.8, sm: 1.6, md: 2, lg: 2.4 },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0px 8px 32px rgba(26, 35, 126, 0.16)',
        },
      }}
    >
      <CardContent sx={{ p: 0 }}>
        <Box sx={{ width: '100%', height: { xs: 65, sm: 79, md: 94, lg: 101 }, display: 'flex', justifyContent: 'center', alignItems: 'center', mb: { xs: 1.4, sm: 1.8, md: 2.1 } }}>
          <img
            src={course.image}
            alt={course.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderTopLeftRadius: 10, borderTopRightRadius: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, display: 'block' }}
          />
        </Box>
        <Typography
          variant="h6"
          sx={{
            color: '#22223b',
            fontWeight: 700,
            mb: { xs: 0.5, sm: 0.7, md: 1 },
            fontSize: { xs: '1.05rem', sm: '1.15rem', md: '1.25rem', lg: '1.35rem' },
            fontFamily: 'Inter, sans-serif',
            textAlign: 'left',
            letterSpacing: { xs: '0.01em', sm: '0.02em', md: '0.03em' },
            lineHeight: { xs: 1.15, sm: 1.18, md: 1.22 },
            wordBreak: 'break-word',
          }}
          gutterBottom
        >
          {course.title}
        </Typography>
        <Typography>
          {course.duration} | {course.level}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: { xs: 1, sm: 1.2, md: 1.5 },
            fontSize: { xs: '0.92rem', sm: '1.02rem', md: '1.08rem', lg: '1.12rem' },
            fontFamily: 'Inter, sans-serif',
            textAlign: 'left',
            letterSpacing: { xs: '0.01em', sm: '0.015em', md: '0.02em' },
            lineHeight: { xs: 1.35, sm: 1.38, md: 1.42 },
            wordBreak: 'break-word',
          }}
        >
          {course.description}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, mb: 2, justifyContent: 'left' }}>
          {[...Array(course.rating)].map((_, i) => (
            <span key={i} style={{ fontSize: 18, color: '#FFD700', marginRight: 2 }}>⭐</span>
          ))}
        </Box>
        <Button onClick={() => navigate(target)}
          variant="outlined"
          color="primary"
          fullWidth
          sx={{
            fontWeight: 700,
            borderRadius: 2,
            fontSize: { xs: '0.86rem', sm: '0.95rem', md: '1.01rem', lg: '1.06rem' },
            fontFamily: 'Inter, sans-serif',
            borderColor: '#22223b',
            color: '#22223b',
            py: { xs: 0.54, sm: 0.63, md: 0.72 },
            mt: { xs: 0.5, sm: 0.7, md: 1 },
            letterSpacing: { xs: '0.01em', sm: '0.02em', md: '0.03em' },
            '&:hover': { bgcolor: '#22223b', color: '#fff' },
          }}
        >
          {buttonName}
        </Button>
      </CardContent>
    </Card>
  );
};
export default CourseCard;